#!/usr/bin/env node

/**
 * generate-baseline.mjs
 *
 * Standalone Node.js script that builds a baseline JSON file containing the
 * full RS3 GE catalogue with latest prices, buy limits, and high alch values.
 *
 * Designed to run in CI (GitHub Actions) — no browser APIs, no external
 * dependencies beyond built-in `node:fetch`.
 *
 * Usage:
 *   node scripts/generate-baseline.mjs --out data/baseline.json
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

// ─── Configuration ──────────────────────────────────────────────────────────

const GE_CATALOGUE_URL =
  "https://runescape.wiki/w/Module:GEIDs/data.json?action=raw";
const PRICE_API_BASE =
  "https://api.weirdgloop.org/exchange/history/rs/latest";
const BUY_LIMITS_URL =
  "https://runescape.wiki/w/Module:GELimits/data.json?action=raw";
const HIGH_ALCH_URL =
  "https://runescape.wiki/w/Module:GEHighAlchs/data.json?action=raw";

const BATCH_SIZE = 100;
const BATCH_DELAY_MS = 300;
const BASELINE_VERSION = 3;

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Pause for the given number of milliseconds. */
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Parse CLI arguments for --out <path>.
 * @returns {string} Resolved absolute path for the output file.
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const idx = args.indexOf("--out");
  if (idx === -1 || !args[idx + 1]) {
    console.error("Usage: node scripts/generate-baseline.mjs --out <path>");
    process.exit(1);
  }
  return resolve(args[idx + 1]);
}

// ─── Step 1: Fetch GE catalogue ────────────────────────────────────────────

async function fetchCatalogue() {
  console.log("[1/4] Fetching GE catalogue…");
  const res = await fetch(GE_CATALOGUE_URL, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`Catalogue fetch failed: HTTP ${res.status}`);
  const json = await res.json();

  // Filter out metadata keys starting with "%"
  const items = {};
  for (const [name, id] of Object.entries(json)) {
    if (!name.startsWith("%") && typeof id === "number") {
      items[name] = id;
    }
  }

  const count = Object.keys(items).length;
  console.log(`  → ${count} tradeable items found.`);
  return items; // { name: id }
}

// ─── Step 2: Fetch latest prices in batches ─────────────────────────────────

async function fetchAllPrices(catalogue) {
  console.log("[2/4] Fetching latest prices…");
  const names = Object.keys(catalogue);
  const prices = {}; // name → { id, price, volume, timestamp }
  let fetched = 0;

  for (let i = 0; i < names.length; i += BATCH_SIZE) {
    const batch = names.slice(i, i + BATCH_SIZE);
    const query = batch.map((n) => encodeURIComponent(n)).join("|");
    const url = `${PRICE_API_BASE}?name=${query}`;

    try {
      const res = await fetch(url, {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        console.warn(`  ⚠ Batch ${Math.floor(i / BATCH_SIZE) + 1} returned HTTP ${res.status} — skipping.`);
      } else {
        const json = await res.json();
        for (const [name, record] of Object.entries(json)) {
          if (record && typeof record.price === "number") {
            prices[name] = {
              id: record.id ?? catalogue[name],
              price: record.price,
              volume: record.volume ?? 0,
              timestamp: record.timestamp ?? new Date().toISOString(),
            };
            fetched++;
          }
        }
      }
    } catch (err) {
      console.warn(`  ⚠ Batch ${Math.floor(i / BATCH_SIZE) + 1} network error: ${err.message}`);
    }

    // Rate-limit pause between batches
    if (i + BATCH_SIZE < names.length) {
      await sleep(BATCH_DELAY_MS);
    }

    // Progress indicator every 10 batches
    if ((Math.floor(i / BATCH_SIZE) + 1) % 10 === 0) {
      console.log(`  → ${fetched} prices fetched so far (batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(names.length / BATCH_SIZE)})…`);
    }
  }

  console.log(`  → ${fetched} prices fetched total.`);
  return prices;
}

// ─── Step 3: Fetch bulk buy limits ──────────────────────────────────────────

async function fetchBuyLimits() {
  console.log("[3/4] Fetching buy limits…");
  try {
    const res = await fetch(BUY_LIMITS_URL, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const count = Object.keys(json).length;
    console.log(`  → ${count} buy limits loaded.`);
    return json; // { name: limit }
  } catch (err) {
    console.warn(`  ⚠ Buy limits fetch failed: ${err.message} — continuing without.`);
    return {};
  }
}

// ─── Step 4: Fetch bulk high alch values ────────────────────────────────────

async function fetchHighAlchValues() {
  console.log("[4/4] Fetching high alch values…");
  try {
    const res = await fetch(HIGH_ALCH_URL, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const count = Object.keys(json).length;
    console.log(`  → ${count} alch values loaded.`);
    return json; // { name: alchValue }
  } catch (err) {
    console.warn(`  ⚠ High alch fetch failed: ${err.message} — continuing without.`);
    return {};
  }
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  const outPath = parseArgs();

  console.log("╔════════════════════════════════════════════════╗");
  console.log("║  Gielinor Equity Research — Baseline Generator ║");
  console.log("╚════════════════════════════════════════════════╝");
  console.log();

  // 1. Catalogue (required — exit on failure)
  const catalogue = await fetchCatalogue();

  // 2. Prices
  const prices = await fetchAllPrices(catalogue);

  // 3. Buy limits (best-effort)
  const buyLimits = await fetchBuyLimits();

  // 4. High alch values (best-effort)
  const alchValues = await fetchHighAlchValues();

  // ── Merge into output format ──────────────────────────────────────────
  console.log("\nMerging data…");
  const items = {};
  let enrichedCount = 0;

  for (const [name, priceRecord] of Object.entries(prices)) {
    const entry = { ...priceRecord };

    const limit = buyLimits[name];
    if (typeof limit === "number") {
      entry.buyLimit = limit;
      enrichedCount++;
    }

    const alch = alchValues[name];
    if (typeof alch === "number") {
      entry.highAlch = alch;
    } else if (alch === false) {
      entry.highAlch = false;
    }

    items[name] = entry;
  }

  const itemCount = Object.keys(items).length;

  const baseline = {
    version: BASELINE_VERSION,
    generatedAt: new Date().toISOString(),
    itemCount,
    items,
  };

  // ── Write to disk ─────────────────────────────────────────────────────
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(baseline));

  const sizeKB = (Buffer.byteLength(JSON.stringify(baseline)) / 1024).toFixed(0);
  console.log(`\n✅ Baseline written to ${outPath}`);
  console.log(`   ${itemCount} items, ${enrichedCount} enriched with buy limits, ${sizeKB} KB`);
}

main().catch((err) => {
  console.error("\n❌ Fatal error:", err);
  process.exit(1);
});
