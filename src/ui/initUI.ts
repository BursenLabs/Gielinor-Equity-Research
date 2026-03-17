/**
 * @module ui/initUI
 * Boot orchestrator – resolves DOM refs, wires cross-module hooks,
 * initialises services, binds all UI event listeners, and kicks the
 * initial data pipeline.  This is the single entry-point called by
 * `src/index.ts`.
 */

import {
  CacheService,
  fetchGECatalogue,
  MarketAnalyzerService,
  NewsService,
  PortfolioService,
  WikiService,
} from "../services";

// ─── UI modules (alphabetical) ─────────────────────────────────────────────
import { bindAllocationAdvisor } from "./allocation";
import { bindChatEvents, bindClearChat, restoreChatHistory } from "./chat";
import { bindDataManagement, bindCacheManagement } from "./dataManagement";
import { bindDisclaimer } from "./disclaimer";
import { resolveElements, getEls } from "./domRefs";
import {
  renderFavorites,
  bindFavoritesCollapse,
  restoreFavSort,
  bindFavSort,
} from "./favourites";
import { setRenderFavoritesHook } from "./favouritesData";
import {
  setShowAnalyticsModalHook,
  setSwitchTabHook,
  setCloseItemSuggestionsHook,
} from "./helpers";
import {
  refreshMarketPanel,
  bindMarketFilters,
  bindTop20Collapse,
  renderMarketItems,
} from "./market/marketPanel";
import { bindSearchFilters } from "./market/marketSearch";
import { showAnalyticsModal } from "./modals/analyticsModal";
import { setCompleteFlipRenderHooks } from "./modals/completeFlipModal";
import { setRenderFlipsHook } from "./modals/editFlipModal";
import { setRenderCompletedFlipsHook } from "./modals/editCompletedFlipModal";
import { setRenderMarketItemsHook } from "./modals/modalHooks";
import { setRefreshMarketPanelHook, showError, bindErrorRetry } from "./notifications/errorBanner";
import { bindNotifBell } from "./notifications/notifBell";
import { requestNotificationPermission, checkBuyLimitResets } from "./notifications/priceAlerts";
import { maybeShowInfoBanner } from "./notifications/infoBanner";
import { bindBackToTop } from "./backToTop";
import { closeItemSuggestions } from "./portfolio/autocomplete";
import { renderCompletedFlips, bindCsvExport, bindCompletedFlipsFilter } from "./portfolio/completedFlips";
import {
  bindPortfolio,
  bindPortfolioSubNav,
  renderFlips,
  startPortfolioTimer,
  loadItemCatalogue,
  setRenderPortfolioDashboardHook,
} from "./portfolio/portfolio";
import { bindDashboardCollapse, renderPortfolioDashboard } from "./portfolio/portfolioDashboard";
import { bindFullMarketScan, setScanRefreshHook } from "./scanProgress";
import {
  populateProviderDropdown,
  restoreSettings,
  bindSettingsEvents,
  setShowSetupGuideHook,
  setShowAboutModalHook,
  setShowGuideModalHook,
} from "./settings";
import { bindForceReload, setReloadRefreshHook } from "./pipelineReload";
import { showSetupGuide } from "./modals/setupGuideModal";
import { showAboutModal } from "./modals/aboutModal";
import { showGuideModal } from "./modals/guideModal";
import {
  setCache,
  setAnalyzer,
  setWiki,
  setPortfolio,
  setNewsService,
  getCache,
  setGeCatalogue,
  setLatestNewsContext,
} from "./state";
import { bindLayoutToggle, bindViewToggle, setRenderFavoritesForViewToggle } from "./layoutManager";
import { bindTheme } from "./theme/theme";
import { bindTabNavigation, switchTab } from "./tabManager";

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Bootstrap the entire UI.  Call once from the entry point after the DOM is
 * ready.  Returns only after the initial data pipeline has completed and the
 * market panel is rendered.
 */
export async function initUI(): Promise<void> {
  wireHooks();
  bindAllListeners();
  await initServices();
  await loadInitialData();
  await initFavoritesAndPortfolio();
}

/** Phase 0 — Wire cross-module hooks (must precede any bind* call). */
function wireHooks(): void {
  setRenderFavoritesHook(renderFavorites);
  setShowAnalyticsModalHook(showAnalyticsModal);
  setSwitchTabHook(switchTab);
  setCloseItemSuggestionsHook(closeItemSuggestions);
  setRefreshMarketPanelHook(refreshMarketPanel);
  setScanRefreshHook(refreshMarketPanel);
  setReloadRefreshHook(refreshMarketPanel);
  setShowSetupGuideHook(showSetupGuide);
  setShowAboutModalHook(showAboutModal);
  setShowGuideModalHook(showGuideModal);
  setRenderFlipsHook(renderFlips);
  setRenderCompletedFlipsHook(renderCompletedFlips);
  setCompleteFlipRenderHooks(renderFlips, renderCompletedFlips);
  setRenderMarketItemsHook(renderMarketItems);
  setRenderFavoritesForViewToggle(renderFavorites);
  setRenderPortfolioDashboardHook(renderPortfolioDashboard);
}

/** Phase 1 — Resolve DOM refs and bind all event listeners. */
function bindAllListeners(): void {
  resolveElements();
  bindDisclaimer();
  populateProviderDropdown();
  restoreSettings();
  bindSettingsEvents();
  bindChatEvents();
  bindViewToggle();
  bindMarketFilters();
  bindSearchFilters();
  bindForceReload();
  bindLayoutToggle();
  bindTheme();
  bindTabNavigation();
  bindClearChat();
  bindPortfolio();
  bindErrorRetry();
  bindDataManagement();
  bindCacheManagement();
  bindFullMarketScan();
  bindBackToTop();
  requestNotificationPermission();
}

/** Phase 2 — Create shared service singletons and store in UI state. */
async function initServices(): Promise<void> {
  const cache = new CacheService();
  await cache.open();
  const analyzer = new MarketAnalyzerService(cache);
  const wiki = new WikiService();
  const portfolio = new PortfolioService();

  setCache(cache);
  setAnalyzer(analyzer);
  setWiki(wiki);
  setPortfolio(portfolio);

  const newsService = new NewsService();
  setNewsService(newsService);
  newsService
    .getRecentNews()
    .then((items) => {
      setLatestNewsContext(newsService.formatForLLM(items));
    })
    .catch((err) => console.warn("[UIService] News fetch failed:", err));
}

/** Phase 3+4 — Initial market render, favourites, allocation. */
async function loadInitialData(): Promise<void> {
  try {
    await refreshMarketPanel();
  } catch (err) {
    console.error("[UIService] Startup: market panel failed:", err);
    const msg = err instanceof Error ? err.message : "Could not load market data.";
    showError(msg);
  }

  restoreFavSort();
  bindFavSort();
  await renderFavorites();
  bindFavoritesCollapse();
  bindAllocationAdvisor();
  getEls().allocationSection.style.display = "";
  bindTop20Collapse();
}

/** Phase 5+6 — Catalogue, chat history, portfolio, dashboard, info banner. */
async function initFavoritesAndPortfolio(): Promise<void> {
  await loadItemCatalogue();

  try {
    const geCat = await fetchGECatalogue();
    setGeCatalogue(geCat);
  } catch (err) {
    console.warn("[UIService] GE catalogue fetch failed:", err);
    setGeCatalogue([]);
  }

  restoreChatHistory();

  renderFlips();
  renderCompletedFlips();
  startPortfolioTimer();
  checkBuyLimitResets();
  bindPortfolioSubNav();
  bindDashboardCollapse();
  bindCompletedFlipsFilter();
  bindCsvExport();
  bindNotifBell();

  const cache = getCache();
  maybeShowInfoBanner(cache).catch((err) =>
    console.warn("[UIService] Info banner check failed:", err)
  );
}
