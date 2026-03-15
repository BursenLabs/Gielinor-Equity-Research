/**
 * @module ui/infoBanner
 * Dismissible informational banner prompting the user to run a deep scan,
 * plus the startup coverage check that decides whether to show it.
 */

import {
  CacheService,
  fetchGECatalogue,
  runFullMarketScan,
  MarketAnalyzerService,
} from "../../services";
import { getEls } from "../domRefs";
import { LS_INFO_BANNER_DISMISSED } from "../constants";
import { formatDuration } from "../formatters";
import { showError } from "./errorBanner";
import { refreshMarketPanel } from "../market/marketPanel";
import {
  getGeCatalogue,
  setGeCatalogue,
  setCache,
  setAnalyzer,
} from "../state";

/**
 * Show a dismissible info banner at the top of the market view.
 *
 * @param message - The informational text to display.
 * @param onScan  - Callback invoked when the user clicks "Deep Scan".
 */
export function showInfoBanner(message: string, onScan: () => void): void {
  const els = getEls();

  // Prevent duplicate banners.
  if (document.querySelector(".info-banner")) return;

  const banner = document.createElement("div");
  banner.className = "info-banner";
  banner.innerHTML =
    `<span class="info-banner-icon">\uD83D\uDCCA</span>` +
    `<div class="info-banner-content">` +
      `<p class="info-banner-text">${message}</p>` +
      `<div class="info-banner-actions">` +
        `<button class="info-banner-scan-btn" type="button">\u23F3 Deep Scan (~12+ min)</button>` +
        `<button class="info-banner-dismiss-btn" type="button">\u2715 Dismiss</button>` +
      `</div>` +
    `</div>`;

  const scanBtn = banner.querySelector(".info-banner-scan-btn") as HTMLButtonElement;
  const dismissBtn = banner.querySelector(".info-banner-dismiss-btn") as HTMLButtonElement;

  scanBtn.addEventListener("click", () => {
    banner.remove();
    onScan();
  });

  dismissBtn.addEventListener("click", () => {
    // Show a brief hint before removing the banner.
    const hint = document.createElement("div");
    hint.className = "info-banner-hint";
    hint.textContent = "You can run a deep scan later from Settings \u2192 Data (Advanced Mode).";
    banner.querySelector(".info-banner-actions")?.replaceWith(hint);

    setTimeout(() => {
      hint.classList.add("fade-out");
      hint.addEventListener("transitionend", () => banner.remove(), { once: true });
      setTimeout(() => banner.remove(), 600);
    }, 4000);

    localStorage.setItem("ger:info-banner-dismissed", new Date().toISOString());
  });

  // Insert at the start of the market view.
  els.marketView.prepend(banner);
}

/**
 * Check price-history coverage and show the info banner if the user
 * would benefit from a deep scan.
 *
 * Skips if the banner was previously dismissed or if history coverage is
 * already sufficient (>30% of items with ≥2 history rows).
 */
export async function maybeShowInfoBanner(cache: CacheService): Promise<void> {
  const dismissedAt = localStorage.getItem(LS_INFO_BANNER_DISMISSED);
  if (dismissedAt) {
    const DISMISS_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000;
    const age = Date.now() - new Date(dismissedAt).getTime();
    if (!Number.isNaN(age) && age < DISMISS_EXPIRY_MS) return;
    localStorage.removeItem(LS_INFO_BANNER_DISMISSED);
  }

  const records = await cache.getAll();
  if (records.length === 0) return;

  const recentHistory = await cache.history.getRecentHistory(30);
  const grouped = new Map<string, number>();
  for (const h of recentHistory) {
    grouped.set(h.name, (grouped.get(h.name) ?? 0) + 1);
  }
  const withHistory = [...grouped.values()].filter((c) => c >= 2).length;
  if (withHistory >= records.length * 0.3) return;

  showInfoBanner(
    "Trend analytics (price trends, volatility, predictions) require price history data. " +
    "You can load history for individual items via their analytics modal, or run a full " +
    "deep scan to populate all items at once. Note: a deep scan takes approximately " +
    "12\u201320 minutes depending on network conditions and API rate limits.",
    async () => {
      const els = getEls();

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

      els.syncProgress.classList.remove("hidden");
      els.syncProgressFill.style.width = "0%";
      els.syncProgressText.textContent = "Starting deep scan\u2026";

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
              `Scanning ${done.toLocaleString("en-US")} / ${total.toLocaleString("en-US")}\u2026 (${pct}%) [${elapsedStr}${etaStr}] (deep history: ON)`;
          },
          undefined,
          true,
        );

        const freshCache = new CacheService();
        await freshCache.open();
        setCache(freshCache);
        setAnalyzer(new MarketAnalyzerService(freshCache));
        await refreshMarketPanel();

        const totalElapsed = formatDuration(Date.now() - scanStart);
        els.syncProgressFill.style.width = "100%";
        els.syncProgressText.textContent = `Deep scan complete \u2714 (${totalElapsed})`;
        setTimeout(() => els.syncProgress.classList.add("hidden"), 4000);
      } catch (err) {
        console.error("[InfoBanner] Deep scan failed:", err);
        els.syncProgressText.textContent = "Scan failed \u2014 see console.";
        setTimeout(() => els.syncProgress.classList.add("hidden"), 5000);
      }
    },
  );
}
