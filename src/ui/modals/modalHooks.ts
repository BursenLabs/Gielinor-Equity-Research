/**
 * @module ui/modals/modalHooks
 * Forward-declaration hooks that break circular dependencies between
 * modal dialogs and the market panel.
 */

import type { RankedItem } from "../../services";

/** Forward ref to renderMarketItems — wired in initUI. */
let _renderMarketItems: (items: RankedItem[]) => void = () => {};

/** Register the market-panel render callback used by modals. */
export function setRenderMarketItemsHook(fn: (items: RankedItem[]) => void): void {
  _renderMarketItems = fn;
}

/** @deprecated Use the market panel directly. Thin wrapper kept for backward compat. */
export function renderItemList(items: RankedItem[]): void {
  _renderMarketItems(items);
}
