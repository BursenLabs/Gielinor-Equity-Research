/**
 * @module ui/chart/chartTooltip
 * Pure functions for chart tooltip content generation and positioning.
 */

import { ChartLayers, ChartHoverData, CHART_MARGIN } from "./chartHelpers";

/**
 * Build the inner HTML for the chart tooltip.
 */
export function buildTooltipHtml(
  hd: ChartHoverData,
  layers: ChartLayers,
  fullData: number[],
): string {
  const emaRow = layers.ema && hd.ema > 0
    ? `<div class="chart-tooltip-row"><span class="chart-tooltip-label">30d EMA</span><span class="chart-tooltip-value">${Math.round(hd.ema).toLocaleString("en-US")} gp</span></div>`
    : "";
  const volRow = layers.volume && hd.volume > 0
    ? `<div class="chart-tooltip-row"><span class="chart-tooltip-label">Volume</span><span class="chart-tooltip-value">${hd.volume.toLocaleString("en-US")}</span></div>`
    : "";
  const priceDir = fullData.length >= 2 && hd.dataIndex > 0
    ? (hd.price > fullData[hd.dataIndex - 1] ? "up" : hd.price < fullData[hd.dataIndex - 1] ? "down" : "")
    : "";

  return (
    `<div class="chart-tooltip-row"><span class="chart-tooltip-label">Date</span><span class="chart-tooltip-value">${hd.dateLabel}</span></div>` +
    `<div class="chart-tooltip-row"><span class="chart-tooltip-label">Price</span><span class="chart-tooltip-value ${priceDir}">${hd.price.toLocaleString("en-US")} gp</span></div>` +
    emaRow + volRow
  );
}

/**
 * Compute tooltip position relative to the chart canvas wrapper.
 */
export function computeTooltipPosition(
  hd: ChartHoverData,
  cssW: number,
  cssH: number,
): { left: number; top: number } {
  const tipW = 180;
  const tipH = 80;
  const { left: mL, right: mR } = CHART_MARGIN;
  const plotW = cssW - mL - mR;
  const plotMidX = mL + plotW / 2;

  let left: number;
  if (hd.x > plotMidX) {
    left = hd.x - tipW - 14;
  } else {
    left = hd.x + 14;
  }
  let top = hd.y - tipH / 2;

  if (left + tipW > cssW - 4) left = cssW - tipW - 4;
  if (left < 4) left = 4;
  if (top < 4) top = 4;
  if (top + tipH > cssH - 4) top = cssH - tipH - 4;

  return { left, top };
}
