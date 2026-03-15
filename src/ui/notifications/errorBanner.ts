/**
 * @module ui/errorBanner
 * Dismissible error banner + retry logic at the top of the market view.
 */

import { CacheService, MarketAnalyzerService, initDataPipeline } from "../../services";
import { getEls } from "../domRefs";
import { getCache, setCache, setAnalyzer } from "../state";

// ─── Forward declaration for refreshMarketPanel ─────────────────────────────

let _refreshMarketPanel: (() => Promise<void>) | null = null;

/** Register the market-panel refresh callback used by the retry button. */
export function setRefreshMarketPanelHook(fn: () => Promise<void>): void {
  _refreshMarketPanel = fn;
}

// ─── Error Banner ───────────────────────────────────────────────────────────

/** Show the sticky error banner with the given message. */
export function showError(message: string): void {
  const els = getEls();
  els.errorBannerMsg.textContent = message;
  els.errorBanner.classList.remove("hidden");
  els.marketLoading.style.display = "none";
}

/** Hide the error banner and clear its message. */
export function hideError(): void {
  const els = getEls();
  els.errorBanner.classList.add("hidden");
  els.errorBannerMsg.textContent = "";
}

// ─── Error Retry ────────────────────────────────────────────────────────────

/** Bind the retry button inside the error banner. */
export function bindErrorRetry(): void {
  const els = getEls();
  els.errorRetryBtn.addEventListener("click", async () => {
    hideError();
    els.marketLoading.style.display = "";
    els.marketLoading.textContent = "Retrying\u2026";

    try {
      let cache = getCache();
      await cache.clear();
      await initDataPipeline();

      cache = new CacheService();
      await cache.open();
      setCache(cache);
      setAnalyzer(new MarketAnalyzerService(cache));

      await _refreshMarketPanel?.();
    } catch (err) {
      console.error("[UIService] Retry failed:", err);
      const msg = err instanceof Error ? err.message : "Retry failed \u2014 see console.";
      showError(msg);
    }
  });
}
