/**
 * @module types
 * Shared type definitions for the Gielinor Equity Research pipeline.
 */

// ─── Weird Gloop API Response Shapes ────────────────────────────────────────

/**
 * A single price record returned by the Weird Gloop `/exchange/history/rs/latest` endpoint.
 * The API returns an object keyed by item name, where each value has this shape.
 */
export interface WeirdGloopPriceRecord {
  /** Item ID in the RuneScape catalogue. */
  id: number;
  /** UTC timestamp (ISO-8601 or Unix seconds depending on endpoint version). */
  timestamp: string;
  /** Latest instantaneous price snapshot. */
  price: number;
  /** 24-hour trade volume (may be `0` for thinly-traded items). */
  volume: number;
  /** GE buy limit per 4-hour window (fetched from the RS Wiki Cargo API). */
  buyLimit?: number;
  /**
   * High Alchemy value in gp (fetched from the RS Wiki GEHighAlchs module).
   * - `number` — alch value in gp.
   * - `false`  — item is explicitly not alchable.
   * - `undefined` — value not yet determined.
   */
  highAlch?: number | false;
}

/**
 * The top-level response shape for a `/exchange/history/rs/latest` call.
 * Keys are canonical item names exactly as sent in the query string.
 */
export interface WeirdGloopLatestResponse {
  [itemName: string]: WeirdGloopPriceRecord;
}

/**
 * A single data point in the Weird Gloop `/exchange/history/rs/last90d` response.
 * Each entry represents one daily price snapshot.
 */
export interface WeirdGloopHistoryEntry {
  /** Unix-millisecond timestamp of the snapshot. */
  timestamp: number;
  /** Closing price for that day. */
  price: number;
  /** 24-hour trade volume (may be 0). */
  volume?: number;
}

/**
 * Top-level response shape for a `/exchange/history/rs/last90d` call.
 * Keys are canonical item names; values are arrays of daily snapshots.
 */
export interface WeirdGloopHistoryResponse {
  [itemName: string]: WeirdGloopHistoryEntry[];
}

// ─── IndexedDB Stored Record ────────────────────────────────────────────────

/**
 * A price record as persisted in IndexedDB.
 * Extends the API record with a local ingest timestamp used for cache TTL checks.
 */
export interface StoredPriceRecord extends WeirdGloopPriceRecord {
  /** Canonical item name (also serves as the primary key in the object store). */
  name: string;
  /** Unix-millisecond timestamp of when this record was written to IDB. */
  fetchedAt: number;
}

/**
 * A price snapshot stored in the `price-history` object store.
 *
 * **v3 schema**: The compound key is `[name, timestamp]` (epoch ms),
 * allowing multiple intraday records per item for OHLC candlestick
 * charts and 4-hour buy-limit window analysis.
 *
 * The legacy `day` field is retained for backward compatibility with
 * consumers that group/filter by calendar date.
 */
export interface HistoricalPriceRecord extends StoredPriceRecord {
  /**
   * ISO date string `"YYYY-MM-DD"` derived from `timestamp`.
   * Retained for backward compatibility — **not** part of the IndexedDB
   * key path since v3.
   */
  day: string;
}

/**
 * Open-High-Low-Close aggregation for a single time window.
 * Used for candlestick charts and intraday momentum analysis.
 */
export interface OHLCData {
  /** Unix-millisecond timestamp of the window start. */
  windowStart: number;
  /** First observed price in the window. */
  open: number;
  /** Maximum observed price in the window. */
  high: number;
  /** Minimum observed price in the window. */
  low: number;
  /** Last observed price in the window (most recent timestamp). */
  close: number;
  /** Sum of volumes across all records in the window. */
  volume: number;
  /** Number of individual price observations in the window. */
  count: number;
}

// ─── Service Configuration ──────────────────────────────────────────────────

/** Tuneable knobs for the Weird Gloop API service. */
export interface WeirdGloopServiceConfig {
  /**
   * Maximum number of item names to include in a single API request.
   * The endpoint accepts pipe-delimited names; 100 is a safe upper bound.
   * @default 100
   */
  batchSize: number;
}

// ─── Market Analysis Types ───────────────────────────────────────────────────

/**
 * A cached price record enriched with a computed liquidity score.
 * Produced by the {@link MarketAnalyzerService} filtering pipeline.
 */
export interface RankedItem {
  /** Canonical RS3 item name. */
  name: string;
  /** Item catalogue ID (used for sprite URLs). */
  itemId: number;
  /** Latest GE price in gp. */
  price: number;
  /**
   * Suggested buy-offer price — 1 % below the current GE price.
   * Gives the flipper a realistic entry point that accounts for
   * typical instant-buy discounts.  Minimum 1 gp below `price`.
   */
  recBuyPrice: number;
  /** 24-hour trade volume reported by the API (global). */
  volume: number;
  /**
   * Estimated daily traded value in gp (`price × volume`).
   * Retained for reference; sorting uses player-constrained value instead.
   */
  tradedValue: number;
  /** GE buy limit per 4-hour window (undefined when the wiki has no data). */
  buyLimit?: number;
  /**
   * The lesser of global daily volume and the player’s daily limit
   * (`buyLimit × 6`).  Falls back to global volume when `buyLimit` is
   * unknown.
   */
  effectivePlayerVolume: number;
  /**
   * Maximum gp a single player can deploy per 4-hour window
   * (`price × buyLimit`).  `0` when `buyLimit` is unknown.
   */
  maxCapitalPer4H: number;
  /**
   * The minimum margin (in gp) the seller must clear above the buy price
   * to break even after the 2 % GE tax: `ceil(price / 0.98) − price`.
   */
  taxGap: number;
  /**
   * Minimum sell price needed to turn a profit after the 2 % GE tax
   * when buying at `recBuyPrice`.
   * Calculated as `ceil(recBuyPrice / 0.98) + 1` (one gp above break-even).
   */
  recSellPrice: number;
  /**
   * Estimated per-item flip profit when buying at `recBuyPrice` and
   * selling at `recSellPrice`: `recSellPrice - recBuyPrice - floor(recSellPrice * 0.02)`.
   */
  estFlipProfit: number;
  /**
   * `true` when the item is cheap enough that the absolute tax gap
   * makes flipping very difficult (price < 500 gp).  At these price
   * tiers a 2 % tax eats most realistic spreads.
   */
  isRisky: boolean;
  /**
   * Ratio of today’s volume to its 7-day simple moving average.
   * `0` when there is insufficient history or the spike is ≤ 1.5×.
   * A value of `2.3` means 230 % of the average — a significant hype spike.
   */
  volumeSpikeMultiplier: number;  /**
   * Qualitative trade-speed tier derived from the item's estimated hourly
   * volume relative to its 4-hour buy limit.  Helps set realistic
   * expectations for how quickly a flip can complete.
   */
  tradeVelocity: "Insta-Flip" | "Active" | "Slow" | "Very Slow";
  /**
   * Chronological daily prices over the last 7 days (oldest-first).
   * Empty when there is no historical data yet.
   */
  priceHistory: number[];
  /**
   * 7-day price momentum classification based on the overall percentage
   * change between the oldest historical price and the current price.
   * - `"Downtrend"` — dropped more than 5 % (falling knife warning).
   * - `"Uptrend"` — risen more than 5 %.
   * - `"Stable"` — within ±5 %.
   */
  priceTrend: "Uptrend" | "Downtrend" | "Stable";
  /**
   * 30-day Exponential Moving Average of historical prices.
   * Gives more weight to recent prices (α = 0.2 by default).
   * `0` when insufficient history.
   */
  ema30d: number;
  /**
   * Standard deviation of daily percentage changes over the price history.
   * A value of `0.05` means 5 % typical daily swing.
   * `0` when fewer than 2 data points.
   */
  volatility: number;
  /**
   * Estimated gp/hr a single player can earn flipping this item.
   * `ROT = estFlipProfit × estHourlyFillRate × fillFactor`
   * where `estHourlyFillRate = globalVol / 24` and `fillFactor = 0.7`
   * (a single player rarely captures 100 % of hourly volume).
   * `0` when buy limit or volume data is insufficient.
   */
  returnOnTime: number;
  /**
   * OLS linear-regression slope of the price series (gp per day).
   * Positive = upward drift, negative = declining.
   * `0` when insufficient history.
   */
  linearSlope: number;
  /**
   * Price predicted by the linear regression model for the next day
   * (i.e. day N+1).  `0` when insufficient history.
   */
  predictedNextPrice: number;
  /**
   * High Alchemy value in gp.  Used as a sell-price floor in the
   * recommended-sell calculation.
   * - `number` — alch value in gp.
   * - `false`  — item is explicitly not alchable.
   * - `undefined` — value not yet determined.
   */
  highAlch?: number | false;

  // ── Data Confidence ─────────────────────────────────────────────────

  /**
   * Number of historical price data points available for this item.
   * More points = more reliable trend/EMA/volatility calculations.
   */
  historyDepth: number;
  /**
   * Minutes since the most recent price data was fetched/cached.
   * Lower = fresher data.
   */
  dataAgeMinutes: number;
  /**
   * Qualitative confidence tier for trend-based predictions.
   * Derived from `historyDepth`:
   * - `"Low"` — fewer than 7 data points.
   * - `"Medium"` — 7–29 data points.
   * - `"High"` — 30+ data points.
   */
  trendReliability: "Low" | "Medium" | "High";
}

/** Tuneable knobs for the {@link MarketAnalyzerService}. */
export interface MarketAnalyzerConfig {
  /**
   * Number of top items to return after sorting.
   * @default 20
   */
  topN: number;
  /**
   * Minimum **global** daily GE volume an item must have to be included.
   * Items at or below this threshold are discarded as illiquid.
   * Applied against the raw GE volume, not the player-constrained value.
   * @default 0
   */
  minVolume: number;
  /**
   * Maximum **global** daily GE volume. Items above this threshold are excluded.
   * Applied against the raw GE volume, not the player-constrained value.
   * `undefined` or `0` means no upper-bound.
   */
  maxVolume?: number;
  /**
   * Maximum item price in gp. Items more expensive than this are excluded.
   * `undefined` or `0` means no price cap.
   */
  maxPrice?: number;
}

/** Tuneable knobs for the IndexedDB caching layer. */
export interface CacheServiceConfig {
  /** IndexedDB database name. */
  dbName: string;
  /** IndexedDB object store name for price records. */
  storeName: string;
  /**
   * Time-to-live for cached records, in milliseconds.
   * Records older than this are considered stale and will be re-fetched.
   * @default 86_400_000 (24 hours)
   */
  ttlMs: number;
}

/** Shape of a full database export produced by {@link CacheService.exportDatabase}. */
export interface CacheDatabaseExport {
  /** Schema version (currently 3). */
  version: number;
  /** ISO-8601 timestamp of when the export was created. */
  exportedAt: string;
  /** All records from the `prices` store. */
  prices: StoredPriceRecord[];
  /** All records from the `price-history` store. */
  history: HistoricalPriceRecord[];
}

// ─── LLM Provider Presets ───────────────────────────────────────────────────

/** A single model option within a provider's suggested model list. */
export interface ModelOption {
  /** Model identifier sent to the API (e.g. `"llama-3.1-8b-instant"`). */
  id: string;
  /** Short human-readable label shown in the dropdown (e.g. `"Llama 3.1 8B Instant"`). */
  label: string;
  /** Mark as the recommended pick for this plugin's RAG use-case. */
  recommended?: boolean;
}

/** Cost tier for an LLM API provider. Shown as a badge in the settings dropdown. */
export type ProviderCostTier = "free" | "free-tier" | "low-cost" | "paid" | "self-hosted";

/** Describes an LLM API provider the user can choose from the settings panel. */
export interface LLMProvider {
  /** Unique identifier (used as `<option>` value). */
  id: string;
  /** Human-readable label shown in the dropdown. */
  label: string;
  /** Chat-completion endpoint URL. */
  endpoint: string;
  /** Default model identifier for this provider. */
  defaultModel: string;
  /** Placeholder hint shown in the API key input. */
  keyPlaceholder: string;
  /**
   * Curated list of models available on this provider.
   * The first entry with `recommended: true` is pre-selected when the
   * provider is chosen. Users can still type any model name.
   */
  models: readonly ModelOption[];
  /** Pricing tier used to render a badge next to the provider name. */
  costTier: ProviderCostTier;
  /** Short note about pricing (e.g. "Free tier available — no credit card"). */
  costNote: string;
  /** URL where the user can sign up and obtain an API key (omitted for custom). */
  signupUrl?: string;
}

// ─── LLM Service Types ─────────────────────────────────────────────────────

/** Configuration for the LLM chat-completion endpoint. */
export interface LLMConfig {
  /** Bearer token sent in the `Authorization` header. */
  apiKey: string;
  /**
   * OpenAI-compatible chat-completion endpoint URL.
   * @default "https://api.groq.com/openai/v1/chat/completions"
   */
  endpoint: string;
  /**
   * Model identifier to request.
   * @default "llama-3.1-8b-instant"
   */
  model: string;
  /**
   * Sampling temperature (0 = deterministic, higher = more creative).
   * @default 0.4
   */
  temperature: number;
  /**
   * Maximum tokens the model may generate in its response.
   * @default 1024
   */
  maxTokens: number;
}

/** A single message in the OpenAI chat-completion `messages` array. */
export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

/** Shape of an OpenAI-compatible chat-completion request body. */
export interface ChatCompletionRequest {
  model: string;
  messages: ChatMessage[];
  temperature: number;
  /** Preferred field for max output tokens (OpenAI, Groq). */
  max_completion_tokens?: number;
  /** Legacy field kept for backward compat with older OpenAI-compatible APIs. */
  max_tokens?: number;
}

/** Minimal subset of the chat-completion response we need to read. */
export interface ChatCompletionResponse {
  id: string;
  choices: ChatCompletionChoice[];
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

/** A single choice inside a chat-completion response. */
export interface ChatCompletionChoice {
  index: number;
  message: ChatMessage;
  finish_reason: string;
}

// ─── Portfolio Types ────────────────────────────────────────────────────────

/**
 * Point-in-time snapshot of key market metrics for an item.
 * Captured when a flip is created (buy snapshot) and when completed (sell snapshot).
 * Old flips without snapshots gracefully degrade to "N/A" in the UI.
 */
export interface FlipSnapshot {
  /** GE guide price at the time of capture. */
  price: number;
  /** 24-hour global trade volume. */
  volume: number;
  /** GE buy limit per 4-hour window. */
  buyLimit?: number;
  /** Trade speed tier. */
  tradeVelocity: "Insta-Flip" | "Active" | "Slow" | "Very Slow";
  /** 7-day price trend. */
  priceTrend: "Uptrend" | "Downtrend" | "Stable";
  /** 30-day EMA. */
  ema30d: number;
  /** Daily price volatility (std deviation as fraction). */
  volatility: number;
  /** Estimated flip profit per item at the time. */
  estFlipProfit: number;
  /** Estimated gp/hr. */
  returnOnTime: number;
}

/**
 * An active flip being tracked in the user's portfolio.
 * Persisted to `localStorage` and rendered with a live buy-limit countdown.
 */
export interface ActiveFlip {
  /** Unique identifier (RFC-4122-ish v4 UUID). */
  id: string;
  /** Canonical RS3 item name. */
  itemName: string;
  /** Price at which the item was (or will be) bought, in gp. */
  buyPrice: number;
  /** Number of items in this flip. */
  quantity: number;
  /** Target sell price per item, in gp. */
  targetSellPrice: number;
  /**
   * Unix-millisecond timestamp of when the GE offer was placed.
   * Used to compute the 4-hour buy-limit reset countdown.
   */
  timestamp: number;
  /** Market snapshot captured when the flip was created. */
  buySnapshot?: FlipSnapshot;
}

/**
 * A flip that has been sold and moved to the history ledger.
 * Extends {@link ActiveFlip} with realised sale data.
 */
export interface CompletedFlip extends ActiveFlip {
  /** The per-item price the flip was actually sold at (gp). */
  actualSellPrice: number;
  /** Unix-millisecond timestamp of when the flip was completed. */
  completedAt: number;
  /**
   * Net profit after the 2 % GE tax:
   * `(actualSellPrice × 0.98 × quantity) − (buyPrice × quantity)`.
   * Negative values represent a loss.
   * When `alched` is `true`, profit is `(highAlchPrice × quantity) − (buyPrice × quantity)` (no GE tax).
   */
  realizedProfit: number;
  /** Market snapshot captured when the flip was completed. */
  sellSnapshot?: FlipSnapshot;
  /**
   * `true` when the item was High-Alched instead of sold on the GE.
   * Alched flips bypass the 2 % GE tax entirely.
   */
  alched?: boolean;
}

/**
 * Aggregate statistics across all completed flips in the portfolio history.
 */
export interface PortfolioStats {
  /** Sum of `realizedProfit` across all completed flips (may be negative). */
  totalProfit: number;
  /** Total number of completed flips. */
  totalFlips: number;
  /** Average realised profit per completed flip. */
  avgProfit: number;
  /** Average return on investment as a fraction (e.g. 0.12 = 12 %). */
  avgRoi: number;
}

// ─── Full GE Catalogue ────────────────────────────────────────────────────────────

/**
 * A favourited item with optional price-alert thresholds.
 * Persisted to `localStorage` as a JSON array.
 */
export interface FavoriteItem {
  /** Canonical RS3 item name. */
  name: string;
  /** Alert when the item's GE price drops to or below this value (gp). */
  targetBuy?: number;
  /** Alert when the item's GE price rises to or at above this value (gp). */
  targetSell?: number;
}

/**
 * Lightweight entry from the RS Wiki’s `Module:GEIDs/data.json` catalogue.
 * Contains every GE-tradeable item name and its catalogue ID.
 */
export interface GECatalogueEntry {
  /** Canonical RS3 item name. */
  name: string;
  /** GE catalogue item ID. */
  id: number;
}

// ─── RS3 News ─────────────────────────────────────────────────────────────────

/**
 * A recent RS3 game update or news post, sourced from the RS Wiki.
 * Used to provide the LLM advisor with current-event context so it can
 * correlate market movements with game changes.
 */
export interface NewsItem {
  /** Update title (e.g. "Combat Style Modernisation"). */
  title: string;
  /** ISO date string `"YYYY-MM-DD"` of the update. */
  date: string;
}

// ─── Shared Callback Types ──────────────────────────────────────────────────

/**
 * Generic progress callback for batch operations.
 * @param done  - Number of items processed so far.
 * @param total - Total number of items to process.
 */
export type ProgressCallback = (done: number, total: number) => void;
