/**
 * @module ui/modals/analyticsModal
 * Full analytics modal — badges, grouped details, alerts, interactive chart.
 */

import type { RankedItem } from "../../services";
import { formatGp } from "../../services";
import { buildHeaderBadgesHtml } from "../card/badgeBuilder";
import { buildDetailGroupsHtml } from "../card/detailBuilder";
import { computeGraphTrendStats, buildGraphStatsHtml } from "../trendStats";
import { wireAlertInputs, buildItemActionButtons } from "../card/actionBuilder";
import {
  createInteractiveChart,
  destroyInteractiveChart,
  getActiveCharts,
} from "../chart/interactiveChart";
import { showToast } from "../notifications/toasts";
import { getCache } from "../state";
import { ensureItemHistory, fetchItemHistoryFull } from "./graphModal";
import { singletonModal, buildSpriteImg, buildAlertInputsHtml } from "./modalBase";

const ensureAnalyticsModal = singletonModal({
  backdropClass: "analytics-modal-backdrop",
  modalClass: "analytics-modal",
  ariaLabel: "Full analytics",
  onClose: () => hideAnalyticsModal(),
  shouldPreventClose: () => {
    for (const chart of getActiveCharts().values()) {
      if (chart.wasDragging()) return true;
    }
    return false;
  },
  trapFocus: true,
});

/** Hide the analytics modal and destroy its chart instance. */
export function hideAnalyticsModal(): void {
  ensureAnalyticsModal().backdrop.classList.remove("visible");
  destroyInteractiveChart("analytics");
}

/** Show the full analytics modal for the given item. */
export async function showAnalyticsModal(item: RankedItem): Promise<void> {
  const cache = getCache();

  const { backdrop, content: modal } = ensureAnalyticsModal();
  modal.setAttribute("aria-labelledby", "analytics-modal-title");

  const range = 7;
  modal.innerHTML = "";

  // ── Header ──
  const header = document.createElement("div");
  header.className = "analytics-modal-header";

  const img = buildSpriteImg(item.itemId, item.name, [48, 42]);
  img.title = `Item ID: ${item.itemId}`;

  const nameEl = document.createElement("span");
  nameEl.className = "analytics-modal-name";
  nameEl.id = "analytics-modal-title";
  nameEl.textContent = item.name;

  const priceEl = document.createElement("span");
  priceEl.className = "analytics-modal-price";
  priceEl.textContent = `${formatGp(item.price)} gp`;

  const closeBtn = document.createElement("button");
  closeBtn.className = "analytics-modal-close";
  closeBtn.textContent = "\u2715";
  closeBtn.title = "Close (Esc)";
  closeBtn.setAttribute("aria-label", "Close analytics modal");
  closeBtn.addEventListener("click", hideAnalyticsModal);

  header.appendChild(img);
  header.appendChild(nameEl);
  header.appendChild(priceEl);
  header.appendChild(closeBtn);

  // ── Content wrapper ──
  const content = document.createElement("div");
  content.className = "analytics-content";

  // ── Badges ──
  const badgesHtml = buildHeaderBadgesHtml(item);

  const badgesEl = document.createElement("div");
  badgesEl.className = "analytics-badges";
  badgesEl.innerHTML = badgesHtml;
  content.appendChild(badgesEl);

  // ── Action buttons ──
  const actionsEl = document.createElement("div");
  actionsEl.className = "analytics-actions";

  const [modalFavBtn, modalAddBtn, modalWikiLink, modalGeLink] =
    buildItemActionButtons(item, { onClose: hideAnalyticsModal });
  actionsEl.appendChild(modalFavBtn);
  actionsEl.appendChild(modalAddBtn);
  actionsEl.appendChild(modalWikiLink);
  actionsEl.appendChild(modalGeLink);

  content.appendChild(actionsEl);

  // ── Grouped detail rows ──
  const groupedRows = buildDetailGroupsHtml(item, { volumeSpikeWhenAbsent: "normal" });

  const detailsGrid = document.createElement("div");
  detailsGrid.className = "analytics-details-grid";
  detailsGrid.innerHTML = groupedRows;
  content.appendChild(detailsGrid);

  // ── Price alerts ──
  const alertSection = document.createElement("div");
  alertSection.innerHTML = buildAlertInputsHtml("analytics");
  content.appendChild(alertSection);

  // ── Price History section ──
  const graphTitle = document.createElement("h3");
  graphTitle.className = "analytics-section-title";
  graphTitle.textContent = "Price History";
  content.appendChild(graphTitle);

  const graphSection = document.createElement("div");
  graphSection.className = "analytics-graph-section";
  graphSection.innerHTML =
    `<div class="analytics-range-row">` +
      `<label>Range: <select class="graph-range-inline" name="graph-range">` +
        [7, 30, 90].map((d) =>
          `<option value="${d}"${d === range ? " selected" : ""}>History: ${d} days</option>`
        ).join("") +
      `</select></label>` +
    `</div>` +
    `<div class="graph-loading-msg" style="text-align:center;padding:24px;color:var(--text-dimmed)">Checking cached history\u2026</div>`;
  content.appendChild(graphSection);

  // ── Assemble and show ──
  modal.appendChild(header);
  modal.appendChild(content);
  backdrop.classList.add("visible");
  closeBtn.focus();

  // ── Wire alert inputs ──
  wireAlertInputs(alertSection, item.name, {
    buySelector: "#analytics-alert-buy",
    sellSelector: "#analytics-alert-sell",
    onSave: () => { modalFavBtn.textContent = "\u2605"; },
  });

  // ── Async: fetch history & render graph ──
  const cachedCount = (await cache.history.getHistoricalRecords(item.name, 90)).length;
  const loadingEl = graphSection.querySelector(".graph-loading-msg") as HTMLElement;
  if (cachedCount < 7 && loadingEl) {
    loadingEl.textContent = "Fetching price history\u2026";
  }

  let fetched: { prices: number[]; volumes: number[] };
  try {
    fetched = await fetchItemHistoryFull(item.name, range);
  } catch {
    showToast("History unavailable \u2014 could not fetch price data.", "info");
    fetched = { prices: [], volumes: [] };
  }
  const hist = fetched.prices.length > 0
    ? [...fetched.prices, item.price]
    : (item.priceHistory.length >= 2 ? item.priceHistory : [item.price]);
  const histVols = fetched.volumes.length > 0
    ? [...fetched.volumes, 0] : [];

  if (fetched.prices.length > 0 && range <= 7) {
    item.priceHistory = [...fetched.prices, item.price];
    if (item.priceHistory.length >= 2 && item.priceHistory[0] > 0) {
      const pct = (item.price - item.priceHistory[0]) / item.priceHistory[0];
      item.priceTrend = pct < -0.05 ? "Downtrend" : pct > 0.05 ? "Uptrend" : "Stable";
    }
  }

  const trendStats = computeGraphTrendStats(hist, item.price);

  const insufficientData = hist.length < 7;

  graphSection.innerHTML =
    `<div class="analytics-range-row">` +
      `<label>Range: <select class="graph-range-inline" name="graph-range">` +
        [7, 30, 90].map((d) =>
          `<option value="${d}"${d === range ? " selected" : ""}>History: ${d} days</option>`
        ).join("") +
      `</select></label>` +
    `</div>` +
    `<div class="chart-slot"${insufficientData ? ' style="display:none"' : ''}></div>` +
    `<div class="graph-history-status${insufficientData ? ' visible' : ''}">` +
      `Insufficient history \u2022 ` +
      `<button class="refresh-history-btn">Refresh</button>` +
    `</div>` +
    `<div class="analytics-stats-grid">` +
      buildGraphStatsHtml(trendStats, range, "analytics-stat-card") +
    `</div>`;

  const inlineRange = graphSection.querySelector<HTMLSelectElement>(".graph-range-inline");
  if (inlineRange) {
    inlineRange.addEventListener("change", () => {
      const newRange = parseInt(inlineRange.value, 10) || 7;
      refreshAnalyticsGraph(item, graphSection, newRange);
    });
  }

  bindAnalyticsRefreshBtn(graphSection, item);

  requestAnimationFrame(() => {
    const slot = graphSection.querySelector<HTMLElement>(".chart-slot");
    if (slot && !insufficientData) {
      createInteractiveChart("analytics", slot, hist, histVols);
    }
  });
}

async function refreshAnalyticsGraph(
  item: RankedItem,
  graphSection: HTMLElement,
  range: number,
): Promise<void> {
  destroyInteractiveChart("analytics");

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

  const statsGrid = graphSection.querySelector(".analytics-stats-grid");
  if (statsGrid) {
    statsGrid.innerHTML = buildGraphStatsHtml(trendStats, range, "analytics-stat-card");
  }

  const statusEl = graphSection.querySelector<HTMLElement>(".graph-history-status");
  const chartSlot = graphSection.querySelector<HTMLElement>(".chart-slot");
  if (hist.length < 7) {
    statusEl?.classList.add("visible");
    if (chartSlot) chartSlot.style.display = "none";
  } else {
    statusEl?.classList.remove("visible");
    if (chartSlot) chartSlot.style.display = "";
  }

  requestAnimationFrame(() => {
    if (chartSlot && hist.length >= 2) {
      createInteractiveChart("analytics", chartSlot, hist, histVols);
    }
  });
}

function bindAnalyticsRefreshBtn(graphSection: HTMLElement, item: RankedItem): void {
  const btn = graphSection.querySelector<HTMLButtonElement>(".refresh-history-btn");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    btn.disabled = true;
    btn.textContent = "Fetching\u2026";

    try {
      await ensureItemHistory(item.name, 90);
      const range = parseInt(
        (graphSection.querySelector<HTMLSelectElement>(".graph-range-inline")?.value) || "7", 10
      );
      await refreshAnalyticsGraph(item, graphSection, range);
    } catch {
      showToast("Failed to load history", "info");
      btn.textContent = "Refresh";
      btn.disabled = false;
    }
  });
}
