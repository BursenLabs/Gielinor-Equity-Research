/**
 * @module ui/modals/completeFlipModal
 * Modal for completing (selling) or alching an active flip.
 * Replaces browser prompt()/confirm() which are blocked in the Alt1 overlay.
 */

import type { ActiveFlip } from "../../services";
import { calculateGETax, formatGp } from "../../services";
import { getPortfolio } from "../state";
import { buildSnapshot, findRankedItem } from "../portfolio/snapshots";
import { singletonModal, buildModalHeader } from "./modalBase";

// ─── Singleton shells ───────────────────────────────────────────────────────

const ensureCompleteModal = singletonModal({
  backdropClass: "flip-detail-backdrop",
  modalClass: "flip-detail-modal complete-flip-modal",
  ariaLabel: "Complete flip",
});

const ensureAlchModal = singletonModal({
  backdropClass: "flip-detail-backdrop",
  modalClass: "flip-detail-modal complete-flip-modal",
  ariaLabel: "High Alch flip",
});

// ─── Forward refs (wired from initUI) ───────────────────────────────────────

let _renderFlips: () => void = () => {};
let _renderCompletedFlips: () => void = () => {};

/** Set renderFlips hook — called from initUI. */
export function setCompleteFlipRenderHooks(
  renderFlips: () => void,
  renderCompleted: () => void,
): void {
  _renderFlips = renderFlips;
  _renderCompletedFlips = renderCompleted;
}

// ─── Sell completion modal ──────────────────────────────────────────────────

/** Show the modal to enter a sell price and complete a flip. */
export function showCompleteFlipModal(flip: ActiveFlip): void {
  const portfolio = getPortfolio();
  const { backdrop, content } = ensureCompleteModal();
  content.innerHTML = "";

  const hide = () => backdrop.classList.remove("visible");
  const header = buildModalHeader(`Complete: ${flip.itemName}`, hide);

  const form = document.createElement("form");
  form.className = "flip-edit-form";
  form.addEventListener("submit", (e) => e.preventDefault());

  // Sell price field
  const field = document.createElement("div");
  field.className = "flip-edit-field";
  const label = document.createElement("label");
  label.setAttribute("for", "complete-sell-price");
  label.textContent = "Actual Sell Price (per item)";
  const input = document.createElement("input");
  input.type = "number";
  input.id = "complete-sell-price";
  input.min = "1";
  input.value = String(flip.targetSellPrice);
  field.appendChild(label);
  field.appendChild(input);
  form.appendChild(field);

  // Live profit preview
  const preview = document.createElement("div");
  preview.className = "complete-flip-preview";
  const updatePreview = () => {
    const sellPrice = Number(input.value);
    if (!sellPrice || sellPrice <= 0) {
      preview.innerHTML = "";
      return;
    }
    const tax = calculateGETax(sellPrice);
    const revenue = (sellPrice - tax) * flip.quantity;
    const cost = flip.buyPrice * flip.quantity;
    const profit = revenue - cost;
    const cls = profit >= 0 ? "win" : "loss";
    preview.innerHTML =
      `<span class="complete-flip-preview-label">Est. Profit:</span> ` +
      `<span class="flip-detail-value ${cls}">${profit >= 0 ? "+" : ""}${formatGp(Math.round(profit))} gp</span>` +
      `<br><span class="complete-flip-preview-label">GE Tax:</span> ` +
      `<span class="complete-flip-preview-tax">${formatGp(tax)} gp/ea</span>`;
  };
  input.addEventListener("input", updatePreview);
  updatePreview();
  form.appendChild(preview);

  // Buttons
  const btnRow = document.createElement("div");
  btnRow.className = "flip-edit-actions";

  const confirmBtn = document.createElement("button");
  confirmBtn.type = "button";
  confirmBtn.className = "flip-edit-save";
  confirmBtn.textContent = "Complete Flip";
  confirmBtn.addEventListener("click", () => {
    const price = Number(input.value);
    if (!price || price <= 0) return;
    const ranked = findRankedItem(flip.itemName);
    const sellSnap = ranked ? buildSnapshot(ranked) : undefined;
    portfolio.completeFlip(flip.id, price, sellSnap);
    hide();
    _renderFlips();
    _renderCompletedFlips();
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.className = "flip-edit-cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", hide);

  btnRow.appendChild(confirmBtn);
  btnRow.appendChild(cancelBtn);

  content.appendChild(header);
  content.appendChild(form);
  content.appendChild(btnRow);
  backdrop.classList.add("visible");

  // Auto-focus the input after the modal is visible
  input.focus();
  input.select();
}

// ─── Alch exit modal ────────────────────────────────────────────────────────

/** Show the modal to confirm or enter an alch price and complete via High Alchemy. */
export function showAlchFlipModal(flip: ActiveFlip): void {
  const portfolio = getPortfolio();
  const ranked = findRankedItem(flip.itemName);
  const alchVal = (typeof ranked?.highAlch === "number" && ranked.highAlch > 0)
    ? ranked.highAlch
    : null;

  const { backdrop, content } = ensureAlchModal();
  content.innerHTML = "";

  const hide = () => backdrop.classList.remove("visible");
  const header = buildModalHeader(`High Alch: ${flip.itemName}`, hide);

  const form = document.createElement("form");
  form.className = "flip-edit-form";
  form.addEventListener("submit", (e) => e.preventDefault());

  // Alch price field (pre-filled if known, or empty for manual entry)
  const field = document.createElement("div");
  field.className = "flip-edit-field";
  const label = document.createElement("label");
  label.setAttribute("for", "alch-price-input");
  label.textContent = alchVal
    ? "High Alch Value (per item)"
    : "High Alch value unknown — enter manually";
  const input = document.createElement("input");
  input.type = "number";
  input.id = "alch-price-input";
  input.min = "1";
  if (alchVal) input.value = String(alchVal);
  field.appendChild(label);
  field.appendChild(input);
  form.appendChild(field);

  // Live profit preview (no GE tax for alch)
  const preview = document.createElement("div");
  preview.className = "complete-flip-preview";
  const updatePreview = () => {
    const price = Number(input.value);
    if (!price || price <= 0) {
      preview.innerHTML = "";
      return;
    }
    const totalRevenue = price * flip.quantity;
    const totalCost = flip.buyPrice * flip.quantity;
    const profit = totalRevenue - totalCost;
    const cls = profit >= 0 ? "win" : "loss";
    preview.innerHTML =
      `<span class="complete-flip-preview-label">Est. Profit:</span> ` +
      `<span class="flip-detail-value ${cls}">${profit >= 0 ? "+" : ""}${formatGp(Math.round(profit))} gp</span>` +
      `<br><span class="complete-flip-preview-label">Qty:</span> ` +
      `<span>${flip.quantity.toLocaleString("en-US")}</span>` +
      `<br><span class="complete-flip-preview-label">No GE tax applied</span>`;
  };
  input.addEventListener("input", updatePreview);
  updatePreview();
  form.appendChild(preview);

  // Buttons
  const btnRow = document.createElement("div");
  btnRow.className = "flip-edit-actions";

  const confirmBtn = document.createElement("button");
  confirmBtn.type = "button";
  confirmBtn.className = "flip-edit-save";
  confirmBtn.textContent = "\uD83D\uDD25 Alch & Complete";
  confirmBtn.addEventListener("click", () => {
    const price = Number(input.value);
    if (!price || price <= 0) return;
    const sellSnap = ranked ? buildSnapshot(ranked) : undefined;
    portfolio.completeFlip(flip.id, price, sellSnap, true);
    hide();
    _renderFlips();
    _renderCompletedFlips();
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.className = "flip-edit-cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", hide);

  btnRow.appendChild(confirmBtn);
  btnRow.appendChild(cancelBtn);

  content.appendChild(header);
  content.appendChild(form);
  content.appendChild(btnRow);
  backdrop.classList.add("visible");

  input.focus();
  input.select();
}
