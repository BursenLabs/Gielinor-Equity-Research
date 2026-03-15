/**
 * @module ui/wcagCompliance
 * WCAG AA contrast auto-correction engine.
 *
 * Resolves effective background colour (including glassmorphism compositing),
 * binary-searches for compliant foreground colours when contrast is below 4.5:1,
 * and nudges neumorphism shadows for visibility.
 */

import {
  LS_CONTRAST_AUTO, WCAG_AA_RATIO, CONTRAST_CHECK_TOKENS,
} from "../constants";
import type { AppMode, StyleMode } from "../constants";
import {
  parseCssColor,
  relativeLuminance,
  contrastRatio,
  blendToward,
} from "./wcagColorHelpers";

// ─── Contrast auto-correction state ─────────────────────────────────────────

let contrastAutoEnabled =
  localStorage.getItem(LS_CONTRAST_AUTO) !== "false";

export function isContrastAutoEnabled(): boolean {
  return contrastAutoEnabled;
}

export function setContrastAutoEnabled(enabled: boolean): void {
  contrastAutoEnabled = enabled;
  localStorage.setItem(LS_CONTRAST_AUTO, enabled ? "true" : "false");
}

// ─── WCAG-dependent DOM helpers ─────────────────────────────────────────────
// audit:no-op — these three private helpers are tightly coupled to
// ensureContrastCompliance() and not reusable outside WCAG correction.
// Extracting them would scatter a single algorithm across files.

function resolveGlassBackground(): [number, number, number] {
  const cs = getComputedStyle(document.body);
  const bodyVia = parseCssColor(cs.getPropertyValue("--glass-body-via"));
  const panelRaw = cs.getPropertyValue("--glass-panel").trim();
  const alphaMatch = panelRaw.match(
    /rgba?\(\s*(\d+(?:\.\d+)?)[,\s]+(\d+(?:\.\d+)?)[,\s]+(\d+(?:\.\d+)?)[,\s/]+(\d*\.?\d+)/,
  );
  if (!alphaMatch) return bodyVia;
  const pr = Math.round(Number(alphaMatch[1]));
  const pg = Math.round(Number(alphaMatch[2]));
  const pb = Math.round(Number(alphaMatch[3]));
  const pa = Number(alphaMatch[4]);
  return [
    Math.round(pr * pa + bodyVia[0] * (1 - pa)),
    Math.round(pg * pa + bodyVia[1] * (1 - pa)),
    Math.round(pb * pa + bodyVia[2] * (1 - pa)),
  ];
}

function ensureNeuShadowVisibility(): void {
  const cs = getComputedStyle(document.body);
  const bgMain = parseCssColor(cs.getPropertyValue("--bg-main"));
  const neuDark = parseCssColor(cs.getPropertyValue("--neu-shadow-dark"));
  const neuLight = parseCssColor(cs.getPropertyValue("--neu-shadow-light"));

  const bgL = relativeLuminance(bgMain);
  const darkL = relativeLuminance(neuDark);
  const lightL = relativeLuminance(neuLight);
  const MIN_DELTA = 0.03;

  const bs = document.body.style;
  if (Math.abs(bgL - darkL) < MIN_DELTA) {
    const nudged = blendToward(neuDark, [0, 0, 0], 0.35);
    bs.setProperty("--neu-shadow-dark", `rgb(${nudged[0]},${nudged[1]},${nudged[2]})`);
  }
  if (Math.abs(lightL - bgL) < MIN_DELTA) {
    const nudged = blendToward(neuLight, [255, 255, 255], 0.25);
    bs.setProperty("--neu-shadow-light", `rgb(${nudged[0]},${nudged[1]},${nudged[2]})`);
  }
}

function updateContrastDisplay(ratio: number): void {
  const badge = document.getElementById("contrast-ratio-display");
  if (!badge) return;
  const rounded = ratio.toFixed(2);
  const passes = ratio >= WCAG_AA_RATIO;
  badge.textContent = `Contrast: ${rounded}:1 ${passes ? "\u2705 AA" : "\u26A0\uFE0F Fail"}`;
  badge.style.color = passes ? "var(--accent-green)" : "var(--accent-red)";
}

export function ensureContrastCompliance(): void {
  const bs = document.body.style;
  bs.removeProperty("--text-main");
  bs.removeProperty("--text-bright");
  for (const token of CONTRAST_CHECK_TOKENS) bs.removeProperty(token);
  bs.removeProperty("--neu-shadow-dark");
  bs.removeProperty("--neu-shadow-light");

  void getComputedStyle(document.body).getPropertyValue("--text-main");

  const cs = getComputedStyle(document.body);
  const style = (document.body.dataset.style ?? "basic") as StyleMode;
  const mode = (document.body.dataset.mode ?? "dark") as AppMode;

  let bgRgb: [number, number, number];
  if (style === "glass") {
    bgRgb = resolveGlassBackground();
  } else {
    bgRgb = parseCssColor(cs.getPropertyValue("--bg-main"));
  }

  const textMainRgb = parseCssColor(cs.getPropertyValue("--text-main"));
  const textBrightRgb = parseCssColor(cs.getPropertyValue("--text-bright"));

  const ratio = contrastRatio(textMainRgb, bgRgb);
  const ratioBright = contrastRatio(textBrightRgb, bgRgb);

  updateContrastDisplay(ratio);

  if (!contrastAutoEnabled) return;

  const target: [number, number, number] = mode === "dark" ? [255, 255, 255] : [0, 0, 0];

  // audit:no-op(DRY) — the binary-search loop below appears 3× (--text-main,
  // --text-bright, CONTRAST_CHECK_TOKENS). Extracting a helper would require
  // passing bg, target, token name, and a setProperty callback — the call-site
  // would be as long as the loop itself. Kept inline for readability.
  if (ratio < WCAG_AA_RATIO) {
    let lo = 0; let hi = 1; let corrected = textMainRgb;
    for (let i = 0; i < 16; i++) {
      const mid = (lo + hi) / 2;
      const candidate = blendToward(textMainRgb, target, mid);
      if (contrastRatio(candidate, bgRgb) >= WCAG_AA_RATIO) { corrected = candidate; hi = mid; }
      else { lo = mid; }
    }
    bs.setProperty("--text-main", `rgb(${corrected[0]},${corrected[1]},${corrected[2]})`);
    updateContrastDisplay(contrastRatio(corrected, bgRgb));
  }

  if (ratioBright < WCAG_AA_RATIO) {
    let lo = 0; let hi = 1; let corrected = textBrightRgb;
    for (let i = 0; i < 16; i++) {
      const mid = (lo + hi) / 2;
      const candidate = blendToward(textBrightRgb, target, mid);
      if (contrastRatio(candidate, bgRgb) >= WCAG_AA_RATIO) { corrected = candidate; hi = mid; }
      else { lo = mid; }
    }
    bs.setProperty("--text-bright", `rgb(${corrected[0]},${corrected[1]},${corrected[2]})`);
  }

  for (const token of CONTRAST_CHECK_TOKENS) {
    const fg = parseCssColor(cs.getPropertyValue(token));
    if (contrastRatio(fg, bgRgb) < WCAG_AA_RATIO) {
      let lo = 0; let hi = 1; let corrected = fg;
      for (let i = 0; i < 16; i++) {
        const mid = (lo + hi) / 2;
        const candidate = blendToward(fg, target, mid);
        if (contrastRatio(candidate, bgRgb) >= WCAG_AA_RATIO) { corrected = candidate; hi = mid; }
        else { lo = mid; }
      }
      bs.setProperty(token, `rgb(${corrected[0]},${corrected[1]},${corrected[2]})`);
    }
  }

  if (style === "neumorphism") {
    ensureNeuShadowVisibility();
  }
}
