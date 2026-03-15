/**
 * @module ui/modals/editFlipModal
 * Edit Flip modal — modify buy price, quantity, or target sell price of an active flip.
 */

import type { ActiveFlip } from "../../services";
import { getPortfolio } from "../state";
import { singletonModal, buildModalHeader, buildFormFields } from "./modalBase";

const ensureEditFlipModal = singletonModal({
  backdropClass: "flip-detail-backdrop",
  modalClass: "flip-detail-modal flip-edit-modal",
  ariaLabel: "Edit flip",
});

/** Forward ref to renderFlips – wired in initUI. */
let _renderFlips: () => void = () => {};
/** Set the renderFlips hook (called from initUI). */
export function setRenderFlipsHook(fn: () => void): void {
  _renderFlips = fn;
}

/** Show the edit flip modal for an active flip. */
export function showEditFlipModal(flip: ActiveFlip): void {
  const portfolio = getPortfolio();
  const { backdrop, content } = ensureEditFlipModal();
  const modal = content;
  modal.innerHTML = "";

  const header = buildModalHeader(
    `Edit: ${flip.itemName}`,
    () => backdrop.classList.remove("visible"),
  );

  const form = document.createElement("form");
  form.className = "flip-edit-form";
  form.addEventListener("submit", (e) => e.preventDefault());

  const fields: { label: string; id: string; value: number; step?: string }[] = [
    { label: "Buy Price", id: "edit-buy-price", value: flip.buyPrice },
    { label: "Quantity", id: "edit-quantity", value: flip.quantity, step: "1" },
    { label: "Target Sell Price", id: "edit-sell-price", value: flip.targetSellPrice },
  ];

  buildFormFields(form, fields);

  const btnRow = document.createElement("div");
  btnRow.className = "flip-edit-actions";

  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.className = "flip-edit-save";
  saveBtn.textContent = "Save Changes";
  saveBtn.addEventListener("click", () => {
    const buyPrice = Number((modal.querySelector("#edit-buy-price") as HTMLInputElement).value);
    const quantity = Number((modal.querySelector("#edit-quantity") as HTMLInputElement).value);
    const targetSellPrice = Number((modal.querySelector("#edit-sell-price") as HTMLInputElement).value);
    if (!buyPrice || buyPrice <= 0 || !quantity || quantity <= 0 || !targetSellPrice || targetSellPrice <= 0) return;
    portfolio.updateFlip(flip.id, { buyPrice, quantity, targetSellPrice });
    backdrop.classList.remove("visible");
    _renderFlips();
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
