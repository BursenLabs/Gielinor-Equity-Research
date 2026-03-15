/**
 * @module dataEnricher
 * Standalone enrichment helpers that augment raw price data with wiki
 * metadata (buy limits, alch values) and provide the full GE catalogue.
 */

import { WikiService } from "./wikiService";
import { WeirdGloopService } from "./weirdGloopService";
import { HistoryCacheService } from "./historyCacheService";
import type { WeirdGloopPriceRecord, GECatalogueEntry } from "./types";
import { isMetadataKey, JSON_ACCEPT_HEADER } from "./utils";

/** URL for the RS Wiki's full GE item-ID catalogue (JSON). */
const GE_CATALOGUE_URL =
  "https://runescape.wiki/w/Module:GEIDs/data.json?action=raw";

/**
 * Enrich a price map with buy limits and High Alch values from the RS Wiki.
 * Failures are non-critical — the map is left unchanged for items that
 * could not be resolved.
 *
 * @param prices - Mutable map of item name → price record to enrich in-place.
 * @param wiki   - WikiService instance to use for the lookups.
 */
export async function enrichPricesWithWiki(
  prices: Map<string, WeirdGloopPriceRecord>,
  wiki: WikiService,
): Promise<void> {
  const names = Array.from(prices.keys());
  let buyLimits: Map<string, number>;
  let alchValues: Map<string, number | false>;
  try {
    [buyLimits, alchValues] = await Promise.all([
      wiki.getBulkBuyLimits(names),
      wiki.getBulkHighAlchValues(names),
    ]);
  } catch {
    return;
  }
  for (const [name, record] of prices) {
    const limit = buyLimits.get(name);
    if (limit !== undefined) record.buyLimit = limit;
    const alch = alchValues.get(name);
    if (alch !== undefined) record.highAlch = alch;
  }
}

/**
 * Fetch the full RS3 GE item catalogue from the RS Wiki.
 * Returns ~7 000 `{ name, id }` entries covering every tradeable item.
 *
 * @returns An array of {@link GECatalogueEntry} sorted alphabetically.
 */
export async function fetchGECatalogue(): Promise<GECatalogueEntry[]> {
  console.log("[GECatalogue] Fetching full item catalogue from RS Wiki…");

  try {
    const response = await fetch(GE_CATALOGUE_URL, {
      method: "GET",
      headers: JSON_ACCEPT_HEADER,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const json: Record<string, number> = await response.json();

    const entries: GECatalogueEntry[] = [];
    for (const [name, id] of Object.entries(json)) {
      if (!isMetadataKey(name) && typeof id === "number") {
        entries.push({ name, id });
      }
    }

    entries.sort((a, b) => a.name.localeCompare(b.name));
    console.log(`[GECatalogue] Loaded ${entries.length} tradeable items.`);
    return entries;
  } catch (err) {
    console.error("[GECatalogue] Failed to fetch catalogue:", err);
    return [];
  }
}

/**
 * Fetch historical prices from the Weird Gloop API and persist to IndexedDB.
 * Used as a sparse-data fallback when IndexedDB history is insufficient
 * for map building.
 */
export async function fetchSparseHistory(
  itemNames: string[],
  days: number,
  api: WeirdGloopService,
  historySvc: HistoryCacheService,
): Promise<Map<string, number[]>> {
  const result = new Map<string, number[]>();
  const todayStr = new Date().toISOString().slice(0, 10);

  try {
    const historyMap = await api.fetchHistoricalPrices(itemNames, days);

    if (historyMap.size > 0) {
      try { await historySvc.bulkInsertHistory(historyMap); } catch { /* non-critical */ }
    }

    for (const [name, entries] of historyMap) {
      const dayMap = new Map<string, number>();
      for (const e of entries) {
        const day = new Date(e.timestamp).toISOString().slice(0, 10);
        if (day === todayStr) continue;
        dayMap.set(day, e.price);
      }
      const sorted = [...dayMap.entries()].sort((a, b) => (a[0] < b[0] ? -1 : 1));
      if (sorted.length > 0) {
        result.set(name, sorted.map((d) => d[1]));
      }
    }
  } catch (err) {
    console.warn("[DataEnricher] fetchSparseHistory failed:", err);
  }

  console.log(`[DataEnricher] API history fetched for ${result.size} items.`);
  return result;
}
