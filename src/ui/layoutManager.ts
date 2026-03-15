/**
 * @module ui/layoutManager
 * Layout mode management (tabbed vs. sidebar).
 */

import { LS_LAYOUT, LS_VIEW_MODE, LS_COMPACT_TILES } from "./constants";
import type { LayoutMode } from "./constants";
import { getEls } from "./domRefs";
import { renderSearchResults } from "./market/marketSearch";
import { renderMarketItems } from "./market/marketPanel";
import {
  setCurrentView,
  setCompactMode,
  getLatestTopItems,
  getLatestSearchResults,
  getAnalyzer,
} from "./state";

export function applyLayout(mode: LayoutMode): void {
  const els = getEls();
  document.body.dataset.layout = mode;
  localStorage.setItem(LS_LAYOUT, mode);

  els.layoutTabbedBtn.classList.toggle("active", mode === "tabbed");
  els.layoutSidebarBtn.classList.toggle("active", mode === "sidebar");

  els.layoutTabbedBtn.setAttribute("aria-pressed", String(mode === "tabbed"));
  els.layoutSidebarBtn.setAttribute("aria-pressed", String(mode === "sidebar"));

  if (mode === "sidebar") {
    els.marketView.classList.add("active-tab");
    els.advisorView.classList.add("active-tab");
    els.portfolioView.classList.add("active-tab");
  } else {
    const advisorActive = els.tabAdvisorBtn.classList.contains("active");
    const portfolioActive = els.tabPortfolioBtn.classList.contains("active");
    els.marketView.classList.toggle("active-tab", !advisorActive && !portfolioActive);
    els.advisorView.classList.toggle("active-tab", advisorActive);
    els.portfolioView.classList.toggle("active-tab", portfolioActive);
  }
}

export function bindLayoutToggle(): void {
  const els = getEls();
  const saved = (localStorage.getItem(LS_LAYOUT) as LayoutMode | null) ?? "tabbed";
  applyLayout(saved);

  els.layoutTabbedBtn.addEventListener("click", () => applyLayout("tabbed"));
  els.layoutSidebarBtn.addEventListener("click", () => applyLayout("sidebar"));
}

// ─── View Toggle (list / tile / hybrid) ─────────────────────────────────────

/** Forward ref to renderFavorites — wired in initUI. */
let _renderFavorites: () => Promise<void> = async () => {};
export function setRenderFavoritesForViewToggle(fn: () => Promise<void>): void {
  _renderFavorites = fn;
}

export function bindViewToggle(): void {
  const els = getEls();
  const saved = (localStorage.getItem(LS_VIEW_MODE) as "list" | "tile" | "hybrid" | null) ?? "list";
  setViewMode(saved);

  els.viewListBtn.addEventListener("click", () => setViewMode("list"));
  els.viewTileBtn.addEventListener("click", () => setViewMode("tile"));
  els.viewHybridBtn.addEventListener("click", () => setViewMode("hybrid"));

  const compact = localStorage.getItem(LS_COMPACT_TILES) === "true";
  setCompactMode(compact);
  els.compactTilesToggle.checked = compact;
  els.compactTilesToggle.addEventListener("change", () => {
    setCompactMode(els.compactTilesToggle.checked);
    localStorage.setItem(LS_COMPACT_TILES, els.compactTilesToggle.checked ? "true" : "false");
    const topItems = getLatestTopItems();
    if (topItems.length > 0) renderMarketItems(topItems);
    if (getAnalyzer()) _renderFavorites();
    const searchResults = getLatestSearchResults();
    if (searchResults.length > 0) renderSearchResults(searchResults);
  });
}

export function setViewMode(mode: "list" | "tile" | "hybrid"): void {
  const els = getEls();
  setCurrentView(mode);
  localStorage.setItem(LS_VIEW_MODE, mode);

  els.viewListBtn.classList.toggle("active", mode === "list");
  els.viewTileBtn.classList.toggle("active", mode === "tile");
  els.viewHybridBtn.classList.toggle("active", mode === "hybrid");

  els.marketItems.className = `market-items ${mode}`;
  els.searchResults.className = `market-items ${mode}`;
  els.favoritesItems.className = `market-items ${mode}`;

  const topItems = getLatestTopItems();
  if (topItems.length > 0) renderMarketItems(topItems);
  if (getAnalyzer()) _renderFavorites();
}
