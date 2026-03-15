/**
 * @module ui/favouritesData
 * Favourites persistence — load, save, toggle, and alert threshold helpers.
 */

import type { FavoriteItem } from "../services";
import { LS_FAVORITES } from "./constants";

// Forward declaration — will be set by favourites module to avoid circular dep.
let _renderFavorites: (() => void) | null = null;

/** Register the render callback (called from initUI). */
export function setRenderFavoritesHook(fn: () => void): void { _renderFavorites = fn; }

/** Load the persisted favourites list, auto-migrating from legacy format. */
export function loadFavorites(): FavoriteItem[] {
  try {
    const raw = localStorage.getItem(LS_FAVORITES);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    if (parsed.length > 0 && typeof parsed[0] === "string") {
      const migrated: FavoriteItem[] = (parsed as string[]).map((name) => ({ name }));
      localStorage.setItem(LS_FAVORITES, JSON.stringify(migrated));
      return migrated;
    }

    return parsed as FavoriteItem[];
  } catch {
    return [];
  }
}

/** Persist the favourites list. */
export function saveFavorites(favs: FavoriteItem[]): void {
  localStorage.setItem(LS_FAVORITES, JSON.stringify(favs));
}

/** Return the Set of favourited item names from localStorage. */
export function getFavorites(): Set<string> {
  return new Set(loadFavorites().map((f) => f.name));
}

/** Toggle an item's favourite status and persist the result. Returns the new state. */
export function toggleFavorite(name: string): boolean {
  const favs = loadFavorites();
  const idx = favs.findIndex((f) => f.name === name);
  if (idx >= 0) {
    favs.splice(idx, 1);
    saveFavorites(favs);
    _renderFavorites?.();
    return false;
  }
  favs.push({ name });
  saveFavorites(favs);
  _renderFavorites?.();
  return true;
}

/** Read the alert thresholds for a specific favourited item. */
export function getFavoriteAlerts(name: string): FavoriteItem | undefined {
  return loadFavorites().find((f) => f.name === name);
}

/** Update the price-alert thresholds for a favourited item. */
export function setFavoriteAlerts(name: string, targetBuy?: number, targetSell?: number): void {
  const favs = loadFavorites();
  let entry = favs.find((f) => f.name === name);
  if (!entry) {
    entry = { name };
    favs.push(entry);
  }
  entry.targetBuy = targetBuy;
  entry.targetSell = targetSell;
  saveFavorites(favs);
}
