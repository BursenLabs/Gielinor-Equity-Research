/**
 * @module marketDataFormatter
 * Pure formatting functions that serialise {@link RankedItem} arrays into
 * LLM-ready and human-readable string blocks.
 *
 * Extracted from {@link MarketAnalyzerService} so that scoring/ranking
 * and presentation are separate concerns.
 *
 * audit:no-op(DRY-4) — formatForLLM and formatForLLMCompact read the
 * same RankedItem fields but format them differently (full labels +
 * toLocaleString vs. abbreviated labels + formatGp). No shared
 * intermediate is extractable; the duplication is in trivial property
 * access, not logic.
 */

import type { RankedItem } from "./types";

/**
 * Number of top items (by traded value, no filters) included in the LLM
 * chat context.  50 items in compact format ≈ 6–8 KB — comfortably fits
 * alongside the system prompt and truncated wiki text within a 50 KB
 * payload budget.
 */
export const LLM_CONTEXT_TOP_N = 50;

/**
 * Format a large gp value into a human-readable abbreviated string.
 *
 * | Range               | Suffix | Example |
 * |---------------------|--------|---------|
 * | ≥ 1 000 000 000 000 | T      | 2.65T   |
 * | ≥ 1 000 000 000     | B      | 1.42B   |
 * | ≥ 1 000 000         | M      | 312.5M  |
 * | ≥ 1 000             | K      | 4.2K    |
 * | < 1 000             | (raw)  | 750     |
 *
 * @param value - Raw gp amount.
 * @returns Abbreviated string with up to 2 decimal places.
 */
export function formatGp(value: number): string {
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (abs >= 1_000_000_000_000) return `${sign}${(abs / 1_000_000_000_000).toFixed(2)}T`;
  if (abs >= 1_000_000_000) return `${sign}${(abs / 1_000_000_000).toFixed(2)}B`;
  if (abs >= 1_000_000) return `${sign}${(abs / 1_000_000).toFixed(2)}M`;
  if (abs >= 1_000) return `${sign}${(abs / 1_000).toFixed(2)}K`;
  return `${sign}${abs.toLocaleString("en-US")}`;
}

/**
 * Serialise a list of {@link RankedItem} objects into a compact,
 * human-readable (and LLM-friendly) string block.
 *
 * @param items - Pre-ranked items (as returned by `getTopItems`).
 * @returns Multi-line string suitable for embedding in an LLM prompt.
 */
export function formatForLLM(items: RankedItem[]): string {
  if (items.length === 0) {
    return "[No liquid items available — cache may be empty.]";
  }

  const header = `=== RS3 Grand Exchange — Top ${items.length} by Player Traded Value ===`;
  const divider = "=".repeat(header.length);

  const lines = items.map((item, idx) => {
    const rank = String(idx + 1).padStart(2, " ");
    const price = formatGp(item.price);
    const limit = item.buyLimit != null
      ? item.buyLimit.toLocaleString("en-US")
      : "Unknown";
    const effVol = item.effectivePlayerVolume.toLocaleString("en-US");
    const cap4h = item.maxCapitalPer4H > 0
      ? `${formatGp(item.maxCapitalPer4H)} gp`
      : "Unknown";
    const risk = item.isRisky ? " ⚠ RISKY" : "";
    const recBuy = formatGp(item.recBuyPrice);
    const recSell = formatGp(item.recSellPrice);
    const flipPft = formatGp(item.estFlipProfit);
    const hype = item.volumeSpikeMultiplier > 0
      ? ` | 🔥 ${item.volumeSpikeMultiplier}x Vol Spike`
      : "";
    const slope = item.linearSlope >= 0 ? `+${item.linearSlope.toFixed(1)}` : item.linearSlope.toFixed(1);
    const vol = (item.volatility * 100).toFixed(1);
    const predicted = formatGp(Math.round(item.predictedNextPrice));
    const alch = typeof item.highAlch === "number" && item.highAlch > 0
      ? `High Alch: ${formatGp(item.highAlch)} gp`
      : item.highAlch === false ? "High Alch: Not Alchable" : "High Alch: Unknown";
    const velocity = item.tradeVelocity;
    const rot = formatGp(item.returnOnTime);
    const histLen = item.priceHistory.length;
    const histNote = histLen < 3 ? " [LIMITED DATA]" : "";
    return `${rank}. ${item.name} | GE Price: ${price} gp | Buy ≤ ${recBuy} | Sell ≥ ${recSell} | Profit: ${flipPft} gp/ea | Limit: ${limit} | Eff. Vol: ${effVol} | Max 4H Capital: ${cap4h} | Tax Gap: ${formatGp(item.taxGap)} gp | ${alch} | Velocity: ${velocity} | ROT: ${rot} gp/hr | 30d Trend Slope: ${slope} | Volatility: ${vol}%${histNote} | Predicted 24h Price: ${predicted} gp${risk}${hype}`;
  });

  return [header, ...lines, divider].join("\n");
}

/**
 * Compact LLM serialisation — abbreviated field labels to reduce payload size.
 *
 * Header line explains the field order so each data line stays short.
 *
 * @param items - Pre-ranked items.
 * @returns Multi-line string optimised for minimal payload size.
 */
export function formatForLLMCompact(items: RankedItem[]): string {
  if (items.length === 0) {
    return "[No liquid items available — cache may be empty.]";
  }

  const header = `=== RS3 Grand Exchange — Top ${items.length} by Traded Value (unfiltered) ===`;
  const legend = "# Fields: Name | Price | Buy | Sell | Profit | Limit | EffVol | 4HCap | TaxGap | Alch | Velocity | ROT(gp/hr) | Slope | Vol% | Pred | Flags";

  const lines = items.map((item, idx) => {
    const rank = String(idx + 1).padStart(2, " ");
    const price = formatGp(item.price);
    const buy = formatGp(item.recBuyPrice);
    const sell = formatGp(item.recSellPrice);
    const profit = formatGp(item.estFlipProfit);
    const limit = item.buyLimit != null
      ? formatGp(item.buyLimit)
      : "?";
    const effVol = formatGp(item.effectivePlayerVolume);
    const cap4h = item.maxCapitalPer4H > 0
      ? formatGp(item.maxCapitalPer4H)
      : "?";
    const taxGap = formatGp(item.taxGap);
    const alch = typeof item.highAlch === "number" && item.highAlch > 0
      ? formatGp(item.highAlch)
      : item.highAlch === false ? "N/A" : "?";
    const velocity = item.tradeVelocity;
    const rot = formatGp(item.returnOnTime);
    const slope = item.linearSlope >= 0
      ? `+${item.linearSlope.toFixed(1)}`
      : item.linearSlope.toFixed(1);
    const vol = `${(item.volatility * 100).toFixed(1)}%`;
    const pred = formatGp(Math.round(item.predictedNextPrice));
    const flags: string[] = [];
    if (item.isRisky) flags.push("⚠RISKY");
    if (item.priceHistory.length < 3) flags.push("LIMITED-DATA");
    if (item.volumeSpikeMultiplier > 0) flags.push(`🔥${item.volumeSpikeMultiplier}x`);
    const flagStr = flags.length > 0 ? " " + flags.join(" ") : "";
    return `${rank}. ${item.name} | ${price} | ${buy} | ${sell} | ${profit} | ${limit} | ${effVol} | ${cap4h} | ${taxGap} | ${alch} | ${velocity} | ${rot} | ${slope} | ${vol} | ${pred}${flagStr}`;
  });

  return [header, legend, ...lines].join("\n");
}
