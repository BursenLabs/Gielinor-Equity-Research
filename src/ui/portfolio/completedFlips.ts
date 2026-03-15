/**
 * @module ui/completedFlips
 * Completed flips table, portfolio stats summary, CSV export,
 * and filter binding.
 */

import { formatGp } from "../../services";
import { createButton, openAnalyticsForName } from "../helpers";
import { showEditCompletedFlipModal } from "../modals/editCompletedFlipModal";
import { showFlipDetailModal } from "../modals/flipDetailModal";
import { getEls } from "../domRefs";
import {
  getPortfolio,
  getCompletedFlipsSortCol,
  setCompletedFlipsSortCol,
  getCompletedFlipsSortAsc,
  setCompletedFlipsSortAsc,
} from "../state";

// ─── Render Completed Flips ─────────────────────────────────────────────────

/** Build the completed-flips table with sortable headers and action buttons. */
export function renderCompletedFlips(): void {
  renderPortfolioStats();

  const els = getEls();
  const container = els.completedFlipsList;
  container.innerHTML = "";

  const portfolio = getPortfolio();
  let flips = portfolio.getCompletedFlips();

  const filterText = els.completedFlipsFilter.value.trim().toLowerCase();
  if (filterText) {
    flips = flips.filter((f) => {
      const profitStr = String(f.realizedProfit);
      return f.itemName.toLowerCase().includes(filterText) || profitStr.includes(filterText);
    });
  }

  if (flips.length === 0) {
    const empty = document.createElement("div");
    empty.className = "portfolio-empty";
    empty.textContent = filterText
      ? "No flips match the current filter."
      : "No completed flips yet. Use the \u2713 button on an active flip to log a sale.";
    container.appendChild(empty);
    return;
  }

  const completedFlipsSortCol = getCompletedFlipsSortCol();
  const completedFlipsSortAsc = getCompletedFlipsSortAsc();
  const dir = completedFlipsSortAsc ? 1 : -1;
  flips.sort((a, b) => {
    switch (completedFlipsSortCol) {
      case "date": return dir * (a.completedAt - b.completedAt);
      case "item": return dir * a.itemName.localeCompare(b.itemName);
      case "profit": return dir * (a.realizedProfit - b.realizedProfit);
      case "roi": {
        const roiA = a.buyPrice * a.quantity > 0 ? a.realizedProfit / (a.buyPrice * a.quantity) : 0;
        const roiB = b.buyPrice * b.quantity > 0 ? b.realizedProfit / (b.buyPrice * b.quantity) : 0;
        return dir * (roiA - roiB);
      }
      default: return 0;
    }
  });

  const table = document.createElement("table");
  table.className = "completed-flips-table";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const columns: { key: typeof completedFlipsSortCol; label: string }[] = [
    { key: "date", label: "Date" },
    { key: "item", label: "Item" },
    { key: "profit", label: "Profit" },
    { key: "roi", label: "ROI" },
  ];

  for (const col of columns) {
    const th = document.createElement("th");
    const arrow = completedFlipsSortCol === col.key
      ? (completedFlipsSortAsc ? " \u25B2" : " \u25BC")
      : "";
    th.innerHTML = `${col.label}<span class="sort-arrow">${arrow}</span>`;
    th.addEventListener("click", () => {
      if (getCompletedFlipsSortCol() === col.key) {
        setCompletedFlipsSortAsc(!getCompletedFlipsSortAsc());
      } else {
        setCompletedFlipsSortCol(col.key);
        setCompletedFlipsSortAsc(col.key === "item");
      }
      renderCompletedFlips();
    });
    headerRow.appendChild(th);
  }

  const actTh = document.createElement("th");
  actTh.textContent = "";
  actTh.className = "actions-col";
  headerRow.appendChild(actTh);

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  for (const flip of flips) {
    const row = document.createElement("tr");
    row.className = flip.realizedProfit > 0 ? "win" : "loss";

    const dateCell = document.createElement("td");
    dateCell.textContent = new Date(flip.completedAt).toLocaleDateString("en-GB", {
      day: "numeric", month: "short", year: "2-digit",
    });

    const itemCell = document.createElement("td");
    itemCell.className = "completed-item-link";
    if (flip.alched) {
      const nameSpan = document.createElement("span");
      nameSpan.textContent = flip.itemName;
      const alchBadge = document.createElement("span");
      alchBadge.className = "alch-badge";
      alchBadge.textContent = "\uD83D\uDD25 Alched";
      alchBadge.title = "Completed via High Alchemy (no GE tax)";
      itemCell.appendChild(nameSpan);
      itemCell.appendChild(alchBadge);
    } else {
      itemCell.textContent = flip.itemName;
    }
    itemCell.title = `View analytics for ${flip.itemName}`;
    itemCell.addEventListener("click", () => openAnalyticsForName(flip.itemName));

    const profitCell = document.createElement("td");
    profitCell.className = `profit-cell ${flip.realizedProfit > 0 ? "win" : "loss"}`;
    const profitPrefix = flip.realizedProfit > 0 ? "\u25B2 " : "\u25BC ";
    profitCell.textContent = `${profitPrefix}${formatGp(flip.realizedProfit)} gp`;

    const roi = flip.buyPrice * flip.quantity > 0
      ? (flip.realizedProfit / (flip.buyPrice * flip.quantity)) * 100
      : 0;
    const roiCell = document.createElement("td");
    roiCell.className = `profit-cell ${roi >= 0 ? "win" : "loss"}`;
    roiCell.textContent = `${roi >= 0 ? "+" : ""}${roi.toFixed(1)}%`;

    const actionsCell = document.createElement("td");
    actionsCell.className = "actions-col";

    const viewBtn = createButton({
      cls: "flip-view-btn", text: "\uD83D\uDD0D", title: "View flip details",
      ariaLabel: `View details for ${flip.itemName}`,
      onClick: () => showFlipDetailModal(flip),
    });

    const editBtn = createButton({
      cls: "flip-edit-btn", text: "\u270F\uFE0F", title: "Edit flip",
      ariaLabel: `Edit ${flip.itemName} flip`,
      onClick: () => showEditCompletedFlipModal(flip),
    });

    const delBtn = createButton({
      cls: "flip-delete-btn", text: "\u2715", title: "Remove from history",
      ariaLabel: `Remove ${flip.itemName} from history`,
      onClick: () => { portfolio.removeCompletedFlip(flip.id); renderCompletedFlips(); },
    });

    actionsCell.appendChild(viewBtn);
    actionsCell.appendChild(editBtn);
    actionsCell.appendChild(delBtn);

    row.appendChild(dateCell);
    row.appendChild(itemCell);
    row.appendChild(profitCell);
    row.appendChild(roiCell);
    row.appendChild(actionsCell);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  container.appendChild(table);
}

// ─── Portfolio Stats ────────────────────────────────────────────────────────

function renderPortfolioStats(): void {
  const els = getEls();
  const portfolio = getPortfolio();
  const stats = portfolio.getPortfolioStats();

  const profitEl = els.statTotalProfit;
  const profitPrefix = stats.totalProfit >= 0 ? "\u25B2 " : "\u25BC ";
  profitEl.textContent = `${profitPrefix}${formatGp(stats.totalProfit)} gp`;
  profitEl.className = `stat-value ${stats.totalProfit >= 0 ? "profit" : "loss"}`;

  els.statTotalFlips.textContent = String(stats.totalFlips);

  const avgProfitEl = els.statAvgProfit;
  const avgPrefix = stats.avgProfit >= 0 ? "\u25B2 " : "\u25BC ";
  avgProfitEl.textContent = `${avgPrefix}${formatGp(stats.avgProfit)} gp`;
  avgProfitEl.className = `stat-value ${stats.avgProfit >= 0 ? "profit" : "loss"}`;

  els.statAvgRoi.textContent = `${(stats.avgRoi * 100).toFixed(1)}%`;
  els.statAvgRoi.className = `stat-value ${stats.avgRoi >= 0 ? "profit" : "loss"}`;
}

// ─── CSV Export ─────────────────────────────────────────────────────────────

function exportCompletedFlipsCsv(): void {
  const portfolio = getPortfolio();
  const flips = portfolio.getCompletedFlips();
  if (flips.length === 0) {
    alert("No completed flips to export.");
    return;
  }

  const header = "Item,Buy Price,Qty,Sell Price,Realised Profit,Date";
  const rows = flips.map((f) => {
    const dateStr = new Date(f.completedAt).toISOString().slice(0, 10);
    const safeName = f.itemName.includes(",") ? `"${f.itemName}"` : f.itemName;
    return `${safeName},${f.buyPrice},${f.quantity},${f.actualSellPrice},${f.realizedProfit},${dateStr}`;
  });

  const csv = [header, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "ge-advisor-flips.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/** Bind the CSV export button click handler. */
export function bindCsvExport(): void {
  getEls().exportCsvBtn.addEventListener("click", exportCompletedFlipsCsv);
}

/** Bind the completed-flips filter input listener. */
export function bindCompletedFlipsFilter(): void {
  getEls().completedFlipsFilter.addEventListener("input", () => {
    renderCompletedFlips();
  });
}
