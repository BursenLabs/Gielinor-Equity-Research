/**
 * @module ui/modals/guideModal
 * Flipping Guide modal — step-by-step GE flipping tutorial for new players.
 */

import { singletonModal } from "./modalBase";

const ensureGuideModal = singletonModal({
  backdropClass: "about-modal-backdrop",
  modalClass: "about-modal guide-modal",
  ariaLabel: "Flipping guide",
});

/** Show the Flipping Guide modal. */
export function showGuideModal(): void {
  const { backdrop, content } = ensureGuideModal();
  const modal = content;

  modal.innerHTML = [
    '<div class="about-modal-header">',
      '<h2>\uD83D\uDCD6 Flipping Guide</h2>',
      '<button class="about-modal-close" aria-label="Close">\u00D7</button>',
    '</div>',
    '<div class="about-modal-body">',

      '<section class="about-section">',
        '<h3>What Is GE Flipping?</h3>',
        '<p>Flipping is the practice of <strong>buying items at a low price and selling them at a higher price</strong> on the Grand Exchange to make a profit. It\u2019s the RS3 equivalent of stock day-trading \u2014 you\u2019re exploiting the gap between what buyers are willing to pay and what sellers are asking.</p>',
        '<p>The profit on each flip is: <strong>sell price \u2212 buy price \u2212 2% GE tax</strong>. The key is finding items where this spread is large enough to be worthwhile and the trade volume is high enough that your offers actually fill.</p>',
      '</section>',

      '<section class="about-section">',
        '<h3>How to Flip: Step by Step</h3>',
        '<ol class="guide-steps">',
          '<li><strong>Find a candidate</strong> \u2014 Use the <em>Market Data</em> tab. Items near the top are ranked by liquidity and profitability. Look for items with <span class="guide-badge velocity-insta">Insta-Flip</span> or <span class="guide-badge velocity-active">Active</span> velocity badges \u2014 they fill quickly.</li>',
          '<li><strong>Margin-check in-game</strong> \u2014 Before committing real capital, buy 1 of the item with a very high offer, then immediately sell it back with a very low offer. The prices you get reveal the <em>real</em> buy/sell spread. This tool\u2019s recommended prices are estimates \u2014 always verify!</li>',
          '<li><strong>Place your buy offer</strong> \u2014 Set your buy price at or slightly above the instant-buy price you discovered. Buy up to the item\u2019s <em>Buy Limit</em> (shown in the Volume &amp; Liquidity section).</li>',
          '<li><strong>Wait for your buy to fill</strong> \u2014 <span class="guide-badge velocity-insta">Insta-Flip</span> items fill in seconds. <span class="guide-badge velocity-slow">Slow</span> items may take hours. The velocity badge sets expectations.</li>',
          '<li><strong>Sell at your target price</strong> \u2014 List your items slightly below the instant-sell price from your margin check. The 2% GE tax is automatically deducted.</li>',
          '<li><strong>Track in Portfolio</strong> \u2014 Use the <em>Portfolio</em> tab to log your flip. It calculates your actual profit, ROI, and tracks buy-limit reset timers.</li>',
        '</ol>',
      '</section>',

      '<section class="about-section">',
        '<h3>Reading the Item Cards</h3>',
        '<p>Each item card shows 4 quick-triage badges at a glance:</p>',
        '<table class="about-table">',
          '<thead><tr><th>Badge</th><th>What It Tells You</th></tr></thead>',
          '<tbody>',
            '<tr><td><strong>Profit</strong> (green/red)</td><td>Estimated profit per item after 2% tax. Green = positive, red = loss.</td></tr>',
            '<tr><td><strong>Velocity</strong></td><td>How fast your offers will fill. Insta-Flip is ideal for beginners.</td></tr>',
            '<tr><td><strong>Trend</strong></td><td>\uD83D\uDCC8 Rising = prices going up. \u26A0\uFE0F Crashing = falling knife, be cautious.</td></tr>',
            '<tr><td><strong>Hype</strong> (\uD83D\uDD25)</td><td>Volume is spiking above normal \u2014 could be opportunity or manipulation.</td></tr>',
          '</tbody>',
        '</table>',
        '<p>Click any card to expand its <strong>detail panel</strong> with full pricing, profitability metrics, volume data, predictive analytics, and data confidence indicators.</p>',
      '</section>',

      '<section class="about-section">',
        '<h3>Key Metrics Explained</h3>',
        '<table class="about-table">',
          '<thead><tr><th>Metric</th><th>What It Means</th><th>Beginner Tip</th></tr></thead>',
          '<tbody>',
            '<tr><td><strong>ROI %</strong></td><td>Profit as a % of buy price. Higher = more capital-efficient.</td><td>Look for >1% ROI on high-volume items.</td></tr>',
            '<tr><td><strong>Profit per 4H</strong></td><td>Total profit if you fill one full buy-limit window.</td><td>Compare this across items to decide where to put your cash.</td></tr>',
            '<tr><td><strong>Return on Time</strong></td><td>Estimated gp/hr. Accounts for trade speed.</td><td>A low-margin item with huge volume can beat a high-margin slow item.</td></tr>',
            '<tr><td><strong>Tax Gap</strong></td><td>Minimum spread needed to break even after GE tax.</td><td>If \u26A0 risky appears, the spread may be too thin.</td></tr>',
            '<tr><td><strong>Vol-Adj Margin</strong></td><td>Profit minus one standard deviation of daily price swing.</td><td>If negative, volatility exceeds your margin \u2014 risky!</td></tr>',
            '<tr><td><strong>Alch Safety</strong></td><td>Profit/loss if you High Alch instead of GE selling.</td><td>Positive = you can always alch as a bail-out. Great safety net.</td></tr>',
            '<tr><td><strong>Data Confidence</strong></td><td>How much history backs the predictions for this item.</td><td>Low confidence = treat predictions as rough guesses.</td></tr>',
          '</tbody>',
        '</table>',
      '</section>',

      '<section class="about-section">',
        '<h3>Using the Tool Effectively</h3>',
        '<table class="about-table">',
          '<thead><tr><th>Feature</th><th>How to Use It</th></tr></thead>',
          '<tbody>',
            '<tr><td><strong>Filters</strong></td><td>Use volume and price filters to narrow items to your budget and playstyle. "High" volume = fast flips. Lower budgets = set a price cap.</td></tr>',
            '<tr><td><strong>Favourites</strong> (\u2605)</td><td>Star items you want to track. Set price alerts (\uD83D\uDD14) to get notified when prices hit your targets.</td></tr>',
            '<tr><td><strong>Analytics Modal</strong></td><td>Click the popout arrow (\u2197) on any card for an interactive price chart, full metrics, and trend statistics.</td></tr>',
            '<tr><td><strong>Portfolio</strong></td><td>Log active flips to track profit, ROI, and buy-limit reset timers. Complete flips appear in history with full P&amp;L stats.</td></tr>',
            '<tr><td><strong>Ask Advisor</strong></td><td>Chat with an AI about your flipping strategy. It sees the current top items and can suggest approaches.</td></tr>',
            '<tr><td><strong>Allocation Suggestions</strong></td><td>Enter your cash stack in the Capital Allocation Suggestions panel to see how to spread capital across items. Choose from Favourites, Top 20, or All Items as the source.</td></tr>',
            '<tr><td><strong>Deep History Scan</strong></td><td>Enable in Settings > Market section. Fetches 90 days of price history per item \u2014 slower, but dramatically improves trend predictions.</td></tr>',
          '</tbody>',
        '</table>',
      '</section>',

      '<section class="about-section about-section-highlight">',
        '<h3>\uD83D\uDCA1 Tips for New Flippers</h3>',
        '<ul>',
          '<li><strong>Start small</strong> \u2014 Flip one or two high-volume items (runes, herbs, bars) before diversifying. Learn the rhythm.</li>',
          '<li><strong>Always margin-check</strong> \u2014 Never trust estimated prices blindly. Buy 1 / sell 1 in-game to find the real spread.</li>',
          '<li><strong>Respect buy limits</strong> \u2014 You can only buy a set quantity every 4 hours per item. Plan around the 6 windows per day.</li>',
          '<li><strong>Avoid \u26A0 Crashing items</strong> \u2014 A downtrend means your buy offer might fill but the sell price keeps dropping. Beginners should stick to Stable or Rising items.</li>',
          '<li><strong>Watch the tax</strong> \u2014 The 2% GE tax (floor-rounded) eats into low-margin flips. Items under 500 gp have the \u26A0 risky flag for this reason.</li>',
          '<li><strong>Use Alch Safety as insurance</strong> \u2014 If an item has a positive Alch Safety value, you can always High Alch it at a profit instead of selling at a GE loss.</li>',
          '<li><strong>Don\u2019t panic-sell</strong> \u2014 If a price dips temporarily, waiting is often better than taking a loss. Check the trend indicators.</li>',
          '<li><strong>Diversify once comfortable</strong> \u2014 Spread capital across 3\u20135 items to reduce risk from any single item crashing.</li>',
          '<li><strong>Allocation Suggestions are a starting point</strong> \u2014 It suggests how to split your cash across items based on estimated profit per slot. Real spreads differ \u2014 always margin-check first and adjust allocations based on what you find in-game.</li>',
        '</ul>',
      '</section>',

      '<section class="about-section">',
        '<h3>\u26A0\uFE0F Common Pitfalls</h3>',
        '<ul>',
          '<li><strong>Chasing hype (\uD83D\uDD25)</strong> \u2014 Volume spikes can be real demand or manipulation. Don\u2019t throw all your cash at a spiking item without checking the trend.</li>',
          '<li><strong>Ignoring buy limits</strong> \u2014 Putting in a 100K offer on an item with a 1K buy limit means 99K sits idle for hours.</li>',
          '<li><strong>Forgetting the tax on cheap items</strong> \u2014 A 200 gp item with a 5 gp spread loses 4 gp to tax \u2014 leaving only 1 gp profit.</li>',
          '<li><strong>Not margin-checking</strong> \u2014 The real spread can be wildly different from estimated prices, especially for low-volume items.</li>',
          '<li><strong>Over-investing in one item</strong> \u2014 If a game update (nerf, DXP weekend, new content) tanks that item, your whole stack is at risk.</li>',
        '</ul>',
      '</section>',

    '</div>',
  ].join("");

  const closeBtn = modal.querySelector(".about-modal-close");
  closeBtn?.addEventListener("click", () => backdrop.classList.remove("visible"));

  backdrop.classList.add("visible");
  (closeBtn as HTMLElement | null)?.focus();
}
