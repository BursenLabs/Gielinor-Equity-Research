/**
 * @module ui/modals/editCompletedFlipModal
 * Edit Completed Flip modal — modify buy price, quantity, or sell price of a completed flip.
 */

import type { CompletedFlip } from "../../services";
import { getPortfolio } from "../state";
import { singletonModal, buildModalHeader, buildFormFields } from "./modalBase";

const ensureEditCompletedFlipModal = singletonModal({
  backdropClass: "flip-detail-backdrop",
  modalClass: "flip-detail-modal flip-edit-modal",
  ariaLabel: "Edit completed flip",
});

/** Forward ref to renderCompletedFlips – wired in initUI. */
let _renderCompletedFlips: () => void = () => {};
/** Set the renderCompletedFlips hook (called from initUI). */
export function setRenderCompletedFlipsHook(fn: () => void): void {
  _renderCompletedFlips = fn;
}

/** Show the edit completed flip modal. */
export function showEditCompletedFlipModal(flip: CompletedFlip): void {
  const portfolio = getPortfolio();
  const { backdrop, content } = ensureEditCompletedFlipModal();
  const modal = content;
  modal.innerHTML = "";

  const header = buildModalHeader(
    `Edit: ${flip.itemName}`,
    () => backdrop.classList.remove("visible"),
  );

  const form = document.createElement("form");
  form.className = "flip-edit-form";
  form.addEventListener("submit", (e) => e.preventDefault());

  const sellLabel = flip.alched ? "High Alch Value" : "Actual Sell Price";
  const fields: { label: string; id: string; value: number; step?: string }[] = [
    { label: "Buy Price", id: "cedit-buy-price", value: flip.buyPrice },
    { label: "Quantity", id: "cedit-quantity", value: flip.quantity, step: "1" },
    { label: sellLabel, id: "cedit-sell-price", value: flip.actualSellPrice },
  ];

  buildFormFields(form, fields);

  const btnRow = document.createElement("div");
  btnRow.className = "flip-edit-actions";

  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.className = "flip-edit-save";
  saveBtn.textContent = "Save Changes";
  saveBtn.addEventListener("click", () => {
    const buyPrice = Number((modal.querySelector("#cedit-buy-price") as HTMLInputElement).value);
    const quantity = Number((modal.querySelector("#cedit-quantity") as HTMLInputElement).value);
    const actualSellPrice = Number((modal.querySelector("#cedit-sell-price") as HTMLInputElement).value);
    if (!buyPrice || buyPrice <= 0 || !quantity || quantity <= 0 || !actualSellPrice || actualSellPrice <= 0) return;
    portfolio.updateCompletedFlip(flip.id, { buyPrice, quantity, actualSellPrice });
    backdrop.classList.remove("visible");
    _renderCompletedFlips();
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.className = "flip-edit-cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => backdrop.classList.remove("visible"));

  btnRow.appendChild(saveBtn);
  btnRow.appendChild(cancelBtn);

  modal.appendChild(header);
  modal.appendChild(form);
  modal.appendChild(btnRow);
  backdrop.classList.add("visible");
}
