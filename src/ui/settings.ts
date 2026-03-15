/**
 * @module ui/settings
 * LLM provider settings: dropdown population, save/restore, key status,
 * and event binding for the settings panel.
 *
 * audit:no-op(SRP-2) — ~220 lines, single cohesive concern (provider
 * settings lifecycle). All functions share the same DOM fieldset and
 * localStorage save/restore flow.
 */

import type { LLMProvider } from "../services";
import { LLM_PROVIDERS } from "../services";
import {
  LS_ADVANCED_MODE,
  LS_API_KEY,
  LS_ENDPOINT,
  LS_LIMIT_RESET_NOTIFS,
  LS_MODEL,
  LS_NEWS_CONTEXT,
  LS_PROVIDER,
} from "./constants";
import { getEls } from "./domRefs";
import { setAdvancedMode, setLLM } from "./state";

// ─── Forward declarations ───────────────────────────────────────────────────

let _showSetupGuide: (() => void) | null = null;
export function setShowSetupGuideHook(fn: () => void): void { _showSetupGuide = fn; }

let _showAboutModal: (() => void) | null = null;
export function setShowAboutModalHook(fn: () => void): void { _showAboutModal = fn; }

let _showGuideModal: (() => void) | null = null;
export function setShowGuideModalHook(fn: () => void): void { _showGuideModal = fn; }

// ─── Cost tier badge ────────────────────────────────────────────────────────

export function costTierBadge(tier: string): string {
  switch (tier) {
    case "free":        return "\u2705 FREE";
    case "free-tier":   return "\uD83C\uDD93 Free Tier";
    case "low-cost":    return "\uD83D\uDCB2 Low Cost";
    case "paid":        return "\uD83D\uDCB3 Paid";
    case "self-hosted": return "\uD83D\uDDA5\uFE0F Self-hosted";
    default:            return "";
  }
}

// ─── Provider dropdown ──────────────────────────────────────────────────────

export function populateProviderDropdown(): void {
  const els = getEls();
  els.providerSelect.innerHTML = "";
  for (const p of LLM_PROVIDERS) {
    const opt = document.createElement("option");
    opt.value = p.id;
    const badge = costTierBadge(p.costTier);
    opt.textContent = badge ? `${p.label}  ${badge}` : p.label;
    if (p.id === "groq") opt.textContent += " \u2B50 Recommended";
    els.providerSelect.appendChild(opt);
  }
}

export function getProviderById(id: string): LLMProvider {
  return LLM_PROVIDERS.find((p) => p.id === id) ?? LLM_PROVIDERS[0];
}

// ─── Restore / Apply ────────────────────────────────────────────────────────

export function restoreSettings(): void {
  const els = getEls();
  const savedProvider = localStorage.getItem(LS_PROVIDER) ?? LLM_PROVIDERS[0].id;
  const savedModel    = localStorage.getItem(LS_MODEL) ?? "";
  const savedEndpoint = localStorage.getItem(LS_ENDPOINT) ?? "";
  const savedKey      = localStorage.getItem(LS_API_KEY) ?? "";

  els.providerSelect.value = savedProvider;
  els.modelInput.value = savedModel;
  els.customEndpointInput.value = savedEndpoint;
  els.apiKeyInput.value = savedKey;

  applyProviderUI(getProviderById(savedProvider));

  if (savedKey) {
    setKeyStatus("Key loaded from storage.", false);
  }

  // Buy-limit reset notifications toggle (default: enabled).
  const savedLimitNotifs = localStorage.getItem(LS_LIMIT_RESET_NOTIFS);
  els.limitResetNotifsToggle.checked = savedLimitNotifs !== "false";
  els.limitResetNotifsToggle.addEventListener("change", () => {
    localStorage.setItem(LS_LIMIT_RESET_NOTIFS, String(els.limitResetNotifsToggle.checked));
  });

  // RS3 news context toggle (default: enabled).
  const savedNewsCtx = localStorage.getItem(LS_NEWS_CONTEXT);
  els.newsContextToggle.checked = savedNewsCtx !== "false";
  els.newsContextToggle.addEventListener("change", () => {
    localStorage.setItem(LS_NEWS_CONTEXT, String(els.newsContextToggle.checked));
  });

  // Advanced mode toggle (default: disabled).
  const savedAdvanced = localStorage.getItem(LS_ADVANCED_MODE) === "true";
  els.advancedModeToggle.checked = savedAdvanced;
  setAdvancedMode(savedAdvanced);
  if (savedAdvanced) document.body.dataset.advanced = "true";
  else delete document.body.dataset.advanced;
  els.advancedModeToggle.addEventListener("change", () => {
    const on = els.advancedModeToggle.checked;
    setAdvancedMode(on);
    localStorage.setItem(LS_ADVANCED_MODE, String(on));
    if (on) document.body.dataset.advanced = "true";
    else delete document.body.dataset.advanced;
  });
}

export function applyProviderUI(provider: LLMProvider): void {
  const els = getEls();
  els.customEndpointGroup.classList.toggle("hidden", provider.id !== "custom");
  els.apiKeyInput.placeholder = provider.keyPlaceholder;
  els.modelInput.placeholder = provider.defaultModel || "(enter model name)";

  const badge = costTierBadge(provider.costTier);
  els.providerCostHint.textContent = badge ? `${badge} \u2014 ${provider.costNote}` : provider.costNote;
  els.providerCostHint.className = `provider-cost-hint tier-${provider.costTier}`;

  els.setupGuideBtn.classList.toggle("hidden", !provider.signupUrl);

  populateModelDatalist(provider);
}

export function populateModelDatalist(provider: LLMProvider): void {
  const els = getEls();
  els.modelOptions.innerHTML = "";

  for (const m of provider.models) {
    const opt = document.createElement("option");
    opt.value = m.id;
    opt.label = m.recommended ? `\u2605 ${m.label} (recommended)` : m.label;
    els.modelOptions.appendChild(opt);
  }
}

// ─── Save / Status ──────────────────────────────────────────────────────────

export function saveSettings(): void {
  const els = getEls();
  const providerId = els.providerSelect.value;
  const model    = els.modelInput.value.trim();
  const endpoint = els.customEndpointInput.value.trim();
  const key      = els.apiKeyInput.value.trim();

  localStorage.setItem(LS_PROVIDER, providerId);

  if (model) localStorage.setItem(LS_MODEL, model);
  else localStorage.removeItem(LS_MODEL);

  if (endpoint) localStorage.setItem(LS_ENDPOINT, endpoint);
  else localStorage.removeItem(LS_ENDPOINT);

  if (key.length === 0) {
    localStorage.removeItem(LS_API_KEY);
    setKeyStatus("Settings saved \u2014 key cleared.", false);
  } else {
    localStorage.setItem(LS_API_KEY, key);
    const provider = getProviderById(providerId);
    setKeyStatus(`Settings saved \u2713 (${provider.label})`, false);
  }

  // Invalidate cached LLM instance.
  setLLM(null);
}

export function setKeyStatus(msg: string, isError: boolean): void {
  const els = getEls();
  els.keyStatus.textContent = msg;
  els.keyStatus.classList.toggle("error", isError);
}

// ─── Event binding ──────────────────────────────────────────────────────────

function openSettings(): void {
  getEls().settingsBackdrop.classList.add("visible");
}

function closeSettings(): void {
  getEls().settingsBackdrop.classList.remove("visible");
}

export function bindSettingsEvents(): void {
  const els = getEls();

  // Open / close modal
  els.settingsBtn.addEventListener("click", openSettings);
  els.settingsCloseBtn.addEventListener("click", closeSettings);
  els.settingsBackdrop.addEventListener("click", (e) => {
    if (e.target === els.settingsBackdrop) closeSettings();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && els.settingsBackdrop.classList.contains("visible")) {
      closeSettings();
    }
  });

  els.saveKeyBtn.addEventListener("click", saveSettings);

  els.apiKeyInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveSettings();
  });
  els.modelInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveSettings();
  });
  els.customEndpointInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveSettings();
  });

  els.providerSelect.addEventListener("change", () => {
    const provider = getProviderById(els.providerSelect.value);
    applyProviderUI(provider);
    els.modelInput.value = "";
  });

  els.setupGuideBtn.addEventListener("click", () => _showSetupGuide?.());
  els.aboutBtn.addEventListener("click", () => _showAboutModal?.());
  els.guideBtn.addEventListener("click", () => _showGuideModal?.());
}


