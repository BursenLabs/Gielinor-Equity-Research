/**
 * @module HistoryCacheService
 * IndexedDB CRUD for the `price-history` store.
 *
 * Extracted from {@link CacheService} to satisfy SRP — this class owns
 * all history reads and bulk-history writes while {@link CacheService}
 * retains DB lifecycle, price CRUD, staleness, and export/import.
 */

import type {
  HistoricalPriceRecord,
  WeirdGloopHistoryEntry,
} from "./types";

/** Name of the IndexedDB object store for price history rows. */
const HISTORY_STORE = "price-history";

/**
 * History-specific CRUD for the GE price-history IndexedDB store.
 *
 * Receives a lazy `IDBDatabase` accessor so it can share the same database
 * handle that {@link CacheService} opens and manages.
 */
export class HistoryCacheService {
  private readonly getDb: () => IDBDatabase;

  /**
   * @param dbAccessor - Callback that returns the **already-opened**
   *                     `IDBDatabase` handle (typically `cache.getDb()`).
   */
  constructor(dbAccessor: () => IDBDatabase) {
    this.getDb = dbAccessor;
  }

  /**
   * Bulk-insert 30+ days of historical snapshots into the `price-history`
   * store.  Uses a single read-write transaction for atomicity and performance.
   *
   * Each entry is keyed by the compound `[name, timestamp]` pair, so duplicate
   * timestamps are silently overwritten (idempotent).
   *
   * @param historyMap - Map of item name → array of daily history entries as
   *                     returned by {@link WeirdGloopService.fetchHistoricalPrices}.
   * @returns The number of history rows written.
   */
  async bulkInsertHistory(
    historyMap: Map<string, WeirdGloopHistoryEntry[]>,
  ): Promise<number> {
    const db = this.getDb();

    return new Promise<number>((resolve, reject) => {
      const tx = db.transaction(HISTORY_STORE, "readwrite");
      const store = tx.objectStore(HISTORY_STORE);
      let count = 0;

      for (const [name, entries] of historyMap) {
        for (const entry of entries) {
          const day = new Date(entry.timestamp).toISOString().slice(0, 10);
          const record: HistoricalPriceRecord = {
            id: 0,
            name,
            day,
            price: entry.price,
            volume: entry.volume ?? 0,
            timestamp: new Date(entry.timestamp).toISOString(),
            fetchedAt: Date.now(),
          };
          const req = store.put(record);
          req.onsuccess = () => { count++; };
        }
      }

      tx.oncomplete = () => {
        console.log(`[HistoryCacheService] Bulk-inserted ${count} historical rows.`);
        resolve(count);
      };
      tx.onerror = () => {
        console.error("[HistoryCacheService] Bulk history insert failed:", tx.error);
        reject(tx.error);
      };
    });
  }

  /**
   * Retrieve historical snapshots for a single item.
   *
   * With the v3 intraday schema multiple records per day may exist.
   * Results are sorted oldest-first by ISO timestamp.
   *
   * @param itemName - Canonical RS3 item name.
   * @param days     - Number of past calendar days to include.
   * @returns An array of {@link HistoricalPriceRecord} within the window,
   *          sorted oldest-first.
   */
  async getHistoricalRecords(
    itemName: string,
    days: number,
  ): Promise<HistoricalPriceRecord[]> {
    const db = this.getDb();
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    const cutoffDay = cutoff.toISOString().slice(0, 10);

    return new Promise<HistoricalPriceRecord[]>((resolve, reject) => {
      const tx = db.transaction(HISTORY_STORE, "readonly");
      const store = tx.objectStore(HISTORY_STORE);
      const index = store.index("name");
      const req = index.getAll(IDBKeyRange.only(itemName));

      req.onsuccess = () => {
        const all = req.result as HistoricalPriceRecord[];
        const filtered = all
          .filter((r) => r.day >= cutoffDay)
          .sort((a, b) => (a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0));
        resolve(filtered);
      };
      req.onerror = () => reject(req.error);
    });
  }

  /**
   * Retrieve intraday records for a single item within a recent time window.
   *
   * @param itemName - Canonical RS3 item name.
   * @param windowMs - Lookback window in milliseconds (e.g. `4 * 3_600_000`).
   * @returns Records within the window, sorted oldest-first.
   */
  async getIntradayRecords(
    itemName: string,
    windowMs: number,
  ): Promise<HistoricalPriceRecord[]> {
    const db = this.getDb();
    const cutoffTs = new Date(Date.now() - windowMs).toISOString();

    return new Promise<HistoricalPriceRecord[]>((resolve, reject) => {
      const tx = db.transaction(HISTORY_STORE, "readonly");
      const store = tx.objectStore(HISTORY_STORE);
      const index = store.index("name");
      const req = index.getAll(IDBKeyRange.only(itemName));

      req.onsuccess = () => {
        const all = req.result as HistoricalPriceRecord[];
        const filtered = all
          .filter((r) => r.timestamp >= cutoffTs)
          .sort((a, b) => (a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0));
        resolve(filtered);
      };
      req.onerror = () => reject(req.error);
    });
  }

  /**
   * Retrieve **all** history rows from the last `days` calendar days in one
   * batch read.  Far cheaper than N per-item queries when building an SMA map.
   *
   * @param days - Number of past calendar days to include.
   * @returns Every {@link HistoricalPriceRecord} within the window.
   */
  async getRecentHistory(days: number): Promise<HistoricalPriceRecord[]> {
    const db = this.getDb();
    const cutoffTs = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

    return new Promise<HistoricalPriceRecord[]>((resolve, reject) => {
      const tx = db.transaction(HISTORY_STORE, "readonly");
      const store = tx.objectStore(HISTORY_STORE);
      const index = store.index("timestamp");
      const range = IDBKeyRange.lowerBound(cutoffTs);
      const req = index.getAll(range);

      req.onsuccess = () => resolve(req.result as HistoricalPriceRecord[]);
      req.onerror = () => reject(req.error);
    });
  }
}
