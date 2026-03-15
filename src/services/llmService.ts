/**
 * @module LLMService
 * OpenAI-compatible chat-completion client for RAG synthesis.
 *
 * Responsibilities:
 *  - Construct a strict system prompt that grounds the LLM in provided data.
 *  - Build a well-typed `ChatCompletionRequest` from market data + wiki text.
 *  - Execute the POST via native `fetch` — no external SDK dependencies.
 *  - Surface descriptive typed errors for common failure modes (401, 429, etc.).
 *
 * Designed for Groq (default) but works with any OpenAI-compatible endpoint
 * (OpenAI, Together, Ollama, LM Studio, etc.) by overriding {@link LLMConfig}.
 */

import type {
  ChatCompletionRequest,
  ChatCompletionResponse,
  ChatMessage,
  LLMConfig,
} from "./types";
import { buildSystemMessage, buildUserMessage } from "./llmPromptBuilder";
import {
  MAX_BODY_BYTES,
  buildTrimmedHistory,
  findLastUserIdx,
  halveMarketData,
} from "./conversationManager";

/** Sensible defaults — Groq free tier with `llama-3.1-8b-instant`. */
const DEFAULTS: LLMConfig = {
  apiKey: "",
  endpoint: "https://api.groq.com/openai/v1/chat/completions",
  model: "llama-3.1-8b-instant",
  temperature: 0.4,
  maxTokens: 1024,
};

/**
 * Service that synthesises GE market data and RS3 Wiki text into
 * actionable money-making advice via an LLM chat-completion API.
 *
 * @example
 * ```ts
 * const llm = new LLMService({ apiKey: "gsk_…" });
 * const advice = await llm.generateAdvice(
 *   "What should I flip right now?",
 *   formattedMarketData,
 * );
 * console.log(advice);
 * ```
 */
export class LLMService {
  private readonly endpoint: string;
  private readonly model: string;
  private readonly apiKey: string;
  private readonly temperature: number;
  private readonly maxTokens: number;

  /** Running conversation history sent with every request. */
  private _messages: ChatMessage[] = [];

  /**
   * @param config - All fields have sensible defaults targeting Groq's free tier.
   *                 For hosted providers, `apiKey` is required. For self-hosted
   *                 models the key may be omitted.
   */
  constructor(config: Partial<LLMConfig> = {}) {
    this.apiKey = config.apiKey ?? "";
    this.endpoint = config.endpoint ?? DEFAULTS.endpoint;
    this.model = config.model ?? DEFAULTS.model;
    this.temperature = config.temperature ?? DEFAULTS.temperature;
    this.maxTokens = config.maxTokens ?? DEFAULTS.maxTokens;

    // Seed the conversation with the system prompt.
    this._messages = [{ role: "system", content: buildSystemMessage() }];
  }

  // ─── Public API ───────────────────────────────────────────────────────

  /**
   * Read-only snapshot of the current conversation history.
   * Includes the system prompt, all user queries, and all assistant replies.
   */
  get messages(): readonly ChatMessage[] {
    return this._messages;
  }

  /**
   * Overwrite the internal conversation history with previously-saved data.
   * Use this to restore a session from `localStorage`.
   *
   * @param saved - A serialised `ChatMessage[]` array. If the first entry is
   *                not a system message, the current system prompt is
   *                prepended automatically.
   */
  loadHistory(saved: ChatMessage[]): void {
    if (saved.length === 0 || saved[0].role !== "system") {
      this._messages = [
        { role: "system", content: buildSystemMessage() },
        ...saved,
      ];
    } else {
      // Replace the saved system prompt with the canonical one (in case
      // rules changed between sessions).
      this._messages = [
        { role: "system", content: buildSystemMessage() },
        ...saved.slice(1),
      ];
    }
  }

  /**
   * Reset conversation history back to just the base system prompt.
   */
  clearHistory(): void {
    this._messages = [{ role: "system", content: buildSystemMessage() }];
  }

  /**
   * Generate a money-making advice response from the LLM.
   *
   * The method appends the user message to the running conversation,
   * sends the full history to the model, and appends the assistant's reply.
   *
   * @param query       - The player's free-form question
   *                      (e.g. "What should I flip right now?").
   * @param marketData  - Pre-formatted top-N market summary string produced
   *                      by {@link MarketAnalyzerService.formatForLLM}.
   * @param newsContext - Optional formatted recent RS3 news block from
   *                      {@link NewsService.formatForLLM}.  Included in the
   *                      user message so the LLM can correlate price moves
   *                      with game events.
   * @returns The assistant's generated advice text.
   * @throws {LLMRequestError} On HTTP-level failures (401, 429, 5xx, etc.).
   */
  async generateAdvice(
    query: string,
    marketData: string,
    newsContext?: string,
  ): Promise<string> {
    const userMsg = buildUserMessage(query, marketData, newsContext);
    this._messages.push({ role: "user", content: userMsg });

    // Build a trimmed copy of the history for the API payload.
    // - System prompt: kept as-is.
    // - Older user messages: data blocks stripped, only the player question retained.
    // - Most recent user message (the one we just pushed): full context kept.
    // - Assistant messages: kept as-is.
    // Additionally, cap conversation to the system prompt + last MAX_HISTORY_PAIRS
    // exchanges to bound payload size.
    const trimmed = buildTrimmedHistory(this._messages);

    let body: ChatCompletionRequest = {
      model: this.model,
      messages: trimmed,
      temperature: this.temperature,
      max_completion_tokens: this.maxTokens,
    };

    // Measure initial payload size.
    let jsonBody = JSON.stringify(body);
    const encoder = new TextEncoder();
    let byteLen = encoder.encode(jsonBody).length;

    console.log(
      `[LLMService] Sending ${trimmed.length} messages ` +
        `(${this._messages.length} in full history) — ` +
        `${(byteLen / 1024).toFixed(1)} KB payload — ` +
        `model: ${this.model}`
    );

    // Guard against oversized payloads.
    // Strategy: first halve market-data lines (up to 4×), then halve wiki
    // text (up to 4×).  This two-phase approach trims the two largest
    // variable-size sections progressively.
    if (byteLen > MAX_BODY_BYTES) {
      console.warn(
        `[LLMService] Payload too large (${(byteLen / 1024).toFixed(1)} KB > ` +
          `${(MAX_BODY_BYTES / 1024).toFixed(0)} KB limit). Truncating…`
      );
        const lastUserIdx = findLastUserIdx(trimmed);
      if (lastUserIdx >= 0) {
        let truncated = trimmed;

        // Phase 1: halve market data.
        for (let attempt = 0; attempt < 4 && byteLen > MAX_BODY_BYTES; attempt++) {
          truncated = halveMarketData(truncated, lastUserIdx);
          body = { ...body, messages: truncated };
          jsonBody = JSON.stringify(body);
          byteLen = encoder.encode(jsonBody).length;
          console.log(
            `[LLMService]   Market-data trim ${attempt + 1}: ${(byteLen / 1024).toFixed(1)} KB`
          );
        }

      }
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (this.apiKey) {
      headers["Authorization"] = `Bearer ${this.apiKey}`;
    }

    const response = await fetch(this.endpoint, {
      method: "POST",
      headers,
      body: jsonBody,
    });

    if (!response.ok) {
      // Remove the user message we just pushed so the history stays clean.
      this._messages.pop();
      await this.handleHttpError(response);
    }

    const json: ChatCompletionResponse = await response.json();

    const reply = json.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      this._messages.pop();
      throw new LLMRequestError(
        "LLM returned an empty or malformed response.",
        0,
        JSON.stringify(json)
      );
    }

    // Append the assistant's reply to the running history.
    this._messages.push({ role: "assistant", content: reply });

    if (json.usage) {
      console.debug(
        `[LLMService] Token usage — prompt: ${json.usage.prompt_tokens}, ` +
          `completion: ${json.usage.completion_tokens}, ` +
          `total: ${json.usage.total_tokens}.`
      );
    }

    return reply;
  }

  // ─── Private: Error Handling ──────────────────────────────────────────

  /**
   * Inspect a non-OK HTTP response and throw a descriptive
   * {@link LLMRequestError}.
   *
   * Common cases:
   * | Status | Likely cause                        |
   * |--------|-------------------------------------|
   * | 401    | Missing or invalid API key           |
   * | 403    | Key lacks required permissions       |
   * | 429    | Rate limit / quota exceeded          |
   * | 500+   | Upstream model or infra failure      |
   *
   * @param response - The `fetch` Response object with `ok === false`.
   * @throws {LLMRequestError} Always.
   */
  private async handleHttpError(response: Response): Promise<never> {
    let bodyText: string;
    try {
      bodyText = await response.text();
    } catch {
      bodyText = "[unable to read response body]";
    }

    const status = response.status;
    let hint: string;

    switch (status) {
      case 401:
        hint = "Unauthorized — check that your API key is valid and correctly configured.";
        break;
      case 403:
        hint = "Forbidden — the API key may lack the required permissions.";
        break;
      case 413:
        hint = "Request too large — conversation history exceeded the provider's size limit. Try clearing the chat and starting a new conversation.";
        break;
      case 429:
        hint = "Rate limited — you have exceeded the API quota. Wait and retry.";
        break;
      default:
        hint = status >= 500
          ? "Server error on the LLM provider side. Try again later."
          : status === 400
            ? "Bad request — the model may be deprecated or the request body is invalid. Try a different model."
            : `Unexpected HTTP ${status}.`;
    }

    throw new LLMRequestError(
      `[LLMService] ${hint} (HTTP ${status} ${response.statusText})`,
      status,
      bodyText
    );
  }
}

// ─── Custom Error Class ─────────────────────────────────────────────────────

/**
 * Typed error thrown by {@link LLMService} on HTTP or response-parsing failures.
 * Carries the HTTP status code and raw response body for upstream diagnostics.
 */
export class LLMRequestError extends Error {
  /** HTTP status code (0 if the failure was not HTTP-related). */
  readonly status: number;
  /** Raw response body text for debugging. */
  readonly responseBody: string;

  constructor(message: string, status: number, responseBody: string) {
    super(message);
    this.name = "LLMRequestError";
    this.status = status;
    this.responseBody = responseBody;
  }
}
