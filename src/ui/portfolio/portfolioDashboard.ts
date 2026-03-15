/**
 * @module ui/portfolioDashboard
 * Portfolio Dashboard — Cumulative P&L chart + Win/Loss donut chart.
 *
 * audit:no-op(SRP) — Both chart renderers serve a single cohesive
 * concern (portfolio dashboard visualisation). The P&L function is long
 * (~370 lines of canvas drawing) but long function ≠ SRP violation;
 * both renderers share state, imports, and DOM scope.
 */

import { formatGp } from "../../services";
import { bindCollapseToggle } from "../collapseToggle";
import {
  axisLabel,
  axisLabelPrecision,
  getChartThemeColors,
  withAlpha,
} from "../chart/chartHelpers";
import { getEls } from "../domRefs";
import { getPortfolio } from "../state";
import { LS_PNL_COLLAPSED, LS_WINLOSS_COLLAPSED } from "../constants";

// ─── Local state ────────────────────────────────────────────────────────────

const DASH_MARGIN = { left: 58, right: 16, top: 14, bottom: 32 } as const;
const DASH_Y_TICKS = 4;

// ─── Collapse ───────────────────────────────────────────────────────────────

export function bindDashboardCollapse(): void {
  const els = getEls();

  bindCollapseToggle({
    collapseBtn: els.dashboardPnlCollapseBtn,
    targets: [els.dashboardPnlChart],
    headerBar: els.dashboardPnlHeader,
    storageKey: LS_PNL_COLLAPSED,
  });

  bindCollapseToggle({
    collapseBtn: els.dashboardWinlossCollapseBtn,
    targets: [els.dashboardWinlossChart],
    headerBar: els.dashboardWinlossHeader,
    storageKey: LS_WINLOSS_COLLAPSED,
  });
}

// ─── Main render ────────────────────────────────────────────────────────────

export function renderPortfolioDashboard(): void {
  renderCumulativePnlChart();
  renderWinLossDonut();
}

// ─── Cumulative P&L line chart ──────────────────────────────────────────────

function renderCumulativePnlChart(): void {
  const els = getEls();
  const container = els.dashboardPnlChart;
  container.innerHTML = "";

  const portfolio = getPortfolio();
  const flips = portfolio.getCompletedFlips().slice().sort((a, b) => a.completedAt - b.completedAt);
  if (flips.length < 2) {
    container.innerHTML = '<p class="dashboard-empty">Complete at least 2 flips to see your P&L chart.</p>';
    return;
  }

  const cumValues: number[] = [];
  let running = 0;
  for (const f of flips) {
    running += f.realizedProfit;
    cumValues.push(running);
  }

  const canvasWrap = document.createElement("div");
  canvasWrap.className = "chart-canvas-wrap";

  const baseCanvas = document.createElement("canvas");
  baseCanvas.className = "chart-base-canvas";
  baseCanvas.style.height = "200px";
  baseCanvas.setAttribute("role", "img");
  baseCanvas.setAttribute("aria-label",
    `Cumulative P&L chart: ${flips.length} flips. Current total ${formatGp(running)} gp.`);

  const interCanvas = document.createElement("canvas");
  interCanvas.className = "chart-interaction-canvas";

  const tooltip = document.createElement("div");
  tooltip.className = "pnl-chart-tooltip";

  canvasWrap.appendChild(baseCanvas);
  canvasWrap.appendChild(interCanvas);
  canvasWrap.appendChild(tooltip);
  container.appendChild(canvasWrap);

  let cssW = 0;
  let cssH = 0;
  let yMin = 0;
  let yRange = 1;
  let stepX = 1;
  let zeroY = 0;

  const toX = (i: number): number => DASH_MARGIN.left + i * stepX;
  const toY = (v: number): number => DASH_MARGIN.top + (cssH - DASH_MARGIN.top - DASH_MARGIN.bottom) - ((v - yMin) / yRange) * (cssH - DASH_MARGIN.top - DASH_MARGIN.bottom);

  const prepCanvas = (canvas: HTMLCanvasElement): CanvasRenderingContext2D | null => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const dpr = window.devicePixelRatio || 1;
    cssW = baseCanvas.offsetWidth || baseCanvas.clientWidth || 480;
    cssH = baseCanvas.offsetHeight || baseCanvas.clientHeight || 200;
    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  };

  const drawBase = (): void => {
    const ctx = prepCanvas(baseCanvas);
    if (!ctx) return;
    prepCanvas(interCanvas);

    const { left: mL, right: mR, top: mT, bottom: mB } = DASH_MARGIN;
    const plotW = cssW - mL - mR;
    const plotH = cssH - mT - mB;
    const theme = getChartThemeColors();

    const rawMin = Math.min(0, ...cumValues);
    const rawMax = Math.max(0, ...cumValues);
    const rawRange = rawMax - rawMin || 1;
    const pad = rawRange * 0.08;
    yMin = rawMin - pad;
    const yMax = rawMax + pad;
    yRange = yMax - yMin;

    stepX = plotW / Math.max(1, cumValues.length - 1);
    zeroY = toY(0);

    const yPrec = axisLabelPrecision(yMin, yMax, DASH_Y_TICKS);
    ctx.font = '11px "Segoe UI", sans-serif';
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let i = 0; i <= DASH_Y_TICKS; i++) {
      const tv = yMin + (yRange * i) / DASH_Y_TICKS;
      const y = toY(tv);
      ctx.strokeStyle = theme.gridLine;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(mL, y);
      ctx.lineTo(cssW - mR, y);
      ctx.stroke();
      ctx.fillStyle = theme.axisText;
      ctx.fillText(axisLabel(tv, yPrec), mL - 6, y);
    }

    ctx.save();
    ctx.strokeStyle = theme.axisText;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.moveTo(mL, zeroY);
    ctx.lineTo(cssW - mR, zeroY);
    ctx.stroke();
    ctx.restore();

    const SHORT_MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const toDateKey = (ts: number): string => {
      const d = new Date(ts);
      return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    };

    const dayBoundaries: number[] = [0];
    for (let i = 1; i < flips.length; i++) {
      if (toDateKey(flips[i].completedAt) !== toDateKey(flips[i - 1].completedAt)) {
        dayBoundaries.push(i);
      }
    }

    const maxLbls = Math.max(2, Math.floor(plotW / 52));
    let labelIndices = dayBoundaries;
    if (dayBoundaries.length > maxLbls) {
      const step = Math.ceil(dayBoundaries.length / maxLbls);
      labelIndices = dayBoundaries.filter((_, i) => i % step === 0);
      if (labelIndices[labelIndices.length - 1] !== dayBoundaries[dayBoundaries.length - 1]) {
        labelIndices.push(dayBoundaries[dayBoundaries.length - 1]);
      }
    }

    ctx.textBaseline = "top";
    ctx.fillStyle = theme.axisText;
    ctx.font = '10px "Segoe UI", sans-serif';
    const labelY = cssH - mB + 6;
    for (let li = 0; li < labelIndices.length; li++) {
      const idx = labelIndices[li];
      const d = new Date(flips[idx].completedAt);
      const label = `${d.getDate()} ${SHORT_MONTHS[d.getMonth()]}`;
      const x = toX(idx);
      ctx.textAlign = li === 0 ? "left" : li === labelIndices.length - 1 ? "right" : "center";
      ctx.fillText(label, x, labelY);
    }

    ctx.save();
    ctx.beginPath();
    ctx.rect(mL, mT, plotW, plotH);
    ctx.clip();

    const greenColor = theme.accentGreen;
    const redColor = theme.accentRed;

    const pts: { x: number; y: number }[] = cumValues.map((v, i) => ({ x: toX(i), y: toY(v) }));

    // Green fill (above zero line).
    ctx.save();
    ctx.beginPath();
    ctx.rect(mL, mT, plotW, zeroY - mT);
    ctx.clip();
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.lineTo(pts[pts.length - 1].x, zeroY);
    ctx.lineTo(pts[0].x, zeroY);
    ctx.closePath();
    const gGrad = ctx.createLinearGradient(0, mT, 0, zeroY);
    gGrad.addColorStop(0, withAlpha(greenColor, 0.27));
    gGrad.addColorStop(1, withAlpha(greenColor, 0.03));
    ctx.fillStyle = gGrad;
    ctx.fill();
    ctx.restore();

    // Red fill (below zero line).
    ctx.save();
    ctx.beginPath();
    ctx.rect(mL, zeroY, plotW, mT + plotH - zeroY);
    ctx.clip();
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.lineTo(pts[pts.length - 1].x, zeroY);
    ctx.lineTo(pts[0].x, zeroY);
    ctx.closePath();
    const rGrad = ctx.createLinearGradient(0, zeroY, 0, mT + plotH);
    rGrad.addColorStop(0, withAlpha(redColor, 0.03));
    rGrad.addColorStop(1, withAlpha(redColor, 0.27));
    ctx.fillStyle = rGrad;
    ctx.fill();
    ctx.restore();

    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    for (let i = 1; i < pts.length; i++) {
      const above = cumValues[i] >= 0 && cumValues[i - 1] >= 0;
      const below = cumValues[i] < 0 && cumValues[i - 1] < 0;
      ctx.strokeStyle = below ? redColor : above ? greenColor : greenColor;
      ctx.beginPath();
      ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
      ctx.lineTo(pts[i].x, pts[i].y);
      ctx.stroke();
    }

    const dotRadius = flips.length <= 12 ? 5 : 3.5;
    for (let i = 0; i < pts.length; i++) {
      const dotColor = cumValues[i] >= 0 ? greenColor : redColor;
      ctx.beginPath();
      ctx.arc(pts[i].x, pts[i].y, dotRadius + 2, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.globalAlpha = 0.2;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(pts[i].x, pts[i].y, dotRadius, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();
      ctx.strokeStyle = document.body.dataset.mode === "light" ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.6)";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    if (flips.length <= 10) {
      ctx.font = '10px "Segoe UI", sans-serif';
      ctx.fillStyle = theme.axisText;
      ctx.textBaseline = "bottom";
      for (let i = 0; i < pts.length; i++) {
        const name = flips[i].itemName.length > 16
          ? flips[i].itemName.slice(0, 15) + "\u2026"
          : flips[i].itemName;
        const above = i % 2 === 0;
        const ly = above ? pts[i].y - dotRadius - 4 : pts[i].y + dotRadius + 12;
        ctx.textBaseline = above ? "bottom" : "top";
        ctx.textAlign = i === 0 ? "left" : i === pts.length - 1 ? "right" : "center";
        ctx.fillText(name, pts[i].x, ly);
      }
    }

    ctx.restore();
  };

  const drawCrosshair = (idx: number): void => {
    const ctx = interCanvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);

    const { left: mL, right: mR, top: mT, bottom: mB } = DASH_MARGIN;
    const plotW = cssW - mL - mR;
    const plotH = cssH - mT - mB;

    const ptX = toX(idx);
    const ptY = toY(cumValues[idx]);

    const accentColour = getChartThemeColors().accentPrimary;

    ctx.save();
    ctx.beginPath();
    ctx.rect(mL, mT, plotW, plotH);
    ctx.clip();

    ctx.strokeStyle = accentColour;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 3]);
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.moveTo(ptX, mT);
    ctx.lineTo(ptX, mT + plotH);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(mL, ptY);
    ctx.lineTo(mL + plotW, ptY);
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.globalAlpha = 1;

    ctx.beginPath();
    ctx.arc(ptX, ptY, 9, 0, Math.PI * 2);
    ctx.fillStyle = accentColour;
    ctx.globalAlpha = 0.15;
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.beginPath();
    ctx.arc(ptX, ptY, 6, 0, Math.PI * 2);
    ctx.fillStyle = accentColour;
    ctx.globalAlpha = 0.4;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = accentColour;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.restore();
  };

  const clearCrosshair = (): void => {
    const ctx = interCanvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);
  };

  drawBase();

  const resizeObs = new ResizeObserver(() => drawBase());
  resizeObs.observe(baseCanvas);

  const resolveIndex = (e: MouseEvent): number => {
    const rect = baseCanvas.getBoundingClientRect();
    const cssXPos = e.clientX - rect.left;
    const rawIdx = (cssXPos - DASH_MARGIN.left) / stepX;
    return Math.max(0, Math.min(Math.round(rawIdx), cumValues.length - 1));
  };

  const onMove = (e: MouseEvent): void => {
    const idx = resolveIndex(e);
    const flip = flips[idx];

    drawCrosshair(idx);

    const profitClass = flip.realizedProfit >= 0 ? "profit" : "loss";
    const cumClass = cumValues[idx] >= 0 ? "profit" : "loss";
    const d = new Date(flip.completedAt);
    const dateStr = d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

    tooltip.innerHTML =
      `<div class="pnl-tooltip-date">Flip #${idx + 1} \u2014 ${dateStr}</div>` +
      `<div class="pnl-tooltip-item">${flip.itemName}</div>` +
      `<div class="pnl-tooltip-profit ${profitClass}">Flip: ${flip.realizedProfit >= 0 ? "+" : ""}${formatGp(flip.realizedProfit)} gp</div>` +
      `<div class="pnl-tooltip-cumulative ${cumClass}">Total: ${cumValues[idx] >= 0 ? "+" : ""}${formatGp(cumValues[idx])} gp</div>`;
    tooltip.classList.add("visible");

    const ptX = toX(idx);
    const ptY = toY(cumValues[idx]);
    const tipW = 180;
    const tipH = 80;
    const { left: mL, right: mR } = DASH_MARGIN;
    const plotW = cssW - mL - mR;
    const plotMidX = mL + plotW / 2;

    let left: number;
    if (ptX > plotMidX) {
      left = ptX - tipW - 14;
    } else {
      left = ptX + 14;
    }
    let top = ptY - tipH / 2;
    if (left < 4) left = 4;
    if (top < 4) top = 4;
    if (top + tipH > cssH - 4) top = cssH - tipH - 4;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  };

  canvasWrap.addEventListener("mousemove", onMove);
  canvasWrap.addEventListener("mouseleave", () => {
    clearCrosshair();
    tooltip.classList.remove("visible");
  });
}

// ─── Win/Loss donut chart ───────────────────────────────────────────────────

function renderWinLossDonut(): void {
  const els = getEls();
  const container = els.dashboardWinlossChart;
  container.innerHTML = "";

  const portfolio = getPortfolio();
  const flips = portfolio.getCompletedFlips();
  if (flips.length === 0) {
    container.innerHTML = '<p class="dashboard-empty">No completed flips yet.</p>';
    return;
  }

  const wins = flips.filter(f => f.realizedProfit > 0).length;
  const losses = flips.length - wins;
  const winPct = wins / flips.length;

  const wrap = document.createElement("div");
  wrap.className = "winloss-chart-wrap";

  const canvas = document.createElement("canvas");
  const SIZE = 120;
  canvas.style.width = `${SIZE}px`;
  canvas.style.height = `${SIZE}px`;
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label",
    `Win/loss donut: ${wins} wins, ${losses} losses (${(winPct * 100).toFixed(0)}% win rate).`);

  const legend = document.createElement("div");
  legend.className = "winloss-legend";
  legend.innerHTML =
    `<div class="winloss-legend-item"><span class="winloss-swatch win"></span>Wins: <span class="winloss-count">${wins}</span> (${(winPct * 100).toFixed(1)}%)</div>` +
    `<div class="winloss-legend-item"><span class="winloss-swatch loss"></span>Losses: <span class="winloss-count">${losses}</span> (${((1 - winPct) * 100).toFixed(1)}%)</div>` +
    `<div class="winloss-legend-item" style="margin-top:2px;color:var(--text-muted);font-size:10px">Total: ${flips.length} flips</div>`;

  wrap.appendChild(canvas);
  wrap.appendChild(legend);
  container.appendChild(wrap);

  const drawDonut = (): void => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const outerR = SIZE / 2 - 4;
    const innerR = outerR * 0.55;

    const theme = getChartThemeColors();
    const greenColor = theme.accentGreen;
    const redColor = theme.accentRed;

    const startAngle = -Math.PI / 2;
    const winAngle = winPct * Math.PI * 2;

    ctx.beginPath();
    ctx.arc(cx, cy, outerR, startAngle, startAngle + winAngle);
    ctx.arc(cx, cy, innerR, startAngle + winAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = greenColor;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, cy, outerR, startAngle + winAngle, startAngle + Math.PI * 2);
    ctx.arc(cx, cy, innerR, startAngle + Math.PI * 2, startAngle + winAngle, true);
    ctx.closePath();
    ctx.fillStyle = redColor;
    ctx.fill();

    ctx.fillStyle = theme.axisText;
    ctx.font = 'bold 18px "Segoe UI", sans-serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${(winPct * 100).toFixed(0)}%`, cx, cy - 6);
    ctx.font = '10px "Segoe UI", sans-serif';
    ctx.fillText("win rate", cx, cy + 10);
  };

  drawDonut();

  const resizeObs = new ResizeObserver(() => drawDonut());
  resizeObs.observe(canvas);
}
