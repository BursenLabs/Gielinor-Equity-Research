/**
 * @module ui/actionBuilder
 * Action buttons (favourite, portfolio, wiki, GE links) and alert input wiring.
 */

import type { RankedItem } from "../../services";
import {
  getFavorites,
  toggleFavorite,
  getFavoriteAlerts,
  setFavoriteAlerts,
} from "../favouritesData";
import { quickAddToPortfolio } from "../helpers";

// ─── Alert input wiring ─────────────────────────────────────────────────────

/** Options for {@link wireAlertInputs}. */
export interface AlertWireOptions {
  /** CSS selector for the buy-alert input within `container`. */
  buySelector: string;
  /** CSS selector for the sell-alert input within `container`. */
  sellSelector: string;
  /** Called after alerts are saved so the caller can update UI (e.g. star button, active class). */
  onSave?: (hasBuy: boolean, hasSell: boolean) => void;
}

/**
 * Populate and wire change listeners on a pair of alert inputs inside `container`.
 * Auto-favourites the item when an alert value is set.
 */
export function wireAlertInputs(
  container: HTMLElement,
  itemName: string,
  opts: AlertWireOptions,
): void {
  const buyInput = container.querySelector<HTMLInputElement>(opts.buySelector);
  const sellInput = container.querySelector<HTMLInputElement>(opts.sellSelector);
  if (!buyInput || !sellInput) return;

  const existing = getFavoriteAlerts(itemName);
  if (existing?.targetBuy) buyInput.value = String(existing.targetBuy);
  if (existing?.targetSell) sellInput.value = String(existing.targetSell);

  const save = (): void => {
    const bv = buyInput.value ? Number(buyInput.value) : undefined;
    const sv = sellInput.value ? Number(sellInput.value) : undefined;
    if ((bv || sv) && !getFavorites().has(itemName)) {
      toggleFavorite(itemName);
    }
    setFavoriteAlerts(itemName, bv, sv);
    opts.onSave?.(!!bv, !!sv);
  };

  buyInput.addEventListener("change", save);
  sellInput.addEventListener("change", save);
}

// ─── Action button builders ─────────────────────────────────────────────────

/** Options for {@link buildItemActionButtons}. */
export interface ActionButtonOptions {
  /** Called before quickAddToPortfolio (e.g. to close a modal). */
  onClose?: () => void;
  /** When true, all buttons/links call `e.stopPropagation()`. Needed for card context. */
  stopPropagation?: boolean;
  /** Called after fav toggle with the new favourite state. */
  onFavToggle?: (isFav: boolean) => void;
}

/**
 * Build the standard set of action buttons for an item.
 * Returns `[favBtn, addBtn, wikiLink, geLink]` in DOM order.
 */
export function buildItemActionButtons(
  item: RankedItem,
  opts?: ActionButtonOptions,
): [HTMLButtonElement, HTMLButtonElement, HTMLAnchorElement, HTMLAnchorElement] {
  const stop = opts?.stopPropagation ?? false;

  const favBtn = document.createElement("button");
  favBtn.className = "fav-btn modal-fav-btn";
  favBtn.textContent = getFavorites().has(item.name) ? "\u2605" : "\u2606";
  favBtn.title = "Toggle favourite";
  favBtn.setAttribute("aria-label", `Toggle favourite for ${item.name}`);
  favBtn.setAttribute("aria-pressed", String(getFavorites().has(item.name)));
  favBtn.addEventListener("click", (e) => {
    if (stop) e.stopPropagation();
    const nowFav = toggleFavorite(item.name);
    favBtn.textContent = nowFav ? "\u2605" : "\u2606";
    favBtn.setAttribute("aria-pressed", String(nowFav));
    opts?.onFavToggle?.(nowFav);
  });

  const addBtn = document.createElement("button");
  addBtn.className = "quick-add-btn modal-quick-add-btn";
  addBtn.textContent = "+";
  addBtn.title = "Add to portfolio";
  addBtn.setAttribute("aria-label", `Add ${item.name} to portfolio`);
  addBtn.addEventListener("click", (e) => {
    if (stop) e.stopPropagation();
    opts?.onClose?.();
    quickAddToPortfolio(item);
  });

  const wikiLink = document.createElement("a");
  wikiLink.className = "ext-link wiki-link";
  wikiLink.href = `https://runescape.wiki/w/${encodeURIComponent(item.name)}`;
  wikiLink.target = "_blank";
  wikiLink.rel = "noopener noreferrer";
  wikiLink.textContent = "Wiki";
  wikiLink.title = "Open on RS3 Wiki";
  if (stop) wikiLink.addEventListener("click", (e) => e.stopPropagation());

  const geLink = document.createElement("a");
  geLink.className = "ext-link ge-link";
  geLink.href = `https://secure.runescape.com/m=itemdb_rs/viewitem?obj=${item.itemId}`;
  geLink.target = "_blank";
  geLink.rel = "noopener noreferrer";
  geLink.textContent = "GE";
  geLink.title = "Open on GE Database";
  if (stop) geLink.addEventListener("click", (e) => e.stopPropagation());

  return [favBtn, addBtn, wikiLink, geLink];
}
