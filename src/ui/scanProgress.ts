/**
 * @module ui/scanProgress
 * Full-market background scan button, deep-history checkbox, progress bar,
 * and visibility-change warning.
 */

import {
  CacheService,
  fetchGECatalogue,
  MarketAnalyzerService,
  runFullMarketScan,
} from "../services";
import { LS_DEEP_HISTORY } from "./constants";
import { getEls } from "./domRefs";
import { getGeCatalogue, setGeCatalogue, setCache, setAnalyzer } from "./state";
import { showError } from "./notifications/errorBanner";
import { showToast } from "./notifications/toasts";
import { notifyUser } from "./notifications/priceAlerts";
import { formatDuration } from "./formatters";

// ─── Forward declaration for refreshMarketPanel ─────────────────────────────

let _refreshMarketPanel: (() => Promise<void>) | null = null;
export function setScanRefreshHook(fn: () => Promise<void>): void { _refreshMarketPanel = fn; }

// ─── Module state ───────────────────────────────────────────────────────────

let scanAbortController: AbortController | null = null;
let deepHistoryWarned = false;
let visibilityWarned = false;

function onVisibilityChange(): void {
  if (document.hidden && scanAbortController && !visibilityWarned) {
    visibilityWarned = true;
    showToast(
      "\u26A0\uFE0F Scan slows down when this tab is in the background \u2014 " +
      "keep the tab visible for best speed.",
      "info",
      10000,
    );
  }
}

export function bindFullMarketScan(): void {
  const els = getEls();

  // ── Restore persisted deep-history preference ──
  const savedDeep = localStorage.getItem(LS_DEEP_HISTORY) === "true";
  els.deepHistoryCheckbox.checked = savedDeep;

  els.deepHistoryCheckbox.addEventListener("change", () => {
    const checked = els.deepHistoryCheckbox.checked;
    localStorage.setItem(LS_DEEP_HISTORY, String(checked));
    if (checked && !deepHistoryWarned) {
      deepHistoryWarned = true;
      showToast(
        "Deep history enabled \u2014 full scans may take 3\u201310 minutes depending on connection.",
        "info",
        8000,
      );
    }
  });

  els.fullMarketScanBtn.addEventListener("click", async () => {
    if (scanAbortController) {
      scanAbortController.abort();
      scanAbortController = null;
      els.fullMarketScanBtn.textContent = "\uD83D\uDD0D Scan Full Market";
      els.syncProgress.classList.add("hidden");
      return;
    }

    let geCatalogue = getGeCatalogue();
    if (geCatalogue.length === 0) {
      try {
        geCatalogue = await fetchGECatalogue();
        setGeCatalogue(geCatalogue);
      } catch {
        showError("Could not load item catalogue. Try again later.");
        return;
      }
    }

    if (geCatalogue.length === 0) {
      showError("Item catalogue is empty \u2014 cannot scan.");
      return;
    }

    const deepHistory = els.deepHistoryCheckbox.checked;
    const deepLabel = deepHistory ? " (deep history: ON)" : "";

    scanAbortController = new AbortController();
    els.fullMarketScanBtn.textContent = "\u23F9 Cancel Scan";
    els.syncProgress.classList.remove("hidden");
    els.syncProgressFill.style.width = "0%";
    els.syncProgressText.textContent =
      "Scanning 0 / " + geCatalogue.length.toLocaleString("en-US") + "\u2026" + deepLabel;

    visibilityWarned = false;
    document.addEventListener("visibilitychange", onVisibilityChange);

    const scanStart = Date.now();

    try {
      await runFullMarketScan(
        geCatalogue,
        (done, total) => {
          const pct = Math.round((done / total) * 100);
          els.syncProgressFill.style.width = pct + "%";
          const elapsed = Date.now() - scanStart;
          const elapsedStr = formatDuration(elapsed);
          let etaStr = "";
          if (done > 0 && pct < 100) {
            const rate = done / elapsed;
            const remaining = (total - done) / rate;
            etaStr = ` \u2014 ~${formatDuration(remaining)} remaining`;
          }
          els.syncProgressText.textContent =
            `Scanning ${done.toLocaleString("en-US")} / ${total.toLocaleString("en-US")}\u2026 (${pct}%) [${elapsedStr}${etaStr}]${deepLabel}`;
        },
        scanAbortController.signal,
        deepHistory,
      );

      const cache = new CacheService();
      await cache.open();
      setCache(cache);
      setAnalyzer(new MarketAnalyzerService(cache));
      await _refreshMarketPanel?.();

      const elapsed = formatDuration(Date.now() - scanStart);
      const scanMsg = `\u2705 Scan complete \u2014 ${geCatalogue.length.toLocaleString("en-US")} items in ${elapsed}${deepLabel}`;
      els.syncProgressFill.style.width = "100%";
      els.syncProgressText.textContent = "Full market scan complete \u2714";
      setTimeout(() => els.syncProgress.classList.add("hidden"), 4000);
      notifyUser("GE Market Scan Complete", scanMsg, "info", 8000);
    } catch (err) {
      console.error("[UIService] Full market scan error:", err);
      els.syncProgressText.textContent = "Scan failed \u2014 see console.";
      setTimeout(() => els.syncProgress.classList.add("hidden"), 5000);
    } finally {
      scanAbortController = null;
      document.removeEventListener("visibilitychange", onVisibilityChange);
      els.fullMarketScanBtn.textContent = "\uD83D\uDD0D Scan Full Market";
    }
  });
}
