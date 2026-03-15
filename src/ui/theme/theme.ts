/**
 * @module ui/theme
 * Theme application: Mode × Style × Colorway × Contrast, migration helpers,
 * style invalidation, and event binding for appearance controls.
 */

import {
  LS_MODE, LS_STYLE, LS_COLORWAY, LS_CONTRAST, LS_THEME,
  LEGACY_COLORWAY_MAP,
} from "../constants";
import type {
  AppMode, StyleMode, ColorwayMode, ContrastMode,
} from "../constants";
import { getEls } from "../domRefs";
import { getActiveCharts } from "../chart/interactiveChart";
import {
  ensureContrastCompliance,
  isContrastAutoEnabled,
  setContrastAutoEnabled,
} from "./wcagCompliance";

// ─── Migration helpers ──────────────────────────────────────────────────────

function migrateThemeKey(): void {
  const legacy = localStorage.getItem(LS_THEME);
  if (!legacy) return;

  const STYLE_MAP: Record<string, StyleMode> = {
    classic: "basic", osrs: "basic", "rs3-modern": "basic",
    glass: "glass", neumorphism: "neumorphism", minimalism: "basic", skeuomorphism: "skeuomorphism",
  };

  if (!localStorage.getItem(LS_STYLE)) {
    localStorage.setItem(LS_STYLE, STYLE_MAP[legacy] ?? "basic");
  }
  if (!localStorage.getItem(LS_COLORWAY)) {
    const COLORWAY_TMP: Record<string, string> = {
      classic: "default", osrs: "classic", "rs3-modern": "rs3-modern",
      glass: "default", neumorphism: "default", minimalism: "light", skeuomorphism: "default",
    };
    localStorage.setItem(LS_COLORWAY, COLORWAY_TMP[legacy] ?? "default");
  }
  localStorage.removeItem(LS_THEME);
}

function migrateColorwayToMode(): void {
  if (localStorage.getItem(LS_MODE)) return;
  const oldColorway = localStorage.getItem(LS_COLORWAY);
  if (!oldColorway) return;

  const mapping = LEGACY_COLORWAY_MAP[oldColorway];
  if (mapping) {
    localStorage.setItem(LS_MODE, mapping.mode);
    localStorage.setItem(LS_COLORWAY, mapping.colorway);
  } else {
    localStorage.setItem(LS_MODE, "dark");
  }
}

function migrateColorwayRename(): void {
  if (localStorage.getItem("ger:colorway-v2")) return;
  const RENAME_MAP: Record<string, ColorwayMode> = {
    classic: "default",
    osrs: "classic",
  };
  const current = localStorage.getItem(LS_COLORWAY);
  if (current && RENAME_MAP[current]) {
    localStorage.setItem(LS_COLORWAY, RENAME_MAP[current]);
  }
  localStorage.setItem("ger:colorway-v2", "1");
}

// ─── Style invalidation ─────────────────────────────────────────────────────

export function forceStyleInvalidation(): void {
  const ds = document.body.dataset;
  const currentMode = ds.mode ?? "dark";
  const oppositeMode = currentMode === "dark" ? "light" : "dark";

  ds.mode = oppositeMode;
  void getComputedStyle(document.body).getPropertyValue("--bg-main");

  ds.mode = currentMode;
  void getComputedStyle(document.body).getPropertyValue("--bg-main");
}

// ─── Apply helpers ──────────────────────────────────────────────────────────

export function applyMode(mode: AppMode): void {
  const els = getEls();
  document.body.dataset.mode = mode;
  localStorage.setItem(LS_MODE, mode);
  els.modeDarkBtn.classList.toggle("active", mode === "dark");
  els.modeLightBtn.classList.toggle("active", mode === "light");
  forceStyleInvalidation();
  ensureContrastCompliance();
}

export function applyStyle(style: StyleMode): void {
  const els = getEls();
  document.body.dataset.style = style;
  localStorage.setItem(LS_STYLE, style);
  els.styleSelect.value = style;
  ensureContrastCompliance();
}

export function applyColorway(colorway: ColorwayMode): void {
  const els = getEls();
  document.body.dataset.colorway = colorway;
  localStorage.setItem(LS_COLORWAY, colorway);
  els.colorwaySelect.value = colorway;
  forceStyleInvalidation();
  ensureContrastCompliance();
}

export function applyContrast(contrast: ContrastMode): void {
  const els = getEls();
  document.body.dataset.contrast = contrast;
  localStorage.setItem(LS_CONTRAST, contrast);
  els.contrastSelect.value = contrast;
  forceStyleInvalidation();
  ensureContrastCompliance();
}

export function applyThemeBatch(
  mode: AppMode,
  style: StyleMode,
  colorway: ColorwayMode,
  contrast: ContrastMode,
): void {
  const els = getEls();
  const ds = document.body.dataset;

  ds.mode = mode;
  ds.style = style;
  ds.colorway = colorway;
  ds.contrast = contrast;

  localStorage.setItem(LS_MODE, mode);
  localStorage.setItem(LS_STYLE, style);
  localStorage.setItem(LS_COLORWAY, colorway);
  localStorage.setItem(LS_CONTRAST, contrast);

  els.modeDarkBtn.classList.toggle("active", mode === "dark");
  els.modeLightBtn.classList.toggle("active", mode === "light");
  els.styleSelect.value = style;
  els.colorwaySelect.value = colorway;
  els.contrastSelect.value = contrast;

  forceStyleInvalidation();
  ensureContrastCompliance();

  for (const chart of getActiveCharts().values()) chart.redraw();
}

// ─── Bind functions ─────────────────────────────────────────────────────────

export function bindTheme(): void {
  const els = getEls();
  migrateThemeKey();
  migrateColorwayToMode();
  migrateColorwayRename();

  const savedMode = (localStorage.getItem(LS_MODE) as AppMode | null) ?? "dark";
  const savedStyle = (localStorage.getItem(LS_STYLE) as StyleMode | null) ?? "basic";
  const savedColorway = (localStorage.getItem(LS_COLORWAY) as ColorwayMode | null) ?? "default";
  const savedContrast = (localStorage.getItem(LS_CONTRAST) as ContrastMode | null) ?? "default";

  applyThemeBatch(savedMode, savedStyle, savedColorway, savedContrast);

  els.modeDarkBtn.addEventListener("click", () => applyMode("dark"));
  els.modeLightBtn.addEventListener("click", () => applyMode("light"));

  els.styleSelect.addEventListener("change", () => {
    applyStyle(els.styleSelect.value as StyleMode);
  });
  els.colorwaySelect.addEventListener("change", () => {
    applyColorway(els.colorwaySelect.value as ColorwayMode);
  });
  els.contrastSelect.addEventListener("change", () => {
    applyContrast(els.contrastSelect.value as ContrastMode);
  });

  els.contrastAutoToggle.checked = isContrastAutoEnabled();
  els.contrastAutoToggle.addEventListener("change", () => {
    setContrastAutoEnabled(els.contrastAutoToggle.checked);
    ensureContrastCompliance();
  });
}
