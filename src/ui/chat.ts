/**
 * @module ui/chat
 * LLM chat advisor interface — send, receive, persist, restore.
 */

import { marked } from "marked";
import DOMPurify from "dompurify";
import {
  LLMService,
  LLM_PROVIDERS,
  LLMRequestError,
} from "../services";
import { formatForLLMCompact } from "../services/marketDataFormatter";
import {
  LS_API_KEY,
  LS_PROVIDER,
  LS_MODEL,
  LS_ENDPOINT,
  LS_CHAT_HISTORY,
  MAX_SAVED_MESSAGES,
} from "./constants";
import { getEls } from "./domRefs";
import { getProviderById } from "./settings";
import {
  getLLM,
  setLLM,
  getLatestLLMContext,
  getLatestMarketSummary,
  getLatestNewsContext,
  getLatestTopItems,
} from "./state";
import { getLastAllocations } from "./allocation";

// ─── LLM Instance ───────────────────────────────────────────────────────────

function resolvedLLMConfig(): { endpoint: string; model: string } {
  const providerId = localStorage.getItem(LS_PROVIDER) ?? LLM_PROVIDERS[0].id;
  const provider = getProviderById(providerId);

  const modelOverride = (localStorage.getItem(LS_MODEL) ?? "").trim();
  const customEndpoint = (localStorage.getItem(LS_ENDPOINT) ?? "").trim();

  const endpoint =
    provider.id === "custom"
      ? customEndpoint || "http://localhost:1234/v1/chat/completions"
      : provider.endpoint;

  const model = modelOverride || provider.defaultModel;

  return { endpoint, model };
}

function ensureLLMService(): LLMService {
  const apiKey = (localStorage.getItem(LS_API_KEY) ?? "").trim();
  const config = { apiKey, ...resolvedLLMConfig() };

  let llm = getLLM();
  if (!llm) {
    llm = new LLMService(config);
    setLLM(llm);
  }
  return llm;
}

// ─── Chat Helpers ───────────────────────────────────────────────────────────

function appendMessage(
  kind: "user" | "assistant" | "system" | "error" | "thinking",
  text: string,
): HTMLDivElement {
  const els = getEls();
  const div = document.createElement("div");
  div.className = `chat-msg ${kind}`;
  if (kind === "assistant") {
    const raw = marked.parse(text) as string;
    div.innerHTML = DOMPurify.sanitize(raw, { USE_PROFILES: { html: true } });
  } else {
    div.textContent = text;
  }
  els.chatHistory.appendChild(div);
  scrollChatToBottom();
  return div;
}

function removeMessage(el: HTMLElement): void {
  el.remove();
}

function scrollChatToBottom(): void {
  getEls().chatHistory.scrollTop = getEls().chatHistory.scrollHeight;
}

function setInputLock(locked: boolean): void {
  const els = getEls();
  els.chatInput.disabled = locked;
  els.chatSendBtn.disabled = locked;
}

function formatLLMError(err: LLMRequestError): string {
  switch (err.status) {
    case 401:
      return "Authentication failed \u2014 double-check your API key in \u2699 Settings.";
    case 403:
      return "Access denied \u2014 your API key may lack the required permissions.";
    case 429:
      return "Rate limited \u2014 the API quota has been exceeded. Wait a moment and try again.";
    default:
      return err.status >= 500
        ? "The LLM provider is experiencing issues. Try again later."
        : `LLM request failed (HTTP ${err.status}). Check the console for details.`;
  }
}

// ─── Send ───────────────────────────────────────────────────────────────────

async function handleSend(): Promise<void> {
  const els = getEls();
  const query = els.chatInput.value.trim();
  if (!query) return;

  const apiKey = (localStorage.getItem(LS_API_KEY) ?? "").trim();
  const providerId = localStorage.getItem(LS_PROVIDER) ?? LLM_PROVIDERS[0].id;
  if (!apiKey && providerId !== "custom") {
    appendMessage("error", "No API key configured. Open \u2699 Settings and save a key first.");
    return;
  }

  appendMessage("user", query);
  els.chatInput.value = "";

  setInputLock(true);
  const thinkingEl = appendMessage("thinking", "Thinking");

  try {
    const service = ensureLLMService();
    const newsCtx = els.newsContextToggle.checked ? getLatestNewsContext() : undefined;

    // Build market context: use UI-filtered items if the sync toggle is on,
    // otherwise fall back to the pre-built full top-50 context.
    let marketCtx: string;
    if (els.syncFiltersToggle.checked) {
      const filtered = getLatestTopItems();
      marketCtx = filtered.length > 0
        ? formatForLLMCompact(filtered)
        : getLatestLLMContext() || getLatestMarketSummary();
    } else {
      marketCtx = getLatestLLMContext() || getLatestMarketSummary();
    }

    // Include the most recent Capital Allocation plan when one exists.
    const allocations = getLastAllocations();
    const allocCtx = allocations.length > 0 ? allocations : undefined;

    const advice = await service.generateAdvice(query, marketCtx, newsCtx, allocCtx);
    removeMessage(thinkingEl);
    appendMessage("assistant", advice);

    persistChatHistory();
  } catch (err) {
    removeMessage(thinkingEl);
    if (err instanceof LLMRequestError) {
      console.error(`[UIService] LLM error (HTTP ${err.status}):`, err.message);
      appendMessage("error", formatLLMError(err));
    } else {
      console.error("[UIService] Chat pipeline error:", err);
      appendMessage("error", `Unexpected error \u2014 see browser console.`);
    }
  } finally {
    setInputLock(false);
    scrollChatToBottom();
  }
}

// ─── Persistence ────────────────────────────────────────────────────────────

function extractPlayerQuestion(content: string): string {
  const marker = "=== PLAYER QUESTION ===";
  const idx = content.indexOf(marker);
  if (idx === -1) return content;
  return content.slice(idx + marker.length).trim();
}

function persistChatHistory(): void {
  const llm = getLLM();
  if (!llm) return;

  const all = llm.messages;
  const nonSystem = all.filter((m) => m.role !== "system");
  const trimmed = nonSystem.slice(-MAX_SAVED_MESSAGES);

  const cleaned = trimmed.map((m) => {
    if (m.role === "user") {
      return { role: m.role, content: extractPlayerQuestion(m.content) };
    }
    return { role: m.role, content: m.content };
  });

  try {
    localStorage.setItem(LS_CHAT_HISTORY, JSON.stringify(cleaned));
  } catch (err) {
    console.warn("[UIService] Could not persist chat history:", err);
  }
}

export function restoreChatHistory(): void {
  const raw = localStorage.getItem(LS_CHAT_HISTORY);
  if (!raw) return;

  try {
    const saved: { role: string; content: string }[] = JSON.parse(raw);
    if (!Array.isArray(saved) || saved.length === 0) return;

    for (const msg of saved) {
      if (msg.role === "user" || msg.role === "assistant") {
        appendMessage(msg.role as "user" | "assistant", msg.content);
      }
    }

    const service = ensureLLMService();
    const chatMessages = saved
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));
    service.loadHistory(chatMessages);

    scrollChatToBottom();
    console.log(`[UIService] Restored ${chatMessages.length} chat messages from localStorage.`);
  } catch (err) {
    console.warn("[UIService] Failed to parse saved chat history:", err);
    localStorage.removeItem(LS_CHAT_HISTORY);
  }
}

// ─── Event Binding ──────────────────────────────────────────────────────────

export function bindChatEvents(): void {
  const els = getEls();
  els.chatSendBtn.addEventListener("click", handleSend);
  els.chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });
}

export function bindClearChat(): void {
  const els = getEls();
  els.clearChatBtn.addEventListener("click", () => {
    els.chatHistory.innerHTML = "";
    localStorage.removeItem(LS_CHAT_HISTORY);
    const llm = getLLM();
    if (llm) llm.clearHistory();
    console.log("[UIService] Chat history cleared.");
  });
}
