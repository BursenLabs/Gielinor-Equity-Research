/**
 * @module ui/modals/modalBase
 * Shared modal scaffold — backdrop, inner container, ARIA, close-on-click, Escape key.
 */

import { spriteUrl } from "../formatters";

/** Options for creating a standard modal backdrop + content shell. */
export interface ModalShellOptions {
  /** CSS class(es) for the backdrop overlay. */
  backdropClass: string;
  /** CSS class(es) for the inner modal container. */
  modalClass: string;
  /** Accessible label for the dialog. */
  ariaLabel: string;
  /** Custom close action. Defaults to removing the "visible" class from the backdrop. */
  onClose?: () => void;
  /**
   * Optional gate for backdrop clicks. Return `true` to suppress the default
   * close action (e.g. while the user is dragging an interactive chart).
   */
  shouldPreventClose?: () => boolean;
  /** When true, trap Tab/Shift-Tab focus inside the modal content. */
  trapFocus?: boolean;
}

/** Result of createModalShell — the backdrop and the inner content container. */
export interface ModalShell {
  backdrop: HTMLElement;
  content: HTMLElement;
}

/**
 * Create a standard modal backdrop with an inner container, ARIA attributes,
 * close-on-backdrop-click, and Escape key dismissal.
 */
export function createModalShell(opts: ModalShellOptions): ModalShell {
  const backdrop = document.createElement("div");
  backdrop.className = opts.backdropClass;

  /** Element that had focus before the modal opened; restored on close. */
  let previousFocus: HTMLElement | null = null;

  const restoreFocus = () => {
    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
      previousFocus = null;
    }
  };

  const baseHide = opts.onClose ?? (() => backdrop.classList.remove("visible"));
  const hide = () => { baseHide(); restoreFocus(); };

  // Capture focus whenever the modal becomes visible.
  const observer = new MutationObserver(() => {
    if (backdrop.classList.contains("visible")) {
      previousFocus = document.activeElement as HTMLElement | null;
    }
  });
  observer.observe(backdrop, { attributes: true, attributeFilter: ["class"] });

  backdrop.addEventListener("click", (e) => {
    if (e.target !== backdrop) return;
    if (opts.shouldPreventClose?.()) return;
    hide();
  });

  const content = document.createElement("div");
  content.className = opts.modalClass;
  content.setAttribute("role", "dialog");
  content.setAttribute("aria-modal", "true");
  content.setAttribute("aria-label", opts.ariaLabel);

  backdrop.appendChild(content);
  document.body.appendChild(backdrop);

  document.addEventListener("keydown", (e) => {
    if (!backdrop.classList.contains("visible")) return;
    if (e.key === "Escape") {
      hide();
      return;
    }
    if (opts.trapFocus && e.key === "Tab") {
      const focusable = content.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
  });

  return { backdrop, content };
}

/**
 * Create a lazily-initialised singleton modal.
 * Returns a function that always returns the same {@link ModalShell}
 * (created on first call, cached thereafter).
 */
export function singletonModal(opts: ModalShellOptions): () => ModalShell {
  let shell: ModalShell | null = null;
  return () => {
    if (!shell) shell = createModalShell(opts);
    return shell;
  };
}

/**
 * Build a standard modal header with title text and a close button.
 *
 * @param titleText - Text displayed in the header.
 * @param onClose   - Callback fired when the close button is clicked.
 * @param opts      - Optional overrides for CSS class names and ARIA label.
 */
export function buildModalHeader(
  titleText: string,
  onClose: () => void,
  opts?: { headerClass?: string; titleClass?: string; closeClass?: string; ariaLabel?: string },
): HTMLElement {
  const hc = opts?.headerClass ?? "flip-detail-header";
  const tc = opts?.titleClass  ?? "flip-detail-title";
  const cc = opts?.closeClass  ?? "flip-detail-close";

  const header = document.createElement("div");
  header.className = hc;

  const title = document.createElement("span");
  title.className = tc;
  title.textContent = titleText;

  const closeBtn = document.createElement("button");
  closeBtn.className = cc;
  closeBtn.type = "button";
  closeBtn.textContent = "\u2715";
  closeBtn.title = "Close (Esc)";
  if (opts?.ariaLabel) closeBtn.setAttribute("aria-label", opts.ariaLabel);
  closeBtn.addEventListener("click", onClose);

  header.appendChild(title);
  header.appendChild(closeBtn);
  return header;
}

/**
 * Build labelled number-input fields and append them to a form.
 *
 * @param form   - The `<form>` element to append fields to.
 * @param fields - Array of field descriptors (`label`, `id`, `value`, optional `step`).
 */
export function buildFormFields(
  form: HTMLFormElement,
  fields: { label: string; id: string; value: number; step?: string }[],
): void {
  for (const f of fields) {
    const group = document.createElement("div");
    group.className = "flip-edit-field";

    const lbl = document.createElement("label");
    lbl.setAttribute("for", f.id);
    lbl.textContent = f.label;

    const input = document.createElement("input");
    input.type = "number";
    input.id = f.id;
    input.min = "1";
    if (f.step) input.step = f.step;
    input.value = String(f.value);

    group.appendChild(lbl);
    group.appendChild(input);
    form.appendChild(group);
  }
}

/**
 * Create a sprite `<img>` element for a modal/card header.
 *
 * @param itemId - RS3 item ID for the sprite URL.
 * @param name   - Alt text and error-fallback label.
 * @param size   - `[width, height]` in px. Defaults to `[36, 32]`.
 */
export function buildSpriteImg(
  itemId: number,
  name: string,
  size: [number, number] = [36, 32],
): HTMLImageElement {
  const img = document.createElement("img");
  img.className = "item-sprite";
  img.src = spriteUrl(itemId);
  img.alt = name;
  img.width = size[0];
  img.height = size[1];
  img.loading = "lazy";
  img.onerror = () => { img.style.display = "none"; };
  return img;
}

/**
 * Build the HTML for a "Price Alerts" form section used in modals.
 *
 * @param idPrefix - Prefix for the input element IDs (e.g. `"modal"` → `#modal-alert-buy`).
 */
export function buildAlertInputsHtml(idPrefix: string): string {
  return (
    `<div class="alert-inputs">` +
      `<h4 class="alert-inputs-title">\uD83D\uDD14 Price Alerts</h4>` +
      `<div class="alert-row">` +
        `<label for="${idPrefix}-alert-buy">Alert if drops below</label>` +
        `<input id="${idPrefix}-alert-buy" type="number" min="0" placeholder="Buy target (gp)" />` +
      `</div>` +
      `<div class="alert-row">` +
        `<label for="${idPrefix}-alert-sell">Alert if rises above</label>` +
        `<input id="${idPrefix}-alert-sell" type="number" min="0" placeholder="Sell target (gp)" />` +
      `</div>` +
    `</div>`
  );
}
