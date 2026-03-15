/**
 * @module conversationManager
 * Pure functions for managing LLM conversation history: trimming old
 * messages, stripping data blocks, and truncating oversized payloads.
 *
 * Extracted from {@link LLMService} so that conversation management
 * and HTTP transport are separate concerns.
 */

import type { ChatMessage } from "./types";

/**
 * Maximum number of user+assistant exchange pairs retained in the API
 * payload (on top of the system prompt). Older exchanges are dropped to
 * keep the request within provider size limits.
 */
export const MAX_HISTORY_PAIRS = 8;

/**
 * Maximum JSON body size (in bytes) we allow before truncating context.
 * Groq's gateway returns HTTP 413 above ~100 KB, but free-tier limits
 * vary by model.  50 KB provides a safe margin for all models.
 */
export const MAX_BODY_BYTES = 50_000;

/**
 * Regex that matches the `=== GRAND EXCHANGE DATA ===` block (including
 * any `=== RECENT RS3 NEWS ===` section that follows it) inside a user
 * message, leaving only the `=== PLAYER QUESTION ===` section.
 */
const DATA_BLOCK_RE =
  /=== GRAND EXCHANGE DATA ===[\s\S]*?(?==== PLAYER QUESTION ===)/;

/**
 * Build a size-efficient copy of `messages` for the API payload.
 *
 * 1. Keeps the system prompt verbatim.
 * 2. Caps non-system messages to the last `MAX_HISTORY_PAIRS * 2` entries.
 * 3. Strips the bulky data blocks from all user messages except the most
 *    recent one, retaining only the player question.
 *
 * @param messages - The full conversation history (system + user/assistant).
 * @returns A new `ChatMessage[]` safe to serialise and send.
 */
export function buildTrimmedHistory(messages: ChatMessage[]): ChatMessage[] {
  const system = messages[0]; // always the system prompt
  let rest = messages.slice(1);

  // Cap to the most recent exchanges.
  const maxNonSystem = MAX_HISTORY_PAIRS * 2;
  if (rest.length > maxNonSystem) {
    rest = rest.slice(rest.length - maxNonSystem);
  }

  // Find the index of the last user message (relative to `rest`).
  let lastUserIdx = -1;
  for (let i = rest.length - 1; i >= 0; i--) {
    if (rest[i].role === "user") {
      lastUserIdx = i;
      break;
    }
  }

  const trimmed: ChatMessage[] = [system];

  for (let i = 0; i < rest.length; i++) {
    const msg = rest[i];
    if (msg.role === "user" && i !== lastUserIdx) {
      // Strip data blocks, keep only the question portion.
      const stripped = msg.content.replace(DATA_BLOCK_RE, "").trim();
      trimmed.push({ role: "user", content: stripped });
    } else {
      trimmed.push(msg);
    }
  }

  return trimmed;
}

/**
 * Find the index of the last user message in a `ChatMessage[]`.
 * @returns Index, or -1 if none.
 */
export function findLastUserIdx(messages: ChatMessage[]): number {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === "user") return i;
  }
  return -1;
}

/**
 * Halve the market-data section of the user message at `idx`.
 *
 * Locates the `=== GRAND EXCHANGE DATA ===` block and keeps only the
 * first half of its lines (i.e. the top-ranked half of items).  Returns
 * a shallow copy of the array with the modified user message.
 */
export function halveMarketData(
  messages: ChatMessage[],
  idx: number,
): ChatMessage[] {
  const msg = messages[idx];
  const dataStart = msg.content.indexOf("=== GRAND EXCHANGE DATA ===");
  const questionStart = msg.content.indexOf("\n=== PLAYER QUESTION ===");

  if (dataStart < 0 || questionStart < 0) return messages; // safety

  const dataBlock = msg.content.slice(
    dataStart + "=== GRAND EXCHANGE DATA ===".length + 1,
    questionStart,
  );
  const lines = dataBlock.split("\n");
  const half = lines.slice(0, Math.max(Math.ceil(lines.length / 2), 5));

  const newContent =
    msg.content.slice(0, dataStart + "=== GRAND EXCHANGE DATA ===".length + 1) +
    half.join("\n") +
    `\n[Truncated to ${half.length} items to fit request limits]\n` +
    msg.content.slice(questionStart);

  const copy = [...messages];
  copy[idx] = { ...msg, content: newContent };
  return copy;
}
