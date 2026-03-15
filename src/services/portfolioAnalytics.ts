/**
 * @module services/portfolioAnalytics
 * Pure-function statistics over completed flip history.
 *
 * Extracted from {@link PortfolioService} to honour SRP — the service owns
 * CRUD + persistence while this module owns the read-only aggregation math.
 */

import type { CompletedFlip, PortfolioStats } from "./types";

/**
 * Aggregate statistics across a set of completed flips.
 *
 * @param flips - The completed-flip array (order does not matter).
 * @returns A {@link PortfolioStats} summary. Returns zeroed stats when the
 *          array is empty.
 */
export function computePortfolioStats(flips: ReadonlyArray<CompletedFlip>): PortfolioStats {
  const total = flips.length;
  if (total === 0) {
    return { totalProfit: 0, totalFlips: 0, avgProfit: 0, avgRoi: 0 };
  }
  let profit = 0;
  let totalCost = 0;
  for (const f of flips) {
    profit += f.realizedProfit;
    totalCost += f.buyPrice * f.quantity;
  }
  return {
    totalProfit: profit,
    totalFlips: total,
    avgProfit: Math.round(profit / total),
    avgRoi: totalCost > 0 ? profit / totalCost : 0,
  };
}
