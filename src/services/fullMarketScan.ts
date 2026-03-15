/**
 * @module fullMarketScan
 * Non-blocking background scan that fetches prices, wiki enrichment, and
 * optional 90-day history for every item in the GE catalogue.
 *
 * Extracted from `initDataPipeline` to isolate orchestra­tion, rate-limit
 * backoff, and per-batch processing into single-responsibility helpers.
 *
 * audit:no-op(SRP-4) — adaptive backoff logic is already factored into
 * functional helpers within this file; further extraction would split a
 * single algorithm across modules with no SRP benefit.
 */

import { CacheService } from "./cacheService";
import { WeirdGloopService } from "./weirdGloopService";
import { WikiService } from "./wikiService";
import type { GECatalogueEntry, WeirdGloopPriceRecord, ProgressCallback } from "./types";
import { enrichPricesWithWiki } from "./dataEnricher";

// ─── Constants ──────────────────────────────────────────────────────────────

const BATCH_SIZE = 100;
const BASE_DELAY_MS = 200;
const MAX_DELAY_MS = 30_000;

/** Relaxed pacing for deep-history fetches (~7k individual requests).
 *  The 100 ms global gate already caps throughput at ~10 req/s, so
 *  proactive batch pauses are set very high to avoid redundant stalls. */
const DEEP_PACING = { batchPauseEvery: 10_000, batchPauseMs: 1_000 };

/** Items with a history point newer than this are considered recent. */
const HISTORY_RECENCY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

/** Prices fetched within this window count as "fresh" for the history-only optimisation. */
const FRESH_THRESHOLD_MS = 60 * 60 * 1000; // 1 hour

// ─── Callback type ──────────────────────────────────────────────────────────

/** @deprecated Use {@link ProgressCallback} from `types.ts` instead. */
export type ScanProgressCallback = ProgressCallback;

// ─── Pre-scan strategy helpers ──────────────────────────────────────────────

/**
 * Determine whether the scan can skip price + enrichment fetches entirely
 * and only pull history.  Returns `true` when `deepHistory` is requested
 * and ≥ 90 % of the catalogue already has prices fetched within the last hour.
 */
async function shouldUseHistoryOnlyMode(
  cache: CacheService,
  catalogueSize: number,
  deepHistory: boolean,
): Promise<boolean> {
  if (!deepHistory) return false;

  const existing = await cache.getAll();
  if (existing.length === 0) return false;

  const now = Date.now();
  const freshCount = existing.filter(
    (r) => r.fetchedAt && now - r.fetchedAt < FRESH_THRESHOLD_MS,
  ).length;
  const coverage = freshCount / catalogueSize;

  if (coverage >= 0.9) {
    console.log(
      `[FullMarketScan] Prices already fresh for ${freshCount}/${catalogueSize} items ` +
        `(${(coverage * 100).toFixed(0)}%) — switching to history-only mode.`,
    );
    return true;
  }
  return false;
}

/**
 * Build the set of item names that already have sufficient & recent 90-day
 * history in the cache.  Items with ≥ 5 data points **and** at least one
 * point within the last 7 days are included — everything else will be
 * (re-)fetched during the scan.
 */
async function buildHistorySkipSet(
  cache: CacheService,
  catalogueSize: number,
  deepHistory: boolean,
): Promise<Set<string>> {
  const skipSet = new Set<string>();
  if (!deepHistory) return skipSet;

  try {
    const recentHistory = await cache.history.getRecentHistory(90);
    const countByName = new Map<string, number>();
    const newestByName = new Map<string, number>();

    for (const h of recentHistory) {
      countByName.set(h.name, (countByName.get(h.name) ?? 0) + 1);
      const ts = new Date(h.timestamp).getTime();
      const prev = newestByName.get(h.name) ?? 0;
      if (ts > prev) newestByName.set(h.name, ts);
    }

    const now = Date.now();
    let staleSkipped = 0;

    for (const [name, count] of countByName) {
      if (count >= 5) {
        const newest = newestByName.get(name) ?? 0;
        if (now - newest <= HISTORY_RECENCY_MS) {
          skipSet.add(name);
        } else {
          staleSkipped++;
        }
      }
    }

    if (skipSet.size > 0 || staleSkipped > 0) {
      const pct = ((skipSet.size / catalogueSize) * 100).toFixed(0);
      console.log(
        `[FullMarketScan] Skipping history fetch for ${skipSet.size}/${catalogueSize} items (${pct}%) ` +
          `that have ≥ 5 data points and recent data (≤ 7 days).` +
          (staleSkipped > 0
            ? ` ${staleSkipped} items have enough points but stale data — will re-fetch.`
            : ``),
      );
    }
  } catch {
    // Non-critical — proceed without dedup.
  }

  return skipSet;
}

// ─── Per-batch processors ───────────────────────────────────────────────────

/**
 * Process a single batch in **history-only** mode: fetch 90-day history for
 * items not already present in `historySkipSet`, then persist to IndexedDB.
 */
async function processBatchHistoryOnly(
  api: WeirdGloopService,
  cache: CacheService,
  batchNames: string[],
  historySkipSet: Set<string>,
): Promise<void> {
  const needHistory = batchNames.filter((n) => !historySkipSet.has(n));
  if (needHistory.length === 0) return;

  const historyMap = await api.fetchHistoricalPrices(
    needHistory, 90, undefined, DEEP_PACING,
  );
  if (historyMap.size > 0) {
    await cache.history.bulkInsertHistory(historyMap);
  }
}

/**
 * Process a single batch in **normal** mode: fetch prices, enrich with wiki
 * data (buy limits + alch values), persist to IndexedDB, and optionally
 * pull 90-day history for items that need it.
 *
 * @returns The number of price records fetched (0 signals an empty / rate-limited response).
 */
async function processBatchNormal(
  api: WeirdGloopService,
  wiki: WikiService,
  cache: CacheService,
  batchNames: string[],
  deepHistory: boolean,
  historySkipSet: Set<string>,
): Promise<number> {
  const prices: Map<string, WeirdGloopPriceRecord> =
    await api.fetchLatestPrices(batchNames);

  if (prices.size === 0) return 0;

  // Enrich with buy limits + alch values (best-effort).
  await enrichPricesWithWiki(prices, wiki);

  // Persist to IndexedDB immediately.
  await cache.bulkInsert(prices);

  // Optionally fetch 90-day history.
  if (deepHistory) {
    try {
      const needHistory = Array.from(prices.keys()).filter(
        (n) => !historySkipSet.has(n),
      );
      if (needHistory.length > 0) {
        const historyMap = await api.fetchHistoricalPrices(
          needHistory, 90, undefined, DEEP_PACING,
        );
        if (historyMap.size > 0) {
          await cache.history.bulkInsertHistory(historyMap);
        }
      }
    } catch {
      // Non-critical — skip history for this batch.
    }
  }

  return prices.size;
}

// ─── Adaptive backoff helper ────────────────────────────────────────────────

/** Mutable backoff state threaded through the batch loop. */
interface BackoffState {
  delay: number;
  consecutiveEmpty: number;
}

/** Reset backoff after a successful batch. */
function resetBackoff(state: BackoffState): void {
  state.consecutiveEmpty = 0;
  state.delay = BASE_DELAY_MS;
}

/** Increase backoff after an empty or failed batch. */
function increaseBackoff(state: BackoffState, batchLabel: string, reason: string): void {
  state.consecutiveEmpty++;
  state.delay = Math.min(
    BASE_DELAY_MS * Math.pow(2, state.consecutiveEmpty),
    MAX_DELAY_MS,
  );
  console.warn(
    `[FullMarketScan] Batch ${batchLabel} ${reason} ` +
      `(${state.consecutiveEmpty} consecutive). Next delay: ${(state.delay / 1000).toFixed(1)}s`,
  );
}

// ─── Public orchestrator ────────────────────────────────────────────────────

/**
 * Run a **non-blocking** full-market background scan.
 *
 * Fetches latest prices for **every** item in the GE catalogue (~7 000
 * items) in batches of 100, with adaptive delays between batches to avoid
 * rate-limiting.  Each batch is bulk-inserted into IndexedDB immediately so
 * progress persists even if the user closes the app mid-scan.
 *
 * When `deepHistory` is `true`, 90-day price history is also fetched per
 * item.  When `false` (default), history is loaded on demand via the
 * analytics modal.
 *
 * @param catalogue   - Pre-fetched GE catalogue entries.
 * @param onProgress  - Called after every batch with `(done, total)`.
 * @param signal      - Optional `AbortSignal` to cancel the scan early.
 * @param deepHistory - When `true`, also fetches 90-day history per item.
 * @returns The total number of items successfully processed.
 */
export async function runFullMarketScan(
  catalogue: GECatalogueEntry[],
  onProgress?: ScanProgressCallback,
  signal?: AbortSignal,
  deepHistory: boolean = false,
): Promise<number> {
  if (catalogue.length === 0) {
    console.warn("[FullMarketScan] Empty catalogue — nothing to scan.");
    return 0;
  }

  const cache = new CacheService();
  const api = new WeirdGloopService();
  const wiki = new WikiService();
  await cache.open();

  // ── Pre-scan strategy decisions ───────────────────────────────────────
  const historyOnly = await shouldUseHistoryOnlyMode(
    cache, catalogue.length, deepHistory,
  );
  const historySkipSet = await buildHistorySkipSet(
    cache, catalogue.length, deepHistory,
  );

  // ── Batch loop ────────────────────────────────────────────────────────
  const allNames = catalogue.map((e) => e.name);
  const total = allNames.length;
  let done = 0;
  const backoff: BackoffState = { delay: BASE_DELAY_MS, consecutiveEmpty: 0 };

  console.log(
    `[FullMarketScan] Starting scan of ${total} items in batches of ${BATCH_SIZE}…`,
  );

  for (let i = 0; i < allNames.length; i += BATCH_SIZE) {
    if (signal?.aborted) {
      console.log("[FullMarketScan] Aborted by user.");
      break;
    }

    const batchNames = allNames.slice(i, i + BATCH_SIZE);
    const batchLabel = String(i / BATCH_SIZE + 1);

    try {
      if (historyOnly) {
        await processBatchHistoryOnly(api, cache, batchNames, historySkipSet);
      } else {
        const fetched = await processBatchNormal(
          api, wiki, cache, batchNames, deepHistory, historySkipSet,
        );
        if (fetched > 0) {
          resetBackoff(backoff);
        } else {
          increaseBackoff(backoff, batchLabel, "returned 0 results");
        }
      }
    } catch (err) {
      increaseBackoff(backoff, batchLabel, "failed");
      console.warn(`[FullMarketScan] Batch ${batchLabel} error:`, err);
    }

    done = Math.min(i + BATCH_SIZE, total);
    onProgress?.(done, total);

    // Yield to the browser event loop + adaptive rate-limit delay.
    if (i + BATCH_SIZE < allNames.length) {
      await new Promise((r) => setTimeout(r, backoff.delay));
    }
  }

  console.log(`[FullMarketScan] Complete. ${done} / ${total} items processed.`);
  return done;
}
