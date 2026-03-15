/**
 * @module ui/toasts
 * Ephemeral toast notifications with auto-dismiss.
 */

// ─── State ──────────────────────────────────────────────────────────────────

let toastContainer: HTMLElement | null = null;

function ensureToastContainer(): HTMLElement {
  if (toastContainer) return toastContainer;
  toastContainer = document.createElement("div");
  toastContainer.id = "toast-container";
  toastContainer.setAttribute("aria-live", "polite");
  toastContainer.setAttribute("aria-relevant", "additions");
  toastContainer.setAttribute("role", "status");
  document.body.appendChild(toastContainer);
  return toastContainer;
}

// ─── Public API ─────────────────────────────────────────────────────────────

/** Show a brief toast notification that auto-dismisses after `durationMs`. */
export function showToast(message: string, type: "info" | "buy" | "sell" = "info", durationMs = 6000): void {
  const container = ensureToastContainer();
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));

  setTimeout(() => {
    toast.classList.remove("show");
    toast.addEventListener("transitionend", () => toast.remove());
    setTimeout(() => toast.remove(), 500);
  }, durationMs);
}
