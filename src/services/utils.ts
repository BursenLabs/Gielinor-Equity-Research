/**
 * @module services/utils
 * Shared utility functions for service-layer code.
 */

/**
 * Split an array into sub-arrays of at most {@link size} elements.
 *
 * @param arr  - The source array.
 * @param size - Maximum chunk length.
 * @returns An array of chunks.
 */
export function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Calculate the RS3 Grand Exchange 2% sell-side tax for a given price.
 * Items priced ≤ 50 gp are exempt (returns 0).
 * Uses `Math.floor` to match the official RS3 engine rounding.
 *
 * @param price - The sale price in gp.
 * @returns The tax amount in gp.
 */
export function calculateGETax(price: number): number {
  if (price <= 50) return 0;
  return Math.floor(price * 0.02);
}

/** Standard `Accept: application/json` header for API requests. */
export const JSON_ACCEPT_HEADER: Record<string, string> = { Accept: "application/json" };

/**
 * Check whether a key is a Weird Gloop / RS Wiki metadata key (prefixed with `%`).
 */
export function isMetadataKey(key: string): boolean {
  return key.startsWith("%");
}

/**
 * Compute realised flip profit after GE tax.
 *
 * When `alched` is `true`, no GE tax is applied — profit is simply
 * `(sellPrice − buyPrice) × quantity`.
 */
export function computeFlipProfit(
  sellPrice: number,
  buyPrice: number,
  quantity: number,
  alched: boolean,
): number {
  if (alched) {
    return (sellPrice * quantity) - (buyPrice * quantity);
  }
  const taxPerItem = calculateGETax(sellPrice);
  const netSellPerItem = sellPrice - taxPerItem;
  return (netSellPerItem * quantity) - (buyPrice * quantity);
}

/**
 * Generate a v4-style UUID using `crypto.getRandomValues`.
 * Falls back to `Math.random` in environments without the Web Crypto API.
 */
export function uuid(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
