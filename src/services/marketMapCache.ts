/**
 * @module MarketMapCache
 * TTL-cached scoring maps (avgVolume + priceHistory) used by the
 * market analyser to avoid redundant IndexedDB reads and API calls.
 *
 * Rebuilt from scratch when the cache is stale (10-minute TTL) or
 * after an explicit {@link invalidate} call.
 */

import { CacheService } from "./cacheService";
import { WeirdGloopService } from "./weirdGloopService";
import { fetchSparseHistory } from "./dataEnricher";

/** TTL for cached volume/price maps (10 minutes). */
const MAP_CACHE_TTL_MS = 10 * 60 * 1000;

/**
 * Manages TTL-cached `avgVolumeMap` and `priceHistoryMap` built from
 * IndexedDB history with a sparse-data API fallback.
 */
export class MarketMapCache {
  private cachedAvgVolumeMap: Map<string, number> | null = null;
  private cachedPriceHistoryMap: Map<string, number[]> | null = null;
  private mapCacheTimestamp = 0;

  constructor(private readonly cache: CacheService) {}

  /** Invalidate the cached maps so the next call rebuilds them. */
  invalidate(): void {
    this.cachedAvgVolumeMap = null;
    this.cachedPriceHistoryMap = null;
    this.mapCacheTimestamp = 0;
  }

  /**
   * Return (possibly cached) avgVolumeMap and priceHistoryMap.
   * Rebuilds both if the cache is stale or empty.
   */
  async getOrBuild(days: number = 30): Promise<{
    avgVolumeMap: Map<string, number>;
    priceHistoryMap: Map<string, number[]>;
  }> {
    if (!this.isStale()) {
      console.log("[MarketMapCache] Using cached scoring maps (age: " +
        `${((Date.now() - this.mapCacheTimestamp) / 1000).toFixed(0)}s).`);
      return {
        avgVolumeMap: this.cachedAvgVolumeMap!,
        priceHistoryMap: this.cachedPriceHistoryMap!,
      };
    }

    const avgVolumeMap = await this.buildAvgVolumeMap(days);
    const priceHistoryMap = await this.buildPriceHistoryMap(days);

    this.cachedAvgVolumeMap = avgVolumeMap;
    this.cachedPriceHistoryMap = priceHistoryMap;
    this.mapCacheTimestamp = Date.now();

    return { avgVolumeMap, priceHistoryMap };
  }

  /** Check whether the cached maps are still within their TTL. */
  private isStale(): boolean {
    return !this.cachedAvgVolumeMap
      || !this.cachedPriceHistoryMap
      || (Date.now() - this.mapCacheTimestamp > MAP_CACHE_TTL_MS);
  }

  /**
   * Fetch recent history from IndexedDB and build a
   * `Map<itemName, averageVolume>` for volume-spike detection.
   *
   * With the v3 intraday schema, multiple records per day may exist.
   * We deduplicate by calendar day (taking the max volume per day) so
   * the SMA remains comparable to the legacy daily-keyed behaviour.
   */
  private async buildAvgVolumeMap(days: number): Promise<Map<string, number>> {
    const map = new Map<string, number>();
    try {
      const history = await this.cache.history.getRecentHistory(days);
      const today = new Date().toISOString().slice(0, 10);

      const grouped = new Map<string, Map<string, number>>();
      for (const rec of history) {
        const day = rec.day ?? new Date(rec.timestamp).toISOString().slice(0, 10);
        if (day === today) continue;
        const vol = Number(rec.volume) || 0;
        let dayMap = grouped.get(rec.name);
        if (!dayMap) {
          dayMap = new Map();
          grouped.set(rec.name, dayMap);
        }
        const existing = dayMap.get(day) ?? 0;
        if (vol > existing) dayMap.set(day, vol);
      }

      for (const [name, dayMap] of grouped) {
        const vols = [...dayMap.values()];
        const avg = vols.reduce((s, v) => s + v, 0) / vols.length;
        map.set(name, avg);
      }
      console.log(`[MarketMapCache] SMA map built from ${history.length} history rows (${map.size} items).`);
    } catch (err) {
      console.warn("[MarketMapCache] Could not build SMA map — spike detection disabled.", err);
    }
    return map;
  }

  /**
   * Build a `Map<itemName, number[]>` of chronological daily prices
   * for sparkline rendering.  Each array contains one price per past day
   * (does **not** include today — the caller appends the current price).
   *
   * When local IndexedDB history is sparse, falls back to the Weird Gloop
   * `last90d` API to progressively build history across visits.
   */
  private async buildPriceHistoryMap(days: number): Promise<Map<string, number[]>> {
    const map = new Map<string, number[]>();
    try {
      const history = await this.cache.history.getRecentHistory(days);
      const today = new Date().toISOString().slice(0, 10);

      const grouped = new Map<string, Map<string, { price: number; ts: string }>>();
      for (const rec of history) {
        const day = rec.day ?? new Date(rec.timestamp).toISOString().slice(0, 10);
        if (day === today) continue;
        let dayMap = grouped.get(rec.name);
        if (!dayMap) {
          dayMap = new Map();
          grouped.set(rec.name, dayMap);
        }
        const existing = dayMap.get(day);
        if (!existing || rec.timestamp > existing.ts) {
          dayMap.set(day, { price: rec.price, ts: rec.timestamp });
        }
      }

      for (const [name, dayMap] of grouped) {
        const sorted = [...dayMap.entries()]
          .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
        map.set(name, sorted.map(([, v]) => v.price));
      }

      // ── Sparse-data fallback ──────────────────────────────────────────
      const HISTORY_RECENCY_MS = 7 * 24 * 60 * 60 * 1000;
      const now = Date.now();
      const itemsWithSufficient = [...grouped.entries()]
        .filter(([, dayMap]) => {
          if (dayMap.size < 2) return false;
          let newest = "";
          for (const [, { ts }] of dayMap) {
            if (ts > newest) newest = ts;
          }
          return newest !== "" && (now - new Date(newest).getTime()) <= HISTORY_RECENCY_MS;
        }).length;
      const sparse = itemsWithSufficient < 1000;

      if (!sparse) {
        console.log(
          `[MarketMapCache] History coverage OK: ${itemsWithSufficient}/1000 items have ≥ 2 days — skipping API fallback.`
        );
      }

      if (sparse) {
        const allItems = await this.cache.getAll();
        const allNames = allItems.map((r) => r.name);
        const needsHistory = allNames.filter((n) => {
          const dayMap = grouped.get(n);
          if (!dayMap || dayMap.size < 2) return true;
          let newest = "";
          for (const [, { ts }] of dayMap) {
            if (ts > newest) newest = ts;
          }
          return newest === "" || (now - new Date(newest).getTime()) > HISTORY_RECENCY_MS;
        });
        // Shuffle to avoid alphabetical starvation.
        for (let i = needsHistory.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [needsHistory[i], needsHistory[j]] = [needsHistory[j], needsHistory[i]];
        }
        const SPARSE_CAP = 50;
        const namesToFetch = needsHistory.length > SPARSE_CAP
          ? needsHistory.slice(0, SPARSE_CAP)
          : needsHistory;
        console.log(
          `[MarketMapCache] Local price history is sparse (${itemsWithSufficient}/1000 items have ≥ 2 days) ` +
          `— fetching ${namesToFetch.length} items from Weird Gloop API…`
        );
        const apiMap = await fetchSparseHistory(namesToFetch, days, new WeirdGloopService(), this.cache.history);
        for (const [name, prices] of apiMap) {
          if (!map.has(name) || (map.get(name)!.length < prices.length)) {
            map.set(name, prices);
          }
        }
      }
    } catch (err) {
      console.warn("[MarketMapCache] Could not build price history map.", err);
    }
    return map;
  }

}
