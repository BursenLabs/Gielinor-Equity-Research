/**
 * @module ui/tabManager
 * Tab navigation management (market / advisor / portfolio).
 */

import { LS_ACTIVE_TAB } from "./constants";
import { getEls } from "./domRefs";

export function switchTab(tab: "market" | "advisor" | "portfolio"): void {
  const els = getEls();
  els.tabMarketBtn.classList.toggle("active", tab === "market");
  els.tabAdvisorBtn.classList.toggle("active", tab === "advisor");
  els.tabPortfolioBtn.classList.toggle("active", tab === "portfolio");

  els.tabMarketBtn.setAttribute("aria-selected", String(tab === "market"));
  els.tabAdvisorBtn.setAttribute("aria-selected", String(tab === "advisor"));
  els.tabPortfolioBtn.setAttribute("aria-selected", String(tab === "portfolio"));

  els.marketView.classList.toggle("active-tab", tab === "market");
  els.advisorView.classList.toggle("active-tab", tab === "advisor");
  els.portfolioView.classList.toggle("active-tab", tab === "portfolio");

  localStorage.setItem(LS_ACTIVE_TAB, tab);
}

export function bindTabNavigation(): void {
  const els = getEls();
  els.tabMarketBtn.addEventListener("click", () => switchTab("market"));
  els.tabAdvisorBtn.addEventListener("click", () => switchTab("advisor"));
  els.tabPortfolioBtn.addEventListener("click", () => switchTab("portfolio"));

  const saved = localStorage.getItem(LS_ACTIVE_TAB);
  if (saved === "advisor" || saved === "portfolio") switchTab(saved);
}
