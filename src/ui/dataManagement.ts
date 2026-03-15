/**
 * @module ui/dataManagement
 * Export / Import for localStorage settings and IndexedDB cache.
 */

import type { CacheDatabaseExport } from "../services";
import { getEls } from "./domRefs";
import { getCache } from "./state";

/** localStorage keys included in the JSON backup. */
const EXPORT_KEYS = [
  "ger:favorites",
  "ger:portfolio",
  "ger:portfolio-history",
  "ger:mode",
  "ger:style",
  "ger:colorway",
  "ger:colorway-v2",
  "ger:contrast",
  "ger:contrast-auto-correct",
  "ger:chart-layers",
  "ger:disclaimer-ack",
  "ger:limit-reset-notifs",
  "ger:active-tab",
  "ger:filter-volume",
  "ger:filter-price",
  "ger:filter-confidence",
  "ger:portfolio-sub-tab",
  "ger:allocation-strategy",
  "ger:allocation-budget",
  "ger:news-context",
  "ger:pnl-collapsed",
  "ger:winloss-collapsed",
  "ger:advanced-mode",
  "ger:baseline-loaded-at",
  "ger:info-banner-dismissed",
  "ger:llm-api-key",
  "ger:llm-provider",
  "ger:llm-model",
  "ger:llm-endpoint",
  "ger:view-mode",
  "ger:compact-tiles",
  "ger:layout",
  "ger:chat-history",
  "ger:deep-history",
  "ger:top20-sort",
  "ger:search-sort",
  "ger:fav-sort",
] as const;

export function bindDataManagement(): void {
  const els = getEls();

  // ── Export ──
  els.exportDataBtn.addEventListener("click", () => {
    const payload: Record<string, unknown> = {};
    for (const key of EXPORT_KEYS) {
      const raw = localStorage.getItem(key);
      if (raw !== null) {
        try { payload[key] = JSON.parse(raw); } catch { payload[key] = raw; }
      }
    }

    const json = JSON.stringify(payload, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ger-backup.json";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // ── Import ──
  els.importDataBtn.addEventListener("click", () => {
    els.importFileInput.value = "";
    els.importFileInput.click();
  });

  els.importFileInput.addEventListener("change", () => {
    const file = els.importFileInput.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        if (typeof data !== "object" || data === null) {
          throw new Error("Invalid backup format.");
        }

        let restoredCount = 0;
        for (const key of EXPORT_KEYS) {
          if (key in data) {
            localStorage.setItem(key, JSON.stringify(data[key]));
            restoredCount++;
          }
        }

        if (restoredCount === 0) {
          alert("No recognised data keys found in the file.");
          return;
        }

        if ("ger:colorway" in data) {
          localStorage.removeItem("ger:colorway-v2");
        }

        alert("Data imported successfully!");
        window.location.reload();
      } catch (err) {
        console.error("[UIService] Import failed:", err);
        alert("Import failed \u2014 the file does not contain valid JSON.");
      }
    };
    reader.readAsText(file);
  });
}

export function bindCacheManagement(): void {
  const els = getEls();
  const cache = getCache();

  // ── Export Cache ──
  els.exportCacheBtn.addEventListener("click", async () => {
    els.exportCacheBtn.disabled = true;
    els.exportCacheBtn.textContent = "\u23F3 Exporting\u2026";
    try {
      const data = await cache.exportDatabase();
      const json = JSON.stringify(data);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `ger-cache-${data.exportedAt.slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("[UIService] Cache export failed:", err);
      alert("Cache export failed \u2014 see console for details.");
    } finally {
      els.exportCacheBtn.disabled = false;
      els.exportCacheBtn.textContent = "\u2B07 Export Cache";
    }
  });

  // ── Import Cache ──
  els.importCacheBtn.addEventListener("click", () => {
    els.importCacheInput.value = "";
    els.importCacheInput.click();
  });

  els.importCacheInput.addEventListener("change", () => {
    const file = els.importCacheInput.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const data: CacheDatabaseExport = JSON.parse(reader.result as string);
        const counts = await cache.importDatabase(data);
        alert(
          `Cache imported successfully!\n${counts.prices} price records + ${counts.history} history rows.`,
        );
        window.location.reload();
      } catch (err) {
        console.error("[UIService] Cache import failed:", err);
        alert("Cache import failed \u2014 the file does not contain a valid cache export.");
      }
    };
    reader.readAsText(file);
  });
}
