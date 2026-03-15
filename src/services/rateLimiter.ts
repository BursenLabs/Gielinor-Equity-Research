/**
 * @module services/rateLimiter
 * Centralised rate-limit, retry, and request-pacing logic extracted from
 * {@link WeirdGloopService}.
 *
 * All state is **static** so it is shared across every service instance in
 * the same browser session — a 429 in one API call pauses all subsequent
 * requests regardless of the caller.
 */

import { JSON_ACCEPT_HEADER } from "./utils";

/**
 * Static rate-limiter that gates outbound HTTP requests to avoid 429s from
 * the Weird Gloop API (or any other rate-limited endpoint).
 *
 * Three layers of defence from burst to recovery:
 *  1. **Global request gate** — hard ≥{@link MIN_REQUEST_INTERVAL_MS} floor
 *     between consecutive requests (~10 req/s at 100 ms).
 *  2. **Proactive batch pause** — every {@link BATCH_PAUSE_EVERY} requests,
 *     inject a longer cooldown.
 *  3. **Shared 429 cooldown** — on any 429 / network error, all callers
 *     block until the cooldown expires.
 */
export class RateLimiter {
  // ── Constants ─────────────────────────────────────────────────────────

  /** Maximum retry attempts on 429 / transient errors. */
  static readonly MAX_RETRIES = 4;
  /** Base delay (ms) for exponential backoff — doubled on each retry. */
  static readonly BACKOFF_BASE_MS = 2_000;
  /**
   * Minimum interval (ms) between ANY two requests, across all callers.
   * Primary rate-limit control — do not lower below 100 ms (85 ms
   * triggers 429s).
   */
  static readonly MIN_REQUEST_INTERVAL_MS = 100;
  /** Proactive pause every N history requests. */
  static readonly BATCH_PAUSE_EVERY = 60;
  /** Pause duration (ms) when the batch threshold is reached. */
  static readonly BATCH_PAUSE_MS = 6_000;
  /** Reset the global counter if this much idle time passes between calls. */
  static readonly WINDOW_RESET_MS = 30_000;

  // ── Shared mutable state (persists for browser session lifetime) ──────

  /** Earliest time (epoch ms) the next request may fire. */
  static nextRequestAt = 0;
  /** Running count of requests in the current rate-limit window. */
  static globalHistReqCount = 0;
  /** Timestamp of the last proactive batch pause. */
  static globalLastPauseTs = 0;
  /**
   * Shared cooldown timestamp — set by {@link fetchWithRetry} on 429/network
   * error.  All callers sleep until this timestamp passes.
   */
  static rateLimitCooldownUntil = 0;

  // ── Public helpers ────────────────────────────────────────────────────

  /**
   * Acquire the global rate-limit gate.
   * Guarantees at least {@link MIN_REQUEST_INTERVAL_MS} between any two
   * requests, regardless of how many callers are active.
   */
  static async acquireRequestSlot(): Promise<void> {
    const now = Date.now();
    if (now < RateLimiter.nextRequestAt) {
      await RateLimiter.sleep(RateLimiter.nextRequestAt - now);
    }
    // Reserve the next slot from whichever is later — now or the
    // previously scheduled slot — so back-to-back acquires don't
    // collapse into the same instant.
    RateLimiter.nextRequestAt =
      Math.max(Date.now(), RateLimiter.nextRequestAt) +
      RateLimiter.MIN_REQUEST_INTERVAL_MS;
  }

  /**
   * Fetch a URL with automatic retry + exponential backoff on 429 and
   * transient network errors.  Returns `null` when all retries are
   * exhausted so callers can degrade gracefully.
   *
   * @param url        - Fully-qualified URL to request.
   * @param maxRetries - Override for {@link MAX_RETRIES}.
   * @returns The successful `Response`, or `null` after all attempts fail.
   */
  static async fetchWithRetry(
    url: string,
    maxRetries: number = RateLimiter.MAX_RETRIES,
  ): Promise<Response | null> {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const resp = await fetch(url, {
          method: "GET",
          headers: JSON_ACCEPT_HEADER,
        });

        if (resp.ok) return resp;

        // Rate-limited — signal all callers to pause, then back off and retry.
        if (resp.status === 429) {
          const delay = RateLimiter.BACKOFF_BASE_MS * Math.pow(2, attempt);
          RateLimiter.rateLimitCooldownUntil = Math.max(
            RateLimiter.rateLimitCooldownUntil,
            Date.now() + delay + 5_000,
          );
          console.warn(
            `[RateLimiter] 429 rate-limited (attempt ${attempt + 1}/${maxRetries + 1}). ` +
            `Waiting ${(delay / 1000).toFixed(1)}s before retry…`
          );
          await RateLimiter.sleep(delay);
          continue;
        }

        // Non-retryable HTTP error.
        console.error(`[RateLimiter] HTTP ${resp.status} for ${url.slice(0, 120)}`);
        return null;
      } catch (err) {
        // Network error — typically a 429 whose CORS headers the server
        // omitted, causing the browser to block before we see the status.
        const delay = RateLimiter.BACKOFF_BASE_MS * Math.pow(2, attempt);
        RateLimiter.rateLimitCooldownUntil = Math.max(
          RateLimiter.rateLimitCooldownUntil,
          Date.now() + delay + 5_000,
        );
        console.warn(
          `[RateLimiter] Network error (attempt ${attempt + 1}/${maxRetries + 1}). ` +
          `Waiting ${(delay / 1000).toFixed(1)}s… [${(err as Error).message}]`
        );
        await RateLimiter.sleep(delay);
      }
    }
    console.error(`[RateLimiter] All ${maxRetries + 1} attempts failed for ${url.slice(0, 120)}`);
    return null;
  }

  /** Promise-based sleep helper. */
  static sleep(ms: number): Promise<void> {
    return new Promise((r) => setTimeout(r, ms));
  }
}
