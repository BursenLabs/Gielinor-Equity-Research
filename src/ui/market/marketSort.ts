/**
 * @module ui/marketSort
 * Shared sort helper for ranked item lists (Top 20, Search, Favourites).
 */

import type { RankedItem } from "../../services";

export function applySortOrder(items: RankedItem[], sortKey: string): RankedItem[] {
  if (sortKey === "default") {
    items.sort((a, b) => b.tradedValue - a.tradedValue);
  } else if (sortKey === "alpha") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortKey === "price-desc") {
    items.sort((a, b) => b.price - a.price);
  } else if (sortKey === "profit-desc") {
    items.sort((a, b) => b.estFlipProfit - a.estFlipProfit);
  } else if (sortKey === "rot-desc") {
    items.sort((a, b) => b.returnOnTime - a.returnOnTime);
  }
  return items;
}
