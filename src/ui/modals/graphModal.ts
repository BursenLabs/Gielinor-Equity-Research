/**
 * @module ui/modals/graphModal
 * Graph modal — interactive price chart with range selector, history helpers.
 */

import { WeirdGloopService } from "../../services";
import type { RankedItem } from "../../services";
import { computeGraphTrendStats, buildGraphStatsHtml } from "../trendStats";
import {
  createInteractiveChart,
  destroyInteractiveChart,
  getActiveCharts,
} from "../chart/interactiveChart";
import { showToast } from "../notifications/toasts";
import { getCache } from "../state";
import { singletonModal, buildSpriteImg } from "./modalBase";

const ensureGraphModal = singletonModal({
  backdropClass: "graph-modal-backdrop",
  modalClass: "graph-modal",
  ariaLabel: "Price chart",
  onClose: () => hideGraphModal(),
  shouldPreventClose: () => {
    for (const chart of getActiveCharts().values()) {
      if (chart.wasDragging()) return true;
    }
    return false;
  },
});

/**
 * Ensure at least `days` days of price history exist in cache for the given item.
 * Falls back to API if cache is stale or sparse.
 */
export async function ensureItemHistory(itemName: string, days: number = 90): Promise<number[]> {
  const cache = getCache();
  const cached = await cache.history.getHistoricalRecords(itemName, days);
  const RECENCY_MS = 7 * 24 * 60 * 60 * 1000;
  const newest = cached.length > 0
    ? new Date(cached[cached.length - 1].timestamp).getTime()
    : 0;
  const isRecent = (Date.now() - newest) < RECENCY_MS;
  if (cached.length >= 7 && isRecent) {
    return cached.map((r) => r.price);
  }

  try {
    const api = new WeirdGloopService();
    const historyMap = await api.fetchHistoricalPrices([itemName], days);
    if (historyMap.size > 0) {
      await cache.history.bulkInsertHistory(historyMap);
    }
    const fresh = await cache.history.getHistoricalRecords(itemName, days);
    return fresh.map((r) => r.price);
  } catch (err) {
    console.warn(`[ensureItemHistory] Failed for "${itemName}":`, err);
    return cached.map((r) => r.price);
  }
}

/** Fetch price-only history for an item, trimmed to the requested range. */
export async function fetchItemHistory(name: string, range: number = 7): Promise<number[]> {
  const allPrices = await ensureItemHistory(name, 90);
  if (allPrices.length === 0) return [];
  if (range >= 90 || allPrices.length <= range) return allPrices;
  return allPrices.slice(-range);
}

/** Fetch price + volume history for an item, trimmed to the requested range. */
export async function fetchItemHistoryFull(
  name: string, range: number = 7,
): Promise<{ prices: number[]; volumes: number[] }> {
  const cache = getCache();
  await ensureItemHistory(name, 90);
  const records = await cache.history.getHistoricalRecords(name, 90);
  if (records.length === 0) return { prices: [], volumes: [] };
  const sliced = (range < 90 && records.length > range)
    ? records.slice(-range) : records;
  return {
    prices: sliced.map(r => r.price),
    volumes: sliced.map(r => r.volume ?? 0),
  };
}

async function refreshItemGraph(item: RankedItem, range: number): Promise<void> {
  const { content } = ensureGraphModal();
  const mBody = content.querySelector(".graph-modal-body") as HTMLElement;

  destroyInteractiveChart("graph-modal");

  let fetched: { prices: number[]; volumes: number[] };
  try {
    fetched = await fetchItemHistoryFull(item.name, range);
  } catch {
    showToast("History unavailable \u2014 could not fetch price data.", "info");
    fetched = { prices: [], volumes: [] };
  }
  const hist = fetched.prices.length > 0 ? [...fetched.prices, item.price] : [item.price];
  const histVols = fetched.volumes.length > 0 ? [...fetched.volumes, 0] : [];

  const trendStats = computeGraphTrendStats(hist, item.price);

  const statsEl = mBody.querySelector(".graph-stats") as HTMLElement;
  if (statsEl) {
    statsEl.innerHTML = buildGraphStatsHtml(trendStats, range, "graph-stat-row");
  }

  const statusEl = mBody.querySelector<HTMLElement>(".graph-history-status");
  const chartSlot = mBody.querySelector<HTMLElement>(".chart-slot");
  if (hist.length < 7) {
    statusEl?.classList.add("visible");
    if (chartSlot) chartSlot.style.display = "none";
  } else {
    statusEl?.classList.remove("visible");
    if (chartSlot) chartSlot.style.display = "";
  }

  requestAnimationFrame(() => {
    if (chartSlot && hist.length >= 2) {
      createInteractiveChart("graph-modal", chartSlot, hist, histVols, "180px");
    }
  });
}

/** Show the graph modal with an interactive price chart for the given item. */
export async function showGraphModal(item: RankedItem): Promise<void> {
  const cache = getCache();
  const { backdrop, content } = ensureGraphModal();
  content.innerHTML = "";

  const range = 7;

  // ── Header ──
  const mHeader = document.createElement("div");
  mHeader.className = "graph-modal-header";

  const img = buildSpriteImg(item.itemId, item.name);

  const title = document.createElement("span");
  title.className = "graph-modal-title";
  title.textContent = `${item.name} \u2014 Price Chart`;

  const closeBtn = document.createElement("button");
  closeBtn.className = "item-modal-close";
  closeBtn.textContent = "\u2715";
  closeBtn.setAttribute("aria-label", "Close price chart");
  closeBtn.addEventListener("click", hideGraphModal);

  mHeader.appendChild(img);
  mHeader.appendChild(title);
  mHeader.appendChild(closeBtn);
  content.appendChild(mHeader);

  // ── Body ──
  const mBody = document.createElement("div");
  mBody.className = "graph-modal-body";
  mBody.innerHTML = `<div class="graph-loading-msg" style="text-align:center;padding:24px;color:var(--text-dimmed)">Checking cached history\u2026</div>`;
  content.appendChild(mBody);

  backdrop.classList.add("visible");

  const cachedCount = (await cache.history.getHistoricalRecords(item.name, 90)).length;
  if (cachedCount < 7) {
    const loadingEl = mBody.querySelector(".graph-loading-msg");
    if (loadingEl) loadingEl.textContent = "Fetching price history\u2026";
  }

  let fetched: { prices: number[]; volumes: number[] };
  try {
    fetched = await fetchItemHistoryFull(item.name, range);
  } catch {
    showToast("History unavailable \u2014 could not fetch price data.", "info");
    fetched = { prices: [], volumes: [] };
  }
  const hist = fetched.prices.length > 0 ? [...fetched.prices, item.price] : (item.priceHistory.length >= 2 ? item.priceHistory : [item.price]);
  const histVols = fetched.volumes.length > 0 ? [...fetched.volumes, 0] : [];

  if (fetched.prices.length > 0 && range <= 7) {
    item.priceHistory = [...fetched.prices, item.price];
    if (item.priceHistory.length >= 2 && item.priceHistory[0] > 0) {
      const pct = (item.price - item.priceHistory[0]) / item.priceHistory[0];
      item.priceTrend = pct < -0.05 ? "Downtrend" : pct > 0.05 ? "Uptrend" : "Stable";
    }
  }

  const trendStats = computeGraphTrendStats(hist, item.price);

  const rangeOptions = [7, 30, 90].map((d) =>
    `<option value="${d}"${d === range ? " selected" : ""}>History: ${d} days</option>`
  ).join("");

  const insufficientData = hist.length < 7;

  mBody.innerHTML =
    `<div class="graph-modal-range-row">` +
      `<label>Range: <select class="graph-range-inline" name="graph-range">${rangeOptions}</select></label>` +
    `</div>` +
    `<div class="chart-slot"${insufficientData ? ' style="display:none"' : ''}></div>` +
    `<div class="graph-history-status${insufficientData ? ' visible' : ''}">` +
      `Insufficient history \u2022 ` +
      `<button class="refresh-history-btn">Refresh</button>` +
    `</div>` +
    `<div class="graph-stats">` +
      buildGraphStatsHtml(trendStats, range, "graph-stat-row") +
    `</div>`;

  const inlineRange = mBody.querySelector<HTMLSelectElement>(".graph-range-inline");
  if (inlineRange) {
    inlineRange.addEventListener("change", () => {
      const newRange = parseInt(inlineRange.value, 10) || 7;
      refreshItemGraph(item, newRange);
    });
  }

  bindRefreshHistoryBtn(mBody, item);

  requestAnimationFrame(() => {
    const slot = mBody.querySelector<HTMLElement>(".chart-slot");
    if (slot && !insufficientData) {
      createInteractiveChart("graph-modal", slot, hist, histVols, "180px");
    }
  });
}

function bindRefreshHistoryBtn(container: HTMLElement, item: RankedItem): void {
  const btn = container.querySelector<HTMLButtonElement>(".refresh-history-btn");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    btn.disabled = true;
    btn.textContent = "Fetching\u2026";

    try {
      await ensureItemHistory(item.name, 90);
      const range = parseInt(
        (container.querySelector<HTMLSelectElement>(".graph-range-inline")?.value) || "7", 10
      );
      await refreshItemGraph(item, range);
    } catch {
      showToast("Failed to load history", "info");
      btn.textContent = "Refresh";
      btn.disabled = false;
    }
  });
}

/** Hide the graph modal and destroy its chart instance. */
export function hideGraphModal(): void {
  ensureGraphModal().backdrop.classList.remove("visible");
  destroyInteractiveChart("graph-modal");
}
