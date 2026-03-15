/**
 * @module ui/chart/sparkline
 * Tiny line-chart renderer for card sparklines.
 */

import { getChartThemeColors } from "./chartHelpers";

/**
 * Draw a tiny line chart on an HTML5 `<canvas>` element.
 */
export function drawSparkline(canvas: HTMLCanvasElement, data: number[]): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = canvas.offsetWidth || canvas.width;
  const h = canvas.offsetHeight || canvas.height;
  canvas.width = w;
  canvas.height = h;

  if (data.length === 0) {
    const sparkTheme = getChartThemeColors();
    const fontSize = Math.max(9, Math.round(h * 0.35));
    ctx.font = `${fontSize}px "Segoe UI", sans-serif`;
    ctx.fillStyle = sparkTheme.emptyText;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("No price history", w / 2, h / 2);
    return;
  }

  if (data.length === 1) {
    ctx.fillStyle = getChartThemeColors().emptyText;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, Math.max(2, Math.round(h * 0.12)), 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  const padding = 2;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = (w - 1) / (data.length - 1);

  const first = data[0];
  const last = data[data.length - 1];
  ctx.strokeStyle = last > first ? "#4ec9b0" : last < first ? "#f44747" : "#888";
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";

  ctx.beginPath();
  for (let i = 0; i < data.length; i++) {
    const x = i * stepX;
    const y = h - padding - ((data[i] - min) / range) * (h - padding * 2);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
}
