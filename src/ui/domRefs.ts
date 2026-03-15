/**
 * @module ui/domRefs
 * Lazily resolved DOM element cache.  Populated once by {@link resolveElements}
 * during {@link initUI}.  Every UI module reads refs via {@link getEls}.
 */

/** Shape of the cached DOM element references. */
export interface Elements {
  alt1Status: HTMLElement;
  providerSelect: HTMLSelectElement;
  providerCostHint: HTMLElement;
  setupGuideBtn: HTMLButtonElement;
  customEndpointGroup: HTMLElement;
  customEndpointInput: HTMLInputElement;
  modelInput: HTMLInputElement;
  modelOptions: HTMLDataListElement;
  apiKeyInput: HTMLInputElement;
  saveKeyBtn: HTMLButtonElement;
  keyStatus: HTMLElement;
  filterVolume: HTMLSelectElement;
  filterPrice: HTMLSelectElement;
  filterConfidence: HTMLSelectElement;
  top20SortSelect: HTMLSelectElement;
  searchSortSelect: HTMLSelectElement;
  volumeCustomGroup: HTMLElement;
  volumeMinSlider: HTMLInputElement;
  volumeMinInput: HTMLInputElement;
  volumeMaxSlider: HTMLInputElement;
  volumeMaxInput: HTMLInputElement;
  budgetCustomGroup: HTMLElement;
  budgetSlider: HTMLInputElement;
  budgetInput: HTMLInputElement;
  marketSearchInput: HTMLInputElement;
  searchLoading: HTMLElement;
  searchResults: HTMLElement;
  favoritesSection: HTMLElement;
  favoritesItems: HTMLElement;
  favoritesCollapseBtn: HTMLButtonElement;
  favoritesHeader: HTMLElement;
  favoritesSortSelect: HTMLSelectElement;
  allocationSection: HTMLElement;
  allocationBody: HTMLElement;
  allocationCollapseBtn: HTMLButtonElement;
  allocationHeader: HTMLElement;
  allocationBudget: HTMLInputElement;
  allocationSource: HTMLSelectElement;
  allocationStrategy: HTMLSelectElement;
  allocationRunBtn: HTMLButtonElement;
  allocationResults: HTMLElement;
  refreshMarketBtn: HTMLButtonElement;
  fullMarketScanBtn: HTMLButtonElement;
  deepHistoryCheckbox: HTMLInputElement;
  syncProgress: HTMLElement;
  syncProgressFill: HTMLElement;
  syncProgressText: HTMLElement;
  marketLoading: HTMLElement;
  marketItems: HTMLElement;
  errorBanner: HTMLElement;
  errorBannerMsg: HTMLElement;
  errorRetryBtn: HTMLButtonElement;
  viewListBtn: HTMLButtonElement;
  viewTileBtn: HTMLButtonElement;
  viewHybridBtn: HTMLButtonElement;
  compactTilesToggle: HTMLInputElement;
  top20CollapseBtn: HTMLButtonElement;
  marketHeader: HTMLElement;
  chatHistory: HTMLElement;
  chatInput: HTMLInputElement;
  chatSendBtn: HTMLButtonElement;
  clearChatBtn: HTMLButtonElement;
  forceReloadBtn: HTMLButtonElement;
  reloadStatus: HTMLElement;
  limitResetNotifsToggle: HTMLInputElement;
  newsContextToggle: HTMLInputElement;
  layoutTabbedBtn: HTMLButtonElement;
  layoutSidebarBtn: HTMLButtonElement;
  styleSelect: HTMLSelectElement;
  colorwaySelect: HTMLSelectElement;
  modeDarkBtn: HTMLButtonElement;
  modeLightBtn: HTMLButtonElement;
  contrastSelect: HTMLSelectElement;
  contrastAutoToggle: HTMLInputElement;
  tabMarketBtn: HTMLButtonElement;
  tabAdvisorBtn: HTMLButtonElement;
  viewTabs: HTMLElement;
  marketView: HTMLElement;
  advisorView: HTMLElement;
  tabPortfolioBtn: HTMLButtonElement;
  portfolioView: HTMLElement;
  flipItemName: HTMLInputElement;
  flipSuggestions: HTMLElement;
  flipBuyPrice: HTMLInputElement;
  flipQuantity: HTMLInputElement;
  flipSellPrice: HTMLInputElement;
  addFlipBtn: HTMLButtonElement;
  activeFlipsList: HTMLElement;
  portfolioActiveBtn: HTMLButtonElement;
  portfolioHistoryBtn: HTMLButtonElement;
  portfolioActiveContainer: HTMLElement;
  portfolioHistoryContainer: HTMLElement;
  dashboardPnlHeader: HTMLElement;
  dashboardPnlCollapseBtn: HTMLButtonElement;
  dashboardPnlChart: HTMLElement;
  dashboardWinlossHeader: HTMLElement;
  dashboardWinlossCollapseBtn: HTMLButtonElement;
  dashboardWinlossChart: HTMLElement;
  statTotalProfit: HTMLElement;
  statTotalFlips: HTMLElement;
  statAvgProfit: HTMLElement;
  statAvgRoi: HTMLElement;
  completedFlipsList: HTMLElement;
  exportDataBtn: HTMLButtonElement;
  importDataBtn: HTMLButtonElement;
  importFileInput: HTMLInputElement;
  exportCacheBtn: HTMLButtonElement;
  importCacheBtn: HTMLButtonElement;
  importCacheInput: HTMLInputElement;
  completedFlipsFilter: HTMLInputElement;
  exportCsvBtn: HTMLButtonElement;
  searchFilterBtn: HTMLButtonElement;
  searchFilterPopover: HTMLElement;
  browseAllBtn: HTMLButtonElement;
  backToTopBtn: HTMLButtonElement;
  aboutBtn: HTMLButtonElement;
  guideBtn: HTMLButtonElement;
  notifBellBtn: HTMLButtonElement;
  notifBellBadge: HTMLElement;
  advancedModeToggle: HTMLInputElement;
  settingsBtn: HTMLButtonElement;
  settingsBackdrop: HTMLElement;
  settingsCloseBtn: HTMLButtonElement;
}

let els: Elements;

/** Return the cached DOM element refs.  Must call {@link resolveElements} first. */
export function getEls(): Elements { return els; }

/**
 * Resolve and cache all required DOM element references once.
 * Throws early with a clear message if any element is missing.
 */
export function resolveElements(): void {
  const q = <T extends HTMLElement>(id: string): T => {
    const el = document.getElementById(id) as T | null;
    if (!el) throw new Error(`[UIService] Missing DOM element: #${id}`);
    return el;
  };

  els = {
    alt1Status: q("alt1-status"),
    providerSelect: q<HTMLSelectElement>("provider-select"),
    providerCostHint: q("provider-cost-hint"),
    setupGuideBtn: q<HTMLButtonElement>("setup-guide-btn"),
    customEndpointGroup: q("custom-endpoint-group"),
    customEndpointInput: q<HTMLInputElement>("custom-endpoint-input"),
    modelInput: q<HTMLInputElement>("model-input"),
    modelOptions: q<HTMLDataListElement>("model-options"),
    apiKeyInput: q<HTMLInputElement>("api-key-input"),
    saveKeyBtn: q<HTMLButtonElement>("save-key-btn"),
    keyStatus: q("key-status"),
    filterVolume: q<HTMLSelectElement>("filter-volume"),
    filterPrice: q<HTMLSelectElement>("filter-price"),
    filterConfidence: q<HTMLSelectElement>("filter-confidence"),
    top20SortSelect: q<HTMLSelectElement>("top20-sort-select"),
    searchSortSelect: q<HTMLSelectElement>("search-sort-select"),
    volumeCustomGroup: q("volume-custom-group"),
    volumeMinSlider: q<HTMLInputElement>("volume-min-slider"),
    volumeMinInput: q<HTMLInputElement>("volume-min-input"),
    volumeMaxSlider: q<HTMLInputElement>("volume-max-slider"),
    volumeMaxInput: q<HTMLInputElement>("volume-max-input"),
    budgetCustomGroup: q("budget-custom-group"),
    budgetSlider: q<HTMLInputElement>("budget-slider"),
    budgetInput: q<HTMLInputElement>("budget-input"),
    marketSearchInput: q<HTMLInputElement>("market-search-input"),
    searchLoading: q("search-loading"),
    searchResults: q("search-results"),
    favoritesSection: q("favorites-section"),
    favoritesItems: q("favorites-items"),
    favoritesCollapseBtn: q<HTMLButtonElement>("favorites-collapse-btn"),
    favoritesHeader: document.querySelector<HTMLElement>("#favorites-section .favorites-header")!,
    favoritesSortSelect: q<HTMLSelectElement>("favorites-sort-select"),
    allocationSection: q("allocation-section"),
    allocationBody: q("allocation-body"),
    allocationCollapseBtn: q<HTMLButtonElement>("allocation-collapse-btn"),
    allocationHeader: document.querySelector<HTMLElement>("#allocation-section .allocation-header")!,
    allocationBudget: q<HTMLInputElement>("allocation-budget"),
    allocationSource: q<HTMLSelectElement>("allocation-source"),
    allocationStrategy: q<HTMLSelectElement>("allocation-strategy"),
    allocationRunBtn: q<HTMLButtonElement>("allocation-run-btn"),
    allocationResults: q("allocation-results"),
    refreshMarketBtn: q<HTMLButtonElement>("refresh-market-btn"),
    fullMarketScanBtn: q<HTMLButtonElement>("full-market-scan-btn"),
    deepHistoryCheckbox: q<HTMLInputElement>("deep-history-checkbox"),
    syncProgress: q("background-sync-progress"),
    syncProgressFill: q("sync-progress-fill"),
    syncProgressText: q("sync-progress-text"),
    marketLoading: q("market-loading"),
    marketItems: q("market-items"),
    errorBanner: q("error-banner"),
    errorBannerMsg: q("error-banner-msg"),
    errorRetryBtn: q<HTMLButtonElement>("error-retry-btn"),
    viewListBtn: q<HTMLButtonElement>("view-list-btn"),
    viewTileBtn: q<HTMLButtonElement>("view-tile-btn"),
    viewHybridBtn: q<HTMLButtonElement>("view-hybrid-btn"),
    compactTilesToggle: q<HTMLInputElement>("compact-tiles-toggle"),
    top20CollapseBtn: q<HTMLButtonElement>("top20-collapse-btn"),
    marketHeader: q("market-header"),
    chatHistory: q("chat-history"),
    chatInput: q<HTMLInputElement>("chat-input"),
    chatSendBtn: q<HTMLButtonElement>("chat-send-btn"),
    clearChatBtn: q<HTMLButtonElement>("clear-chat-btn"),
    forceReloadBtn: q<HTMLButtonElement>("force-reload-btn"),
    reloadStatus: q("reload-status"),
    limitResetNotifsToggle: q<HTMLInputElement>("limit-reset-notifs-toggle"),
    newsContextToggle: q<HTMLInputElement>("news-context-toggle"),
    layoutTabbedBtn: q<HTMLButtonElement>("layout-tabbed-btn"),
    layoutSidebarBtn: q<HTMLButtonElement>("layout-sidebar-btn"),
    styleSelect: q<HTMLSelectElement>("style-select"),
    colorwaySelect: q<HTMLSelectElement>("colorway-select"),
    modeDarkBtn: q<HTMLButtonElement>("mode-dark-btn"),
    modeLightBtn: q<HTMLButtonElement>("mode-light-btn"),
    contrastSelect: q<HTMLSelectElement>("contrast-select"),
    contrastAutoToggle: q<HTMLInputElement>("contrast-auto-toggle"),
    tabMarketBtn: q<HTMLButtonElement>("tab-market-btn"),
    tabAdvisorBtn: q<HTMLButtonElement>("tab-advisor-btn"),
    viewTabs: q("view-tabs"),
    marketView: q("market-view"),
    advisorView: q("advisor-view"),
    tabPortfolioBtn: q<HTMLButtonElement>("tab-portfolio-btn"),
    portfolioView: q("portfolio-view"),
    flipItemName: q<HTMLInputElement>("flip-item-name"),
    flipSuggestions: q("flip-suggestions"),
    flipBuyPrice: q<HTMLInputElement>("flip-buy-price"),
    flipQuantity: q<HTMLInputElement>("flip-quantity"),
    flipSellPrice: q<HTMLInputElement>("flip-sell-price"),
    addFlipBtn: q<HTMLButtonElement>("add-flip-btn"),
    activeFlipsList: q("active-flips-list"),
    portfolioActiveBtn: q<HTMLButtonElement>("portfolio-active-btn"),
    portfolioHistoryBtn: q<HTMLButtonElement>("portfolio-history-btn"),
    portfolioActiveContainer: q("portfolio-active-container"),
    portfolioHistoryContainer: q("portfolio-history-container"),
    dashboardPnlHeader: q("dashboard-pnl-header"),
    dashboardPnlCollapseBtn: q<HTMLButtonElement>("dashboard-pnl-collapse-btn"),
    dashboardPnlChart: q("dashboard-pnl-chart"),
    dashboardWinlossHeader: q("dashboard-winloss-header"),
    dashboardWinlossCollapseBtn: q<HTMLButtonElement>("dashboard-winloss-collapse-btn"),
    dashboardWinlossChart: q("dashboard-winloss-chart"),
    statTotalProfit: q("stat-total-profit"),
    statTotalFlips: q("stat-total-flips"),
    statAvgProfit: q("stat-avg-profit"),
    statAvgRoi: q("stat-avg-roi"),
    completedFlipsList: q("completed-flips-list"),
    exportDataBtn: q<HTMLButtonElement>("export-data-btn"),
    importDataBtn: q<HTMLButtonElement>("import-data-btn"),
    importFileInput: q<HTMLInputElement>("import-file-input"),
    exportCacheBtn: q<HTMLButtonElement>("export-cache-btn"),
    importCacheBtn: q<HTMLButtonElement>("import-cache-btn"),
    importCacheInput: q<HTMLInputElement>("import-cache-input"),
    completedFlipsFilter: q<HTMLInputElement>("completed-flips-filter"),
    exportCsvBtn: q<HTMLButtonElement>("export-csv-btn"),
    searchFilterBtn: q<HTMLButtonElement>("search-filter-btn"),
    searchFilterPopover: q("search-filter-popover"),
    browseAllBtn: q<HTMLButtonElement>("browse-all-btn"),
    backToTopBtn: q<HTMLButtonElement>("back-to-top-btn"),
    aboutBtn: q<HTMLButtonElement>("about-btn"),
    guideBtn: q<HTMLButtonElement>("guide-btn"),
    notifBellBtn: q<HTMLButtonElement>("notif-bell-btn"),
    notifBellBadge: q("notif-bell-badge"),
    advancedModeToggle: q<HTMLInputElement>("advanced-mode-toggle"),
    settingsBtn: q<HTMLButtonElement>("settings-btn"),
    settingsBackdrop: q("settings-backdrop"),
    settingsCloseBtn: q<HTMLButtonElement>("settings-close-btn"),
  };
}
