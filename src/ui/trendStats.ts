/**
 * @module ui/trendStats
 * Graph trend statistics: compute and render stat cards for price history charts.
 */

import { formatGp } from "../services";

const STAT_TIPS: Record<string, string> = {
  "Trend":         "Overall price direction over the selected time window. Uptrend (>+5%), Downtrend (>\u22125%), or Stable.",
  "Change":        "Absolute gp change and percentage change between the oldest and most recent price in the range.",
  "Current Price": "The latest mid-price reported by the Grand Exchange API.",
  "High":          "Highest recorded daily price within the selected time window.",
  "Low":           "Lowest recorded daily price within the selected time window.",
  "Volatility":    "Price range as a percentage of the lowest price \u2014 higher values mean wider swings and more risk.",
  "Data Points":   "Number of daily price snapshots available in the selected window. More points = more reliable trend data.",
};

/** Build a single stat-card HTML string with a tooltip `title` attribute. */
function statCardHtml(cls: string, label: string, value: string, tipKey: string, style?: string): string {
  const labelCls = cls === "analytics-stat-card" ? "analytics-stat-label" : "graph-stat-label";
  const valueCls = cls === "analytics-stat-card" ? "analytics-stat-value" : "graph-stat-value";
  const tip = STAT_TIPS[tipKey] ?? "";
  const styleAttr = style ? ` style="${style}"` : "";
  return (
    `<div class="${cls}" title="${tip}">` +
      `<span class="${labelCls}">${label}</span>` +
      `<span class="${valueCls}"${styleAttr}>${value}</span>` +
    `</div>`
  );
}

// ─── Graph trend stats ──────────────────────────────────────────────────────

/** Computed trend statistics for a price history chart. */
export interface GraphTrendStats {
  trendLabel: string;
  trendColour: string;
  trendIcon: string;
  pctChange: number;
  absChange: number;
  currentPrice: number;
  highPrice: number;
  lowPrice: number;
  volatility: number;
  dataPoints: number;
}

/** Compute trend statistics from an array of historical prices, ending at the current price. */
export function computeGraphTrendStats(hist: number[], currentPrice: number): GraphTrendStats {
  const hasData = hist.length >= 2;
  const oldestPrice = hasData ? hist[0] : currentPrice;
  const highPrice = hasData ? Math.max(...hist) : currentPrice;
  const lowPrice = hasData ? Math.min(...hist) : currentPrice;
  const pctChange = oldestPrice > 0 ? ((currentPrice - oldestPrice) / oldestPrice) * 100 : 0;
  const absChange = currentPrice - oldestPrice;
  const volatility = hasData ? ((highPrice - lowPrice) / lowPrice) * 100 : 0;

  const trendLabel = pctChange < -5 ? "Downtrend" : pctChange > 5 ? "Uptrend" : "Stable";
  const trendColour = trendLabel === "Uptrend" ? "var(--accent-green-bright, #4ec9b0)"
    : trendLabel === "Downtrend" ? "var(--accent-red, #f44747)" : "var(--text-muted, #888)";
  const trendIcon = trendLabel === "Uptrend" ? "\uD83D\uDCC8" : trendLabel === "Downtrend" ? "\u26A0\uFE0F" : "\u27A1\uFE0F";

  return {
    trendLabel,
    trendColour,
    trendIcon,
    pctChange,
    absChange,
    currentPrice,
    highPrice,
    lowPrice,
    volatility,
    dataPoints: hist.length,
  };
}

/**
 * Build the stat card HTML for chart trend stats.
 * @param stats    - Pre-computed trend statistics.
 * @param range    - Number of days for the range label (e.g. 7, 30, 90).
 * @param cssClass - CSS class for each stat card (e.g. "graph-stat-row" or "analytics-stat-card").
 */
export function buildGraphStatsHtml(stats: GraphTrendStats, range: number, cssClass: string): string {
  return (
    statCardHtml(cssClass, `${range}-Day Trend`, `${stats.trendIcon} ${stats.trendLabel}`, "Trend", `color:${stats.trendColour}`) +
    statCardHtml(cssClass, "Change", `${stats.absChange >= 0 ? "+" : ""}${formatGp(stats.absChange)} gp (${stats.pctChange >= 0 ? "+" : ""}${stats.pctChange.toFixed(1)}%)`, "Change", `color:${stats.trendColour}`) +
    statCardHtml(cssClass, "Current Price", `${stats.currentPrice.toLocaleString("en-US")} gp`, "Current Price") +
    statCardHtml(cssClass, `${range}-Day High`, `${stats.highPrice.toLocaleString("en-US")} gp`, "High") +
    statCardHtml(cssClass, `${range}-Day Low`, `${stats.lowPrice.toLocaleString("en-US")} gp`, "Low") +
    statCardHtml(cssClass, "Volatility", `${stats.volatility.toFixed(1)}%`, "Volatility") +
    statCardHtml(cssClass, "Data Points", `${stats.dataPoints} day${stats.dataPoints !== 1 ? "s" : ""}`, "Data Points")
  );
}
