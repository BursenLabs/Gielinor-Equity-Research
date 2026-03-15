/**
 * @module ui/disclaimer
 * Disclaimer overlay binding and show logic.
 */

import { LS_DISCLAIMER_ACK } from "./constants";

/**
 * Wire the disclaimer overlay's Acknowledge button and persist checkbox.
 */
export function bindDisclaimer(): void {
  const ackBtn = document.getElementById("disclaimer-ack-btn");
  const persistCheck = document.getElementById("disclaimer-persist-check") as HTMLInputElement | null;
  const overlay = document.getElementById("disclaimer-overlay");
  if (!overlay || !ackBtn) return;

  ackBtn.addEventListener("click", () => {
    if (persistCheck?.checked) {
      localStorage.setItem(LS_DISCLAIMER_ACK, "1");
    }
    overlay.classList.add("hidden");
  });
}

/**
 * Show the disclaimer modal (if not previously acknowledged) and return a
 * Promise that resolves once the user clicks "I Understand".
 */
export function showDisclaimer(): Promise<void> {
  if (localStorage.getItem(LS_DISCLAIMER_ACK)) return Promise.resolve();

  const overlay = document.getElementById("disclaimer-overlay");
  if (!overlay) return Promise.resolve();

  overlay.classList.remove("hidden");

  return new Promise<void>((resolve) => {
    const ackBtn = document.getElementById("disclaimer-ack-btn");
    if (!ackBtn) { resolve(); return; }
    ackBtn.addEventListener("click", () => resolve(), { once: true });
  });
}
