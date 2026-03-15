/**
 * @module ui/chart/chartRenderer
 * Pure canvas rendering functions for the interactive chart.
 *
 * Responsible for:
 *  - Drawing the base chart (axes, grid, price line, EMA, volume, dots).
 *  - Drawing the interaction overlay (crosshair, highlight dots).
 *  - Resolving mouse position to nearest data point.
 *  - Legacy single-canvas chart rendering ({@link drawGraphChart}).
 */

import {
  ChartLayers,
  ChartHoverData,
  CHART_MARGIN,
  CHART_Y_TICKS,
  CHART_MIN_ZOOM,
  axisLabel,
  axisLabelPrecision,
  getChartThemeColors,
} from "./chartHelpers";

// ─── Shared render state ────────────────────────────────────────────────────

/** Read-only data snapshot passed to all renderer functions. */
export interface ChartViewState {
  fullData: number[];
  fullEma: number[];
  fullVolumes: number[];
  winStart: number;
  winEnd: number;
  layers: ChartLayers;
  cssW: number;
  cssH: number;
}

// ─── Canvas helpers ─────────────────────────────────────────────────────────

/**
 * Size a canvas to match CSS dimensions at device-pixel ratio.
 * Reads dimensions from `refCanvas` (usually the base canvas).
 */
export function prepCanvas(
  canvas: HTMLCanvasElement,
  refCanvas: HTMLCanvasElement,
): { ctx: CanvasRenderingContext2D; cssW: number; cssH: number } | null {
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const dpr = window.devicePixelRatio || 1;
  const cssW = refCanvas.offsetWidth || refCanvas.clientWidth || 480;
  const cssH = refCanvas.offsetHeight || refCanvas.clientHeight || 200;
  canvas.width = cssW * dpr;
  canvas.height = cssH * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, cssW, cssH };
}

/** Map a data-index + value to canvas pixel coordinates. */
function toXY(
  index: number, value: number, stepX: number,
  min: number, range: number, cssH: number,
): { x: number; y: number } {
  const { left, top, bottom } = CHART_MARGIN;
  const plotH = cssH - top - bottom;
  return {
    x: left + index * stepX,
    y: top + plotH - ((value - min) / range) * plotH,
  };
}

/** Compute padded Y-axis range, using full data when zoomed for stable axes. */
function computeYRange(
  s: ChartViewState, data: number[], ema: number[],
): { min: number; max: number; range: number } {
  const isZoomed = s.winEnd - s.winStart + 1 < s.fullData.length;
  const ySource = isZoomed
    ? [...s.fullData, ...s.fullEma.filter(v => v > 0)]
    : [...data, ...ema.filter(v => v > 0)];
  const rawMin = Math.min(...ySource);
  const rawMax = Math.max(...ySource);
  const rawRange = rawMax - rawMin || 1;
  const pad = rawRange * 0.05;
  return { min: rawMin - pad, max: rawMax + pad, range: rawMax + pad - (rawMin - pad) };
}

// ─── Base chart ─────────────────────────────────────────────────────────────

/**
 * Draw the full base chart: axes, grid, volume bars, price line, EMA, dots.
 * Side-effects: sets `aria-label` on `baseCanvas`, toggles `zoomHint`
 * visibility, and updates the price pill colour on `toggleStrip`.
 */
export function drawBaseChart(
  ctx: CanvasRenderingContext2D,
  s: ChartViewState,
  baseCanvas: HTMLCanvasElement,
  toggleStrip: HTMLDivElement,
  zoomHint: HTMLDivElement,
): void {
  const data = s.fullData.slice(s.winStart, s.winEnd + 1);
  const ema = s.fullEma.slice(s.winStart, s.winEnd + 1);
  const { cssW, cssH } = s;
  const { left: mL, right: mR, top: mT, bottom: mB } = CHART_MARGIN;
  const plotW = cssW - mL - mR;
  const plotH = cssH - mT - mB;

  if (data.length >= 2) {
    const first = data[0];
    const last = data[data.length - 1];
    const pctDelta = ((last - first) / first * 100).toFixed(1);
    const dir = last > first ? "up" : last < first ? "down" : "flat";
    baseCanvas.setAttribute("aria-label",
      `Price chart: ${data.length} data points. Trend ${dir} ${pctDelta}% from ${axisLabel(first)} to ${axisLabel(last)} gp.`);
  } else {
    baseCanvas.setAttribute("aria-label", "Price chart: insufficient data to display.");
  }

  const theme = getChartThemeColors();

  if (data.length === 0) {
    ctx.font = '12px "Segoe UI", sans-serif';
    ctx.fillStyle = theme.emptyText;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("No price history available", cssW / 2, cssH / 2);
    return;
  }
  if (data.length === 1) {
    ctx.font = '11px "Segoe UI", sans-serif';
    ctx.fillStyle = theme.emptyText;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${axisLabel(data[0])} gp (1 day)`, cssW / 2, cssH / 2);
    return;
  }

  const isZoomed = s.winEnd - s.winStart + 1 < s.fullData.length;
  const { min, max, range } = computeYRange(s, data, ema);
  const stepX = plotW / (data.length - 1);

  // Y-axis ticks + grid
  const tickValues: number[] = [];
  for (let i = 0; i <= CHART_Y_TICKS; i++) {
    tickValues.push(min + (range * i) / CHART_Y_TICKS);
  }
  const yPrec = axisLabelPrecision(min, max, CHART_Y_TICKS);
  ctx.font = '11px "Segoe UI", sans-serif';
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (const tv of tickValues) {
    const y = mT + plotH - ((tv - min) / range) * plotH;
    ctx.strokeStyle = theme.gridLine;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(mL, y);
    ctx.lineTo(cssW - mR, y);
    ctx.stroke();
    ctx.fillStyle = theme.axisText;
    ctx.fillText(axisLabel(tv, yPrec), mL - 6, y);
  }

  // X-axis labels
  ctx.textBaseline = "top";
  ctx.fillStyle = theme.axisText;
  const SHORT_MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const maxLabels = 6;
  const totalDays = data.length - 1;
  let dayInterval = Math.max(1, Math.ceil(totalDays / (maxLabels - 1)));
  const niceIntervals = [1, 2, 5, 7, 10, 14, 15, 30, 45, 60, 90];
  for (const ni of niceIntervals) {
    if (ni >= dayInterval) { dayInterval = ni; break; }
  }
  const labelIndices: number[] = [];
  for (let idx = totalDays; idx >= 0; idx -= dayInterval) {
    labelIndices.unshift(idx);
  }
  if (labelIndices[0] !== 0) labelIndices.unshift(0);

  const labelY = cssH - mB + 8;
  for (let li = 0; li < labelIndices.length; li++) {
    const idx = labelIndices[li];
    const x = mL + idx * stepX;
    const globalIdx = s.winStart + idx;
    const daysAgo = s.fullData.length - 1 - globalIdx;
    let label: string;
    if (daysAgo === 0) {
      label = "Today";
    } else {
      const d = new Date();
      d.setDate(d.getDate() - daysAgo);
      label = `${d.getDate()} ${SHORT_MONTHS[d.getMonth()]}`;
    }
    if (li === 0) ctx.textAlign = "left";
    else if (li === labelIndices.length - 1) ctx.textAlign = "right";
    else ctx.textAlign = "center";
    ctx.fillText(label, x, labelY);
  }

  const trendFirst = isZoomed ? s.fullData[0] : data[0];
  const trendLast = isZoomed ? s.fullData[s.fullData.length - 1] : data[data.length - 1];
  const lineColour = trendLast > trendFirst ? "#4ec9b0" : trendLast < trendFirst ? "#f44747" : "#888888";

  ctx.save();
  ctx.beginPath();
  ctx.rect(mL, mT, plotW, plotH);
  ctx.clip();

  // Volume bars
  if (s.layers.volume) {
    const winVols = s.fullVolumes.slice(s.winStart, s.winEnd + 1);
    const maxVol = Math.max(...winVols, 1);
    const volMaxH = plotH * 0.25;
    const barW = Math.max(1, stepX * 0.5);
    ctx.globalAlpha = 0.25;
    for (let i = 0; i < winVols.length; i++) {
      if (!winVols[i]) continue;
      const barH = (winVols[i] / maxVol) * volMaxH;
      const x = mL + i * stepX - barW / 2;
      const y = mT + plotH - barH;
      ctx.fillStyle = winVols[i] >= maxVol * 0.75 ? "#e2b93d" : "#888";
      ctx.fillRect(x, y, barW, barH);
    }
    ctx.globalAlpha = 1;
  }

  // Gradient fill under curve
  if (s.layers.price) {
    const p0 = toXY(0, data[0], stepX, min, range, cssH);
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    for (let i = 1; i < data.length; i++) {
      const p = toXY(i, data[i], stepX, min, range, cssH);
      ctx.lineTo(p.x, p.y);
    }
    const pLast = toXY(data.length - 1, data[data.length - 1], stepX, min, range, cssH);
    ctx.lineTo(pLast.x, mT + plotH);
    ctx.lineTo(p0.x, mT + plotH);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, mT, 0, mT + plotH);
    grad.addColorStop(0, lineColour + "44");
    grad.addColorStop(1, lineColour + "08");
    ctx.fillStyle = grad;
    ctx.fill();

    // Price line
    ctx.strokeStyle = lineColour;
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
      const p = toXY(i, data[i], stepX, min, range, cssH);
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
  }

  // EMA line
  if (s.layers.ema && ema.length >= 2 && ema[0] > 0) {
    ctx.save();
    ctx.strokeStyle = "rgba(86,156,214,0.7)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    for (let i = 0; i < ema.length; i++) {
      const p = toXY(i, ema[i], stepX, min, range, cssH);
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
    ctx.restore();
  }

  // Data-point dots
  if (s.layers.dots && s.layers.price) {
    for (let i = 0; i < data.length; i++) {
      const p = toXY(i, data[i], stepX, min, range, cssH);
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = lineColour;
      ctx.fill();
      ctx.strokeStyle = theme.dotStroke;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  ctx.restore();

  zoomHint.style.display = s.fullData.length > CHART_MIN_ZOOM ? "" : "none";

  const pricePill = toggleStrip.querySelector<HTMLElement>('[data-layer="price"]');
  if (pricePill) pricePill.style.setProperty("--pill-color", lineColour);
}

// ─── Interaction overlay ────────────────────────────────────────────────────

/**
 * Draw the crosshair lines and highlight dots on the interaction canvas.
 */
export function drawInteractionOverlay(
  canvas: HTMLCanvasElement,
  cssX: number,
  cssY: number,
  s: ChartViewState,
  hoverData: ChartHoverData | null,
): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) { console.warn('[CHART-DIAG] No ctx for interaction canvas'); return; }
  const dpr = window.devicePixelRatio || 1;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, s.cssW, s.cssH);
  // ── DIAGNOSTIC: bright red rect should be visible on hover ──
  ctx.fillStyle = 'rgba(255,0,0,0.3)';
  ctx.fillRect(0, 0, 50, 50);
  console.debug('[CHART-DIAG] drawInteractionOverlay', { canvasW: canvas.width, canvasH: canvas.height, cssW: s.cssW, cssH: s.cssH, cssX, cssY, hoverData: !!hoverData });

  const { left: mL, right: mR, top: mT, bottom: mB } = CHART_MARGIN;
  const plotW = s.cssW - mL - mR;
  const plotH = s.cssH - mT - mB;

  const cx = Math.max(mL, Math.min(cssX, mL + plotW));
  const cy = Math.max(mT, Math.min(cssY, mT + plotH));

  const accentColour = getComputedStyle(document.body)
    .getPropertyValue("--accent-primary").trim() || "#569cd6";

  ctx.save();
  ctx.beginPath();
  ctx.rect(mL, mT, plotW, plotH);
  ctx.clip();

  ctx.strokeStyle = accentColour;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 3]);
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  ctx.moveTo(cx, mT);
  ctx.lineTo(cx, mT + plotH);
  ctx.stroke();

  const snapY = hoverData ? hoverData.y : cy;
  ctx.beginPath();
  ctx.moveTo(mL, snapY);
  ctx.lineTo(mL + plotW, snapY);
  ctx.stroke();

  ctx.setLineDash([]);
  ctx.globalAlpha = 1;

  if (hoverData && s.layers.price) {
    const { x, y } = hoverData;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = accentColour;
    ctx.globalAlpha = 0.35;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = accentColour;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  if (hoverData && s.layers.ema) {
    const data = s.fullData.slice(s.winStart, s.winEnd + 1);
    const ema = s.fullEma.slice(s.winStart, s.winEnd + 1);
    const emaVal = ema[hoverData.windowIndex];
    if (emaVal && emaVal > 0 && data.length >= 2) {
      const { min, range } = computeYRange(s, data, ema);
      const stepXE = plotW / (data.length - 1);
      const ep = toXY(hoverData.windowIndex, emaVal, stepXE, min, range, s.cssH);
      ctx.beginPath();
      ctx.arc(ep.x, ep.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(86,156,214,0.35)";
      ctx.fill();
      ctx.strokeStyle = "rgba(86,156,214,0.9)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  ctx.restore();
}

// ─── Coordinate resolution ──────────────────────────────────────────────────

/**
 * Map a CSS x-coordinate to the nearest data point.
 * Returns hover data or null if insufficient data.
 */
export function resolveNearestPoint(
  cssX: number,
  s: ChartViewState,
): ChartHoverData | null {
  const data = s.fullData.slice(s.winStart, s.winEnd + 1);
  const ema = s.fullEma.slice(s.winStart, s.winEnd + 1);
  if (data.length < 2) return null;

  const { left: mL, right: mR } = CHART_MARGIN;
  const plotW = s.cssW - mL - mR;
  const stepX = plotW / (data.length - 1);

  const { min, range } = computeYRange(s, data, ema);

  const rawIdx = (cssX - mL) / stepX;
  const idx = Math.max(0, Math.min(Math.round(rawIdx), data.length - 1));
  const globalIdx = s.winStart + idx;

  const pt = toXY(idx, data[idx], stepX, min, range, s.cssH);

  const daysAgo = s.fullData.length - 1 - globalIdx;
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const dateLabel = d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

  return {
    windowIndex: idx,
    dataIndex: globalIdx,
    x: pt.x,
    y: pt.y,
    price: data[idx],
    ema: ema[idx] || 0,
    volume: s.fullVolumes[globalIdx] || 0,
    dateLabel,
  };
}

// ─── Legacy single-canvas chart ─────────────────────────────────────────────

/**
 * Legacy wrapper — draw a chart on an existing single `<canvas>`.
 */
export function drawGraphChart(canvas: HTMLCanvasElement, data: number[]): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.setAttribute("role", "img");
  if (data.length >= 2) {
    const first = data[0];
    const last = data[data.length - 1];
    const pctDelta = ((last - first) / first * 100).toFixed(1);
    const dir = last > first ? "up" : last < first ? "down" : "flat";
    canvas.setAttribute("aria-label",
      `Price chart: ${data.length} data points. Trend ${dir} ${pctDelta}% from ${axisLabel(first)} to ${axisLabel(last)} gp.`);
  } else {
    canvas.setAttribute("aria-label", "Price chart: insufficient data to display.");
  }

  const dpr = window.devicePixelRatio || 1;
  const cssW = canvas.offsetWidth || canvas.width;
  const cssH = canvas.offsetHeight || canvas.height;
  canvas.width = cssW * dpr;
  canvas.height = cssH * dpr;
  ctx.scale(dpr, dpr);

  const themeL = getChartThemeColors();

  if (data.length === 0) {
    ctx.font = '12px "Segoe UI", sans-serif';
    ctx.fillStyle = themeL.emptyText;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("No price history available", cssW / 2, cssH / 2);
    return;
  }
  if (data.length === 1) {
    ctx.font = '11px "Segoe UI", sans-serif';
    ctx.fillStyle = themeL.emptyText;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${axisLabel(data[0])} gp (1 day)`, cssW / 2, cssH / 2);
    return;
  }

  const { left: mL, right: mR, top: mT, bottom: mB } = CHART_MARGIN;
  const plotW = cssW - mL - mR;
  const plotH = cssH - mT - mB;

  const rawMin = Math.min(...data);
  const rawMax = Math.max(...data);
  const rawRange = rawMax - rawMin || 1;
  const pad = rawRange * 0.05;
  const min = rawMin - pad;
  const max = rawMax + pad;
  const range = max - min;
  const stepX = plotW / (data.length - 1);

  // Y-axis ticks + grid
  const tickValues: number[] = [];
  for (let i = 0; i <= CHART_Y_TICKS; i++) tickValues.push(min + (range * i) / CHART_Y_TICKS);
  const yPrec = axisLabelPrecision(rawMin, rawMax, CHART_Y_TICKS);
  ctx.font = '11px "Segoe UI", sans-serif';
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (const tv of tickValues) {
    const y = mT + plotH - ((tv - min) / range) * plotH;
    ctx.strokeStyle = themeL.gridLine;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(mL, y); ctx.lineTo(cssW - mR, y); ctx.stroke();
    ctx.fillStyle = themeL.axisText;
    ctx.fillText(axisLabel(tv, yPrec), mL - 6, y);
  }

  // X-axis labels
  ctx.textBaseline = "top";
  ctx.fillStyle = themeL.axisText;
  const SHORT_MONTHS_L = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const maxLabelsL = 6;
  const totalDaysL = data.length - 1;
  let dayIntervalL = Math.max(1, Math.ceil(totalDaysL / (maxLabelsL - 1)));
  const niceIntervalsL = [1, 2, 5, 7, 10, 14, 15, 30, 45, 60, 90];
  for (const ni of niceIntervalsL) {
    if (ni >= dayIntervalL) { dayIntervalL = ni; break; }
  }
  const labelIndicesL: number[] = [];
  for (let idx = totalDaysL; idx >= 0; idx -= dayIntervalL) {
    labelIndicesL.unshift(idx);
  }
  if (labelIndicesL[0] !== 0) labelIndicesL.unshift(0);

  const labelYL = cssH - mB + 8;
  for (let li = 0; li < labelIndicesL.length; li++) {
    const idx = labelIndicesL[li];
    const x = mL + idx * stepX;
    const daysAgo = data.length - 1 - idx;
    let label: string;
    if (daysAgo === 0) {
      label = "Today";
    } else {
      const d = new Date();
      d.setDate(d.getDate() - daysAgo);
      label = `${d.getDate()} ${SHORT_MONTHS_L[d.getMonth()]}`;
    }
    if (li === 0) ctx.textAlign = "left";
    else if (li === labelIndicesL.length - 1) ctx.textAlign = "right";
    else ctx.textAlign = "center";
    ctx.fillText(label, x, labelYL);
  }

  const toXYL = (i: number): { x: number; y: number } => ({
    x: mL + i * stepX,
    y: mT + plotH - ((data[i] - min) / range) * plotH,
  });

  const first = data[0];
  const last = data[data.length - 1];
  const lineColour = last > first ? "#4ec9b0" : last < first ? "#f44747" : "#888888";

  // Gradient fill
  ctx.beginPath();
  ctx.moveTo(toXYL(0).x, toXYL(0).y);
  for (let i = 1; i < data.length; i++) { const p = toXYL(i); ctx.lineTo(p.x, p.y); }
  ctx.lineTo(toXYL(data.length - 1).x, mT + plotH);
  ctx.lineTo(toXYL(0).x, mT + plotH);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, mT, 0, mT + plotH);
  grad.addColorStop(0, lineColour + "44");
  grad.addColorStop(1, lineColour + "08");
  ctx.fillStyle = grad;
  ctx.fill();

  // Price line
  ctx.strokeStyle = lineColour;
  ctx.lineWidth = 2;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.beginPath();
  for (let i = 0; i < data.length; i++) {
    const p = toXYL(i);
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();

  // Data-point dots
  for (let i = 0; i < data.length; i++) {
    const p = toXYL(i);
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = lineColour;
    ctx.fill();
    ctx.strokeStyle = themeL.dotStroke;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}
