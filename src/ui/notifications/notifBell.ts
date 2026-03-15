/**
 * @module ui/notifBell
 * Notification bell icon with badge counter and dropdown log panel.
 */

import { getEls } from "../domRefs";

// ─── State ──────────────────────────────────────────────────────────────────

interface NotifEntry {
  message: string;
  type: "info" | "buy" | "sell";
  timestamp: number;
}

const notifLog: NotifEntry[] = [];
let notifUnseenCount = 0;
let notifPanel: HTMLElement | null = null;

// ─── Public API ─────────────────────────────────────────────────────────────

/** Append a notification entry and bump the unseen badge count. */
export function pushNotification(message: string, type: "info" | "buy" | "sell"): void {
  notifLog.push({ message, type, timestamp: Date.now() });
  notifUnseenCount++;
  updateNotifBadge();
}

/** Wire the bell button click and outside-click-to-close behaviour. */
export function bindNotifBell(): void {
  getEls().notifBellBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleNotifPanel();
  });
  document.addEventListener("click", closeNotifPanelOnOutsideClick);
}

// ─── Internal helpers ───────────────────────────────────────────────────────

function updateNotifBadge(): void {
  const badge = getEls().notifBellBadge;
  if (notifUnseenCount > 0) {
    badge.textContent = notifUnseenCount > 99 ? "99+" : String(notifUnseenCount);
    badge.style.display = "";
  } else {
    badge.style.display = "none";
  }
}

function ensureNotifPanel(): HTMLElement {
  if (notifPanel) return notifPanel;
  notifPanel = document.createElement("div");
  notifPanel.className = "notif-panel";
  notifPanel.style.display = "none";
  notifPanel.addEventListener("click", (e) => e.stopPropagation());
  getEls().notifBellBtn.appendChild(notifPanel);
  return notifPanel;
}

function renderNotifPanel(): void {
  const panel = ensureNotifPanel();
  if (notifLog.length === 0) {
    panel.innerHTML = '<p class="notif-panel-empty">No notifications yet.</p>';
    return;
  }
  const entries = notifLog.slice(-50).reverse();
  const rows = entries.map((n) => {
    const time = new Date(n.timestamp);
    const ts = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return `<div class="notif-panel-item notif-panel-${n.type}"><span class="notif-panel-time">${ts}</span><span class="notif-panel-msg">${n.message}</span></div>`;
  }).join("");
  panel.innerHTML = `<div class="notif-panel-header"><strong>Notifications</strong><button class="notif-panel-clear" type="button" title="Clear all">Clear</button></div>${rows}`;
  panel.querySelector(".notif-panel-clear")?.addEventListener("click", () => {
    notifLog.length = 0;
    notifUnseenCount = 0;
    updateNotifBadge();
    renderNotifPanel();
  });
}

function toggleNotifPanel(): void {
  const panel = ensureNotifPanel();
  const isOpen = panel.style.display !== "none";
  if (isOpen) {
    panel.style.display = "none";
    return;
  }
  notifUnseenCount = 0;
  updateNotifBadge();
  renderNotifPanel();
  panel.style.display = "";
}

function closeNotifPanelOnOutsideClick(e: MouseEvent): void {
  if (!notifPanel || notifPanel.style.display === "none") return;
  if (getEls().notifBellBtn.contains(e.target as Node)) return;
  if (notifPanel.contains(e.target as Node)) return;
  notifPanel.style.display = "none";
}
