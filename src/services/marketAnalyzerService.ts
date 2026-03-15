/**
 * @module MarketAnalyzerService
 * Deterministic filtering pipeline that transforms raw cached GE data into a
 * ranked, LLM-ready summary of the most profitable RS3 markets **from a
 * single player’s perspective**.
 *
 * Pipeline stages:
 *  1. **Retrieve** — pull every {@link StoredPriceRecord} from IndexedDB.
 *  2. **Score**    — compute player-constrained metrics:
 *                    • `effectivePlayerVolume = min(volume, buyLimit × 6)`
 *                    • `maxCapitalPer4H = price × buyLimit`
 *                    • `playerTradedValue = price × effectivePlayerVolume`
 *  3. **Filter**   — discard items outside the volume / price window.
 *  4. **Rank**     — sort descending by `playerTradedValue`.
 *  5. **Slice**    — keep only the top-N items.
 *  6. **Format**   — serialise the result into a compact string for LLM context.
 *
 * All calculations are pure math on local data — the only network call is a
 * fallback fetch to the Weird Gloop historical API when the local IndexedDB
 * price-history store has insufficient data for sparkline rendering.
 */

import { CacheService } from "./cacheService";
import type {
  MarketAnalyzerConfig,
  RankedItem,
  StoredPriceRecord,
} from "./types";
import {
  LLM_CONTEXT_TOP_N,
  formatForLLM as _formatForLLM,
  formatForLLMCompact,
} from "./marketDataFormatter";
import { scoreItems } from "./scoringEngine";
import { MarketMapCache } from "./marketMapCache";

/** Default analyser settings. */
const DEFAULTS: MarketAnalyzerConfig = {
  topN: 20,
  minVolume: 0,
};

/**
 * Stateless service that reads cached GE price data and produces a ranked,
 * LLM-consumable summary of the most actively-traded items.
 *
 * @example
 * ```ts
 * const cache = new CacheService();
 * await cache.open();
 *
 * const analyzer = new MarketAnalyzerService(cache);
 * const top = await analyzer.getTopItems();
 * const prompt = analyzer.formatForLLM(top);
 * console.log(prompt);
 * ```
 */
export class MarketAnalyzerService {
  private readonly cache: CacheService;
  private readonly topN: number;
  private readonly minVolume: number;
  private readonly maxVolume: number;
  private readonly maxPrice: number;
  private readonly mapCache: MarketMapCache;



  /**
   * @param cache  - An **already-opened** {@link CacheService} instance.
   * @param config - Optional overrides for ranking behaviour.
   */
  constructor(cache: CacheService, config?: Partial<MarketAnalyzerConfig>) {
    this.cache = cache;
    this.topN = config?.topN ?? DEFAULTS.topN;
    this.minVolume = config?.minVolume ?? DEFAULTS.minVolume;
    this.maxVolume = config?.maxVolume ?? 0;
    this.maxPrice = config?.maxPrice ?? 0;
    this.mapCache = new MarketMapCache(cache);
  }

  /** Invalidate the cached volume/price maps so the next call rebuilds them. */
  invalidateMapCache(): void {
    this.mapCache.invalidate();
  }



  // ─── Public API ───────────────────────────────────────────────────────

  /**
   * Run the full filtering pipeline and return the top-N most liquid items.
   *
   * @param overrides - Optional runtime filter overrides that take precedence
   *                    over the constructor defaults for this single call.
   * @returns An array of {@link RankedItem} objects, length ≤ `topN`.
   */
  async getTopItems(overrides?: Partial<MarketAnalyzerConfig>): Promise<RankedItem[]> {
    const records = await this.cache.getAll();

    if (records.length === 0) {
      console.warn("[MarketAnalyzer] Cache returned 0 records — nothing to analyse.");
      return [];
    }

    // Build a volume-SMA map from the last 30 days of history.
    // Build a price-history map for sparklines / EMA / regression.
    // Uses TTL-cached maps to skip redundant IndexedDB reads + API calls.
    const { avgVolumeMap, priceHistoryMap } = await this.mapCache.getOrBuild(30);

    const effectiveMinVol = overrides?.minVolume ?? this.minVolume;
    const effectiveMaxVol = overrides?.maxVolume ?? this.maxVolume;
    const effectiveMaxPrice = overrides?.maxPrice ?? this.maxPrice;
    const effectiveTopN = overrides?.topN ?? this.topN;

    console.log(
      `[MarketAnalyzer] Scoring ${records.length} cached records` +
      ` (minVol=${effectiveMinVol}, maxVol=${effectiveMaxVol || "∞"}, maxPrice=${effectiveMaxPrice || "∞"})…`
    );

    const scored = this.scoreAndFilter(records, effectiveMinVol, effectiveMaxVol, effectiveMaxPrice, avgVolumeMap, priceHistoryMap);
    const sorted = this.sortDescending(scored);
    const top = sorted.slice(0, effectiveTopN);

    console.log(
      `[MarketAnalyzer] ${scored.length} liquid items found → returning top ${top.length}.`
    );
    return top;
  }

  /**
   * Search all cached items by name and return fully-scored {@link RankedItem}
   * objects — identical to the cards produced by {@link getTopItems}.
   *
   * The search is **entirely client-side** (IndexedDB only, no network calls).
   * Results are capped at 50 to keep DOM rendering lightweight.
   *
   * @param query - Case-insensitive substring to match against item names.
   * @returns Matching items ranked by `tradedValue`, length ≤ 50.
   */
  async searchItems(query: string): Promise<RankedItem[]> {
    const needle = query.toLowerCase().trim();
    if (needle.length === 0) return [];

    const allRecords = await this.cache.getAll();
    const matched = allRecords.filter(
      (r) => r.name.toLowerCase().includes(needle)
    );

    if (matched.length === 0) return [];

    const { avgVolumeMap, priceHistoryMap } = await this.mapCache.getOrBuild(30);

    // Score with no volume/price filters so *every* match is included.
    const scored = this.scoreAndFilter(matched, 0, 0, 0, avgVolumeMap, priceHistoryMap);
    const sorted = this.sortDescending(scored);
    return sorted.slice(0, 50);
  }

  /**
   * Return **all** cached items as fully-scored {@link RankedItem} objects.
   * Used for filter-only browsing when no search query is active.
   * Results are capped at {@link maxResults} to keep DOM rendering fast.
   *
   * @param maxResults - Maximum items to return (default 200).
   * @returns All cached items ranked by `tradedValue`.
   */
  async getAllScored(maxResults = 200): Promise<RankedItem[]> {
    const allRecords = await this.cache.getAll();
    if (allRecords.length === 0) return [];

    const { avgVolumeMap, priceHistoryMap } = await this.mapCache.getOrBuild(30);
    const scored = this.scoreAndFilter(allRecords, 0, 0, 0, avgVolumeMap, priceHistoryMap);
    const sorted = this.sortDescending(scored);
    return maxResults > 0 ? sorted.slice(0, maxResults) : sorted;
  }

  /**
   * Look up cached items by an exact set of names and return fully-scored
   * {@link RankedItem} objects.  Used to render the user's favourites list.
   *
   * @param names - Set of item names to retrieve (case-sensitive, must match cache keys).
   * @returns Matching items ranked by `tradedValue`.
   */
  async getItemsByNames(names: Set<string>): Promise<RankedItem[]> {
    if (names.size === 0) return [];

    const allRecords = await this.cache.getAll();
    const matched = allRecords.filter((r) => names.has(r.name));
    if (matched.length === 0) return [];

    const { avgVolumeMap, priceHistoryMap } = await this.mapCache.getOrBuild(30);

    const scored = this.scoreAndFilter(matched, 0, 0, 0, avgVolumeMap, priceHistoryMap);
    return this.sortDescending(scored);
  }

  // audit:no-op(SRP-6) — getFormattedTop, formatForLLM, and getFormattedForLLM
  // are 1-4 line thin delegates to marketDataFormatter. Extracting them to a
  // separate class would over-fragment the public API for zero SRP gain.

  /**
   * Convenience wrapper: run the pipeline **and** format the result in one call.
   *
   * @returns A formatted string ready for LLM context injection.
   */
  async getFormattedTop(): Promise<string> {
    const items = await this.getTopItems();
    return _formatForLLM(items);
  }

  /**
   * Serialise a list of {@link RankedItem} objects into a compact,
   * human-readable (and LLM-friendly) string block.
   * Delegates to {@link formatForLLM} from `marketDataFormatter`.
   */
  formatForLLM(items: RankedItem[]): string {
    return _formatForLLM(items);
  }

  /**
   * Build a broader dataset specifically for LLM chat context.
   *
   * Returns the top {@link LLM_CONTEXT_TOP_N} items by traded value with
   * **no volume or price filters**, giving the LLM a much wider view of
   * the market than the UI's filtered top-20 panel.
   *
   * @returns A formatted string with up to 50 items for LLM context injection.
   */
  async getFormattedForLLM(): Promise<string> {
    const items = await this.getTopItems({
      topN: LLM_CONTEXT_TOP_N,
      minVolume: 0,
      maxVolume: 0,
      maxPrice: 0,
    });
    return formatForLLMCompact(items);
  }

  // ─── Private Helpers ──────────────────────────────────────────────────

  /**
   * Compute player-constrained liquidity scores and apply all filters.
   *
   * For each record:
   *  - `effectivePlayerVolume = min(globalVolume, buyLimit × 6)`
   *    (falls back to `globalVolume` when `buyLimit` is unknown)
   *  - `maxCapitalPer4H = price × buyLimit` (0 when unknown)
   *  - `tradedValue = price × effectivePlayerVolume` (player-constrained)
   *
   * Volume filters (`minVolume` / `maxVolume`) are applied against the
   * **global daily GE volume** so that preset filters (High / Low)
   * reflect actual market liquidity rather than a single player's
   * buy-limit-constrained throughput.
   *
   * @param records      - Raw records from the cache.
   * @param minVolume    - Minimum global daily volume (inclusive lower bound).
   * @param maxVolume    - Maximum global daily volume (0 = no cap).
   * @param maxPrice     - Maximum item price in gp (0 = no cap).
   * @returns Scored items that pass all filters.
   */
  private scoreAndFilter(
    records: StoredPriceRecord[],
    minVolume: number,
    maxVolume: number,
    maxPrice: number,
    avgVolumeMap: Map<string, number>,
    priceHistoryMap: Map<string, number[]>,
  ): RankedItem[] {
    return scoreItems(records, minVolume, maxVolume, maxPrice, avgVolumeMap, priceHistoryMap);
  }

  /**
   * Sort an array of ranked items **descending** by `tradedValue`.
   * Returns a new array; the input is not mutated.
   *
   * @param items - Unsorted scored items.
   * @returns A new array sorted from highest to lowest traded value.
   */
  private sortDescending(items: RankedItem[]): RankedItem[] {
    return [...items].sort((a, b) => b.tradedValue - a.tradedValue);
  }
}
