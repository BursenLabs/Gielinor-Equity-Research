/**
 * @module NewsService
 * Fetches recent RS3 game update news from the RS Wiki MediaWiki API.
 *
 * Responsibilities:
 *  - Query the `Category:Game_updates` category for the most recent update
 *    page titles and their publication dates.
 *  - Cache results with a configurable TTL so repeated chat messages
 *    don't hammer the wiki.
 *  - Format a compact news digest string suitable for injection into the
 *    LLM user message, enabling the advisor to correlate price movements
 *    with real game events.
 *
 * Uses only the native browser `fetch` API — no external dependencies.
 *
 * @see https://runescape.wiki/api.php (MediaWiki API sandbox)
 */

import type { NewsItem } from "./types";

// ─── Constants ──────────────────────────────────────────────────────────────

/** RS Wiki MediaWiki API base URL. */
const WIKI_API = "https://runescape.wiki/api.php";

/** Default number of recent game updates to fetch. */
const DEFAULT_COUNT = 15;

/** Cache lifetime — 2 hours. News doesn't change that frequently. */
const CACHE_TTL_MS = 2 * 60 * 60 * 1000;

// ─── Service ────────────────────────────────────────────────────────────────

/**
 * Service that retrieves recent RS3 game update headlines from the
 * official RuneScape Wiki.
 *
 * Results are cached in-memory with a 2-hour TTL to minimise API calls.
 *
 * @example
 * ```ts
 * const news = new NewsService();
 * const items = await news.getRecentNews();
 * const context = news.formatForLLM(items);
 * ```
 */
export class NewsService {
  /** In-memory news cache. */
  private cache: NewsItem[] = [];

  /** Epoch-ms timestamp of the last successful fetch. */
  private cacheTime = 0;

  /**
   * Fetch the most recent RS3 game update titles and dates.
   *
   * Uses the MediaWiki `list=categorymembers` API against
   * `Category:Game_updates` sorted newest-first.  Results are cached
   * for {@link CACHE_TTL_MS} and served from memory on subsequent calls.
   *
   * @param count - Maximum number of updates to return (default 15).
   * @returns An array of {@link NewsItem} objects, newest first.
   */
  async getRecentNews(count: number = DEFAULT_COUNT): Promise<NewsItem[]> {
    if (this.cache.length > 0 && Date.now() - this.cacheTime < CACHE_TTL_MS) {
      return this.cache.slice(0, count);
    }

    const url =
      `${WIKI_API}?action=query&list=categorymembers` +
      `&cmtitle=Category:Game_updates&cmsort=timestamp&cmdir=desc` +
      `&cmlimit=${count}&cmprop=title|timestamp&format=json`;

    const resp = await fetch(url);
    if (!resp.ok) {
      console.warn(`[NewsService] Wiki API error: ${resp.status}`);
      return this.cache; // return stale cache on failure
    }

    const json = await resp.json();
    const members: { title?: string; timestamp?: string }[] =
      json?.query?.categorymembers ?? [];

    this.cache = members.map((m) => ({
      title: (m.title ?? "").replace(/^Update:/, ""),
      date: m.timestamp ? m.timestamp.slice(0, 10) : "Unknown",
    }));
    this.cacheTime = Date.now();

    console.log(
      `[NewsService] Fetched ${this.cache.length} recent game updates.`,
    );

    return this.cache.slice(0, count);
  }

  /**
   * Format news items into a compact string block suitable for inclusion
   * in an LLM user message.
   *
   * @param items - News items (from {@link getRecentNews}).
   * @returns A formatted string, or empty string if no items.
   */
  formatForLLM(items: NewsItem[]): string {
    if (items.length === 0) return "";

    const lines = items.map((n) => `[${n.date}] ${n.title}`);
    return [
      "=== RECENT RS3 NEWS & GAME UPDATES ===",
      "Use these to explain potential causes of price movements:",
      ...lines,
    ].join("\n");
  }
}
