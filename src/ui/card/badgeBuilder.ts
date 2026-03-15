/**
 * @module ui/badgeBuilder
 * Header badge HTML generation for market cards and modals.
 */

import type { RankedItem } from "../../services";
import { formatGp } from "../../services";

// ─── Velocity constant maps ─────────────────────────────────────────────────

/** Velocity → CSS class map. */
export const VELOCITY_CLASS_MAP: Record<string, string> = {
  "Insta-Flip": "velocity-insta",
  "Active": "velocity-active",
  "Slow": "velocity-slow",
  "Very Slow": "velocity-veryslow",
};

/** Velocity → tooltip text map. */
export const VELOCITY_TIP_MAP: Record<string, string> = {
  "Insta-Flip": "Very high hourly volume \u2014 offers typically fill within seconds to a few minutes.",
  "Active": "Solid hourly volume \u2014 expect fills within a few minutes to ~30 min.",
  "Slow": "Low hourly volume \u2014 may take 30 min to several hours to fill.",
  "Very Slow": "Very low hourly volume \u2014 fills can take many hours or may not complete in a 4 h window.",
};

// ─── Badge HTML builder ─────────────────────────────────────────────────────

/** Options controlling which header badges appear. */
export interface BadgeOptions {
  /** Show EMA badge (default: true). Cards omit this. */
  showEma?: boolean;
  /** Show volatility badge (default: true). Cards omit this. */
  showVol?: boolean;
  /** Append OLS confidence note to forecast tooltip (default: false). Cards enable this. */
  forecastConfidence?: boolean;
}

/** Build the header badge HTML string for a ranked item. */
export function buildHeaderBadgesHtml(item: RankedItem, opts?: BadgeOptions): string {
  const showEma = opts?.showEma !== false;
  const showVol = opts?.showVol !== false;
  const forecastConf = opts?.forecastConfidence === true;

  return [
    `<span class="profit-badge${item.estFlipProfit <= 0 ? " negative" : ""}" title="Estimated profit per item after paying the 2% GE tax on the sale.">${item.estFlipProfit > 0 ? "+" : ""}${formatGp(item.estFlipProfit)}/ea</span>`,
    `<span class="velocity-badge ${VELOCITY_CLASS_MAP[item.tradeVelocity] ?? "velocity-slow"}" title="${VELOCITY_TIP_MAP[item.tradeVelocity] ?? ""}">${item.tradeVelocity}</span>`,
    item.volumeSpikeMultiplier > 1.5
      ? `<span class="hype-badge">\uD83D\uDD25 ${item.volumeSpikeMultiplier}x Vol</span>`
      : "",
    item.priceTrend === "Downtrend"
      ? `<span class="trend-badge trend-downtrend" title="Price has dropped more than 5% over the last 7 days \u2014 potential falling knife.">\u26A0\uFE0F Crashing</span>`
      : item.priceTrend === "Uptrend"
        ? `<span class="trend-badge trend-uptrend" title="Price has risen more than 5% over the last 7 days \u2014 positive momentum.">\uD83D\uDCC8 Rising</span>`
        : "",
    showEma && item.ema30d > 0 && item.price > 0
      ? (() => {
          const ep = ((item.price - item.ema30d) / item.ema30d) * 100;
          const er = Math.abs(ep).toFixed(1);
          const ed = Number(er) === 0 ? "neutral" : ep > 0 ? "up" : "down";
          const ea = ed === "up" ? "\u2191" : ed === "down" ? "\u2193" : "";
          return `<span class="ema-badge ${ed}" title="30-day EMA: ${formatGp(Math.round(item.ema30d))} gp. Price is ${er}% ${ed === "neutral" ? "at" : ep >= 0 ? "above" : "below"} average.">EMA ${ea}${er}%</span>`;
        })()
      : "",
    item.predictedNextPrice > 0 && item.price > 0
      ? (() => {
          const pp = ((item.predictedNextPrice - item.price) / item.price) * 100;
          if (Math.abs(pp) < 0.1) return "";
          const pd = pp > 0.1 ? "up" : "down";
          const confSuffix = forecastConf ? ` Based on OLS regression \u2014 ${item.trendReliability} confidence.` : "";
          return `<span class="predicted-badge ${pd}" title="Predicted next price: ${formatGp(Math.round(item.predictedNextPrice))} gp (${item.linearSlope >= 0 ? "+" : ""}${formatGp(Math.round(item.linearSlope))} gp/day).${confSuffix}">Est ${pp >= 0 ? "+" : ""}${pp.toFixed(1)}%</span>`;
        })()
      : "",
    showVol && item.volatility > 0
      ? `<span class="vol-badge" title="Daily price volatility: ${(item.volatility * 100).toFixed(1)}% std deviation.">Vol ${(item.volatility * 100).toFixed(1)}%</span>`
      : "",
  ].filter(Boolean).join("");
}
