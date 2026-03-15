/**
 * @module WikiService
 * Client for the official RuneScape 3 Wiki structured-data APIs.
 *
 * Responsibilities:
 *  - Fetch GE buy limits in bulk from `Module:GELimits/data.json`
 *    (single request for all tradeable items, with per-item
 *    `Module:Exchange/<Item>` Lua source fallback).
 *  - Fetch High Alchemy values in bulk from `Module:GEHighAlchs/data.json`
 *    (single request for all alchable items, with per-item fallback).
 *
 * Guide / article text fetching has been removed — the curated
 * `coreKnowledge.ts` rules provide better, flipping-focused context for
 * the LLM than raw wiki prose.
 *
 * Uses only the native browser `fetch` API — no external dependencies.
 *
 * @see https://runescape.wiki/api.php (MediaWiki API sandbox)
 * @see https://runescape.wiki/w/Module:GELimits/data.json?action=raw
 * @see https://runescape.wiki/w/Module:GEHighAlchs/data.json?action=raw
 */

import { chunkArray, isMetadataKey, JSON_ACCEPT_HEADER } from "./utils";

/**
 * Service that retrieves structured item data (buy limits, high alch values)
 * from the official RuneScape 3 Wiki.
 *
 * Buy limits are fetched from the `Module:GELimits/data.json` bulk endpoint
 * in a single HTTP request, with per-item `Module:Exchange/<Item>` fallback.
 *
 * High Alch values are fetched from the `Module:GEHighAlchs/data.json` bulk
 * endpoint in a single HTTP request. Items present in the response are
 * alchable (value = number); items absent are explicitly not alchable
 * (value = `false`). Falls back to per-item `Module:Exchange/<Item>` Lua
 * source parsing when the bulk endpoint is unreachable.
 *
 * @example
 * ```ts
 * const wiki = new WikiService();
 * const limits = await wiki.getBulkBuyLimits(["Blood rune", "Elder logs"]);
 * const alchs = await wiki.getBulkHighAlchValues(["Blood rune", "Elder logs"]);
 * ```
 */
export class WikiService {
  /**
   * Bulk endpoint URL that returns all GE buy limits as a flat
   * `{ itemName: number }` JSON object.
   */
  private static readonly GE_LIMITS_BULK_URL =
    "https://runescape.wiki/w/Module:GELimits/data.json?action=raw";

  /**
   * Bulk endpoint URL that returns all alchable items and their High Alch
   * values as a flat `{ itemName: number }` JSON object.
   */
  private static readonly HIGH_ALCH_BULK_URL =
    "https://runescape.wiki/w/Module:GEHighAlchs/data.json?action=raw";
  // ─── Bulk Buy Limits (Module:Exchange) ──────────────────────────────

  /**
   * Maximum titles per MediaWiki `action=query` request.
   * The API allows up to 50 titles for anonymous (non-bot) callers.
   */
  private static readonly EXCHANGE_BATCH_SIZE = 50;

  /** Regex that extracts the `limit = <number>` value from a Lua module source. */
  private static readonly LIMIT_RE = /limit\s*=\s*(\d+)/;

  /** Regex that extracts the `alchvalue = <number>` value from a Lua module source. */
  private static readonly ALCH_RE = /alchvalue\s*=\s*(\d+)/;

  /** Regex that extracts the `value = <number>` (base item value) from a Lua module source. */
  private static readonly VALUE_RE = /\bvalue\s*=\s*(\d+)/;

  /** Regex that detects `alchable = false` — items that cannot be alched. */
  private static readonly ALCHABLE_FALSE_RE = /alchable\s*=\s*false/i;

  /**
   * Fetch GE buy limits in bulk.
   *
   * **Primary source**: the `Module:GELimits/data.json` bulk endpoint
   * (single HTTP request for every tradeable item in the game).
   *
   * **Fallback**: per-item `Module:Exchange/<Item>` Lua source parsing,
   * used only when the bulk endpoint is unreachable.
   *
   * @param itemNames - Canonical RS3 item names.
   * @returns A `Map<string, number>` keyed by item name → buy limit.
   *          Items missing from the wiki are omitted from the map.
   */
  async getBulkBuyLimits(itemNames: string[]): Promise<Map<string, number>> {
    if (itemNames.length === 0) return new Map();

    // ── Try the single-request bulk endpoint first ───────────────────
    try {
      const bulkData = await this.fetchAllBuyLimits();
      const result = new Map<string, number>();
      for (const name of itemNames) {
        const val = bulkData.get(name);
        if (val !== undefined) result.set(name, val);
      }
      console.log(
        `[WikiService] Bulk buy-limit endpoint: ${result.size} / ${itemNames.length} items resolved.`
      );
      return result;
    } catch (bulkErr) {
      console.warn(
        `[WikiService] Bulk buy-limit endpoint failed — falling back to per-item Module:Exchange.`,
        bulkErr
      );
    }

    // ── Fallback: per-item Module:Exchange parsing ───────────────────
    const batches = chunkArray(itemNames, WikiService.EXCHANGE_BATCH_SIZE);
    console.log(
      `[WikiService] Fetching buy-limit for ${itemNames.length} items in ${batches.length} batch(es) (fallback)…`
    );

    const settled = await Promise.allSettled(
      batches.map((batch, idx) => this.fetchBuyLimitBatch(batch, idx))
    );

    const combined = new Map<string, number>();
    for (const r of settled) {
      if (r.status === "fulfilled") {
        for (const [name, val] of r.value) combined.set(name, val);
      } else {
        console.warn(`[WikiService] buy-limit batch failed:`, r.reason);
      }
    }

    console.log(
      `[WikiService] Resolved buy-limit for ${combined.size} / ${itemNames.length} items (fallback).`
    );
    return combined;
  }

  /**
   * Generic batch fetch for `Module:Exchange/<Item>` Lua sources.
   * Handles URL building, HTTP fetch, JSON parsing, and page iteration.
   * The caller-supplied `extractValue` callback inspects each page's Lua source
   * and returns a value to include in the result map, or `undefined` to skip.
   */
  private async fetchExchangeBatch<T>(
    batch: string[],
    idx: number,
    label: string,
    extractValue: (luaSrc: string) => T | undefined,
  ): Promise<Map<string, T>> {
    const titles = batch
      .map((n) => `Module:Exchange/${n.replace(/ /g, "_")}`)
      .join("|");

    const url =
      `https://runescape.wiki/api.php?action=query&prop=revisions` +
      `&rvprop=content&rvslots=main&format=json&origin=*` +
      `&titles=${encodeURIComponent(titles)}`;

    console.debug(`[WikiService] ${label} batch ${idx + 1}: ${batch.length} items`);

    const response = await fetch(url, {
      method: "GET",
      headers: JSON_ACCEPT_HEADER,
    });

    if (!response.ok) {
      throw new Error(
        `[WikiService] Exchange-module HTTP ${response.status} ${response.statusText} (${label} batch ${idx + 1}).`
      );
    }

    const json = await response.json() as {
      query?: {
        pages?: Record<string, {
          title?: string;
          missing?: string;
          revisions?: Array<{ slots?: { main?: { "*"?: string } } }>;
        }>;
      };
    };

    const map = new Map<string, T>();
    const pages = json?.query?.pages;
    if (!pages) return map;

    for (const page of Object.values(pages)) {
      if (!page.title || page.missing !== undefined) continue;
      const itemName = page.title.replace(/^Module:Exchange\//, "");
      const luaSrc = page.revisions?.[0]?.slots?.main?.["*"] ?? "";
      const value = extractValue(luaSrc);
      if (value !== undefined) map.set(itemName, value);
    }

    return map;
  }

  /**
   * Fetch a single batch of buy limits by querying the Lua source of
   * `Module:Exchange/<Item>` pages via the MediaWiki revisions API.
   */
  private fetchBuyLimitBatch(
    batch: string[],
    idx: number,
  ): Promise<Map<string, number>> {
    return this.fetchExchangeBatch(batch, idx, "Buy-limit", (luaSrc) => {
      const match = WikiService.LIMIT_RE.exec(luaSrc);
      if (match) {
        const limit = Number(match[1]);
        if (limit > 0) return limit;
      }
      return undefined;
    });
  }

  /**
   * Fetch the complete `Module:GELimits/data.json` bulk endpoint.
   * Returns a map of **every tradeable item** in the game → its 4-hour
   * GE buy limit.  Items not present are untradeable or unrecognised.
   *
   * The endpoint returns a flat JSON object with two metadata keys
   * (`%LAST_UPDATE%`, `%LAST_UPDATE_F%`) that are stripped from the result.
   *
   * @returns Map of canonical item name → buy limit.
   * @throws If the network request fails or the response is not valid JSON.
   */
  private async fetchAllBuyLimits(): Promise<Map<string, number>> {
    console.log("[WikiService] Fetching bulk buy-limit data from GELimits module…");

    const response = await fetch(WikiService.GE_LIMITS_BULK_URL, {
      method: "GET",
      headers: JSON_ACCEPT_HEADER,
    });

    if (!response.ok) {
      throw new Error(
        `[WikiService] GELimits HTTP ${response.status} ${response.statusText}`
      );
    }

    const json = await response.json() as Record<string, unknown>;
    const map = new Map<string, number>();

    for (const [key, value] of Object.entries(json)) {
      if (isMetadataKey(key)) continue;
      if (typeof value === "number" && value > 0) {
        map.set(key, value);
      }
    }

    console.log(`[WikiService] Bulk buy-limit data: ${map.size} items loaded.`);
    return map;
  }

  /**
   * Fetch High Alchemy values for the given items.
   *
   * **Primary source**: the `Module:GEHighAlchs/data.json` bulk endpoint
   * (single HTTP request for every alchable item in the game).  Items
   * present in the response are alchable (value = number); items absent
   * are explicitly not alchable (value = `false`).
   *
   * **Fallback**: per-item `Module:Exchange/<Item>` Lua source parsing,
   * used only when the bulk endpoint is unreachable.  In fallback mode,
   * items that cannot be resolved remain absent from the map (no `false`).
   *
   * @param itemNames - Canonical RS3 item names.
   * @returns A `Map<string, number | false>` keyed by item name.
   */
  async getBulkHighAlchValues(itemNames: string[]): Promise<Map<string, number | false>> {
    if (itemNames.length === 0) return new Map();

    // ── Try the single-request bulk endpoint first ───────────────────
    try {
      const raw = await this.fetchAllHighAlchValues();
      const result = new Map<string, number | false>();
      for (const name of itemNames) {
        const val = raw.get(name);
        result.set(name, val !== undefined ? val : false);  // absent → not alchable
      }
      console.log(
        `[WikiService] Bulk alch endpoint: ${result.size} / ${itemNames.length} items resolved.`
      );
      return result;
    } catch (bulkErr) {
      console.warn(
        `[WikiService] Bulk alch endpoint failed — falling back to per-item Module:Exchange.`,
        bulkErr
      );
    }

    // ── Fallback: per-item Module:Exchange parsing ───────────────────
    const batches = chunkArray(itemNames, WikiService.EXCHANGE_BATCH_SIZE);
    console.log(
      `[WikiService] Fetching alch for ${itemNames.length} items in ${batches.length} batch(es) (fallback)…`
    );

    const settled = await Promise.allSettled(
      batches.map((batch, idx) => this.fetchAlchValueBatch(batch, idx))
    );

    const combined = new Map<string, number | false>();
    for (const r of settled) {
      if (r.status === "fulfilled") {
        for (const [name, val] of r.value) combined.set(name, val);
      } else {
        console.warn(`[WikiService] alch batch failed:`, r.reason);
      }
    }

    console.log(
      `[WikiService] Resolved alch for ${combined.size} / ${itemNames.length} items (fallback).`
    );
    return combined;
  }

  /**
   * Fetch the complete `Module:GEHighAlchs/data.json` bulk endpoint.
   * Returns a map of **every alchable item** in the game → its High Alch
   * value in gp.  Items not present in this map are not alchable.
   *
   * The endpoint returns a flat JSON object with two metadata keys
   * (`%LAST_UPDATE%`, `%LAST_UPDATE_F%`) that are stripped from the result.
   *
   * @returns Map of canonical item name → High Alch value (gp).
   * @throws If the network request fails or the response is not valid JSON.
   */
  private async fetchAllHighAlchValues(): Promise<Map<string, number>> {
    console.log("[WikiService] Fetching bulk High Alch data from GEHighAlchs module…");

    const response = await fetch(WikiService.HIGH_ALCH_BULK_URL, {
      method: "GET",
      headers: JSON_ACCEPT_HEADER,
    });

    if (!response.ok) {
      throw new Error(
        `[WikiService] GEHighAlchs HTTP ${response.status} ${response.statusText}`
      );
    }

    const json = await response.json() as Record<string, unknown>;
    const map = new Map<string, number>();

    for (const [key, value] of Object.entries(json)) {
      if (isMetadataKey(key)) continue;
      if (typeof value === "number" && value > 0) {
        map.set(key, value);
      }
    }

    console.log(`[WikiService] Bulk alch data: ${map.size} alchable items loaded.`);
    return map;
  }

  /**
   * Fetch a single batch of high alchemy values from `Module:Exchange/<Item>` Lua sources.
   */
  private fetchAlchValueBatch(
    batch: string[],
    idx: number,
  ): Promise<Map<string, number>> {
    return this.fetchExchangeBatch(batch, idx, "Alch", (luaSrc) => {
      if (WikiService.ALCHABLE_FALSE_RE.test(luaSrc)) return undefined;

      const alchMatch = WikiService.ALCH_RE.exec(luaSrc);
      if (alchMatch) {
        const val = Number(alchMatch[1]);
        if (val > 0) return val;
        return undefined;
      }

      const valueMatch = WikiService.VALUE_RE.exec(luaSrc);
      if (valueMatch) {
        const highAlch = Math.floor(Number(valueMatch[1]) * 0.6);
        if (highAlch > 0) return highAlch;
      }
      return undefined;
    });
  }

}
