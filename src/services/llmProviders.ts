/**
 * @module llmProviders
 * Built-in LLM provider preset registry.
 * Extracted from types.ts to preserve SRP: types.ts holds only interfaces/types.
 */

import type { LLMProvider } from "./types";

/** Built-in provider presets. The last entry (`custom`) uses user-supplied values. */
export const LLM_PROVIDERS: readonly LLMProvider[] = [
  {
    id: "groq",
    label: "Groq",
    endpoint: "https://api.groq.com/openai/v1/chat/completions",
    defaultModel: "llama-3.1-8b-instant",
    keyPlaceholder: "gsk_…",
    models: [
      { id: "llama-3.1-8b-instant",         label: "Llama 3.1 8B Instant",      recommended: true },
      { id: "llama-3.3-70b-versatile",       label: "Llama 3.3 70B Versatile" },
      { id: "openai/gpt-oss-20b",            label: "GPT-OSS 20B" },
      { id: "openai/gpt-oss-120b",           label: "GPT-OSS 120B" },
      { id: "meta-llama/llama-4-scout-17b-16e-instruct", label: "Llama 4 Scout 17B (Preview)" },
      { id: "qwen/qwen3-32b",                label: "Qwen3 32B (Preview)" },
    ],
    costTier: "free",
    costNote: "Generous free tier — no credit card required",
    signupUrl: "https://console.groq.com/keys",
  },
  {
    id: "openai",
    label: "OpenAI",
    endpoint: "https://api.openai.com/v1/chat/completions",
    defaultModel: "gpt-4o-mini",
    keyPlaceholder: "sk-…",
    models: [
      { id: "gpt-4o-mini",   label: "GPT-4o Mini",   recommended: true },
      { id: "gpt-4o",        label: "GPT-4o" },
      { id: "gpt-4-turbo",   label: "GPT-4 Turbo" },
      { id: "gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
      { id: "o3-mini",       label: "o3-mini" },
    ],
    costTier: "paid",
    costNote: "Pay-as-you-go — requires billing setup",
    signupUrl: "https://platform.openai.com/api-keys",
  },
  {
    id: "openrouter",
    label: "OpenRouter",
    endpoint: "https://openrouter.ai/api/v1/chat/completions",
    defaultModel: "meta-llama/llama-3-8b-instruct",
    keyPlaceholder: "sk-or-…",
    models: [
      { id: "meta-llama/llama-3-8b-instruct",    label: "Llama 3 8B Instruct",    recommended: true },
      { id: "meta-llama/llama-3-70b-instruct",   label: "Llama 3 70B Instruct" },
      { id: "meta-llama/llama-3.1-8b-instruct",  label: "Llama 3.1 8B Instruct" },
      { id: "mistralai/mistral-7b-instruct",     label: "Mistral 7B Instruct" },
      { id: "google/gemma-2-9b-it",              label: "Gemma 2 9B" },
      { id: "openai/gpt-4o-mini",                label: "GPT-4o Mini (OpenAI)" },
    ],
    costTier: "free-tier",
    costNote: "Free tier for select models — credit for paid models",
    signupUrl: "https://openrouter.ai/keys",
  },
  {
    id: "together",
    label: "Together AI",
    endpoint: "https://api.together.xyz/v1/chat/completions",
    defaultModel: "meta-llama/Llama-3-8b-chat-hf",
    keyPlaceholder: "tok_…",
    models: [
      { id: "meta-llama/Llama-3-8b-chat-hf",    label: "Llama 3 8B Chat",    recommended: true },
      { id: "meta-llama/Llama-3-70b-chat-hf",   label: "Llama 3 70B Chat" },
      { id: "mistralai/Mixtral-8x7B-Instruct-v0.1", label: "Mixtral 8×7B" },
      { id: "togethercomputer/RedPajama-INCITE-7B-Chat", label: "RedPajama 7B" },
    ],
    costTier: "free-tier",
    costNote: "Free tier with $5 credit on signup",
    signupUrl: "https://api.together.xyz/settings/api-keys",
  },
  {
    id: "mistral",
    label: "Mistral AI",
    endpoint: "https://api.mistral.ai/v1/chat/completions",
    defaultModel: "mistral-small-latest",
    keyPlaceholder: "mis_…",
    models: [
      { id: "mistral-small-latest",  label: "Mistral Small",  recommended: true },
      { id: "mistral-medium-latest", label: "Mistral Medium" },
      { id: "mistral-large-latest",  label: "Mistral Large" },
      { id: "open-mistral-7b",       label: "Mistral 7B (Open)" },
      { id: "open-mixtral-8x7b",     label: "Mixtral 8×7B (Open)" },
    ],
    costTier: "low-cost",
    costNote: "Pay-as-you-go — competitively priced",
    signupUrl: "https://console.mistral.ai/api-keys",
  },
  {
    id: "custom",
    label: "Custom / Self-hosted",
    endpoint: "",
    defaultModel: "",
    keyPlaceholder: "(optional for local models)",
    models: [],
    costTier: "self-hosted",
    costNote: "Run your own model locally — no API cost",
  },
] as const;
