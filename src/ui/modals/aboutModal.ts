/**
 * @module ui/modals/aboutModal
 * "How It Works" about modal — data accuracy disclaimers + prediction confidence.
 */

import { singletonModal } from "./modalBase";

const ensureAboutModal = singletonModal({
  backdropClass: "about-modal-backdrop",
  modalClass: "about-modal",
  ariaLabel: "About Gielinor Equity Research",
});

/** Show the "How It Works" about modal. */
export function showAboutModal(): void {
  const { backdrop, content } = ensureAboutModal();
  const modal = content;

  modal.innerHTML = [
    '<div class="about-modal-header">',
      '<h2>\u2139\uFE0F How Gielinor Equity Research Works</h2>',
      '<button class="about-modal-close" aria-label="Close">\u00D7</button>',
    '</div>',
    '<div class="about-modal-body">',

      '<section class="about-section">',
        '<h3>Where the Data Comes From</h3>',
        '<p>All price and volume data is sourced from the <strong>Weird Gloop API</strong>, which polls the RuneScape Grand Exchange.</p>',
        '<ul>',
          '<li><strong>Guide prices</strong> update approximately <strong>once per day</strong> \u2014 they are not real-time transaction prices.</li>',
          '<li><strong>Trade volume</strong> is a rolling 24-hour aggregate \u2014 there is no hourly or per-trade breakdown available.</li>',
          '<li><strong>Intraday price movements</strong> (spikes, crashes, flash recoveries) are <strong>invisible</strong> in this data.</li>',
          '<li><strong>Buy limits</strong> are sourced from the RS Wiki and typically update monthly.</li>',
        '</ul>',
      '</section>',

      '<section class="about-section">',
        '<h3>What "Recommended Buy/Sell" Means</h3>',
        '<p>Our recommended prices are <strong>heuristic estimates</strong>, not live market data:</p>',
        '<ul>',
          '<li><strong>Buy Price</strong>: ~1% below the GE guide price (a typical instant-buy discount).</li>',
          '<li><strong>Sell Price</strong>: ~3% above the guide price, covering the 2% GE tax plus profit margin.</li>',
          '<li>The <strong>actual buy/sell spread</strong> is only discoverable in-game by margin-checking (buy 1 / sell 1).</li>',
          '<li>For high-volume staples (runes, herbs, bars), \u00b11\u20133% is usually close. For rare or volatile items, the real spread can be 5\u201320%+.</li>',
        '</ul>',
      '</section>',

      '<section class="about-section">',
        '<h3>Tax & Profit Calculations</h3>',
        '<p>These are <strong>accurate to the official RS3 formulas</strong>:</p>',
        '<ul>',
          '<li><strong>GE Tax</strong>: 2% of the sell price, floor-rounded. Exempt for items \u226450 gp.</li>',
          '<li><strong>Flip Profit</strong>: sell price \u2212 buy price \u2212 tax. Correct assuming the margin holds.</li>',
          '<li><strong>High Alchemy floor</strong>: floor(value \u00d7 0.6) \u2014 exact RS3 formula. Used as a sell-price safety net.</li>',
        '</ul>',
      '</section>',

      '<section class="about-section">',
        '<h3>What Predictions Can (and Can\u2019t) Do</h3>',
        '<table class="about-table">',
          '<thead><tr><th>Indicator</th><th>Accuracy</th><th>Notes</th></tr></thead>',
          '<tbody>',
            '<tr><td>Trend Direction</td><td class="confidence-medium">~70%</td><td>Works well for multi-day trends; misses reversals and events.</td></tr>',
            '<tr><td>Momentum (7d)</td><td class="confidence-medium">~65%</td><td>Flags sustained moves; blind to intra-window volatility.</td></tr>',
            '<tr><td>Volume Spike</td><td class="confidence-high">~75%</td><td>Good at catching surges; can\u2019t distinguish hype from manipulation.</td></tr>',
            '<tr><td>Trade Velocity</td><td class="confidence-medium">~65%</td><td>Reasonable fill-time buckets; actual fill depends on player skill and time of day.</td></tr>',
            '<tr><td>Return on Time</td><td class="confidence-low">~50\u201370%</td><td>Compounds profit estimate + hourly volume guess. Actual gp/hr varies \u00b130\u201350%.</td></tr>',
            '<tr><td>Next-Day Price</td><td class="confidence-low">~55%</td><td>Linear extrapolation from daily data \u2014 directional hint only.</td></tr>',
          '</tbody>',
        '</table>',
      '</section>',

      '<section class="about-section">',
        '<h3>How Your Data Improves Over Time</h3>',
        '<p>The longer you use the tool, the better your predictions become:</p>',
        '<ul>',
          '<li><strong>Fresh install</strong>: Trend data is sparse. Volatility and EMA show "Insufficient data" for many items.</li>',
          '<li><strong>After 7 days</strong>: Momentum classification becomes meaningful. Volume spike baselines stabilise.</li>',
          '<li><strong>After 30+ days</strong>: EMA is fully weighted. Linear regression provides useful directional signals. Volatility readings are robust.</li>',
          '<li>Check the <strong>Data Confidence</strong> section in each item\u2019s detail panel to see how much history is available.</li>',
        '</ul>',
      '</section>',

      '<section class="about-section">',
        '<h3>Key Limitations</h3>',
        '<table class="about-table">',
          '<thead><tr><th>Data</th><th>Reality</th><th>Impact</th></tr></thead>',
          '<tbody>',
            '<tr><td>Guide Price</td><td>~1\u00d7/day updates</td><td>Only daily trends visible; sub-daily moves invisible.</td></tr>',
            '<tr><td>Volume</td><td>24h rolling total</td><td>No hourly breakdown; "hourly" fill rates are estimated.</td></tr>',
            '<tr><td>Real Spread</td><td>Invisible in API</td><td>Only margin-checking in-game reveals actual buy/sell gap.</td></tr>',
            '<tr><td>Game Updates</td><td>Unpredictable</td><td>Nerfs, DXP, and events invalidate all trends instantly.</td></tr>',
          '</tbody>',
        '</table>',
      '</section>',

      '<section class="about-section">',
        '<h3>Capital Allocation Suggestions</h3>',
        '<p>The allocation panel suggests how to distribute a cash stack across items to maximise projected profit per 4-hour window.</p>',
        '<ul>',
          '<li>It uses a <strong>greedy ROI-based algorithm</strong> \u2014 items with the highest estimated return on investment are filled first, capped by their buy limit.</li>',
          '<li>Allocations are based on <strong>estimated guide prices and heuristic margins</strong>, not real in-game spreads.</li>',
          '<li><strong>These suggestions are not financial advice.</strong> Real spreads, fill times, and market conditions can differ significantly from estimates.</li>',
          '<li>Always <strong>margin-check in-game</strong> before committing capital. Adjust allocations based on the actual buy/sell gap you discover.</li>',
        '</ul>',
      '</section>',

      '<section class="about-section about-section-highlight">',
        '<h3>\uD83C\uDFAF Bottom Line</h3>',
        '<p>Gielinor Equity Research is a <strong>curated shortlist generator with tax-aware math</strong> \u2014 not a profit predictor or live trading terminal. It reliably identifies <em>which items are worth investigating</em> and gives directionally correct trend and liquidity information.</p>',
        '<p><strong>Always margin-check in-game before committing capital.</strong> The per-item Data Confidence panel tells you how much to trust each prediction. The allocation panel\u2019s suggestions are starting points, not guaranteed outcomes.</p>',
      '</section>',

    '</div>',
  ].join("");

  const closeBtn = modal.querySelector(".about-modal-close");
  closeBtn?.addEventListener("click", () => backdrop.classList.remove("visible"));

  backdrop.classList.add("visible");
  (closeBtn as HTMLElement | null)?.focus();
}
