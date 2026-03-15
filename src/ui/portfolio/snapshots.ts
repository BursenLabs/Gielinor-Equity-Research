/**
 * @module ui/snapshots
 * Flip snapshot builders and ranked-item lookup helpers.
 */

import type { FlipSnapshot, RankedItem } from "../../services";
import { getLatestTopItems, getLatestSearchResults } from "../state";

/** Build a {@link FlipSnapshot} from a {@link RankedItem}'s current metrics. */
export function buildSnapshot(item: RankedItem): FlipSnapshot {
  return {
    price: item.price,
    volume: item.volume,
    buyLimit: item.buyLimit,
    tradeVelocity: item.tradeVelocity,
    priceTrend: item.priceTrend,
    ema30d: item.ema30d,
    volatility: item.volatility,
    estFlipProfit: item.estFlipProfit,
    returnOnTime: item.returnOnTime,
  };
}

/** Look up a {@link RankedItem} by name across all in-memory scored lists. */
export function findRankedItem(name: string): RankedItem | undefined {
  const lc = name.toLowerCase();
  return getLatestTopItems().find((i) => i.name.toLowerCase() === lc)
    ?? getLatestSearchResults().find((i) => i.name.toLowerCase() === lc);
}
