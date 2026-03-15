/**
 * @module ui/helpers
 * Cross-cutting coordination hooks, workflows, and generic utilities
 * shared across multiple UI modules.
 *
 * Domain-specific helpers have been extracted:
 *  - Profitability metrics → {@link ./metrics}
 *  - Favourites persistence → {@link ./favouritesData}
 *  - Snapshot / item lookup → {@link ./snapshots}
 *
 * audit:no-op(DRY-2) — A `bindPersistentInput(el, key)` helper was
 * evaluated for the ~28 localStorage↔DOM bindings across the UI layer.
 * Only 3 of 28 have zero side effects; the rest include re-renders,
 * theme invalidation, visibility toggles, or batched saves. A helper
 * would save ~2 lines per call but require callback params for every
 * case, adding abstraction without meaningful deduplication.
 */

import type { RankedItem } from "../services";
import {
  getAnalyzer,
  setSuppressAutocomplete,
} from "./state";
import { getEls } from "./domRefs";
import { findRankedItem } from "./portfolio/snapshots";

// ─── Debounce utility ───────────────────────────────────────────────────────

export function debounce<T extends (...args: any[]) => void>(fn: T, ms: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  }) as unknown as T;
}

// ─── DOM helpers ────────────────────────────────────────────────────────────

/** Create a `<button type="button">` with common attributes in one call. */
export function createButton(opts: {
  cls: string;
  text: string;
  title?: string;
  ariaLabel?: string;
  onClick?: (e: Event) => void;
}): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = opts.cls;
  btn.textContent = opts.text;
  if (opts.title) btn.title = opts.title;
  if (opts.ariaLabel) btn.setAttribute("aria-label", opts.ariaLabel);
  if (opts.onClick) btn.addEventListener("click", opts.onClick);
  return btn;
}

// ─── Cross-module hooks ─────────────────────────────────────────────────────

// Analytics modal hook
let _showAnalyticsModal: ((item: RankedItem) => void) | null = null;
export function setShowAnalyticsModalHook(fn: (item: RankedItem) => void): void { _showAnalyticsModal = fn; }
export function getShowAnalyticsModalHook(): ((item: RankedItem) => void) | null { return _showAnalyticsModal; }

// Tab switching hook
let _switchTab: ((tab: "market" | "advisor" | "portfolio") => void) | null = null;
export function setSwitchTabHook(fn: (tab: "market" | "advisor" | "portfolio") => void): void { _switchTab = fn; }

// Autocomplete close hook
let _closeItemSuggestions: (() => void) | null = null;
export function setCloseItemSuggestionsHook(fn: () => void): void { _closeItemSuggestions = fn; }

// ─── Cross-module workflows ─────────────────────────────────────────────────

/** Look up a RankedItem by name and open the analytics modal. */
export async function openAnalyticsForName(name: string): Promise<void> {
  let item = findRankedItem(name);
  if (!item) {
    const results = await getAnalyzer().getItemsByNames(new Set([name]));
    item = results[0];
  }
  if (item) _showAnalyticsModal?.(item);
}

/** Pre-fill the portfolio flip form with the given item data. */
export function quickAddToPortfolio(item: RankedItem): void {
  setSuppressAutocomplete(true);
  _switchTab?.("portfolio");

  const els = getEls();

  // Ensure the Active Flips sub-tab is visible (not History & Stats)
  els.portfolioActiveBtn.click();
  els.flipItemName.value = item.name;
  els.flipBuyPrice.value = String(item.recBuyPrice);
  els.flipSellPrice.value = String(item.recSellPrice);
  els.flipQuantity.value = "";

  _closeItemSuggestions?.();
  els.flipQuantity.focus();

  requestAnimationFrame(() => { setSuppressAutocomplete(false); });
}


