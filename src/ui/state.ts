/**
 * @module ui/state
 * Centralised shared mutable state for the UI layer.
 * Each variable is exposed via explicit getters/setters so that modules
 * import only what they need and mutations remain traceable.
 */

import type {
  CacheService,
  GECatalogueEntry,
  LLMService,
  MarketAnalyzerService,
  NewsService,
  PortfolioService,
  RankedItem,
  WikiService,
} from "../services";

/** Re-declared locally to avoid circular import with constants.ts. */
type ViewMode = "list" | "tile" | "hybrid";

// ─── Service instances (initialised once in initUI) ─────────────────────────

let cache: CacheService;
export function getCache(): CacheService { return cache; }
export function setCache(c: CacheService): void { cache = c; }

let analyzer: MarketAnalyzerService;
export function getAnalyzer(): MarketAnalyzerService { return analyzer; }
export function setAnalyzer(a: MarketAnalyzerService): void { analyzer = a; }

let wiki: WikiService;
export function getWiki(): WikiService { return wiki; }
export function setWiki(w: WikiService): void { wiki = w; }

let portfolio: PortfolioService;
export function getPortfolio(): PortfolioService { return portfolio; }
export function setPortfolio(p: PortfolioService): void { portfolio = p; }

let llm: LLMService | null = null;
export function getLLM(): LLMService | null { return llm; }
export function setLLM(l: LLMService | null): void { llm = l; }

let newsService: NewsService | null = null;
export function getNewsService(): NewsService | null { return newsService; }
export function setNewsService(n: NewsService | null): void { newsService = n; }

// ─── Market data ────────────────────────────────────────────────────────────

let latestMarketSummary = "";
export function getLatestMarketSummary(): string { return latestMarketSummary; }
export function setLatestMarketSummary(s: string): void { latestMarketSummary = s; }

let latestLLMContext = "";
export function getLatestLLMContext(): string { return latestLLMContext; }
export function setLatestLLMContext(s: string): void { latestLLMContext = s; }

let latestNewsContext = "";
export function getLatestNewsContext(): string { return latestNewsContext; }
export function setLatestNewsContext(s: string): void { latestNewsContext = s; }

let latestTopItems: RankedItem[] = [];
export function getLatestTopItems(): RankedItem[] { return latestTopItems; }
export function setLatestTopItems(items: RankedItem[]): void { latestTopItems = items; }

let latestSearchResults: RankedItem[] = [];
export function getLatestSearchResults(): RankedItem[] { return latestSearchResults; }
export function setLatestSearchResults(items: RankedItem[]): void { latestSearchResults = items; }

let unfilteredSearchResults: RankedItem[] = [];
export function getUnfilteredSearchResults(): RankedItem[] { return unfilteredSearchResults; }
export function setUnfilteredSearchResults(items: RankedItem[]): void { unfilteredSearchResults = items; }

const activeSearchFilters = new Set<string>();
export function getActiveSearchFilters(): Set<string> { return activeSearchFilters; }

let cachedNatureRunePrice = 500;
export function getCachedNatureRunePrice(): number { return cachedNatureRunePrice; }
export function setCachedNatureRunePrice(p: number): void { cachedNatureRunePrice = p; }

// ─── UI state ───────────────────────────────────────────────────────────────

let currentView: ViewMode = "list";
export function getCurrentView(): ViewMode { return currentView; }
export function setCurrentView(v: ViewMode): void { currentView = v; }

let compactMode = false;
export function getCompactMode(): boolean { return compactMode; }
export function setCompactMode(v: boolean): void { compactMode = v; }

let advancedMode = false;
export function getAdvancedMode(): boolean { return advancedMode; }
export function setAdvancedMode(v: boolean): void { advancedMode = v; }

let portfolioTimerId: ReturnType<typeof setInterval> | null = null;
export function getPortfolioTimerId(): ReturnType<typeof setInterval> | null { return portfolioTimerId; }
export function setPortfolioTimerId(id: ReturnType<typeof setInterval> | null): void { portfolioTimerId = id; }

let allCachedItems: { name: string; price: number }[] = [];
export function getAllCachedItems(): { name: string; price: number }[] { return allCachedItems; }
export function setAllCachedItems(items: { name: string; price: number }[]): void { allCachedItems = items; }

let geCatalogue: GECatalogueEntry[] = [];
export function getGeCatalogue(): GECatalogueEntry[] { return geCatalogue; }
export function setGeCatalogue(cat: GECatalogueEntry[]): void { geCatalogue = cat; }

// ─── Search state ───────────────────────────────────────────────────────────

let isSearchActive = false;
export function getIsSearchActive(): boolean { return isSearchActive; }
export function setIsSearchActive(v: boolean): void { isSearchActive = v; }

let isBrowseAllActive = false;
export function getIsBrowseAllActive(): boolean { return isBrowseAllActive; }
export function setIsBrowseAllActive(v: boolean): void { isBrowseAllActive = v; }

// ─── Completed-flips sort state ─────────────────────────────────────────────

let completedFlipsSortCol: "date" | "item" | "profit" | "roi" = "date";
export function getCompletedFlipsSortCol(): typeof completedFlipsSortCol { return completedFlipsSortCol; }
export function setCompletedFlipsSortCol(c: typeof completedFlipsSortCol): void { completedFlipsSortCol = c; }

let completedFlipsSortAsc = false;
export function getCompletedFlipsSortAsc(): boolean { return completedFlipsSortAsc; }
export function setCompletedFlipsSortAsc(v: boolean): void { completedFlipsSortAsc = v; }

// ─── Portfolio autocomplete ─────────────────────────────────────────────────

let suppressAutocomplete = false;
export function getSuppressAutocomplete(): boolean { return suppressAutocomplete; }
export function setSuppressAutocomplete(v: boolean): void { suppressAutocomplete = v; }
