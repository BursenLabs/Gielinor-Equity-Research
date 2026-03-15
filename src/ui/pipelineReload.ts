/**
 * @module ui/pipelineReload
 * Force-reload button: clears cache, re-runs the data pipeline,
 * reconstructs services, and refreshes the market panel.
 */

import {
  CacheService,
  initDataPipeline,
  MarketAnalyzerService,
} from "../services";
import { getEls } from "./domRefs";
import { showError } from "./notifications/errorBanner";
import { getCache, setCache, setAnalyzer } from "./state";

// ─── Forward declaration ────────────────────────────────────────────────────

let _refreshMarketPanel: (() => Promise<void>) | null = null;

/** Register the callback used to refresh the market panel after reload. */
export function setReloadRefreshHook(fn: () => Promise<void>): void {
  _refreshMarketPanel = fn;
}

// ─── Binding ────────────────────────────────────────────────────────────────

/** Bind the force-reload button to a full pipeline re-initialisation. */
export function bindForceReload(): void {
  const els = getEls();
  els.forceReloadBtn.addEventListener("click", async () => {
    els.forceReloadBtn.disabled = true;
    els.reloadStatus.textContent = "Clearing cache\u2026";
    els.reloadStatus.classList.remove("error");

    try {
      let cache = getCache();
      await cache.clear();
      els.reloadStatus.textContent = "Fetching fresh data\u2026";

      await initDataPipeline();

      cache = new CacheService();
      await cache.open();
      setCache(cache);
      setAnalyzer(new MarketAnalyzerService(cache));

      await _refreshMarketPanel?.();

      els.reloadStatus.textContent = "Data reloaded \u2713";
    } catch (err) {
      console.error("[UIService] Force reload failed:", err);
      const msg = err instanceof Error ? err.message : "Reload failed \u2014 see console.";
      els.reloadStatus.textContent = msg;
      els.reloadStatus.classList.add("error");
      showError(msg);
    } finally {
      els.forceReloadBtn.disabled = false;
    }
  });
}
