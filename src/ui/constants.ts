/**
 * @module ui/constants
 * All static constants, type aliases, label maps, and search filter category
 * definitions used across the UI layer.
 */

// ─── localStorage key constants ─────────────────────────────────────────────

export const LS_API_KEY           = "ger:llm-api-key";
export const LS_PROVIDER          = "ger:llm-provider";
export const LS_MODEL             = "ger:llm-model";
export const LS_ENDPOINT          = "ger:llm-endpoint";
export const LS_VIEW_MODE         = "ger:view-mode";
export const LS_COMPACT_TILES     = "ger:compact-tiles";
export const LS_LAYOUT            = "ger:layout";
export const LS_THEME             = "ger:theme";
export const LS_STYLE             = "ger:style";
export const LS_COLORWAY          = "ger:colorway";
export const LS_MODE              = "ger:mode";
export const LS_CONTRAST          = "ger:contrast";
export const LS_CHAT_HISTORY      = "ger:chat-history";
export const LS_FAVORITES         = "ger:favorites";
export const LS_DEEP_HISTORY      = "ger:deep-history";
export const LS_CONTRAST_AUTO     = "ger:contrast-auto-correct";
export const LS_DISCLAIMER_ACK    = "ger:disclaimer-ack";
export const LS_LIMIT_RESET_NOTIFS = "ger:limit-reset-notifs";
export const LS_ACTIVE_TAB        = "ger:active-tab";
export const LS_FILTER_VOLUME     = "ger:filter-volume";
export const LS_FILTER_PRICE      = "ger:filter-price";
export const LS_FILTER_CONFIDENCE = "ger:filter-confidence";
export const LS_PORTFOLIO_SUB_TAB = "ger:portfolio-sub-tab";
export const LS_NEWS_CONTEXT      = "ger:news-context";
export const LS_PNL_COLLAPSED     = "ger:pnl-collapsed";
export const LS_WINLOSS_COLLAPSED = "ger:winloss-collapsed";
export const LS_ADVANCED_MODE     = "ger:advanced-mode";
export const LS_INFO_BANNER_DISMISSED  = "ger:info-banner-dismissed";
export const LS_ALLOCATION_STRATEGY    = "ger:allocation-strategy";
export const LS_ALLOCATION_BUDGET      = "ger:allocation-budget";
export const LS_CHART_LAYERS           = "ger:chart-layers";



// ─── Type aliases ───────────────────────────────────────────────────────────

export type ViewMode     = "list" | "tile" | "hybrid";
export type LayoutMode   = "tabbed" | "sidebar";
export type StyleMode    = "basic" | "glass" | "neumorphism" | "skeuomorphism";
export type ColorwayMode = "default" | "classic" | "rs3-modern" | "solarized" | "rs-lobby" | "gruvbox" | "twilight-amethyst" | "osrs-design";
export type AppMode      = "dark" | "light";
export type ContrastMode = "default" | "soft" | "hard";

// ─── Numeric constants ──────────────────────────────────────────────────────

/** WCAG AA minimum contrast ratio for normal text. */
export const WCAG_AA_RATIO = 4.5;

/** Maximum number of messages (user + assistant) persisted to localStorage. */
export const MAX_SAVED_MESSAGES = 50;

/** GE buy-limit window duration in milliseconds (4 hours). */
export const BUY_LIMIT_WINDOW_MS = 4 * 60 * 60 * 1000;

/** Portfolio countdown refresh interval in milliseconds (every 30 s). */
export const PORTFOLIO_TICK_MS = 30_000;

/** CSS custom properties checked for WCAG AA compliance against the effective background. */
export const CONTRAST_CHECK_TOKENS: readonly string[] = [
  "--text-muted",
  "--text-accent",
  "--text-heading",
  "--text-price",
  "--accent-gold",
  "--accent-green",
  "--accent-red",
  "--accent-teal",
  "--accent-blue-text",
];

// ─── Legacy migration map ───────────────────────────────────────────────────

export const LEGACY_COLORWAY_MAP: Record<string, { mode: AppMode; colorway: ColorwayMode }> = {
  classic:      { mode: "dark",  colorway: "default" },
  osrs:         { mode: "dark",  colorway: "classic" },
  "rs3-modern": { mode: "dark",  colorway: "rs3-modern" },
  light:        { mode: "light", colorway: "default" },
  "sol-dark":   { mode: "dark",  colorway: "solarized" },
  "sol-light":  { mode: "light", colorway: "solarized" },
};

// ─── Sort keys ──────────────────────────────────────────────────────────────

export const TOP20_SORT_KEY  = "ger:top20-sort";
export const SEARCH_SORT_KEY = "ger:search-sort";
export const FAV_SORT_KEY    = "ger:fav-sort";

// ─── Detail-row label text & tooltip descriptions ───────────────────────────

export const DETAIL_LABELS: Record<string, string> = {
  "GE Price":            "GE Price",
  "Rec. Buy Price":      "Rec. Buy Price",
  "Rec. Sell Price":     "Rec. Sell Price",
  "Est. Flip Profit":    "Est. Flip Profit",
  "24h Global Vol":      "24h Global Vol",
  "Eff. Player Vol":     "Eff. Player Vol",
  "Volume Spike":        "Volume Spike",
  "Player Traded Val":   "Player Traded Val",
  "Buy Limit (4h)":      "Buy Limit (4h)",
  "Max Capital (4h)":    "Max Capital (4h)",
  "Tax Gap":             "Tax Gap",
  "Est. Margin (2% tax)":"Est. Margin (2% tax)",
  "High Alch":           "High Alch",
  "ROI %":               "ROI %",
  "Profit per 4H":       "Profit per 4H",
  "Return on Time":      "Return on Time",
  "Vol-Adj Margin":      "Vol-Adj Margin",
  "Alch Safety":         "Alch Safety",
  "30d EMA":             "30d EMA",
  "Daily Volatility":    "Daily Volatility",
  "LR Slope":            "LR Slope",
  "Predicted Price":     "Predicted Price",
  "History Depth":       "History Depth",
  "Data Freshness":      "Data Freshness",
  "Spread Confidence":   "Spread Confidence",
  "Trend Reliability":   "Trend Reliability",
};

export const DETAIL_TIPS: Record<string, string> = {
  "GE Price":            "Latest mid-price reported by the Grand Exchange API.",
  "Rec. Buy Price":      "Suggested buy-offer price — ~1% below the GE mid-price for a realistic instant-buy entry.",
  "Rec. Sell Price":     "Suggested sell price — ~3% above mid-price to cover the 2% GE tax and still leave profit.",
  "Est. Flip Profit":    "Estimated profit per item if you buy at the rec. buy price and sell at the rec. sell price, after the 2% GE tax.",
  "24h Global Vol":      "Total number of this item traded across all players in the last 24 hours.",
  "Eff. Player Vol":     "The lower of global daily volume and your personal daily limit (buy limit × 6 windows). Reflects how many you can realistically flip per day.",
  "Volume Spike":        "Today's volume compared to its 7-day average. Values above 1.5× indicate unusual hype or demand.",
  "Player Traded Val":   "Total gp throughput a single player can achieve per day — GE price × effective player volume.",
  "Buy Limit (4h)":      "Maximum quantity you can buy from the GE every 4 hours. Set by Jagex per item.",
  "Max Capital (4h)":    "Maximum gp you need to fill one full buy-limit window — GE price × buy limit.",
  "Tax Gap":             "Minimum price difference needed between buy and sell to break even after the 2% GE tax.",
  "Est. Margin (2% tax)":"The flat gp amount the 2% GE tax takes from one sale at the current price.",
  "High Alch":           "High Alchemy value in gp \u2014 used as the sell-price floor to prevent recommending sales below alch value.",
  "ROI %":               "Return on investment per flip \u2014 (flip profit \u00f7 buy price) \u00d7 100. Higher = more capital-efficient.",
  "Profit per 4H":       "Total potential profit in one 4-hour buy limit window \u2014 flip profit \u00d7 buy limit.",
  "Return on Time":      "Estimated gp earned per hour of active flipping \u2014 accounts for trade velocity and fill rate.",
  "Vol-Adj Margin":      "Flip profit minus one standard deviation of daily price movement. Negative = volatility exceeds your margin (risky flip).",
  "Alch Safety":         "Profit or loss per item if you bail out and High Alch instead of selling on the GE. No GE tax applies to alchs.",
  "30d EMA":             "30-day Exponential Moving Average. Price above EMA = bullish; below = bearish.",
  "Daily Volatility":    "Standard deviation of daily percentage price changes. Higher \u2192 wider swings \u2192 more risk but potentially faster flips.",
  "LR Slope":            "Linear-regression slope of the price series (gp per day). Positive = upward drift, negative = declining.",
  "Predicted Price":     "Next-day price predicted by linear regression of the historical price series.",
  "History Depth":       "Number of daily price snapshots cached for this item. More data points = more reliable trend analysis. Low (<7), Medium (7\u201329), High (30+).",
  "Data Freshness":      "Time since this item\u2019s price was last fetched from the GE API. Guide prices update roughly once per day.",
  "Spread Confidence":   "Recommended buy/sell prices are estimates (\u00b11\u20133% of guide price). The real spread is only visible in-game via margin-checking.",
  "Trend Reliability":   "Confidence level of trend and predictive indicators, based on how much historical data is available for this item.",
};


