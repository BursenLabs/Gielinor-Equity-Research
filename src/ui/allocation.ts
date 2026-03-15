/**
 * @module ui/allocation
 * Capital Allocation Suggestions section.
 */

import type { RankedItem } from "../services";
import { formatGp } from "../services";
import { getFavorites } from "./favouritesData";
import { bindCollapseToggle } from "./collapseToggle";
import { getAnalyzer, getLatestTopItems } from "./state";
import { getEls } from "./domRefs";
import { showAnalyticsModal } from "./modals/analyticsModal";
import { LS_ALLOCATION_STRATEGY, LS_ALLOCATION_BUDGET } from "./constants";

// ─── Local state ────────────────────────────────────────────────────────────

const STRATEGY_HINTS: Record<string, string> = {
  "balanced": "Spreads capital evenly across items to reduce risk from any single flip failing.",
  "aggressive": "Maximises total estimated profit \u2014 may concentrate capital into few items.",
};

let lastAllocations: { item: RankedItem; spend: number; qty: number; profit: number }[] = [];

// ─── Allocation logic ───────────────────────────────────────────────────────

async function runAllocationAdvisor(): Promise<void> {
  const els = getEls();
  const budgetRaw = els.allocationBudget.value.trim();
  const budget = Number(budgetRaw);
  if (!budget || budget <= 0) {
    els.allocationResults.innerHTML =
      '<p class="allocation-empty">Enter a positive cash stack amount.</p>';
    return;
  }

  const source = els.allocationSource.value;
  const strategy = els.allocationStrategy.value;
  localStorage.setItem(LS_ALLOCATION_STRATEGY, strategy);
  localStorage.setItem(LS_ALLOCATION_BUDGET, String(budget));

  const analyzer = getAnalyzer();
  let items: RankedItem[];

  if (source === "top20") {
    const topItems = getLatestTopItems();
    items = topItems.length > 0 ? topItems : await analyzer.getTopItems();
  } else if (source === "all") {
    items = await analyzer.getAllScored();
  } else {
    const favNames = getFavorites();
    if (favNames.size === 0) {
      els.allocationResults.innerHTML =
        '<p class="allocation-empty">Add some items to your Favourites first.</p>';
      return;
    }
    items = await analyzer.getItemsByNames(favNames);
  }

  if (items.length === 0) {
    const label = source === "favourites" ? "Favourited items not yet in cache \u2014 try searching for them first."
      : source === "top20" ? "No Top 20 items available yet \u2014 wait for the initial data load."
      : "No items in cache \u2014 run a market scan first.";
    els.allocationResults.innerHTML = `<p class="allocation-empty">${label}</p>`;
    return;
  }

  const candidates = items
    .filter((it) => it.estFlipProfit > 0 && it.recBuyPrice > 0 && it.buyLimit != null)
    .map((it) => {
      const maxQty = it.buyLimit!;
      const maxCost = maxQty * it.recBuyPrice;
      const roi = it.estFlipProfit / it.recBuyPrice;
      return { item: it, maxCost, maxQty, roi };
    });

  if (candidates.length === 0) {
    els.allocationResults.innerHTML =
      '<p class="allocation-empty">No items in the selected source have a positive estimated profit right now.</p>';
    return;
  }

  const MAX_GE_SLOTS = 8;
  let remaining = budget;
  const used = new Set<string>();
  const allocations: { item: typeof candidates[0]["item"]; spend: number; qty: number; profit: number }[] = [];

  const perItemCap = strategy === "balanced"
    ? Math.floor(budget / Math.min(candidates.length, MAX_GE_SLOTS))
    : Infinity;

  while (remaining > 0 && allocations.length < MAX_GE_SLOTS) {
    let bestIdx = -1;
    let bestScore = -Infinity;

    for (let i = 0; i < candidates.length; i++) {
      const c = candidates[i];
      if (used.has(c.item.name)) continue;
      const spendCap = strategy === "balanced" ? Math.min(remaining, c.maxCost, perItemCap) : Math.min(remaining, c.maxCost);
      const qty = Math.floor(spendCap / c.item.recBuyPrice);
      if (qty <= 0) continue;

      const score = qty * c.item.estFlipProfit;

      if (score > bestScore) {
        bestScore = score;
        bestIdx = i;
      }
    }

    if (bestIdx < 0) break;

    const c = candidates[bestIdx];
    const spendCap = strategy === "balanced" ? Math.min(remaining, c.maxCost, perItemCap) : Math.min(remaining, c.maxCost);
    const qty = Math.floor(spendCap / c.item.recBuyPrice);
    const actualSpend = qty * c.item.recBuyPrice;
    const profit = qty * c.item.estFlipProfit;
    allocations.push({ item: c.item, spend: actualSpend, qty, profit });
    remaining -= actualSpend;
    used.add(c.item.name);
  }

  if (allocations.length === 0) {
    els.allocationResults.innerHTML =
      '<p class="allocation-empty">Budget too small to buy any items from the selected source.</p>';
    return;
  }

  lastAllocations = allocations;

  const totalSpent = allocations.reduce((s, a) => s + a.spend, 0);
  const totalProfit = allocations.reduce((s, a) => s + a.profit, 0);

  const rows = allocations.map((a) => {
    const pct = ((a.spend / budget) * 100).toFixed(1);
    const limitNote = a.item.buyLimit
      ? `${a.qty.toLocaleString("en-US")} / ${a.item.buyLimit.toLocaleString("en-US")}`
      : `${a.qty.toLocaleString("en-US")}`;
    return [
      "<tr>",
        `<td class="alloc-item-name alloc-item-link" data-alloc-item="${a.item.name}" title="Click to view analytics for ${a.item.name}">${a.item.name}</td>`,
        `<td class="alloc-gp">${formatGp(a.item.recBuyPrice)}</td>`,
        `<td class="alloc-gp">${limitNote}</td>`,
        `<td class="alloc-gp">${formatGp(a.spend)}</td>`,
        `<td class="alloc-pct">${pct}%</td>`,
        `<td class="alloc-profit">+${formatGp(a.profit)}</td>`,
      "</tr>",
    ].join("");
  }).join("");

  const unallocated = budget - totalSpent;
  const unallocatedRow = unallocated > 0
    ? `<tr class="allocation-summary-row"><td colspan="3" class="alloc-item-name">Unallocated</td><td class="alloc-gp">${formatGp(unallocated)}</td><td class="alloc-pct">${((unallocated / budget) * 100).toFixed(1)}%</td><td></td></tr>`
    : "";

  const hint = STRATEGY_HINTS[strategy] || "";

  els.allocationResults.innerHTML = [
    '<table class="allocation-results-table">',
      "<thead><tr>",
        "<th>Item</th>",
        "<th>Buy Price</th>",
        "<th>Qty / Limit</th>",
        "<th>Capital</th>",
        "<th>%</th>",
        "<th>Est. Profit</th>",
      "</tr></thead>",
      "<tbody>",
        rows,
        `<tr class="allocation-summary-row">`,
          `<td class="alloc-item-name">Total</td>`,
          "<td></td><td></td>",
          `<td class="alloc-gp">${formatGp(totalSpent)}</td>`,
          `<td class="alloc-pct">${((totalSpent / budget) * 100).toFixed(1)}%</td>`,
          `<td class="alloc-profit">+${formatGp(totalProfit)}</td>`,
        "</tr>",
        unallocatedRow,
      "</tbody>",
    "</table>",
    `<p class="allocation-strategy-hint">${hint}</p>`,
  ].join("");
}

// ─── Bind ───────────────────────────────────────────────────────────────────

export function bindAllocationAdvisor(): void {
  const els = getEls();

  const STRATEGY_MIGRATION: Record<string, string> = {
    "max-profit": "aggressive",
    "best-roi": "aggressive",
    "diversified": "balanced",
  };
  let savedStrategy = localStorage.getItem(LS_ALLOCATION_STRATEGY);
  if (savedStrategy && STRATEGY_MIGRATION[savedStrategy]) {
    savedStrategy = STRATEGY_MIGRATION[savedStrategy];
    localStorage.setItem(LS_ALLOCATION_STRATEGY, savedStrategy);
  }
  if (savedStrategy && els.allocationStrategy.querySelector(`option[value="${savedStrategy}"]`)) {
    els.allocationStrategy.value = savedStrategy;
  }

  const savedBudget = localStorage.getItem(LS_ALLOCATION_BUDGET);
  if (savedBudget) els.allocationBudget.value = savedBudget;

  els.allocationRunBtn.addEventListener("click", runAllocationAdvisor);
  els.allocationBudget.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runAllocationAdvisor();
  });

  els.allocationResults.addEventListener("click", (e) => {
    const cell = (e.target as HTMLElement).closest<HTMLElement>(".alloc-item-link");
    if (!cell) return;
    const name = cell.dataset.allocItem;
    const match = lastAllocations.find((a) => a.item.name === name);
    if (match) showAnalyticsModal(match.item);
  });

  bindCollapseToggle({
    collapseBtn: els.allocationCollapseBtn,
    targets: [els.allocationBody],
    headerBar: els.allocationHeader,
  });
}
