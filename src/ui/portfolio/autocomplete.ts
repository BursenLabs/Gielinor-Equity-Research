/**
 * @module ui/autocomplete
 * Portfolio item-name autocomplete — keyboard-navigable dropdown
 * sourced from cached market data and top-20 recommendations.
 */

import { formatGp } from "../../services";
import { getLatestTopItems, getAllCachedItems, getSuppressAutocomplete } from "../state";
import { getEls } from "../domRefs";

// ─── Autocomplete state ─────────────────────────────────────────────────────

let acHighlight = -1;

/** Wire keyboard navigation and click listeners to the autocomplete dropdown. */
export function bindItemAutocomplete(): void {
  const els = getEls();
  const input = els.flipItemName;
  const list = els.flipSuggestions;

  input.addEventListener("focus", () => updateSuggestions());
  input.addEventListener("input", () => updateSuggestions());

  input.addEventListener("keydown", (e) => {
    if (!list.classList.contains("open")) return;
    const items = list.querySelectorAll<HTMLElement>(".autocomplete-item");
    if (items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      acHighlight = Math.min(acHighlight + 1, items.length - 1);
      highlightSuggestion(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      acHighlight = Math.max(acHighlight - 1, 0);
      highlightSuggestion(items);
    } else if (e.key === "Escape") {
      closeItemSuggestions();
    }
  });

  document.addEventListener("mousedown", (e) => {
    if (!list.contains(e.target as Node) && e.target !== input) {
      closeItemSuggestions();
    }
  });
}

/** Close the autocomplete dropdown and reset keyboard highlight. */
export function closeItemSuggestions(): void {
  const els = getEls();
  els.flipSuggestions.classList.remove("open");
  els.flipSuggestions.innerHTML = "";
  acHighlight = -1;
}

// ─── Private helpers ────────────────────────────────────────────────────────

function updateSuggestions(): void {
  if (getSuppressAutocomplete()) return;

  const els = getEls();
  const input = els.flipItemName;
  const list = els.flipSuggestions;
  const query = input.value.trim().toLowerCase();
  const latestTopItems = getLatestTopItems();
  const allCachedItems = getAllCachedItems();

  list.innerHTML = "";
  acHighlight = -1;

  const recommendedNames = new Set(latestTopItems.map((i) => i.name));

  if (query.length === 0) {
    if (latestTopItems.length > 0) {
      appendSectionHeader(list, "Recommended (filtered)");
      for (const item of latestTopItems) {
        appendSuggestionRow(list, item.name, item.price);
      }
    }

    const others = allCachedItems.filter((i) => !recommendedNames.has(i.name));
    if (others.length > 0) {
      appendSectionHeader(list, "All items");
      for (const item of others) {
        appendSuggestionRow(list, item.name, item.price);
      }
    }

    if (latestTopItems.length === 0 && allCachedItems.length === 0) {
      appendEmptyHint(list, "No market data loaded");
    }
  } else {
    const recMatches: { name: string; price: number }[] = [];
    const otherMatches: { name: string; price: number }[] = [];

    for (const item of allCachedItems) {
      if (item.name.toLowerCase().includes(query)) {
        if (recommendedNames.has(item.name)) {
          recMatches.push(item);
        } else {
          otherMatches.push(item);
        }
      }
    }

    if (recMatches.length === 0 && otherMatches.length === 0) {
      appendEmptyHint(list, "No matching items");
    } else {
      if (recMatches.length > 0) {
        appendSectionHeader(list, "Recommended");
        for (const item of recMatches) appendSuggestionRow(list, item.name, item.price);
      }
      if (otherMatches.length > 0) {
        if (recMatches.length > 0) appendSectionHeader(list, "All items");
        for (const item of otherMatches) appendSuggestionRow(list, item.name, item.price);
      }
    }
  }

  list.classList.add("open");
}

function appendSectionHeader(container: HTMLElement, label: string): void {
  const hdr = document.createElement("div");
  hdr.className = "autocomplete-section";
  hdr.textContent = label;
  container.appendChild(hdr);
}

function appendSuggestionRow(container: HTMLElement, name: string, price: number): void {
  const row = document.createElement("div");
  row.className = "autocomplete-item";

  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;

  const priceSpan = document.createElement("span");
  priceSpan.className = "autocomplete-item-price";
  priceSpan.textContent = `${formatGp(price)} gp`;

  row.appendChild(nameSpan);
  row.appendChild(priceSpan);

  row.addEventListener("mousedown", (e) => {
    e.preventDefault();
    selectSuggestion(name, price);
  });

  container.appendChild(row);
}

function appendEmptyHint(container: HTMLElement, text: string): void {
  const el = document.createElement("div");
  el.className = "autocomplete-empty";
  el.textContent = text;
  container.appendChild(el);
}

function highlightSuggestion(items: NodeListOf<HTMLElement>): void {
  items.forEach((el, i) => el.classList.toggle("highlighted", i === acHighlight));
  if (acHighlight >= 0 && acHighlight < items.length) {
    items[acHighlight].scrollIntoView({ block: "nearest" });
  }
}

function selectSuggestion(name: string, price: number): void {
  const els = getEls();
  els.flipItemName.value = name;
  els.flipBuyPrice.value = String(price);
  closeItemSuggestions();
  els.flipQuantity.focus();
}
