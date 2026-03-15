/**
 * @module ui/detailBuilder
 * Grouped detail panel HTML for market cards and modals.
 */

import type { RankedItem } from "../../services";
import { formatGp } from "../../services";
import {
  DETAIL_LABELS,
  DETAIL_TIPS,
} from "../constants";
import {
  formatVolume,
  formatDataAge,
} from "../formatters";
import {
  computeProfitabilityMetrics,
} from "../portfolio/metrics";

// ─── Detail panel HTML builder ──────────────────────────────────────────────

/** Options controlling which sections/rows appear in the detail panel. */
export interface DetailPanelOptions {
  /** Show the "High Alch" row in Pricing group (default: true). */
  showHighAlch?: boolean;
  /** Show the Predictive Analytics group (default: true). */
  showPredictive?: boolean;
  /** Show the "LR Slope" row in the Predictive group (default: true). */
  showLRSlope?: boolean;
  /** How to render Volume Spike when absent: omit the row or show "Normal" (default: "omit"). */
  volumeSpikeWhenAbsent?: "omit" | "normal";
}

/**
 * Build a single detail-row HTML string.
 *
 * @param key   - Lookup key into {@link DETAIL_LABELS} / {@link DETAIL_TIPS}.
 * @param value - Pre-formatted display value.
 * @param cls   - Optional extra CSS class(es) for the value span.
 */
function row(key: string, value: string, cls?: string): string {
  const classAttr = cls ? ` ${cls}` : "";
  return `<div class="detail-row"><span class="detail-label" title="${DETAIL_TIPS[key] ?? ""}">${DETAIL_LABELS[key] ?? key}</span><span class="detail-value${classAttr}">${value}</span></div>`;
}

/** Signed number prefix: "+" for positive, "" for zero/negative. */
function sign(n: number): string { return n > 0 ? "+" : ""; }

/** Build the grouped detail rows HTML string for a ranked item. */
export function buildDetailGroupsHtml(item: RankedItem, opts?: DetailPanelOptions): string {
  const showHighAlch = opts?.showHighAlch !== false;
  const showPredictive = opts?.showPredictive !== false;
  const showLRSlope = opts?.showLRSlope !== false;
  const volumeSpikeWhenAbsent = opts?.volumeSpikeWhenAbsent ?? "omit";

  const { roiPct, profitPer4H, volAdjMargin, alchSafety } = computeProfitabilityMetrics(item);

  const emaPct = item.ema30d > 0 && item.price > 0
    ? ((item.price - item.ema30d) / item.ema30d) * 100 : 0;
  const emaSignal = emaPct > 2 ? "bullish" : emaPct < -2 ? "bearish" : "neutral";
  const emaPosLabel = Math.abs(emaPct) < 0.05 ? "at" : emaPct >= 0 ? "above" : "below";
  const predPct = item.predictedNextPrice > 0 && item.price > 0
    ? ((item.predictedNextPrice - item.price) / item.price) * 100 : 0;

  // Volume spike row
  let volumeSpikeRow: string;
  if (item.volumeSpikeMultiplier > 1.5) {
    volumeSpikeRow = row("Volume Spike", `\uD83D\uDD25 ${item.volumeSpikeMultiplier}x above 7-day avg`, "hype-text");
  } else if (volumeSpikeWhenAbsent === "normal") {
    volumeSpikeRow = row("Volume Spike", "Normal");
  } else {
    volumeSpikeRow = "";
  }

  // High Alch display value
  const alchDisplay = typeof item.highAlch === "number"
    ? item.highAlch.toLocaleString("en-US") + " gp"
    : item.highAlch === false ? "Not Alchable" : "Unknown";

  const rows: string[] = [
    // ── Pricing ──
    `<div class="detail-group">`,
    `<div class="detail-group-title">Pricing</div>`,
    row("GE Price", `${item.price.toLocaleString("en-US")} gp`),
    row("Rec. Buy Price", `${item.recBuyPrice.toLocaleString("en-US")} gp`, "buy-highlight"),
    row("Rec. Sell Price", `${item.recSellPrice.toLocaleString("en-US")} gp`, "sell-highlight"),
  ];
  if (showHighAlch) {
    rows.push(row("High Alch", alchDisplay));
  }
  rows.push(`</div>`);

  // ── Profitability ──
  const profitCls = (v: number) => v <= 0 ? "risky-text" : "profit-highlight";
  rows.push(
    `<div class="detail-group">`,
    `<div class="detail-group-title">Profitability</div>`,
    row("Est. Flip Profit", `${sign(item.estFlipProfit)}${item.estFlipProfit.toLocaleString("en-US")} gp/ea`, profitCls(item.estFlipProfit)),
    row("ROI %", `${sign(roiPct)}${roiPct.toFixed(2)}%`, profitCls(roiPct)),
    row("Profit per 4H", `${sign(profitPer4H)}${formatGp(profitPer4H)} gp`, profitCls(profitPer4H)),
    row("Return on Time", item.returnOnTime > 0 ? `${formatGp(Math.round(item.returnOnTime))} gp/hr` : "N/A"),
    row("Tax Gap", `${formatGp(item.taxGap)} gp${item.isRisky ? " \u26a0 risky" : ""}`, item.isRisky ? "risky-text" : undefined),
    row("Est. Margin (2% tax)", `${formatGp(Math.round(item.price * 0.02))} gp`),
    row("Vol-Adj Margin", `${sign(volAdjMargin)}${formatGp(volAdjMargin)} gp${volAdjMargin < 0 ? " \u26a0" : ""}`, volAdjMargin < 0 ? "risky-text" : "profit-highlight"),
  );
  rows.push(
    alchSafety !== null
      ? row("Alch Safety", `${sign(alchSafety)}${formatGp(alchSafety)} gp/ea`, alchSafety < 0 ? "risky-text" : "profit-highlight")
      : row("Alch Safety", "N/A"),
  );
  rows.push(`</div>`);

  // ── Volume & Liquidity ──
  rows.push(
    `<div class="detail-group">`,
    `<div class="detail-group-title">Volume &amp; Liquidity</div>`,
    row("24h Global Vol", formatVolume(item.volume)),
    row("Eff. Player Vol", formatVolume(item.effectivePlayerVolume)),
  );
  if (volumeSpikeRow) rows.push(volumeSpikeRow);
  rows.push(
    row("Buy Limit (4h)", item.buyLimit != null ? item.buyLimit.toLocaleString("en-US") : "Unknown"),
    row("Max Capital (4h)", item.maxCapitalPer4H > 0 ? `${formatGp(item.maxCapitalPer4H)} gp` : "Unknown"),
    row("Player Traded Val", `${formatGp(item.tradedValue)} gp`),
    `</div>`,
  );

  // ── Predictive Analytics ──
  if (showPredictive) {
    const emaVal = item.ema30d > 0
      ? `${formatGp(Math.round(item.ema30d))} gp (${sign(emaPct)}${emaPct.toFixed(1)}% ${emaPosLabel} \u2014 ${emaSignal})`
      : "Insufficient data";
    const volVal = item.volatility > 0 ? `${(item.volatility * 100).toFixed(1)}%` : "Insufficient data";
    const predVal = item.predictedNextPrice > 0
      ? `${formatGp(Math.round(item.predictedNextPrice))} gp (${sign(predPct)}${predPct.toFixed(1)}%)`
      : "Insufficient data";
    const slopeVal = item.linearSlope !== 0
      ? `${sign(item.linearSlope)}${formatGp(Math.round(item.linearSlope))} gp/day`
      : "Insufficient data";

    rows.push(
      `<div class="detail-group detail-group-predictive">`,
      `<div class="detail-group-title">Predictive Analytics</div>`,
      row("30d EMA", emaVal),
      row("Daily Volatility", volVal),
    );
    if (showLRSlope) {
      rows.push(row("LR Slope", slopeVal));
    }
    rows.push(
      row("Predicted Price", predVal),
      `</div>`,
    );
  }

  // ── Data Confidence ──
  rows.push(
    `<div class="detail-group detail-group-confidence">`,
    `<div class="detail-group-title">Data Confidence</div>`,
    row("History Depth", `${item.historyDepth} data point${item.historyDepth !== 1 ? "s" : ""}`),
    row("Data Freshness", formatDataAge(item.dataAgeMinutes), item.dataAgeMinutes > 1440 ? "risky-text" : undefined),
    row("Spread Confidence", "Estimated (\u00b11\u20133%)"),
    row("Trend Reliability", `${item.trendReliability === "Low" ? "\u26a0 " : item.trendReliability === "High" ? "\u2705 " : ""}${item.trendReliability}`, `confidence-${item.trendReliability.toLowerCase()}`),
    `</div>`,
  );

  return rows.filter(Boolean).join("");
}
