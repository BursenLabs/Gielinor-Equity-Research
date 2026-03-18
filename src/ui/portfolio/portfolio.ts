/**
 * @module ui/portfolio
 * Active flip form binding, sub-nav, portfolio timer, and item catalogue loader.
 *
 * audit:no-op(SRP-3) — ~170 lines, cohesive around the active-flip
 * form lifecycle and portfolio tab wiring.
 */

import {
  PORTFOLIO_TICK_MS,
  LS_PORTFOLIO_SUB_TAB,
} from "../constants";
import { buildSnapshot, findRankedItem } from "./snapshots";
import { showToast } from "../notifications/toasts";
import { checkBuyLimitResets } from "../notifications/priceAlerts";
import { getEls } from "../domRefs";
import {
  getPortfolio,
  getCache,
  getAllCachedItems,
  setAllCachedItems,
  getPortfolioTimerId,
  setPortfolioTimerId,
} from "../state";
import { bindItemAutocomplete, closeItemSuggestions } from "./autocomplete";
import { renderCompletedFlips } from "./completedFlips";
import { buildFlipCard } from "./flipCard";

// ─── Forward ref for renderPortfolioDashboard (wired in initUI) ─────────────

let _renderPortfolioDashboard: () => void = () => {};
export function setRenderPortfolioDashboardHook(fn: () => void): void {
  _renderPortfolioDashboard = fn;
}

// ─── Portfolio binding ──────────────────────────────────────────────────────

export function bindPortfolio(): void {
  const els = getEls();
  els.addFlipBtn.addEventListener("click", handleAddFlip);

  const inputs = [els.flipItemName, els.flipBuyPrice, els.flipQuantity, els.flipSellPrice];
  for (const inp of inputs) {
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (inp === els.flipItemName && els.flipSuggestions.classList.contains("open")) {
          const hl = els.flipSuggestions.querySelector(".highlighted") as HTMLElement | null;
          if (hl) { hl.click(); return; }
        }
        handleAddFlip();
      }
    });
  }

  bindItemAutocomplete();
}

export function bindPortfolioSubNav(): void {
  const els = getEls();
  els.portfolioActiveBtn.addEventListener("click", () => {
    els.portfolioActiveBtn.classList.add("active");
    els.portfolioHistoryBtn.classList.remove("active");
    els.portfolioActiveBtn.setAttribute("aria-selected", "true");
    els.portfolioHistoryBtn.setAttribute("aria-selected", "false");
    els.portfolioActiveContainer.style.display = "";
    els.portfolioHistoryContainer.style.display = "none";
    localStorage.setItem(LS_PORTFOLIO_SUB_TAB, "active");
  });

  els.portfolioHistoryBtn.addEventListener("click", () => {
    els.portfolioHistoryBtn.classList.add("active");
    els.portfolioActiveBtn.classList.remove("active");
    els.portfolioHistoryBtn.setAttribute("aria-selected", "true");
    els.portfolioActiveBtn.setAttribute("aria-selected", "false");
    els.portfolioHistoryContainer.style.display = "";
    els.portfolioActiveContainer.style.display = "none";
    localStorage.setItem(LS_PORTFOLIO_SUB_TAB, "history");

    renderCompletedFlips();
    _renderPortfolioDashboard();
  });

  const saved = localStorage.getItem(LS_PORTFOLIO_SUB_TAB);
  if (saved === "history" || saved === "dashboard") {
    els.portfolioHistoryBtn.click();
  }
}

// ─── Add Flip ───────────────────────────────────────────────────────────────

function handleAddFlip(): void {
  const els = getEls();
  closeItemSuggestions();
  const itemName = els.flipItemName.value.trim();
  const buyPrice = Number(els.flipBuyPrice.value);
  const quantity = Number(els.flipQuantity.value);
  const sellPrice = Number(els.flipSellPrice.value);

  if (!itemName) { showToast("Please enter an item name.", "info"); els.flipItemName.focus(); return; }
  if (!buyPrice || buyPrice <= 0) { showToast("Please enter a valid buy price.", "info"); els.flipBuyPrice.focus(); return; }
  if (!quantity || quantity <= 0) { showToast("Please enter a valid quantity.", "info"); els.flipQuantity.focus(); return; }
  if (!sellPrice || sellPrice <= 0) { showToast("Please enter a valid sell price.", "info"); els.flipSellPrice.focus(); return; }

  const portfolio = getPortfolio();
  const ranked = findRankedItem(itemName);
  const snapshot = ranked ? buildSnapshot(ranked) : undefined;
  portfolio.addFlip(itemName, buyPrice, quantity, sellPrice, snapshot);
  showToast(`Flip added: ${itemName}`, "buy");

  els.flipItemName.value = "";
  els.flipBuyPrice.value = "";
  els.flipQuantity.value = "";
  els.flipSellPrice.value = "";
  els.flipItemName.blur();

  renderFlips();
}

// ─── Render Active Flips ────────────────────────────────────────────────────

export function renderFlips(): void {
  const els = getEls();
  const container = els.activeFlipsList;
  container.innerHTML = "";

  const portfolio = getPortfolio();
  const flips = portfolio.getFlips();

  if (flips.length === 0) {
    const empty = document.createElement("div");
    empty.className = "portfolio-empty";
    empty.textContent = "No active flips. Use the form above to track one.";
    container.appendChild(empty);
    return;
  }

  for (const flip of flips) {
    container.appendChild(buildFlipCard(flip, renderFlips));
  }
}

// ─── Timer & Catalogue ──────────────────────────────────────────────────────

export function startPortfolioTimer(): void {
  if (getPortfolioTimerId() !== null) return;
  const portfolio = getPortfolio();
  setPortfolioTimerId(setInterval(() => {
    if (portfolio.getFlips().length > 0) {
      renderFlips();
      checkBuyLimitResets();
    }
  }, PORTFOLIO_TICK_MS));
}

export async function loadItemCatalogue(): Promise<void> {
  try {
    const cache = getCache();
    const records = await cache.getAll();
    setAllCachedItems(
      records
        .map((r) => ({ name: r.name, price: r.price }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    );
    console.log(`[UIService] Item catalogue loaded: ${getAllCachedItems().length} items.`);
  } catch (err) {
    console.warn("[UIService] Failed to load item catalogue:", err);
    setAllCachedItems([]);
  }
}
