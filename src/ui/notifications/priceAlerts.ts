/**
 * @module ui/priceAlerts
 * Price alert engine, buy-limit reset checks, unified notification
 * dispatcher, and native Notification permission handling.
 */

import type { RankedItem } from "../../services";
import { formatGp } from "../../services";
import { LS_LIMIT_RESET_NOTIFS, BUY_LIMIT_WINDOW_MS } from "../constants";
import { spriteUrl } from "../formatters";
import { getPortfolio } from "../state";
import { loadFavorites } from "../favouritesData";
import { showToast } from "./toasts";
import { pushNotification } from "./notifBell";

// ─── Dedup sets (session-scoped) ────────────────────────────────────────────

const firedAlerts = new Set<string>();
const firedLimitResets = new Set<string>();

// ─── Notification Permission ────────────────────────────────────────────────

/** Request native `Notification` permission if still in the default state. */
export function requestNotificationPermission(): void {
  if (typeof Notification !== "undefined" && Notification.permission === "default") {
    Notification.requestPermission().catch(() => { /* swallow if blocked */ });
  }
}

// ─── Unified Dispatcher ─────────────────────────────────────────────────────

/** Combined toast + bell log + native Notification. Single point of dispatch. */
export function notifyUser(title: string, message: string, type: "info" | "buy" | "sell" = "info", durationMs = 6000): void {
  showToast(message, type, durationMs);
  pushNotification(message, type);
  if (typeof Notification !== "undefined" && Notification.permission === "granted") {
    new Notification(title, { body: message, icon: spriteUrl(0) });
  }
}

// ─── Price Alert Engine ─────────────────────────────────────────────────────

/** Check favourites against current prices and fire alerts for target hits. */
export function checkPriceAlerts(items: RankedItem[]): void {
  const favs = loadFavorites();
  if (favs.length === 0) return;

  const priceMap = new Map<string, number>();
  for (const it of items) priceMap.set(it.name, it.price);

  for (const fav of favs) {
    const currentPrice = priceMap.get(fav.name);
    if (currentPrice == null) continue;

    if (fav.targetBuy && currentPrice <= fav.targetBuy) {
      const key = `${fav.name}|buy`;
      if (!firedAlerts.has(key)) {
        firedAlerts.add(key);
        const msg = `\uD83D\uDCC9 ${fav.name} has dropped to ${formatGp(currentPrice)} gp (target: \u2264${formatGp(fav.targetBuy)} gp)`;
        notifyUser("GE Price Alert \u2014 Buy", msg, "buy");
      }
    }

    if (fav.targetSell && currentPrice >= fav.targetSell) {
      const key = `${fav.name}|sell`;
      if (!firedAlerts.has(key)) {
        firedAlerts.add(key);
        const msg = `\uD83D\uDCC8 ${fav.name} has risen to ${formatGp(currentPrice)} gp (target: \u2265${formatGp(fav.targetSell)} gp)`;
        notifyUser("GE Price Alert \u2014 Sell", msg, "sell");
      }
    }
  }
}

// ─── Buy-Limit Reset Checks ────────────────────────────────────────────────

/** Check active flips for expired 4-hour buy-limit windows and notify. */
export function checkBuyLimitResets(): void {
  if (localStorage.getItem(LS_LIMIT_RESET_NOTIFS) === "false") return;

  const portfolio = getPortfolio();
  const flips = portfolio.getFlips();
  for (const flip of flips) {
    if (firedLimitResets.has(flip.id)) continue;

    const elapsed = Date.now() - flip.timestamp;
    if (elapsed >= BUY_LIMIT_WINDOW_MS) {
      firedLimitResets.add(flip.id);

      const msg = `\u23F0 Buy limit for ${flip.itemName} has reset \u2014 you can buy another ${flip.quantity.toLocaleString("en-US")} units.`;
      notifyUser("GE Buy Limit Reset", msg, "info", 8000);
    }
  }
}
