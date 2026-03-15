/**
 * @module ui/formatters
 * Pure formatting utilities for prices, volumes, durations, and data age.
 */

import { BUY_LIMIT_WINDOW_MS } from "./constants";

/** RS3 item sprite base URL (official Jagex endpoint). */
const SPRITE_BASE = "https://secure.runescape.com/m=itemdb_rs/obj_sprite.gif?id=";

/** Build the full sprite URL for a given item ID. */
export function spriteUrl(itemId: number): string {
  return SPRITE_BASE + itemId;
}


/** Format a trade volume with locale separators. */
export function formatVolume(vol: number): string {
  return vol.toLocaleString("en-US");
}

/** Format a data-age value (in minutes) as a human-readable string. */
export function formatDataAge(minutes: number): string {
  if (minutes <= 0) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago (stale)`;
}

/** Format a duration in milliseconds as a human-readable string. */
export function formatDuration(ms: number): string {
  const totalSec = Math.round(ms / 1000);
  if (totalSec < 60) return `${totalSec}s`;
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  return sec > 0 ? `${min}m ${sec}s` : `${min}m`;
}

/** Format the buy-limit countdown for a flip. */
export function formatCountdown(timestamp: number): string {
  const elapsed = Date.now() - timestamp;
  const remaining = BUY_LIMIT_WINDOW_MS - elapsed;

  if (remaining <= 0) return "Limit reset \u2713";

  const totalMin = Math.ceil(remaining / 60_000);
  const hours = Math.floor(totalMin / 60);
  const mins = totalMin % 60;

  if (hours > 0) return `Resets in ${hours}h ${mins}m`;
  return `Resets in ${mins}m`;
}
