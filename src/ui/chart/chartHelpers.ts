/**
 * @module ui/chart/chartHelpers
 * Shared chart utilities: axis labels, colour helpers, EMA computation,
 * theme colour resolution, and chart-layer persistence.
 */

import { LS_CHART_LAYERS } from "../constants";

// ─── Chart layer persistence ────────────────────────────────────────────────

/** Which chart data layers are visible — each key is independently togglable. */
export interface ChartLayers {
  price: boolean;
  ema: boolean;
  volume: boolean;
  dots: boolean;
}

export function loadChartLayers(): ChartLayers {
  const defaults: ChartLayers = { price: true, ema: true, volume: true, dots: true };
  try {
    const raw = localStorage.getItem(LS_CHART_LAYERS);
    if (raw) return { ...defaults, ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return defaults;
}

export function saveChartLayers(layers: ChartLayers): void {
  try { localStorage.setItem(LS_CHART_LAYERS, JSON.stringify(layers)); } catch { /* ignore */ }
}

// ─── Shared chart constants ─────────────────────────────────────────────────

export const CHART_MARGIN = { left: 58, right: 24, top: 18, bottom: 32 } as const;
export const CHART_Y_TICKS = 4;
export const CHART_MIN_ZOOM = 5;

// ─── Tooltip hover data ─────────────────────────────────────────────────────

export interface ChartHoverData {
  windowIndex: number;
  dataIndex: number;
  x: number;
  y: number;
  price: number;
  ema: number;
  volume: number;
  dateLabel: string;
}

// ─── Axis helpers ───────────────────────────────────────────────────────────

/**
 * Abbreviate a gp value for axis labels.
 * When `precision` > 1 the suffix uses more decimal places so tightly-spaced
 * ticks remain distinguishable.
 */
export function axisLabel(value: number, precision = 1): string {
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";
  if (abs >= 1_000_000_000) return `${sign}${(abs / 1_000_000_000).toFixed(precision)}B`;
  if (abs >= 1_000_000)     return `${sign}${(abs / 1_000_000).toFixed(precision)}M`;
  if (abs >= 1_000)         return `${sign}${(abs / 1_000).toFixed(precision)}K`;
  return `${sign}${abs}`;
}

export function axisLabelPrecision(min: number, max: number, ticks: number): number {
  const step = (max - min) / ticks;
  if (step === 0) return 1;
  const ref = Math.max(Math.abs(min), Math.abs(max));
  let divisor = 1;
  if (ref >= 1_000_000_000)      divisor = 1_000_000_000;
  else if (ref >= 1_000_000)     divisor = 1_000_000;
  else if (ref >= 1_000)         divisor = 1_000;
  const stepInUnits = step / divisor;
  if (stepInUnits >= 0.1) return 1;
  if (stepInUnits >= 0.01) return 2;
  return 3;
}

/** Convert any CSS colour string to rgba() with the given alpha (0–1). */
export function withAlpha(color: string, alpha: number): string {
  const hex = color.replace(/\s/g, "");
  if (hex.startsWith("#")) {
    let r: number, g: number, b: number;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else {
      r = parseInt(hex.slice(1, 3), 16);
      g = parseInt(hex.slice(3, 5), 16);
      b = parseInt(hex.slice(5, 7), 16);
    }
    return `rgba(${r},${g},${b},${alpha})`;
  }
  const m = color.match(/rgba?\(([^)]+)\)/);
  if (m) {
    const parts = m[1].split(",").map(s => s.trim());
    return `rgba(${parts[0]},${parts[1]},${parts[2]},${alpha})`;
  }
  return color;
}

/**
 * Compute the full EMA series for a price array.
 * @param prices - Chronological price array (oldest-first).
 * @param alpha  - Smoothing factor (default 2/(30+1) ≈ 0.0645 for 30-day EMA).
 */
export function computeEmaSeries(prices: number[], alpha: number = 2 / 31): number[] {
  if (prices.length === 0) return [];
  const ema: number[] = [prices[0]];
  for (let i = 1; i < prices.length; i++) {
    ema.push(alpha * prices[i] + (1 - alpha) * ema[i - 1]);
  }
  return ema;
}

/**
 * Read theme-aware colours for chart rendering from CSS custom properties.
 */
export function getChartThemeColors(): {
  gridLine: string;
  axisText: string;
  emptyText: string;
  dotStroke: string;
  legendText: string;
  accentGreen: string;
  accentRed: string;
  accentPrimary: string;
} {
  const isLight = document.body.dataset.mode === "light";
  const cs = getComputedStyle(document.body);
  const textMuted = cs.getPropertyValue("--text-muted").trim();
  const textSoft = cs.getPropertyValue("--text-soft").trim();
  return {
    gridLine:      isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.07)",
    axisText:      textMuted || (isLight ? "#777" : "#999"),
    emptyText:     textSoft  || (isLight ? "#999" : "#888"),
    dotStroke:     isLight ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.5)",
    legendText:    textMuted || (isLight ? "#777" : "#bbb"),
    accentGreen:   cs.getPropertyValue("--accent-green").trim() || "#4ec9b0",
    accentRed:     cs.getPropertyValue("--accent-red").trim() || "#f44747",
    accentPrimary: cs.getPropertyValue("--accent-primary").trim() || "#569cd6",
  };
}
