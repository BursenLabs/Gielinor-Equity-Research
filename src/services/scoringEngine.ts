/**
 * @module services/scoringEngine
 * Pure-function scoring pipeline extracted from {@link MarketAnalyzerService}.
 *
 * Computes player-constrained liquidity scores, filters items by volume/price
 * bounds, and returns fully-populated {@link RankedItem} objects. The function
 * is deterministic (same inputs → same outputs) with no side-effects — all
 * network I/O and caching stay in the calling service.
 */

import type { RankedItem, StoredPriceRecord } from "./types";
import { calculateEMA, calculateVolatility, calculateLinearTrend } from "./timeSeries";
import { calculateGETax } from "./utils";

/**
 * Fill-rate factor for ROT estimation — a single player rarely captures
 * 100 % of hourly GE volume.  0.7 is a conservative middle-ground.
 */
export const ROT_FILL_FACTOR = 0.7;

/**
 * Compute player-constrained liquidity scores and apply all filters.
 *
 * For each record:
 *  - `effectivePlayerVolume = min(globalVolume, buyLimit × 6)`
 *    (falls back to `globalVolume` when `buyLimit` is unknown)
 *  - `maxCapitalPer4H = price × buyLimit` (0 when unknown)
 *  - `tradedValue = price × effectivePlayerVolume` (player-constrained)
 *
 * Volume filters (`minVolume` / `maxVolume`) are applied against the
 * **global daily GE volume** so that preset filters (High / Low)
 * reflect actual market liquidity rather than a single player's
 * buy-limit-constrained throughput.
 *
 * @param records         - Raw records from the cache.
 * @param minVolume       - Minimum global daily volume (inclusive lower bound).
 * @param maxVolume       - Maximum global daily volume (0 = no cap).
 * @param maxPrice        - Maximum item price in gp (0 = no cap).
 * @param avgVolumeMap    - Map of item name → 7-day SMA volume.
 * @param priceHistoryMap - Map of item name → chronological daily prices (excl. today).
 * @returns Scored items that pass all filters.
 */
export function scoreItems(
  records: StoredPriceRecord[],
  minVolume: number,
  maxVolume: number,
  maxPrice: number,
  avgVolumeMap: Map<string, number>,
  priceHistoryMap: Map<string, number[]>,
): RankedItem[] {
  const result: RankedItem[] = [];

  for (const record of records) {
    const globalVol = Number(record.volume) || 0;
    const limit = record.buyLimit != null && record.buyLimit > 0
      ? record.buyLimit
      : undefined;

    // Player-constrained daily volume: 6 × 4-hour windows per day.
    const dailyPlayerLimit = limit != null ? limit * 6 : globalVol;
    const effectivePlayerVolume = Math.min(globalVol, dailyPlayerLimit);

    // Apply filters against raw global daily volume so that High / Low
    // presets meaningfully distinguish market liquidity tiers.
    if (globalVol <= minVolume) continue;
    if (maxVolume > 0 && globalVol > maxVolume) continue;
    if (maxPrice > 0 && record.price > maxPrice) continue;

    const maxCapitalPer4H = limit != null ? record.price * limit : 0;

    // Tax gap: minimum spread (in gp) needed to break even after 2% GE tax.
    // Use floor-based tax to match the official RS3 engine rounding.
    const breakEvenSell = Math.ceil(record.price / 0.98);
    const breakEvenTax = calculateGETax(breakEvenSell);
    const taxGap = breakEvenTax + (breakEvenSell - record.price - breakEvenTax);

    // Recommended buy price: ~1% below current GE mid-price.
    const recBuyPrice = Math.max(
      1,
      Math.floor(record.price * 0.99)
    );
    // Recommended sell price: high enough above the buy price to cover
    // the 2% GE tax and still yield a meaningful margin.
    // Target: sell at ~3% above mid-price → ~2% spread after tax.
    let recSellPrice = Math.max(
      recBuyPrice + 1,
      Math.ceil(record.price * 1.03)
    );
    // High Alchemy floor: never recommend selling below the alch value.
    recSellPrice = Math.max(recSellPrice, typeof record.highAlch === "number" ? record.highAlch : 0);
    // Estimated per-item flip profit: sell − buy − 2% GE tax on the sale.
    // Official RS3 wiki formula: floor(price * 2%), exempt at ≤ 50 gp.
    const expectedTax = calculateGETax(recSellPrice);
    const estFlipProfit = recSellPrice - recBuyPrice - expectedTax;

    // Risk flag: only cheap items (< 500 gp) where the absolute tax
    // gap is large relative to realistic spreads.
    const isRisky = record.price < 500;

    // Volume spike: compare today's volume to the 7-day SMA.
    const avgVol = avgVolumeMap.get(record.name);
    let volumeSpikeMultiplier = 0;
    if (avgVol != null && avgVol > 0 && globalVol > avgVol * 1.5) {
      volumeSpikeMultiplier = +((globalVol / avgVol).toFixed(1));
    }

    // Price history sparkline data: historical prices + today.
    const histPrices = priceHistoryMap.get(record.name) ?? [];
    const priceHistory = [...histPrices, record.price];

    // ── Time-series indicators (30-day window) ────────────────────────
    const ema30d = calculateEMA(priceHistory);
    const volatility = calculateVolatility(priceHistory);
    const { slope: linearSlope, predictedNext: predictedNextPrice } =
      calculateLinearTrend(priceHistory);

    // 7-day price momentum: classify trend based on overall % change.
    let priceTrend: "Uptrend" | "Downtrend" | "Stable" = "Stable";
    if (priceHistory.length >= 2 && priceHistory[0] > 0) {
      const percentChange = (record.price - priceHistory[0]) / priceHistory[0];
      if (percentChange < -0.05) priceTrend = "Downtrend";
      else if (percentChange > 0.05) priceTrend = "Uptrend";
    }

    // Trade velocity: qualitative speed tier based on hourly volume vs buy limit.
    const hourlyVolume = Math.floor(globalVol / 24);
    const safeBuyLimit = (limit != null && limit > 0) ? limit : 0;
    let tradeVelocity: "Insta-Flip" | "Active" | "Slow" | "Very Slow";
    if (hourlyVolume > 5000 || (safeBuyLimit > 0 && hourlyVolume > safeBuyLimit * 5)) {
      tradeVelocity = "Insta-Flip";
    } else if (hourlyVolume > 500 || (safeBuyLimit > 0 && hourlyVolume > safeBuyLimit)) {
      tradeVelocity = "Active";
    } else if (hourlyVolume > 50) {
      tradeVelocity = "Slow";
    } else {
      tradeVelocity = "Very Slow";
    }

    // ── Return on Time (ROT) — gp/hr estimate ────────────────────────
    // ROT = estFlipProfit × estHourlyFillRate × fillFactor.
    // Hourly fill rate is globalVol / 24 (best available estimate from
    // the Weird Gloop rolling-24h volume — RS3 has no sub-daily API).
    const estHourlyFillRate = globalVol / 24;
    const returnOnTime = safeBuyLimit > 0 && estHourlyFillRate > 0
      ? Math.round(estFlipProfit * estHourlyFillRate * ROT_FILL_FACTOR)
      : 0;

    // ── Scoring adjustments based on predictive indicators ──────────
    let tradedValue = record.price * effectivePlayerVolume;
    // Reward upward-trending items (positive linear slope).
    if (linearSlope > 0) tradedValue *= 1.05;
    // Penalise highly volatile items (daily σ > 10 %).
    if (volatility > 0.10) tradedValue *= 0.90;

    // ── Data confidence indicators ──────────────────────────────────
    const historyDepth = priceHistory.length;
    const dataAgeMinutes = record.fetchedAt
      ? Math.round((Date.now() - record.fetchedAt) / 60_000)
      : 0;
    const trendReliability: "Low" | "Medium" | "High" =
      historyDepth >= 30 ? "High" : historyDepth >= 7 ? "Medium" : "Low";

    result.push({
      name: record.name,
      itemId: record.id,
      price: record.price,
      recBuyPrice,
      volume: globalVol,
      tradedValue,
      buyLimit: record.buyLimit,
      effectivePlayerVolume,
      maxCapitalPer4H,
      taxGap,
      recSellPrice,
      estFlipProfit,
      isRisky,
      volumeSpikeMultiplier,
      tradeVelocity,
      priceHistory,
      priceTrend,
      ema30d,
      volatility,
      returnOnTime,
      linearSlope,
      predictedNextPrice,
      highAlch: record.highAlch,
      historyDepth,
      dataAgeMinutes,
      trendReliability,
    });
  }

  return result;
}
