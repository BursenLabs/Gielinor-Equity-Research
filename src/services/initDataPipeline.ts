/**
 * @module initDataPipeline
 * Orchestrator that wires the Weird Gloop API service and the IndexedDB cache
 * together into a single "ingest" step.
 *
 * Flow:
 *  1. Open the cache database.
 *  2. Check the TTL-based staleness flag.
 *  3. If stale â†’ fetch latest prices from the API â†’ bulk-insert into cache.
 *  4. Return the (now-fresh) cached records for downstream consumption.
 *
 * This module is deliberately side-effect-free at import time.
 * Consumers call {@link initDataPipeline} explicitly.
 */

import { CacheService } from "./cacheService";
import { WeirdGloopService } from "./weirdGloopService";
import { WikiService } from "./wikiService";
import { loadBaseline } from "./baselineService";
import { enrichPricesWithWiki } from "./dataEnricher";
import type { StoredPriceRecord, WeirdGloopPriceRecord } from "./types";
import { SEED_ITEMS } from "./seedItems";

/** localStorage key tracking when the baseline was last successfully imported. */
const LS_BASELINE_LOADED_AT = "ger:baseline-loaded-at";


/**
 * Run the full data-ingest pipeline.
 *
 * Designed to be called once during application startup.  Attempts to load
 * the pre-built daily baseline first (full ~7k catalogue with enrichment).
 * Falls back to the legacy seed-item fetch if the baseline is unavailable
 * or stale.  History seeding is no longer performed at startup â€” history
 * loads on demand via the analytics modal or a deep scan.
 *
 * @returns All cached {@link StoredPriceRecord} objects (fresh or previously cached).
 * @throws Will **not** throw for partial API failures; only a complete IDB
 *         failure can cause rejection.
 */
export async function initDataPipeline(
  onProgress?: PipelineProgressCallback,
): Promise<StoredPriceRecord[]> {
  console.log("â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”");
  console.log("\u2502  Gielinor Equity Research \u2014 Data Pipeline  \u2502");
  console.log("â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜");

  const cache = new CacheService();

  // Step 1 â€” Open the database (creates store on first run).
  try {
    await cache.open();
  } catch (err) {
    console.error("[initDataPipeline] Fatal: could not open IndexedDB.", err);
    throw err;
  }

  // Step 2a â€” Guard against IDB/localStorage desync: if the prices store
  // is nearly empty but the baseline-loaded-at key claims a recent load,
  // the user likely cleared IndexedDB without clearing localStorage.
  // Reset the key so the baseline re-imports immediately.
  const existingCount = (await cache.getAll()).length;
  if (existingCount < 100) {
    const syncCheck = localStorage.getItem(LS_BASELINE_LOADED_AT);
    if (syncCheck) {
      const syncAge = Date.now() - new Date(syncCheck).getTime();
      if (syncAge < 24 * 60 * 60 * 1000) {
        console.warn(
          `[initDataPipeline] IDB/localStorage desync detected: only ${existingCount} records ` +
          `but baseline-loaded-at claims ${(syncAge / 3600000).toFixed(1)}h ago. Resetting.`
        );
        localStorage.removeItem(LS_BASELINE_LOADED_AT);
      }
    }
  }

  // Step 2 â€” Check whether we need to (re)import the baseline.
  const baselineLoadedAt = localStorage.getItem(LS_BASELINE_LOADED_AT);
  const baselineAge = baselineLoadedAt
    ? Date.now() - new Date(baselineLoadedAt).getTime()
    : Infinity;
  const BASELINE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

  if (baselineAge > BASELINE_TTL_MS) {
    console.log("[initDataPipeline] Baseline import needed (age: " +
      (baselineAge === Infinity ? "never loaded" : `${(baselineAge / 3600000).toFixed(1)}h`) + ").");

    onProgress?.("Loading baseline data", 0, 1);
    const baseline = await loadBaseline();

    if (baseline && baseline.size > 0) {
      // Baseline loaded successfully â€” bulk-insert into IndexedDB.
      const written = await cache.bulkInsert(baseline);
      localStorage.setItem(LS_BASELINE_LOADED_AT, new Date().toISOString());
      console.log(`[initDataPipeline] Baseline imported: ${written} records.`);
      onProgress?.("Loading baseline data", 1, 1);
    } else {
      // Baseline unavailable â€” fall back to seed-item fetch.
      // Do NOT set baseline-loaded-at â€” the next visit should re-attempt
      // the baseline so we don't stay stuck with only ~230 seed items.
      console.warn("[initDataPipeline] Baseline unavailable â€” falling back to seed items.");
      await seedFallback(cache, onProgress);
    }
  } else {
    // Check regular cache staleness for within-day revisits.
    const stale = await cache.isStale();
    if (stale) {
      console.log("[initDataPipeline] Cache stale within baseline window â€” refreshing seeds.");
      await seedFallback(cache, onProgress);
    } else {
      console.log("[initDataPipeline] Cache is fresh â€” skipping fetch.");
    }
  }

  // Step 3 â€” Return all cached data for downstream consumers.
  const finalRecords = await cache.getAll();
  console.log(
    `[initDataPipeline] Pipeline complete. ${finalRecords.length} records available.`
  );
  return finalRecords;
}

/**
 * Legacy seed-item fallback: fetches ~230 curated items from the Weird Gloop
 * API and enriches with wiki data. Used when the baseline is unavailable.
 * Does **not** seed history â€” history is loaded on demand.
 */
async function seedFallback(
  cache: CacheService,
  onProgress?: PipelineProgressCallback,
): Promise<void> {
  const api = new WeirdGloopService();

  onProgress?.("Fetching seed prices", 0, SEED_ITEMS.length);
  let prices: Map<string, WeirdGloopPriceRecord>;
  try {
    prices = await api.fetchLatestPrices(SEED_ITEMS);
    onProgress?.("Fetching seed prices", SEED_ITEMS.length, SEED_ITEMS.length);
  } catch (fetchErr) {
    console.error("[initDataPipeline] Network error fetching prices:", fetchErr);
    throw new Error(
      "Could not reach the Weird Gloop API â€” check your internet connection and try again."
    );
  }

  if (prices.size === 0) {
    console.warn("[initDataPipeline] API returned zero records. Cache will remain empty.");
    return;
  }

  // Enrich with buy limits + alch values (best-effort).
  onProgress?.("Enriching items", 0, 1);
  const wiki = new WikiService();
  await enrichPricesWithWiki(prices, wiki);

  console.log(
    `[initDataPipeline] Enriched wiki data for ${prices.size} records.`
  );

  const written = await cache.bulkInsert(prices);
  console.log(`[initDataPipeline] Wrote ${written} records to cache.`);
}

/**
 * Callback for reporting sub-step progress during the startup pipeline.
 * @param phase - Human-readable phase name (e.g. "Fetching prices").
 * @param done  - Items processed so far within this phase.
 * @param total - Total items in this phase.
 */
export type PipelineProgressCallback = (phase: string, done: number, total: number) => void;
