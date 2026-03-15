/**
 * @module ui/cardBuilder
 * Market card assembly — builds complete card DOM elements.
 */

import type { RankedItem } from "../../services";
import { formatGp } from "../../services";
import {
  getFavorites,
  getFavoriteAlerts,
} from "../favouritesData";
import { getShowAnalyticsModalHook } from "../helpers";
import { buildHeaderBadgesHtml } from "./badgeBuilder";
import { buildDetailGroupsHtml } from "./detailBuilder";
import { wireAlertInputs } from "./actionBuilder";
import { buildItemActionButtons } from "./actionBuilder";
import { buildSpriteImg } from "../modals/modalBase";

// ─── Card builder ───────────────────────────────────────────────────────────

/**
 * Build a complete market card DOM element for a ranked item.
 * Uses the analytics-modal hook to avoid circular imports.
 */
export function buildItemCard(item: RankedItem, rank?: number): HTMLElement {
  const card = document.createElement("div");
  card.className = "market-card";
  if (item.isRisky) card.classList.add("risky");
  if (item.volumeSpikeMultiplier > 1.5) card.classList.add("hype");
  if (getFavorites().has(item.name)) card.classList.add("favorited");

  const header = document.createElement("div");
  header.className = "market-card-header";

  if (rank != null) {
    const rankEl = document.createElement("span");
    rankEl.className = "rank-badge";
    rankEl.textContent = `#${rank}`;
    rankEl.title = `Ranked #${rank} by composite score`;
    header.appendChild(rankEl);
  }

  const img = buildSpriteImg(item.itemId, item.name);

  const nameEl = document.createElement("span");
  nameEl.className = "item-name";
  nameEl.textContent = item.name;

  const priceEl = document.createElement("span");
  priceEl.className = "item-price";
  priceEl.textContent = `${formatGp(item.price)} gp`;

  header.appendChild(img);
  header.appendChild(nameEl);
  header.appendChild(priceEl);

  // ── Streamlined header badges ──
  const flipWrap = document.createElement("span");
  flipWrap.className = "flip-badges";
  flipWrap.innerHTML = buildHeaderBadgesHtml(item, { showEma: false, showVol: false, forecastConfidence: true });

  header.appendChild(flipWrap);

  // ── Action buttons ──
  const analyticsBtn = document.createElement("button");
  analyticsBtn.className = "popout-btn";
  analyticsBtn.textContent = "\u2197";
  analyticsBtn.title = "View Analytics";
  analyticsBtn.setAttribute("aria-label", `View analytics for ${item.name}`);
  analyticsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    getShowAnalyticsModalHook()?.(item);
  });

  const [favBtn, addFlipCardBtn, wikiLink, geLink] = buildItemActionButtons(item, {
    stopPropagation: true,
    onFavToggle: (nowFav) => card.classList.toggle("favorited", nowFav),
  });

  // ── Inline alert popover ──
  const alertPopover = document.createElement("div");
  alertPopover.className = "card-alert-popover";
  alertPopover.innerHTML =
    `<div class="card-alert-row">` +
      `<label>Buy \u2264 <input class="card-alert-buy" type="number" min="0" placeholder="gp" name="alert-buy" /></label>` +
    `</div>` +
    `<div class="card-alert-row">` +
      `<label>Sell \u2265 <input class="card-alert-sell" type="number" min="0" placeholder="gp" name="alert-sell" /></label>` +
    `</div>`;
  alertPopover.addEventListener("click", (e) => e.stopPropagation());

  const existingAlert = getFavoriteAlerts(item.name);
  wireAlertInputs(alertPopover, item.name, {
    buySelector: ".card-alert-buy",
    sellSelector: ".card-alert-sell",
    onSave: (hasBuy, hasSell) => {
      favBtn.textContent = "\u2605";
      card.classList.add("favorited");
      alertBtn.classList.toggle("alert-active", !!(hasBuy || hasSell));
    },
  });

  const alertBtn = document.createElement("button");
  alertBtn.className = "alert-btn";
  alertBtn.textContent = "\uD83D\uDD14";
  alertBtn.title = "Set price alerts";
  alertBtn.setAttribute("aria-label", `Set price alert for ${item.name}`);
  if (existingAlert?.targetBuy || existingAlert?.targetSell) {
    alertBtn.classList.add("alert-active");
  }
  alertBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = alertPopover.classList.toggle("open");
    if (isOpen) {
      card.parentElement?.querySelectorAll(".card-alert-popover.open").forEach((el) => {
        if (el !== alertPopover) el.classList.remove("open");
      });
    }
  });

  const actions = document.createElement("span");
  actions.className = "card-actions";
  actions.appendChild(analyticsBtn);
  actions.appendChild(favBtn);
  actions.appendChild(alertBtn);
  actions.appendChild(addFlipCardBtn);
  actions.appendChild(wikiLink);
  actions.appendChild(geLink);
  header.appendChild(actions);

  // ── Detail panel ──
  const detail = document.createElement("div");
  detail.className = "market-card-detail";
  detail.innerHTML = buildDetailGroupsHtml(item, { showLRSlope: false });

  header.tabIndex = 0;
  header.setAttribute("role", "button");
  header.setAttribute("aria-expanded", "false");

  header.addEventListener("click", () => {
    const expanded = card.classList.toggle("expanded");
    header.setAttribute("aria-expanded", String(expanded));
  });

  header.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      header.click();
    }
  });

  card.appendChild(header);
  card.appendChild(alertPopover);
  card.appendChild(detail);
  return card;
}
