/**
 * @module ui/flipCard
 * Active flip card DOM assembly, metric calculation, and event wiring.
 */

import type { ActiveFlip } from "../../services";
import { calculateGETax, formatGp } from "../../services";
import { BUY_LIMIT_WINDOW_MS } from "../constants";
import { formatCountdown } from "../formatters";
import { findRankedItem } from "./snapshots";
import { createButton, openAnalyticsForName } from "../helpers";
import { showEditFlipModal } from "../modals/editFlipModal";
import { showCompleteFlipModal, showAlchFlipModal } from "../modals/completeFlipModal";
import { getPortfolio } from "../state";

/** Compute cost, revenue, profit, and ROI for an active flip. */
export function calcFlipMetrics(flip: ActiveFlip): { cost: number; revenue: number; profit: number; roi: number } {
  const cost = flip.buyPrice * flip.quantity;
  const tax = calculateGETax(flip.targetSellPrice);
  const revenue = (flip.targetSellPrice - tax) * flip.quantity;
  const profit = revenue - cost;
  const roi = cost > 0 ? (profit / cost) * 100 : 0;
  return { cost, revenue, profit, roi };
}

/**
 * Build and wire a fully interactive flip card element for display in the
 * active flips list.
 */
export function buildFlipCard(
  flip: ActiveFlip,
  renderFlips: () => void,
): HTMLElement {
  const card = buildFlipCardDOM(flip);
  wireFlipCardEvents(card, flip, renderFlips);
  return card;
}

// ─── Internals ──────────────────────────────────────────────────────────────

/** Pure DOM assembly — no event listeners. */
function buildFlipCardDOM(flip: ActiveFlip): HTMLElement {
  const card = document.createElement("div");
  card.className = "flip-card";
  card.dataset.flipId = flip.id;

  const msElapsed = Date.now() - flip.timestamp;
  const limitReady = msElapsed >= BUY_LIMIT_WINDOW_MS;
  if (limitReady) card.classList.add("limit-ready");

  const top = document.createElement("div");
  top.className = "flip-card-top";

  const nameEl = document.createElement("span");
  nameEl.className = "flip-item-name flip-item-link";
  nameEl.textContent = flip.itemName;
  nameEl.title = `View analytics for ${flip.itemName}`;

  const removeBtn = createButton({ cls: "flip-remove-btn", text: "\u2715", title: "Remove flip", ariaLabel: `Remove ${flip.itemName} flip` });
  const completeBtn = createButton({ cls: "flip-complete-btn", text: "\u2713", title: "Mark as sold", ariaLabel: `Mark ${flip.itemName} as sold` });
  const alchBtn = createButton({ cls: "flip-alch-btn", text: "\uD83D\uDD25", title: "High Alch (exit without GE tax)", ariaLabel: `High Alch ${flip.itemName}` });
  const editBtn = createButton({ cls: "flip-edit-btn", text: "\u270F\uFE0F", title: "Edit flip", ariaLabel: `Edit ${flip.itemName} flip` });

  const actions = document.createElement("div");
  actions.className = "flip-card-actions";
  actions.appendChild(completeBtn);
  actions.appendChild(alchBtn);
  actions.appendChild(editBtn);
  actions.appendChild(removeBtn);

  top.appendChild(nameEl);
  top.appendChild(actions);

  const details = document.createElement("div");
  details.className = "flip-details";

  const { cost, profit, roi } = calcFlipMetrics(flip);

  const snapLimit = flip.buySnapshot?.buyLimit;
  const liveItem = findRankedItem(flip.itemName);
  const limit = snapLimit ?? liveItem?.buyLimit;
  const limitUsed = limit != null
    ? `<span class="flip-limit" title="Quantity bought vs. 4-hour buy limit">${flip.quantity.toLocaleString("en-US")} / ${limit.toLocaleString("en-US")}</span>`
    : "";

  details.innerHTML = [
    `<span>Buy: ${formatGp(flip.buyPrice)}</span>`,
    `<span>Sell: ${formatGp(flip.targetSellPrice)}</span>`,
    `<span>Qty: ${flip.quantity.toLocaleString("en-US")}</span>`,
    limitUsed,
    `<span title="Total capital invested">Capital: ${formatGp(cost)}</span>`,
    `<span class="flip-profit${profit < 0 ? " loss" : ""}">P/L: ${formatGp(Math.round(profit))} gp</span>`,
    `<span class="flip-profit${roi < 0 ? " loss" : ""}" title="Return on investment">ROI: ${roi >= 0 ? "+" : ""}${roi.toFixed(1)}%</span>`,
    `<span class="flip-timer${limitReady ? " ready" : ""}">${formatCountdown(flip.timestamp)}</span>`,
  ].filter(Boolean).join("");

  card.appendChild(top);
  card.appendChild(details);
  return card;
}

/** Attach all event listeners to a fully-assembled flip card. */
function wireFlipCardEvents(
  card: HTMLElement,
  flip: ActiveFlip,
  renderFlips: () => void,
): void {
  const portfolio = getPortfolio();

  const nameEl = card.querySelector<HTMLElement>(".flip-item-name");
  nameEl?.addEventListener("click", () => openAnalyticsForName(flip.itemName));

  card.querySelector(".flip-remove-btn")?.addEventListener("click", () => {
    portfolio.removeFlip(flip.id);
    renderFlips();
  });

  card.querySelector(".flip-complete-btn")?.addEventListener("click", () => {
    showCompleteFlipModal(flip);
  });

  card.querySelector(".flip-alch-btn")?.addEventListener("click", () => {
    showAlchFlipModal(flip);
  });

  card.querySelector(".flip-edit-btn")?.addEventListener("click", () => showEditFlipModal(flip));
}
