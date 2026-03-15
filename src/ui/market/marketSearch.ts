/**
 * @module ui/marketSearch
 * Search orchestration: category filter matching, filter badge,
 * browse-all mode, and search filter popover DOM building.
 */

import { WeirdGloopService, type RankedItem } from "../../services";
import {
  type SearchFilterDef,
  SEARCH_FILTER_GROUPS,
} from "./searchFilterData";
import { applySortOrder } from "./marketSort";
import { buildItemCard } from "../card/cardBuilder";
import { debounce } from "../helpers";
import { getEls } from "../domRefs";
import {
  getAnalyzer,
  getCache,
  getWiki,
  getCurrentView,
  getGeCatalogue,
  setLatestSearchResults,
  getUnfilteredSearchResults,
  setUnfilteredSearchResults,
  getActiveSearchFilters,
  setIsSearchActive,
  getIsBrowseAllActive,
  setIsBrowseAllActive,
} from "../state";

// ─── Render search results ──────────────────────────────────────────────────

export function renderSearchResults(items: RankedItem[]): void {
  const els = getEls();
  els.searchResults.innerHTML = "";
  els.searchResults.className = `market-items ${getCurrentView()}`;

  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "market-empty";
    empty.textContent = "No results found.";
    els.searchResults.appendChild(empty);
    return;
  }

  for (const item of items) {
    els.searchResults.appendChild(buildItemCard(item));
  }
}

// ─── Search category filter helpers ─────────────────────────────────────────

export function applySearchCategoryFilters(items: RankedItem[]): RankedItem[] {
  const activeSearchFilters = getActiveSearchFilters();
  if (activeSearchFilters.size === 0) return items;

  const activeByGroup: Map<string, SearchFilterDef[]> = new Map();
  for (const group of SEARCH_FILTER_GROUPS) {
    const active = group.filters.filter((f) => activeSearchFilters.has(f.id));
    if (active.length > 0) activeByGroup.set(group.title, active);
  }
  if (activeByGroup.size === 0) return items;

  return items.filter((item) => {
    for (const [, filters] of activeByGroup) {
      const anyMatch = filters.some((f) => f.match(item.name, item));
      if (!anyMatch) return false;
    }
    return true;
  });
}

export function updateFilterBadge(): void {
  const els = getEls();
  const count = getActiveSearchFilters().size;
  const existing = els.searchFilterBtn.querySelector(".filter-count-badge");
  if (existing) existing.remove();

  if (count > 0) {
    els.searchFilterBtn.classList.add("has-active-filters");
    const badge = document.createElement("span");
    badge.className = "filter-count-badge";
    badge.textContent = String(count);
    els.searchFilterBtn.appendChild(badge);
  } else {
    els.searchFilterBtn.classList.remove("has-active-filters");
  }
}

export function refilterSearchResults(): void {
  const els = getEls();
  const query = els.marketSearchInput.value.trim();
  const activeSearchFilters = getActiveSearchFilters();

  if (query.length === 0 && activeSearchFilters.size > 0) {
    loadBrowseAll();
    return;
  }
  if (query.length === 0 && activeSearchFilters.size === 0) {
    setIsSearchActive(false);
    setLatestSearchResults([]);
    setUnfilteredSearchResults([]);
    els.searchResults.innerHTML = "";
    els.searchLoading.style.display = "none";
    updateFilterBadge();
    return;
  }
  const filtered = applySearchCategoryFilters(getUnfilteredSearchResults());
  setLatestSearchResults(filtered);
  applySortOrder(filtered, els.searchSortSelect.value);
  if (filtered.length > 0 || getUnfilteredSearchResults().length > 0) {
    renderSearchResults(filtered);
  }
  updateFilterBadge();
}

export async function loadBrowseAll(): Promise<void> {
  const els = getEls();
  const analyzer = getAnalyzer();
  const activeSearchFilters = getActiveSearchFilters();

  setIsSearchActive(true);
  setIsBrowseAllActive(true);
  els.browseAllBtn.textContent = "\u2716 Hide All";
  els.browseAllBtn.title = "Hide browse-all results";
  els.searchLoading.textContent = "Loading all items\u2026";
  els.searchLoading.style.display = "";
  els.searchResults.innerHTML = "";
  try {
    const limit = activeSearchFilters.size > 0 ? 0 : 500;
    const all = await analyzer.getAllScored(limit);
    setUnfilteredSearchResults(all);
    const filtered = applySearchCategoryFilters(all);
    setLatestSearchResults(filtered);
    applySortOrder(filtered, els.searchSortSelect.value);
    renderSearchResults(filtered);
    els.searchLoading.style.display = "none";
  } catch (err) {
    console.error("[UIService] Browse all failed:", err);
    els.searchLoading.textContent = "Failed to load items.";
  }
  updateFilterBadge();
}

export function hideBrowseAll(): void {
  const els = getEls();
  setIsBrowseAllActive(false);
  setIsSearchActive(false);
  resetBrowseAllButton();
  els.searchResults.innerHTML = "";
  els.searchLoading.style.display = "none";
  setLatestSearchResults([]);
  setUnfilteredSearchResults([]);
  updateFilterBadge();
}

export function resetBrowseAllButton(): void {
  const els = getEls();
  setIsBrowseAllActive(false);
  els.browseAllBtn.textContent = "\uD83D\uDCCB Browse All";
  els.browseAllBtn.title = "Browse all cached items (apply filters to narrow down)";
}

// ─── Search input binding ───────────────────────────────────────────────────

/** Bind the debounced search input handler. */
export function bindSearchInput(): void {
  const els = getEls();

  els.marketSearchInput.addEventListener(
    "input",
    debounce(async () => {
      const query = els.marketSearchInput.value.trim();
      if (query.length > 2) {
        setIsSearchActive(true);
        resetBrowseAllButton();
        els.searchLoading.textContent = "Searching\u2026";
        els.searchLoading.style.display = "";
        els.searchResults.innerHTML = "";
        try {
          const needle = query.toLowerCase();
          const catalogueHits = getGeCatalogue()
            .filter((e) => e.name.toLowerCase().includes(needle))
            .slice(0, 50);

          if (catalogueHits.length === 0) {
            els.searchLoading.textContent = `No items match "${query}".`;
            return;
          }

          const cache = getCache();
          const wiki = getWiki();
          const analyzer = getAnalyzer();
          const cachedRecords = await cache.getAll();
          const cachedNames = new Set(cachedRecords.map((r) => r.name));
          const uncachedHits = catalogueHits.filter((e) => !cachedNames.has(e.name));

          if (uncachedHits.length > 0) {
            els.searchLoading.textContent = `Fetching ${uncachedHits.length} item(s)\u2026`;
            const api = new WeirdGloopService();
            const prices = await api.fetchLatestPrices(uncachedHits.map((e) => e.name));

            if (prices.size > 0) {
              els.searchLoading.textContent = `Enriching ${prices.size} item(s) with buy limits\u2026`;
              const itemNames = Array.from(prices.keys());
              const buyLimits = await wiki.getBulkBuyLimits(itemNames);
              for (const [name, record] of prices) {
                const limit = buyLimits.get(name);
                if (limit !== undefined) {
                  record.buyLimit = limit;
                }
              }
              await cache.bulkInsert(prices);
            }
          }

          const results = await analyzer.searchItems(query);
          setUnfilteredSearchResults(results);
          const filtered = applySearchCategoryFilters(results);
          setLatestSearchResults(filtered);
          applySortOrder(filtered, els.searchSortSelect.value);
          renderSearchResults(filtered);

          if (results.length === 0) {
            els.searchLoading.textContent = `No price data for "${query}".`;
            els.searchLoading.style.display = "";
            return;
          }
        } catch (err) {
          console.error("[UIService] Search failed:", err);
        }
        els.searchLoading.style.display = "none";
      } else if (query.length === 0) {
        if (getActiveSearchFilters().size > 0) {
          loadBrowseAll();
        } else {
          setIsSearchActive(false);
          resetBrowseAllButton();
          setLatestSearchResults([]);
          setUnfilteredSearchResults([]);
          els.searchResults.innerHTML = "";
          els.searchLoading.style.display = "none";
        }
      }
    }, 300)
  );
}

// ─── Search filter popover ──────────────────────────────────────────────────

export function bindSearchFilters(): void {
  const els = getEls();
  const popover = els.searchFilterPopover;
  const activeSearchFilters = getActiveSearchFilters();

  for (const group of SEARCH_FILTER_GROUPS) {
    const section = document.createElement("div");
    section.className = "search-filter-group";

    const title = document.createElement("span");
    title.className = "search-filter-group-title";
    title.textContent = group.title;
    section.appendChild(title);

    const tags = document.createElement("div");
    tags.className = "search-filter-tags";

    for (const filter of group.filters) {
      const tag = document.createElement("label");
      tag.className = "search-filter-tag";
      tag.dataset.filterId = filter.id;

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.name = `search-filter-${filter.id}`;

      const text = document.createTextNode(filter.label);
      tag.appendChild(cb);
      tag.appendChild(text);

      cb.addEventListener("change", () => {
        if (cb.checked) {
          activeSearchFilters.add(filter.id);
          tag.classList.add("checked");
        } else {
          activeSearchFilters.delete(filter.id);
          tag.classList.remove("checked");
        }
        refilterSearchResults();
      });

      tags.appendChild(tag);
    }

    section.appendChild(tags);
    popover.appendChild(section);
  }

  const actions = document.createElement("div");
  actions.className = "search-filter-actions";

  const clearBtn = document.createElement("button");
  clearBtn.type = "button";
  clearBtn.className = "search-filter-clear-btn";
  clearBtn.textContent = "Clear All";
  clearBtn.addEventListener("click", () => {
    activeSearchFilters.clear();
    popover.querySelectorAll<HTMLElement>(".search-filter-tag.checked").forEach((t) => {
      t.classList.remove("checked");
      const cb = t.querySelector("input");
      if (cb) (cb as HTMLInputElement).checked = false;
    });
    refilterSearchResults();
  });

  actions.appendChild(clearBtn);
  popover.appendChild(actions);

  els.searchFilterBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    popover.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!popover.contains(e.target as Node) && e.target !== els.searchFilterBtn) {
      popover.classList.remove("open");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") popover.classList.remove("open");
  });

  els.browseAllBtn.addEventListener("click", () => {
    if (getIsBrowseAllActive()) {
      hideBrowseAll();
    } else {
      els.marketSearchInput.value = "";
      loadBrowseAll();
    }
  });
}
