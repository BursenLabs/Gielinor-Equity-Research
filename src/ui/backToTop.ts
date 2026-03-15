/**
 * @module ui/backToTop
 * Back-to-top floating button — shows after scrolling past a threshold.
 */

import { getEls } from "./domRefs";

/** Bind scroll listener + click handler for the back-to-top button. */
export function bindBackToTop(): void {
  const els = getEls();
  const THRESHOLD = 300;

  els.marketView.addEventListener("scroll", () => {
    els.backToTopBtn.classList.toggle("visible", els.marketView.scrollTop > THRESHOLD);
  }, { passive: true });

  els.backToTopBtn.addEventListener("click", () => {
    els.marketView.scrollTo({ top: 0, behavior: "smooth" });
  });
}
