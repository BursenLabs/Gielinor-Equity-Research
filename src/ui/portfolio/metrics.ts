/**
 * @module ui/metrics
 * Computed profitability metrics derived from RankedItem data.
 */

import type { RankedItem } from "../../services";

/** Computed profitability metrics derived from a ranked item. */
export interface ProfitabilityMetrics {
  roiPct: number;
  profitPer4H: number;
  volAdjMargin: number;
  alchSafety: number | null;
}

/** Compute derived profitability metrics from a ranked item. */
export function computeProfitabilityMetrics(item: RankedItem): ProfitabilityMetrics {
  return {
    roiPct: item.recBuyPrice > 0 ? (item.estFlipProfit / item.recBuyPrice) * 100 : 0,
    profitPer4H: (item.buyLimit ?? 0) > 0 ? item.estFlipProfit * item.buyLimit! : 0,
    volAdjMargin: item.estFlipProfit - Math.round(item.price * item.volatility),
    alchSafety: typeof item.highAlch === "number" ? item.highAlch - item.recBuyPrice : null,
  };
}
