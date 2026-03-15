/**
 * @module ui/modals/setupGuideModal
 * Setup Guide modal — per-provider API key instructions + comparison table.
 */

import { LLM_PROVIDERS } from "../../services";
import { costTierBadge, getProviderById } from "../settings";
import { getEls } from "../domRefs";
import { singletonModal } from "./modalBase";

const ensureSetupGuideModal = singletonModal({
  backdropClass: "setup-guide-backdrop",
  modalClass: "setup-guide-modal",
  ariaLabel: "API key setup guide",
});

const SETUP_GUIDES: Record<string, { steps: string[]; note?: string }> = {
  groq: {
    steps: [
      'Go to <a href="https://console.groq.com" target="_blank" rel="noopener">console.groq.com</a> and click <strong>Sign Up</strong> (Google / GitHub / email).',
      "No credit card is required \u2014 the free tier is generous enough for this plugin.",
      'Once logged in, navigate to <strong>API Keys</strong> in the left sidebar (or visit <a href="https://console.groq.com/keys" target="_blank" rel="noopener">console.groq.com/keys</a>).',
      'Click <strong>Create API Key</strong>, give it a name (e.g. "GE Analyzer"), and copy the key.',
      "Paste the key into the <em>API Key</em> field above and click <strong>Save</strong>.",
      "Select a model (the default <strong>Llama 3.1 8B Instant</strong> works great) and you\u2019re ready to go!",
    ],
    note: "Groq\u2019s free tier allows thousands of requests per day with fast inference \u2014 perfect for this plugin. Rate limits reset daily.",
  },
  openai: {
    steps: [
      'Go to <a href="https://platform.openai.com/signup" target="_blank" rel="noopener">platform.openai.com</a> and create an account.',
      "Add a payment method under <strong>Settings \u2192 Billing</strong>.",
      'Navigate to <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener">API Keys</a> and click <strong>Create new secret key</strong>.',
      "Copy the key, paste it above, and click <strong>Save</strong>.",
    ],
    note: "OpenAI charges per token. GPT-4o Mini is very affordable for this use case.",
  },
  openrouter: {
    steps: [
      'Go to <a href="https://openrouter.ai" target="_blank" rel="noopener">openrouter.ai</a> and sign up.',
      "Some models (e.g. Llama 3 8B) are free to use \u2014 no payment needed.",
      'Navigate to <a href="https://openrouter.ai/keys" target="_blank" rel="noopener">Keys</a> and create a new API key.',
      "Paste the key above and click <strong>Save</strong>.",
    ],
    note: "OpenRouter aggregates many providers. Look for the \u26A1 icon on their site to find free models.",
  },
  together: {
    steps: [
      'Go to <a href="https://api.together.xyz" target="_blank" rel="noopener">api.together.xyz</a> and create an account.',
      "New accounts receive <strong>$5 in free credit</strong> \u2014 no card required.",
      'Navigate to <a href="https://api.together.xyz/settings/api-keys" target="_blank" rel="noopener">Settings \u2192 API Keys</a> and create a key.',
      "Paste the key above and click <strong>Save</strong>.",
    ],
  },
  mistral: {
    steps: [
      'Go to <a href="https://console.mistral.ai" target="_blank" rel="noopener">console.mistral.ai</a> and create an account.',
      'Navigate to <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">API Keys</a> and generate a key.',
      "Paste the key above and click <strong>Save</strong>.",
    ],
    note: "Mistral offers competitive per-token pricing, especially for their smaller models.",
  },
};

/** Show the setup guide modal for the currently selected LLM provider. */
export function showSetupGuide(): void {
  const els = getEls();
  const provider = getProviderById(els.providerSelect.value);
  const { backdrop, content } = ensureSetupGuideModal();
  const modal = content;

  const guide = SETUP_GUIDES[provider.id];
  const badge = costTierBadge(provider.costTier);

  let html = '<div class="setup-guide-header">';
  html += `<h3>Setup Guide: ${provider.label}</h3>`;
  html += '<button class="setup-guide-close" aria-label="Close">\u00D7</button>';
  html += "</div>";

  html += `<div class="setup-guide-tier tier-${provider.costTier}">`;
  html += `<span class="tier-badge">${badge}</span>`;
  html += `<span>${provider.costNote}</span>`;
  html += "</div>";

  if (guide) {
    html += '<ol class="setup-guide-steps">';
    for (const step of guide.steps) {
      html += `<li>${step}</li>`;
    }
    html += "</ol>";
    if (guide.note) {
      html += `<div class="setup-guide-note">\uD83D\uDCA1 ${guide.note}</div>`;
    }
  } else {
    html += "<p>Visit your provider\u2019s dashboard to create an API key, then paste it into the API Key field and click Save.</p>";
  }

  if (provider.signupUrl) {
    html += `<a class="setup-guide-link" href="${provider.signupUrl}" target="_blank" rel="noopener">\u2192 Open ${provider.label} API Keys page</a>`;
  }

  html += '<div class="setup-guide-comparison">';
  html += "<h4>Provider Comparison</h4>";
  html += '<table class="provider-comparison-table"><thead><tr>';
  html += "<th>Provider</th><th>Cost</th><th>Notes</th>";
  html += "</tr></thead><tbody>";
  for (const p of LLM_PROVIDERS) {
    if (p.id === "custom") continue;
    const isActive = p.id === provider.id;
    const rowBadge = costTierBadge(p.costTier);
    html += `<tr class="${isActive ? "active-row" : ""}">`;
    html += `<td>${p.label}${p.id === "groq" ? " \u2B50" : ""}</td>`;
    html += `<td><span class="tier-badge-sm tier-${p.costTier}">${rowBadge}</span></td>`;
    html += `<td>${p.costNote}</td>`;
    html += "</tr>";
  }
  html += "</tbody></table>";
  html += "</div>";

  modal.innerHTML = html;

  const closeBtn = modal.querySelector(".setup-guide-close");
  closeBtn?.addEventListener("click", () => backdrop.classList.remove("visible"));

  backdrop.classList.add("visible");
}
