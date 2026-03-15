/**
 * @module WeirdGloopService
 * HTTP client for the Weird Gloop RS3 Grand Exchange API.
 *
 * Responsibilities:
 *  - Accept an arbitrarily large list of item names.
 *  - Chunk them into batches of {@link WeirdGloopServiceConfig.batchSize} (default 100).
 *  - Fire all batches concurrently via `Promise.allSettled` so one failure
 *    does not abort the entire ingest.
 *  - Return a consolidated map of item → price record.
 *
 * @see https://api.weirdgloop.org/#/exchange
 */

import type {
  WeirdGloopLatestResponse,
  WeirdGloopHistoryEntry,
  WeirdGloopHistoryResponse,
  WeirdGloopPriceRecord,
  WeirdGloopServiceConfig,
  ProgressCallback,
} from "./types";
import { chunkArray } from "./utils";
import { RateLimiter } from "./rateLimiter";

/** Base URL for the Weird Gloop RS3 latest-price endpoint. */
const BASE_URL = "https://api.weirdgloop.org/exchange/history/rs/latest";

/**
 * Service class that encapsulates all communication with the Weird Gloop
 * Grand Exchange REST API.
 *
 * @example
 * ```ts
 * const api = new WeirdGloopService();
 * const prices = await api.fetchLatestPrices([
 *   "Blue partyhat", "Christmas cracker", "Bread",
 * ]);
 * console.log(prices.get("Bread")?.price);
 * ```
 */
export class WeirdGloopService {
  /** Maximum items per HTTP request. */
  private readonly batchSize: number;

  /**
   * Number of concurrent in-flight history requests.
   * The `/last90d` endpoint only accepts 1 item per request, so a small
   * concurrency pool hides per-request latency.  Kept at 3 to stay well
   * under the browser's 6 connections/origin limit while the global
   * request gate enforces the actual pacing.
   */
  private static readonly HISTORY_CONCURRENCY = 3;

  /**
   * Create a new service instance.
   * @param config - Optional overrides for batch size, etc.
   */
  constructor(config?: Partial<WeirdGloopServiceConfig>) {
    this.batchSize = config?.batchSize ?? 100;
  }

  // ─── Public API ───────────────────────────────────────────────────────

  /**
   * Fetch the latest GE snapshot for every item in {@link itemNames}.
   *
   * Items are batched into groups of {@link batchSize} and all batches are
   * dispatched concurrently.  Individual batch failures are logged to the
   * console but do **not** reject the returned promise — successfully
   * fetched records are always returned.
   *
   * @param itemNames - Canonical RS3 item names (case-sensitive as they
   *                    appear on the RS Wiki).
   * @returns A `Map<string, WeirdGloopPriceRecord>` keyed by item name.
   */
  async fetchLatestPrices(
    itemNames: string[]
  ): Promise<Map<string, WeirdGloopPriceRecord>> {
    if (itemNames.length === 0) {
      console.warn("[WeirdGloopService] fetchLatestPrices called with an empty item list.");
      return new Map();
    }

    const batches = chunkArray(itemNames, this.batchSize);
    console.log(
      `[WeirdGloopService] Fetching ${itemNames.length} items in ${batches.length} batch(es) of up to ${this.batchSize}…`
    );

    // Execute batches sequentially to stay within API rate limits.
    const consolidated = new Map<string, WeirdGloopPriceRecord>();

    for (let idx = 0; idx < batches.length; idx++) {
      try {
        const json = await this.fetchBatch(batches[idx], idx);
        for (const [name, record] of Object.entries(json)) {
          consolidated.set(name, record);
        }
      } catch (err) {
        console.error("[WeirdGloopService] Batch failed:", err);
      }
      // Brief pause between batches to avoid rate-limiting.
      if (idx < batches.length - 1) {
        await RateLimiter.sleep(300);
      }
    }

    console.log(
      `[WeirdGloopService] Successfully fetched ${consolidated.size} / ${itemNames.length} price records.`
    );
    return consolidated;
  }

  /**
   * Fetch up to 90 days of historical daily prices for every item in
   * {@link itemNames}.  The `/last90d` endpoint only accepts **one item per
   * request**, so items are dispatched via a concurrency-limited worker
   * pool gated by {@link acquireRequestSlot} to enforce a safe global
   * request rate.
   *
   * Individual failures are logged but do **not** reject the returned
   * promise — successfully fetched histories are always returned.
   *
   * @param itemNames - Canonical RS3 item names.
   * @param days      - Number of recent days to extract from the 90-day
   *                    window (default 30).  Pass 90 to keep the full range.
   * @returns A `Map<itemName, WeirdGloopHistoryEntry[]>` of chronological
   *          daily snapshots, filtered to the requested window.
   */
  async fetchHistoricalPrices(
    itemNames: string[],
    days: number = 30,
    onProgress?: ProgressCallback,
    pacing?: { batchPauseEvery?: number; batchPauseMs?: number },
  ): Promise<Map<string, WeirdGloopHistoryEntry[]>> {
    if (itemNames.length === 0) return new Map();

    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    const result = new Map<string, WeirdGloopHistoryEntry[]>();
    let skippedNotFound = 0;
    let skippedNoData = 0;
    let skippedEmpty = 0;
    let skippedRetry = 0;
    let completed = 0;

    const concurrency = WeirdGloopService.HISTORY_CONCURRENCY;
    const batchPauseEvery = pacing?.batchPauseEvery ?? RateLimiter.BATCH_PAUSE_EVERY;
    const batchPauseMs = pacing?.batchPauseMs ?? RateLimiter.BATCH_PAUSE_MS;

    console.log(
      `[WeirdGloopService] Fetching last90d history for ${itemNames.length} item(s) ` +
      `(keeping last ${days} days, concurrency=${concurrency}, ` +
      `pause every ${batchPauseEvery} @ ${batchPauseMs / 1000}s)…`
    );

    /**
     * Fetch history for a single item and store the result.
     * Designed to be called from a concurrency-limited pool.
     */
    const fetchOne = async (name: string): Promise<void> => {
      const url = `https://api.weirdgloop.org/exchange/history/rs/last90d?name=${encodeURIComponent(name)}`;
      try {
        const resp = await RateLimiter.fetchWithRetry(url);
        if (!resp) {
          skippedRetry++;
          console.warn(`[WeirdGloopService] History for "${name}" — all retries exhausted.`);
          return;
        }
        const json: WeirdGloopHistoryResponse = await resp.json();

        if ((json as any).success === false || (json as any).error) {
          skippedNotFound++;
          return;
        }

        let entries = json[name];
        if (!Array.isArray(entries)) {
          const lc = name.toLowerCase();
          for (const key of Object.keys(json)) {
            if (key.toLowerCase() === lc && Array.isArray(json[key])) {
              entries = json[key];
              break;
            }
          }
        }
        if (!Array.isArray(entries)) {
          skippedNoData++;
          return;
        }

        const filtered = entries
          .filter((e) => e.timestamp >= cutoff)
          .sort((a, b) => a.timestamp - b.timestamp);

        if (filtered.length > 0) {
          result.set(name, filtered);
        } else {
          skippedEmpty++;
        }
      } catch (err) {
        console.error(`[WeirdGloopService] History for "${name}" failed:`, err);
      }
    };

    // ── Concurrency-limited pool ────────────────────────────────────────
    // Keeps `concurrency` requests in-flight at all times, with a small
    // stagger delay between launches to avoid burst-triggering rate limits.
    // Workers check the class-level `rateLimitCooldownUntil` before each
    // request.  `fetchWithRetry` sets it immediately on 429/network errors
    // so all workers pause the instant one hits a throttle.
    let cursor = 0;

    const runWorker = async (): Promise<void> => {
      while (cursor < itemNames.length) {
        // If any request (in any worker, any call) hit a 429, wait it out.
        const now = Date.now();
        if (now < RateLimiter.rateLimitCooldownUntil) {
          await RateLimiter.sleep(RateLimiter.rateLimitCooldownUntil - now);
        }

        // Acquire the global rate-limit gate — enforces a hard floor on
        // the interval between any two requests regardless of worker count.
        await RateLimiter.acquireRequestSlot();

        const idx = cursor++;
        await fetchOne(itemNames[idx]);

        completed++;
        onProgress?.(completed, itemNames.length);

        // ── Global rate-limit accounting ────────────────────────────────
        // The browser rate-limit window spans across successive
        // fetchHistoricalPrices calls.  Track requests globally so the
        // proactive pause fires at the right cadence during full scans.
        const sinceLastPause = Date.now() - RateLimiter.globalLastPauseTs;
        if (sinceLastPause > RateLimiter.WINDOW_RESET_MS) {
          RateLimiter.globalHistReqCount = 0;
        }
        RateLimiter.globalHistReqCount++;
        if (RateLimiter.globalHistReqCount >= batchPauseEvery) {
          RateLimiter.globalHistReqCount = 0;
          RateLimiter.globalLastPauseTs = Date.now();
          console.log(
            `[WeirdGloopService] Batch pause at ${completed}/${itemNames.length} — ` +
            `cooling ${batchPauseMs / 1000}s to avoid rate-limit window…`
          );
          RateLimiter.rateLimitCooldownUntil = Math.max(
            RateLimiter.rateLimitCooldownUntil,
            Date.now() + batchPauseMs,
          );
        }

        if ((completed) % 50 === 0) {
          console.log(
            `[WeirdGloopService] History progress: ${completed}/${itemNames.length} ` +
            `(${result.size} fetched so far)…`
          );
        }
      }
    };

    // Launch `concurrency` workers; they each pull from the shared cursor.
    // Staggered 100 ms apart so they don't all fire at the same instant.
    const workers: Promise<void>[] = [];
    for (let w = 0; w < Math.min(concurrency, itemNames.length); w++) {
      workers.push(runWorker());
      if (w < concurrency - 1 && w < itemNames.length - 1) {
        await RateLimiter.sleep(100);
      }
    }
    await Promise.all(workers);

    console.log(
      `[WeirdGloopService] Historical data fetched for ${result.size} / ${itemNames.length} items.`
    );
    if (skippedNotFound + skippedNoData + skippedEmpty + skippedRetry > 0) {
      console.log(
        `[WeirdGloopService] Skipped: ${skippedNotFound} not-found, ${skippedNoData} no-data, ` +
        `${skippedEmpty} empty-after-filter, ${skippedRetry} retry-exhausted.`
      );
    }
    return result;
  }

  // ─── Private Helpers ──────────────────────────────────────────────────

  /**
   * Fetch a single batch of items from the API.
   *
   * @param batch   - Subset of item names (≤ {@link batchSize}).
   * @param batchIdx - Zero-based index used only for logging.
   * @returns The raw JSON response body typed as {@link WeirdGloopLatestResponse}.
   * @throws {Error} If the HTTP response is not OK (status outside 200-299).
   */
  private async fetchBatch(
    batch: string[],
    batchIdx: number
  ): Promise<WeirdGloopLatestResponse> {
    // Pipe-delimit item names as required by the Weird Gloop query parameter.
    const nameParam = batch.map((n) => encodeURIComponent(n)).join("|");
    const url = `${BASE_URL}?name=${nameParam}`;

    console.debug(`[WeirdGloopService] Batch ${batchIdx}: requesting ${batch.length} items…`);

    const response = await RateLimiter.fetchWithRetry(url);
    if (!response) {
      throw new Error(
        `[WeirdGloopService] Batch ${batchIdx}: all retries exhausted`
      );
    }

    const json: WeirdGloopLatestResponse = await response.json();
    console.debug(
      `[WeirdGloopService] Batch ${batchIdx}: received ${Object.keys(json).length} records.`
    );
    return json;
  }

}
