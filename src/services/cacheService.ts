/**
 * @module CacheService
 * IndexedDB-backed caching layer for Grand Exchange price records.
 *
 * Responsibilities:
 *  - Open (or auto-upgrade) an IndexedDB database on first use.
 *  - Bulk-insert price records returned by the {@link WeirdGloopService}.
 *  - Expose a TTL-based staleness check so callers know whether to re-fetch.
 *  - Provide read-back methods for the analysis pipeline.
 *
 * All public methods return Promises that wrap the low-level IDB request/
 * transaction callbacks, keeping consumers in a clean async/await world.
 */

import type {
  CacheDatabaseExport,
  CacheServiceConfig,
  HistoricalPriceRecord,
  StoredPriceRecord,
  WeirdGloopPriceRecord,
} from "./types";
import { HistoryCacheService } from "./historyCacheService";

/** Default configuration values. */
const DEFAULTS: CacheServiceConfig = {
  dbName: "ger-cache",
  storeName: "prices",
  ttlMs: 1 * 60 * 60 * 1000, // 1 hour — react to intraday volatility
};

/** Name of the object store that accumulates daily price snapshots. */
const HISTORY_STORE = "price-history";

/**
 * Thin abstraction over IndexedDB for persisting and retrieving GE price data.
 *
 * @example
 * ```ts
 * const cache = new CacheService();
 * await cache.open();
 *
 * if (await cache.isStale()) {
 *   const prices = await api.fetchLatestPrices(itemNames);
 *   await cache.bulkInsert(prices);
 * }
 *
 * const allRecords = await cache.getAll();
 * ```
 */
export class CacheService {
  private readonly dbName: string;
  private readonly storeName: string;
  private readonly ttlMs: number;

  /** Lazily initialised database handle. */
  private db: IDBDatabase | null = null;

  /** History CRUD delegate created after {@link open}. */
  private _history: HistoryCacheService | null = null;

  /** History-store service — available after {@link open}. */
  get history(): HistoryCacheService {
    if (!this._history) {
      throw new Error("[CacheService] Database not open. Call open() first.");
    }
    return this._history;
  }

  /**
   * Return the underlying database handle.
   * @throws If the database has not been opened yet.
   */
  getDb(): IDBDatabase {
    return this.ensureOpen();
  }

  /**
   * Create a new cache service instance.
   * @param config - Optional overrides for DB name, store name, and TTL.
   */
  constructor(config?: Partial<CacheServiceConfig>) {
    this.dbName = config?.dbName ?? DEFAULTS.dbName;
    this.storeName = config?.storeName ?? DEFAULTS.storeName;
    this.ttlMs = config?.ttlMs ?? DEFAULTS.ttlMs;
  }

  // ─── Lifecycle ────────────────────────────────────────────────────────

  /**
   * Open the IndexedDB database, creating or upgrading the object store
   * if necessary.  Must be called before any read/write operation.
   *
   * @returns The underlying `IDBDatabase` handle, also cached internally.
   * @throws {DOMException} If the browser denies the IDB request.
   */
  async open(): Promise<IDBDatabase> {
    if (this.db) return this.db;

    return new Promise<IDBDatabase>((resolve, reject) => {
      // Version 3: migrate from [name, day] → [name, timestamp] compound key
      // to support intraday (sub-daily) price tracking and OHLC charts.
      const DB_VERSION = 3;
      const request = indexedDB.open(this.dbName, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = request.result;
        const oldVersion = (event as IDBVersionChangeEvent).oldVersion;

        // Version 1: main prices store.
        if (!db.objectStoreNames.contains(this.storeName)) {
          const store = db.createObjectStore(this.storeName, { keyPath: "name" });
          store.createIndex("fetchedAt", "fetchedAt", { unique: false });
          console.log(`[CacheService] Created object store "${this.storeName}".`);
        }

        // Version 2→3 migration: delete old day-keyed history store.
        if (oldVersion >= 2 && db.objectStoreNames.contains(HISTORY_STORE)) {
          db.deleteObjectStore(HISTORY_STORE);
          console.log(`[CacheService] Deleted legacy "${HISTORY_STORE}" (keyPath was [name, day]).`);
        }

        // Version 3: timestamp-keyed history store for intraday resolution.
        if (!db.objectStoreNames.contains(HISTORY_STORE)) {
          const hs = db.createObjectStore(HISTORY_STORE, {
            keyPath: ["name", "timestamp"],
          });
          hs.createIndex("name", "name", { unique: false });
          hs.createIndex("timestamp", "timestamp", { unique: false });
          console.log(`[CacheService] Created object store "${HISTORY_STORE}" (v3, keyPath [name, timestamp]).`);
        }
      };

      request.onsuccess = () => {
        this.db = request.result;
        this._history = new HistoryCacheService(() => this.ensureOpen());
        console.log(`[CacheService] Database "${this.dbName}" opened successfully.`);
        resolve(this.db);
      };

      request.onerror = () => {
        console.error("[CacheService] Failed to open database:", request.error);
        reject(request.error);
      };
    });
  }

  // ─── Write Operations ─────────────────────────────────────────────────

  /**
   * Bulk-insert (or update) price records into the cache.
   *
   * Each record is written via `put` so existing keys are overwritten.
   * A single read-write transaction is used for the entire batch, which keeps
   * the operation atomic and performant.
   *
   * @param prices - Map of item name → price record as returned by
   *                 {@link WeirdGloopService.fetchLatestPrices}.
   * @returns The number of records written.
   */
  async bulkInsert(
    prices: Map<string, WeirdGloopPriceRecord>
  ): Promise<number> {
    const db = this.ensureOpen();
    const now = Date.now();
    const today = new Date(now).toISOString().slice(0, 10);

    return new Promise<number>((resolve, reject) => {
      const tx = db.transaction([this.storeName, HISTORY_STORE], "readwrite");
      const store = tx.objectStore(this.storeName);
      const histStore = tx.objectStore(HISTORY_STORE);
      let count = 0;
      let histSkipped = 0;

      for (const [name, record] of prices) {
        const stored: StoredPriceRecord = {
          ...record,
          name,
          fetchedAt: now,
        };

        // Read the existing record to check whether the price actually
        // changed.  Guide prices update ~once per day, so most hourly
        // polls return the same value — skipping duplicate history rows
        // prevents IndexedDB bloat (~24× fewer rows per day).
        const getReq = store.get(name);
        getReq.onsuccess = () => {
          const existing = getReq.result as StoredPriceRecord | undefined;
          store.put(stored);
          count++;

          // Only persist a history snapshot when the price has actually
          // changed (or no prior record exists).
          if (!existing || existing.price !== record.price) {
            const historical: HistoricalPriceRecord = {
              ...stored,
              timestamp: new Date(now).toISOString(),
              day: today,
            };
            histStore.put(historical);
          } else {
            histSkipped++;
          }
        };
      }

      tx.oncomplete = () => {
        if (histSkipped > 0) {
          console.log(`[CacheService] Bulk-inserted ${count} records (${histSkipped} unchanged-price history rows skipped).`);
        } else {
          console.log(`[CacheService] Bulk-inserted ${count} records.`);
        }
        resolve(count);
      };

      tx.onerror = () => {
        console.error("[CacheService] Bulk-insert transaction failed:", tx.error);
        reject(tx.error);
      };
    });
  }

  // ─── Read Operations ──────────────────────────────────────────────────

  /**
   * Retrieve every cached price record.
   *
   * @returns An array of all {@link StoredPriceRecord} objects currently in the store.
   */
  async getAll(): Promise<StoredPriceRecord[]> {
    const db = this.ensureOpen();

    return new Promise<StoredPriceRecord[]>((resolve, reject) => {
      const tx = db.transaction(this.storeName, "readonly");
      const store = tx.objectStore(this.storeName);
      const req = store.getAll();

      req.onsuccess = () => resolve(req.result as StoredPriceRecord[]);
      req.onerror = () => reject(req.error);
    });
  }

  /**
   * Retrieve a single cached record by item name.
   *
   * @param name - Canonical RS3 item name.
   * @returns The stored record, or `undefined` if not found.
   */
  async getByName(name: string): Promise<StoredPriceRecord | undefined> {
    const db = this.ensureOpen();

    return new Promise<StoredPriceRecord | undefined>((resolve, reject) => {
      const tx = db.transaction(this.storeName, "readonly");
      const store = tx.objectStore(this.storeName);
      const req = store.get(name);

      req.onsuccess = () => resolve(req.result as StoredPriceRecord | undefined);
      req.onerror = () => reject(req.error);
    });
  }

  // ─── Cache Freshness ──────────────────────────────────────────────────

  /**
   * Determine whether the cache is stale and a fresh API fetch is required.
   *
   * The check works by opening a cursor on the `fetchedAt` index in
   * **descending** order and inspecting the single most-recent record.
   * If no records exist, or the newest record is older than {@link ttlMs},
   * the cache is considered stale.
   *
   * @returns `true` if data should be re-fetched; `false` if the cache is fresh.
   */
  async isStale(): Promise<boolean> {
    const db = this.ensureOpen();

    return new Promise<boolean>((resolve, reject) => {
      const tx = db.transaction(this.storeName, "readonly");
      const store = tx.objectStore(this.storeName);
      const index = store.index("fetchedAt");

      // Open a cursor that walks the index backwards (newest first).
      const cursorReq = index.openCursor(null, "prev");

      cursorReq.onsuccess = () => {
        const cursor = cursorReq.result;
        if (!cursor) {
          // Store is empty → definitely stale.
          console.log("[CacheService] Cache is empty — marked stale.");
          resolve(true);
          return;
        }

        const record = cursor.value as StoredPriceRecord;
        const age = Date.now() - record.fetchedAt;
        const stale = age > this.ttlMs;

        console.log(
          `[CacheService] Newest record age: ${(age / 1000 / 60).toFixed(1)} min — ` +
            `cache is ${stale ? "STALE" : "FRESH"}.`
        );
        resolve(stale);
      };

      cursorReq.onerror = () => {
        console.error("[CacheService] Staleness check failed:", cursorReq.error);
        reject(cursorReq.error);
      };
    });
  }

  /**
   * Delete all records and reset the cache entirely.
   * Useful during development or when the user wants to force-refresh.
   */
  async clear(): Promise<void> {
    const db = this.ensureOpen();

    return new Promise<void>((resolve, reject) => {
      const tx = db.transaction([this.storeName, HISTORY_STORE], "readwrite");
      tx.objectStore(this.storeName).clear();
      tx.objectStore(HISTORY_STORE).clear();

      tx.oncomplete = () => {
        console.log("[CacheService] Cache and history cleared.");
        resolve();
      };
      tx.onerror = () => reject(tx.error);
    });
  }

  // ─── Database Export / Import ────────────────────────────────────────

  /**
   * Export the entire database (prices + price-history stores) as a
   * JSON-serialisable object.  The result can be saved to a file and
   * later restored via {@link importDatabase}.
   *
   * @returns An object with `prices` and `history` arrays plus metadata.
   */
  async exportDatabase(): Promise<CacheDatabaseExport> {
    const db = this.ensureOpen();

    const [prices, history] = await Promise.all([
      new Promise<StoredPriceRecord[]>((resolve, reject) => {
        const tx = db.transaction(this.storeName, "readonly");
        const req = tx.objectStore(this.storeName).getAll();
        req.onsuccess = () => resolve(req.result as StoredPriceRecord[]);
        req.onerror = () => reject(req.error);
      }),
      new Promise<HistoricalPriceRecord[]>((resolve, reject) => {
        const tx = db.transaction(HISTORY_STORE, "readonly");
        const req = tx.objectStore(HISTORY_STORE).getAll();
        req.onsuccess = () => resolve(req.result as HistoricalPriceRecord[]);
        req.onerror = () => reject(req.error);
      }),
    ]);

    return {
      version: 3,
      exportedAt: new Date().toISOString(),
      prices,
      history,
    };
  }

  /**
   * Import a previously exported database snapshot, **replacing** all
   * existing data in both stores.
   *
   * @param data - The export payload produced by {@link exportDatabase}.
   * @returns Counts of imported price and history rows.
   */
  async importDatabase(
    data: CacheDatabaseExport,
  ): Promise<{ prices: number; history: number }> {
    if (
      !data ||
      typeof data !== "object" ||
      !Array.isArray(data.prices) ||
      !Array.isArray(data.history)
    ) {
      throw new Error("Invalid cache export format.");
    }

    const db = this.ensureOpen();

    return new Promise<{ prices: number; history: number }>((resolve, reject) => {
      const tx = db.transaction([this.storeName, HISTORY_STORE], "readwrite");
      const priceStore = tx.objectStore(this.storeName);
      const histStore = tx.objectStore(HISTORY_STORE);

      // Clear existing data first.
      priceStore.clear();
      histStore.clear();

      let pCount = 0;
      let hCount = 0;

      for (const record of data.prices) {
        const req = priceStore.put(record);
        req.onsuccess = () => { pCount++; };
      }

      for (const record of data.history) {
        const req = histStore.put(record);
        req.onsuccess = () => { hCount++; };
      }

      tx.oncomplete = () => {
        console.log(`[CacheService] Imported ${pCount} prices + ${hCount} history rows.`);
        resolve({ prices: pCount, history: hCount });
      };
      tx.onerror = () => {
        console.error("[CacheService] Database import failed:", tx.error);
        reject(tx.error);
      };
    });
  }

  // ─── Internal Helpers ─────────────────────────────────────────────────

  /**
   * Guard that asserts the database has been opened.
   * @throws {Error} If {@link open} has not been called yet.
   */
  private ensureOpen(): IDBDatabase {
    if (!this.db) {
      throw new Error(
        "[CacheService] Database not open. Call `await cacheService.open()` first."
      );
    }
    return this.db;
  }
}
