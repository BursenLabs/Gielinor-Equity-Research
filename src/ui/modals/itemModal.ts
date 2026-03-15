/**
 * @module ui/modals/itemModal
 * Item Detail modal — quick-view with badges, detail rows, and price alerts.
 */

import type { RankedItem } from "../../services";
import { formatGp } from "../../services";
import { buildHeaderBadgesHtml } from "../card/badgeBuilder";
import { buildDetailGroupsHtml } from "../card/detailBuilder";
import { wireAlertInputs, buildItemActionButtons } from "../card/actionBuilder";
import { singletonModal, buildSpriteImg, buildAlertInputsHtml } from "./modalBase";

const ensureItemModal = singletonModal({
  backdropClass: "item-modal-backdrop",
  modalClass: "item-modal",
  ariaLabel: "Item details",
  onClose: () => hideItemModal(),
});

/** Show the item detail modal for the given ranked item. */
export function showItemModal(item: RankedItem): void {
  const { backdrop, content } = ensureItemModal();
  content.innerHTML = "";

  // ── Header ──
  const mHeader = document.createElement("div");
  mHeader.className = "item-modal-header";

  const img = buildSpriteImg(item.itemId, item.name, [48, 42]);

  const nameEl = document.createElement("span");
  nameEl.className = "item-modal-name";
  nameEl.textContent = item.name;

  const priceEl = document.createElement("span");
  priceEl.className = "item-price";
  priceEl.textContent = `${formatGp(item.price)} gp`;

  mHeader.appendChild(img);
  mHeader.appendChild(nameEl);
  mHeader.appendChild(priceEl);

  const [modalFavBtn, modalAddBtn, modalWikiLink, modalGeLink] =
    buildItemActionButtons(item, { onClose: hideItemModal });
  mHeader.appendChild(modalFavBtn);
  mHeader.appendChild(modalAddBtn);
  mHeader.appendChild(modalWikiLink);
  mHeader.appendChild(modalGeLink);

  const closeBtn = document.createElement("button");
  closeBtn.className = "item-modal-close";
  closeBtn.textContent = "\u2715";
  closeBtn.setAttribute("aria-label", "Close item details");
  closeBtn.addEventListener("click", hideItemModal);
  mHeader.appendChild(closeBtn);

  content.appendChild(mHeader);

  // ── Body ──
  const badgesHtml = buildHeaderBadgesHtml(item);

  const rows = buildDetailGroupsHtml(item, { showHighAlch: false, showPredictive: false });

  const mBody = document.createElement("div");
  mBody.className = "item-modal-body";
  mBody.innerHTML =
    `<div class="item-modal-badges">${badgesHtml}</div>` +
    `<div class="item-modal-details">${rows}</div>` +
    buildAlertInputsHtml("modal");

  content.appendChild(mBody);

  wireAlertInputs(mBody, item.name, {
    buySelector: "#modal-alert-buy",
    sellSelector: "#modal-alert-sell",
    onSave: () => {
      const favBtn = content.querySelector(".modal-fav-btn");
      if (favBtn) favBtn.textContent = "\u2605";
    },
  });

  backdrop.classList.add("visible");
}

/** Hide the item detail modal. */
export function hideItemModal(): void {
  ensureItemModal().backdrop.classList.remove("visible");
}
