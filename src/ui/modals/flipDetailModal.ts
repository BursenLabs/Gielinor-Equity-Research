/**
 * @module ui/modals/flipDetailModal
 * Flip Detail modal — trade summary + side-by-side snapshot comparison table.
 */

import type { CompletedFlip } from "../../services";
import { formatGp } from "../../services";
import { singletonModal, buildModalHeader } from "./modalBase";

const ensureFlipDetailModal = singletonModal({
  backdropClass: "flip-detail-backdrop",
  modalClass: "flip-detail-modal",
  ariaLabel: "Flip details",
});

/** Show the flip detail modal for a completed flip. */
export function showFlipDetailModal(flip: CompletedFlip): void {
  const { backdrop, content } = ensureFlipDetailModal();
  const modal = content;
  modal.innerHTML = "";

  const header = buildModalHeader(
    flip.itemName,
    () => backdrop.classList.remove("visible"),
    { ariaLabel: "Close flip details" },
  );
  modal.appendChild(header);

  // ── Trade Summary ──
  const summarySection = document.createElement("div");
  summarySection.className = "flip-detail-section";

  const cost = flip.buyPrice * flip.quantity;
  const roi = cost > 0 ? (flip.realizedProfit / cost) * 100 : 0;

  const summaryTitle = document.createElement("div");
  summaryTitle.className = "flip-detail-section-title";
  summaryTitle.textContent = "Trade Summary";
  summarySection.appendChild(summaryTitle);

  const grid = document.createElement("div");
  grid.className = "flip-detail-grid";

  const rows: [string, string][] = [
    ["Buy Price", `${formatGp(flip.buyPrice)} gp`],
    [flip.alched ? "Alch Value" : "Sell Price", `${formatGp(flip.actualSellPrice)} gp`],
    ["Quantity", flip.quantity.toLocaleString("en-US")],
    ["Total Cost", `${formatGp(cost)} gp`],
    ["Net Profit", `${flip.realizedProfit >= 0 ? "\u25B2" : "\u25BC"} ${formatGp(flip.realizedProfit)} gp`],
    ["ROI", `${roi >= 0 ? "+" : ""}${roi.toFixed(1)}%`],
    ["Exit Method", flip.alched ? "\uD83D\uDD25 High Alchemy (no GE tax)" : "GE Sale (2% tax)"],
    ["Bought", new Date(flip.timestamp).toLocaleString("en-GB", { day: "numeric", month: "short", year: "2-digit", hour: "2-digit", minute: "2-digit" })],
    [flip.alched ? "Alched" : "Sold", new Date(flip.completedAt).toLocaleString("en-GB", { day: "numeric", month: "short", year: "2-digit", hour: "2-digit", minute: "2-digit" })],
  ];

  for (const [label, value] of rows) {
    const lbl = document.createElement("span");
    lbl.className = "flip-detail-label";
    lbl.textContent = label;
    const val = document.createElement("span");
    val.className = "flip-detail-value";
    if (label === "Net Profit") val.classList.add(flip.realizedProfit >= 0 ? "win" : "loss");
    if (label === "ROI") val.classList.add(roi >= 0 ? "win" : "loss");
    val.textContent = value;
    grid.appendChild(lbl);
    grid.appendChild(val);
  }

  summarySection.appendChild(grid);
  modal.appendChild(summarySection);

  // ── Snapshot Comparison ──
  const buySnap = flip.buySnapshot;
  const sellSnap = flip.sellSnapshot;

  if (buySnap || sellSnap) {
    const compSection = document.createElement("div");
    compSection.className = "flip-detail-section";

    const compTitle = document.createElement("div");
    compTitle.className = "flip-detail-section-title";
    compTitle.textContent = "Market Snapshot Comparison";
    compSection.appendChild(compTitle);

    const table = document.createElement("table");
    table.className = "flip-snapshot-table";

    const thead = document.createElement("thead");
    const hRow = document.createElement("tr");
    for (const h of ["Metric", "At Buy", "At Sell", "Change"]) {
      const th = document.createElement("th");
      th.textContent = h;
      hRow.appendChild(th);
    }
    thead.appendChild(hRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    const na = "N/A";
    const fmtGp = (v: number | undefined) => v != null ? `${formatGp(v)} gp` : na;
    const fmtVol = (v: number | undefined) => v != null ? v.toLocaleString("en-US") : na;
    const fmtPct = (v: number | undefined) => v != null ? `${(v * 100).toFixed(1)}%` : na;
    const fmtStr = (v: string | undefined) => v ?? na;

    type SnapRow = { label: string; buy: string; sell: string; change: string; changeClass?: string };
    const snapRows: SnapRow[] = [];

    // Guide Price
    {
      const b = buySnap?.price; const s = sellSnap?.price;
      let change = na; let cls = "";
      if (b != null && s != null) { const diff = s - b; const pct = b > 0 ? (diff / b) * 100 : 0; change = `${diff >= 0 ? "+" : ""}${pct.toFixed(1)}%`; cls = diff >= 0 ? "win" : "loss"; }
      snapRows.push({ label: "Guide Price", buy: fmtGp(b), sell: fmtGp(s), change, changeClass: cls });
    }
    // Volume
    {
      const b = buySnap?.volume; const s = sellSnap?.volume;
      let change = na; let cls = "";
      if (b != null && s != null) { const diff = s - b; const pct = b > 0 ? (diff / b) * 100 : 0; change = `${diff >= 0 ? "+" : ""}${pct.toFixed(1)}%`; cls = diff >= 0 ? "win" : "loss"; }
      snapRows.push({ label: "Volume", buy: fmtVol(b), sell: fmtVol(s), change, changeClass: cls });
    }
    // Trade Velocity
    snapRows.push({ label: "Trade Velocity", buy: fmtStr(buySnap?.tradeVelocity), sell: fmtStr(sellSnap?.tradeVelocity), change: buySnap?.tradeVelocity && sellSnap?.tradeVelocity ? (buySnap.tradeVelocity === sellSnap.tradeVelocity ? "\u2014" : "Changed") : na });
    // Price Trend
    snapRows.push({ label: "Price Trend", buy: fmtStr(buySnap?.priceTrend), sell: fmtStr(sellSnap?.priceTrend), change: buySnap?.priceTrend && sellSnap?.priceTrend ? (buySnap.priceTrend === sellSnap.priceTrend ? "\u2014" : "Changed") : na });
    // EMA 30d
    {
      const b = buySnap?.ema30d; const s = sellSnap?.ema30d;
      let change = na; let cls = "";
      if (b != null && s != null) { const diff = s - b; const pct = b > 0 ? (diff / b) * 100 : 0; change = `${diff >= 0 ? "+" : ""}${pct.toFixed(1)}%`; cls = diff >= 0 ? "win" : "loss"; }
      snapRows.push({ label: "EMA 30d", buy: fmtGp(b), sell: fmtGp(s), change, changeClass: cls });
    }
    // Volatility
    snapRows.push({ label: "Volatility", buy: fmtPct(buySnap?.volatility), sell: fmtPct(sellSnap?.volatility), change: buySnap?.volatility != null && sellSnap?.volatility != null ? `${(sellSnap.volatility - buySnap.volatility) >= 0 ? "+" : ""}${((sellSnap.volatility - buySnap.volatility) * 100).toFixed(1)}pp` : na });
    // Est. Flip Profit
    {
      const b = buySnap?.estFlipProfit; const s = sellSnap?.estFlipProfit;
      let change = na; let cls = "";
      if (b != null && s != null) { const diff = s - b; const pct = b > 0 ? (diff / b) * 100 : 0; change = `${diff >= 0 ? "+" : ""}${pct.toFixed(1)}%`; cls = diff >= 0 ? "win" : "loss"; }
      snapRows.push({ label: "Est. Flip Profit", buy: fmtGp(b), sell: fmtGp(s), change, changeClass: cls });
    }
    // Return on Time
    {
      const b = buySnap?.returnOnTime; const s = sellSnap?.returnOnTime;
      let change = na; let cls = "";
      if (b != null && s != null) { const diff = s - b; const pct = b > 0 ? (diff / b) * 100 : 0; change = `${diff >= 0 ? "+" : ""}${pct.toFixed(1)}%`; cls = diff >= 0 ? "win" : "loss"; }
      snapRows.push({ label: "Return on Time", buy: fmtGp(b), sell: fmtGp(s), change, changeClass: cls });
    }

    for (const r of snapRows) {
      const tr = document.createElement("tr");
      const tdLabel = document.createElement("td"); tdLabel.textContent = r.label; tdLabel.className = "snap-label";
      const tdBuy = document.createElement("td"); tdBuy.textContent = r.buy;
      const tdSell = document.createElement("td"); tdSell.textContent = r.sell;
      const tdChange = document.createElement("td"); tdChange.textContent = r.change;
      if (r.changeClass) tdChange.classList.add(r.changeClass);
      tr.appendChild(tdLabel); tr.appendChild(tdBuy); tr.appendChild(tdSell); tr.appendChild(tdChange);
      tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    compSection.appendChild(table);
    modal.appendChild(compSection);
  } else {
    const noSnap = document.createElement("div");
    noSnap.className = "flip-detail-section flip-detail-no-snapshot";
    noSnap.textContent = "No market snapshots available for this flip (added before snapshot tracking was enabled).";
    modal.appendChild(noSnap);
  }

  backdrop.classList.add("visible");
  const closeBtn = header.querySelector("button");
  closeBtn?.focus();
}
