/**
 * @module ui/marketPanel
 * Top 20 rendering, filter config, refresh pipeline,
 * and collapse binding.
 */

import {
  type MarketAnalyzerConfig,
  type RankedItem,
} from "../../services";
import {
  LS_FILTER_VOLUME,
  LS_FILTER_PRICE,
  LS_FILTER_CONFIDENCE,
  TOP20_SORT_KEY,
  SEARCH_SORT_KEY,
} from "../constants";
import { applySortOrder } from "./marketSort";
import {
  renderSearchResults,
  resetBrowseAllButton,
  bindSearchInput,
} from "./marketSearch";
import { bindCollapseToggle } from "../collapseToggle";
import { buildItemCard } from "../card/cardBuilder";
import { hideError, showError } from "../notifications/errorBanner";
import { checkPriceAlerts } from "../notifications/priceAlerts";
import { getEls } from "../domRefs";
import {
  getCache,
  getAnalyzer,
  getLatestTopItems,
  setLatestTopItems,
  getLatestSearchResults,
  setLatestSearchResults,
  setUnfilteredSearchResults,
  setLatestMarketSummary,
  setLatestLLMContext,
  setCachedNatureRunePrice,
  setIsSearchActive,
} from "../state";

// ─── Local state ────────────────────────────────────────────────────────────

// ─── Filter config ──────────────────────────────────────────────────────────

function readFilterConfig(): Partial<MarketAnalyzerConfig> {
  const els = getEls();
  const config: Partial<MarketAnalyzerConfig> = {};

  const volPreset = els.filterVolume.value;
  if (volPreset === "high") {
    config.minVolume = 50_000;
  } else if (volPreset === "low") {
    config.maxVolume = 5_000;
  } else if (volPreset === "custom") {
    const minVol = Number(els.volumeMinInput.value) || 0;
    const maxVol = Number(els.volumeMaxInput.value) || 0;
    if (minVol > 0) config.minVolume = minVol;
    if (maxVol > 0) config.maxVolume = maxVol;
  }

  const pricePreset = els.filterPrice.value;
  if (pricePreset === "custom") {
    const maxPrice = Number(els.budgetInput.value) || 0;
    if (maxPrice > 0) config.maxPrice = maxPrice;
  } else {
    const maxPrice = Number(pricePreset);
    if (maxPrice > 0) config.maxPrice = maxPrice;
  }

  return config;
}

// ─── Refresh market panel ───────────────────────────────────────────────────

export async function refreshMarketPanel(): Promise<void> {
  const els = getEls();
  const cache = getCache();
  const analyzer = getAnalyzer();

  hideError();
  els.marketLoading.style.display = "";
  els.marketLoading.textContent = "Loading market data\u2026";
  els.marketLoading.classList.remove("error");
  els.marketItems.innerHTML = "";

  try {
    const filters = readFilterConfig();
    let topItems = await analyzer.getTopItems(filters);

    const confLevel = els.filterConfidence.value;
    if (confLevel === "medium") {
      topItems = topItems.filter(
        (i) => i.trendReliability === "Medium" || i.trendReliability === "High"
      );
    } else if (confLevel === "high") {
      topItems = topItems.filter((i) => i.trendReliability === "High");
    }

    setLatestTopItems(topItems);
    setLatestMarketSummary(analyzer.formatForLLM(topItems));
    applySortOrder(topItems, els.top20SortSelect.value);
    renderMarketItems(topItems);

    cache.getByName("Nature rune").then((rec) => {
      if (rec?.price) setCachedNatureRunePrice(rec.price);
    }).catch(() => {});

    analyzer.getFormattedForLLM().then(ctx => { setLatestLLMContext(ctx); }).catch(() => {});

    try {
      const allItems = await analyzer.getTopItems({ topN: 99999, minVolume: 0 });
      checkPriceAlerts(allItems);
    } catch { /* non-critical */ }
  } catch (err) {
    console.error("[UIService] Failed to refresh market panel:", err);
    const msg = err instanceof Error ? err.message : "Failed to load market data.";
    showError(msg);
    return;
  }

  els.marketLoading.style.display = "none";
}

// ─── Render functions ───────────────────────────────────────────────────────

export function renderMarketItems(items: RankedItem[]): void {
  const els = getEls();
  els.marketItems.innerHTML = "";

  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "market-empty";
    empty.textContent = "No liquid items found.";
    els.marketItems.appendChild(empty);
    return;
  }

  items.forEach((item, i) => {
    els.marketItems.appendChild(buildItemCard(item, i + 1));
  });
}

// ─── Bind Market Filters ────────────────────────────────────────────────────

export function bindMarketFilters(): void {
  bindFilterDropdowns();
  bindSortSelects();
  bindRefreshButton();
  bindSearchInput();
}

/** Restore + bind volume/price/confidence filter dropdowns and custom slider sync. */
function bindFilterDropdowns(): void {
  const els = getEls();

  const savedVol = localStorage.getItem(LS_FILTER_VOLUME);
  if (savedVol) {
    els.filterVolume.value = savedVol;
    if (savedVol === "custom") els.volumeCustomGroup.style.display = "";
  }

  const savedPrice = localStorage.getItem(LS_FILTER_PRICE);
  if (savedPrice) {
    els.filterPrice.value = savedPrice;
    if (savedPrice === "custom") els.budgetCustomGroup.style.display = "";
  }

  const savedConf = localStorage.getItem(LS_FILTER_CONFIDENCE);
  if (savedConf) els.filterConfidence.value = savedConf;

  els.filterVolume.addEventListener("change", () => {
    els.volumeCustomGroup.style.display =
      els.filterVolume.value === "custom" ? "" : "none";
    localStorage.setItem(LS_FILTER_VOLUME, els.filterVolume.value);
  });

  els.filterPrice.addEventListener("change", () => {
    els.budgetCustomGroup.style.display =
      els.filterPrice.value === "custom" ? "" : "none";
    localStorage.setItem(LS_FILTER_PRICE, els.filterPrice.value);
  });

  els.filterConfidence.addEventListener("change", () => {
    localStorage.setItem(LS_FILTER_CONFIDENCE, els.filterConfidence.value);
  });

  syncSliderAndInput(els.volumeMinSlider, els.volumeMinInput);
  syncSliderAndInput(els.volumeMaxSlider, els.volumeMaxInput);
  syncSliderAndInput(els.budgetSlider, els.budgetInput);
}

/** Restore + bind Top 20 and Search sort selects. */
function bindSortSelects(): void {
  const els = getEls();

  const savedTop20Sort = localStorage.getItem(TOP20_SORT_KEY);
  if (savedTop20Sort) els.top20SortSelect.value = savedTop20Sort;

  els.top20SortSelect.addEventListener("change", () => {
    localStorage.setItem(TOP20_SORT_KEY, els.top20SortSelect.value);
    const topItems = getLatestTopItems();
    applySortOrder(topItems, els.top20SortSelect.value);
    renderMarketItems(topItems);
  });

  const savedSearchSort = localStorage.getItem(SEARCH_SORT_KEY);
  if (savedSearchSort) els.searchSortSelect.value = savedSearchSort;

  els.searchSortSelect.addEventListener("change", () => {
    localStorage.setItem(SEARCH_SORT_KEY, els.searchSortSelect.value);
    const searchResults = getLatestSearchResults();
    if (searchResults.length > 0) {
      applySortOrder(searchResults, els.searchSortSelect.value);
      renderSearchResults(searchResults);
    }
  });
}

/** Bind refresh button — clears search state and re-fetches top items. */
function bindRefreshButton(): void {
  const els = getEls();

  els.refreshMarketBtn.addEventListener("click", async () => {
    els.marketSearchInput.value = "";
    setIsSearchActive(false);
    resetBrowseAllButton();
    setLatestSearchResults([]);
    setUnfilteredSearchResults([]);
    els.searchResults.innerHTML = "";
    els.searchLoading.style.display = "none";
    await refreshMarketPanel();
  });
}

function syncSliderAndInput(slider: HTMLInputElement, input: HTMLInputElement): void {
  slider.addEventListener("input", () => { input.value = slider.value; });
  input.addEventListener("input", () => {
    const v = Number(input.value) || 0;
    if (v > Number(slider.max)) slider.max = String(v);
    slider.value = String(v);
  });
}

// ─── Top 20 Collapse ────────────────────────────────────────────────────────

export function bindTop20Collapse(): void {
  const els = getEls();
  const marketActions = els.marketHeader.querySelector(".market-header-actions");
  bindCollapseToggle({
    collapseBtn: els.top20CollapseBtn,
    targets: [els.marketItems],
    headerBar: els.marketHeader,
    stopPropagationEls: marketActions ? [marketActions as HTMLElement] : [],
    onToggle: (collapsed) => {
      if (collapsed) els.marketLoading.style.display = "none";
    },
  });
}
