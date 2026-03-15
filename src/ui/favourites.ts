/**
 * @module ui/favourites
 * Favourites section rendering, collapse, and sort.
 */

import { getFavorites } from "./favouritesData";
import { bindCollapseToggle } from "./collapseToggle";
import { getAnalyzer, getCurrentView } from "./state";
import { getEls } from "./domRefs";
import { applySortOrder } from "./market/marketSort";
import { buildItemCard } from "./card/cardBuilder";
import { FAV_SORT_KEY } from "./constants";

// ─── Local state ────────────────────────────────────────────────────────────

let isFavoritesCollapsed: () => boolean = () => false;

// ─── Render ─────────────────────────────────────────────────────────────────

export async function renderFavorites(): Promise<void> {
  const els = getEls();
  const favNames = getFavorites();

  if (favNames.size === 0) {
    els.favoritesSection.style.display = "none";
    return;
  }

  els.favoritesSection.style.display = "";

  if (isFavoritesCollapsed()) return;

  const analyzer = getAnalyzer();
  const items = await analyzer.getItemsByNames(favNames);

  const favSort = els.favoritesSortSelect.value;
  applySortOrder(items, favSort);

  els.favoritesItems.innerHTML = "";
  els.favoritesItems.className = `market-items ${getCurrentView()}`;

  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "market-empty";
    empty.textContent = "Favourited items not yet in cache \u2014 try searching for them first.";
    els.favoritesItems.appendChild(empty);
    return;
  }

  for (const item of items) {
    els.favoritesItems.appendChild(buildItemCard(item));
  }
}

// ─── Collapse ───────────────────────────────────────────────────────────────

export function bindFavoritesCollapse(): void {
  const els = getEls();
  isFavoritesCollapsed = bindCollapseToggle({
    collapseBtn: els.favoritesCollapseBtn,
    targets: [els.favoritesItems],
    headerBar: els.favoritesHeader,
    stopPropagationEls: [els.favoritesSortSelect],
  });
}

// ─── Sort ───────────────────────────────────────────────────────────────────

export function restoreFavSort(): void {
  const saved = localStorage.getItem(FAV_SORT_KEY);
  if (saved) getEls().favoritesSortSelect.value = saved;
}

export function bindFavSort(): void {
  getEls().favoritesSortSelect.addEventListener("change", () => {
    localStorage.setItem(FAV_SORT_KEY, getEls().favoritesSortSelect.value);
    renderFavorites();
  });
}
