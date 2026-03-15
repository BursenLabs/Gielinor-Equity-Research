/**
 * @module PortfolioService
 * Manages the user's active flip portfolio with localStorage persistence.
 *
 * Responsibilities:
 *  - CRUD operations on {@link ActiveFlip} records.
 *  - Automatic persistence to `localStorage` on every mutation.
 *  - UUID generation without external dependencies.
 */

import type { ActiveFlip, CompletedFlip, FlipSnapshot, PortfolioStats } from "./types";
import { computeFlipProfit, uuid } from "./utils";
import { computePortfolioStats } from "./portfolioAnalytics";

/** `localStorage` key for the serialised active portfolio. */
const LS_KEY = "ger:portfolio";

/** `localStorage` key for the serialised completed-flip history. */
const LS_HISTORY_KEY = "ger:portfolio-history";

/**
 * Service that tracks active GE flips and persists them across sessions.
 *
 * @example
 * ```ts
 * const portfolio = new PortfolioService();
 * portfolio.addFlip("Blue partyhat", 2_140_000_000, 1, 2_200_000_000);
 * console.log(portfolio.getFlips());
 * ```
 */
export class PortfolioService {
  /** In-memory flip store, kept in sync with localStorage. */
  private flips: ActiveFlip[] = [];

  /** In-memory completed-flip ledger, kept in sync with localStorage. */
  private completedFlips: CompletedFlip[] = [];

  constructor() {
    this.load();
    this.loadHistory();
  }

  // ─── Public API ─────────────────────────────────────────────────────

  /**
   * Return a shallow copy of all tracked flips (newest first).
   */
  getFlips(): ActiveFlip[] {
    return [...this.flips];
  }

  /**
   * Record a new flip and persist the change.
   *
   * @param itemName        - Canonical RS3 item name.
   * @param buyPrice        - Per-item buy price in gp.
   * @param quantity        - Number of items in this offer.
   * @param targetSellPrice - Per-item target sell price in gp.
   * @param buySnapshot     - Optional market snapshot at the time of purchase.
   * @returns The newly created {@link ActiveFlip}.
   */
  addFlip(
    itemName: string,
    buyPrice: number,
    quantity: number,
    targetSellPrice: number,
    buySnapshot?: FlipSnapshot,
  ): ActiveFlip {
    const flip: ActiveFlip = {
      id: uuid(),
      itemName,
      buyPrice,
      quantity,
      targetSellPrice,
      timestamp: Date.now(),
      buySnapshot,
    };
    this.flips.unshift(flip);
    this.save();
    return flip;
  }

  /**
   * Update editable fields on an active flip and persist the change.
   *
   * Only `buyPrice`, `quantity`, and `targetSellPrice` may be patched.
   *
   * @returns The updated flip, or `undefined` if the ID was not found.
   */
  updateFlip(id: string, updates: { buyPrice?: number; quantity?: number; targetSellPrice?: number }): ActiveFlip | undefined {
    const flip = this.flips.find((f) => f.id === id);
    if (!flip) return undefined;
    if (updates.buyPrice != null && updates.buyPrice > 0) flip.buyPrice = updates.buyPrice;
    if (updates.quantity != null && updates.quantity > 0) flip.quantity = Math.round(updates.quantity);
    if (updates.targetSellPrice != null && updates.targetSellPrice > 0) flip.targetSellPrice = updates.targetSellPrice;
    this.save();
    return flip;
  }

  /**
   * Remove a flip by its unique ID and persist the change.
   *
   * @returns `true` if a flip was found and removed, `false` otherwise.
   */
  removeFlip(id: string): boolean {
    const before = this.flips.length;
    this.flips = this.flips.filter((f) => f.id !== id);
    if (this.flips.length !== before) {
      this.save();
      return true;
    }
    return false;
  }

  /**
   * Mark an active flip as completed, calculate realised profit, and move it
   * to the history ledger.
   *
   * Tax is rounded DOWN per item per official wiki mechanics (exempt ≤50 gp).
   * When `alched` is `true`, no GE tax is applied — profit is simply
   * `(actualSellPrice × quantity) − (buyPrice × quantity)`.
   *
   * @param id              - Unique ID of the active flip to complete.
   * @param actualSellPrice - The per-item price the flip was actually sold at (or High Alch value when alched).
   * @param sellSnapshot    - Optional market snapshot at the time of sale.
   * @param alched          - If `true`, marks this as a High Alch exit (no GE tax).
   * @returns The completed flip record, or `undefined` if the ID was not found.
   */
  completeFlip(id: string, actualSellPrice: number, sellSnapshot?: FlipSnapshot, alched?: boolean): CompletedFlip | undefined {
    const idx = this.flips.findIndex((f) => f.id === id);
    if (idx === -1) return undefined;

    const active = this.flips[idx];
    const realizedProfit = computeFlipProfit(
      actualSellPrice, active.buyPrice, active.quantity, !!alched,
    );

    const completed: CompletedFlip = {
      ...active,
      actualSellPrice,
      completedAt: Date.now(),
      realizedProfit,
      sellSnapshot,
      ...(alched ? { alched: true } : {}),
    };

    // Move from active → history.
    this.flips.splice(idx, 1);
    this.completedFlips.unshift(completed);

    this.save();
    this.saveHistory();
    return completed;
  }

  /**
   * Return a shallow copy of all completed flips (newest first).
   */
  getCompletedFlips(): CompletedFlip[] {
    return [...this.completedFlips];
  }

  /**
   * Remove a completed flip from the history ledger (e.g. accidental completion).
   *
   * @returns `true` if a flip was found and removed, `false` otherwise.
   */
  removeCompletedFlip(id: string): boolean {
    const before = this.completedFlips.length;
    this.completedFlips = this.completedFlips.filter((f) => f.id !== id);
    if (this.completedFlips.length !== before) {
      this.saveHistory();
      return true;
    }
    return false;
  }

  /**
   * Update editable fields on a completed flip and recalculate realised profit.
   *
   * Respects the `alched` flag: alched flips skip the 2 % GE tax.
   *
   * @returns The updated completed flip, or `undefined` if the ID was not found.
   */
  updateCompletedFlip(id: string, updates: { buyPrice?: number; quantity?: number; actualSellPrice?: number }): CompletedFlip | undefined {
    const flip = this.completedFlips.find((f) => f.id === id);
    if (!flip) return undefined;
    if (updates.buyPrice != null && updates.buyPrice > 0) flip.buyPrice = updates.buyPrice;
    if (updates.quantity != null && updates.quantity > 0) flip.quantity = Math.round(updates.quantity);
    if (updates.actualSellPrice != null && updates.actualSellPrice > 0) flip.actualSellPrice = updates.actualSellPrice;
    // Recalculate realised profit with current values.
    flip.realizedProfit = computeFlipProfit(
      flip.actualSellPrice, flip.buyPrice, flip.quantity, !!flip.alched,
    );
    this.saveHistory();
    return flip;
  }

  /**
   * Aggregate statistics across the completed-flip history.
   */
  getPortfolioStats(): PortfolioStats {
    return computePortfolioStats(this.completedFlips);
  }

  // ─── Persistence ────────────────────────────────────────────────────

  /** Serialise the current flip array to localStorage. */
  private save(): void {
    persistJson(LS_KEY, this.flips, "portfolio");
  }

  /** Hydrate from localStorage on construction. */
  private load(): void {
    const parsed = loadJson<ActiveFlip[]>(LS_KEY, "portfolio");
    if (parsed) this.flips = parsed;
  }

  /** Serialise the completed-flip history to localStorage. */
  private saveHistory(): void {
    persistJson(LS_HISTORY_KEY, this.completedFlips, "history");
  }

  /** Hydrate completed-flip history from localStorage on construction. */
  private loadHistory(): void {
    const parsed = loadJson<CompletedFlip[]>(LS_HISTORY_KEY, "history");
    if (parsed) this.completedFlips = parsed;
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Safely write a JSON-serialisable value to localStorage. */
function persistJson<T>(key: string, data: T, label: string): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`[PortfolioService] Failed to persist ${label}:`, err);
  }
}

/** Safely read and parse a JSON array from localStorage. Returns `null` on failure. */
function loadJson<T>(key: string, label: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed as T : null;
  } catch (err) {
    console.warn(`[PortfolioService] Failed to load ${label}:`, err);
    return null;
  }
}
