/**
 * @module ui/chart/interactiveChart
 * Dual-canvas interactive chart with crosshair, tooltip, scroll-zoom, and drag-pan.
 * Also contains the active-chart registry.
 */

import {
  ChartLayers,
  ChartHoverData,
  CHART_MARGIN,
  CHART_MIN_ZOOM,
  loadChartLayers,
  saveChartLayers,
  axisLabel,
  computeEmaSeries,
} from "./chartHelpers";
import {
  ChartViewState,
  prepCanvas,
  drawBaseChart,
  drawInteractionOverlay,
  resolveNearestPoint as _resolveNearestPoint,
} from "./chartRenderer";
import { buildTooltipHtml, computeTooltipPosition } from "./chartTooltip";

/**
 * Dual-canvas interactive chart with crosshair, tooltip, and scroll-zoom.
 */
export class InteractiveChart {
  private container: HTMLDivElement;
  private canvasWrap: HTMLDivElement;
  private baseCanvas: HTMLCanvasElement;
  private interCanvas: HTMLCanvasElement;
  private tooltip: HTMLDivElement;
  private zoomHint: HTMLDivElement;
  private toggleStrip: HTMLDivElement;

  private fullData: number[] = [];
  private fullEma: number[] = [];
  private fullVolumes: number[] = [];

  private layers: ChartLayers;

  private winStart = 0;
  private winEnd = 0;

  private hoverData: ChartHoverData | null = null;

  private isDragging = false;
  private dragStartX = 0;
  private dragStartWinStart = 0;
  private dragStartWinEnd = 0;
  private dragEndedAt = 0;

  private cssW = 0;
  private cssH = 0;

  private resizeObs: ResizeObserver | null = null;

  private boundMouseMove: (e: MouseEvent) => void;
  private boundMouseLeave: () => void;
  private boundWheel: (e: WheelEvent) => void;
  private boundMouseDown: (e: MouseEvent) => void;
  private boundMouseUp: (e: MouseEvent) => void;
  private boundGlobalMouseMove: (e: MouseEvent) => void;

  constructor(parent: HTMLElement, height = "200px") {
    this.container = document.createElement("div");
    this.container.className = "chart-container";

    this.baseCanvas = document.createElement("canvas");
    this.baseCanvas.className = "chart-base-canvas";
    this.baseCanvas.style.height = height;
    this.baseCanvas.setAttribute("role", "img");
    this.baseCanvas.setAttribute("aria-label", "Price chart: loading\u2026");

    this.interCanvas = document.createElement("canvas");
    this.interCanvas.className = "chart-interaction-canvas";

    this.tooltip = document.createElement("div");
    this.tooltip.className = "chart-tooltip";

    this.zoomHint = document.createElement("div");
    this.zoomHint.className = "chart-zoom-hint";
    this.zoomHint.textContent = "Scroll to zoom \u2022 Drag to pan";

    this.layers = loadChartLayers();
    this.toggleStrip = document.createElement("div");
    this.toggleStrip.className = "chart-layer-toggles";
    const layerDefs: { key: keyof ChartLayers; label: string; color: string }[] = [
      { key: "price",  label: "Price",  color: "#4ec9b0" },
      { key: "ema",    label: "EMA",    color: "#569cd6" },
      { key: "volume", label: "Volume", color: "#888" },
      { key: "dots",   label: "Dots",   color: "#bbb" },
    ];
    for (const def of layerDefs) {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "chart-layer-pill" + (this.layers[def.key] ? " active" : "");
      pill.dataset.layer = def.key;
      pill.style.setProperty("--pill-color", def.color);
      pill.textContent = def.label;
      pill.addEventListener("click", () => {
        this.layers[def.key] = !this.layers[def.key];
        pill.classList.toggle("active", this.layers[def.key]);
        saveChartLayers(this.layers);
        this.drawBase();
        if (this.hoverData) {
          this.drawInteraction(this.hoverData.x, this.hoverData.y);
        }
      });
      this.toggleStrip.appendChild(pill);
    }

    this.canvasWrap = document.createElement("div");
    this.canvasWrap.className = "chart-canvas-wrap";

    this.container.appendChild(this.toggleStrip);
    this.canvasWrap.appendChild(this.baseCanvas);
    this.canvasWrap.appendChild(this.interCanvas);
    this.canvasWrap.appendChild(this.tooltip);
    this.container.appendChild(this.canvasWrap);
    this.container.appendChild(this.zoomHint);
    parent.appendChild(this.container);

    this.resizeObs = new ResizeObserver(() => {
      if (this.fullData.length >= 2) this.drawBase();
    });
    this.resizeObs.observe(this.baseCanvas);

    this.boundMouseMove = this.onMouseMove.bind(this);
    this.boundMouseLeave = this.onMouseLeave.bind(this);
    this.boundWheel = this.onWheel.bind(this);
    this.boundMouseDown = this.onMouseDown.bind(this);
    this.boundMouseUp = this.onMouseUp.bind(this);
    this.boundGlobalMouseMove = this.onGlobalMouseMove.bind(this);
    this.container.addEventListener("mousemove", this.boundMouseMove);
    this.container.addEventListener("mouseleave", this.boundMouseLeave);
    this.container.addEventListener("wheel", this.boundWheel, { passive: false });
    this.container.addEventListener("mousedown", this.boundMouseDown);
    window.addEventListener("mouseup", this.boundMouseUp);
    window.addEventListener("mousemove", this.boundGlobalMouseMove);
  }

  setData(prices: number[], volumes: number[] = []): void {
    this.fullData = prices;
    this.fullEma = computeEmaSeries(prices);
    this.fullVolumes = volumes;
    this.winStart = 0;
    this.winEnd = prices.length - 1;
    this.hoverData = null;
    this.hideTooltip();
    this.drawBase();
  }

  destroy(): void {
    if (this.resizeObs) { this.resizeObs.disconnect(); this.resizeObs = null; }
    this.container.removeEventListener("mousemove", this.boundMouseMove);
    this.container.removeEventListener("mouseleave", this.boundMouseLeave);
    this.container.removeEventListener("wheel", this.boundWheel);
    this.container.removeEventListener("mousedown", this.boundMouseDown);
    window.removeEventListener("mouseup", this.boundMouseUp);
    window.removeEventListener("mousemove", this.boundGlobalMouseMove);
    this.container.remove();
  }

  getElement(): HTMLDivElement { return this.container; }
  getBaseCanvas(): HTMLCanvasElement { return this.baseCanvas; }

  redraw(): void {
    if (this.fullData.length >= 2) this.drawBase();
  }

  wasDragging(): boolean {
    return Date.now() - this.dragEndedAt < 300;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  //  PRIVATE — Drawing
  // ═══════════════════════════════════════════════════════════════════════════

  private getViewState(): ChartViewState {
    return {
      fullData: this.fullData,
      fullEma: this.fullEma,
      fullVolumes: this.fullVolumes,
      winStart: this.winStart,
      winEnd: this.winEnd,
      layers: this.layers,
      cssW: this.cssW,
      cssH: this.cssH,
    };
  }

  private windowedData(): number[] {
    return this.fullData.slice(this.winStart, this.winEnd + 1);
  }

  private drawBase(): void {
    const result = prepCanvas(this.baseCanvas, this.baseCanvas);
    if (!result) return;
    this.cssW = result.cssW;
    this.cssH = result.cssH;
    prepCanvas(this.interCanvas, this.baseCanvas);
    drawBaseChart(result.ctx, this.getViewState(), this.baseCanvas, this.toggleStrip, this.zoomHint);
  }

  private drawInteraction(cssX: number, cssY: number): void {
    drawInteractionOverlay(this.interCanvas, cssX, cssY, this.getViewState(), this.hoverData);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  //  PRIVATE — Coordinate mapping
  // ═══════════════════════════════════════════════════════════════════════════

  private clientToCSS(e: MouseEvent): { cssX: number; cssY: number } {
    const rect = this.baseCanvas.getBoundingClientRect();
    return { cssX: e.clientX - rect.left, cssY: e.clientY - rect.top };
  }

  private resolveNearestPoint(cssX: number): ChartHoverData | null {
    const hd = _resolveNearestPoint(cssX, this.getViewState());
    this.hoverData = hd;
    return hd;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  //  PRIVATE — Tooltip
  // ═══════════════════════════════════════════════════════════════════════════

  private showTooltip(hd: ChartHoverData): void {
    this.tooltip.innerHTML = buildTooltipHtml(hd, this.layers, this.fullData);
    const pos = computeTooltipPosition(hd, this.cssW, this.cssH);
    this.tooltip.style.left = `${pos.left}px`;
    this.tooltip.style.top = `${pos.top}px`;
    this.tooltip.classList.add("visible");
  }

  private hideTooltip(): void {
    this.tooltip.classList.remove("visible");
  }

  // ═══════════════════════════════════════════════════════════════════════════
  //  PRIVATE — Event handlers
  // ═══════════════════════════════════════════════════════════════════════════

  private onMouseMove(e: MouseEvent): void {
    if (this.isDragging) return;
    const { cssX, cssY } = this.clientToCSS(e);
    console.debug('[CHART-DIAG] onMouseMove', { cssX, cssY, cssW: this.cssW, cssH: this.cssH, dataLen: this.fullData.length });
    const hd = this.resolveNearestPoint(cssX);
    this.drawInteraction(cssX, cssY);
    if (hd) {
      this.showTooltip(hd);
      this.baseCanvas.setAttribute("aria-label",
        `Price chart: hovering ${hd.dateLabel}, ${hd.price.toLocaleString("en-US")} gp.`);
    }
  }

  private onMouseLeave(): void {
    if (!this.isDragging) {
      this.hoverData = null;
      const ctx = this.interCanvas.getContext("2d");
      if (ctx) {
        const dpr = window.devicePixelRatio || 1;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, this.cssW, this.cssH);
      }
      this.hideTooltip();
      const data = this.windowedData();
      if (data.length >= 2) {
        const first = data[0];
        const last = data[data.length - 1];
        const pctDelta = ((last - first) / first * 100).toFixed(1);
        const dir = last > first ? "up" : last < first ? "down" : "flat";
        this.baseCanvas.setAttribute("aria-label",
          `Price chart: ${data.length} data points. Trend ${dir} ${pctDelta}% from ${axisLabel(first)} to ${axisLabel(last)} gp.`);
      }
    }
  }

  private onMouseDown(e: MouseEvent): void {
    if (e.button !== 0) return;
    const winLen = this.winEnd - this.winStart + 1;
    if (winLen >= this.fullData.length) return;
    this.isDragging = true;
    this.dragStartX = this.clientToCSS(e).cssX;
    this.dragStartWinStart = this.winStart;
    this.dragStartWinEnd = this.winEnd;
    this.hideTooltip();
    this.updateCursor();
    e.preventDefault();
  }

  private onMouseUp(_e: MouseEvent): void {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.dragEndedAt = Date.now();
    this.updateCursor();
  }

  private onGlobalMouseMove(e: MouseEvent): void {
    if (!this.isDragging) return;
    const { cssX } = this.clientToCSS(e);
    const dx = cssX - this.dragStartX;
    const { left: mL, right: mR } = CHART_MARGIN;
    const plotW = this.cssW - mL - mR;
    const winLen = this.dragStartWinEnd - this.dragStartWinStart + 1;
    const stepX = plotW / (winLen - 1);
    const indexDelta = Math.round(-dx / stepX);

    let newStart = this.dragStartWinStart + indexDelta;
    newStart = Math.max(0, Math.min(newStart, this.fullData.length - winLen));
    const newEnd = newStart + winLen - 1;

    if (newStart !== this.winStart || newEnd !== this.winEnd) {
      this.winStart = newStart;
      this.winEnd = newEnd;
      this.hoverData = null;
      this.hideTooltip();
      this.drawBase();
    }
  }

  private updateCursor(): void {
    const isZoomed = (this.winEnd - this.winStart + 1) < this.fullData.length;
    if (this.isDragging) this.container.style.cursor = "grabbing";
    else if (isZoomed) this.container.style.cursor = "grab";
    else this.container.style.cursor = "crosshair";
  }

  private onWheel(e: WheelEvent): void {
    if (this.fullData.length <= CHART_MIN_ZOOM) return;
    e.preventDefault();

    const { cssX } = this.clientToCSS(e);
    const data = this.windowedData();
    if (data.length < 2) return;

    const { left: mL, right: mR } = CHART_MARGIN;
    const plotW = this.cssW - mL - mR;
    const stepX = plotW / (data.length - 1);

    const rawIdx = (cssX - mL) / stepX;
    const frac = Math.max(0, Math.min(rawIdx / (data.length - 1), 1));

    const currentLen = this.winEnd - this.winStart + 1;
    const zoomIn = e.deltaY < 0;
    let newLen: number;

    if (zoomIn) {
      newLen = Math.max(CHART_MIN_ZOOM, Math.floor(currentLen * 0.75));
    } else {
      newLen = Math.min(this.fullData.length, Math.ceil(currentLen / 0.75));
    }

    if (newLen === currentLen) return;

    const pivotGlobal = this.winStart + frac * (currentLen - 1);
    let newStart = Math.round(pivotGlobal - frac * (newLen - 1));
    newStart = Math.max(0, Math.min(newStart, this.fullData.length - newLen));
    const newEnd = newStart + newLen - 1;

    this.winStart = newStart;
    this.winEnd = Math.min(newEnd, this.fullData.length - 1);

    this.hoverData = null;
    this.hideTooltip();
    this.drawBase();
    this.updateCursor();
  }
}

// ─── Active chart registry ──────────────────────────────────────────────────

const activeCharts = new Map<string, InteractiveChart>();

/** Return the active chart instance map (used by theme to redraw on change). */
export function getActiveCharts(): Map<string, InteractiveChart> {
  return activeCharts;
}

/**
 * Create (or replace) an InteractiveChart in the given parent.
 */
export function createInteractiveChart(
  key: string, parent: HTMLElement, data: number[],
  volumes: number[] = [], height = "200px",
): InteractiveChart {
  const prev = activeCharts.get(key);
  if (prev) prev.destroy();

  const chart = new InteractiveChart(parent, height);
  chart.setData(data, volumes);
  activeCharts.set(key, chart);
  return chart;
}

/**
 * Destroy the interactive chart for a given key (called on modal hide).
 */
export function destroyInteractiveChart(key: string): void {
  const chart = activeCharts.get(key);
  if (chart) {
    chart.destroy();
    activeCharts.delete(key);
  }
}
