(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TestApp"] = factory();
	else
		root["TestApp"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./css/base/alt1-status.css"
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/base/alt1-status.css ***!
  \*************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── Alt1 status banner ───────────────────────────────────────────────────── */

#alt1-status {
  padding: 4px 10px;
  font-size: 11px;
  text-align: center;
}

#alt1-status:empty {
  display: none;
}

#alt1-status a {
  color: var(--link-color);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/base/reset.css"
/*!*******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/base/reset.css ***!
  \*******************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── Reset & base ─────────────────────────────────────────────────────────── */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  overflow: hidden;          /* prevent body-level scrollbar; app shell handles its own scrolling */
  font-family: "Segoe UI", Consolas, "Liberation Mono", monospace;
  font-size: 13px;
  line-height: 1.45;
  color: var(--text-main);
  background: var(--bg-main);
}

/* ── Progressive disclosure: hide advanced-only elements unless opted in ── */
body:not([data-advanced="true"]) .advanced-only {
  display: none;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/about-modal.css"
/*!*******************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/about-modal.css ***!
  \*******************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── About / How It Works modal ──────────────────────────────────────────── */

.about-btn {
  margin-left: auto;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border-main);
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  white-space: nowrap;
}
.about-btn:hover,
.about-btn:focus-visible {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
}

/* ── Backdrop ──────────────────────────────────────────────────────────────── */

.about-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9000;
  display: none;
  align-items: center;
  justify-content: center;
  background: var(--modal-backdrop);
}
.about-modal-backdrop.visible {
  display: flex;
}

/* ── Modal shell ───────────────────────────────────────────────────────────── */

.about-modal {
  position: relative;
  width: min(720px, 92vw);
  max-height: 85vh;
  overflow-y: auto;
  background: var(--bg-main);
  color: var(--text-main);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  padding: 0;
}

/* ── Header ────────────────────────────────────────────────────────────────── */

.about-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 12px;
  border-bottom: 1px solid var(--border-main);
}
.about-modal-header h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-bright);
}
.about-modal-close {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: var(--text-muted);
  padding: 4px 8px;
  border-radius: 4px;
  line-height: 1;
}
.about-modal-close:hover,
.about-modal-close:focus-visible {
  color: var(--text-bright);
  background: var(--bg-hover);
}

/* ── Body ──────────────────────────────────────────────────────────────────── */

.about-modal-body {
  padding: 16px 20px 24px;
}

.about-section {
  margin-bottom: 20px;
}
.about-section:last-child {
  margin-bottom: 0;
}

.about-section h3 {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-bright);
  margin: 0 0 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--border-main);
}

.about-section p {
  font-size: 13px;
  line-height: 1.55;
  color: var(--text-main);
  margin: 0 0 8px;
}

.about-section ul {
  margin: 0 0 8px;
  padding-left: 20px;
  font-size: 13px;
  line-height: 1.55;
  color: var(--text-main);
}
.about-section li {
  margin-bottom: 4px;
}

/* ── Highlight section (bottom line) ───────────────────────────────────────── */

.about-section-highlight {
  background: var(--bg-hover, rgba(255, 255, 255, 0.04));
  border-left: 3px solid var(--accent-primary);
  border-radius: 4px;
  padding: 12px 16px;
}

/* ── Tables ────────────────────────────────────────────────────────────────── */

.about-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  margin-top: 8px;
}
.about-table th {
  text-align: left;
  font-weight: 700;
  color: var(--text-bright);
  padding: 6px 8px;
  border-bottom: 2px solid var(--border-main);
  white-space: nowrap;
}
.about-table td {
  padding: 5px 8px;
  border-bottom: 1px solid var(--border-main);
  color: var(--text-main);
  vertical-align: top;
}
.about-table tbody tr:last-child td {
  border-bottom: none;
}

/* ── Data Confidence group in detail panels ────────────────────────────────── */

.detail-group-confidence {
  border-left: 3px solid var(--accent-secondary, var(--text-muted));
  padding-left: 8px;
}

/* Confidence tier colours */
.confidence-low {
  color: var(--accent-loss, #ef4444);
}
.confidence-medium {
  color: var(--accent-gold, #f59e0b);
}
.confidence-high {
  color: var(--accent-profit, #22c55e);
}

/* ── Guide modal extras ────────────────────────────────────────────────────── */

.guide-steps {
  margin: 0 0 8px;
  padding-left: 24px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-main);
  counter-reset: guide-step;
}
.guide-steps li {
  margin-bottom: 8px;
}

.guide-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 4px;
  vertical-align: middle;
}
.guide-badge.velocity-insta {
  background: var(--badge-velocity-insta-bg, rgba(34, 197, 94, 0.15));
  color: var(--accent-profit, #22c55e);
}
.guide-badge.velocity-active {
  background: var(--badge-velocity-active-bg, rgba(59, 130, 246, 0.15));
  color: var(--accent-primary, #3b82f6);
}
.guide-badge.velocity-slow {
  background: var(--badge-velocity-slow-bg, rgba(245, 158, 11, 0.15));
  color: var(--accent-gold, #f59e0b);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/accessibility.css"
/*!*********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/accessibility.css ***!
  \*********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ------------------------------------------------------------------------------
   Skip-to-content link  (WCAG 2.4.1 Bypass Blocks)
   ------------------------------------------------------------------------------ */

.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  z-index: 10000;
  padding: 8px 16px;
  background: var(--accent-primary);
  color: var(--text-bright);
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  border-radius: 0 0 4px 0;
  transition: top 0.15s ease;
}

.skip-link:focus {
  top: 0;
}

/* ------------------------------------------------------------------------------
   Global keyboard focus ring (accessibility)
   ------------------------------------------------------------------------------ */

:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

.card-actions button:focus-visible,
.analytics-modal-close:focus-visible,
.tab-btn:focus-visible {
  outline-offset: 1px;
  border-radius: var(--radius-sm);
}

/* ------------------------------------------------------------------------------
   Screen-reader only utility (visually hidden, announced by AT)
   ------------------------------------------------------------------------------ */

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/alerts.css"
/*!**************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/alerts.css ***!
  \**************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ------------------------------------------------------------------------------
   Modal � Price Alert Inputs
   ------------------------------------------------------------------------------ */

.alert-inputs {
  margin-top: 8px;
  padding: 8px 10px;
  background: var(--bg-muted);
  border-radius: 4px;
  border: 1px solid var(--border-section);
}

.alert-inputs-title {
  margin: 0 0 6px;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-heading);
}

.alert-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
}

.alert-row:last-child {
  margin-bottom: 0;
}

.alert-row label {
  font-size: 10px;
  color: var(--text-muted);
  white-space: nowrap;
}

.alert-row input[type="number"] {
  width: 120px;
  padding: 2px 6px;
  font-size: 10px;
  background: var(--bg-input);
  border: 1px solid var(--border-input);
  color: var(--text-main);
  border-radius: var(--radius-sm);
}

.alert-row input[type="number"]::placeholder {
  color: var(--text-muted);
  opacity: 0.6;
}

/* ------------------------------------------------------------------------------
   Notification Bell & Panel
   ------------------------------------------------------------------------------ */

.notif-bell-btn {
  position: relative;
  padding: 4px 8px;
  font-size: 14px;
  line-height: 1;
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border-main);
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  white-space: nowrap;
}

.notif-bell-btn:hover,
.notif-bell-btn:focus-visible {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
}

.notif-bell-icon {
  pointer-events: none;
}

.notif-bell-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: var(--text-bright);
  background: var(--accent-loss, #e04040);
  border-radius: 8px;
  pointer-events: none;
}

/* -- Dropdown panel ---------------------------------------------------------- */

.notif-panel {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 900;
  width: clamp(260px, 40vw, 360px);
  max-height: 320px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 6px;
  background: var(--bg-panel);
  border: 1px solid var(--border-section);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  font-size: 11px;
}

.notif-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  border-bottom: 1px solid var(--border-section);
  color: var(--text-heading);
  font-size: 12px;
  position: sticky;
  top: 0;
  background: var(--bg-panel);
  z-index: 1;
}

.notif-panel-clear {
  padding: 2px 8px;
  font-size: 10px;
  cursor: pointer;
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border-main);
  border-radius: 4px;
  transition: color 0.15s, border-color 0.15s;
}

.notif-panel-clear:hover {
  color: var(--accent-loss, #e04040);
  border-color: var(--accent-loss, #e04040);
}

.notif-panel-item {
  display: flex;
  gap: 8px;
  padding: 6px 10px;
  border-bottom: 1px solid color-mix(in srgb, var(--border-section) 40%, transparent);
  align-items: baseline;
}

.notif-panel-item:last-child {
  border-bottom: none;
}

.notif-panel-time {
  flex-shrink: 0;
  font-size: 10px;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
}

.notif-panel-msg {
  color: var(--text-main);
  word-break: break-word;
  overflow-wrap: anywhere;
  white-space: normal;
}

.notif-panel-buy .notif-panel-msg {
  color: var(--text-price);
}

.notif-panel-sell .notif-panel-msg {
  color: var(--accent-gold, #d4a017);
}

.notif-panel-empty {
  padding: 16px 10px;
  text-align: center;
  color: var(--text-muted);
  font-style: italic;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/analytics-dividers.css"
/*!**************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/analytics-dividers.css ***!
  \**************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ══════════════════════════════════════════════════════════════════════════════
   Analytics modal: section divider & predictive section accent
   ══════════════════════════════════════════════════════════════════════════════ */

.analytics-section-divider {
  grid-column: 1 / -1;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-accent);
  padding: 8px 0 4px;
  margin-top: 4px;
  border-top: 1px solid var(--border-main);
}

.predictive-section {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: inherit;
  gap: inherit;
  border-left: 3px solid var(--accent-primary);
  padding-left: 8px;
  margin-top: 4px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/analytics-modal.css"
/*!***********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/analytics-modal.css ***!
  \***********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ------------------------------------------------------------------------------
   Unified Analytics Modal � combines details + graph � March 2026
   Backdrop and close-button base styles are in modal-base.css.
   ------------------------------------------------------------------------------ */

.analytics-modal {
  position: relative;
  background: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: 12px;
  width: 90vw;
  max-width: 920px;
  min-width: 320px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
  padding: 1.25rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: analytics-modal-in 0.18s ease-out;
}

@keyframes analytics-modal-in {
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

/* -- Analytics modal: header -------------------------------------------------- */

.analytics-modal-header {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--border-main);
}

.analytics-modal-header .item-sprite {
  width: 48px;
  height: 42px;
  flex-shrink: 0;
}

.analytics-modal-name {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-accent);
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.analytics-modal-price {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-main);
  white-space: nowrap;
}

/* Close button overrides in modal-base.css */

/* -- Analytics modal: content sections ---------------------------------------- */

.analytics-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Quick badges row */
.analytics-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

/* Action buttons row */
.analytics-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* Two-column detail grid on wider viewports */
.analytics-details-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px 16px;
}

.analytics-details-grid .detail-row {
  padding: 4px 0;
  font-size: 12px;
  border-bottom: 1px solid var(--border-main);
}

.analytics-details-grid .detail-row:last-child {
  border-bottom: none;
}

/* Section dividers */
.analytics-section-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-heading);
  margin: 0;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--border);
}

/* Graph container */
.analytics-graph-section {
  min-height: 200px;
  position: relative;
}

.analytics-graph-section .graph-modal-canvas {
  height: 200px;
}

/* Range row */
.analytics-range-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.analytics-range-row label {
  font-size: 11px;
  color: var(--text-muted);
}
.analytics-range-row select {
  padding: 2px 6px;
  font-size: 11px;
  background: var(--bg-input);
  color: var(--text-main);
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
}

/* Stats grid � auto-fit columns */
.analytics-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.5rem;
}

.analytics-stat-card {
  background: var(--bg-muted, var(--bg-elevated));
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.analytics-stat-label {
  font-size: 10px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.analytics-stat-value {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-bright);
}

/* -- Analytics modal: responsive adjustments ---------------------------------- */

@media (min-width: 480px) {
  .analytics-details-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2px 1.5rem;
  }

  .analytics-modal-header .item-sprite {
    width: 48px;
    height: 42px;
  }

  .analytics-graph-section .graph-modal-canvas {
    height: 220px;
  }
}

@media (max-width: 600px) {
  .analytics-modal {
    padding: 0.75rem;
    gap: 0.75rem;
    border-radius: 8px;
    min-width: 280px;
    width: 96vw;
  }

  .analytics-modal-name {
    font-size: 14px;
  }

  .analytics-modal-price {
    font-size: 13px;
  }

  /* Detail rows: stack label above value on narrow screens */
  .analytics-details-grid .detail-row,
  .detail-row {
    flex-wrap: wrap;
    gap: 2px 8px;
  }

  .detail-label {
    flex: 1 1 auto;
    min-width: 0;
  }

  .detail-value {
    flex: 0 1 auto;
    min-width: 60px;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  .analytics-stat-card {
    padding: 6px 8px;
  }

  .analytics-stat-label {
    font-size: 9px;
  }

  .analytics-stat-value {
    font-size: 11px;
  }

  .analytics-graph-section .graph-modal-canvas {
    height: 160px;
  }

  /* Top 20 header: let actions wrap to next line */
  #market-header {
    gap: 2px 6px;
  }

  .market-header-actions {
    gap: 3px;
    flex: 1 1 100%;
    justify-content: flex-start;
  }

  .scan-btn {
    font-size: 9px;
    padding: 2px 6px;
  }

  .section-sort-select {
    font-size: 9px;
    padding: 3px 4px;
  }

  .deep-history-label {
    font-size: 9px;
  }
}

.item-modal-details {
  display: flex;
  flex-direction: column;
}

.item-modal-details .detail-row {
  padding: 3px 0;
  font-size: 12px;
}

.item-modal-details .detail-label {
  color: var(--text-muted);
}

.item-modal-details .detail-label[title] {
  cursor: help;
  border-bottom: 1px dotted var(--text-dimmed);
}

.item-modal-details .detail-value {
  color: var(--text-main);
  font-weight: 600;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 4px 0;
  font-size: 11px;
  border-bottom: 1px solid var(--border-main);
  gap: 8px;
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-label {
  font-size: 10px;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  flex-shrink: 0;
  white-space: nowrap;
}

.detail-label[title] {
  cursor: help;
  border-bottom: 1px dotted var(--text-dimmed);
}

.detail-value {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-bright);
  text-align: right;
  min-width: 0;
  word-break: break-word;
  overflow-wrap: anywhere;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/back-to-top.css"
/*!*******************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/back-to-top.css ***!
  \*******************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ═══════════════════════════════════════════════════════════════════════════
 *  Back-to-Top Floating Button
 * ═══════════════════════════════════════════════════════════════════════════ */

.back-to-top-btn {
  position: sticky;
  bottom: 16px;
  float: right;
  margin-right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-main);
  background: var(--bg-card, var(--bg-main));
  color: var(--text-main);
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  z-index: 50;
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top-btn.visible {
  opacity: 1;
  pointer-events: auto;
}

.back-to-top-btn:hover {
  background: var(--accent-primary);
  color: var(--bg-main);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.back-to-top-btn:active {
  transform: translateY(0);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/card-actions.css"
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/card-actions.css ***!
  \********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* \\u2500\\u2500 Popout button \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500 */

.popout-btn {
  all: unset;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  color: var(--text-muted);
  padding: 2px 4px;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  transition: color 0.15s, background 0.15s;
}

.popout-btn:hover {
  color: var(--accent-blue-text);
  background: var(--action-hover-blue);
}

/* -- Card action button group ------------------------------------------------ */

.card-actions {
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: center;
}

/* -- Favourite button -------------------------------------------------------- */

.fav-btn {
  all: unset;
  cursor: pointer;
  font-size: 15px;
  line-height: 1;
  color: var(--text-muted);
  padding: 2px 4px;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  transition: color 0.15s, transform 0.15s;
}

.fav-btn:hover {
  color: var(--accent-gold);
  transform: scale(1.15);
}

/* Filled star when item is favourited. */
.market-card.favorited .fav-btn,
.modal-fav-btn:has(+ .item-modal-close) {
  /* fallback � override via JS textContent ? vs ? */
}

.market-card.favorited {
  border-left: 2px solid var(--accent-gold);
}

/* Quick-add to portfolio button */

.quick-add-btn {
  all: unset;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  color: var(--text-muted);
  padding: 1px 5px;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  transition: color 0.15s, background 0.15s;
}

.quick-add-btn:hover {
  color: var(--accent-teal);
  background: var(--action-hover-teal);
}

/* -- Alert bell button (inline on card) -------------------------------------- */

.alert-btn {
  all: unset;
  cursor: pointer;
  font-size: 13px;
  line-height: 1;
  color: var(--text-muted);
  padding: 2px 4px;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  opacity: 0.55;
  transition: color 0.15s, opacity 0.15s, transform 0.15s;
}

.alert-btn:hover {
  opacity: 1;
  transform: scale(1.15);
}

.alert-btn.alert-active {
  opacity: 1;
  color: var(--accent-gold);
  filter: drop-shadow(0 0 2px var(--action-glow-gold));
}

/* -- Inline card alert popover ----------------------------------------------- */

.card-alert-popover {
  display: none;
  padding: 6px 10px;
  background: var(--bg-muted);
  border: 1px solid var(--border-section);
  border-top: none;
  border-radius: 0 0 4px 4px;
  gap: 4px;
}

.card-alert-popover.open {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.card-alert-row {
  display: flex;
  align-items: center;
  gap: 4px;
}

.card-alert-row label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: var(--text-muted);
  white-space: nowrap;
}

.card-alert-row input[type="number"] {
  width: 80px;
  padding: 2px 5px;
  font-size: 10px;
  background: var(--bg-input);
  border: 1px solid var(--border-input);
  color: var(--text-main);
  border-radius: var(--radius-sm);
}

.card-alert-row input[type="number"]::placeholder {
  color: var(--text-muted);
  opacity: 0.6;
}

/* -- External link buttons (Wiki / GE) --------------------------------------- */

.ext-link {
  all: unset;
  cursor: pointer;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  color: var(--text-muted);
  padding: 2px 5px;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  text-decoration: none;
  transition: color 0.15s, background 0.15s;
}

.ext-link.wiki-link:hover {
  color: var(--accent-blue-text);
  background: var(--action-hover-blue);
}

.ext-link.ge-link:hover {
  color: var(--accent-gold);
  background: var(--action-hover-gold);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/chat.css"
/*!************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/chat.css ***!
  \************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── Chat / Advisor panel ──────────────────────────────────────────────────── */

#advisor-view {
  display: flex;
  flex-direction: column;
  min-height: 120px;         /* never collapse so small that input disappears */
  overflow: hidden;          /* contain children; chat-history scrolls internally */
  padding: 8px 10px 10px;
}

#advisor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  margin-bottom: 6px;
}

#advisor-view h2 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-heading);
  margin: 0;
  flex-shrink: 0;
}

#clear-chat-btn {
  font-size: 11px;
  padding: 2px 8px;
  border: 1px solid var(--border-input);
  border-radius: 4px;
  background: transparent;
  color: var(--text-main);
  cursor: pointer;
  transition: background .15s, color .15s;
}
#clear-chat-btn:hover { background: var(--accent-red-dark); color: var(--text-bright); border-color: var(--accent-red-dark); }

#chat-history {
  flex: 1;
  overflow-y: auto;
  border: 2px solid var(--border-main);
  border-radius: 4px;
  background: var(--bg-panel);
  padding: 8px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* ── Chat bubbles ─────────────────────────────────────────────────────────── */

.chat-msg {
  max-width: 92%;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.chat-msg.user {
  align-self: flex-end;
  background: var(--chat-user-bg);
  color: var(--text-main);
  border-bottom-right-radius: 2px;
}

.chat-msg.assistant {
  align-self: flex-start;
  background: var(--bg-muted);
  color: var(--text-main);
  border-bottom-left-radius: 2px;
}

.chat-msg.system {
  align-self: center;
  background: transparent;
  color: var(--text-muted);
  font-style: italic;
  font-size: 11px;
  text-align: center;
}

.chat-msg.error {
  align-self: center;
  background: var(--chat-error-bg);
  color: var(--accent-red);
  font-size: 11px;
  text-align: center;
}

/* Thinking indicator */
.chat-msg.thinking {
  align-self: flex-start;
  background: transparent;
  color: var(--text-muted);
  font-style: italic;
  font-size: 12px;
}

.chat-msg.thinking::after {
  content: "";
  animation: dots 1.4s steps(4, end) infinite;
}

@keyframes dots {
  0%   { content: ""; }
  25%  { content: "."; }
  50%  { content: ".."; }
  75%  { content: "..."; }
  100% { content: ""; }
}

/* ── Chat input row ───────────────────────────────────────────────────────── */

#chat-input-row {
  display: flex;
  gap: 6px;
  flex-shrink: 0;            /* never collapse — always visible */
  padding-top: 2px;
}

#chat-input {
  flex: 1;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/completed-flips.css"
/*!***********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/completed-flips.css ***!
  \***********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Completed flips table --------------------------------------------------- */

.portfolio-history-toolbar {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
  align-items: center;
}

.portfolio-history-toolbar input[type="text"] {
  flex: 1;
  padding: 4px 8px;
  font-size: 11px;
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
  background: var(--bg-input);
  color: var(--text-main);
}

.portfolio-history-toolbar input[type="text"]::placeholder {
  color: var(--text-muted);
  opacity: 0.6;
}

#export-csv-btn {
  padding: 4px 10px;
  font-size: 11px;
  white-space: nowrap;
  background: var(--bg-elevated);
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
  color: var(--text-main);
  cursor: pointer;
  transition: background 0.15s;
}

#export-csv-btn:hover {
  background: var(--accent-primary);
  color: var(--text-bright);
}

#completed-flips-list {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.completed-flips-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
}

.completed-flips-table th {
  text-align: left;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 600;
  color: var(--text-heading);
  border-bottom: 2px solid var(--border-main);
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  background: var(--bg-elevated);
}

.completed-flips-table th:hover {
  color: var(--text-bright);
}

.completed-flips-table th .sort-arrow {
  margin-left: 2px;
  font-size: 9px;
  color: var(--text-muted);
}

.completed-flips-table td {
  padding: 4px 8px;
  border-bottom: 2px solid var(--border-main);
  color: var(--text-main);
  white-space: nowrap;
}

.completed-flips-table tr.win td:first-child {
  border-left: 3px solid var(--accent-green-bright);
}

.completed-flips-table tr.loss td:first-child {
  border-left: 3px solid var(--accent-red-dark);
}

.completed-flips-table .profit-cell {
  font-weight: 600;
}

.completed-flips-table .profit-cell.win {
  color: var(--accent-green);
}

.completed-flips-table .profit-cell.loss {
  color: var(--accent-red);
}


`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/detail-panel.css"
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/detail-panel.css ***!
  \********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── Expandable detail panel ──────────────────────────────────────────────── */

.market-card-detail {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease, padding 0.2s ease;
  padding: 0 8px;
  background: var(--bg-main);
  border-top: none;
}

.market-card.expanded .market-card-detail {
  max-height: 600px;
  padding: 6px 8px;
  border-top: 1px solid var(--border-main);
  background: var(--detail-expanded-bg);
  overflow-y: auto;
}

/* ── Detail group sections ────────────────────────────────────────────────── */

.detail-group {
  padding: 4px 0;
}

.detail-group + .detail-group {
  border-top: 1px solid var(--border-main);
}

.detail-group-title {
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-accent, var(--text-muted));
  padding: 4px 0 2px;
  margin: 0;
}

.detail-group-predictive {
  border-left: 3px solid var(--accent-primary);
  padding-left: 8px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/disclaimer.css"
/*!******************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/disclaimer.css ***!
  \******************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── Site Disclaimer Overlay ──────────────────────────────────────────────── */

.disclaimer-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--modal-backdrop, rgba(0, 0, 0, 0.75));
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.disclaimer-overlay.hidden {
  display: none;
}

.disclaimer-card {
  background: var(--bg-main, #1e1e1e);
  border: 1px solid var(--accent-primary, #4fc3f7);
  border-radius: 8px;
  width: 460px;
  max-width: 92vw;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
  animation: disclaimer-in 0.2s ease-out;
  padding: 0;
}

@keyframes disclaimer-in {
  from { opacity: 0; transform: scale(0.95) translateY(12px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

.disclaimer-header {
  padding: 14px 16px 10px;
  border-bottom: 2px solid var(--border-main, #333);
  text-align: center;
}

.disclaimer-header h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: var(--accent-primary, #4fc3f7);
  letter-spacing: 0.3px;
}

.disclaimer-body {
  padding: 14px 16px;
  font-size: 13px;
  line-height: 1.55;
  color: var(--text-main, #ccc);
}

.disclaimer-body h3 {
  margin: 12px 0 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-bright, #eee);
}

.disclaimer-body h3:first-child {
  margin-top: 0;
}

.disclaimer-body ul {
  margin: 4px 0 8px 18px;
  padding: 0;
}

.disclaimer-body li {
  margin-bottom: 4px;
}

.disclaimer-body .disclaimer-warning {
  color: var(--accent-gold, #ffc107);
  font-weight: 600;
}

.disclaimer-footer {
  padding: 10px 16px 14px;
  border-top: 1px solid var(--border-main, #333);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.disclaimer-persist-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text-muted, #888);
  cursor: pointer;
  user-select: none;
}

.disclaimer-persist-label input[type="checkbox"] {
  accent-color: var(--accent-primary, #4fc3f7);
  cursor: pointer;
}

.disclaimer-ack-btn {
  padding: 8px 28px;
  font-size: 13px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: color-mix(in srgb, var(--accent-primary, #4fc3f7) 65%, #000);
  color: var(--text-bright);
  transition: background 0.15s, transform 0.1s;
}

.disclaimer-ack-btn:hover {
  background: color-mix(in srgb, var(--accent-primary, #4fc3f7) 80%, #000);
}

.disclaimer-ack-btn:active {
  transform: scale(0.97);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/favourites.css"
/*!******************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/favourites.css ***!
  \******************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Favourites section -------------------------------------------------------------- */

.favorites-section {
  margin-bottom: 8px;
  border: 1px solid var(--border-section);
  border-radius: 6px;
  background: var(--bg-main);
  overflow: hidden;
}

.favorites-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
  background: var(--bg-panel);
  border-bottom: 1px solid var(--border-section);
}

.favorites-header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

#favorites-sort-select {
  font-size: 10px;
  padding: 1px 4px;
  background: var(--bg-input);
  border: 1px solid var(--border-input);
  color: var(--text-muted);
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.favorites-header h3 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-gold);
}

.favorites-header .view-btn {
  font-size: 14px;
  padding: 0 4px;
}

/* -- Clickable section headers -------------------------------------------------- */

.section-header-clickable {
  cursor: pointer;
  user-select: none;
}

.section-header-clickable:hover {
  background: var(--bg-input);
}

/* -- Allocation Suggestions section -------------------------------------------- */

.allocation-section {
  margin-bottom: 8px;
  border: 1px solid var(--border-section);
  border-radius: 6px;
  background: var(--bg-main);
  overflow: hidden;
}

.allocation-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
  background: var(--bg-panel);
  border-bottom: 1px solid var(--border-section);
}

.allocation-header h3 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-gold);
}

.allocation-header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.allocation-header .view-btn {
  font-size: 14px;
  padding: 0 4px;
}

.allocation-disclaimer {
  margin: 6px 10px 4px;
  padding: 6px 8px;
  font-size: 11px;
  color: var(--text-muted);
  background: var(--bg-input);
  border-left: 3px solid var(--accent-gold);
  border-radius: var(--radius-sm);
  line-height: 1.4;
}

.allocation-input-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px 8px;
  flex-wrap: wrap;
}

.allocation-input-row label {
  font-size: 12px;
  color: var(--text-main);
  white-space: nowrap;
}

.allocation-input-row input {
  flex: 1;
  min-width: 100px;
  max-width: 200px;
  padding: 4px 8px;
  font-size: 12px;
  background: var(--bg-input);
  border: 1px solid var(--border-input);
  color: var(--text-main);
  border-radius: 4px;
}

.allocation-input-row button {
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid var(--accent-primary);
  background: var(--accent-primary);
  color: var(--bg-main);
}

.allocation-input-row button:hover {
  opacity: 0.85;
}

.allocation-input-row select {
  padding: 4px 6px;
  font-size: 12px;
  background: var(--bg-input);
  border: 1px solid var(--border-input);
  color: var(--text-main);
  border-radius: 4px;
  cursor: pointer;
}

.allocation-results-table {
  width: 100%;
  table-layout: auto;
  font-size: 11px;
  border-collapse: collapse;
  margin-top: 4px;
}

#allocation-results {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.allocation-results-table th,
.allocation-results-table td {
  padding: 4px 6px;
  text-align: left;
  border-bottom: 1px solid var(--border-section);
  white-space: nowrap;
}

.allocation-results-table tbody tr:nth-child(odd) {
  background: color-mix(in srgb, var(--bg-panel) 60%, transparent);
}

.allocation-results-table th {
  font-size: 10px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.3px;
  background: var(--bg-panel);
  position: sticky;
  top: 0;
}

.allocation-results-table td {
  color: var(--text-main);
}

.allocation-results-table .alloc-item-name {
  font-weight: 600;
  color: var(--text-bright);
  width: 100%;
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.allocation-results-table .alloc-item-link {
  cursor: pointer;
  transition: color 0.15s;
}

.allocation-results-table .alloc-item-link:hover {
  color: var(--accent-primary);
  text-decoration: underline;
}

.allocation-results-table .alloc-gp {
  font-variant-numeric: tabular-nums;
  text-align: right;
  width: 1%;
}

.allocation-results-table .alloc-profit {
  font-variant-numeric: tabular-nums;
  text-align: right;
  color: var(--text-price);
  font-weight: 600;
  width: 1%;
}

.allocation-results-table .alloc-pct {
  text-align: right;
  color: var(--text-muted);
  font-size: 10px;
  width: 1%;
}

.allocation-summary-row td {
  font-weight: 700;
  border-top: 2px solid var(--border-section);
  padding-top: 6px;
}

.allocation-empty {
  padding: 8px 10px;
  font-size: 11px;
  color: var(--text-muted);
  font-style: italic;
}

.allocation-strategy-hint {
  margin: 4px 10px 2px;
  font-size: 10px;
  color: var(--text-muted);
  font-style: italic;
}

.allocation-no-data {
  color: var(--text-muted);
  font-style: italic;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/filters.css"
/*!***************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/filters.css ***!
  \***************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Filter bar ------------------------------------------------------------- */

.filter-bar {
  display: flex;
  gap: 6px;
  margin-bottom: 0;
  flex-wrap: wrap;
}

/* Contextual spacing when filter bar lives inside a bordered section */
.top20-section .filter-bar {
  padding: 6px 10px;
  border-bottom: 1px solid var(--border-section);
}

.filter-bar select {
  flex: 1 1 0;
  min-width: 0;
  font-size: 11px;
  padding: 3px 5px;
}

.refresh-btn {
  flex-shrink: 0;
  font-size: 11px;
  padding: 3px 10px;
  background: var(--bg-muted);
  border: 1px solid var(--border-input);
  color: var(--text-main);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background 0.15s;
}

.refresh-btn:hover {
  background: var(--accent-primary);
  color: var(--text-bright);
}

/* -- Full Market Scan button ------------------------------------------------ */

.scan-btn {
  flex-shrink: 0;
  font-size: 10px;
  padding: 2px 8px;
  background: var(--accent-primary);
  border: 1px solid var(--border-input);
  color: var(--text-bright);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background 0.15s, opacity 0.15s;
}

.scan-btn:hover {
  background: var(--accent-hover, var(--accent-primary));
  filter: brightness(1.15);
}

.scan-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: none;
}

/* -- Deep-history checkbox label -------------------------------------------- */

.deep-history-label {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: var(--text-muted);
  cursor: pointer;
  white-space: nowrap;
}

.deep-history-label input[type="checkbox"] {
  margin: 0;
  accent-color: var(--accent-primary);
}

/* -- Background sync progress bar ------------------------------------------- */

.sync-progress {
  margin: 6px 0;
  padding: 4px 8px;
  background: var(--bg-muted);
  border: 1px solid var(--border-input);
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.sync-progress.hidden {
  display: none;
}

.sync-progress-track {
  flex: 1;
  height: 8px;
  background: var(--bg-card, #1e1e2e);
  border-radius: 4px;
  overflow: hidden;
}

.sync-progress-fill {
  height: 100%;
  width: 0%;
  background: var(--accent-primary);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.sync-progress-text {
  font-size: 10px;
  color: var(--text-muted);
  white-space: nowrap;
  min-width: clamp(80px, 25%, 120px);
}

/* -- Custom filter precision controls --------------------------------------- */

.custom-filter-group {
  margin-bottom: 0;
  padding: 6px 10px;
  background: var(--bg-filter);
  border-bottom: 1px solid var(--border-section);
  border-radius: 0;
}

/* Standalone context (outside a bordered section) */
:not(.top20-section) > .custom-filter-group {
  margin-bottom: 6px;
  padding: 4px 6px;
  border: 2px solid var(--border-main);
  border-radius: var(--radius-sm);
}

.custom-filter-label {
  display: block;
  font-size: 10px;
  color: var(--text-soft);
  margin-bottom: 2px;
  margin-top: 4px;
}

.custom-filter-label:first-child {
  margin-top: 0;
}

.custom-filter-label .hint {
  color: var(--text-dimmed);
}

.slider-row {
  display: flex;
  gap: 6px;
  align-items: center;
}

.slider-row input[type="range"] {
  flex: 1 1 0;
  min-width: 0;
  height: 16px;
  cursor: pointer;
  accent-color: var(--accent-primary);
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
}

/* Track */
.slider-row input[type="range"]::-webkit-slider-runnable-track {
  height: 4px;
  border-radius: 2px;
  background: var(--border-input);
}

.slider-row input[type="range"]::-moz-range-track {
  height: 4px;
  border-radius: 2px;
  border: none;
  background: var(--border-input);
}

/* Thumb */
.slider-row input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: none;
  margin-top: -5px;
  transition: background 0.15s;
}

.slider-row input[type="range"]::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: none;
}

/* Hover / focus */
.slider-row input[type="range"]:hover::-webkit-slider-thumb {
  background: var(--accent-primary-hover);
}

.slider-row input[type="range"]:hover::-moz-range-thumb {
  background: var(--accent-primary-hover);
}

.slider-row input[type="range"]:focus {
  outline: none;
}

.slider-row input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 2px var(--accent-focus);
}

.slider-row input[type="number"] {
  width: 80px;
  max-width: 100%;
  flex-shrink: 1;
  font-size: 11px;
  padding: 2px 4px;
  background: var(--bg-number-input);
  border: 1px solid var(--border-input);
  color: var(--text-main);
  border-radius: var(--radius-sm);
  text-align: right;
}

.slider-row input[type="number"]:focus {
  outline: 1px solid var(--accent-primary);
  border-color: var(--accent-primary);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/highlights.css"
/*!******************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/highlights.css ***!
  \******************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── Semantic text-colour highlight classes ──────────────────────────────────
   Applied by JS on inline text. Doubled selector for specificity over
   \`.market-card .item-name\`, \`.detail-value\` etc. — no !important needed. */

.market-card .hype-text,
.hype-text.hype-text {
  color: var(--accent-hype);
}

.market-card .buy-highlight,
.buy-highlight.buy-highlight {
  color: var(--accent-blue-text);
}

.market-card .sell-highlight,
.sell-highlight.sell-highlight {
  color: var(--accent-teal);
}

.market-card .profit-highlight,
.profit-highlight.profit-highlight {
  color: var(--accent-teal);
}

.market-card .risky-text,
.risky-text.risky-text {
  color: var(--accent-red);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/info-banner.css"
/*!*******************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/info-banner.css ***!
  \*******************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ═══════════════════════════════════════════════════════════════════════════
 *  Info Banner — non-blocking dismissible banner shown after startup
 *  when price history data is unavailable.
 * ═══════════════════════════════════════════════════════════════════════════ */

.info-banner {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  margin: 8px 0;
  background: var(--surface-alt);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent-primary);
  border-radius: 6px;
  color: var(--text-main);
  font-size: 13px;
  line-height: 1.5;
  animation: info-banner-in 0.3s ease-out;
}

.info-banner-icon {
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 1px;
}

.info-banner-content {
  flex: 1;
  min-width: 0;
}

.info-banner-text {
  margin: 0 0 10px;
}

.info-banner-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.info-banner-scan-btn {
  padding: 6px 14px;
  background: var(--accent-primary);
  color: var(--surface);
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}

.info-banner-scan-btn:hover {
  opacity: 0.9;
}

.info-banner-dismiss-btn {
  padding: 6px 14px;
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
}

.info-banner-dismiss-btn:hover {
  color: var(--text-main);
  border-color: var(--text-muted);
}

.info-banner-hint {
  margin-top: 8px;
  font-size: 11px;
  color: var(--text-muted);
  opacity: 1;
  transition: opacity 0.5s ease-out;
}

.info-banner-hint.fade-out {
  opacity: 0;
}

@keyframes info-banner-in {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Responsive: stack buttons below text on narrow screens ─────────── */
@media (max-width: 600px) {
  .info-banner {
    flex-direction: column;
    gap: 8px;
  }

  .info-banner-actions {
    width: 100%;
  }

  .info-banner-scan-btn,
  .info-banner-dismiss-btn {
    flex: 1;
    text-align: center;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/inputs.css"
/*!**************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/inputs.css ***!
  \**************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Shared input / button styles ------------------------------------------- */

input[type="text"],
input[type="password"] {
  background: var(--bg-input);
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
  padding: 5px 8px;
  color: var(--text-main);
  font-family: inherit;
  font-size: 12px;
  outline: none;
  transition: border-color 0.15s;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-color: var(--accent-focus);
}

button {
  background: var(--accent-primary);
  border: none;
  border-radius: var(--radius-sm);
  padding: 5px 14px;
  color: var(--text-bright);
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;
}

button:hover {
  background: var(--accent-primary-hover);
}

button:active {
  background: var(--accent-primary-active);
}

button:disabled {
  background: var(--bg-input);
  color: var(--text-dimmed);
  cursor: not-allowed;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/interactive-chart.css"
/*!*************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/interactive-chart.css ***!
  \*************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ═══════════════════════════════════════════════════════════════════════════
 *  Interactive Chart — dual-canvas overlay + floating tooltip
 *
 *  Base canvas: static grid, price line, EMA, area gradient (redrawn on data change)
 *  Interaction canvas: crosshairs + highlight dot (redrawn on mousemove)
 *  Tooltip: absolutely-positioned <div> shown on hover
 * ═══════════════════════════════════════════════════════════════════════════ */

/* ── Container (stacks both canvases + tooltip) ─────────────────────────────── */
.chart-container {
  position: relative;
  width: 100%;
  margin-bottom: 14px;
  cursor: crosshair;
  touch-action: pan-y;        /* allow vertical page scroll, capture horizontal */
  user-select: none;
  -webkit-user-select: none;
}

/* ── Canvas wrapper (aligns interaction canvas exactly over the base canvas) ── */
.chart-canvas-wrap {
  position: relative;
  width: 100%;
}

/* ── Base canvas (static layer) ─────────────────────────────────────────────── */
.chart-container .chart-base-canvas {
  display: block;
  width: 100%;
  border-radius: 4px;
  background: var(--bg-elevated);
}

/* ── Interaction overlay canvas ─────────────────────────────────────────────── */
.chart-container .chart-interaction-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;       /* events pass through to container */
  border-radius: 4px;
}

/* ── Floating tooltip ───────────────────────────────────────────────────────── */
.chart-tooltip {
  position: absolute;
  display: none;
  pointer-events: none;
  z-index: 20;
  background: var(--bg-main, #1e1e1e);
  border: 1px solid var(--accent-primary, #569cd6);
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 11px;
  line-height: 1.5;
  color: var(--text-main, #ccc);
  box-shadow: var(--shadow-md);
  white-space: nowrap;
  max-width: 240px;
  transition: opacity 0.08s ease;
}

.chart-tooltip.visible {
  display: block;
}

/* Tooltip data rows */
.chart-tooltip-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.chart-tooltip-label {
  color: var(--text-muted, #888);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.chart-tooltip-value {
  font-weight: 600;
  color: var(--text-bright, #fff);
}

.chart-tooltip-value.up {
  color: var(--accent-green-bright, #4ec9b0);
}

.chart-tooltip-value.down {
  color: var(--accent-red, #f44747);
}

/* ── Zoom hint badge (sits below the canvas, never overlaps data) ───────────── */
.chart-zoom-hint {
  text-align: right;
  font-size: 9px;
  color: var(--text-muted, #666);
  padding: 2px 6px 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.chart-container:hover .chart-zoom-hint {
  opacity: 0.85;
}

/* ── Layer toggle pill strip ────────────────────────────────────────────────── */
.chart-layer-toggles {
  display: flex;
  gap: 5px;
  padding: 4px 2px 6px;
  flex-wrap: wrap;
}

.chart-layer-pill {
  --pill-color: #888;
  appearance: none;
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 2px 9px 2px 22px;
  font-size: 10px;
  font-family: "Segoe UI", sans-serif;
  line-height: 1.4;
  cursor: pointer;
  background: var(--bg-elevated, #2a2a2a);
  color: var(--text-muted, #888);
  transition: background 0.15s, color 0.15s, border-color 0.15s, opacity 0.15s;
  opacity: 0.6;
  position: relative;
}

/* Swatch indicator (line/bar preview matching graph style) */
.chart-layer-pill::before {
  content: "";
  position: absolute;
  left: 7px;
  top: 50%;
  width: 10px;
  height: 2px;
  background: var(--text-muted, #888);
  border-radius: 1px;
  transform: translateY(-50%);
  transition: background 0.15s;
}

/* Dashed swatch for EMA */
.chart-layer-pill[data-layer="ema"]::before {
  background: repeating-linear-gradient(
    90deg,
    var(--text-muted, #888) 0px, var(--text-muted, #888) 3px,
    transparent 3px, transparent 5px
  );
  height: 2px;
}

/* Bar swatch for Volume */
.chart-layer-pill[data-layer="volume"]::before {
  width: 10px;
  height: 8px;
  border-radius: 1px 1px 0 0;
}

/* Dot swatch for Dots */
.chart-layer-pill[data-layer="dots"]::before {
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.chart-layer-pill:hover {
  opacity: 0.85;
}

.chart-layer-pill.active {
  opacity: 1;
  color: var(--pill-color);
  border-color: var(--pill-color);
  background: var(--bg-elevated);
}

/* Active swatch colours */
.chart-layer-pill.active::before {
  background: var(--pill-color);
}

.chart-layer-pill.active[data-layer="ema"]::before {
  background: repeating-linear-gradient(
    90deg,
    var(--pill-color) 0px, var(--pill-color) 3px,
    transparent 3px, transparent 5px
  );
}

.chart-layer-pill.active[data-layer="volume"]::before {
  background: var(--pill-color);
  opacity: 0.6;
}

/* Light mode adjustments */
body[data-mode="light"] .chart-layer-pill {
  border-color: var(--border-subtle);
  background: var(--bg-elevated, #f0f0f0);
}

body[data-mode="light"] .chart-layer-pill.active {
  background: var(--bg-elevated);
}

/* ── Responsive heights (match existing graph-modal-canvas sizing) ──────────── */
.graph-modal-body .chart-base-canvas,
.analytics-graph-section .chart-base-canvas {
  height: 200px;
}

@media (min-width: 480px) {
  .analytics-graph-section .chart-base-canvas {
    height: 220px;
  }
}

@media (max-width: 600px) {
  .analytics-graph-section .chart-base-canvas {
    height: 160px;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/layout-toggle.css"
/*!*********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/layout-toggle.css ***!
  \*********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Layout toggle buttons --------------------------------------------------- */

.layout-toggle {
  display: flex;
  gap: 4px;
  margin-bottom: 6px;
}

.layout-btn {
  flex: 1;
  font-size: 11px;
  padding: 4px 8px;
  background: var(--bg-muted);
  border: 1px solid var(--border-input);
  color: var(--text-muted);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.layout-btn:hover {
  background: var(--bg-input);
  color: var(--text-main);
}

.layout-btn.active {
  background: var(--accent-primary);
  color: var(--text-bright);
  border-color: var(--accent-primary);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/market-cards.css"
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/market-cards.css ***!
  \********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Market card (shared across all views) ---------------------------------- */

/* Rank position badge (Top 20 only) */
.rank-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: var(--badge-radius, 3px);
  background: var(--accent-primary);
  color: var(--bg-main);
  line-height: 1.4;
  white-space: nowrap;
  flex-shrink: 0;
  letter-spacing: 0.02em;
}

.market-card {
  background: var(--bg-panel);
  border: 1px solid var(--border-card);
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.15s;
}

.market-card:hover {
  border-color: var(--border-input);
}

.market-card.risky {
  border-color: var(--accent-red-border);
}

.market-card.risky:hover {
  border-color: var(--accent-red-border-hover);
}

.market-card.hype {
  border-color: var(--border-hype);
}

.market-card.hype:hover {
  border-color: var(--border-hype-hover);
}

/* Flip recommendation badges in the card header */

.flip-badges {
  margin-left: auto;
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  min-width: 0;
  flex-shrink: 1;
}

/* Shared badge base � sizing tokens */
.buy-badge,
.sell-badge,
.profit-badge,
.velocity-badge,
.hype-badge,
.predicted-badge,
.ema-badge,
.vol-badge {
  display: inline-block;
  font-size: var(--badge-font-md);
  padding: var(--badge-padding-md);
  border-radius: var(--badge-radius);
  font-weight: var(--badge-font-weight);
  line-height: 1.3;
  white-space: nowrap;
}

.buy-badge[title],
.sell-badge[title],
.profit-badge[title],
.velocity-badge[title] {
  cursor: help;
}

.buy-badge {
  background: var(--badge-buy-bg);
  color: var(--accent-blue-text);
}

.sell-badge {
  background: var(--badge-sell-bg);
  color: var(--accent-green);
}

.sell-badge.risky {
  background: var(--accent-red-bg);
  color: var(--accent-red);
}

.profit-badge {
  background: var(--badge-sell-bg);
  color: var(--accent-teal);
  font-weight: 700;
  padding: 2px 7px;
  letter-spacing: 0.02em;
}

.profit-badge.negative {
  background: var(--accent-red-bg);
  color: var(--accent-red);
  font-weight: 700;
}

.hype-badge {
  background: var(--badge-hype-bg);
  color: var(--accent-hype);
  animation: hype-pulse 2s ease-in-out infinite;
}

/* -- Trade velocity badges ---------------------------------------------- */

.velocity-badge {
  /* inherits sizing from shared badge base above */
}

.velocity-insta {
  background: var(--badge-velocity-insta-bg);
  color: var(--accent-green-bright);
}

.velocity-active {
  background: var(--badge-velocity-active-bg);
  color: var(--accent-blue-text);
}

.velocity-slow {
  background: var(--badge-velocity-slow-bg);
  color: var(--accent-gold);
}

.velocity-veryslow {
  background: var(--badge-velocity-muted-bg);
  color: var(--text-muted);
}

.trend-badge {
  font-size: 10px;
  padding: 1px 6px;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  font-weight: 600;
}

.trend-downtrend {
  background: var(--badge-trend-down-bg);
  color: var(--accent-red);
}

.trend-uptrend {
  background: var(--badge-trend-up-bg);
  color: var(--accent-green-bright);
}

@keyframes hype-pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.6; }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/market-panel.css"
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/market-panel.css ***!
  \********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Market data panel ------------------------------------------------------ */

#market-view {
  overflow-y: auto;
  padding: 8px 10px;
}

#market-view h2 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-heading);
  margin: 0;
}

/* -- Top 20 section container ---------------------------------------------------- */

.top20-section {
  margin-bottom: 8px;
  border: 1px solid var(--border-section);
  border-radius: 6px;
  background: var(--bg-main);
  overflow: hidden;
}

.top20-section #market-header {
  padding: 4px 10px;
  background: var(--bg-panel);
  border-bottom: 1px solid var(--border-section);
  margin-bottom: 0;
}

#market-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  flex-wrap: wrap;
  gap: 4px;
}

#market-header h2 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-heading);
  margin: 0;
  white-space: nowrap;
}

.market-header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

/* -- Per-section sort selects ----------------------------------------------- */

.section-sort-select {
  font-size: 10px;
  padding: 4px 6px;
  background: var(--bg-input);
  border: 1px solid var(--border-input);
  color: var(--text-muted);
  border-radius: var(--radius-sm);
  cursor: pointer;
  line-height: 1.2;
}

/* -- View toggle buttons ---------------------------------------------------- */

.view-toggle {
  display: flex;
  gap: 2px;
  align-items: center;
}

/* Compact tiles toggle � March 2026 */
.compact-toggle-label {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  color: var(--text-muted);
  cursor: pointer;
  margin-left: 4px;
  white-space: nowrap;
  user-select: none;
}
.compact-toggle-label input[type="checkbox"] {
  margin: 0;
  accent-color: var(--accent-primary);
  cursor: pointer;
}
.compact-toggle-label:hover {
  color: var(--text-main);
}

/* Hide predictive badges in compact tile/hybrid mode */
.predictive-badges.compact-hidden {
  display: none;
}

.view-btn {
  background: var(--bg-muted);
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
  padding: 4px 7px;
  color: var(--text-muted);
  font-size: 13px;
  cursor: pointer;
  line-height: 1;
  min-width: 24px;
  text-align: center;
  transition: background 0.15s, color 0.15s;
}

.view-btn:hover {
  background: var(--bg-input);
  color: var(--text-main);
}

.view-btn.active {
  background: var(--accent-primary);
  color: var(--text-bright);
  border-color: var(--accent-primary);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/modal-base.css"
/*!******************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/modal-base.css ***!
  \******************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── Shared modal base styles ─────────────────────────────────────────────────
   Provides common backdrop, close-button, and header styling for all modals.
   Individual modal files only need to specify size, layout, and unique rules.
   ────────────────────────────────────────────────────────────────────────────── */

/* ── Backdrop (fixed overlay) ─────────────────────────────────────────────── */

.item-modal-backdrop,
.graph-modal-backdrop,
.analytics-modal-backdrop,
.flip-detail-backdrop,
.edit-flip-backdrop,
.edit-completed-flip-backdrop,
.guide-backdrop,
.about-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  background: var(--modal-backdrop, rgba(0, 0, 0, 0.55));
}

/* Setup guide must sit above the settings backdrop (z-index: 600). */
.setup-guide-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 700;
  background: var(--modal-backdrop, rgba(0, 0, 0, 0.55));
}

/* Analytics and graph modals use fade-in transition instead of display toggle. */
.analytics-modal-backdrop,
.graph-modal-backdrop {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
}
.analytics-modal-backdrop {
  z-index: 10000;
  background: var(--modal-backdrop);
}
.analytics-modal-backdrop.visible,
.graph-modal-backdrop.visible {
  opacity: 1;
  pointer-events: auto;
}

/* Non-transition modals use display:none/flex toggle. */
.item-modal-backdrop,
.flip-detail-backdrop,
.edit-flip-backdrop,
.edit-completed-flip-backdrop,
.setup-guide-backdrop,
.guide-backdrop,
.about-backdrop {
  display: none;
}
.item-modal-backdrop.visible,
.flip-detail-backdrop.visible,
.edit-flip-backdrop.visible,
.edit-completed-flip-backdrop.visible,
.setup-guide-backdrop.visible,
.guide-backdrop.visible,
.about-backdrop.visible {
  display: flex;
}

/* ── Close button (shared) ────────────────────────────────────────────────── */

.item-modal-close,
.analytics-modal-close,
.about-modal-close {
  all: unset;
  cursor: pointer;
  color: var(--text-muted);
  font-size: 18px;
  line-height: 1;
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  transition: color 0.15s, background 0.15s;
}
.item-modal-close:hover,
.analytics-modal-close:hover,
.about-modal-close:hover {
  color: var(--accent-red);
  background: var(--close-hover-bg);
}

/* Analytics close button is slightly larger. */
.analytics-modal-close {
  font-size: 20px;
  padding: 4px 8px;
  border-radius: 4px;
  margin-left: auto;
}

/* ── Modal entry animation ────────────────────────────────────────────────── */

@keyframes modal-in {
  from { opacity: 0; transform: scale(0.95) translateY(8px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/modals.css"
/*!**************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/modals.css ***!
  \**************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Floating Item Detail Modal ---------------------------------------------- */
/* Backdrop and close-button base styles are in modal-base.css. */

.item-modal {
  background: var(--bg-main);
  border: 1px solid var(--accent-blue-text);
  border-radius: 6px;
  width: 380px;
  max-width: 92vw;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px var(--modal-shadow);
  animation: modal-in 0.15s ease-out;
}

.item-modal-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-bottom: 2px solid var(--border-main);
}

.item-modal-name {
  flex: 1;
  color: var(--text-accent);
  font-size: 15px;
  font-weight: 600;
}

/* Close button base styles in modal-base.css */

.item-modal-body {
  padding: 10px 12px;
}

.item-modal-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 8px;
}

/* (modal-sparkline removed � chart now in dedicated graph modal) */

/* -- Graph Modal ------------------------------------------------------------ */
/* Backdrop, opacity transition, and close button base styles in modal-base.css. */

.graph-modal-backdrop {
  z-index: 9999;
}

.graph-modal {
  background: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: 8px;
  width: 92%;
  max-width: 520px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
}

.graph-modal-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
}
.graph-modal-title {
  flex: 1;
  font-weight: 600;
  font-size: 14px;
  color: var(--text-main);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.graph-modal-body {
  padding: 12px;
}

.graph-modal-canvas {
  display: block;
  width: 100%;
  height: 180px;
  margin-bottom: 12px;
  border-radius: 4px;
  background: var(--bg-elevated);
}

.graph-history-status {
  display: none;
  text-align: center;
  padding: 8px 4px;
  font-size: 11px;
  color: var(--text-muted, #888);
}
.graph-history-status.visible {
  display: block;
}
.graph-history-status button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--accent-blue, #569cd6);
  text-decoration: underline;
  font-size: 11px;
  padding: 0 2px;
}
.graph-history-status button:disabled {
  opacity: 0.5;
  cursor: default;
}

.graph-stats {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.graph-stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  border-bottom: 1px solid var(--border);
  font-size: 12px;
}
.graph-stat-row:last-child {
  border-bottom: none;
}
.graph-stat-label {
  color: var(--text-muted);
}
.graph-stat-value {
  font-weight: 600;
  color: var(--text-bright);
}

/* -- Graph modal history-range dropdown ------------------------------------ */

.graph-modal-range-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.graph-modal-range-row label {
  font-size: 11px;
  color: var(--text-muted);
}

.graph-modal-range-row select {
  padding: 2px 6px;
  font-size: 11px;
  background: var(--bg-input);
  color: var(--text-main);
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/portfolio-dashboard.css"
/*!***************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/portfolio-dashboard.css ***!
  \***************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── Portfolio Dashboard (Cumulative P&L + Win/Loss) ────────────────────────── */

.dashboard-chart-section {
  margin-bottom: 8px;
  border: 1px solid var(--border-section);
  border-radius: 6px;
  background: var(--bg-main);
  overflow: visible;
}

.dashboard-chart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
  background: var(--bg-panel);
  border-bottom: 1px solid var(--border-section);
  border-radius: 6px 6px 0 0;
}

.dashboard-chart-header .view-btn {
  font-size: 14px;
  padding: 0 4px;
}

.dashboard-chart-title {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-gold);
}

.dashboard-canvas-wrap {
  position: relative;
  background: var(--bg-panel);
  border: 2px solid var(--border-main);
  border-radius: 4px;
  padding: 8px;
}

.dashboard-canvas-wrap canvas {
  display: block;
  width: 100%;
}

/* ── Cumulative P&L dual-canvas wrap ────────────────────────────────────────── */

.dashboard-canvas-wrap .chart-canvas-wrap {
  position: relative;
  width: 100%;
  overflow: visible;
  cursor: crosshair;
  user-select: none;
  -webkit-user-select: none;
}

.dashboard-canvas-wrap .chart-base-canvas {
  display: block;
  width: 100%;
  border-radius: 4px;
}

.dashboard-canvas-wrap .chart-interaction-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: 4px;
}

/* ── Cumulative P&L chart ───────────────────────────────────────────────────── */

.pnl-chart-tooltip {
  position: absolute;
  display: none;
  pointer-events: none;
  z-index: 20;
  background: var(--bg-main, #1e1e1e);
  border: 1px solid var(--accent-primary, #569cd6);
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 11px;
  color: var(--text-main);
  line-height: 1.5;
  white-space: nowrap;
  max-width: 240px;
  box-shadow: var(--shadow-md);
  transition: opacity 0.08s ease;
}

.pnl-chart-tooltip.visible {
  display: block;
}

.pnl-tooltip-date {
  font-weight: 600;
  color: var(--text-heading);
}

.pnl-tooltip-item {
  color: var(--text-muted);
  font-size: 10px;
}

.pnl-tooltip-profit {
  font-weight: 600;
}

.pnl-tooltip-cumulative {
  font-weight: 600;
  margin-top: 2px;
}

/* ── Win/Loss donut ─────────────────────────────────────────────────────────── */

.winloss-chart-wrap {
  display: flex;
  align-items: center;
  gap: 16px;
}

.winloss-legend {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 11px;
  color: var(--text-main);
}

.winloss-legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.winloss-swatch {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  flex-shrink: 0;
}

.winloss-swatch.win {
  background: var(--accent-green);
}

.winloss-swatch.loss {
  background: var(--accent-red);
}

.winloss-count {
  font-weight: 600;
}

/* ── Empty state ────────────────────────────────────────────────────────────── */

.dashboard-empty {
  color: var(--text-dimmed);
  font-size: 11px;
  font-style: italic;
  padding: 12px 0;
  text-align: center;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/portfolio.css"
/*!*****************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/portfolio.css ***!
  \*****************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Portfolio view ------------------------------------------------------------------- */

#portfolio-view {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 8px 10px 10px;
}

#portfolio-view h2 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-heading);
  margin: 0 0 6px;
  flex-shrink: 0;
}

/* Add-flip form */

.portfolio-form {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
  padding: 6px;
  background: var(--bg-panel);
  border: 2px solid var(--border-main);
  border-radius: 4px;
}

.portfolio-form input[type="text"],
.portfolio-form input[type="number"] {
  width: 100%;
  font-size: 11px;
  padding: 4px 6px;
  background: var(--bg-input);
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
  color: var(--text-main);
}

.portfolio-form input[type="text"]:focus,
.portfolio-form input[type="number"]:focus {
  border-color: var(--accent-focus);
  outline: none;
}

/* Autocomplete dropdown */

.autocomplete-wrap {
  position: relative;
}

.autocomplete-list {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 50;
  max-height: 180px;
  overflow-y: auto;
  background: var(--bg-elevated);
  border: 1px solid var(--accent-focus);
  border-top: none;
  border-radius: 0 0 4px 4px;
}

.autocomplete-list.open {
  display: block;
}

.autocomplete-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  font-size: 11px;
  color: var(--text-main);
  cursor: pointer;
  transition: background .1s;
}

.autocomplete-item:hover,
.autocomplete-item.highlighted {
  background: var(--accent-primary-active);
}

.autocomplete-item-price {
  color: var(--accent-green);
  font-size: 10px;
  margin-left: 8px;
  flex-shrink: 0;
}

.autocomplete-empty {
  padding: 6px 8px;
  font-size: 11px;
  color: var(--text-dimmed);
  font-style: italic;
}

.autocomplete-section {
  padding: 3px 8px;
  font-size: 9px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: var(--bg-main);
  border-top: 2px solid var(--border-main);
  position: sticky;
  top: 0;
  z-index: 1;
}

.autocomplete-section:first-child {
  border-top: none;
}

.portfolio-form-row {
  display: flex;
  gap: 4px;
}

.portfolio-form-row input {
  flex: 1;
  min-width: 0;
}

#add-flip-btn {
  font-size: 11px;
  padding: 4px 10px;
  background: var(--add-flip-bg);
  border: none;
  border-radius: var(--radius-sm);
  color: var(--text-bright);
  cursor: pointer;
  font-weight: 600;
  transition: background .15s;
}

#add-flip-btn:hover {
  background: var(--accent-green-bright);
}

/* Active flips list */

#active-flips-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.flip-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 8px;
  background: var(--bg-panel);
  border: 2px solid var(--border-main);
  border-radius: 4px;
  font-size: 11px;
  transition: border-color .3s;
}

.flip-card.limit-ready {
  border-color: var(--accent-green-bright);
  background: var(--limit-ready-bg);
}

.flip-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flip-item-name {
  font-weight: 600;
  color: var(--text-accent);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.flip-item-link {
  cursor: pointer;
  transition: color 0.15s;
}

.flip-item-link:hover {
  color: var(--accent-primary);
  text-decoration: underline;
}

.completed-item-link {
  cursor: pointer;
  transition: color 0.15s;
}

.completed-item-link:hover {
  color: var(--accent-primary);
  text-decoration: underline;
}

.flip-remove-btn {
  background: transparent;
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  cursor: pointer;
  font-size: 10px;
  padding: 1px 6px;
  transition: background .15s, color .15s;
}

.flip-remove-btn:hover {
  background: var(--accent-red-dark);
  color: var(--text-bright);
  border-color: var(--accent-red-dark);
}

.flip-details {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  color: var(--text-soft);
}

.flip-details span {
  white-space: nowrap;
}

.flip-timer {
  font-weight: 600;
  color: var(--text-heading);
}

.flip-timer.ready {
  color: var(--accent-green-bright);
}

.flip-profit {
  color: var(--accent-green);
  font-weight: 600;
}

.flip-profit.loss {
  color: var(--accent-red);
}

.portfolio-empty {
  color: var(--text-dimmed);
  font-size: 11px;
  font-style: italic;
  padding: 8px 0;
}

/* -- Portfolio sub-navigation ------------------------------------------------- */

.portfolio-sub-nav {
  display: flex;
  gap: 2px;
  margin-bottom: 8px;
  border-bottom: 2px solid var(--border-main);
  padding-bottom: 4px;
}

.portfolio-sub-btn {
  flex: 1;
  padding: 5px 8px;
  background: transparent;
  border: 1px solid var(--border-subtle);
  border-radius: 4px 4px 0 0;
  color: var(--text-muted);
  font-size: 11px;
  cursor: pointer;
  transition: background .15s, color .15s, border-color .15s;
}

.portfolio-sub-btn:hover {
  color: var(--text-main);
  border-color: var(--text-dimmed);
}

.portfolio-sub-btn.active {
  background: var(--bg-elevated);
  color: var(--text-main);
  border-color: var(--accent-primary);
  border-bottom: 2px solid var(--accent-primary);
}

/* -- Portfolio stats dashboard ------------------------------------------------ */

.portfolio-stats {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.stat-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 8px 6px;
  background: var(--bg-panel);
  border: 2px solid var(--border-main);
  border-radius: 4px;
}

.stat-label {
  font-size: 10px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-main);
}

.stat-value.profit {
  color: var(--accent-green);
}

.stat-value.loss {
  color: var(--accent-red);
}

/* -- Completed flip cards ----------------------------------------------------- */

.completed-flip-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 8px;
  background: var(--bg-panel);
  border: 2px solid var(--border-main);
  border-left: 3px solid var(--border-main);
  border-radius: 4px;
  font-size: 11px;
  margin-bottom: 4px;
}

.completed-flip-card.win {
  border-left-color: var(--accent-green-bright);
  background: linear-gradient(90deg, var(--win-glow) 0%, transparent 40%);
}

.completed-flip-card.loss {
  border-left-color: var(--accent-red-dark);
  background: linear-gradient(90deg, var(--loss-glow) 0%, transparent 40%);
}

.completed-flip-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.completed-flip-top .flip-item-name {
  font-weight: 600;
  color: var(--text-accent);
}

.completed-flip-date {
  font-size: 10px;
  color: var(--text-dimmed);
}

.completed-flip-details {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  color: var(--text-soft);
}

.completed-flip-details span {
  white-space: nowrap;
}

.completed-flip-profit {
  font-weight: 600;
}

.completed-flip-profit.win {
  color: var(--accent-green);
}

.completed-flip-profit.loss {
  color: var(--accent-red);
}

/* -- Buy-limit usage badge on active flip cards ------------------------------- */

.flip-limit {
  font-size: 10px;
  color: var(--text-muted);
  font-weight: 500;
  padding: 1px 5px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  white-space: nowrap;
}

/* -- Completed flips table action buttons ------------------------------------- */

.actions-col {
  width: 56px;
  text-align: center;
  white-space: nowrap;
}

.flip-view-btn,
.flip-delete-btn {
  background: transparent;
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 12px;
  padding: 2px 6px;
  line-height: 1;
  transition: background .15s, color .15s, border-color .15s;
}

.flip-view-btn {
  color: var(--text-muted);
  margin-right: 2px;
}

.flip-view-btn:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
  background: var(--bg-elevated);
}

.flip-delete-btn {
  color: var(--text-muted);
}

.flip-delete-btn:hover {
  color: var(--text-bright);
  background: var(--accent-red-dark);
  border-color: var(--accent-red-dark);
}

/* -- Flip Complete button (existing, now alongside remove) -------------------- */

.flip-card-actions {
  display: flex;
  gap: 4px;
  align-items: center;
}

/* -- Flip Detail Modal -------------------------------------------------------- */

.flip-detail-backdrop {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 1200;
  background: var(--modal-backdrop);
  justify-content: center;
  align-items: center;
}

.flip-detail-backdrop.visible {
  display: flex;
}

.flip-detail-modal {
  width: min(440px, 95vw);
  max-height: 85vh;
  overflow-y: auto;
  background: var(--bg-panel);
  border: 2px solid var(--border-main);
  border-radius: 8px;
  padding: 16px;
  color: var(--text-main);
  font-size: 12px;
}

.flip-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.flip-detail-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-heading);
}

.flip-detail-close {
  background: transparent;
  border: 1px solid var(--border-input);
  border-radius: 4px;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 14px;
  padding: 2px 8px;
  transition: background .15s, color .15s;
}

.flip-detail-close:hover {
  background: var(--accent-red-dark);
  color: var(--text-bright);
  border-color: var(--accent-red-dark);
}

.flip-detail-section {
  margin-bottom: 14px;
}

.flip-detail-section-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-muted);
  margin-bottom: 6px;
  padding-bottom: 3px;
  border-bottom: 1px solid var(--border-subtle);
}

.flip-detail-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3px 12px;
}

.flip-detail-label {
  color: var(--text-dimmed);
  font-size: 11px;
}

.flip-detail-value {
  font-weight: 600;
  text-align: right;
  font-size: 11px;
}

.flip-detail-value.win {
  color: var(--accent-green);
}

.flip-detail-value.loss {
  color: var(--accent-red);
}

/* Snapshot comparison table */

.flip-snapshot-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
}

.flip-snapshot-table th {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  color: var(--text-muted);
  padding: 4px 6px;
  border-bottom: 2px solid var(--border-main);
  text-align: left;
}

.flip-snapshot-table td {
  padding: 3px 6px;
  border-bottom: 1px solid var(--border-subtle);
  color: var(--text-soft);
}

.flip-snapshot-table td.snap-label {
  color: var(--text-dimmed);
  font-weight: 500;
}

.flip-snapshot-table td.win {
  color: var(--accent-green);
  font-weight: 600;
}

.flip-snapshot-table td.loss {
  color: var(--accent-red);
  font-weight: 600;
}

.flip-detail-no-snapshot {
  color: var(--text-dimmed);
  font-style: italic;
  font-size: 11px;
  padding: 8px 0;
}

/* -- Edit Flip Modal ------------------------------------------------------ */

.flip-edit-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 14px;
}

.flip-edit-field {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.flip-edit-field label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.flip-edit-field input {
  padding: 6px 8px;
  border: 1px solid var(--border-input);
  border-radius: 4px;
  background: var(--bg-input, var(--bg-main));
  color: var(--text-main);
  font-size: 12px;
  outline: none;
  transition: border-color .15s;
}

.flip-edit-field input:focus {
  border-color: var(--accent-primary);
}

.flip-edit-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.flip-edit-save {
  padding: 6px 14px;
  border: none;
  border-radius: 4px;
  background: var(--accent-primary);
  color: var(--text-bright);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity .15s;
}

.flip-edit-save:hover {
  opacity: 0.85;
}

.flip-edit-cancel {
  padding: 6px 14px;
  border: 1px solid var(--border-input);
  border-radius: 4px;
  background: transparent;
  color: var(--text-muted);
  font-size: 12px;
  cursor: pointer;
  transition: background .15s, color .15s;
}

.flip-edit-cancel:hover {
  background: var(--accent-red-dark);
  color: var(--text-bright);
  border-color: var(--accent-red-dark);
}

/* -- Flip card action buttons --------------------------------------------- */

.flip-card-actions {
  display: flex;
  gap: 4px;
  align-items: center;
  flex-shrink: 0;
}

.flip-complete-btn {
  background: transparent;
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
  color: var(--accent-green);
  cursor: pointer;
  font-size: 11px;
  padding: 1px 6px;
  transition: background .15s, color .15s;
}

.flip-complete-btn:hover {
  background: var(--accent-green-bright);
  color: var(--text-bright);
  border-color: var(--accent-green-bright);
}

/* -- High Alch button on active flip cards ------------------------------ */

.flip-alch-btn {
  background: transparent;
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
  color: var(--accent-gold, var(--text-muted));
  cursor: pointer;
  font-size: 11px;
  padding: 1px 6px;
  transition: background .15s, color .15s, border-color .15s;
}

.flip-alch-btn:hover {
  background: var(--accent-gold, #b8860b);
  color: var(--text-bright);
  border-color: var(--accent-gold, #b8860b);
}

/* -- Alch badge on completed flips table -------------------------------- */

.alch-badge {
  display: inline-block;
  margin-left: 6px;
  font-size: 9px;
  font-weight: 600;
  padding: 1px 5px;
  border-radius: var(--radius-sm);
  background: color-mix(in srgb, var(--accent-gold, #daa520) 15%, transparent);
  color: var(--accent-gold, #daa520);
  vertical-align: middle;
  white-space: nowrap;
}

/* -- Edit button on active flip cards ----------------------------------- */

.flip-edit-btn {
  background: transparent;
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  cursor: pointer;
  font-size: 11px;
  padding: 1px 6px;
  transition: background .15s, color .15s, border-color .15s;
}

.flip-edit-btn:hover {
  background: var(--accent-primary);
  color: var(--text-bright);
  border-color: var(--accent-primary);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/predictive-badges.css"
/*!*************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/predictive-badges.css ***!
  \*************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── Predictive analytics badges on market cards ────────────────────────────── */

.predictive-badges {
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2px;
}

.ema-badge,
.predicted-badge,
.vol-badge {
  /* inherits sizing from shared badge base — only color overrides here */
  cursor: help;
}

.ema-badge {
  background: var(--badge-velocity-active-bg);
  color: var(--accent-blue-text);
}

.ema-badge.up {
  color: var(--accent-green-bright);
  background: var(--badge-trend-up-bg);
}

.ema-badge.down {
  color: var(--accent-red);
  background: var(--badge-trend-down-bg);
}

.ema-badge.neutral {
  color: var(--text-muted);
  background: var(--badge-neutral-bg);
}

.predicted-badge {
  font-weight: 600;
}

.predicted-badge.up {
  color: var(--accent-green-bright);
  background: var(--badge-trend-up-bg);
}

.predicted-badge.down {
  color: var(--accent-red);
  background: var(--badge-trend-down-bg);
}

.predicted-badge.neutral {
  color: var(--text-muted);
  background: var(--badge-neutral-bg);
}

.vol-badge {
  background: var(--badge-hype-vol-bg);
  color: var(--accent-hype, var(--accent-gold));
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/provider.css"
/*!****************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/provider.css ***!
  \****************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Provider cost hints & setup guide -------------------------------------- */

.provider-cost-hint {
  display: block;
  margin: 2px 0 4px;
  font-size: 11px;
  line-height: 1.3;
  color: var(--text-muted);
}
.provider-cost-hint.tier-free {
  color: var(--accent-green);
}
.provider-cost-hint.tier-free-tier {
  color: var(--accent-teal);
}
.provider-cost-hint.tier-low-cost {
  color: var(--accent-blue-text);
}
.provider-cost-hint.tier-paid {
  color: var(--text-muted);
}
.provider-cost-hint.tier-self-hosted {
  color: var(--text-muted);
}

.setup-guide-btn {
  display: inline-block;
  margin-bottom: 6px;
  padding: 4px 10px;
  font-size: 11px;
  background: transparent;
  border: 1px dashed var(--accent-blue-text);
  border-radius: var(--radius-sm);
  color: var(--accent-blue-text);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.setup-guide-btn:hover {
  background: var(--accent-blue-text);
  color: var(--bg-main);
}
.setup-guide-btn.hidden {
  display: none;
}

/* -- Setup guide modal ------------------------------------------------------ */

.setup-guide-backdrop {
  position: fixed;
  inset: 0;
  background: var(--modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
}
.setup-guide-backdrop.visible {
  opacity: 1;
  pointer-events: auto;
}

.setup-guide-modal {
  position: relative;
  background: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: 10px;
  width: 88vw;
  max-width: 560px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
  padding: 1.25rem;
  box-sizing: border-box;
  animation: setup-guide-in 0.18s ease-out;
}
@keyframes setup-guide-in {
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

.setup-guide-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
.setup-guide-header h3 {
  margin: 0;
  font-size: 16px;
  color: var(--text-bright);
}
.setup-guide-close {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 22px;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
}
.setup-guide-close:hover {
  color: var(--text-bright);
}

.setup-guide-tier {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  font-size: 12px;
  font-weight: 500;
}
.setup-guide-tier.tier-free {
  background: var(--badge-tier-free-bg);
  border: 1px solid var(--badge-tier-free-border);
  color: var(--accent-green);
}
.setup-guide-tier.tier-free-tier {
  background: var(--badge-tier-freetier-bg);
  border: 1px solid var(--badge-tier-freetier-border);
  color: var(--accent-teal);
}
.setup-guide-tier.tier-low-cost {
  background: var(--badge-tier-lowcost-bg);
  border: 1px solid var(--badge-tier-lowcost-border);
  color: var(--accent-blue-text);
}
.setup-guide-tier.tier-paid {
  background: var(--badge-tier-neutral-bg);
  border: 1px solid var(--badge-tier-neutral-border);
  color: var(--text-muted);
}
.setup-guide-tier.tier-self-hosted {
  background: var(--badge-tier-neutral-bg);
  border: 1px solid var(--badge-tier-neutral-border);
  color: var(--text-muted);
}

.tier-badge {
  font-weight: 600;
  white-space: nowrap;
}

.setup-guide-steps {
  margin: 0 0 0.75rem 0;
  padding-left: 1.4rem;
  font-size: 12px;
  line-height: 1.7;
  color: var(--text-main);
}
.setup-guide-steps li {
  margin-bottom: 6px;
}
.setup-guide-steps a {
  color: var(--accent-blue-text);
  text-decoration: underline;
}
.setup-guide-steps a:hover {
  color: var(--text-bright);
}

.setup-guide-note {
  padding: 8px 12px;
  border-radius: 6px;
  background: var(--setup-note-bg);
  border: 1px solid var(--setup-note-border);
  font-size: 11px;
  color: var(--accent-gold);
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.setup-guide-link {
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 12px;
  color: var(--accent-blue-text);
  text-decoration: none;
  font-weight: 500;
}
.setup-guide-link:hover {
  text-decoration: underline;
  color: var(--text-bright);
}

/* -- Provider comparison table ---------------------------------------------- */

.setup-guide-comparison {
  border-top: 1px solid var(--border);
  padding-top: 0.75rem;
}
.setup-guide-comparison h4 {
  margin: 0 0 8px;
  font-size: 13px;
  color: var(--text-bright);
}

.provider-comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
}
.provider-comparison-table th {
  text-align: left;
  padding: 5px 8px;
  border-bottom: 1px solid var(--border);
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 10px;
}
.provider-comparison-table td {
  padding: 6px 8px;
  border-bottom: 1px solid var(--border-input);
  color: var(--text-main);
}
.provider-comparison-table tr.active-row td {
  background: var(--table-active-row-bg);
  color: var(--text-bright);
  font-weight: 500;
}
.provider-comparison-table tr:hover td {
  background: var(--table-hover-row-bg);
}

.tier-badge-sm {
  display: inline-block;
  padding: 1px 6px;
  border-radius: var(--radius-sm);
  font-size: 10px;
  font-weight: 600;
  white-space: nowrap;
}
.tier-badge-sm.tier-free {
  background: var(--badge-tier-free-bg);
  color: var(--accent-green);
}
.tier-badge-sm.tier-free-tier {
  background: var(--badge-tier-freetier-bg);
  color: var(--accent-teal);
}
.tier-badge-sm.tier-low-cost {
  background: var(--badge-tier-lowcost-bg);
  color: var(--accent-blue-text);
}
.tier-badge-sm.tier-paid {
  background: var(--badge-tier-neutral-bg);
  color: var(--text-muted);
}

select {
  background: var(--bg-input);
  border: 1px solid var(--border-input);
  border-radius: var(--radius-sm);
  padding: 5px 8px;
  color: var(--text-main);
  font-family: inherit;
  font-size: 12px;
  outline: none;
  transition: border-color 0.15s;
  appearance: auto;
}

select option {
  background: var(--dropdown-bg);
  color: var(--text-main);
}

select option:hover,
select option:checked {
  background: var(--dropdown-hover-bg);
  color: var(--text-bright);
}

select:focus {
  border-color: var(--accent-focus);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/scrollbar.css"
/*!*****************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/scrollbar.css ***!
  \*****************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Webkit scrollbar styling ----------------------------------------------- */

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--bg-main);
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: var(--radius-sm);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/search-filters.css"
/*!**********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/search-filters.css ***!
  \**********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── Search filter popover ─────────────────────────────────────────────────── */

.search-filter-btn,
.browse-all-btn {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  padding: 4px 8px;
  background: var(--bg-muted);
  border: 1px solid var(--border-input);
  color: var(--text-main);
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;
  position: relative;
}

.search-filter-btn:hover,
.browse-all-btn:hover {
  background: var(--accent-primary);
  color: var(--text-bright);
}

.search-filter-btn.has-active-filters {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.search-filter-btn.has-active-filters:hover {
  color: var(--text-bright);
}

/* Active-filter count badge */
.filter-count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 15px;
  height: 15px;
  padding: 0 4px;
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  background: var(--accent-primary);
  color: var(--text-bright);
  border-radius: 8px;
}

/* ── Popover panel ────────────────────────────────────────────────────────── */

.search-filter-popover {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 200;
  width: min(360px, 90vw);
  max-height: 460px;
  overflow-y: auto;
  margin-top: 4px;
  padding: 8px 10px;
  background: var(--bg-panel);
  border: 1px solid var(--border-section);
  border-radius: 6px;
  box-shadow: var(--shadow-md);
}

.search-filter-popover.open {
  display: block;
}

/* ── Filter group (one per category) ──────────────────────────────────────── */

.search-filter-group {
  margin-bottom: 8px;
}

.search-filter-group:last-child {
  margin-bottom: 0;
}

.search-filter-group-title {
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
  margin-bottom: 4px;
  padding-bottom: 3px;
  border-bottom: 1px solid var(--border-section);
}

/* ── Checkbox tags (pill layout) ──────────────────────────────────────────── */

.search-filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.search-filter-tag {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 10px;
  padding: 2px 7px;
  background: var(--bg-muted);
  border: 1px solid var(--border-input);
  color: var(--text-soft);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.12s, border-color 0.12s, color 0.12s;
  user-select: none;
}

.search-filter-tag:hover {
  border-color: var(--accent-primary);
  color: var(--text-main);
}

.search-filter-tag input[type="checkbox"] {
  display: none;
}

.search-filter-tag.checked {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: var(--text-bright);
}

/* ── Footer actions ───────────────────────────────────────────────────────── */

.search-filter-actions {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  margin-top: 8px;
  padding-top: 6px;
  border-top: 1px solid var(--border-section);
}

.search-filter-actions button {
  font-size: 10px;
  padding: 3px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-input);
  cursor: pointer;
  transition: background 0.15s;
}

.search-filter-clear-btn {
  background: var(--bg-muted);
  color: var(--text-muted);
}

.search-filter-clear-btn:hover {
  background: var(--bg-input);
  color: var(--text-main);
}

.search-filter-apply-btn {
  background: var(--accent-primary);
  color: var(--text-bright);
  border-color: var(--accent-primary);
}

.search-filter-apply-btn:hover {
  filter: brightness(1.15);
}

/* ── Wrapper for positioning context ──────────────────────────────────────── */

.search-filter-wrapper {
  position: relative;
  flex-shrink: 0;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/search.css"
/*!**************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/search.css ***!
  \**************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Market search bar ------------------------------------------------------ */

#market-search-input {
  width: 100%;
  box-sizing: border-box;
  padding: 7px 10px;
  margin-bottom: 0;
  background: var(--bg-panel);
  color: var(--text-main);
  border: 1px solid var(--bg-input);
  border-radius: 4px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s;
}

#market-search-input::placeholder {
  color: var(--text-dimmed);
}

#market-search-input:focus {
  border-color: var(--accent-blue-text);
}

/* -- Search section ------------------------------------------------------ */

#search-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
}

#search-section #market-search-input {
  flex: 1 1 140px;
  min-width: 140px;
}

#search-section .view-toggle {
  flex-shrink: 0;
}

#search-results {
  width: 100%;
  margin-top: 6px;
}

#search-results:empty {
  display: none;
}

#search-loading {
  width: 100%;
  font-size: 12px;
  color: var(--text-muted);
  padding: 4px 0;
}

.market-card-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 8px;
  padding: 5px 8px;
  cursor: pointer;
  user-select: none;
  min-height: 36px;
}

.market-card-header:hover {
  background: var(--bg-hover);
}

/* \\u2500\\u2500 Sparkline canvas \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500 */

.graph-btn {
  all: unset;
  cursor: pointer;
  font-size: 11px;
  line-height: 1;
  color: var(--text-muted);
  padding: 2px 3px;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  letter-spacing: -1px;
  transition: color 0.15s;
}
.graph-btn:hover {
  color: var(--accent-green-bright, #4ec9b0);
}

.item-sprite {
  flex-shrink: 0;
  image-rendering: pixelated;
  width: 36px;
  height: 32px;
  object-fit: contain;
}

.market-card .item-name {
  color: var(--text-accent);
  flex: 1 1 0;
  min-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
}

.item-price {
  color: var(--text-price);
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/settings-fieldsets.css"
/*!**************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/settings-fieldsets.css ***!
  \**************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ══════════════════════════════════════════════════════════════════════════════
   Settings group fieldsets
   ══════════════════════════════════════════════════════════════════════════════ */

.settings-group {
  border: 1px solid var(--border-main);
  border-radius: 6px;
  padding: 8px 10px 10px;
  margin-bottom: 8px;
}

.settings-group-title {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-accent);
  padding: 0 4px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/settings.css"
/*!****************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/settings.css ***!
  \****************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Settings modal backdrop ------------------------------------------------ */

.settings-backdrop {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 600;
  background: var(--modal-backdrop);
  justify-content: center;
  align-items: center;
}

.settings-backdrop.visible {
  display: flex;
}

/* -- Settings modal panel -------------------------------------------------- */

.settings-modal {
  background: var(--bg-main);
  border: 1px solid var(--accent-primary);
  border-radius: 8px;
  width: 420px;
  max-width: 92vw;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px var(--modal-shadow);
  animation: modal-in 0.15s ease-out;
  font-size: 12px;
}

.settings-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid var(--border-main);
}

.settings-modal-header h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: var(--text-accent);
}

.settings-close-btn {
  background: transparent;
  border: none;
  font-size: 20px;
  line-height: 1;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0 4px;
  transition: color 0.15s;
}

.settings-close-btn:hover {
  color: var(--accent-red);
}

.settings-body {
  padding: 10px 14px;
}

.settings-body label,
.settings-body .settings-label {
  display: block;
  margin-bottom: 3px;
  color: var(--text-muted);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.settings-row {
  display: flex;
  gap: 6px;
}

.settings-row input {
  flex: 1;
}

.status-hint {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  color: var(--accent-green);
}

.status-hint.error {
  color: var(--accent-red);
}

/* -- Danger button ---------------------------------------------------------- */

.danger-btn {
  width: 100%;
  font-size: 11px;
  padding: 5px 10px;
  background: var(--accent-red-bg);
  border: 1px solid var(--accent-red-border);
  color: var(--text-main);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background 0.15s;
}

.danger-btn:hover {
  background: var(--accent-red-border);
  color: var(--text-bright);
}

.danger-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* -- Data management buttons ------------------------------------------------ */

.data-mgmt .settings-row {
  margin-top: 4px;
}

.data-mgmt button {
  flex: 1;
  font-size: 11px;
  padding: 5px 8px;
  background: var(--bg-input);
  border: 1px solid var(--border-input);
  color: var(--text-main);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}

.data-mgmt button:hover {
  background: var(--bg-muted);
  border-color: var(--accent-blue-text);
  color: var(--accent-blue-text);
}

/* -- Settings field helpers ------------------------------------------------- */

.settings-field {
  margin-top: 6px;
}

.settings-field.hidden {
  display: none;
}

.settings-body select,
.settings-body input[type="text"] {
  width: 100%;
  margin-bottom: 6px;
}

/* -- Contrast auto-correction debugger -------------------------------------- */

.contrast-debugger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
  padding: 5px 8px;
  border-radius: 4px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
}

.contrast-auto-label {
  display: flex !important;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: var(--text-muted);
  text-transform: none !important;
  letter-spacing: 0 !important;
  cursor: pointer;
  margin-bottom: 0 !important;
}

.contrast-auto-label input[type="checkbox"] {
  margin: 0;
  accent-color: var(--accent-primary);
}

.contrast-ratio-badge {
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: var(--text-muted);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/startup.css"
/*!***************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/startup.css ***!
  \***************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -- Startup loading overlay ------------------------------------------------ */

.startup-overlay {
  position: absolute;
  inset: 0;
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: var(--bg-main, #1e1e1e);
  transition: opacity 0.4s ease;
}
.startup-overlay.fade-out {
  opacity: 0;
  pointer-events: none;
}

/* Glass style: overlay must stay opaque to hide content behind it */
body[data-style="glass"] .startup-overlay {
  background: var(--glass-body-from, var(--bg-main, #1e1e1e));
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.startup-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid var(--border-main, #333);
  border-top-color: var(--accent-primary, #569cd6);
  border-radius: 50%;
  animation: startup-spin 0.8s linear infinite;
}
@keyframes startup-spin {
  to { transform: rotate(360deg); }
}

.startup-status {
  color: var(--text-muted, #888);
  font-size: 12px;
  text-align: center;
  max-width: 260px;
  line-height: 1.4;
}

.loader {
  color: var(--text-muted);
  font-style: italic;
  font-size: 12px;
  padding: 4px 0;
}

/* -- Error recovery banner -------------------------------------------------- */

.error-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  margin: 4px 0 6px;
  background: var(--accent-red-bg);
  border: 1px solid var(--accent-red-border);
  border-radius: 4px;
  color: var(--accent-red);
  font-size: 12px;
  line-height: 1.4;
}

.error-banner.hidden {
  display: none;
}

.error-banner span {
  flex: 1;
}

.error-banner button {
  flex-shrink: 0;
  padding: 4px 12px;
  font-size: 11px;
  background: var(--accent-red-border);
  color: var(--text-bright);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  white-space: nowrap;
}

.error-banner button:hover {
  background: var(--accent-red-border-hover);
}

.market-empty {
  color: var(--text-muted);
  font-size: 12px;
  padding: 8px 4px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/tabs.css"
/*!************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/tabs.css ***!
  \************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── Tab navigation ───────────────────────────────────────────────────────── */

#view-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  flex-shrink: 0;
  background: var(--bg-panel);
  border-bottom: 2px solid var(--border-main);
}

.tab-btn {
  flex: 1 1 0;
  min-width: 70px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 600;
  background: var(--bg-panel);
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--text-muted);
  border-radius: 0;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s, background 0.15s;
}

.tab-btn:hover {
  color: var(--text-main);
  background: var(--bg-hover);
}

.tab-btn.active {
  color: var(--text-accent);
  border-bottom-color: var(--accent-primary);
  background: var(--bg-main);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/components/toasts.css"
/*!**************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/components/toasts.css ***!
  \**************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ══════════════════════════════════════════════════════════════════════════════
   Toast Notifications
   ══════════════════════════════════════════════════════════════════════════════ */

#toast-container {
  position: fixed;
  top: 8px;
  right: 8px;
  z-index: 900;
  display: flex;
  flex-direction: column;
  gap: 6px;
  pointer-events: none;
  max-width: 320px;
}

.toast {
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 11px;
  line-height: 1.4;
  color: var(--text-main);
  background: var(--bg-panel);
  border-left: 3px solid var(--accent-primary);
  box-shadow: var(--shadow-sm);
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: auto;
}

.toast.show {
  opacity: 1;
  transform: translateX(0);
}

.toast-buy {
  border-left-color: var(--accent-teal);
}

.toast-sell {
  border-left-color: var(--accent-gold);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/layout/app-shell.css"
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/layout/app-shell.css ***!
  \*************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── App shell ────────────────────────────────────────────────────────────── */

#app {
  position: relative;        /* contain startup overlay */
  display: flex;
  flex-direction: column;
  height: 95%;              /* fill parent, not viewport — respects zoom */
  min-height: 0;             /* allow flex children to shrink properly */
  overflow: hidden;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/layout/layout-modes.css"
/*!****************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/layout/layout-modes.css ***!
  \****************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ═════════════════════════════════════════════════════════════════════════════
 *  LAYOUT MODES — driven by body[data-layout]
 * ═════════════════════════════════════════════════════════════════════════════ */

/* ── Tabbed layout (default — compact, in-game overlay) ───────────────────── */

body[data-layout="tabbed"] #view-tabs {
  display: flex;
}

body[data-layout="tabbed"] #app-content {
  display: flex;
  flex-direction: column;
}

body[data-layout="tabbed"] #market-view {
  flex: 1 1 0;
  display: none;                 /* hidden by default; .active-tab shows it */
}

body[data-layout="tabbed"] #advisor-view {
  flex: 1 1 0;
  display: none;
}

body[data-layout="tabbed"] #portfolio-view {
  flex: 1 1 0;
  display: none;
}

body[data-layout="tabbed"] #market-view.active-tab,
body[data-layout="tabbed"] #advisor-view.active-tab,
body[data-layout="tabbed"] #portfolio-view.active-tab {
  display: flex;
  flex-direction: column;
}

/* Market view in tabbed layout renders as a column */
body[data-layout="tabbed"] #market-view.active-tab {
  display: block;
  overflow-y: auto;
}

/* Smooth tab transitions */
body[data-layout="tabbed"] #market-view,
body[data-layout="tabbed"] #advisor-view,
body[data-layout="tabbed"] #portfolio-view {
  opacity: 0;
  transition: opacity 0.15s ease;
}

body[data-layout="tabbed"] #market-view.active-tab,
body[data-layout="tabbed"] #advisor-view.active-tab,
body[data-layout="tabbed"] #portfolio-view.active-tab {
  opacity: 1;
}

/* ── Sidebar layout (side-by-side, second monitor) ────────────────────────── */
/* Disable sidebar layout on small / mobile viewports — fall back to tabbed  */
@media (max-width: 700px) {
  body[data-layout="sidebar"] #view-tabs {
    border-bottom: 2px solid var(--border-main);
  }
  body[data-layout="sidebar"] #view-tabs .tab-btn {
    display: block;              /* restore tab buttons on small screens */
  }
  body[data-layout="sidebar"] #app-content {
    flex-direction: column !important;
  }
  body[data-layout="sidebar"] #market-view {
    width: auto !important;
    border-right: none !important;
  }
  body[data-layout="sidebar"] #advisor-view,
  body[data-layout="sidebar"] #portfolio-view {
    border-left: none !important;
  }
  /* Hide the sidebar button on mobile — it doesn't work well */
  .layout-toggle #layout-sidebar-btn {
    display: none;
  }
}

body[data-layout="sidebar"] #view-tabs {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: var(--bg-panel);
  border-bottom: 1px solid var(--border-main);
}

/* Hide tab-switching buttons in sidebar — all panels are visible */
body[data-layout="sidebar"] #view-tabs .tab-btn {
  display: none;
}

/* Settings stays left; first utility button pushes remaining right */
body[data-layout="sidebar"] #view-tabs .about-btn {
  margin-left: 0;
}
body[data-layout="sidebar"] #view-tabs #settings-btn {
  margin-right: auto;
}

body[data-layout="sidebar"] #app-content {
  display: flex;
  flex-direction: row;
  gap: 1px;
}

body[data-layout="sidebar"] #market-view {
  width: clamp(280px, 30vw, 400px);
  flex-shrink: 0;
  overflow-y: auto;
  border-right: 2px solid var(--border-main);
  display: block;
}

/* Force list-style column layout for market items in sidebar */
body[data-layout="sidebar"] #market-items.tile,
body[data-layout="sidebar"] #market-items.hybrid {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

body[data-layout="sidebar"] #market-items.tile .market-card-header,
body[data-layout="sidebar"] #market-items.hybrid .market-card-header {
  flex-direction: row;
  text-align: left;
}

/* ── Sidebar: contain filter popover within sidebar width ──────────────── */
body[data-layout="sidebar"] #search-section {
  position: relative;
}

body[data-layout="sidebar"] .search-filter-wrapper {
  position: static;
}

body[data-layout="sidebar"] .search-filter-popover {
  width: auto;
  left: 0;
  right: 0;
}

body[data-layout="sidebar"] #advisor-view {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow-y: auto;
}

body[data-layout="sidebar"] #portfolio-view {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow-y: auto;
  border-left: 2px solid var(--border-main);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/layout/main-content.css"
/*!****************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/layout/main-content.css ***!
  \****************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── Main content wrapper ─────────────────────────────────────────────────── */

#app-content {
  flex: 1 1 0;
  min-height: 0;
  overflow: hidden;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/layout/responsive.css"
/*!**************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/layout/responsive.css ***!
  \**************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ══════════════════════════════════════════════════════════════════════════════
   Desktop / wide-viewport overrides
   ══════════════════════════════════════════════════════════════════════════════ */

@media (min-width: 800px) {
  /* More breathing room on the main content and settings. */
  #app-content {
    padding: 0 8px;
  }

  #market-view {
    padding: 10px 18px;
  }

  #settings-panel {
    padding: 0;
  }
  #settings-panel .settings-body {
    padding: 12px 18px;
  }

  /* Wider modal with larger sparkline. */
  .item-modal {
    width: 560px;
    max-width: 600px;
  }

  .analytics-modal {
    width: 90vw;
    max-width: 920px;
  }

  .modal-sparkline {
    height: 80px;
  }

  .item-modal-header {
    padding: 12px 16px;
  }

  .item-modal-body {
    padding: 0 4px;
  }

  .item-modal-details .detail-row {
    padding: 3px 0;
  }

  /* Tile view — allow more cards per row on wider screens. */
  .market-items.tile {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 6px;
  }

  /* Hybrid view — wider minimum for richer card content. */
  .market-items.hybrid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 5px;
  }

  /* (responsive sparkline rule removed — chart now in dedicated graph modal) */

  /* Advisor chat gets more comfortable padding. */
  #advisor-view {
    padding: 10px 18px;
  }

  #portfolio-view {
    padding: 10px 18px;
  }
}

/* ══════════════════════════════════════════════════════════════════════════════
   Narrow / mobile overrides
   ══════════════════════════════════════════════════════════════════════════════ */

@media (max-width: 480px) {
  /* Section headers: wrap controls to avoid crowding */
  .favorites-header,
  .allocation-header {
    flex-wrap: wrap;
    gap: 4px;
  }

  /* Allocation button: full width when wrapped */
  .allocation-input-row button {
    flex: 1 1 100%;
  }

  /* Chat send button: keep tappable size */
  #chat-input-row button {
    min-width: 40px;
  }

  /* Tile view: tighter minimums for 2-up layout */
  .market-items.tile {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 5px;
    padding: 5px 6px;
  }

  /* Hybrid view: allow single-column fallback */
  .market-items.hybrid {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  /* About modal table: horizontal scroll if needed */
  .about-modal-body table {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/layout/views.css"
/*!*********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/layout/views.css ***!
  \*********************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ── List view ────────────────────────────────────────────────────────────── */

.market-items.list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px 8px;
}

.market-items.list .market-card {
  border-radius: 2px;
}

.market-items.list .item-sprite {
  width: 24px;
  height: 22px;
}

/* ── Tile view ────────────────────────────────────────────────────────────── */

.market-items.tile {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 8px;
  padding: 8px 10px;
}

.market-items.tile .market-card-header {
  flex-direction: column;
  text-align: center;
  padding: 8px 6px;
  gap: 4px;
  overflow: visible;
}

.market-items.tile .card-actions {
  gap: 3px;
  justify-content: center;
  flex-wrap: wrap;
}

.market-items.tile .item-sprite {
  width: 36px;
  height: 32px;
}

.market-items.tile .item-name {
  font-size: 11px;
  text-align: center;
  white-space: normal;
  overflow: visible;
}

.market-items.tile .item-price {
  font-size: 11px;
}

.market-items.tile .flip-badges {
  margin-left: 0;
  justify-content: center;
  width: 100%;
}

.market-items.tile .buy-badge,
.market-items.tile .sell-badge,
.market-items.tile .profit-badge {
  font-size: var(--badge-font-sm);
  padding: var(--badge-padding-sm);
}

/* (tile sparkline rules removed — chart now in dedicated graph modal) */

/* ── Hybrid view (compact grid, list-style rows) ──────────────────────────── */

.market-items.hybrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 6px;
  padding: 6px 8px;
}

.market-items.hybrid .market-card-header {
  padding: 4px 6px;
  gap: 6px;
}

.market-items.hybrid .item-sprite {
  width: 28px;
  height: 24px;
}

/* (hybrid sparkline rule removed) */

.market-items.hybrid .flip-badges {
  gap: 2px;
}

.market-items.hybrid .buy-badge,
.market-items.hybrid .sell-badge,
.market-items.hybrid .profit-badge {
  font-size: var(--badge-font-sm);
  padding: var(--badge-padding-sm);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/main.css"
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/main.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./base/reset.css */ "../node_modules/css-loader/dist/cjs.js!./css/base/reset.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_alt1_status_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./base/alt1-status.css */ "../node_modules/css-loader/dist/cjs.js!./css/base/alt1-status.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_default_dark_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-default-dark.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-default-dark.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_classic_dark_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-classic-dark.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-classic-dark.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_rs3_modern_dark_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-rs3-modern-dark.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-rs3-modern-dark.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_rs_lobby_dark_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-rs-lobby-dark.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-rs-lobby-dark.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_gruvbox_dark_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-gruvbox-dark.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-gruvbox-dark.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_solarized_dark_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-solarized-dark.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-solarized-dark.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_twilight_amethyst_dark_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-twilight-amethyst-dark.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-twilight-amethyst-dark.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_osrs_design_dark_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-osrs-design-dark.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-osrs-design-dark.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_default_light_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-default-light.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-default-light.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_solarized_light_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-solarized-light.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-solarized-light.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_classic_light_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-classic-light.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-classic-light.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_rs3_modern_light_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-rs3-modern-light.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-rs3-modern-light.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_rs_lobby_light_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-rs-lobby-light.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-rs-lobby-light.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_gruvbox_light_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-gruvbox-light.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-gruvbox-light.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_twilight_amethyst_light_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-twilight-amethyst-light.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-twilight-amethyst-light.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_colorway_osrs_design_light_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/colorway-osrs-design-light.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-osrs-design-light.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_light_mode_overrides_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/light-mode-overrides.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/light-mode-overrides.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_contrast_modifiers_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./themes/contrast-modifiers.css */ "../node_modules/css-loader/dist/cjs.js!./css/themes/contrast-modifiers.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_style_glassmorphism_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./styles/style-glassmorphism.css */ "../node_modules/css-loader/dist/cjs.js!./css/styles/style-glassmorphism.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_style_neumorphism_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./styles/style-neumorphism.css */ "../node_modules/css-loader/dist/cjs.js!./css/styles/style-neumorphism.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_style_skeuomorphism_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./styles/style-skeuomorphism.css */ "../node_modules/css-loader/dist/cjs.js!./css/styles/style-skeuomorphism.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_micro_component_protection_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./styles/micro-component-protection.css */ "../node_modules/css-loader/dist/cjs.js!./css/styles/micro-component-protection.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_app_shell_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./layout/app-shell.css */ "../node_modules/css-loader/dist/cjs.js!./css/layout/app-shell.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_main_content_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./layout/main-content.css */ "../node_modules/css-loader/dist/cjs.js!./css/layout/main-content.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_layout_modes_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./layout/layout-modes.css */ "../node_modules/css-loader/dist/cjs.js!./css/layout/layout-modes.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_views_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./layout/views.css */ "../node_modules/css-loader/dist/cjs.js!./css/layout/views.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_settings_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/settings.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/settings.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_settings_fieldsets_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/settings-fieldsets.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/settings-fieldsets.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_provider_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/provider.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/provider.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_inputs_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/inputs.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/inputs.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_layout_toggle_css__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/layout-toggle.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/layout-toggle.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_tabs_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/tabs.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/tabs.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_market_panel_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/market-panel.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/market-panel.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_filters_css__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/filters.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/filters.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_startup_css__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/startup.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/startup.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_market_cards_css__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/market-cards.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/market-cards.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_highlights_css__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/highlights.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/highlights.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_search_css__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/search.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/search.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_search_filters_css__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/search-filters.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/search-filters.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_detail_panel_css__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/detail-panel.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/detail-panel.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_card_actions_css__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/card-actions.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/card-actions.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_favourites_css__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/favourites.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/favourites.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_modal_base_css__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/modal-base.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/modal-base.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_modals_css__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/modals.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/modals.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_analytics_modal_css__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/analytics-modal.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/analytics-modal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_analytics_dividers_css__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/analytics-dividers.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/analytics-dividers.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_interactive_chart_css__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/interactive-chart.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/interactive-chart.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_chat_css__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/chat.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/chat.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_portfolio_css__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/portfolio.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/portfolio.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_portfolio_dashboard_css__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/portfolio-dashboard.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/portfolio-dashboard.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_predictive_badges_css__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/predictive-badges.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/predictive-badges.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_completed_flips_css__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/completed-flips.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/completed-flips.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_scrollbar_css__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/scrollbar.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/scrollbar.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_toasts_css__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/toasts.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/toasts.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_alerts_css__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/alerts.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/alerts.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_accessibility_css__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/accessibility.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/accessibility.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_back_to_top_css__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/back-to-top.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/back-to-top.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_disclaimer_css__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/disclaimer.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/disclaimer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_about_modal_css__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/about-modal.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/about-modal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_info_banner_css__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/info-banner.css */ "../node_modules/css-loader/dist/cjs.js!./css/components/info-banner.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_responsive_css__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./layout/responsive.css */ "../node_modules/css-loader/dist/cjs.js!./css/layout/responsive.css");
// Imports

































































var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_reset_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_alt1_status_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_default_dark_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_classic_dark_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_rs3_modern_dark_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_rs_lobby_dark_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_gruvbox_dark_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_solarized_dark_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_twilight_amethyst_dark_css__WEBPACK_IMPORTED_MODULE_10__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_osrs_design_dark_css__WEBPACK_IMPORTED_MODULE_11__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_default_light_css__WEBPACK_IMPORTED_MODULE_12__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_solarized_light_css__WEBPACK_IMPORTED_MODULE_13__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_classic_light_css__WEBPACK_IMPORTED_MODULE_14__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_rs3_modern_light_css__WEBPACK_IMPORTED_MODULE_15__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_rs_lobby_light_css__WEBPACK_IMPORTED_MODULE_16__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_gruvbox_light_css__WEBPACK_IMPORTED_MODULE_17__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_twilight_amethyst_light_css__WEBPACK_IMPORTED_MODULE_18__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_colorway_osrs_design_light_css__WEBPACK_IMPORTED_MODULE_19__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_light_mode_overrides_css__WEBPACK_IMPORTED_MODULE_20__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_contrast_modifiers_css__WEBPACK_IMPORTED_MODULE_21__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_style_glassmorphism_css__WEBPACK_IMPORTED_MODULE_22__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_style_neumorphism_css__WEBPACK_IMPORTED_MODULE_23__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_style_skeuomorphism_css__WEBPACK_IMPORTED_MODULE_24__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_micro_component_protection_css__WEBPACK_IMPORTED_MODULE_25__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layout_app_shell_css__WEBPACK_IMPORTED_MODULE_26__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layout_main_content_css__WEBPACK_IMPORTED_MODULE_27__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layout_layout_modes_css__WEBPACK_IMPORTED_MODULE_28__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layout_views_css__WEBPACK_IMPORTED_MODULE_29__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_settings_css__WEBPACK_IMPORTED_MODULE_30__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_settings_fieldsets_css__WEBPACK_IMPORTED_MODULE_31__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_provider_css__WEBPACK_IMPORTED_MODULE_32__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_inputs_css__WEBPACK_IMPORTED_MODULE_33__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_layout_toggle_css__WEBPACK_IMPORTED_MODULE_34__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_tabs_css__WEBPACK_IMPORTED_MODULE_35__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_market_panel_css__WEBPACK_IMPORTED_MODULE_36__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_filters_css__WEBPACK_IMPORTED_MODULE_37__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_startup_css__WEBPACK_IMPORTED_MODULE_38__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_market_cards_css__WEBPACK_IMPORTED_MODULE_39__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_highlights_css__WEBPACK_IMPORTED_MODULE_40__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_search_css__WEBPACK_IMPORTED_MODULE_41__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_search_filters_css__WEBPACK_IMPORTED_MODULE_42__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_detail_panel_css__WEBPACK_IMPORTED_MODULE_43__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_card_actions_css__WEBPACK_IMPORTED_MODULE_44__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_favourites_css__WEBPACK_IMPORTED_MODULE_45__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_modal_base_css__WEBPACK_IMPORTED_MODULE_46__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_modals_css__WEBPACK_IMPORTED_MODULE_47__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_analytics_modal_css__WEBPACK_IMPORTED_MODULE_48__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_analytics_dividers_css__WEBPACK_IMPORTED_MODULE_49__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_interactive_chart_css__WEBPACK_IMPORTED_MODULE_50__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_chat_css__WEBPACK_IMPORTED_MODULE_51__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_portfolio_css__WEBPACK_IMPORTED_MODULE_52__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_portfolio_dashboard_css__WEBPACK_IMPORTED_MODULE_53__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_predictive_badges_css__WEBPACK_IMPORTED_MODULE_54__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_completed_flips_css__WEBPACK_IMPORTED_MODULE_55__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_scrollbar_css__WEBPACK_IMPORTED_MODULE_56__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_toasts_css__WEBPACK_IMPORTED_MODULE_57__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_alerts_css__WEBPACK_IMPORTED_MODULE_58__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_accessibility_css__WEBPACK_IMPORTED_MODULE_59__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_back_to_top_css__WEBPACK_IMPORTED_MODULE_60__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_disclaimer_css__WEBPACK_IMPORTED_MODULE_61__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_about_modal_css__WEBPACK_IMPORTED_MODULE_62__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_info_banner_css__WEBPACK_IMPORTED_MODULE_63__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layout_responsive_css__WEBPACK_IMPORTED_MODULE_64__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ═══════════════════════════════════════════════════════════════════════════
 *  Gielinor Equity Research — CSS Module Entry Point
 *
 *  Import order is CRITICAL to the cascade. Do not rearrange.
 *
 *  1st: Base styles (reset, body, Alt1 status)
 *  2nd: Theme colorways (dark palettes, then light palettes)
 *  3rd: Light-mode consolidated overrides  +  Contrast modifiers
 *  4th: Thematic styles (glass, neumorphism, skeuomorphism)
 *  5th: Micro-component protections
 *  6th: Layouts and Components
 * ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. Base ────────────────────────────────────────────────────────────────── */

/* ── 2. Theme Colorways ─────────────────────────────────────────────────────── */
/* Dark palettes first (Classic Dark defines :root defaults) */

/* Light palettes */

/* ── 3. Light-mode overrides  +  Contrast modifiers ────────────────────────── */

/* ── 4. Thematic Styles ─────────────────────────────────────────────────────── */

/* ── 5. Micro-component Protections ─────────────────────────────────────────── */

/* ── 6. Layout ──────────────────────────────────────────────────────────────── */

/* ── 7. Components ──────────────────────────────────────────────────────────── */

/* ── 8. Responsive overrides (must come last to win specificity) ────────────── */
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/styles/micro-component-protection.css"
/*!******************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/styles/micro-component-protection.css ***!
  \******************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ═══════════════════════════════════════════════════════════════════════════
 *  MICRO-COMPONENT PROTECTION
 *
 *  audit:no-op(CSS-2) — The 2 rgba() values in this file are structural
 *  black shadows for skeuomorphic flip buttons (same rationale as CSS-1).
 *
 *  Small icon-only buttons (.card-actions, .flip-card-actions, .popout-btn,
 *  .fav-btn, .alert-btn, .quick-add-btn, .ext-link, .flip-remove-btn,
 *  .flip-complete-btn, #export-csv-btn, .data-mgmt button) must remain
 *  legible and clickable regardless of active style. Heavy shadows, blurs,
 *  and gradients are suppressed on these micro-targets.
 * ═══════════════════════════════════════════════════════════════════════════ */

/* ── Glass: don't inherit parent's blur on micro-buttons ─────────────────── */
body[data-style="glass"] .card-actions button,
body[data-style="glass"] .card-actions a,
body[data-style="glass"] .flip-card-actions button,
body[data-style="glass"] #export-csv-btn {
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

/* ── Neumorphism: minimal shadow for icon buttons ────────────────────────── */
body[data-style="neumorphism"] .popout-btn,
body[data-style="neumorphism"] .fav-btn,
body[data-style="neumorphism"] .alert-btn,
body[data-style="neumorphism"] .quick-add-btn,
body[data-style="neumorphism"] .flip-remove-btn,
body[data-style="neumorphism"] .flip-complete-btn,
body[data-style="neumorphism"] .flip-alch-btn,
body[data-style="neumorphism"] .flip-edit-btn,
body[data-style="neumorphism"] #export-csv-btn,
body[data-style="neumorphism"] .ext-link {
  box-shadow: none;
  border: none;
  background: transparent;
}
body[data-style="neumorphism"] .popout-btn:hover,
body[data-style="neumorphism"] .fav-btn:hover,
body[data-style="neumorphism"] .alert-btn:hover,
body[data-style="neumorphism"] .quick-add-btn:hover,
body[data-style="neumorphism"] .flip-remove-btn:hover,
body[data-style="neumorphism"] .flip-complete-btn:hover,
body[data-style="neumorphism"] .flip-alch-btn:hover,
body[data-style="neumorphism"] .flip-edit-btn:hover,
body[data-style="neumorphism"] #export-csv-btn:hover {
  box-shadow: 2px 2px 4px var(--neu-shadow-dark),
             -2px -2px 4px var(--neu-shadow-light);
  border-radius: 4px;
}

/* ── Skeuomorphism: flatten micro-buttons to avoid visual clutter ────────── */
body[data-style="skeuomorphism"] .popout-btn,
body[data-style="skeuomorphism"] .fav-btn,
body[data-style="skeuomorphism"] .alert-btn,
body[data-style="skeuomorphism"] .quick-add-btn,
body[data-style="skeuomorphism"] .ext-link {
  background: transparent;
  border: none;
  box-shadow: none;
}
body[data-style="skeuomorphism"] .popout-btn:hover,
body[data-style="skeuomorphism"] .fav-btn:hover,
body[data-style="skeuomorphism"] .alert-btn:hover,
body[data-style="skeuomorphism"] .quick-add-btn:hover {
  background: color-mix(in srgb, var(--skeu-card-highlight), transparent 60%);
  border-radius: 3px;
}
/* Flip action buttons keep a subtle bevel at small scale */
body[data-style="skeuomorphism"] .flip-remove-btn,
body[data-style="skeuomorphism"] .flip-complete-btn,
body[data-style="skeuomorphism"] .flip-alch-btn,
body[data-style="skeuomorphism"] .flip-edit-btn,
body[data-style="skeuomorphism"] #export-csv-btn {
  background: linear-gradient(180deg, var(--skeu-btn-from) 0%, var(--skeu-btn-to) 100%);
  border: 1px solid var(--skeu-card-shadow-edge);
  border-top: 1px solid color-mix(in srgb, var(--skeu-card-highlight), transparent 50%);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}
body[data-style="skeuomorphism"] .flip-remove-btn:active,
body[data-style="skeuomorphism"] .flip-complete-btn:active,
body[data-style="skeuomorphism"] .flip-alch-btn:active,
body[data-style="skeuomorphism"] .flip-edit-btn:active,
body[data-style="skeuomorphism"] #export-csv-btn:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.35);
  transform: translateY(1px);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/styles/style-glassmorphism.css"
/*!***********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/styles/style-glassmorphism.css ***!
  \***********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ═══════════════════════════════════════════════════════════════════════════
 *  STYLE: Glassmorphism  (body[data-style="glass"])
 *
 *  Frosted-glass panels via backdrop-filter: blur(), highly translucent
 *  rgba backgrounds, and crisp semi-transparent borders.  Depth is conveyed
 *  through layered box-shadows (elevation + luminous top-edge shine) and a
 *  rich body gradient that bleeds through the frosted panels.
 * ═══════════════════════════════════════════════════════════════════════════ */

/* ── Mode-specific glass accent vars ────────────────────────────────────────
 *  White shine simulates specular light hitting the top edge of a glass pane.
 *  Shadow layers add elevation depth.  Mode-split keeps contrast safe.      */
body[data-style="glass"][data-mode="dark"] {
  --glass-shine:    rgba(255, 255, 255, 0.18);
  --glass-shadow-1: rgba(0, 0, 0, 0.28);
  --glass-shadow-2: rgba(0, 0, 0, 0.12);
}
body[data-style="glass"][data-mode="light"] {
  --glass-shine:    rgba(255, 255, 255, 0.55);
  --glass-shadow-1: rgba(0, 0, 0, 0.07);
  --glass-shadow-2: rgba(0, 0, 0, 0.03);
}

/* ── Variable remap — specificity 0,2,1 ─────────────────────────────────────
 *  Matches body[data-mode][data-colorway] colorway selectors. Because this
 *  file loads AFTER colorways in the cascade, same-specificity tie-breaks
 *  in favour of glass, correctly remapping --bg-* to translucent glass
 *  variables for EVERY colorway.                                            */
body[data-style="glass"][data-mode] {
  background:
    radial-gradient(ellipse at 20% 0%, var(--glass-shine) 0%, transparent 55%),
    linear-gradient(135deg, var(--glass-body-from) 0%, var(--glass-body-via) 50%, var(--glass-body-to) 100%);
  --bg-main: var(--glass-panel);
  --bg-panel: var(--glass-panel);
  --bg-elevated: var(--glass-elevated);
  --bg-hover: var(--glass-hover);
  --bg-input: var(--glass-input);
  --bg-muted: var(--glass-muted);
  --bg-number-input: var(--glass-panel);
  --bg-filter: var(--glass-muted);
  --border-card: var(--glass-border-card);
  --border-main: var(--glass-border-main);
  --border-section: var(--glass-border-section);
  --border-input: var(--glass-border-input);
  --border-subtle: var(--glass-border-main);
  --scrollbar-thumb: var(--glass-scrollbar);
  --modal-backdrop: rgba(0, 0, 0, 0.45);
}
body[data-style="glass"] #app {
  background: transparent;
}

/* ── Frosted panel treatment ────────────────────────────────────────────────
 *  Stronger blur (22 px) + higher saturate (1.35) makes the frost clearly
 *  visible.  Layered box-shadow: outer depth + inset luminous top edge.     */
body[data-style="glass"] .market-card,
body[data-style="glass"] .top20-section,
body[data-style="glass"] .favorites-section,
body[data-style="glass"] #settings-panel,
body[data-style="glass"] #market-view,
body[data-style="glass"] #view-tabs,
body[data-style="glass"] .analytics-modal-content,
body[data-style="glass"] .analytics-modal,
body[data-style="glass"] .setup-guide-content,
body[data-style="glass"] .setup-guide-modal,
body[data-style="glass"] .item-modal,
body[data-style="glass"] .graph-modal,
body[data-style="glass"] .filter-bar,
body[data-style="glass"] .flip-card,
body[data-style="glass"] .completed-flip-card,
body[data-style="glass"] .settings-group,
body[data-style="glass"] #advisor-view,
body[data-style="glass"] #portfolio-view {
  backdrop-filter: blur(22px) saturate(1.35);
  -webkit-backdrop-filter: blur(22px) saturate(1.35);
  box-shadow:
    0 8px 32px var(--glass-shadow-1),
    0 2px 8px  var(--glass-shadow-2),
    inset 0 1px 0 var(--glass-shine);
}
/* Cards: crisp semi-transparent border + subtle radius */
body[data-style="glass"] .market-card {
  border: 1px solid var(--glass-border-card);
  border-radius: 10px;
}
/* Card hover: lift effect — shadow intensifies */
body[data-style="glass"] .market-card:hover {
  box-shadow:
    0 12px 40px var(--glass-shadow-1),
    0 4px 12px  var(--glass-shadow-2),
    inset 0 1px 0 var(--glass-shine);
}
/* Sections: frosted panels with luminous top edge */
body[data-style="glass"] .top20-section,
body[data-style="glass"] .favorites-section {
  border: 1px solid var(--glass-border-section);
  border-radius: 12px;
}
/* Settings fieldsets: subtle glass border */
body[data-style="glass"] .settings-group {
  border: 1px solid var(--glass-border-section);
  border-radius: 10px;
}
/* Flip cards: glass treatment */
body[data-style="glass"] .flip-card,
body[data-style="glass"] .completed-flip-card {
  border: 1px solid var(--glass-border-card);
  border-radius: 8px;
}
/* Tab buttons: glass pill shape */
body[data-style="glass"] .tab-btn {
  backdrop-filter: blur(12px) saturate(1.2);
  -webkit-backdrop-filter: blur(12px) saturate(1.2);
  border-radius: 8px;
  box-shadow: inset 0 1px 0 var(--glass-shine);
}
/* Active tab: stronger glass presence */
body[data-style="glass"] .tab-btn.active {
  box-shadow:
    0 4px 16px var(--glass-shadow-2),
    inset 0 1px 0 var(--glass-shine);
}
/* Modal content: stronger blur for overlays */
body[data-style="glass"] .analytics-modal-content,
body[data-style="glass"] .setup-guide-content {
  backdrop-filter: blur(32px) saturate(1.4);
  -webkit-backdrop-filter: blur(32px) saturate(1.4);
  border: 1px solid var(--glass-border-card);
  border-radius: 14px;
  box-shadow:
    0 16px 48px var(--glass-shadow-1),
    0 4px 16px  var(--glass-shadow-2),
    inset 0 1px 0 var(--glass-shine);
}
/* Input fields: inner glow border on focus */
body[data-style="glass"] input:focus,
body[data-style="glass"] select:focus {
  box-shadow:
    0 0 0 1px var(--glass-border-input),
    inset 0 1px 0 var(--glass-shine);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/styles/style-neumorphism.css"
/*!*********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/styles/style-neumorphism.css ***!
  \*********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ═══════════════════════════════════════════════════════════════════════════
 *  STYLE: Neumorphism  (body[data-style="neumorphism"])
 *
 *  Elements share the canvas background colour. Shape is conveyed entirely
 *  through paired box-shadows (one light, one dark) — no visible borders.
 *  Outset shadows = extruded; inset shadows = indented.
 * ═══════════════════════════════════════════════════════════════════════════ */

body[data-style="neumorphism"] {
  /* Strip ALL visible borders — shape comes from shadows only */
  --border-main: transparent;
  --border-section: transparent;
  --border-card: transparent;
  --border-input: transparent;
  --border-subtle: transparent;
  --border-hype: transparent;
  --border-hype-hover: transparent;
  --border-red-border: transparent;
  --modal-shadow: none;
}

/* ── Cards: extruded from the canvas ─────────────────────────────────────── */
body[data-style="neumorphism"] .market-card {
  background: var(--bg-main);  /* must match canvas */
  border: none;
  border-radius: 12px;
  box-shadow: 6px 6px 12px var(--neu-shadow-dark),
             -6px -6px 12px var(--neu-shadow-light);
  margin: 2px;
}
body[data-style="neumorphism"] .market-card:hover {
  box-shadow: 4px 4px 8px var(--neu-shadow-dark),
             -4px -4px 8px var(--neu-shadow-light);
}
/* Expanded card detail: gentle inset well */
body[data-style="neumorphism"] .market-card.expanded .market-card-detail {
  box-shadow: inset 2px 2px 5px var(--neu-shadow-dark),
              inset -2px -2px 5px var(--neu-shadow-light);
  border-radius: 0 0 12px 12px;
}

/* ── Sections: raised panels ─────────────────────────────────────────────── */
body[data-style="neumorphism"] .top20-section {
  background: var(--bg-main);
  border: none;
  border-radius: 14px;
  box-shadow: 8px 8px 16px var(--neu-shadow-dark),
             -8px -8px 16px var(--neu-shadow-light);
}
body[data-style="neumorphism"] .favorites-section {
  background: var(--bg-main);
  border: none;
  border-radius: 14px;
  box-shadow: 6px 6px 14px var(--neu-shadow-dark),
             -6px -6px 14px var(--neu-shadow-light);
}
body[data-style="neumorphism"] #settings-panel {
  background: var(--bg-main);
  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px 10px var(--neu-shadow-dark),
             -4px -4px 10px var(--neu-shadow-light);
}
body[data-style="neumorphism"] .settings-group {
  border: none;
  border-radius: 10px;
  box-shadow: inset 3px 3px 6px var(--neu-shadow-dark),
              inset -3px -3px 6px var(--neu-shadow-light);
}

/* ── Flip / portfolio cards ──────────────────────────────────────────────── */
body[data-style="neumorphism"] .flip-card,
body[data-style="neumorphism"] .completed-flip-card {
  background: var(--bg-main);
  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px 8px var(--neu-shadow-dark),
             -4px -4px 8px var(--neu-shadow-light);
}

/* ── Inputs/selects: indented wells ──────────────────────────────────────── */
body[data-style="neumorphism"] .view-btn,
body[data-style="neumorphism"] .section-sort-select,
body[data-style="neumorphism"] #market-search-input,
body[data-style="neumorphism"] .filter-bar select,
body[data-style="neumorphism"] input[type="number"],
body[data-style="neumorphism"] input[type="text"],
body[data-style="neumorphism"] input[type="password"] {
  background: var(--bg-main);
  border: none;
  border-radius: 8px;
  box-shadow: inset 2px 2px 5px var(--neu-shadow-dark),
              inset -2px -2px 5px var(--neu-shadow-light);
}
body[data-style="neumorphism"] .view-btn.active {
  box-shadow: inset 3px 3px 6px var(--neu-shadow-dark),
              inset -3px -3px 6px var(--neu-accent-shadow);
}

/* ── Buttons: raised pillows ─────────────────────────────────────────────── */
body[data-style="neumorphism"] .scan-btn,
body[data-style="neumorphism"] .refresh-btn,
body[data-style="neumorphism"] .tab-btn,
body[data-style="neumorphism"] .danger-btn,
body[data-style="neumorphism"] .data-mgmt button {
  background: var(--bg-main);
  border: none;
  border-radius: 8px;
  box-shadow: 4px 4px 8px var(--neu-shadow-dark),
             -4px -4px 8px var(--neu-shadow-light);
}
body[data-style="neumorphism"] .scan-btn:hover,
body[data-style="neumorphism"] .refresh-btn:hover,
body[data-style="neumorphism"] .tab-btn:hover,
body[data-style="neumorphism"] .data-mgmt button:hover {
  box-shadow: 2px 2px 5px var(--neu-shadow-dark),
             -2px -2px 5px var(--neu-shadow-light);
}
body[data-style="neumorphism"] .tab-btn.active {
  box-shadow: inset 3px 3px 6px var(--neu-shadow-dark),
              inset -3px -3px 6px var(--neu-accent-shadow);
}

/* ── Modals: floating neumorphic panel ───────────────────────────────────── */
body[data-style="neumorphism"] .analytics-modal-content,
body[data-style="neumorphism"] .setup-guide-content {
  background: var(--bg-main);
  border: none;
  border-radius: 16px;
  box-shadow: 10px 10px 20px var(--neu-shadow-dark),
             -10px -10px 20px var(--neu-shadow-light);
}

/* Neumorphism spacing — shadows need breathing room */
body[data-style="neumorphism"] .market-items.tile {
  gap: 14px;
  padding: 12px 14px;
}
body[data-style="neumorphism"] .market-items.hybrid {
  gap: 12px;
  padding: 10px 12px;
}
body[data-style="neumorphism"] .market-items.list {
  gap: 10px;
  padding: 8px 10px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/styles/style-skeuomorphism.css"
/*!***********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/styles/style-skeuomorphism.css ***!
  \***********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ═══════════════════════════════════════════════════════════════════════════
 *  STYLE: Skeuomorphism  (body[data-style="skeuomorphism"])
 *
 *  Tactile realism: linear-gradient backgrounds for material texture,
 *  inner shadows for beveled edges, and drop shadows for physical depth.
 *  Top border = highlight (light edge), bottom border = shadow edge.
 *
 *  audit:no-op(CSS-1) — All ~42 rgba() values in this file are structural
 *  shadows (always black 0,0,0 or white 255,255,255 at intentionally
 *  varying opacities for visual hierarchy). These are not thematic colours
 *  and do not benefit from tokenization. Dark/light overrides are handled
 *  with dedicated rule blocks at the bottom.
 * ═══════════════════════════════════════════════════════════════════════════ */

body[data-style="skeuomorphism"] {
  background: linear-gradient(180deg, var(--skeu-body-from) 0%, var(--skeu-body-to) 100%);
}

/* ── Cards: textured surface with bevel ──────────────────────────────────── */
body[data-style="skeuomorphism"] .market-card {
  background: linear-gradient(180deg, var(--skeu-card-from) 0%, var(--skeu-card-mid) 40%, var(--skeu-card-to) 100%);
  border: 1px solid var(--skeu-card-shadow-edge);
  border-top: 1px solid var(--skeu-card-highlight);
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.45),
              inset 0 1px 0 rgba(255, 255, 255, 0.08),
              inset 0 -1px 0 rgba(0, 0, 0, 0.15);
}
body[data-style="skeuomorphism"] .market-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.55),
              inset 0 1px 0 rgba(255, 255, 255, 0.10),
              inset 0 -1px 0 rgba(0, 0, 0, 0.18);
}

/* ── Sections: embossed panel frame ──────────────────────────────────────── */
body[data-style="skeuomorphism"] .top20-section {
  background: linear-gradient(180deg, var(--skeu-card-from) 0%, var(--skeu-body-to) 100%);
  border: 1px solid var(--skeu-card-shadow-edge);
  border-top: 1px solid var(--skeu-card-highlight);
  border-radius: 6px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.50),
              inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
body[data-style="skeuomorphism"] .favorites-section {
  background: linear-gradient(180deg, var(--skeu-card-from) 0%, var(--skeu-body-to) 100%);
  border: 1px solid var(--skeu-card-shadow-edge);
  border-top: 1px solid var(--skeu-card-highlight);
  border-radius: 6px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.45),
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
body[data-style="skeuomorphism"] .top20-section #market-header {
  background: linear-gradient(180deg, var(--skeu-header-from) 0%, var(--skeu-header-to) 100%);
  border-bottom: 1px solid var(--skeu-card-shadow-edge);
  border-radius: 5px 5px 0 0;
}
body[data-style="skeuomorphism"] #settings-panel {
  background: linear-gradient(180deg, var(--skeu-header-from) 0%, var(--skeu-header-to) 100%);
  border: 1px solid var(--skeu-card-shadow-edge);
  border-top: 1px solid var(--skeu-card-highlight);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.40),
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
body[data-style="skeuomorphism"] .settings-group {
  background: linear-gradient(180deg, var(--skeu-card-mid) 0%, var(--skeu-card-to) 100%);
  border: 1px solid var(--skeu-card-shadow-edge);
  border-top: 1px solid color-mix(in srgb, var(--skeu-card-highlight), transparent 40%);
  border-radius: 5px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
}

/* ── Buttons: beveled pushable surfaces ──────────────────────────────────── */
body[data-style="skeuomorphism"] .view-btn,
body[data-style="skeuomorphism"] .scan-btn,
body[data-style="skeuomorphism"] .refresh-btn,
body[data-style="skeuomorphism"] .tab-btn,
body[data-style="skeuomorphism"] .data-mgmt button,
body[data-style="skeuomorphism"] .danger-btn {
  background: linear-gradient(180deg, var(--skeu-btn-from) 0%, var(--skeu-btn-to) 100%);
  border: 1px solid var(--skeu-card-shadow-edge);
  border-top: 1px solid var(--skeu-card-highlight);
  border-radius: 4px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.08);
}
body[data-style="skeuomorphism"] .view-btn:hover,
body[data-style="skeuomorphism"] .scan-btn:hover,
body[data-style="skeuomorphism"] .refresh-btn:hover,
body[data-style="skeuomorphism"] .tab-btn:hover,
body[data-style="skeuomorphism"] .data-mgmt button:hover {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.40),
              inset 0 1px 0 rgba(255, 255, 255, 0.10);
}
body[data-style="skeuomorphism"] .view-btn.active,
body[data-style="skeuomorphism"] .tab-btn.active {
  background: linear-gradient(180deg, var(--skeu-btn-active-from) 0%, var(--skeu-btn-active-to) 100%);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.40),
              inset 0 -1px 0 rgba(255, 255, 255, 0.06);
  color: var(--text-bright);
}
body[data-style="skeuomorphism"] .view-btn:active,
body[data-style="skeuomorphism"] .scan-btn:active,
body[data-style="skeuomorphism"] .tab-btn:active {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.35);
  transform: translateY(1px);
}

/* ── Flip / portfolio cards ──────────────────────────────────────────────── */
body[data-style="skeuomorphism"] .flip-card,
body[data-style="skeuomorphism"] .completed-flip-card {
  background: linear-gradient(180deg, var(--skeu-card-from) 0%, var(--skeu-card-mid) 50%, var(--skeu-card-to) 100%);
  border: 1px solid var(--skeu-card-shadow-edge);
  border-top: 1px solid var(--skeu-card-highlight);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

/* ── Inputs: carved inset fields ─────────────────────────────────────────── */
body[data-style="skeuomorphism"] input[type="text"],
body[data-style="skeuomorphism"] input[type="password"],
body[data-style="skeuomorphism"] input[type="number"],
body[data-style="skeuomorphism"] select,
body[data-style="skeuomorphism"] #market-search-input {
  background: linear-gradient(180deg,
    color-mix(in srgb, var(--skeu-card-to), black 8%) 0%,
    var(--skeu-card-to) 100%);
  border: 1px solid var(--skeu-card-shadow-edge);
  border-radius: 4px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
              inset 0 -1px 0 rgba(255, 255, 255, 0.05);
}

/* ── Modals: heavy realistic frame ───────────────────────────────────────── */
body[data-style="skeuomorphism"] .analytics-modal-content,
body[data-style="skeuomorphism"] .setup-guide-content {
  background: linear-gradient(180deg, var(--skeu-card-from) 0%, var(--skeu-card-mid) 30%, var(--skeu-card-to) 100%);
  border: 1px solid var(--skeu-card-shadow-edge);
  border-top: 2px solid var(--skeu-card-highlight);
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.60),
              0 2px 4px rgba(0, 0, 0, 0.30),
              inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

/* Skeuomorphism — softer shadows & stronger highlights on light modes */
body[data-mode="light"][data-style="skeuomorphism"] .market-card {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.14),
              inset 0 1px 0 rgba(255, 255, 255, 0.50),
              inset 0 -1px 0 rgba(0, 0, 0, 0.05);
}
body[data-mode="light"][data-style="skeuomorphism"] .market-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18),
              inset 0 1px 0 rgba(255, 255, 255, 0.60),
              inset 0 -1px 0 rgba(0, 0, 0, 0.06);
}
body[data-mode="light"][data-style="skeuomorphism"] .top20-section,
body[data-mode="light"][data-style="skeuomorphism"] .favorites-section {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.10),
              inset 0 1px 0 rgba(255, 255, 255, 0.40);
}
body[data-mode="light"][data-style="skeuomorphism"] .flip-card,
body[data-mode="light"][data-style="skeuomorphism"] .completed-flip-card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.10),
              inset 0 1px 0 rgba(255, 255, 255, 0.45);
}
body[data-mode="light"][data-style="skeuomorphism"] input[type="text"],
body[data-mode="light"][data-style="skeuomorphism"] input[type="password"],
body[data-mode="light"][data-style="skeuomorphism"] input[type="number"],
body[data-mode="light"][data-style="skeuomorphism"] select,
body[data-mode="light"][data-style="skeuomorphism"] #market-search-input {
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.10),
              inset 0 -1px 0 rgba(255, 255, 255, 0.30);
}
body[data-mode="light"][data-style="skeuomorphism"] .analytics-modal-content,
body[data-mode="light"][data-style="skeuomorphism"] .setup-guide-content {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18),
              0 2px 4px rgba(0, 0, 0, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.50);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-classic-dark.css"
/*!*************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-classic-dark.css ***!
  \*************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: Classic Dark (OSRS Brown)
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="dark"][data-colorway="classic"] {
  --bg-main: #382b1f;
  --bg-panel: #4a3a2a;
  --bg-elevated: #56452f;
  --bg-hover: #5c4b35;
  --dropdown-bg: #56452f;
  --dropdown-hover-bg: #5c4b35;
  --bg-input: #3e2e1e;
  --bg-muted: #4a3a2a;
  --bg-filter: #322418;
  --bg-number-input: #3a2c1e;

  --text-main: #ffdf8f;
  --text-bright: #fff5d0;
  --text-accent: #ffd666;
  --text-heading: #ff9900;
  --text-price: #6bba48;
  --text-muted: #b89860;
  --text-soft: #c8a060;
  --text-dimmed: #8a6d40;

  --border-main: #1f160e;
  --border-section: #2a1e12;
  --border-card: #5a4428;
  --border-input: #6b5030;
  --border-subtle: #5a4020;
  --border-hype: #806020;
  --border-hype-hover: #a08030;

  --accent-primary: #8b4513;
  --accent-primary-hover: #a0522d;
  --accent-primary-active: #6b3410;
  --accent-focus: #cd853f;
  --accent-blue-text: #cd853f;
  --accent-green: #6b8e23;
  --accent-green-bright: #228b22;
  --accent-teal: #8fbc8f;
  --accent-gold: #ffd700;
  --accent-gold-hype: #ffa500;
  --accent-red: #dc143c;
  --accent-red-dark: #8b0000;
  --accent-red-bg: #3a1a0a;
  --accent-red-border: #8b3030;
  --accent-red-border-hover: #a04040;
  --accent-hype: #e89830;

  /* Contrast base (referenced by contrast-modifiers) */
  --accent-teal-base: #8fbc8f;
  --accent-red-base: #dc143c;
  --accent-blue-text-base: #cd853f;
  --accent-gold-base: #ffd700;

  --chat-user-bg: #5a3a18;
  --chat-error-bg: #3a1a0a;
  --badge-buy-bg: #3a2810;
  --badge-sell-bg: #283a10;
  --badge-hype-bg: #3a3010;

  --modal-backdrop: rgba(0, 0, 0, 0.7);
  --modal-shadow: rgba(0, 0, 0, 0.9);
  --scrollbar-thumb: #6b5030;
  --scrollbar-thumb-hover: #8a6d40;
  --link-color: #cd853f;
  --add-flip-bg: #4a6b1a;
  --limit-ready-bg: #2a3a1a;

  /* Glass helpers */
  --glass-body-from: #0e0804;
  --glass-body-via: #302218;
  --glass-body-to: #140e06;
  --glass-panel: rgba(255, 220, 150, 0.06);
  --glass-elevated: rgba(255, 220, 150, 0.10);
  --glass-hover: rgba(255, 220, 150, 0.12);
  --glass-input: rgba(255, 220, 150, 0.08);
  --glass-muted: rgba(255, 220, 150, 0.05);
  --glass-border-card: rgba(255, 200, 100, 0.20);
  --glass-border-main: rgba(255, 200, 100, 0.10);
  --glass-border-section: rgba(255, 200, 100, 0.12);
  --glass-border-input: rgba(255, 200, 100, 0.22);
  --glass-scrollbar: rgba(255, 200, 100, 0.15);

  /* Neumorphism helpers */
  --neu-shadow-dark: #2a1e14;
  --neu-shadow-light: #5c4a38;
  --neu-accent-shadow: #6b3410;

  /* Skeuomorphism helpers */
  --skeu-body-from: #2a2018;
  --skeu-body-to: #382b1f;
  --skeu-card-from: #584838;
  --skeu-card-mid: #4a3a2a;
  --skeu-card-to: #403020;
  --skeu-card-highlight: #6a5840;
  --skeu-card-shadow-edge: #1f160e;
  --skeu-header-from: #584838;
  --skeu-header-to: #4a4038;
  --skeu-btn-from: #5a4830;
  --skeu-btn-to: #4a3820;
  --skeu-btn-active-from: #8b4513;
  --skeu-btn-active-to: #6b3410;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-classic-light.css"
/*!**************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-classic-light.css ***!
  \**************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: Classic — Light (OSRS)
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="light"][data-colorway="classic"] {
  --bg-main: #f5ead4;
  --bg-panel: #fff6e6;
  --bg-elevated: #fdf2dc;
  --bg-hover: #f0e2c8;
  --dropdown-bg: #fdf2dc;
  --dropdown-hover-bg: #f0e2c8;
  --bg-input: #f0e4cc;
  --bg-muted: #e8dcc0;
  --bg-filter: #f0e8d0;
  --bg-number-input: #f0e4cc;

  --text-main: #4a3520;
  --text-bright: #2c1a08;
  --text-accent: #8b4513;
  --text-heading: #a05a14;
  --text-price: #2a7a1a;
  --text-muted: #8a7560;
  --text-soft: #a08a70;
  --text-dimmed: #c0aa88;

  --border-main: #e0d0b0;
  --border-section: #d8c8a4;
  --border-card: #d0c098;
  --border-input: #c8b890;
  --border-subtle: #e0d4b8;
  --border-hype: #d4a520;
  --border-hype-hover: #b8920a;

  --accent-primary: #8b4513;
  --accent-primary-hover: #a0522d;
  --accent-primary-active: #6b3410;
  --accent-focus: #cd853f;
  --accent-blue-text: #8b5e3c;
  --accent-green: #5a8a1e;
  --accent-green-bright: #3a7a10;
  --accent-teal: #6b8e6b;
  --accent-gold: #866507;
  --accent-gold-hype: #b07808;
  --accent-red: #cc3333;
  --accent-red-dark: #8b0000;
  --accent-red-bg: #fff0e8;
  --accent-red-border: #e0a090;
  --accent-red-border-hover: #d08070;
  --accent-hype: #c87e10;

  /* Contrast base (referenced by contrast-modifiers) */
  --accent-teal-base: #6b8e6b;
  --accent-red-base: #cc3333;
  --accent-blue-text-base: #8b5e3c;
  --accent-gold-base: #866507;

  --chat-user-bg: #f5e8d0;
  --chat-error-bg: #fff0e8;
  --badge-buy-bg: #e8e0c8;
  --badge-sell-bg: #e0f0d0;
  --badge-hype-bg: #f8f0c8;

  --modal-backdrop: rgba(0, 0, 0, 0.25);
  --modal-shadow: rgba(0, 0, 0, 0.15);
  --scrollbar-thumb: #c8b890;
  --scrollbar-thumb-hover: #a89a78;
  --link-color: #8b4513;
  --add-flip-bg: #d8eac0;
  --limit-ready-bg: #e0f0d0;

  /* Glass helpers */
  --glass-body-from: #e8dcc0;
  --glass-body-via: #f0e4cc;
  --glass-body-to: #e0d4b0;
  --glass-panel: rgba(255, 240, 210, 0.55);
  --glass-elevated: rgba(255, 240, 210, 0.65);
  --glass-hover: rgba(255, 240, 210, 0.70);
  --glass-input: rgba(255, 240, 210, 0.50);
  --glass-muted: rgba(255, 240, 210, 0.40);
  --glass-border-card: rgba(139, 69, 19, 0.15);
  --glass-border-main: rgba(139, 69, 19, 0.08);
  --glass-border-section: rgba(139, 69, 19, 0.10);
  --glass-border-input: rgba(139, 69, 19, 0.18);
  --glass-scrollbar: rgba(139, 69, 19, 0.12);

  /* Neumorphism helpers */
  --neu-shadow-dark: #d0c098;
  --neu-shadow-light: #fff8ea;
  --neu-accent-shadow: #6b3410;

  /* Skeuomorphism helpers */
  --skeu-body-from: #e0d4b0;
  --skeu-body-to: #f5ead4;
  --skeu-card-from: #fff6e6;
  --skeu-card-mid: #faf0da;
  --skeu-card-to: #f0e4cc;
  --skeu-card-highlight: #fff8ea;
  --skeu-card-shadow-edge: #c8b890;
  --skeu-header-from: #faf0da;
  --skeu-header-to: #f0e8d0;
  --skeu-btn-from: #f5ead4;
  --skeu-btn-to: #e8dcc0;
  --skeu-btn-active-from: #8b4513;
  --skeu-btn-active-to: #6b3410;
}

/* (light-mode view-btn.active consolidated — see below contrast modifiers) */
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-default-dark.css"
/*!*************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-default-dark.css ***!
  \*************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 * Gielinor Equity Research — Alt1 Overlay Stylesheet
 *
 * Dark palette optimised for readability on top of the RS3 game client.
 * All measurements use px/rem so the overlay renders consistently regardless
 * of the host page's base font-size.
 * ───────────────────────────────────────────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════════════════════════
 *  THEME SYSTEM — Two-axis: Colorway × Style
 *
 *  Mode     (body[data-mode]):       dark | light
 *  Colorway (body[data-colorway]):   default | classic | rs3-modern | solarized | rs-lobby | gruvbox | twilight-amethyst | osrs-design
 *  Contrast (body[data-contrast]):   default | soft | hard
 *  Style    (body[data-style]):      basic | glass | neumorphism | skeuomorphism
 *
 *  Mode × Colorway sets ALL colour variables + per-style helper vars.
 *  Contrast applies brightness adjustments on top.
 *  Style applies structural overrides (shadows, filters, gradients)
 *  using the helper vars so every combination works automatically.
 * ═══════════════════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: Default Dark
 * ───────────────────────────────────────────────────────────────────────────── */

:root {
  /* ── Backgrounds ─────────────────────── */
  --bg-main: #1e1e1e;
  --bg-panel: #252526;
  --bg-elevated: #2d2d30;
  --bg-hover: #2a2d2e;
  --dropdown-bg: #2d2d30;
  --dropdown-hover-bg: #2a2d2e;
  --bg-input: #3c3c3c;
  --bg-muted: #333;
  --bg-filter: #1e1e24;
  --bg-number-input: #2a2a2e;

  /* ── Text ────────────────────────────── */
  --text-main: #d4d4d4;
  --text-bright: #fff;
  --text-accent: #9cdcfe;
  --text-heading: #dcdcaa;
  --text-price: #4ade80;
  --text-muted: #94a3b8;
  --text-soft: #aaa;
  --text-dimmed: #666;

  /* ── Borders ─────────────────────────── */
  --border-main: #333;
  --border-section: #3a3d40;
  --border-card: #4a4d50;
  --border-input: #555;
  --border-subtle: #444;
  --border-hype: #6b5a1e;
  --border-hype-hover: #a08830;

  /* ── Primary action ──────────────────── */
  --accent-primary: #0e639c;
  --accent-primary-hover: #1177bb;
  --accent-primary-active: #094771;
  --accent-focus: #007acc;

  /* ── Semantic accents ────────────────── */
  --accent-blue-text: #569cd6;
  --accent-green: #5ece6b;
  --accent-green-bright: #27ae60;
  --accent-teal: #4ec9b0;
  --accent-gold: #f0c040;
  --accent-gold-hype: #f5c542;
  --accent-hype: #ffab40;
  --accent-red: #ff6b6b;
  --accent-red-dark: #c0392b;
  --accent-red-bg: #3a1d1d;
  --accent-red-border: #6b3030;
  --accent-red-border-hover: #a04040;

  /* ── Contrast base (referenced by contrast-modifiers — never self-referencing) */
  --accent-teal-base: #4ec9b0;
  --accent-red-base: #ff6b6b;
  --accent-blue-text-base: #569cd6;
  --accent-gold-base: #f0c040;

  /* ── Chat ─────────────────────────────── */
  --chat-user-bg: #264f78;
  --chat-error-bg: #3b1a1a;

  /* ── Badges ──────────────────────────── */
  --badge-buy-bg: #1e2d3a;
  --badge-sell-bg: #1e3a1e;
  --badge-hype-bg: #3a2e10;

  /* ── Modal ───────────────────────────── */
  --modal-backdrop: rgba(0, 0, 0, 0.6);
  --modal-shadow: rgba(0, 0, 0, 0.8);

  /* ── Shadows ──────────────────────────── */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 14px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);

  /* ── Radius ─────────────────────────── */
  --radius-sm: 3px;

  /* ── Scrollbar ───────────────────────── */
  --scrollbar-thumb: #555;
  --scrollbar-thumb-hover: #777;

  /* ── Badge sizing tokens ──────────────── */
  --badge-font-sm: 11px;
  --badge-font-md: 12px;
  --badge-padding-sm: 2px 6px;
  --badge-padding-md: 3px 7px;
  --badge-radius: 3px;
  --badge-font-weight: 600;

  /* ── Alias tokens (consumed by components that use short names) ── */
  --border: var(--border-main);
  --text: var(--text-main);

  /* ── Semantic badge-bg tokens (theme-aware, replaces hard-coded rgba) ── */
  --badge-velocity-insta-bg: rgba(39, 174, 96, 0.18);
  --badge-velocity-active-bg: rgba(86, 156, 214, 0.18);
  --badge-velocity-slow-bg: rgba(240, 192, 64, 0.18);
  --badge-velocity-muted-bg: rgba(136, 136, 136, 0.18);
  --badge-trend-up-bg: rgba(39, 174, 96, 0.18);
  --badge-trend-down-bg: rgba(244, 71, 71, 0.18);
  --badge-neutral-bg: rgba(136, 136, 136, 0.15);
  --badge-hype-vol-bg: rgba(255, 171, 64, 0.15);
  --badge-tier-free-bg: rgba(76, 175, 80, 0.12);
  --badge-tier-free-border: rgba(76, 175, 80, 0.3);
  --badge-tier-freetier-bg: rgba(78, 205, 196, 0.12);
  --badge-tier-freetier-border: rgba(78, 205, 196, 0.3);
  --badge-tier-lowcost-bg: rgba(100, 149, 237, 0.12);
  --badge-tier-lowcost-border: rgba(100, 149, 237, 0.3);
  --badge-tier-neutral-bg: rgba(180, 180, 180, 0.08);
  --badge-tier-neutral-border: rgba(180, 180, 180, 0.2);
  --table-active-row-bg: rgba(100, 149, 237, 0.08);
  --table-hover-row-bg: rgba(255, 255, 255, 0.03);
  --setup-note-bg: rgba(255, 215, 0, 0.08);
  --setup-note-border: rgba(255, 215, 0, 0.2);
  --detail-expanded-bg: rgba(0, 0, 0, 0.08);

  /* ── Action hover / glow tokens ─────── */
  --action-hover-blue: rgba(86, 156, 214, 0.12);
  --action-hover-teal: rgba(78, 201, 176, 0.12);
  --action-hover-gold: rgba(240, 192, 64, 0.12);
  --action-glow-gold: rgba(240, 192, 64, 0.5);
  --close-hover-bg: rgba(244, 71, 71, 0.12);
  --win-glow: color-mix(in srgb, var(--accent-green-bright) 8%, transparent);
  --loss-glow: color-mix(in srgb, var(--accent-red-dark) 8%, transparent);

  /* ── Misc ─────────────────────────────── */
  --link-color: #6cb4ee;
  --add-flip-bg: #1b6b2a;
  --limit-ready-bg: #1a2e1a;

  /* ── Style helper vars (Glass) ───────── */
  --glass-body-from: #0c0c0e;
  --glass-body-via: #222226;
  --glass-body-to: #0f0f14;
  --glass-panel: rgba(255, 255, 255, 0.06);
  --glass-elevated: rgba(255, 255, 255, 0.10);
  --glass-hover: rgba(255, 255, 255, 0.12);
  --glass-input: rgba(255, 255, 255, 0.08);
  --glass-muted: rgba(255, 255, 255, 0.05);
  --glass-border-card: rgba(255, 255, 255, 0.18);
  --glass-border-main: rgba(255, 255, 255, 0.10);
  --glass-border-section: rgba(255, 255, 255, 0.12);
  --glass-border-input: rgba(255, 255, 255, 0.20);
  --glass-scrollbar: rgba(255, 255, 255, 0.15);

  /* ── Style helper vars (Neumorphism) ─── */
  --neu-shadow-dark: #151518;
  --neu-shadow-light: #383840;
  --neu-accent-shadow: #094771;

  /* ── Style helper vars (Skeuomorphism) ── */
  --skeu-body-from: #151518;
  --skeu-body-to: #1e1e1e;
  --skeu-card-from: #353538;
  --skeu-card-mid: #252526;
  --skeu-card-to: #1e1e20;
  --skeu-card-highlight: #444;
  --skeu-card-shadow-edge: #151518;
  --skeu-header-from: #353538;
  --skeu-header-to: #2a2a2e;
  --skeu-btn-from: #3a3a3e;
  --skeu-btn-to: #2a2a2e;
  --skeu-btn-active-from: #0e639c;
  --skeu-btn-active-to: #094771;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-default-light.css"
/*!**************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-default-light.css ***!
  \**************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: Default — Light
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="light"][data-colorway="default"] {
  --bg-main: #f5f5f5;
  --bg-panel: #ffffff;
  --bg-elevated: #fafafa;
  --bg-hover: #f0f0f0;
  --dropdown-bg: #fafafa;
  --dropdown-hover-bg: #f0f0f0;
  --bg-input: #f0f0f0;
  --bg-muted: #e8e8e8;
  --bg-filter: #f0f0f0;
  --bg-number-input: #f5f5f5;

  --text-main: #333333;
  --text-bright: #111111;
  --text-accent: #0066cc;
  --text-heading: #1a1a1a;
  --text-price: #1a8a2a;
  --text-muted: #777777;
  --text-soft: #999999;
  --text-dimmed: #bbbbbb;

  --border-main: #e0e0e0;
  --border-section: #d8d8d8;
  --border-card: #d0d0d0;
  --border-input: #cccccc;
  --border-subtle: #e8e8e8;
  --border-hype: #d4a520;
  --border-hype-hover: #b8920a;

  --accent-primary: #0066cc;
  --accent-primary-hover: #0077dd;
  --accent-primary-active: #0055aa;
  --accent-focus: #0066cc;
  --accent-blue-text: #0066cc;
  --accent-green: #2a8a2a;
  --accent-green-bright: #22aa22;
  --accent-teal: #1a9a8a;
  --accent-gold: #8a6c15;
  --accent-gold-hype: #c09010;
  --accent-red: #cc3333;
  --accent-red-dark: #aa2222;
  --accent-red-bg: #fff0f0;
  --accent-red-border: #e0a0a0;
  --accent-red-border-hover: #d08080;
  --accent-hype: #e68a00;

  /* Contrast base (referenced by contrast-modifiers) */
  --accent-teal-base: #1a9a8a;
  --accent-red-base: #cc3333;
  --accent-blue-text-base: #0066cc;
  --accent-gold-base: #8a6c15;

  --chat-user-bg: #e6f0ff;
  --chat-error-bg: #fff0f0;
  --badge-buy-bg: #e0f0ff;
  --badge-sell-bg: #e0ffe0;
  --badge-hype-bg: #fff8e0;

  --modal-backdrop: rgba(0, 0, 0, 0.25);
  --modal-shadow: rgba(0, 0, 0, 0.15);
  --scrollbar-thumb: #cccccc;
  --scrollbar-thumb-hover: #aaaaaa;
  --link-color: #0066cc;
  --add-flip-bg: #d0f0d0;
  --limit-ready-bg: #e0f8e0;

  /* Glass helpers */
  --glass-body-from: #d8d8d8;
  --glass-body-via: #e4e4e4;
  --glass-body-to: #d0d0d0;
  --glass-panel: rgba(255, 255, 255, 0.50);
  --glass-elevated: rgba(255, 255, 255, 0.60);
  --glass-hover: rgba(255, 255, 255, 0.65);
  --glass-input: rgba(255, 255, 255, 0.45);
  --glass-muted: rgba(255, 255, 255, 0.35);
  --glass-border-card: rgba(0, 0, 0, 0.12);
  --glass-border-main: rgba(0, 0, 0, 0.08);
  --glass-border-section: rgba(0, 0, 0, 0.10);
  --glass-border-input: rgba(0, 0, 0, 0.15);
  --glass-scrollbar: rgba(0, 0, 0, 0.12);

  /* Neumorphism helpers */
  --neu-shadow-dark: #d0d0d0;
  --neu-shadow-light: #ffffff;
  --neu-accent-shadow: #0055aa;

  /* Skeuomorphism helpers */
  --skeu-body-from: #e8e8e8;
  --skeu-body-to: #f5f5f5;
  --skeu-card-from: #ffffff;
  --skeu-card-mid: #f8f8f8;
  --skeu-card-to: #f0f0f0;
  --skeu-card-highlight: #ffffff;
  --skeu-card-shadow-edge: #cccccc;
  --skeu-header-from: #fafafa;
  --skeu-header-to: #f0f0f0;
  --skeu-btn-from: #f5f5f5;
  --skeu-btn-to: #e8e8e8;
  --skeu-btn-active-from: #0066cc;
  --skeu-btn-active-to: #0055aa;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-gruvbox-dark.css"
/*!*************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-gruvbox-dark.css ***!
  \*************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: Gruvbox — Dark
 *  morhetz/gruvbox "retro groove" palette — warm earthy tones with pastel
 *  accents. bg0 #282828, fg1 #ebdbb2, yellow #d79921, aqua #689d6a.
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="dark"][data-colorway="gruvbox"] {
  --bg-main: #282828;
  --bg-panel: #3c3836;
  --bg-elevated: #504945;
  --bg-hover: #665c54;
  --dropdown-bg: #504945;
  --dropdown-hover-bg: #665c54;
  --bg-input: #32302f;
  --bg-muted: #3c3836;
  --bg-filter: #1d2021;
  --bg-number-input: #32302f;

  --text-main: #ebdbb2;
  --text-bright: #fbf1c7;
  --text-accent: #fabd2f;
  --text-heading: #fe8019;
  --text-price: #8ecc2a;
  --text-muted: #928374;
  --text-soft: #a89984;
  --text-dimmed: #7c6f64;

  --border-main: #504945;
  --border-section: #3c3836;
  --border-card: #665c54;
  --border-input: #665c54;
  --border-subtle: #504945;
  --border-hype: #d65d0e;
  --border-hype-hover: #fe8019;

  --accent-primary: #458588;
  --accent-primary-hover: #83a598;
  --accent-primary-active: #076678;
  --accent-focus: #83a598;
  --accent-blue-text: #83a598;
  --accent-green: #98971a;
  --accent-green-bright: #b8bb26;
  --accent-teal: #689d6a;
  --accent-gold: #d79921;
  --accent-gold-hype: #fabd2f;
  --accent-red: #fb4934;
  --accent-red-dark: #cc241d;
  --accent-red-bg: #3c1f1f;
  --accent-red-border: #cc241d;
  --accent-red-border-hover: #fb4934;
  --accent-hype: #fe8019;

  /* Contrast base (referenced by contrast-modifiers) */
  --accent-teal-base: #689d6a;
  --accent-red-base: #fb4934;
  --accent-blue-text-base: #83a598;
  --accent-gold-base: #d79921;

  --chat-user-bg: #3c3836;
  --chat-error-bg: #3c1f1f;
  --badge-buy-bg: #2a3428;
  --badge-sell-bg: #283428;
  --badge-hype-bg: #3c3020;

  --modal-backdrop: rgba(0, 0, 0, 0.75);
  --modal-shadow: rgba(0, 0, 0, 0.9);
  --scrollbar-thumb: #665c54;
  --scrollbar-thumb-hover: #7c6f64;
  --link-color: #83a598;
  --add-flip-bg: #3a4a28;
  --limit-ready-bg: #2a3a1e;

  /* Glass helpers */
  --glass-body-from: #14151a;
  --glass-body-via: #302e28;
  --glass-body-to: #18181c;
  --glass-panel: rgba(235, 219, 178, 0.06);
  --glass-elevated: rgba(235, 219, 178, 0.10);
  --glass-hover: rgba(235, 219, 178, 0.12);
  --glass-input: rgba(235, 219, 178, 0.08);
  --glass-muted: rgba(235, 219, 178, 0.05);
  --glass-border-card: rgba(235, 219, 178, 0.15);
  --glass-border-main: rgba(235, 219, 178, 0.08);
  --glass-border-section: rgba(235, 219, 178, 0.10);
  --glass-border-input: rgba(235, 219, 178, 0.18);
  --glass-scrollbar: rgba(235, 219, 178, 0.12);

  /* Neumorphism helpers */
  --neu-shadow-dark: #1d2021;
  --neu-shadow-light: #504945;
  --neu-accent-shadow: #076678;

  /* Skeuomorphism helpers */
  --skeu-body-from: #1d2021;
  --skeu-body-to: #282828;
  --skeu-card-from: #504945;
  --skeu-card-mid: #3c3836;
  --skeu-card-to: #32302f;
  --skeu-card-highlight: #665c54;
  --skeu-card-shadow-edge: #1d2021;
  --skeu-header-from: #504945;
  --skeu-header-to: #3c3836;
  --skeu-btn-from: #504945;
  --skeu-btn-to: #3c3836;
  --skeu-btn-active-from: #458588;
  --skeu-btn-active-to: #076678;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-gruvbox-light.css"
/*!**************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-gruvbox-light.css ***!
  \**************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: Gruvbox — Light
 *  morhetz/gruvbox light palette — warm cream bg (#fbf1c7), dark fg (#3c3836),
 *  same pastel accent family as Gruvbox Dark.
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="light"][data-colorway="gruvbox"] {
  --bg-main: #fbf1c7;
  --bg-panel: #ebdbb2;
  --bg-elevated: #f2e5bc;
  --bg-hover: #d5c4a1;
  --dropdown-bg: #f2e5bc;
  --dropdown-hover-bg: #d5c4a1;
  --bg-input: #ebdbb2;
  --bg-muted: #d5c4a1;
  --bg-filter: #f9f0c0;
  --bg-number-input: #ebdbb2;

  --text-main: #3c3836;
  --text-bright: #282828;
  --text-accent: #b57614;
  --text-heading: #af3a03;
  --text-price: #5a8a0e;
  --text-muted: #7c6f64;
  --text-soft: #928374;
  --text-dimmed: #a89984;

  --border-main: #d5c4a1;
  --border-section: #bdae93;
  --border-card: #bdae93;
  --border-input: #a89984;
  --border-subtle: #d5c4a1;
  --border-hype: #af3a03;
  --border-hype-hover: #d65d0e;

  --accent-primary: #076678;
  --accent-primary-hover: #458588;
  --accent-primary-active: #054b5c;
  --accent-focus: #076678;
  --accent-blue-text: #076678;
  --accent-green: #79740e;
  --accent-green-bright: #98971a;
  --accent-teal: #427b58;
  --accent-gold: #b57614;
  --accent-gold-hype: #d79921;
  --accent-red: #cc241d;
  --accent-red-dark: #9d0006;
  --accent-red-bg: #f9e0de;
  --accent-red-border: #cc241d;
  --accent-red-border-hover: #9d0006;
  --accent-hype: #af3a03;

  /* Contrast base (referenced by contrast-modifiers) */
  --accent-teal-base: #427b58;
  --accent-red-base: #cc241d;
  --accent-blue-text-base: #076678;
  --accent-gold-base: #b57614;

  --chat-user-bg: #ebdbb2;
  --chat-error-bg: #f9e0de;
  --badge-buy-bg: #e0dba8;
  --badge-sell-bg: #dde0a0;
  --badge-hype-bg: #eddca0;

  --modal-backdrop: rgba(0, 0, 0, 0.25);
  --modal-shadow: rgba(0, 0, 0, 0.15);
  --scrollbar-thumb: #bdae93;
  --scrollbar-thumb-hover: #a89984;
  --link-color: #076678;
  --add-flip-bg: #d0dca0;
  --limit-ready-bg: #dae4b0;

  /* Glass helpers */
  --glass-body-from: #e8dcb0;
  --glass-body-via: #f0e4c0;
  --glass-body-to: #e0d4a8;
  --glass-panel: rgba(251, 241, 199, 0.55);
  --glass-elevated: rgba(251, 241, 199, 0.65);
  --glass-hover: rgba(251, 241, 199, 0.70);
  --glass-input: rgba(251, 241, 199, 0.50);
  --glass-muted: rgba(251, 241, 199, 0.40);
  --glass-border-card: rgba(60, 56, 54, 0.12);
  --glass-border-main: rgba(60, 56, 54, 0.08);
  --glass-border-section: rgba(60, 56, 54, 0.10);
  --glass-border-input: rgba(60, 56, 54, 0.15);
  --glass-scrollbar: rgba(60, 56, 54, 0.10);

  /* Neumorphism helpers */
  --neu-shadow-dark: #d5c4a1;
  --neu-shadow-light: #fbf1c7;
  --neu-accent-shadow: #054b5c;

  /* Skeuomorphism helpers */
  --skeu-body-from: #ebdbb2;
  --skeu-body-to: #fbf1c7;
  --skeu-card-from: #f2e5bc;
  --skeu-card-mid: #ebdbb2;
  --skeu-card-to: #e0d4a8;
  --skeu-card-highlight: #fbf1c7;
  --skeu-card-shadow-edge: #bdae93;
  --skeu-header-from: #f2e5bc;
  --skeu-header-to: #ebdbb2;
  --skeu-btn-from: #f2e5bc;
  --skeu-btn-to: #ebdbb2;
  --skeu-btn-active-from: #076678;
  --skeu-btn-active-to: #054b5c;
}

/* (light-mode view-btn.active consolidated — see rule below) */
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-osrs-design-dark.css"
/*!*****************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-osrs-design-dark.css ***!
  \*****************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: OSRS Design — Dark
 *
 *  Based on the official OSRS Design System (osrs.design/foundations/colors).
 *  Primary: yellow #FFCF3F, gold #E6A519, brown #694D23, darkBrown #382D1A
 *  UI: background #2E2C29, border #474745, panel #46433A
 *  Status: green #00FF00, red #FF0000, blue #0088FF
 *  Text: yellow #FFCF3F, gold #E6A519, chat cyan #00FFFF
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="dark"][data-colorway="osrs-design"] {
  /* ── Backgrounds ─────────────────────── */
  --bg-main: #2e2c29;
  --bg-panel: #46433a;
  --bg-elevated: #524e44;
  --bg-hover: #5a5648;
  --dropdown-bg: #524e44;
  --dropdown-hover-bg: #5a5648;
  --bg-input: #382d1a;
  --bg-muted: #3e3a32;
  --bg-filter: #262420;
  --bg-number-input: #342e24;

  /* ── Text ────────────────────────────── */
  --text-main: #ffcf3f;
  --text-bright: #fff5d0;
  --text-accent: #00ffff;
  --text-heading: #e6a519;
  --text-price: #4ade80;
  --text-muted: #b8a882;
  --text-soft: #a89870;
  --text-dimmed: #7a7060;

  /* ── Borders ─────────────────────────── */
  --border-main: #474745;
  --border-section: #555350;
  --border-card: #5e5c58;
  --border-input: #6a6860;
  --border-subtle: #504e48;
  --border-hype: #806020;
  --border-hype-hover: #a08830;

  /* ── Primary action ──────────────────── */
  --accent-primary: #694d23;
  --accent-primary-hover: #7a5e30;
  --accent-primary-active: #503a18;
  --accent-focus: #e6a519;

  /* ── Semantic accents ────────────────── */
  --accent-blue-text: #0088ff;
  --accent-green: #40e040;
  --accent-green-bright: #00cc00;
  --accent-teal: #00ddcc;
  --accent-gold: #e6a519;
  --accent-gold-hype: #ffcf3f;
  --accent-hype: #ffab40;
  --accent-red: #ff4444;
  --accent-red-dark: #cc0000;
  --accent-red-bg: #3a1a0a;
  --accent-red-border: #8b3030;
  --accent-red-border-hover: #a04040;

  /* ── Contrast base (referenced by contrast-modifiers — never self-referencing) */
  --accent-teal-base: #00ddcc;
  --accent-red-base: #ff4444;
  --accent-blue-text-base: #0088ff;
  --accent-gold-base: #e6a519;

  /* ── Chat ─────────────────────────────── */
  --chat-user-bg: #4a3e28;
  --chat-error-bg: #3a1a0a;

  /* ── Badges ──────────────────────────── */
  --badge-buy-bg: #2a3040;
  --badge-sell-bg: #1e3a1e;
  --badge-hype-bg: #3a3010;

  /* ── Modal ───────────────────────────── */
  --modal-backdrop: rgba(0, 0, 0, 0.7);
  --modal-shadow: rgba(0, 0, 0, 0.9);

  /* ── Scrollbar ───────────────────────── */
  --scrollbar-thumb: #6a6860;
  --scrollbar-thumb-hover: #877a68;

  /* ── Misc ─────────────────────────────── */
  --link-color: #00ccff;
  --add-flip-bg: #1a4a1a;
  --limit-ready-bg: #1a3a1a;

  /* ── Style helper vars (Glass) ───────── */
  --glass-body-from: #100e08;
  --glass-body-via: #302a1c;
  --glass-body-to: #161210;
  --glass-panel: rgba(255, 207, 63, 0.06);
  --glass-elevated: rgba(255, 207, 63, 0.10);
  --glass-hover: rgba(255, 207, 63, 0.12);
  --glass-input: rgba(255, 207, 63, 0.08);
  --glass-muted: rgba(255, 207, 63, 0.05);
  --glass-border-card: rgba(230, 165, 25, 0.22);
  --glass-border-main: rgba(230, 165, 25, 0.12);
  --glass-border-section: rgba(230, 165, 25, 0.14);
  --glass-border-input: rgba(230, 165, 25, 0.24);
  --glass-scrollbar: rgba(230, 165, 25, 0.15);

  /* ── Style helper vars (Neumorphism) ─── */
  --neu-shadow-dark: #1a1810;
  --neu-shadow-light: #524e44;
  --neu-accent-shadow: #503a18;

  /* ── Style helper vars (Skeuomorphism) ── */
  --skeu-body-from: #201e18;
  --skeu-body-to: #2e2c29;
  --skeu-card-from: #564e40;
  --skeu-card-mid: #46433a;
  --skeu-card-to: #3e3a32;
  --skeu-card-highlight: #686050;
  --skeu-card-shadow-edge: #1a1810;
  --skeu-header-from: #564e40;
  --skeu-header-to: #4a4638;
  --skeu-btn-from: #5a5240;
  --skeu-btn-to: #4a4230;
  --skeu-btn-active-from: #694d23;
  --skeu-btn-active-to: #503a18;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-osrs-design-light.css"
/*!******************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-osrs-design-light.css ***!
  \******************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: OSRS Design — Light
 *
 *  Light-mode adaptation of the OSRS Design System palette.
 *  Warm parchment backgrounds with deep brown/gold text and accents.
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="light"][data-colorway="osrs-design"] {
  /* ── Backgrounds ─────────────────────── */
  --bg-main: #f8f0dc;
  --bg-panel: #fff8e8;
  --bg-elevated: #fdf4e0;
  --bg-hover: #f0e6cc;
  --dropdown-bg: #fdf4e0;
  --dropdown-hover-bg: #f0e6cc;
  --bg-input: #f2e8d0;
  --bg-muted: #eadfc4;
  --bg-filter: #f4ecd4;
  --bg-number-input: #f2e8d0;

  /* ── Text ────────────────────────────── */
  --text-main: #382d1a;
  --text-bright: #0f0f0f;
  --text-accent: #694d23;
  --text-heading: #8a5e0a;
  --text-price: #1a7a1a;
  --text-muted: #7a6a4a;
  --text-soft: #9a8a68;
  --text-dimmed: #baa880;

  /* ── Borders ─────────────────────────── */
  --border-main: #d8c8a4;
  --border-section: #d0be96;
  --border-card: #c8b68a;
  --border-input: #c0ae80;
  --border-subtle: #e0d2b0;
  --border-hype: #d4a520;
  --border-hype-hover: #b8920a;

  /* ── Primary action ──────────────────── */
  --accent-primary: #694d23;
  --accent-primary-hover: #7a5e30;
  --accent-primary-active: #503a18;
  --accent-focus: #e6a519;

  /* ── Semantic accents ────────────────── */
  --accent-blue-text: #0066cc;
  --accent-green: #228b22;
  --accent-green-bright: #1a7a1a;
  --accent-teal: #1a8a7a;
  --accent-gold: #8e6600;
  --accent-gold-hype: #b07808;
  --accent-red: #cc2222;
  --accent-red-dark: #990000;
  --accent-red-bg: #fff0e8;
  --accent-red-border: #e0a090;
  --accent-red-border-hover: #d08070;
  --accent-hype: #c87e10;

  /* ── Contrast base (referenced by contrast-modifiers — never self-referencing) */
  --accent-teal-base: #1a8a7a;
  --accent-red-base: #cc2222;
  --accent-blue-text-base: #0066cc;
  --accent-gold-base: #8e6600;

  /* ── Chat ─────────────────────────────── */
  --chat-user-bg: #f8eed0;
  --chat-error-bg: #fff0e8;

  /* ── Badges ──────────────────────────── */
  --badge-buy-bg: #e0eaf0;
  --badge-sell-bg: #d8f0d0;
  --badge-hype-bg: #f8f0c8;

  /* ── Modal ───────────────────────────── */
  --modal-backdrop: rgba(0, 0, 0, 0.25);
  --modal-shadow: rgba(0, 0, 0, 0.15);

  /* ── Scrollbar ───────────────────────── */
  --scrollbar-thumb: #c0ae80;
  --scrollbar-thumb-hover: #a09068;

  /* ── Misc ─────────────────────────────── */
  --link-color: #694d23;
  --add-flip-bg: #d0ecc0;
  --limit-ready-bg: #d8f0d0;

  /* ── Style helper vars (Glass) ───────── */
  --glass-body-from: #e8dcc0;
  --glass-body-via: #f0e4cc;
  --glass-body-to: #e0d4b0;
  --glass-panel: rgba(255, 248, 232, 0.55);
  --glass-elevated: rgba(255, 248, 232, 0.65);
  --glass-hover: rgba(255, 248, 232, 0.70);
  --glass-input: rgba(255, 248, 232, 0.50);
  --glass-muted: rgba(255, 248, 232, 0.40);
  --glass-border-card: rgba(105, 77, 35, 0.15);
  --glass-border-main: rgba(105, 77, 35, 0.08);
  --glass-border-section: rgba(105, 77, 35, 0.10);
  --glass-border-input: rgba(105, 77, 35, 0.18);
  --glass-scrollbar: rgba(105, 77, 35, 0.12);

  /* ── Style helper vars (Neumorphism) ─── */
  --neu-shadow-dark: #c8b890;
  --neu-shadow-light: #fff8ea;
  --neu-accent-shadow: #503a18;

  /* ── Style helper vars (Skeuomorphism) ── */
  --skeu-body-from: #e4d8b8;
  --skeu-body-to: #f8f0dc;
  --skeu-card-from: #fff8e8;
  --skeu-card-mid: #fdf4e0;
  --skeu-card-to: #f4ecd4;
  --skeu-card-highlight: #fff8ea;
  --skeu-card-shadow-edge: #c0ae80;
  --skeu-header-from: #fdf4e0;
  --skeu-header-to: #f4ecd4;
  --skeu-btn-from: #f8f0dc;
  --skeu-btn-to: #eadfc4;
  --skeu-btn-active-from: #694d23;
  --skeu-btn-active-to: #503a18;
}

/* (light-mode view-btn.active consolidated — see light-mode-overrides.css) */
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-rs-lobby-dark.css"
/*!**************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-rs-lobby-dark.css ***!
  \**************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: RS Lobby — Dark
 *  Inspired by the RuneScape in-game lobby UI — warm parchment browns,
 *  gold accents, ridge-border aesthetic. A blend of OSRS + RS3 Modern.
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="dark"][data-colorway="rs-lobby"] {
  --bg-main: #1a140f;
  --bg-panel: #2a221b;
  --bg-elevated: #3e3529;
  --bg-hover: #4a3e30;
  --dropdown-bg: #3e3529;
  --dropdown-hover-bg: #4a3e30;
  --bg-input: #1a1510;
  --bg-muted: #2a221b;
  --bg-filter: #15100c;
  --bg-number-input: #1a1510;

  --text-main: #bdae95;
  --text-bright: #e0e0e0;
  --text-accent: #c8b07a;
  --text-heading: #eddca8;
  --text-price: #6bba48;
  --text-muted: #8a7a68;
  --text-soft: #a39682;
  --text-dimmed: #5a4e3d;

  --border-main: #4a3e30;
  --border-section: #3a3228;
  --border-card: #5a4e3d;
  --border-input: #5a4a38;
  --border-subtle: #3e3224;
  --border-hype: #806830;
  --border-hype-hover: #a08840;

  --accent-primary: #7a654c;
  --accent-primary-hover: #96805c;
  --accent-primary-active: #5a4830;
  --accent-focus: #c8b07a;
  --accent-blue-text: #7192bc;
  --accent-green: #539e30;
  --accent-green-bright: #6bba48;
  --accent-teal: #7192bc;
  --accent-gold: #c8b07a;
  --accent-gold-hype: #d98d26;
  --accent-red: #a32222;
  --accent-red-dark: #7a1818;
  --accent-red-bg: #2a1510;
  --accent-red-border: #8a3030;
  --accent-red-border-hover: #a84040;
  --accent-hype: #d98d26;

  /* Contrast base (referenced by contrast-modifiers) */
  --accent-teal-base: #7192bc;
  --accent-red-base: #a32222;
  --accent-blue-text-base: #7192bc;
  --accent-gold-base: #c8b07a;

  --chat-user-bg: #3a3020;
  --chat-error-bg: #2a1510;
  --badge-buy-bg: #2a2818;
  --badge-sell-bg: #1e3010;
  --badge-hype-bg: #3a3010;

  --modal-backdrop: rgba(0, 0, 0, 0.75);
  --modal-shadow: rgba(0, 0, 0, 0.9);
  --scrollbar-thumb: #5a4a38;
  --scrollbar-thumb-hover: #7a654c;
  --link-color: #c8b07a;
  --add-flip-bg: #2a3a1a;
  --limit-ready-bg: #1e2a14;

  /* Glass helpers */
  --glass-body-from: #080604;
  --glass-body-via: #201a14;
  --glass-body-to: #0c0a06;
  --glass-panel: rgba(200, 176, 122, 0.06);
  --glass-elevated: rgba(200, 176, 122, 0.10);
  --glass-hover: rgba(200, 176, 122, 0.12);
  --glass-input: rgba(200, 176, 122, 0.08);
  --glass-muted: rgba(200, 176, 122, 0.05);
  --glass-border-card: rgba(200, 176, 122, 0.18);
  --glass-border-main: rgba(200, 176, 122, 0.10);
  --glass-border-section: rgba(200, 176, 122, 0.12);
  --glass-border-input: rgba(200, 176, 122, 0.20);
  --glass-scrollbar: rgba(200, 176, 122, 0.14);

  /* Neumorphism helpers */
  --neu-shadow-dark: #100c08;
  --neu-shadow-light: #4a3e30;
  --neu-accent-shadow: #5a4830;

  /* Skeuomorphism helpers */
  --skeu-body-from: #15100c;
  --skeu-body-to: #2a221b;
  --skeu-card-from: #4a3e30;
  --skeu-card-mid: #3e3529;
  --skeu-card-to: #2a221b;
  --skeu-card-highlight: #5a4e3d;
  --skeu-card-shadow-edge: #100c08;
  --skeu-header-from: #4a3e30;
  --skeu-header-to: #3a3228;
  --skeu-btn-from: #506270;
  --skeu-btn-to: #34414a;
  --skeu-btn-active-from: #c8b07a;
  --skeu-btn-active-to: #96805c;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-rs-lobby-light.css"
/*!***************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-rs-lobby-light.css ***!
  \***************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: RS Lobby — Light
 *  Light-mode counterpart: warm cream/parchment base with gold highlights.
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="light"][data-colorway="rs-lobby"] {
  --bg-main: #f2ece2;
  --bg-panel: #faf6ee;
  --bg-elevated: #f6f0e6;
  --bg-hover: #ece4d6;
  --dropdown-bg: #f6f0e6;
  --dropdown-hover-bg: #ece4d6;
  --bg-input: #eae2d4;
  --bg-muted: #e0d8c8;
  --bg-filter: #f0e8da;
  --bg-number-input: #eae2d4;

  --text-main: #3e3529;
  --text-bright: #1a140f;
  --text-accent: #8b6914;
  --text-heading: #6b5010;
  --text-price: #2a7a1a;
  --text-muted: #7a6d5a;
  --text-soft: #8a7e6c;
  --text-dimmed: #b0a490;

  --border-main: #d4c8b4;
  --border-section: #c8bca8;
  --border-card: #c0b49e;
  --border-input: #b8ac96;
  --border-subtle: #dcd0bc;
  --border-hype: #c09020;
  --border-hype-hover: #a07a10;

  --accent-primary: #8b6914;
  --accent-primary-hover: #a07a20;
  --accent-primary-active: #6b5010;
  --accent-focus: #8b6914;
  --accent-blue-text: #506070;
  --accent-green: #3a8a28;
  --accent-green-bright: #2a7a1a;
  --accent-teal: #4a7a6a;
  --accent-gold: #876517;
  --accent-gold-hype: #a07a10;
  --accent-red: #a32222;
  --accent-red-dark: #7a1818;
  --accent-red-bg: #fff0ec;
  --accent-red-border: #d8a0a0;
  --accent-red-border-hover: #c88080;
  --accent-hype: #c88020;

  /* Contrast base (referenced by contrast-modifiers) */
  --accent-teal-base: #4a7a6a;
  --accent-red-base: #a32222;
  --accent-blue-text-base: #506070;
  --accent-gold-base: #876517;

  --chat-user-bg: #f0e8d4;
  --chat-error-bg: #fff0ec;
  --badge-buy-bg: #e8e0ce;
  --badge-sell-bg: #dcf0dc;
  --badge-hype-bg: #f8f0d0;

  --modal-backdrop: rgba(0, 0, 0, 0.25);
  --modal-shadow: rgba(0, 0, 0, 0.15);
  --scrollbar-thumb: #c0b49e;
  --scrollbar-thumb-hover: #a09480;
  --link-color: #8b6914;
  --add-flip-bg: #d0e8c0;
  --limit-ready-bg: #daf0d0;

  /* Glass helpers */
  --glass-body-from: #e0d8c8;
  --glass-body-via: #ece4d6;
  --glass-body-to: #d8ceb8;
  --glass-panel: rgba(250, 244, 230, 0.55);
  --glass-elevated: rgba(250, 244, 230, 0.65);
  --glass-hover: rgba(250, 244, 230, 0.70);
  --glass-input: rgba(250, 244, 230, 0.50);
  --glass-muted: rgba(250, 244, 230, 0.40);
  --glass-border-card: rgba(139, 105, 20, 0.14);
  --glass-border-main: rgba(139, 105, 20, 0.08);
  --glass-border-section: rgba(139, 105, 20, 0.10);
  --glass-border-input: rgba(139, 105, 20, 0.16);
  --glass-scrollbar: rgba(139, 105, 20, 0.12);

  /* Neumorphism helpers */
  --neu-shadow-dark: #c8bca8;
  --neu-shadow-light: #ffffff;
  --neu-accent-shadow: #6b5010;

  /* Skeuomorphism helpers */
  --skeu-body-from: #e0d8c8;
  --skeu-body-to: #f2ece2;
  --skeu-card-from: #faf6ee;
  --skeu-card-mid: #f6f0e6;
  --skeu-card-to: #ece4d6;
  --skeu-card-highlight: #ffffff;
  --skeu-card-shadow-edge: #b8ac96;
  --skeu-header-from: #f6f0e6;
  --skeu-header-to: #ece4d6;
  --skeu-btn-from: #f2ece2;
  --skeu-btn-to: #e0d8c8;
  --skeu-btn-active-from: #8b6914;
  --skeu-btn-active-to: #6b5010;
}

/* (light-mode view-btn.active consolidated — see below contrast modifiers) */
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-rs3-modern-dark.css"
/*!****************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-rs3-modern-dark.css ***!
  \****************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: RS3 Modern — Dark
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="dark"][data-colorway="rs3-modern"] {
  --bg-main: #0f1722;
  --bg-panel: #1c2836;
  --bg-elevated: #1e2d3e;
  --bg-hover: #243548;
  --dropdown-bg: #1e2d3e;
  --dropdown-hover-bg: #243548;
  --bg-input: #1a2a3a;
  --bg-muted: #1c2836;
  --bg-filter: #141f2d;
  --bg-number-input: #162030;

  --text-main: #e6f0fa;
  --text-bright: #ffffff;
  --text-accent: #7dd3fc;
  --text-heading: #38bdf8;
  --text-price: #4ade80;
  --text-muted: #7494b0;
  --text-soft: #90adc4;
  --text-dimmed: #4a6580;

  --border-main: #2a3f54;
  --border-section: #1e3450;
  --border-card: #3a5068;
  --border-input: #3a5570;
  --border-subtle: #2a4060;
  --border-hype: #5a5a1e;
  --border-hype-hover: #808030;

  --accent-primary: #00a8ff;
  --accent-primary-hover: #33bbff;
  --accent-primary-active: #0080cc;
  --accent-focus: #00a8ff;
  --accent-blue-text: #7dd3fc;
  --accent-green: #4ade80;
  --accent-green-bright: #22c55e;
  --accent-teal: #2dd4bf;
  --accent-gold: #fbbf24;
  --accent-gold-hype: #f59e0b;
  --accent-red: #f87171;
  --accent-red-dark: #ef4444;
  --accent-red-bg: #2a1515;
  --accent-red-border: #7f1d1d;
  --accent-red-border-hover: #991b1b;
  --accent-hype: #ffab40;

  /* Contrast base (referenced by contrast-modifiers) */
  --accent-teal-base: #2dd4bf;
  --accent-red-base: #f87171;
  --accent-blue-text-base: #7dd3fc;
  --accent-gold-base: #fbbf24;

  --chat-user-bg: #0c3a6e;
  --chat-error-bg: #2a1515;
  --badge-buy-bg: #0c2d4a;
  --badge-sell-bg: #0c3a1e;
  --badge-hype-bg: #3a3010;

  --modal-backdrop: rgba(0, 0, 0, 0.75);
  --modal-shadow: rgba(0, 0, 0, 0.9);
  --scrollbar-thumb: #3a5570;
  --scrollbar-thumb-hover: #4a7090;
  --link-color: #7dd3fc;
  --add-flip-bg: #0d5a2a;
  --limit-ready-bg: #0d2a1a;

  /* Glass helpers */
  --glass-body-from: #020610;
  --glass-body-via: #101e34;
  --glass-body-to: #040c1a;
  --glass-panel: rgba(120, 180, 255, 0.06);
  --glass-elevated: rgba(120, 180, 255, 0.10);
  --glass-hover: rgba(120, 180, 255, 0.12);
  --glass-input: rgba(120, 180, 255, 0.08);
  --glass-muted: rgba(120, 180, 255, 0.05);
  --glass-border-card: rgba(100, 180, 255, 0.20);
  --glass-border-main: rgba(100, 180, 255, 0.10);
  --glass-border-section: rgba(100, 180, 255, 0.12);
  --glass-border-input: rgba(100, 180, 255, 0.22);
  --glass-scrollbar: rgba(100, 180, 255, 0.15);

  /* Neumorphism helpers */
  --neu-shadow-dark: #080e18;
  --neu-shadow-light: #2a3a4e;
  --neu-accent-shadow: #0080cc;

  /* Skeuomorphism helpers */
  --skeu-body-from: #080e18;
  --skeu-body-to: #0f1722;
  --skeu-card-from: #243040;
  --skeu-card-mid: #1c2836;
  --skeu-card-to: #141e2c;
  --skeu-card-highlight: #3a5068;
  --skeu-card-shadow-edge: #080e18;
  --skeu-header-from: #243040;
  --skeu-header-to: #1c2836;
  --skeu-btn-from: #243548;
  --skeu-btn-to: #1a2a3a;
  --skeu-btn-active-from: #00a8ff;
  --skeu-btn-active-to: #0080cc;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-rs3-modern-light.css"
/*!*****************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-rs3-modern-light.css ***!
  \*****************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: RS3 Modern — Light
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="light"][data-colorway="rs3-modern"] {
  --bg-main: #eef4fa;
  --bg-panel: #f8fbff;
  --bg-elevated: #f4f8fd;
  --bg-hover: #e6eef6;
  --dropdown-bg: #f4f8fd;
  --dropdown-hover-bg: #e6eef6;
  --bg-input: #e8f0f8;
  --bg-muted: #dce8f2;
  --bg-filter: #eaf2fa;
  --bg-number-input: #e8f0f8;

  --text-main: #1a2a3a;
  --text-bright: #0a1420;
  --text-accent: #0078d4;
  --text-heading: #0060b0;
  --text-price: #1a8a2a;
  --text-muted: #5a7a94;
  --text-soft: #7a94aa;
  --text-dimmed: #a0b4c4;

  --border-main: #d0dce8;
  --border-section: #c8d8e8;
  --border-card: #c0d0e0;
  --border-input: #b8cad8;
  --border-subtle: #dce8f2;
  --border-hype: #d4a520;
  --border-hype-hover: #b8920a;

  --accent-primary: #0078d4;
  --accent-primary-hover: #1888e0;
  --accent-primary-active: #0060b0;
  --accent-focus: #0078d4;
  --accent-blue-text: #0078d4;
  --accent-green: #248a3d;
  --accent-green-bright: #1a7a2e;
  --accent-teal: #1a8a7a;
  --accent-gold: #896b15;
  --accent-gold-hype: #c09010;
  --accent-red: #d13438;
  --accent-red-dark: #a4262c;
  --accent-red-bg: #fff0f0;
  --accent-red-border: #e0a0a0;
  --accent-red-border-hover: #d08080;
  --accent-hype: #e08a00;

  /* Contrast base (referenced by contrast-modifiers) */
  --accent-teal-base: #1a8a7a;
  --accent-red-base: #d13438;
  --accent-blue-text-base: #0078d4;
  --accent-gold-base: #896b15;

  --chat-user-bg: #dcecff;
  --chat-error-bg: #fff0f0;
  --badge-buy-bg: #dceaff;
  --badge-sell-bg: #dcf4dc;
  --badge-hype-bg: #fff8e0;

  --modal-backdrop: rgba(0, 0, 0, 0.25);
  --modal-shadow: rgba(0, 0, 0, 0.15);
  --scrollbar-thumb: #b8cad8;
  --scrollbar-thumb-hover: #98aec0;
  --link-color: #0078d4;
  --add-flip-bg: #d0f0d0;
  --limit-ready-bg: #daf4da;

  /* Glass helpers */
  --glass-body-from: #d8e4f0;
  --glass-body-via: #e4eef6;
  --glass-body-to: #d0dce8;
  --glass-panel: rgba(240, 248, 255, 0.55);
  --glass-elevated: rgba(240, 248, 255, 0.65);
  --glass-hover: rgba(240, 248, 255, 0.70);
  --glass-input: rgba(240, 248, 255, 0.50);
  --glass-muted: rgba(240, 248, 255, 0.40);
  --glass-border-card: rgba(0, 120, 212, 0.12);
  --glass-border-main: rgba(0, 120, 212, 0.08);
  --glass-border-section: rgba(0, 120, 212, 0.10);
  --glass-border-input: rgba(0, 120, 212, 0.15);
  --glass-scrollbar: rgba(0, 120, 212, 0.10);

  /* Neumorphism helpers */
  --neu-shadow-dark: #c0d0e0;
  --neu-shadow-light: #ffffff;
  --neu-accent-shadow: #0060b0;

  /* Skeuomorphism helpers */
  --skeu-body-from: #dce8f2;
  --skeu-body-to: #eef4fa;
  --skeu-card-from: #f8fbff;
  --skeu-card-mid: #f4f8fd;
  --skeu-card-to: #eaf2fa;
  --skeu-card-highlight: #ffffff;
  --skeu-card-shadow-edge: #b8cad8;
  --skeu-header-from: #f4f8fd;
  --skeu-header-to: #eaf2fa;
  --skeu-btn-from: #eef4fa;
  --skeu-btn-to: #dce8f2;
  --skeu-btn-active-from: #0078d4;
  --skeu-btn-active-to: #0060b0;
}

/* (light-mode view-btn.active consolidated — see below contrast modifiers) */
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-solarized-dark.css"
/*!***************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-solarized-dark.css ***!
  \***************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: Solarized — Dark
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="dark"][data-colorway="solarized"] {
  --bg-main: #002b36;
  --bg-panel: #073642;
  --bg-elevated: #0a3f4c;
  --bg-hover: #0e4756;
  --dropdown-bg: #0a3f4c;
  --dropdown-hover-bg: #0e4756;
  --bg-input: #0a3f4c;
  --bg-muted: #06313b;
  --bg-filter: #002830;
  --bg-number-input: #0a3a48;

  --text-main: #93a1a1;
  --text-bright: #fdf6e3;
  --text-accent: #268bd2;
  --text-heading: #b58900;
  --text-price: #a0b800;
  --text-muted: #839496;
  --text-soft: #78909a;
  --text-dimmed: #586e75;

  --border-main: #0a4050;
  --border-section: #0d4a58;
  --border-card: #11546a;
  --border-input: #175468;
  --border-subtle: #0a4050;
  --border-hype: #6b5a1e;
  --border-hype-hover: #a08830;

  --accent-primary: #268bd2;
  --accent-primary-hover: #2e9ce6;
  --accent-primary-active: #1a6daa;
  --accent-focus: #268bd2;
  --accent-blue-text: #268bd2;
  --accent-green: #859900;
  --accent-green-bright: #a0b800;
  --accent-teal: #2aa198;
  --accent-gold: #b58900;
  --accent-gold-hype: #cb9a00;
  --accent-red: #dc322f;
  --accent-red-dark: #b02828;
  --accent-red-bg: #2a1516;
  --accent-red-border: #5a2020;
  --accent-red-border-hover: #8a3030;
  --accent-hype: #cb8b16;

  /* Contrast base (referenced by contrast-modifiers) */
  --accent-teal-base: #2aa198;
  --accent-red-base: #dc322f;
  --accent-blue-text-base: #268bd2;
  --accent-gold-base: #b58900;

  --chat-user-bg: #0a3a50;
  --chat-error-bg: #2a1012;
  --badge-buy-bg: #073a42;
  --badge-sell-bg: #0a3a18;
  --badge-hype-bg: #3a3010;

  --modal-backdrop: rgba(0, 0, 0, 0.6);
  --modal-shadow: rgba(0, 0, 0, 0.8);
  --scrollbar-thumb: #1a5868;
  --scrollbar-thumb-hover: #268090;
  --link-color: #268bd2;
  --add-flip-bg: #1a4a10;
  --limit-ready-bg: #0a2a10;

  /* Glass helpers */
  --glass-body-from: #000c14;
  --glass-body-via: #003040;
  --glass-body-to: #000e22;
  --glass-panel: rgba(7, 54, 66, 0.07);
  --glass-elevated: rgba(7, 54, 66, 0.11);
  --glass-hover: rgba(14, 71, 86, 0.13);
  --glass-input: rgba(7, 54, 66, 0.09);
  --glass-muted: rgba(7, 54, 66, 0.05);
  --glass-border-card: rgba(38, 139, 210, 0.20);
  --glass-border-main: rgba(38, 139, 210, 0.10);
  --glass-border-section: rgba(38, 139, 210, 0.14);
  --glass-border-input: rgba(38, 139, 210, 0.22);
  --glass-scrollbar: rgba(38, 139, 210, 0.18);

  /* Neumorphism helpers */
  --neu-shadow-dark: #001a22;
  --neu-shadow-light: #0d4a58;
  --neu-accent-shadow: #1a6daa;

  /* Skeuomorphism helpers */
  --skeu-body-from: #001a22;
  --skeu-body-to: #002b36;
  --skeu-card-from: #0a4050;
  --skeu-card-mid: #073642;
  --skeu-card-to: #053038;
  --skeu-card-highlight: #0e4756;
  --skeu-card-shadow-edge: #001a22;
  --skeu-header-from: #0a4050;
  --skeu-header-to: #073642;
  --skeu-btn-from: #0d4a58;
  --skeu-btn-to: #073642;
  --skeu-btn-active-from: #268bd2;
  --skeu-btn-active-to: #1a6daa;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-solarized-light.css"
/*!****************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-solarized-light.css ***!
  \****************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: Solarized — Light
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="light"][data-colorway="solarized"] {
  --bg-main: #fdf6e3;
  --bg-panel: #eee8d5;
  --bg-elevated: #f5f0e2;
  --bg-hover: #e6dfca;
  --dropdown-bg: #f5f0e2;
  --dropdown-hover-bg: #e6dfca;
  --bg-input: #eee8d5;
  --bg-muted: #e6dfca;
  --bg-filter: #f8f2e4;
  --bg-number-input: #eee8d5;

  --text-main: #586e75;
  --text-bright: #073642;
  --text-accent: #268bd2;
  --text-heading: #946e00;
  --text-price: #4a7a0a;
  --text-muted: #657b83;
  --text-soft: #839496;
  --text-dimmed: #93a1a1;

  --border-main: #ddd4ba;
  --border-section: #d6ccb0;
  --border-card: #cfc4a8;
  --border-input: #c8bc9e;
  --border-subtle: #e4dcc8;
  --border-hype: #d4a520;
  --border-hype-hover: #b8920a;

  --accent-primary: #268bd2;
  --accent-primary-hover: #2e9ce6;
  --accent-primary-active: #1a6daa;
  --accent-focus: #268bd2;
  --accent-blue-text: #268bd2;
  --accent-green: #859900;
  --accent-green-bright: #6c8000;
  --accent-teal: #2aa198;
  --accent-gold: #b58900;
  --accent-gold-hype: #9a7400;
  --accent-red: #dc322f;
  --accent-red-dark: #b02828;
  --accent-red-bg: #fdf0ef;
  --accent-red-border: #e0a0a0;
  --accent-red-border-hover: #d08080;
  --accent-hype: #b58900;

  /* Contrast base (referenced by contrast-modifiers) */
  --accent-teal-base: #2aa198;
  --accent-red-base: #dc322f;
  --accent-blue-text-base: #268bd2;
  --accent-gold-base: #b58900;

  --chat-user-bg: #ddeef8;
  --chat-error-bg: #fdf0ef;
  --badge-buy-bg: #dde8f0;
  --badge-sell-bg: #e0f0d0;
  --badge-hype-bg: #f5ecc8;

  --modal-backdrop: rgba(0, 0, 0, 0.25);
  --modal-shadow: rgba(0, 0, 0, 0.15);
  --scrollbar-thumb: #c0b498;
  --scrollbar-thumb-hover: #a89a80;
  --link-color: #268bd2;
  --add-flip-bg: #d0e8c0;
  --limit-ready-bg: #daf0d0;

  /* Glass helpers */
  --glass-body-from: #ece4d0;
  --glass-body-via: #f5eede;
  --glass-body-to: #e6dfca;
  --glass-panel: rgba(238, 232, 213, 0.55);
  --glass-elevated: rgba(238, 232, 213, 0.65);
  --glass-hover: rgba(238, 232, 213, 0.70);
  --glass-input: rgba(238, 232, 213, 0.50);
  --glass-muted: rgba(238, 232, 213, 0.40);
  --glass-border-card: rgba(0, 0, 0, 0.12);
  --glass-border-main: rgba(0, 0, 0, 0.08);
  --glass-border-section: rgba(0, 0, 0, 0.10);
  --glass-border-input: rgba(0, 0, 0, 0.15);
  --glass-scrollbar: rgba(0, 0, 0, 0.10);

  /* Neumorphism helpers */
  --neu-shadow-dark: #d6ccb0;
  --neu-shadow-light: #ffffff;
  --neu-accent-shadow: #1a6daa;

  /* Skeuomorphism helpers */
  --skeu-body-from: #ddd4ba;
  --skeu-body-to: #eee8d5;
  --skeu-card-from: #fdf6e3;
  --skeu-card-mid: #f5f0e2;
  --skeu-card-to: #eee8d5;
  --skeu-card-highlight: #ffffff;
  --skeu-card-shadow-edge: #c8bc9e;
  --skeu-header-from: #f5f0e2;
  --skeu-header-to: #eee8d5;
  --skeu-btn-from: #f5f0e2;
  --skeu-btn-to: #e6dfca;
  --skeu-btn-active-from: #268bd2;
  --skeu-btn-active-to: #1a6daa;
}

/* (light-mode view-btn.active consolidated — see below contrast modifiers) */
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-twilight-amethyst-dark.css"
/*!***********************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-twilight-amethyst-dark.css ***!
  \***********************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: Twilight Amethyst — Dark
 *  Deep indigo-violet palette inspired by the Classic Glass aesthetic.
 *  Rich purple backgrounds, lavender text accents, amethyst highlights.
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="dark"][data-colorway="twilight-amethyst"] {
  /* ── Backgrounds ─────────────────────── */
  --bg-main: #12101e;
  --bg-panel: #1a1530;
  --bg-elevated: #221c3a;
  --bg-hover: #2a2244;
  --dropdown-bg: #221c3a;
  --dropdown-hover-bg: #2a2244;
  --bg-input: #2e264a;
  --bg-muted: #1e1832;
  --bg-filter: #0e0c18;
  --bg-number-input: #241e3e;

  /* ── Text ────────────────────────────── */
  --text-main: #cdc5e0;
  --text-bright: #f0ecff;
  --text-accent: #b8a4e8;
  --text-heading: #d4b8ff;
  --text-price: #4ade80;
  --text-muted: #9088aa;
  --text-soft: #a89cc4;
  --text-dimmed: #5e5478;

  /* ── Borders ─────────────────────────── */
  --border-main: #2e2648;
  --border-section: #38305a;
  --border-card: #443a68;
  --border-input: #504674;
  --border-subtle: #382e56;
  --border-hype: #7a5a2e;
  --border-hype-hover: #a08030;

  /* ── Primary action ──────────────────── */
  --accent-primary: #7c4dff;
  --accent-primary-hover: #9060ff;
  --accent-primary-active: #5c30cc;
  --accent-focus: #9070ff;

  /* ── Semantic accents ────────────────── */
  --accent-blue-text: #a088d8;
  --accent-green: #5ece6b;
  --accent-green-bright: #27ae60;
  --accent-teal: #4ec9b0;
  --accent-gold: #f0c040;
  --accent-gold-hype: #f5c542;
  --accent-hype: #ffab40;
  --accent-red: #ff6b6b;
  --accent-red-dark: #c0392b;
  --accent-red-bg: #2e1428;
  --accent-red-border: #6b3050;
  --accent-red-border-hover: #a04070;

  /* ── Contrast base (referenced by contrast-modifiers — never self-referencing) */
  --accent-teal-base: #4ec9b0;
  --accent-red-base: #ff6b6b;
  --accent-blue-text-base: #a088d8;
  --accent-gold-base: #f0c040;

  /* ── Chat ─────────────────────────────── */
  --chat-user-bg: #2e2258;
  --chat-error-bg: #2e1428;

  /* ── Badges ──────────────────────────── */
  --badge-buy-bg: #1e1838;
  --badge-sell-bg: #1e3a1e;
  --badge-hype-bg: #3a2e10;

  /* ── Modal ───────────────────────────── */
  --modal-backdrop: rgba(8, 6, 20, 0.75);
  --modal-shadow: rgba(0, 0, 0, 0.85);

  /* ── Scrollbar ───────────────────────── */
  --scrollbar-thumb: #443a68;
  --scrollbar-thumb-hover: #5e5288;

  /* ── Misc ─────────────────────────────── */
  --link-color: #b8a4e8;
  --add-flip-bg: #1b6b2a;
  --limit-ready-bg: #1a2e1a;

  /* ── Style helper vars (Glass) ───────── */
  --glass-body-from: #06061a;
  --glass-body-via: #221250;
  --glass-body-to: #0a1e42;
  --glass-panel: rgba(180, 160, 255, 0.06);
  --glass-elevated: rgba(180, 160, 255, 0.10);
  --glass-hover: rgba(180, 160, 255, 0.13);
  --glass-input: rgba(180, 160, 255, 0.08);
  --glass-muted: rgba(180, 160, 255, 0.05);
  --glass-border-card: rgba(180, 160, 255, 0.20);
  --glass-border-main: rgba(180, 160, 255, 0.10);
  --glass-border-section: rgba(180, 160, 255, 0.13);
  --glass-border-input: rgba(180, 160, 255, 0.22);
  --glass-scrollbar: rgba(180, 160, 255, 0.15);

  /* ── Style helper vars (Neumorphism) ─── */
  --neu-shadow-dark: #0a0818;
  --neu-shadow-light: #2e2648;
  --neu-accent-shadow: #5c30cc;

  /* ── Style helper vars (Skeuomorphism) ── */
  --skeu-body-from: #0e0c18;
  --skeu-body-to: #12101e;
  --skeu-card-from: #2e2648;
  --skeu-card-mid: #1a1530;
  --skeu-card-to: #141020;
  --skeu-card-highlight: #443a68;
  --skeu-card-shadow-edge: #0a0818;
  --skeu-header-from: #2e2648;
  --skeu-header-to: #1e1832;
  --skeu-btn-from: #38305a;
  --skeu-btn-to: #28204a;
  --skeu-btn-active-from: #7c4dff;
  --skeu-btn-active-to: #5c30cc;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-twilight-amethyst-light.css"
/*!************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/colorway-twilight-amethyst-light.css ***!
  \************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  COLORWAY: Twilight Amethyst — Light
 *  Soft lavender-lilac palette — light counterpart to the dark indigo-violet.
 *  Pale purple backgrounds, deep violet text, amethyst accents.
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="light"][data-colorway="twilight-amethyst"] {
  /* ── Backgrounds ─────────────────────── */
  --bg-main: #f0ecfa;
  --bg-panel: #f8f5ff;
  --bg-elevated: #f4f0fc;
  --bg-hover: #eae4f6;
  --dropdown-bg: #f4f0fc;
  --dropdown-hover-bg: #eae4f6;
  --bg-input: #ebe4f8;
  --bg-muted: #e2daf2;
  --bg-filter: #f0eafa;
  --bg-number-input: #ebe4f8;

  /* ── Text ────────────────────────────── */
  --text-main: #3a2e5a;
  --text-bright: #1a1030;
  --text-accent: #6c4daa;
  --text-heading: #4a2e80;
  --text-price: #1a8a2a;
  --text-muted: #7a6e98;
  --text-soft: #9688b4;
  --text-dimmed: #b8aed0;

  /* ── Borders ─────────────────────────── */
  --border-main: #d8d0ea;
  --border-section: #cec4e2;
  --border-card: #c4b8da;
  --border-input: #b8aace;
  --border-subtle: #e0d8ef;
  --border-hype: #d4a520;
  --border-hype-hover: #b8920a;

  /* ── Primary action ──────────────────── */
  --accent-primary: #6c4daa;
  --accent-primary-hover: #7e5cc0;
  --accent-primary-active: #5a3d90;
  --accent-focus: #7c5cb8;

  /* ── Semantic accents ────────────────── */
  --accent-blue-text: #6c4daa;
  --accent-green: #2a8a2a;
  --accent-green-bright: #22aa22;
  --accent-teal: #14796c;
  --accent-gold: #856814;
  --accent-gold-hype: #c09010;
  --accent-red: #cc3333;
  --accent-red-dark: #aa2222;
  --accent-red-bg: #faf0f4;
  --accent-red-border: #dca0b0;
  --accent-red-border-hover: #cc8898;
  --accent-hype: #e68a00;

  /* Contrast base (referenced by contrast-modifiers) */
  --accent-teal-base: #14796c;
  --accent-red-base: #cc3333;
  --accent-blue-text-base: #6c4daa;
  --accent-gold-base: #856814;

  /* ── Chat ─────────────────────────────── */
  --chat-user-bg: #ece4ff;
  --chat-error-bg: #faf0f4;

  /* ── Badges ──────────────────────────── */
  --badge-buy-bg: #e4deff;
  --badge-sell-bg: #e0ffe0;
  --badge-hype-bg: #fff8e0;

  /* ── Modal ───────────────────────────── */
  --modal-backdrop: rgba(20, 14, 40, 0.25);
  --modal-shadow: rgba(20, 14, 40, 0.15);

  /* ── Scrollbar ───────────────────────── */
  --scrollbar-thumb: #c4b8da;
  --scrollbar-thumb-hover: #a89cc0;

  /* ── Misc ─────────────────────────────── */
  --link-color: #6c4daa;
  --add-flip-bg: #d0f0d0;
  --limit-ready-bg: #e0f8e0;

  /* ── Style helper vars (Glass) ───────── */
  --glass-body-from: #d8d0ea;
  --glass-body-via: #e4ddf2;
  --glass-body-to: #d0c8e4;
  --glass-panel: rgba(255, 255, 255, 0.50);
  --glass-elevated: rgba(255, 255, 255, 0.60);
  --glass-hover: rgba(255, 255, 255, 0.65);
  --glass-input: rgba(255, 255, 255, 0.45);
  --glass-muted: rgba(255, 255, 255, 0.35);
  --glass-border-card: rgba(80, 50, 140, 0.14);
  --glass-border-main: rgba(80, 50, 140, 0.08);
  --glass-border-section: rgba(80, 50, 140, 0.10);
  --glass-border-input: rgba(80, 50, 140, 0.18);
  --glass-scrollbar: rgba(80, 50, 140, 0.12);

  /* ── Style helper vars (Neumorphism) ─── */
  --neu-shadow-dark: #c8c0da;
  --neu-shadow-light: #ffffff;
  --neu-accent-shadow: #5a3d90;

  /* ── Style helper vars (Skeuomorphism) ── */
  --skeu-body-from: #e2daf2;
  --skeu-body-to: #f0ecfa;
  --skeu-card-from: #ffffff;
  --skeu-card-mid: #f8f5ff;
  --skeu-card-to: #f0ecfa;
  --skeu-card-highlight: #ffffff;
  --skeu-card-shadow-edge: #c4b8da;
  --skeu-header-from: #f4f0fc;
  --skeu-header-to: #ebe4f8;
  --skeu-btn-from: #f0ecfa;
  --skeu-btn-to: #e2daf2;
  --skeu-btn-active-from: #6c4daa;
  --skeu-btn-active-to: #5a3d90;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/contrast-modifiers.css"
/*!**********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/contrast-modifiers.css ***!
  \**********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  CONTRAST MODIFIERS (body[data-contrast])
 *
 *  Layered on top of any Mode × Colorway combination.
 *  "soft"  — reduced contrast (lighter darks, softer lights)
 *  "hard"  — maximum contrast (deeper darks, brighter lights)
 *
 *  IMPORTANT: Each override references ONLY sibling properties (never the
 *  property being set) to avoid CSS custom-property dependency cycles.
 *  The dependency graph is a strict DAG — no circular references.
 *
 *  Specificity is intentionally 0,3,1 (\`body[mode][contrast][colorway]\`)
 *  so contrast modifiers always beat colorway selectors (0,2,1),
 *  regardless of source order. [data-colorway] is always present on body.
 *
 *  Financial accent colours (--accent-green, --accent-teal, --accent-red,
 *  --accent-blue-text, --accent-gold) are adjusted in hard contrast to
 *  maintain WCAG AA ≥ 4.5:1 against shifted backgrounds.
 * ───────────────────────────────────────────────────────────────────────────── */

/* ── Soft contrast — dark modes ──────────────────────────────────────────── */
body[data-mode="dark"][data-contrast="soft"][data-colorway] {
  /* Lift base bg toward panel/elevated — compresses the dark range */
  --bg-main:      color-mix(in srgb, var(--bg-panel) 65%, var(--bg-elevated));
  --bg-filter:    var(--bg-muted);
  /* Soften borders — blend section border toward elevated bg */
  --border-main:  color-mix(in srgb, var(--border-section) 55%, var(--bg-elevated));
  /* Pull text extremes inward — narrower brightness span */
  --text-bright:  color-mix(in srgb, var(--text-main), white 15%);
  --text-dimmed:  var(--text-muted);
  /* Lighter modal scrim */
  --modal-backdrop: rgba(0, 0, 0, 0.35);
}

/* ── Hard contrast — dark modes ──────────────────────────────────────────── */
body[data-mode="dark"][data-contrast="hard"][data-colorway] {
  /* Push backgrounds toward black — deepest blacks, vivid separation */
  --bg-filter:   color-mix(in srgb, var(--bg-elevated) 55%, black);
  --bg-main:     color-mix(in srgb, var(--bg-filter) 70%, black);
  --bg-muted:    color-mix(in srgb, var(--bg-filter) 65%, black);
  --bg-panel:    color-mix(in srgb, var(--bg-muted) 72%, black);
  /* Full-white text ceiling */
  --text-bright: #ffffff;
  /* Harden borders */
  --border-main: color-mix(in srgb, var(--border-section) 60%, black);
  /* Stronger modal scrim */
  --modal-backdrop: rgba(0, 0, 0, 0.75);
  /* WCAG: vivify financial accent colours against deeper backgrounds.
     References *-base vars (set by each colorway) to avoid circular deps. */
  --accent-green:       color-mix(in srgb, var(--accent-green-bright), white 12%);
  --accent-teal:        color-mix(in srgb, var(--accent-teal-base), white 10%);
  --accent-red:         color-mix(in srgb, var(--accent-red-base), white 8%);
  --accent-blue-text:   color-mix(in srgb, var(--accent-blue-text-base), white 10%);
  --accent-gold:        color-mix(in srgb, var(--accent-gold-base), white 8%);
}

/* ── Soft contrast — light modes ─────────────────────────────────────────── */
body[data-mode="light"][data-contrast="soft"][data-colorway] {
  /* Push backgrounds toward white — flatter, airier feel */
  --bg-main:     color-mix(in srgb, var(--bg-panel) 55%, white);
  --bg-panel:    color-mix(in srgb, var(--bg-elevated) 60%, white);
  /* Lighten borders */
  --border-main: color-mix(in srgb, var(--border-section) 50%, white);
  /* Reduce text intensity — but keep --text-bright readable (WCAG AA ≥ 4.5:1) */
  --text-main:   color-mix(in srgb, var(--text-muted), black 15%);
  --text-bright: color-mix(in srgb, var(--text-muted), black 40%);
  /* Softer modal scrim */
  --modal-backdrop: rgba(0, 0, 0, 0.15);
}

/* ── Hard contrast — light modes ─────────────────────────────────────────── */
body[data-mode="light"][data-contrast="hard"][data-colorway] {
  /* Push backgrounds brighter — near-white panels */
  --bg-main:     color-mix(in srgb, var(--bg-panel) 50%, white);
  --bg-panel:    #ffffff;
  --bg-muted:    color-mix(in srgb, var(--bg-elevated) 60%, white);
  /* Maximum text darkness */
  --text-bright: #000000;
  /* Harden borders */
  --border-main: color-mix(in srgb, var(--border-section) 70%, var(--text-dimmed));
  /* Stronger modal scrim */
  --modal-backdrop: rgba(0, 0, 0, 0.40);
  /* WCAG: darken financial accent colours against bright bg (≥ 4.5:1).
     References *-base vars (set by each colorway) to avoid circular deps. */
  --accent-green:       color-mix(in srgb, var(--accent-green-bright), black 18%);
  --accent-teal:        color-mix(in srgb, var(--accent-teal-base), black 15%);
  --accent-blue-text:   color-mix(in srgb, var(--accent-blue-text-base), black 12%);
  --accent-gold:        color-mix(in srgb, var(--accent-gold-base), black 15%);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./css/themes/light-mode-overrides.css"
/*!************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/themes/light-mode-overrides.css ***!
  \************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ─────────────────────────────────────────────────────────────────────────────
 *  LIGHT-MODE: consolidated overrides
 *  - .view-btn.active text forced white for all light colourways
 *  - Badge/table tokens adjusted for light backgrounds
 * ───────────────────────────────────────────────────────────────────────────── */

body[data-mode="light"] .view-btn.active {
  color: #ffffff;
}

body[data-mode="light"] {
  --badge-velocity-insta-bg: rgba(22, 163, 74, 0.22);
  --badge-velocity-active-bg: rgba(0, 80, 180, 0.18);
  --badge-velocity-slow-bg: rgba(200, 150, 0, 0.20);
  --badge-velocity-muted-bg: rgba(100, 100, 100, 0.16);
  --badge-trend-up-bg: rgba(22, 163, 74, 0.22);
  --badge-trend-down-bg: rgba(220, 38, 38, 0.20);
  --badge-neutral-bg: rgba(100, 100, 100, 0.14);
  --badge-hype-vol-bg: rgba(217, 119, 6, 0.18);
  --badge-tier-free-bg: rgba(22, 163, 74, 0.14);
  --badge-tier-free-border: rgba(22, 163, 74, 0.35);
  --badge-tier-freetier-bg: rgba(13, 148, 136, 0.14);
  --badge-tier-freetier-border: rgba(13, 148, 136, 0.35);
  --badge-tier-lowcost-bg: rgba(0, 80, 180, 0.14);
  --badge-tier-lowcost-border: rgba(0, 80, 180, 0.35);
  --badge-tier-neutral-bg: rgba(100, 100, 100, 0.10);
  --badge-tier-neutral-border: rgba(100, 100, 100, 0.22);
  --table-active-row-bg: rgba(0, 80, 180, 0.08);
  --table-hover-row-bg: rgba(0, 0, 0, 0.03);
  --setup-note-bg: rgba(180, 140, 0, 0.10);
  --setup-note-border: rgba(180, 140, 0, 0.25);
  --detail-expanded-bg: rgba(0, 0, 0, 0.05);
  --close-hover-bg: rgba(220, 38, 38, 0.10);
  --win-glow: color-mix(in srgb, var(--accent-green-bright) 10%, transparent);
  --loss-glow: color-mix(in srgb, var(--accent-red-dark) 10%, transparent);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
(module) {



module.exports = function (i) {
  return i[1];
};

/***/ },

/***/ "./css/main.css"
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "../node_modules/css-loader/dist/cjs.js!./css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./services/baselineService.ts"
/*!*************************************!*\
  !*** ./services/baselineService.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadBaseline: () => (/* binding */ loadBaseline)
/* harmony export */ });
/**
 * @module baselineService
 * Fetches and parses the pre-built daily baseline JSON that ships the full
 * ~7,000-item GE catalogue with latest prices, buy limits, and high alch
 * values — generated by CI (GitHub Actions) once per day.
 *
 * The baseline eliminates the need for API-heavy seed fetches at startup,
 * reducing cold-start time from ~30–60 s to ~1–2 s.
 */
/** Maximum age (ms) before the baseline is considered stale. */
const MAX_AGE_MS = 48 * 60 * 60 * 1000; // 48 hours
/** Expected format version of the baseline file. */
const EXPECTED_VERSION = 3;
/**
 * Fetch the baseline JSON and convert it to a `Map<string, WeirdGloopPriceRecord>`.
 *
 * @returns A map of item name → price record, or `null` on any failure
 *          (404, network error, parse error, stale data). Never throws.
 */
async function loadBaseline() {
    try {
        const res = await fetch("./data/baseline.json");
        if (!res.ok) {
            console.warn(`[BaselineService] Fetch failed: HTTP ${res.status}`);
            return null;
        }
        const payload = await res.json();
        // Version check
        if (payload.version !== EXPECTED_VERSION) {
            console.warn(`[BaselineService] Version mismatch: expected ${EXPECTED_VERSION}, got ${payload.version}`);
            return null;
        }
        // Staleness check — reject baselines older than 48 hours
        const generatedAt = new Date(payload.generatedAt).getTime();
        if (Number.isNaN(generatedAt) || Date.now() - generatedAt > MAX_AGE_MS) {
            console.warn(`[BaselineService] Baseline too old (generated ${payload.generatedAt}). Falling back to seeds.`);
            return null;
        }
        // Convert to Map<string, WeirdGloopPriceRecord>
        const map = new Map();
        for (const [name, item] of Object.entries(payload.items)) {
            const record = {
                id: item.id,
                price: item.price,
                volume: item.volume,
                timestamp: item.timestamp,
            };
            if (item.buyLimit !== undefined)
                record.buyLimit = item.buyLimit;
            if (item.highAlch !== undefined)
                record.highAlch = item.highAlch;
            map.set(name, record);
        }
        console.log(`[BaselineService] Loaded baseline: ${map.size} items (generated ${payload.generatedAt}).`);
        return map;
    }
    catch (err) {
        console.warn("[BaselineService] Failed to load baseline:", err);
        return null;
    }
}


/***/ },

/***/ "./services/cacheService.ts"
/*!**********************************!*\
  !*** ./services/cacheService.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var _historyCacheService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historyCacheService */ "./services/historyCacheService.ts");
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

/** Default configuration values. */
const DEFAULTS = {
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
class CacheService {
    /** History-store service — available after {@link open}. */
    get history() {
        if (!this._history) {
            throw new Error("[CacheService] Database not open. Call open() first.");
        }
        return this._history;
    }
    /**
     * Return the underlying database handle.
     * @throws If the database has not been opened yet.
     */
    getDb() {
        return this.ensureOpen();
    }
    /**
     * Create a new cache service instance.
     * @param config - Optional overrides for DB name, store name, and TTL.
     */
    constructor(config) {
        /** Lazily initialised database handle. */
        this.db = null;
        /** History CRUD delegate created after {@link open}. */
        this._history = null;
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
    async open() {
        if (this.db)
            return this.db;
        return new Promise((resolve, reject) => {
            // Version 3: migrate from [name, day] → [name, timestamp] compound key
            // to support intraday (sub-daily) price tracking and OHLC charts.
            const DB_VERSION = 3;
            const request = indexedDB.open(this.dbName, DB_VERSION);
            request.onupgradeneeded = (event) => {
                const db = request.result;
                const oldVersion = event.oldVersion;
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
                this._history = new _historyCacheService__WEBPACK_IMPORTED_MODULE_0__.HistoryCacheService(() => this.ensureOpen());
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
    async bulkInsert(prices) {
        const db = this.ensureOpen();
        const now = Date.now();
        const today = new Date(now).toISOString().slice(0, 10);
        return new Promise((resolve, reject) => {
            const tx = db.transaction([this.storeName, HISTORY_STORE], "readwrite");
            const store = tx.objectStore(this.storeName);
            const histStore = tx.objectStore(HISTORY_STORE);
            let count = 0;
            let histSkipped = 0;
            for (const [name, record] of prices) {
                const stored = {
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
                    const existing = getReq.result;
                    store.put(stored);
                    count++;
                    // Only persist a history snapshot when the price has actually
                    // changed (or no prior record exists).
                    if (!existing || existing.price !== record.price) {
                        const historical = {
                            ...stored,
                            timestamp: new Date(now).toISOString(),
                            day: today,
                        };
                        histStore.put(historical);
                    }
                    else {
                        histSkipped++;
                    }
                };
            }
            tx.oncomplete = () => {
                if (histSkipped > 0) {
                    console.log(`[CacheService] Bulk-inserted ${count} records (${histSkipped} unchanged-price history rows skipped).`);
                }
                else {
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
    async getAll() {
        const db = this.ensureOpen();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(this.storeName, "readonly");
            const store = tx.objectStore(this.storeName);
            const req = store.getAll();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }
    /**
     * Retrieve a single cached record by item name.
     *
     * @param name - Canonical RS3 item name.
     * @returns The stored record, or `undefined` if not found.
     */
    async getByName(name) {
        const db = this.ensureOpen();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(this.storeName, "readonly");
            const store = tx.objectStore(this.storeName);
            const req = store.get(name);
            req.onsuccess = () => resolve(req.result);
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
    async isStale() {
        const db = this.ensureOpen();
        return new Promise((resolve, reject) => {
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
                const record = cursor.value;
                const age = Date.now() - record.fetchedAt;
                const stale = age > this.ttlMs;
                console.log(`[CacheService] Newest record age: ${(age / 1000 / 60).toFixed(1)} min — ` +
                    `cache is ${stale ? "STALE" : "FRESH"}.`);
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
    async clear() {
        const db = this.ensureOpen();
        return new Promise((resolve, reject) => {
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
    async exportDatabase() {
        const db = this.ensureOpen();
        const [prices, history] = await Promise.all([
            new Promise((resolve, reject) => {
                const tx = db.transaction(this.storeName, "readonly");
                const req = tx.objectStore(this.storeName).getAll();
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            }),
            new Promise((resolve, reject) => {
                const tx = db.transaction(HISTORY_STORE, "readonly");
                const req = tx.objectStore(HISTORY_STORE).getAll();
                req.onsuccess = () => resolve(req.result);
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
    async importDatabase(data) {
        if (!data ||
            typeof data !== "object" ||
            !Array.isArray(data.prices) ||
            !Array.isArray(data.history)) {
            throw new Error("Invalid cache export format.");
        }
        const db = this.ensureOpen();
        return new Promise((resolve, reject) => {
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
    ensureOpen() {
        if (!this.db) {
            throw new Error("[CacheService] Database not open. Call `await cacheService.open()` first.");
        }
        return this.db;
    }
}


/***/ },

/***/ "./services/conversationManager.ts"
/*!*****************************************!*\
  !*** ./services/conversationManager.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_BODY_BYTES: () => (/* binding */ MAX_BODY_BYTES),
/* harmony export */   MAX_HISTORY_PAIRS: () => (/* binding */ MAX_HISTORY_PAIRS),
/* harmony export */   buildTrimmedHistory: () => (/* binding */ buildTrimmedHistory),
/* harmony export */   findLastUserIdx: () => (/* binding */ findLastUserIdx),
/* harmony export */   halveMarketData: () => (/* binding */ halveMarketData)
/* harmony export */ });
/**
 * @module conversationManager
 * Pure functions for managing LLM conversation history: trimming old
 * messages, stripping data blocks, and truncating oversized payloads.
 *
 * Extracted from {@link LLMService} so that conversation management
 * and HTTP transport are separate concerns.
 */
/**
 * Maximum number of user+assistant exchange pairs retained in the API
 * payload (on top of the system prompt). Older exchanges are dropped to
 * keep the request within provider size limits.
 */
const MAX_HISTORY_PAIRS = 8;
/**
 * Maximum JSON body size (in bytes) we allow before truncating context.
 * Groq's gateway returns HTTP 413 above ~100 KB, but free-tier limits
 * vary by model.  50 KB provides a safe margin for all models.
 */
const MAX_BODY_BYTES = 50000;
/**
 * Regex that matches the `=== GRAND EXCHANGE DATA ===` block (including
 * any `=== RECENT RS3 NEWS ===` section that follows it) inside a user
 * message, leaving only the `=== PLAYER QUESTION ===` section.
 */
const DATA_BLOCK_RE = /=== GRAND EXCHANGE DATA ===[\s\S]*?(?==== PLAYER QUESTION ===)/;
/**
 * Build a size-efficient copy of `messages` for the API payload.
 *
 * 1. Keeps the system prompt verbatim.
 * 2. Caps non-system messages to the last `MAX_HISTORY_PAIRS * 2` entries.
 * 3. Strips the bulky data blocks from all user messages except the most
 *    recent one, retaining only the player question.
 *
 * @param messages - The full conversation history (system + user/assistant).
 * @returns A new `ChatMessage[]` safe to serialise and send.
 */
function buildTrimmedHistory(messages) {
    const system = messages[0]; // always the system prompt
    let rest = messages.slice(1);
    // Cap to the most recent exchanges.
    const maxNonSystem = MAX_HISTORY_PAIRS * 2;
    if (rest.length > maxNonSystem) {
        rest = rest.slice(rest.length - maxNonSystem);
    }
    // Find the index of the last user message (relative to `rest`).
    let lastUserIdx = -1;
    for (let i = rest.length - 1; i >= 0; i--) {
        if (rest[i].role === "user") {
            lastUserIdx = i;
            break;
        }
    }
    const trimmed = [system];
    for (let i = 0; i < rest.length; i++) {
        const msg = rest[i];
        if (msg.role === "user" && i !== lastUserIdx) {
            // Strip data blocks, keep only the question portion.
            const stripped = msg.content.replace(DATA_BLOCK_RE, "").trim();
            trimmed.push({ role: "user", content: stripped });
        }
        else {
            trimmed.push(msg);
        }
    }
    return trimmed;
}
/**
 * Find the index of the last user message in a `ChatMessage[]`.
 * @returns Index, or -1 if none.
 */
function findLastUserIdx(messages) {
    for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].role === "user")
            return i;
    }
    return -1;
}
/**
 * Halve the market-data section of the user message at `idx`.
 *
 * Locates the `=== GRAND EXCHANGE DATA ===` block and keeps only the
 * first half of its lines (i.e. the top-ranked half of items).  Returns
 * a shallow copy of the array with the modified user message.
 */
function halveMarketData(messages, idx) {
    const msg = messages[idx];
    const dataStart = msg.content.indexOf("=== GRAND EXCHANGE DATA ===");
    const questionStart = msg.content.indexOf("\n=== PLAYER QUESTION ===");
    if (dataStart < 0 || questionStart < 0)
        return messages; // safety
    const dataBlock = msg.content.slice(dataStart + "=== GRAND EXCHANGE DATA ===".length + 1, questionStart);
    const lines = dataBlock.split("\n");
    const half = lines.slice(0, Math.max(Math.ceil(lines.length / 2), 5));
    const newContent = msg.content.slice(0, dataStart + "=== GRAND EXCHANGE DATA ===".length + 1) +
        half.join("\n") +
        `\n[Truncated to ${half.length} items to fit request limits]\n` +
        msg.content.slice(questionStart);
    const copy = [...messages];
    copy[idx] = { ...msg, content: newContent };
    return copy;
}


/***/ },

/***/ "./services/coreKnowledge.ts"
/*!***********************************!*\
  !*** ./services/coreKnowledge.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATA_FIELD_LEGEND: () => (/* binding */ DATA_FIELD_LEGEND),
/* harmony export */   RS3_ECONOMIC_RULES: () => (/* binding */ RS3_ECONOMIC_RULES)
/* harmony export */ });
/**
 * @module coreKnowledge
 * Static knowledge base of RS3 economic mechanics injected into every LLM
 * system prompt. These rules are non-negotiable and supersede any outside
 * knowledge the model may have been trained on.
 */
/** Foundational RS3 economic rules the LLM must internalise before answering. */
const RS3_ECONOMIC_RULES = `\
=== RS3 ECONOMIC LAWS (STRICT ADHERENCE REQUIRED) ===

1. GE TAX: All items sold on the Grand Exchange (except items ≤50 gp each and bonds) are subject to a 2% tax (floor(sell price × 0.02)) subtracted from the seller's proceeds. The buyer always pays the full listed price. Tax is applied per item. You MUST deduct this 2% from gross revenue before calculating net profit, ROI, or margins. In the selling interface, the upper value is pre-tax and the lower value is after-tax proceeds.

2. BUY LIMITS: Every item has a 4-hour buy limit — a hard cap on how many a player can purchase via the GE per 4-hour window. The limit resets exactly 4 hours after the first purchase of that window. A player has 6 buy-limit windows per 24 hours. Buy limits are account-wide. A few items have connected limits (buying one reduces the limit for related items). Never recommend quantities exceeding an item's buy limit per window.

3. MARGIN CHECKING: To find the current real spread:
   a. Place an "insta-buy" offer at ~+5% (or +10-20% for low-volume items) above mid-price → this fills against the lowest active sell offer (your instant-sell price / highest sellable price).
   b. Place an "insta-sell" offer at ~-5% (or more) below mid-price → this fills against the highest active buy offer (your instant-buy price / lowest buyable price).
   Margin = insta-buy price − insta-sell price − floor(insta-buy price × 0.02).
   This is the true per-item net profit after tax if you buy at insta-sell price and sell at insta-buy price.

4. HIGH ALCHEMY & OTHER PRICE FLOORS: 
   - High Level Alchemy converts an item to coins at floor(item High Alch value × 0.6). This alch value serves as a strong price floor — if GE price drops significantly below alch value, players buy and alch for near-guaranteed profit (minus rune costs), usually pushing price back toward/above alch value.
   - Invention Disassembly Sink: Many low- or mid-tier items (weapons, armour, jewellery, pouches, etc.) act as bulk sources for Invention components. Demand for specific materials creates a secondary price floor — prices rarely stay far below profitable disassembly value for long, as players buy to disassemble. Always consider disassembly component value when GE price is low on such items.

5. ITEM CATEGORIES & TYPICAL BEHAVIOUR:
   - **Consumables** (food, potions, runes, divine charges): High volume, tight margins (1-5%), very fast trades. Best for high-capital, low-effort flipping.
   - **Skilling supplies** (logs, ores, herbs, hides): Moderate volume, moderate margins. Prices correlate with DXP (Double XP) events and new content.
   - **Equipment** (weapons, armour, components): Low volume, wide margins (5-20%+). Slower to trade but much higher per-item profit.
   - **Rare/discontinued items** (partyhats, dyes, etc.): Very low volume, massive margins, but extremely slow and can take hours or days to flip. High risk due to price manipulation.
   - **Salvage/alchables**: Prices tightly anchored to High Alchemy value. Very stable but nearly no margin.

6. WHAT MAKES A GOOD FLIP:
   - Profit per item × buy limit per 4 hours = maximum 4-hour profit potential.
   - Fast trade velocity means offers fill quickly — less capital tied up waiting.
   - A healthy margin must exceed the 2% tax gap comfortably (at least 2-3× the tax cost).
   - Stable/slight uptrend items are safer; high volatility means the margin can vanish while you wait.
   - Volume spike (>1.5× 7-day average) may indicate a temporary surge — good for quick flips but risky to hold.

7. GP/HR CALCULATION: When recommending items, estimate profit per hour:
   gp/hr = (profit per item after tax) × (buy limit ÷ estimated fill time in hours)
   Where fill time depends on trade velocity:
   - "Insta-Flip" = fills in minutes → assume 0.25 hours per cycle
   - "Active" = fills in 30-60 min → assume 1 hour per cycle
   - "Slow" = fills in 1-4 hours → assume 2-4 hours per cycle
   - "Very Slow" = may take a full 4-hour window or longer
   Trade velocity is highest during peak player hours (European/US evenings, roughly 16:00–00:00 UTC) and around daily game reset (00:00 game time). Adjust fill time estimates upward (slower) during off-peak if item volume is low.

8. OFFER PRIORITY: When multiple offers exist at the same price, the oldest offer fills first (time priority). Editing or aborting an offer resets its position to newest. This means newly placed offers may wait behind existing ones at the same price.

9. SAFE MARGIN GUIDELINES:
   - High-volume/insta-flips: Aim for ≥ 3-5% gross margin (covers tax + minor risk).
   - Mid-volume/active: ≥ 6-10% gross.
   - Low-volume/slow: ≥ 12-20%+ gross to justify wait time and risk.
   Net profit should be at least 2-3× the tax amount per item to be worthwhile.

10. COMMON PITFALLS TO WARN ABOUT:
   - Items with < 1,000 gp price are risky because the tax gap eats most of the margin.
   - A trend slope of ±0.0 with 0.0% volatility usually means insufficient price history data — do NOT call this "stable" or "risky"; instead note that historical data is limited.
   - Volume spikes can indicate merch clans manipulating the price — advise caution.
   - DXP weekend announcements cause skilling supply prices to spike days/weeks before the event. Golden rule: Buy months in advance during quiet periods, sell during pre-event hype/announcement spikes. NEVER hold inventory through the actual DXP weekend — prices usually crash as hoarders dump supplies.
   - Do NOT recommend flipping items priced under ~1,000 gp unless margin is exceptionally wide.
   - Avoid holding downward-trending items overnight unless volatility is very low.
   - Watch for "dead GE" items (0 volume for days) — margins may look good but fill time can be days/weeks.
   - Upcoming updates/DXP/Boss drops/PvM changes can crash or spike prices unpredictably — cross-reference recent game news when possible.

11. GE MID-PRICE LAG & STALENESS: The displayed GE mid-price updates daily based on recent trades, but for low-volume or suddenly volatile items (new releases, boss drops, nerfs), it can lag significantly (days or weeks). During these periods, the mid-price becomes unreliable or "fictional." Always rely on real-time margin checking (insta-buy/sell offers) rather than the listed mid-price for high-volatility events or low-trade items.

12. DATA SOURCE REALITY: All price and volume data in this system comes from the Weird Gloop API, which polls the official Jagex GE API every 30–60 minutes. Guide prices update approximately once per day. Volume is a rolling 24-hour aggregate, NOT a live ticker. This means:
   - Prices shown are GUIDE PRICES, not real-time transaction prices. The actual buy/sell spread is invisible.
   - Intraday price movement is NOT visible — a 10% spike and recovery within 6 hours will not appear in this data.
   - Volume changes reflect the rolling 24h window shifting, not hourly breakdowns.
   - RS3 lacks an OSRS-style real-time data source (RuneLite). Treat this as a value-investing / daily-flip planning tool, not a high-frequency trading terminal.
   - ALWAYS advise the user to margin-check (see rule 3) a single item in-game before committing capital to confirm the real spread.
   - Do NOT claim to know "current spread" or "right now" prices — you only know the last guide price.
   - The "Predicted 24h Price" and trend indicators extrapolate from daily guide-price snapshots and should be treated as directional hints, not precise forecasts.

=== LLM OUTPUT CONSTRAINTS (MANDATORY) ===
- When recommending any flip or calculating profit/gp/hr, you MUST explicitly show the math: e.g., "Gross margin = Sell price - Buy price = X gp; Tax = floor(Sell price × 0.02) = Y gp; Net profit per item = X - Y = Z gp; gp/hr = Z × (Limit / fill hours) = W gp/hr."
- Never describe any flip as "guaranteed profit" or use the word "guaranteed" — all GE prices are player-driven and can change.
- If Buy Limit is "Unknown", assume conservative defaults for worst-case estimates: 10 for equipment/rares, 1,000 for consumables/skilling items. State this assumption clearly in the response.`;
/**
 * Legend explaining each data field in the formatted market summary.
 * Included in the system prompt so the LLM can correctly interpret the data.
 */
const DATA_FIELD_LEGEND = `\
=== DATA FIELD LEGEND (use this to interpret the market data) ===

Each item line in the market data contains these fields:

• GE Price — current Grand Exchange mid-price in gp.
• Buy ≤ — recommended maximum buy offer (~1% below mid-price).
• Sell ≥ — recommended minimum sell offer (~3% above mid-price, floored at High Alch value).
• Profit — estimated per-item flip profit AFTER 2% GE tax: Sell − Buy − floor(Sell × 0.02).
• Limit — 4-hour GE buy limit. "Unknown" = data unavailable (be cautious).
• Eff. Vol — effective daily player volume = min(global daily volume, buy limit × 6). Reflects what one player can realistically trade.
• Max 4H Capital — price × buy limit. How much gold you need to max out one 4-hour window.
• Tax Gap — minimum spread (in gp) required to break even after the 2% GE tax.
• ROT (Return on Time) — estimated gp/hr for a single player flipping this item:
  ROT = estFlipProfit × (globalVol / 24) × 0.7 fill-factor.
  Higher ROT = more profitable use of your time. Use this to compare items with different margins and volumes.
  An item with lower per-item profit but much higher volume can vastly outperform a "big margin" slow-mover.
• 30d Trend Slope — linear regression slope over available price history:
  - Positive (+N.N) = prices trending upward → good for buying.
  - Negative (−N.N) = prices trending downward → good for selling / risky to hold.
  - Near zero (+0.0 / −0.0) with 0% volatility = likely insufficient data, NOT confirmation of stability.
• Volatility — daily price standard deviation as a percentage:
  - 0% = no variation in available data (or insufficient data).
  - <5% = low volatility, stable — safer.
  - 5-10% = moderate — normal for active items.
  - >10% = high volatility — risky, margins can shift rapidly.
• Predicted 24h Price — next-day price estimate from linear trend extrapolation. Less reliable with sparse history.
• ⚠ RISKY — flagged when item price is < 500-1,000 gp (tax gap erodes margins).
• 🔥 N.Nx Vol Spike — today's volume is N.N× the 7-day average. May indicate a surge or manipulation.
• Flags:
  - ⚠ LOW-PRICE: Price <500-1000 gp (tax eats margin).
  - 🔥 VOL SPIKE: Today's volume ≥1.5-2× 7-day avg (possible pump, dump, or event surge).
  - LIMITED-DATA or 0.0% vol + 0.0 slope: Insufficient history — treat trend as unreliable.`;


/***/ },

/***/ "./services/dataEnricher.ts"
/*!**********************************!*\
  !*** ./services/dataEnricher.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enrichPricesWithWiki: () => (/* binding */ enrichPricesWithWiki),
/* harmony export */   fetchGECatalogue: () => (/* binding */ fetchGECatalogue),
/* harmony export */   fetchSparseHistory: () => (/* binding */ fetchSparseHistory)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./services/utils.ts");
/**
 * @module dataEnricher
 * Standalone enrichment helpers that augment raw price data with wiki
 * metadata (buy limits, alch values) and provide the full GE catalogue.
 */

/** URL for the RS Wiki's full GE item-ID catalogue (JSON). */
const GE_CATALOGUE_URL = "https://runescape.wiki/w/Module:GEIDs/data.json?action=raw";
/**
 * Enrich a price map with buy limits and High Alch values from the RS Wiki.
 * Failures are non-critical — the map is left unchanged for items that
 * could not be resolved.
 *
 * @param prices - Mutable map of item name → price record to enrich in-place.
 * @param wiki   - WikiService instance to use for the lookups.
 */
async function enrichPricesWithWiki(prices, wiki) {
    const names = Array.from(prices.keys());
    let buyLimits;
    let alchValues;
    try {
        [buyLimits, alchValues] = await Promise.all([
            wiki.getBulkBuyLimits(names),
            wiki.getBulkHighAlchValues(names),
        ]);
    }
    catch {
        return;
    }
    for (const [name, record] of prices) {
        const limit = buyLimits.get(name);
        if (limit !== undefined)
            record.buyLimit = limit;
        const alch = alchValues.get(name);
        if (alch !== undefined)
            record.highAlch = alch;
    }
}
/**
 * Fetch the full RS3 GE item catalogue from the RS Wiki.
 * Returns ~7 000 `{ name, id }` entries covering every tradeable item.
 *
 * @returns An array of {@link GECatalogueEntry} sorted alphabetically.
 */
async function fetchGECatalogue() {
    console.log("[GECatalogue] Fetching full item catalogue from RS Wiki…");
    try {
        const response = await fetch(GE_CATALOGUE_URL, {
            method: "GET",
            headers: _utils__WEBPACK_IMPORTED_MODULE_0__.JSON_ACCEPT_HEADER,
        });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        const entries = [];
        for (const [name, id] of Object.entries(json)) {
            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isMetadataKey)(name) && typeof id === "number") {
                entries.push({ name, id });
            }
        }
        entries.sort((a, b) => a.name.localeCompare(b.name));
        console.log(`[GECatalogue] Loaded ${entries.length} tradeable items.`);
        return entries;
    }
    catch (err) {
        console.error("[GECatalogue] Failed to fetch catalogue:", err);
        return [];
    }
}
/**
 * Fetch historical prices from the Weird Gloop API and persist to IndexedDB.
 * Used as a sparse-data fallback when IndexedDB history is insufficient
 * for map building.
 */
async function fetchSparseHistory(itemNames, days, api, historySvc) {
    const result = new Map();
    const todayStr = new Date().toISOString().slice(0, 10);
    try {
        const historyMap = await api.fetchHistoricalPrices(itemNames, days);
        if (historyMap.size > 0) {
            try {
                await historySvc.bulkInsertHistory(historyMap);
            }
            catch { /* non-critical */ }
        }
        for (const [name, entries] of historyMap) {
            const dayMap = new Map();
            for (const e of entries) {
                const day = new Date(e.timestamp).toISOString().slice(0, 10);
                if (day === todayStr)
                    continue;
                dayMap.set(day, e.price);
            }
            const sorted = [...dayMap.entries()].sort((a, b) => (a[0] < b[0] ? -1 : 1));
            if (sorted.length > 0) {
                result.set(name, sorted.map((d) => d[1]));
            }
        }
    }
    catch (err) {
        console.warn("[DataEnricher] fetchSparseHistory failed:", err);
    }
    console.log(`[DataEnricher] API history fetched for ${result.size} items.`);
    return result;
}


/***/ },

/***/ "./services/fullMarketScan.ts"
/*!************************************!*\
  !*** ./services/fullMarketScan.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runFullMarketScan: () => (/* binding */ runFullMarketScan)
/* harmony export */ });
/* harmony import */ var _cacheService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cacheService */ "./services/cacheService.ts");
/* harmony import */ var _weirdGloopService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weirdGloopService */ "./services/weirdGloopService.ts");
/* harmony import */ var _wikiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wikiService */ "./services/wikiService.ts");
/* harmony import */ var _dataEnricher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataEnricher */ "./services/dataEnricher.ts");
/**
 * @module fullMarketScan
 * Non-blocking background scan that fetches prices, wiki enrichment, and
 * optional 90-day history for every item in the GE catalogue.
 *
 * Extracted from `initDataPipeline` to isolate orchestra­tion, rate-limit
 * backoff, and per-batch processing into single-responsibility helpers.
 *
 * audit:no-op(SRP-4) — adaptive backoff logic is already factored into
 * functional helpers within this file; further extraction would split a
 * single algorithm across modules with no SRP benefit.
 */




// ─── Constants ──────────────────────────────────────────────────────────────
const BATCH_SIZE = 100;
const BASE_DELAY_MS = 200;
const MAX_DELAY_MS = 30000;
/** Relaxed pacing for deep-history fetches (~7k individual requests).
 *  The 100 ms global gate already caps throughput at ~10 req/s, so
 *  proactive batch pauses are set very high to avoid redundant stalls. */
const DEEP_PACING = { batchPauseEvery: 10000, batchPauseMs: 1000 };
/** Items with a history point newer than this are considered recent. */
const HISTORY_RECENCY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
/** Prices fetched within this window count as "fresh" for the history-only optimisation. */
const FRESH_THRESHOLD_MS = 60 * 60 * 1000; // 1 hour
// ─── Pre-scan strategy helpers ──────────────────────────────────────────────
/**
 * Determine whether the scan can skip price + enrichment fetches entirely
 * and only pull history.  Returns `true` when `deepHistory` is requested
 * and ≥ 90 % of the catalogue already has prices fetched within the last hour.
 */
async function shouldUseHistoryOnlyMode(cache, catalogueSize, deepHistory) {
    if (!deepHistory)
        return false;
    const existing = await cache.getAll();
    if (existing.length === 0)
        return false;
    const now = Date.now();
    const freshCount = existing.filter((r) => r.fetchedAt && now - r.fetchedAt < FRESH_THRESHOLD_MS).length;
    const coverage = freshCount / catalogueSize;
    if (coverage >= 0.9) {
        console.log(`[FullMarketScan] Prices already fresh for ${freshCount}/${catalogueSize} items ` +
            `(${(coverage * 100).toFixed(0)}%) — switching to history-only mode.`);
        return true;
    }
    return false;
}
/**
 * Build the set of item names that already have sufficient & recent 90-day
 * history in the cache.  Items with ≥ 5 data points **and** at least one
 * point within the last 7 days are included — everything else will be
 * (re-)fetched during the scan.
 */
async function buildHistorySkipSet(cache, catalogueSize, deepHistory) {
    const skipSet = new Set();
    if (!deepHistory)
        return skipSet;
    try {
        const recentHistory = await cache.history.getRecentHistory(90);
        const countByName = new Map();
        const newestByName = new Map();
        for (const h of recentHistory) {
            countByName.set(h.name, (countByName.get(h.name) ?? 0) + 1);
            const ts = new Date(h.timestamp).getTime();
            const prev = newestByName.get(h.name) ?? 0;
            if (ts > prev)
                newestByName.set(h.name, ts);
        }
        const now = Date.now();
        let staleSkipped = 0;
        for (const [name, count] of countByName) {
            if (count >= 5) {
                const newest = newestByName.get(name) ?? 0;
                if (now - newest <= HISTORY_RECENCY_MS) {
                    skipSet.add(name);
                }
                else {
                    staleSkipped++;
                }
            }
        }
        if (skipSet.size > 0 || staleSkipped > 0) {
            const pct = ((skipSet.size / catalogueSize) * 100).toFixed(0);
            console.log(`[FullMarketScan] Skipping history fetch for ${skipSet.size}/${catalogueSize} items (${pct}%) ` +
                `that have ≥ 5 data points and recent data (≤ 7 days).` +
                (staleSkipped > 0
                    ? ` ${staleSkipped} items have enough points but stale data — will re-fetch.`
                    : ``));
        }
    }
    catch {
        // Non-critical — proceed without dedup.
    }
    return skipSet;
}
// ─── Per-batch processors ───────────────────────────────────────────────────
/**
 * Process a single batch in **history-only** mode: fetch 90-day history for
 * items not already present in `historySkipSet`, then persist to IndexedDB.
 */
async function processBatchHistoryOnly(api, cache, batchNames, historySkipSet) {
    const needHistory = batchNames.filter((n) => !historySkipSet.has(n));
    if (needHistory.length === 0)
        return;
    const historyMap = await api.fetchHistoricalPrices(needHistory, 90, undefined, DEEP_PACING);
    if (historyMap.size > 0) {
        await cache.history.bulkInsertHistory(historyMap);
    }
}
/**
 * Process a single batch in **normal** mode: fetch prices, enrich with wiki
 * data (buy limits + alch values), persist to IndexedDB, and optionally
 * pull 90-day history for items that need it.
 *
 * @returns The number of price records fetched (0 signals an empty / rate-limited response).
 */
async function processBatchNormal(api, wiki, cache, batchNames, deepHistory, historySkipSet) {
    const prices = await api.fetchLatestPrices(batchNames);
    if (prices.size === 0)
        return 0;
    // Enrich with buy limits + alch values (best-effort).
    await (0,_dataEnricher__WEBPACK_IMPORTED_MODULE_3__.enrichPricesWithWiki)(prices, wiki);
    // Persist to IndexedDB immediately.
    await cache.bulkInsert(prices);
    // Optionally fetch 90-day history.
    if (deepHistory) {
        try {
            const needHistory = Array.from(prices.keys()).filter((n) => !historySkipSet.has(n));
            if (needHistory.length > 0) {
                const historyMap = await api.fetchHistoricalPrices(needHistory, 90, undefined, DEEP_PACING);
                if (historyMap.size > 0) {
                    await cache.history.bulkInsertHistory(historyMap);
                }
            }
        }
        catch {
            // Non-critical — skip history for this batch.
        }
    }
    return prices.size;
}
/** Reset backoff after a successful batch. */
function resetBackoff(state) {
    state.consecutiveEmpty = 0;
    state.delay = BASE_DELAY_MS;
}
/** Increase backoff after an empty or failed batch. */
function increaseBackoff(state, batchLabel, reason) {
    state.consecutiveEmpty++;
    state.delay = Math.min(BASE_DELAY_MS * Math.pow(2, state.consecutiveEmpty), MAX_DELAY_MS);
    console.warn(`[FullMarketScan] Batch ${batchLabel} ${reason} ` +
        `(${state.consecutiveEmpty} consecutive). Next delay: ${(state.delay / 1000).toFixed(1)}s`);
}
// ─── Public orchestrator ────────────────────────────────────────────────────
/**
 * Run a **non-blocking** full-market background scan.
 *
 * Fetches latest prices for **every** item in the GE catalogue (~7 000
 * items) in batches of 100, with adaptive delays between batches to avoid
 * rate-limiting.  Each batch is bulk-inserted into IndexedDB immediately so
 * progress persists even if the user closes the app mid-scan.
 *
 * When `deepHistory` is `true`, 90-day price history is also fetched per
 * item.  When `false` (default), history is loaded on demand via the
 * analytics modal.
 *
 * @param catalogue   - Pre-fetched GE catalogue entries.
 * @param onProgress  - Called after every batch with `(done, total)`.
 * @param signal      - Optional `AbortSignal` to cancel the scan early.
 * @param deepHistory - When `true`, also fetches 90-day history per item.
 * @returns The total number of items successfully processed.
 */
async function runFullMarketScan(catalogue, onProgress, signal, deepHistory = false) {
    if (catalogue.length === 0) {
        console.warn("[FullMarketScan] Empty catalogue — nothing to scan.");
        return 0;
    }
    const cache = new _cacheService__WEBPACK_IMPORTED_MODULE_0__.CacheService();
    const api = new _weirdGloopService__WEBPACK_IMPORTED_MODULE_1__.WeirdGloopService();
    const wiki = new _wikiService__WEBPACK_IMPORTED_MODULE_2__.WikiService();
    await cache.open();
    // ── Pre-scan strategy decisions ───────────────────────────────────────
    const historyOnly = await shouldUseHistoryOnlyMode(cache, catalogue.length, deepHistory);
    const historySkipSet = await buildHistorySkipSet(cache, catalogue.length, deepHistory);
    // ── Batch loop ────────────────────────────────────────────────────────
    const allNames = catalogue.map((e) => e.name);
    const total = allNames.length;
    let done = 0;
    const backoff = { delay: BASE_DELAY_MS, consecutiveEmpty: 0 };
    console.log(`[FullMarketScan] Starting scan of ${total} items in batches of ${BATCH_SIZE}…`);
    for (let i = 0; i < allNames.length; i += BATCH_SIZE) {
        if (signal?.aborted) {
            console.log("[FullMarketScan] Aborted by user.");
            break;
        }
        const batchNames = allNames.slice(i, i + BATCH_SIZE);
        const batchLabel = String(i / BATCH_SIZE + 1);
        try {
            if (historyOnly) {
                await processBatchHistoryOnly(api, cache, batchNames, historySkipSet);
            }
            else {
                const fetched = await processBatchNormal(api, wiki, cache, batchNames, deepHistory, historySkipSet);
                if (fetched > 0) {
                    resetBackoff(backoff);
                }
                else {
                    increaseBackoff(backoff, batchLabel, "returned 0 results");
                }
            }
        }
        catch (err) {
            increaseBackoff(backoff, batchLabel, "failed");
            console.warn(`[FullMarketScan] Batch ${batchLabel} error:`, err);
        }
        done = Math.min(i + BATCH_SIZE, total);
        onProgress?.(done, total);
        // Yield to the browser event loop + adaptive rate-limit delay.
        if (i + BATCH_SIZE < allNames.length) {
            await new Promise((r) => setTimeout(r, backoff.delay));
        }
    }
    console.log(`[FullMarketScan] Complete. ${done} / ${total} items processed.`);
    return done;
}


/***/ },

/***/ "./services/historyCacheService.ts"
/*!*****************************************!*\
  !*** ./services/historyCacheService.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryCacheService: () => (/* binding */ HistoryCacheService)
/* harmony export */ });
/**
 * @module HistoryCacheService
 * IndexedDB CRUD for the `price-history` store.
 *
 * Extracted from {@link CacheService} to satisfy SRP — this class owns
 * all history reads and bulk-history writes while {@link CacheService}
 * retains DB lifecycle, price CRUD, staleness, and export/import.
 */
/** Name of the IndexedDB object store for price history rows. */
const HISTORY_STORE = "price-history";
/**
 * History-specific CRUD for the GE price-history IndexedDB store.
 *
 * Receives a lazy `IDBDatabase` accessor so it can share the same database
 * handle that {@link CacheService} opens and manages.
 */
class HistoryCacheService {
    /**
     * @param dbAccessor - Callback that returns the **already-opened**
     *                     `IDBDatabase` handle (typically `cache.getDb()`).
     */
    constructor(dbAccessor) {
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
    async bulkInsertHistory(historyMap) {
        const db = this.getDb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(HISTORY_STORE, "readwrite");
            const store = tx.objectStore(HISTORY_STORE);
            let count = 0;
            for (const [name, entries] of historyMap) {
                for (const entry of entries) {
                    const day = new Date(entry.timestamp).toISOString().slice(0, 10);
                    const record = {
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
    async getHistoricalRecords(itemName, days) {
        const db = this.getDb();
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - days);
        const cutoffDay = cutoff.toISOString().slice(0, 10);
        return new Promise((resolve, reject) => {
            const tx = db.transaction(HISTORY_STORE, "readonly");
            const store = tx.objectStore(HISTORY_STORE);
            const index = store.index("name");
            const req = index.getAll(IDBKeyRange.only(itemName));
            req.onsuccess = () => {
                const all = req.result;
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
    async getIntradayRecords(itemName, windowMs) {
        const db = this.getDb();
        const cutoffTs = new Date(Date.now() - windowMs).toISOString();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(HISTORY_STORE, "readonly");
            const store = tx.objectStore(HISTORY_STORE);
            const index = store.index("name");
            const req = index.getAll(IDBKeyRange.only(itemName));
            req.onsuccess = () => {
                const all = req.result;
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
    async getRecentHistory(days) {
        const db = this.getDb();
        const cutoffTs = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(HISTORY_STORE, "readonly");
            const store = tx.objectStore(HISTORY_STORE);
            const index = store.index("timestamp");
            const range = IDBKeyRange.lowerBound(cutoffTs);
            const req = index.getAll(range);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }
}


/***/ },

/***/ "./services/index.ts"
/*!***************************!*\
  !*** ./services/index.ts ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* reexport safe */ _cacheService__WEBPACK_IMPORTED_MODULE_1__.CacheService),
/* harmony export */   DATA_FIELD_LEGEND: () => (/* reexport safe */ _coreKnowledge__WEBPACK_IMPORTED_MODULE_11__.DATA_FIELD_LEGEND),
/* harmony export */   HistoryCacheService: () => (/* reexport safe */ _historyCacheService__WEBPACK_IMPORTED_MODULE_2__.HistoryCacheService),
/* harmony export */   JSON_ACCEPT_HEADER: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_15__.JSON_ACCEPT_HEADER),
/* harmony export */   LLMRequestError: () => (/* reexport safe */ _llmService__WEBPACK_IMPORTED_MODULE_6__.LLMRequestError),
/* harmony export */   LLMService: () => (/* reexport safe */ _llmService__WEBPACK_IMPORTED_MODULE_6__.LLMService),
/* harmony export */   LLM_CONTEXT_TOP_N: () => (/* reexport safe */ _marketDataFormatter__WEBPACK_IMPORTED_MODULE_12__.LLM_CONTEXT_TOP_N),
/* harmony export */   LLM_PROVIDERS: () => (/* reexport safe */ _llmProviders__WEBPACK_IMPORTED_MODULE_21__.LLM_PROVIDERS),
/* harmony export */   MAX_BODY_BYTES: () => (/* reexport safe */ _conversationManager__WEBPACK_IMPORTED_MODULE_14__.MAX_BODY_BYTES),
/* harmony export */   MarketAnalyzerService: () => (/* reexport safe */ _marketAnalyzerService__WEBPACK_IMPORTED_MODULE_3__.MarketAnalyzerService),
/* harmony export */   NewsService: () => (/* reexport safe */ _newsService__WEBPACK_IMPORTED_MODULE_5__.NewsService),
/* harmony export */   PortfolioService: () => (/* reexport safe */ _portfolioService__WEBPACK_IMPORTED_MODULE_7__.PortfolioService),
/* harmony export */   ROT_FILL_FACTOR: () => (/* reexport safe */ _scoringEngine__WEBPACK_IMPORTED_MODULE_9__.ROT_FILL_FACTOR),
/* harmony export */   RS3_ECONOMIC_RULES: () => (/* reexport safe */ _coreKnowledge__WEBPACK_IMPORTED_MODULE_11__.RS3_ECONOMIC_RULES),
/* harmony export */   RateLimiter: () => (/* reexport safe */ _rateLimiter__WEBPACK_IMPORTED_MODULE_10__.RateLimiter),
/* harmony export */   WeirdGloopService: () => (/* reexport safe */ _weirdGloopService__WEBPACK_IMPORTED_MODULE_0__.WeirdGloopService),
/* harmony export */   WikiService: () => (/* reexport safe */ _wikiService__WEBPACK_IMPORTED_MODULE_4__.WikiService),
/* harmony export */   buildSystemMessage: () => (/* reexport safe */ _llmPromptBuilder__WEBPACK_IMPORTED_MODULE_13__.buildSystemMessage),
/* harmony export */   buildTrimmedHistory: () => (/* reexport safe */ _conversationManager__WEBPACK_IMPORTED_MODULE_14__.buildTrimmedHistory),
/* harmony export */   buildUserMessage: () => (/* reexport safe */ _llmPromptBuilder__WEBPACK_IMPORTED_MODULE_13__.buildUserMessage),
/* harmony export */   calculateEMA: () => (/* reexport safe */ _timeSeries__WEBPACK_IMPORTED_MODULE_16__.calculateEMA),
/* harmony export */   calculateGETax: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_15__.calculateGETax),
/* harmony export */   calculateLinearTrend: () => (/* reexport safe */ _timeSeries__WEBPACK_IMPORTED_MODULE_16__.calculateLinearTrend),
/* harmony export */   calculateVolatility: () => (/* reexport safe */ _timeSeries__WEBPACK_IMPORTED_MODULE_16__.calculateVolatility),
/* harmony export */   chunkArray: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_15__.chunkArray),
/* harmony export */   computeFlipProfit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_15__.computeFlipProfit),
/* harmony export */   computePortfolioStats: () => (/* reexport safe */ _portfolioAnalytics__WEBPACK_IMPORTED_MODULE_8__.computePortfolioStats),
/* harmony export */   enrichPricesWithWiki: () => (/* reexport safe */ _dataEnricher__WEBPACK_IMPORTED_MODULE_19__.enrichPricesWithWiki),
/* harmony export */   fetchGECatalogue: () => (/* reexport safe */ _dataEnricher__WEBPACK_IMPORTED_MODULE_19__.fetchGECatalogue),
/* harmony export */   findLastUserIdx: () => (/* reexport safe */ _conversationManager__WEBPACK_IMPORTED_MODULE_14__.findLastUserIdx),
/* harmony export */   formatForLLM: () => (/* reexport safe */ _marketDataFormatter__WEBPACK_IMPORTED_MODULE_12__.formatForLLM),
/* harmony export */   formatForLLMCompact: () => (/* reexport safe */ _marketDataFormatter__WEBPACK_IMPORTED_MODULE_12__.formatForLLMCompact),
/* harmony export */   formatGp: () => (/* reexport safe */ _marketDataFormatter__WEBPACK_IMPORTED_MODULE_12__.formatGp),
/* harmony export */   halveMarketData: () => (/* reexport safe */ _conversationManager__WEBPACK_IMPORTED_MODULE_14__.halveMarketData),
/* harmony export */   initDataPipeline: () => (/* reexport safe */ _initDataPipeline__WEBPACK_IMPORTED_MODULE_18__.initDataPipeline),
/* harmony export */   isMetadataKey: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_15__.isMetadataKey),
/* harmony export */   loadBaseline: () => (/* reexport safe */ _baselineService__WEBPACK_IMPORTED_MODULE_17__.loadBaseline),
/* harmony export */   runFullMarketScan: () => (/* reexport safe */ _fullMarketScan__WEBPACK_IMPORTED_MODULE_20__.runFullMarketScan),
/* harmony export */   scoreItems: () => (/* reexport safe */ _scoringEngine__WEBPACK_IMPORTED_MODULE_9__.scoreItems),
/* harmony export */   uuid: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_15__.uuid)
/* harmony export */ });
/* harmony import */ var _weirdGloopService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weirdGloopService */ "./services/weirdGloopService.ts");
/* harmony import */ var _cacheService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cacheService */ "./services/cacheService.ts");
/* harmony import */ var _historyCacheService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historyCacheService */ "./services/historyCacheService.ts");
/* harmony import */ var _marketAnalyzerService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketAnalyzerService */ "./services/marketAnalyzerService.ts");
/* harmony import */ var _wikiService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wikiService */ "./services/wikiService.ts");
/* harmony import */ var _newsService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newsService */ "./services/newsService.ts");
/* harmony import */ var _llmService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./llmService */ "./services/llmService.ts");
/* harmony import */ var _portfolioService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolioService */ "./services/portfolioService.ts");
/* harmony import */ var _portfolioAnalytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolioAnalytics */ "./services/portfolioAnalytics.ts");
/* harmony import */ var _scoringEngine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scoringEngine */ "./services/scoringEngine.ts");
/* harmony import */ var _rateLimiter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rateLimiter */ "./services/rateLimiter.ts");
/* harmony import */ var _coreKnowledge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coreKnowledge */ "./services/coreKnowledge.ts");
/* harmony import */ var _marketDataFormatter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./marketDataFormatter */ "./services/marketDataFormatter.ts");
/* harmony import */ var _llmPromptBuilder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./llmPromptBuilder */ "./services/llmPromptBuilder.ts");
/* harmony import */ var _conversationManager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./conversationManager */ "./services/conversationManager.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils */ "./services/utils.ts");
/* harmony import */ var _timeSeries__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./timeSeries */ "./services/timeSeries.ts");
/* harmony import */ var _baselineService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./baselineService */ "./services/baselineService.ts");
/* harmony import */ var _initDataPipeline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./initDataPipeline */ "./services/initDataPipeline.ts");
/* harmony import */ var _dataEnricher__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dataEnricher */ "./services/dataEnricher.ts");
/* harmony import */ var _fullMarketScan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fullMarketScan */ "./services/fullMarketScan.ts");
/* harmony import */ var _llmProviders__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./llmProviders */ "./services/llmProviders.ts");
/**
 * @module services barrel
 * Re-exports for clean imports throughout the application.
 */
























/***/ },

/***/ "./services/initDataPipeline.ts"
/*!**************************************!*\
  !*** ./services/initDataPipeline.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDataPipeline: () => (/* binding */ initDataPipeline)
/* harmony export */ });
/* harmony import */ var _cacheService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cacheService */ "./services/cacheService.ts");
/* harmony import */ var _weirdGloopService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weirdGloopService */ "./services/weirdGloopService.ts");
/* harmony import */ var _wikiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wikiService */ "./services/wikiService.ts");
/* harmony import */ var _baselineService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baselineService */ "./services/baselineService.ts");
/* harmony import */ var _dataEnricher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataEnricher */ "./services/dataEnricher.ts");
/* harmony import */ var _seedItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seedItems */ "./services/seedItems.ts");
/**
 * @module initDataPipeline
 * Orchestrator that wires the Weird Gloop API service and the IndexedDB cache
 * together into a single "ingest" step.
 *
 * Flow:
 *  1. Open the cache database.
 *  2. Check the TTL-based staleness flag.
 *  3. If stale â†’ fetch latest prices from the API â†’ bulk-insert into cache.
 *  4. Return the (now-fresh) cached records for downstream consumption.
 *
 * This module is deliberately side-effect-free at import time.
 * Consumers call {@link initDataPipeline} explicitly.
 */






/** localStorage key tracking when the baseline was last successfully imported. */
const LS_BASELINE_LOADED_AT = "ger:baseline-loaded-at";
/**
 * Run the full data-ingest pipeline.
 *
 * Designed to be called once during application startup.  Attempts to load
 * the pre-built daily baseline first (full ~7k catalogue with enrichment).
 * Falls back to the legacy seed-item fetch if the baseline is unavailable
 * or stale.  History seeding is no longer performed at startup â€” history
 * loads on demand via the analytics modal or a deep scan.
 *
 * @returns All cached {@link StoredPriceRecord} objects (fresh or previously cached).
 * @throws Will **not** throw for partial API failures; only a complete IDB
 *         failure can cause rejection.
 */
async function initDataPipeline(onProgress) {
    console.log("â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”");
    console.log("\u2502  Gielinor Equity Research \u2014 Data Pipeline  \u2502");
    console.log("â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜");
    const cache = new _cacheService__WEBPACK_IMPORTED_MODULE_0__.CacheService();
    // Step 1 â€” Open the database (creates store on first run).
    try {
        await cache.open();
    }
    catch (err) {
        console.error("[initDataPipeline] Fatal: could not open IndexedDB.", err);
        throw err;
    }
    // Step 2a â€” Guard against IDB/localStorage desync: if the prices store
    // is nearly empty but the baseline-loaded-at key claims a recent load,
    // the user likely cleared IndexedDB without clearing localStorage.
    // Reset the key so the baseline re-imports immediately.
    const existingCount = (await cache.getAll()).length;
    if (existingCount < 100) {
        const syncCheck = localStorage.getItem(LS_BASELINE_LOADED_AT);
        if (syncCheck) {
            const syncAge = Date.now() - new Date(syncCheck).getTime();
            if (syncAge < 24 * 60 * 60 * 1000) {
                console.warn(`[initDataPipeline] IDB/localStorage desync detected: only ${existingCount} records ` +
                    `but baseline-loaded-at claims ${(syncAge / 3600000).toFixed(1)}h ago. Resetting.`);
                localStorage.removeItem(LS_BASELINE_LOADED_AT);
            }
        }
    }
    // Step 2 â€” Check whether we need to (re)import the baseline.
    const baselineLoadedAt = localStorage.getItem(LS_BASELINE_LOADED_AT);
    const baselineAge = baselineLoadedAt
        ? Date.now() - new Date(baselineLoadedAt).getTime()
        : Infinity;
    const BASELINE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours
    if (baselineAge > BASELINE_TTL_MS) {
        console.log("[initDataPipeline] Baseline import needed (age: " +
            (baselineAge === Infinity ? "never loaded" : `${(baselineAge / 3600000).toFixed(1)}h`) + ").");
        onProgress?.("Loading baseline data", 0, 1);
        const baseline = await (0,_baselineService__WEBPACK_IMPORTED_MODULE_3__.loadBaseline)();
        if (baseline && baseline.size > 0) {
            // Baseline loaded successfully â€” bulk-insert into IndexedDB.
            const written = await cache.bulkInsert(baseline);
            localStorage.setItem(LS_BASELINE_LOADED_AT, new Date().toISOString());
            console.log(`[initDataPipeline] Baseline imported: ${written} records.`);
            onProgress?.("Loading baseline data", 1, 1);
        }
        else {
            // Baseline unavailable â€” fall back to seed-item fetch.
            // Do NOT set baseline-loaded-at â€” the next visit should re-attempt
            // the baseline so we don't stay stuck with only ~230 seed items.
            console.warn("[initDataPipeline] Baseline unavailable â€” falling back to seed items.");
            await seedFallback(cache, onProgress);
        }
    }
    else {
        // Check regular cache staleness for within-day revisits.
        const stale = await cache.isStale();
        if (stale) {
            console.log("[initDataPipeline] Cache stale within baseline window â€” refreshing seeds.");
            await seedFallback(cache, onProgress);
        }
        else {
            console.log("[initDataPipeline] Cache is fresh â€” skipping fetch.");
        }
    }
    // Step 3 â€” Return all cached data for downstream consumers.
    const finalRecords = await cache.getAll();
    console.log(`[initDataPipeline] Pipeline complete. ${finalRecords.length} records available.`);
    return finalRecords;
}
/**
 * Legacy seed-item fallback: fetches ~230 curated items from the Weird Gloop
 * API and enriches with wiki data. Used when the baseline is unavailable.
 * Does **not** seed history â€” history is loaded on demand.
 */
async function seedFallback(cache, onProgress) {
    const api = new _weirdGloopService__WEBPACK_IMPORTED_MODULE_1__.WeirdGloopService();
    onProgress?.("Fetching seed prices", 0, _seedItems__WEBPACK_IMPORTED_MODULE_5__.SEED_ITEMS.length);
    let prices;
    try {
        prices = await api.fetchLatestPrices(_seedItems__WEBPACK_IMPORTED_MODULE_5__.SEED_ITEMS);
        onProgress?.("Fetching seed prices", _seedItems__WEBPACK_IMPORTED_MODULE_5__.SEED_ITEMS.length, _seedItems__WEBPACK_IMPORTED_MODULE_5__.SEED_ITEMS.length);
    }
    catch (fetchErr) {
        console.error("[initDataPipeline] Network error fetching prices:", fetchErr);
        throw new Error("Could not reach the Weird Gloop API â€” check your internet connection and try again.");
    }
    if (prices.size === 0) {
        console.warn("[initDataPipeline] API returned zero records. Cache will remain empty.");
        return;
    }
    // Enrich with buy limits + alch values (best-effort).
    onProgress?.("Enriching items", 0, 1);
    const wiki = new _wikiService__WEBPACK_IMPORTED_MODULE_2__.WikiService();
    await (0,_dataEnricher__WEBPACK_IMPORTED_MODULE_4__.enrichPricesWithWiki)(prices, wiki);
    console.log(`[initDataPipeline] Enriched wiki data for ${prices.size} records.`);
    const written = await cache.bulkInsert(prices);
    console.log(`[initDataPipeline] Wrote ${written} records to cache.`);
}


/***/ },

/***/ "./services/llmPromptBuilder.ts"
/*!**************************************!*\
  !*** ./services/llmPromptBuilder.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSystemMessage: () => (/* binding */ buildSystemMessage),
/* harmony export */   buildUserMessage: () => (/* binding */ buildUserMessage)
/* harmony export */ });
/* harmony import */ var _coreKnowledge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coreKnowledge */ "./services/coreKnowledge.ts");
/**
 * @module llmPromptBuilder
 * Pure functions that construct the system and user prompts for the
 * LLM chat-completion API.
 *
 * Extracted from {@link LLMService} so that prompt engineering and
 * HTTP transport are separate concerns.
 */

/**
 * Build the system message that anchors the LLM to its role and
 * explicitly forbids hallucination.
 *
 * The prompt:
 *  - Defines the persona (RS3 Grand Exchange flipping specialist).
 *  - Mandates exclusive use of the provided market data.
 *  - Forbids inventing prices, volumes, or game mechanics.
 *  - Instructs clear, concise formatting suitable for an Alt1 overlay.
 *
 * @returns The system prompt string.
 */
function buildSystemMessage() {
    return [
        "You are a RuneScape 3 Grand Exchange flipping specialist.",
        "",
        "STRICT RULES — you MUST follow all of these:",
        "1. ONLY use the Grand Exchange market data provided in the user message. Never reference outside pricing or game knowledge.",
        "2. NEVER invent, guess, or hallucinate prices, trade volumes, profit margins, or game mechanics.",
        "3. If the provided data is insufficient to answer a question, say so explicitly — do NOT fill gaps with assumptions.",
        "4. When recommending items, ALWAYS cite the exact numbers from the data (price, profit, buy limit, volume, trend slope, volatility).",
        "5. Keep responses concise and actionable. Use bullet points or numbered lists. No filler or generic advice.",
        "6. Format gold values with standard RS3 abbreviations: K (thousands), M (millions), B (billions).",
        "",
        "ANALYTICAL REASONING — follow this framework when recommending items:",
        "7. For EVERY item you recommend or discuss, state:",
        "   a. The per-item profit AFTER tax (use the 'Profit' field, or compute it).",
        "   b. The 4-hour profit potential: profit × buy limit.",
        "   c. The estimated gp/hr based on trade velocity (see economic rules for fill-time estimates).",
        "   d. The 30d trend: quote the slope value and explain what it means (rising, falling, or flat).",
        "   e. The volatility %: quote it and classify as low (<5%), moderate (5-10%), or high (>10%).",
        "",
        "8. CRITICAL: When trend slope is near zero (+0.0 or −0.0) AND volatility is 0.0%, this usually means INSUFFICIENT PRICE HISTORY DATA — do NOT interpret it as 'stable' or 'low risk'. Instead, say historical data is limited and recommend the player margin-check the item first.",
        "",
        "9. When the player asks 'what should I flip', rank your top 3-5 picks by estimated gp/hr and explain why each is good. Include at least one high-volume fast flip and one higher-margin slower flip if available.",
        "",
        "10. Always include actionable next steps: what price to set buy offers at, estimated wait time, and what to sell at.",
        "",
        "The following RS3 economic laws are ABSOLUTE. They supersede any conflicting outside knowledge. Apply them to every calculation.",
        "",
        _coreKnowledge__WEBPACK_IMPORTED_MODULE_0__.RS3_ECONOMIC_RULES,
        "",
        _coreKnowledge__WEBPACK_IMPORTED_MODULE_0__.DATA_FIELD_LEGEND,
        "",
        "Your audience is an experienced RS3 player viewing this inside the Alt1 Toolkit overlay who is focused on flipping items for profit. Be direct, specific, and data-driven. Never pad responses with generic advice like 'do your own research' — the data is right there.",
        "",
        "NEWS CONTEXT — when a '=== RECENT RS3 NEWS & GAME UPDATES ===' section is present:",
        "11. Use recent game update headlines to explain WHY prices may be moving (e.g. a combat rework may spike weapon/armour demand, a skilling update may crash resource prices).",
        "12. Only reference news when it is genuinely relevant to the items or question at hand. Do not force a connection where none exists.",
        "13. Clearly distinguish between data-driven observations (from the market data) and speculative explanations (from the news context).",
    ].join("\n");
}
/**
 * Assemble the user message that delivers the RAG context alongside the
 * player's actual query.
 *
 * Structure:
 * ```
 * === GRAND EXCHANGE DATA ===
 * …market summary…
 *
 * === RECENT RS3 NEWS & GAME UPDATES ===   (optional)
 * …news headlines…
 *
 * === PLAYER QUESTION ===
 * …free-form query…
 * ```
 *
 * @param query       - Player's question.
 * @param marketData  - Formatted market data block.
 * @param newsContext - Optional formatted news block.
 * @returns The composed user prompt string.
 */
function buildUserMessage(query, marketData, newsContext) {
    const parts = [
        "=== GRAND EXCHANGE DATA ===",
        marketData,
    ];
    if (newsContext) {
        parts.push("", newsContext);
    }
    parts.push("", "=== PLAYER QUESTION ===", query);
    return parts.join("\n");
}


/***/ },

/***/ "./services/llmProviders.ts"
/*!**********************************!*\
  !*** ./services/llmProviders.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LLM_PROVIDERS: () => (/* binding */ LLM_PROVIDERS)
/* harmony export */ });
/**
 * @module llmProviders
 * Built-in LLM provider preset registry.
 * Extracted from types.ts to preserve SRP: types.ts holds only interfaces/types.
 */
/** Built-in provider presets. The last entry (`custom`) uses user-supplied values. */
const LLM_PROVIDERS = [
    {
        id: "groq",
        label: "Groq",
        endpoint: "https://api.groq.com/openai/v1/chat/completions",
        defaultModel: "llama-3.1-8b-instant",
        keyPlaceholder: "gsk_…",
        models: [
            { id: "llama-3.1-8b-instant", label: "Llama 3.1 8B Instant", recommended: true },
            { id: "llama-3.3-70b-versatile", label: "Llama 3.3 70B Versatile" },
            { id: "openai/gpt-oss-20b", label: "GPT-OSS 20B" },
            { id: "openai/gpt-oss-120b", label: "GPT-OSS 120B" },
            { id: "meta-llama/llama-4-scout-17b-16e-instruct", label: "Llama 4 Scout 17B (Preview)" },
            { id: "qwen/qwen3-32b", label: "Qwen3 32B (Preview)" },
        ],
        costTier: "free",
        costNote: "Generous free tier — no credit card required",
        signupUrl: "https://console.groq.com/keys",
    },
    {
        id: "openai",
        label: "OpenAI",
        endpoint: "https://api.openai.com/v1/chat/completions",
        defaultModel: "gpt-4o-mini",
        keyPlaceholder: "sk-…",
        models: [
            { id: "gpt-4o-mini", label: "GPT-4o Mini", recommended: true },
            { id: "gpt-4o", label: "GPT-4o" },
            { id: "gpt-4-turbo", label: "GPT-4 Turbo" },
            { id: "gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
            { id: "o3-mini", label: "o3-mini" },
        ],
        costTier: "paid",
        costNote: "Pay-as-you-go — requires billing setup",
        signupUrl: "https://platform.openai.com/api-keys",
    },
    {
        id: "openrouter",
        label: "OpenRouter",
        endpoint: "https://openrouter.ai/api/v1/chat/completions",
        defaultModel: "meta-llama/llama-3-8b-instruct",
        keyPlaceholder: "sk-or-…",
        models: [
            { id: "meta-llama/llama-3-8b-instruct", label: "Llama 3 8B Instruct", recommended: true },
            { id: "meta-llama/llama-3-70b-instruct", label: "Llama 3 70B Instruct" },
            { id: "meta-llama/llama-3.1-8b-instruct", label: "Llama 3.1 8B Instruct" },
            { id: "mistralai/mistral-7b-instruct", label: "Mistral 7B Instruct" },
            { id: "google/gemma-2-9b-it", label: "Gemma 2 9B" },
            { id: "openai/gpt-4o-mini", label: "GPT-4o Mini (OpenAI)" },
        ],
        costTier: "free-tier",
        costNote: "Free tier for select models — credit for paid models",
        signupUrl: "https://openrouter.ai/keys",
    },
    {
        id: "together",
        label: "Together AI",
        endpoint: "https://api.together.xyz/v1/chat/completions",
        defaultModel: "meta-llama/Llama-3-8b-chat-hf",
        keyPlaceholder: "tok_…",
        models: [
            { id: "meta-llama/Llama-3-8b-chat-hf", label: "Llama 3 8B Chat", recommended: true },
            { id: "meta-llama/Llama-3-70b-chat-hf", label: "Llama 3 70B Chat" },
            { id: "mistralai/Mixtral-8x7B-Instruct-v0.1", label: "Mixtral 8×7B" },
            { id: "togethercomputer/RedPajama-INCITE-7B-Chat", label: "RedPajama 7B" },
        ],
        costTier: "free-tier",
        costNote: "Free tier with $5 credit on signup",
        signupUrl: "https://api.together.xyz/settings/api-keys",
    },
    {
        id: "mistral",
        label: "Mistral AI",
        endpoint: "https://api.mistral.ai/v1/chat/completions",
        defaultModel: "mistral-small-latest",
        keyPlaceholder: "mis_…",
        models: [
            { id: "mistral-small-latest", label: "Mistral Small", recommended: true },
            { id: "mistral-medium-latest", label: "Mistral Medium" },
            { id: "mistral-large-latest", label: "Mistral Large" },
            { id: "open-mistral-7b", label: "Mistral 7B (Open)" },
            { id: "open-mixtral-8x7b", label: "Mixtral 8×7B (Open)" },
        ],
        costTier: "low-cost",
        costNote: "Pay-as-you-go — competitively priced",
        signupUrl: "https://console.mistral.ai/api-keys",
    },
    {
        id: "custom",
        label: "Custom / Self-hosted",
        endpoint: "",
        defaultModel: "",
        keyPlaceholder: "(optional for local models)",
        models: [],
        costTier: "self-hosted",
        costNote: "Run your own model locally — no API cost",
    },
];


/***/ },

/***/ "./services/llmService.ts"
/*!********************************!*\
  !*** ./services/llmService.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LLMRequestError: () => (/* binding */ LLMRequestError),
/* harmony export */   LLMService: () => (/* binding */ LLMService)
/* harmony export */ });
/* harmony import */ var _llmPromptBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./llmPromptBuilder */ "./services/llmPromptBuilder.ts");
/* harmony import */ var _conversationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversationManager */ "./services/conversationManager.ts");
/**
 * @module LLMService
 * OpenAI-compatible chat-completion client for RAG synthesis.
 *
 * Responsibilities:
 *  - Construct a strict system prompt that grounds the LLM in provided data.
 *  - Build a well-typed `ChatCompletionRequest` from market data + wiki text.
 *  - Execute the POST via native `fetch` — no external SDK dependencies.
 *  - Surface descriptive typed errors for common failure modes (401, 429, etc.).
 *
 * Designed for Groq (default) but works with any OpenAI-compatible endpoint
 * (OpenAI, Together, Ollama, LM Studio, etc.) by overriding {@link LLMConfig}.
 */


/** Sensible defaults — Groq free tier with `llama-3.1-8b-instant`. */
const DEFAULTS = {
    apiKey: "",
    endpoint: "https://api.groq.com/openai/v1/chat/completions",
    model: "llama-3.1-8b-instant",
    temperature: 0.4,
    maxTokens: 1024,
};
/**
 * Service that synthesises GE market data and RS3 Wiki text into
 * actionable money-making advice via an LLM chat-completion API.
 *
 * @example
 * ```ts
 * const llm = new LLMService({ apiKey: "gsk_…" });
 * const advice = await llm.generateAdvice(
 *   "What should I flip right now?",
 *   formattedMarketData,
 * );
 * console.log(advice);
 * ```
 */
class LLMService {
    /**
     * @param config - All fields have sensible defaults targeting Groq's free tier.
     *                 For hosted providers, `apiKey` is required. For self-hosted
     *                 models the key may be omitted.
     */
    constructor(config = {}) {
        /** Running conversation history sent with every request. */
        this._messages = [];
        this.apiKey = config.apiKey ?? "";
        this.endpoint = config.endpoint ?? DEFAULTS.endpoint;
        this.model = config.model ?? DEFAULTS.model;
        this.temperature = config.temperature ?? DEFAULTS.temperature;
        this.maxTokens = config.maxTokens ?? DEFAULTS.maxTokens;
        // Seed the conversation with the system prompt.
        this._messages = [{ role: "system", content: (0,_llmPromptBuilder__WEBPACK_IMPORTED_MODULE_0__.buildSystemMessage)() }];
    }
    // ─── Public API ───────────────────────────────────────────────────────
    /**
     * Read-only snapshot of the current conversation history.
     * Includes the system prompt, all user queries, and all assistant replies.
     */
    get messages() {
        return this._messages;
    }
    /**
     * Overwrite the internal conversation history with previously-saved data.
     * Use this to restore a session from `localStorage`.
     *
     * @param saved - A serialised `ChatMessage[]` array. If the first entry is
     *                not a system message, the current system prompt is
     *                prepended automatically.
     */
    loadHistory(saved) {
        if (saved.length === 0 || saved[0].role !== "system") {
            this._messages = [
                { role: "system", content: (0,_llmPromptBuilder__WEBPACK_IMPORTED_MODULE_0__.buildSystemMessage)() },
                ...saved,
            ];
        }
        else {
            // Replace the saved system prompt with the canonical one (in case
            // rules changed between sessions).
            this._messages = [
                { role: "system", content: (0,_llmPromptBuilder__WEBPACK_IMPORTED_MODULE_0__.buildSystemMessage)() },
                ...saved.slice(1),
            ];
        }
    }
    /**
     * Reset conversation history back to just the base system prompt.
     */
    clearHistory() {
        this._messages = [{ role: "system", content: (0,_llmPromptBuilder__WEBPACK_IMPORTED_MODULE_0__.buildSystemMessage)() }];
    }
    /**
     * Generate a money-making advice response from the LLM.
     *
     * The method appends the user message to the running conversation,
     * sends the full history to the model, and appends the assistant's reply.
     *
     * @param query       - The player's free-form question
     *                      (e.g. "What should I flip right now?").
     * @param marketData  - Pre-formatted top-N market summary string produced
     *                      by {@link MarketAnalyzerService.formatForLLM}.
     * @param newsContext - Optional formatted recent RS3 news block from
     *                      {@link NewsService.formatForLLM}.  Included in the
     *                      user message so the LLM can correlate price moves
     *                      with game events.
     * @returns The assistant's generated advice text.
     * @throws {LLMRequestError} On HTTP-level failures (401, 429, 5xx, etc.).
     */
    async generateAdvice(query, marketData, newsContext) {
        const userMsg = (0,_llmPromptBuilder__WEBPACK_IMPORTED_MODULE_0__.buildUserMessage)(query, marketData, newsContext);
        this._messages.push({ role: "user", content: userMsg });
        // Build a trimmed copy of the history for the API payload.
        // - System prompt: kept as-is.
        // - Older user messages: data blocks stripped, only the player question retained.
        // - Most recent user message (the one we just pushed): full context kept.
        // - Assistant messages: kept as-is.
        // Additionally, cap conversation to the system prompt + last MAX_HISTORY_PAIRS
        // exchanges to bound payload size.
        const trimmed = (0,_conversationManager__WEBPACK_IMPORTED_MODULE_1__.buildTrimmedHistory)(this._messages);
        let body = {
            model: this.model,
            messages: trimmed,
            temperature: this.temperature,
            max_completion_tokens: this.maxTokens,
        };
        // Measure initial payload size.
        let jsonBody = JSON.stringify(body);
        const encoder = new TextEncoder();
        let byteLen = encoder.encode(jsonBody).length;
        console.log(`[LLMService] Sending ${trimmed.length} messages ` +
            `(${this._messages.length} in full history) — ` +
            `${(byteLen / 1024).toFixed(1)} KB payload — ` +
            `model: ${this.model}`);
        // Guard against oversized payloads.
        // Strategy: first halve market-data lines (up to 4×), then halve wiki
        // text (up to 4×).  This two-phase approach trims the two largest
        // variable-size sections progressively.
        if (byteLen > _conversationManager__WEBPACK_IMPORTED_MODULE_1__.MAX_BODY_BYTES) {
            console.warn(`[LLMService] Payload too large (${(byteLen / 1024).toFixed(1)} KB > ` +
                `${(_conversationManager__WEBPACK_IMPORTED_MODULE_1__.MAX_BODY_BYTES / 1024).toFixed(0)} KB limit). Truncating…`);
            const lastUserIdx = (0,_conversationManager__WEBPACK_IMPORTED_MODULE_1__.findLastUserIdx)(trimmed);
            if (lastUserIdx >= 0) {
                let truncated = trimmed;
                // Phase 1: halve market data.
                for (let attempt = 0; attempt < 4 && byteLen > _conversationManager__WEBPACK_IMPORTED_MODULE_1__.MAX_BODY_BYTES; attempt++) {
                    truncated = (0,_conversationManager__WEBPACK_IMPORTED_MODULE_1__.halveMarketData)(truncated, lastUserIdx);
                    body = { ...body, messages: truncated };
                    jsonBody = JSON.stringify(body);
                    byteLen = encoder.encode(jsonBody).length;
                    console.log(`[LLMService]   Market-data trim ${attempt + 1}: ${(byteLen / 1024).toFixed(1)} KB`);
                }
            }
        }
        const headers = {
            "Content-Type": "application/json",
        };
        if (this.apiKey) {
            headers["Authorization"] = `Bearer ${this.apiKey}`;
        }
        const response = await fetch(this.endpoint, {
            method: "POST",
            headers,
            body: jsonBody,
        });
        if (!response.ok) {
            // Remove the user message we just pushed so the history stays clean.
            this._messages.pop();
            await this.handleHttpError(response);
        }
        const json = await response.json();
        const reply = json.choices?.[0]?.message?.content?.trim();
        if (!reply) {
            this._messages.pop();
            throw new LLMRequestError("LLM returned an empty or malformed response.", 0, JSON.stringify(json));
        }
        // Append the assistant's reply to the running history.
        this._messages.push({ role: "assistant", content: reply });
        if (json.usage) {
            console.debug(`[LLMService] Token usage — prompt: ${json.usage.prompt_tokens}, ` +
                `completion: ${json.usage.completion_tokens}, ` +
                `total: ${json.usage.total_tokens}.`);
        }
        return reply;
    }
    // ─── Private: Error Handling ──────────────────────────────────────────
    /**
     * Inspect a non-OK HTTP response and throw a descriptive
     * {@link LLMRequestError}.
     *
     * Common cases:
     * | Status | Likely cause                        |
     * |--------|-------------------------------------|
     * | 401    | Missing or invalid API key           |
     * | 403    | Key lacks required permissions       |
     * | 429    | Rate limit / quota exceeded          |
     * | 500+   | Upstream model or infra failure      |
     *
     * @param response - The `fetch` Response object with `ok === false`.
     * @throws {LLMRequestError} Always.
     */
    async handleHttpError(response) {
        let bodyText;
        try {
            bodyText = await response.text();
        }
        catch {
            bodyText = "[unable to read response body]";
        }
        const status = response.status;
        let hint;
        switch (status) {
            case 401:
                hint = "Unauthorized — check that your API key is valid and correctly configured.";
                break;
            case 403:
                hint = "Forbidden — the API key may lack the required permissions.";
                break;
            case 413:
                hint = "Request too large — conversation history exceeded the provider's size limit. Try clearing the chat and starting a new conversation.";
                break;
            case 429:
                hint = "Rate limited — you have exceeded the API quota. Wait and retry.";
                break;
            default:
                hint = status >= 500
                    ? "Server error on the LLM provider side. Try again later."
                    : status === 400
                        ? "Bad request — the model may be deprecated or the request body is invalid. Try a different model."
                        : `Unexpected HTTP ${status}.`;
        }
        throw new LLMRequestError(`[LLMService] ${hint} (HTTP ${status} ${response.statusText})`, status, bodyText);
    }
}
// ─── Custom Error Class ─────────────────────────────────────────────────────
/**
 * Typed error thrown by {@link LLMService} on HTTP or response-parsing failures.
 * Carries the HTTP status code and raw response body for upstream diagnostics.
 */
class LLMRequestError extends Error {
    constructor(message, status, responseBody) {
        super(message);
        this.name = "LLMRequestError";
        this.status = status;
        this.responseBody = responseBody;
    }
}


/***/ },

/***/ "./services/marketAnalyzerService.ts"
/*!*******************************************!*\
  !*** ./services/marketAnalyzerService.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketAnalyzerService: () => (/* binding */ MarketAnalyzerService)
/* harmony export */ });
/* harmony import */ var _marketDataFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marketDataFormatter */ "./services/marketDataFormatter.ts");
/* harmony import */ var _scoringEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scoringEngine */ "./services/scoringEngine.ts");
/* harmony import */ var _marketMapCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marketMapCache */ "./services/marketMapCache.ts");
/**
 * @module MarketAnalyzerService
 * Deterministic filtering pipeline that transforms raw cached GE data into a
 * ranked, LLM-ready summary of the most profitable RS3 markets **from a
 * single player’s perspective**.
 *
 * Pipeline stages:
 *  1. **Retrieve** — pull every {@link StoredPriceRecord} from IndexedDB.
 *  2. **Score**    — compute player-constrained metrics:
 *                    • `effectivePlayerVolume = min(volume, buyLimit × 6)`
 *                    • `maxCapitalPer4H = price × buyLimit`
 *                    • `playerTradedValue = price × effectivePlayerVolume`
 *  3. **Filter**   — discard items outside the volume / price window.
 *  4. **Rank**     — sort descending by `playerTradedValue`.
 *  5. **Slice**    — keep only the top-N items.
 *  6. **Format**   — serialise the result into a compact string for LLM context.
 *
 * All calculations are pure math on local data — the only network call is a
 * fallback fetch to the Weird Gloop historical API when the local IndexedDB
 * price-history store has insufficient data for sparkline rendering.
 */



/** Default analyser settings. */
const DEFAULTS = {
    topN: 20,
    minVolume: 0,
};
/**
 * Stateless service that reads cached GE price data and produces a ranked,
 * LLM-consumable summary of the most actively-traded items.
 *
 * @example
 * ```ts
 * const cache = new CacheService();
 * await cache.open();
 *
 * const analyzer = new MarketAnalyzerService(cache);
 * const top = await analyzer.getTopItems();
 * const prompt = analyzer.formatForLLM(top);
 * console.log(prompt);
 * ```
 */
class MarketAnalyzerService {
    /**
     * @param cache  - An **already-opened** {@link CacheService} instance.
     * @param config - Optional overrides for ranking behaviour.
     */
    constructor(cache, config) {
        this.cache = cache;
        this.topN = config?.topN ?? DEFAULTS.topN;
        this.minVolume = config?.minVolume ?? DEFAULTS.minVolume;
        this.maxVolume = config?.maxVolume ?? 0;
        this.maxPrice = config?.maxPrice ?? 0;
        this.mapCache = new _marketMapCache__WEBPACK_IMPORTED_MODULE_2__.MarketMapCache(cache);
    }
    /** Invalidate the cached volume/price maps so the next call rebuilds them. */
    invalidateMapCache() {
        this.mapCache.invalidate();
    }
    // ─── Public API ───────────────────────────────────────────────────────
    /**
     * Run the full filtering pipeline and return the top-N most liquid items.
     *
     * @param overrides - Optional runtime filter overrides that take precedence
     *                    over the constructor defaults for this single call.
     * @returns An array of {@link RankedItem} objects, length ≤ `topN`.
     */
    async getTopItems(overrides) {
        const records = await this.cache.getAll();
        if (records.length === 0) {
            console.warn("[MarketAnalyzer] Cache returned 0 records — nothing to analyse.");
            return [];
        }
        // Build a volume-SMA map from the last 30 days of history.
        // Build a price-history map for sparklines / EMA / regression.
        // Uses TTL-cached maps to skip redundant IndexedDB reads + API calls.
        const { avgVolumeMap, priceHistoryMap } = await this.mapCache.getOrBuild(30);
        const effectiveMinVol = overrides?.minVolume ?? this.minVolume;
        const effectiveMaxVol = overrides?.maxVolume ?? this.maxVolume;
        const effectiveMaxPrice = overrides?.maxPrice ?? this.maxPrice;
        const effectiveTopN = overrides?.topN ?? this.topN;
        console.log(`[MarketAnalyzer] Scoring ${records.length} cached records` +
            ` (minVol=${effectiveMinVol}, maxVol=${effectiveMaxVol || "∞"}, maxPrice=${effectiveMaxPrice || "∞"})…`);
        const scored = this.scoreAndFilter(records, effectiveMinVol, effectiveMaxVol, effectiveMaxPrice, avgVolumeMap, priceHistoryMap);
        const sorted = this.sortDescending(scored);
        const top = sorted.slice(0, effectiveTopN);
        console.log(`[MarketAnalyzer] ${scored.length} liquid items found → returning top ${top.length}.`);
        return top;
    }
    /**
     * Search all cached items by name and return fully-scored {@link RankedItem}
     * objects — identical to the cards produced by {@link getTopItems}.
     *
     * The search is **entirely client-side** (IndexedDB only, no network calls).
     * Results are capped at 50 to keep DOM rendering lightweight.
     *
     * @param query - Case-insensitive substring to match against item names.
     * @returns Matching items ranked by `tradedValue`, length ≤ 50.
     */
    async searchItems(query) {
        const needle = query.toLowerCase().trim();
        if (needle.length === 0)
            return [];
        const allRecords = await this.cache.getAll();
        const matched = allRecords.filter((r) => r.name.toLowerCase().includes(needle));
        if (matched.length === 0)
            return [];
        const { avgVolumeMap, priceHistoryMap } = await this.mapCache.getOrBuild(30);
        // Score with no volume/price filters so *every* match is included.
        const scored = this.scoreAndFilter(matched, 0, 0, 0, avgVolumeMap, priceHistoryMap);
        const sorted = this.sortDescending(scored);
        return sorted.slice(0, 50);
    }
    /**
     * Return **all** cached items as fully-scored {@link RankedItem} objects.
     * Used for filter-only browsing when no search query is active.
     * Results are capped at {@link maxResults} to keep DOM rendering fast.
     *
     * @param maxResults - Maximum items to return (default 200).
     * @returns All cached items ranked by `tradedValue`.
     */
    async getAllScored(maxResults = 200) {
        const allRecords = await this.cache.getAll();
        if (allRecords.length === 0)
            return [];
        const { avgVolumeMap, priceHistoryMap } = await this.mapCache.getOrBuild(30);
        const scored = this.scoreAndFilter(allRecords, 0, 0, 0, avgVolumeMap, priceHistoryMap);
        const sorted = this.sortDescending(scored);
        return maxResults > 0 ? sorted.slice(0, maxResults) : sorted;
    }
    /**
     * Look up cached items by an exact set of names and return fully-scored
     * {@link RankedItem} objects.  Used to render the user's favourites list.
     *
     * @param names - Set of item names to retrieve (case-sensitive, must match cache keys).
     * @returns Matching items ranked by `tradedValue`.
     */
    async getItemsByNames(names) {
        if (names.size === 0)
            return [];
        const allRecords = await this.cache.getAll();
        const matched = allRecords.filter((r) => names.has(r.name));
        if (matched.length === 0)
            return [];
        const { avgVolumeMap, priceHistoryMap } = await this.mapCache.getOrBuild(30);
        const scored = this.scoreAndFilter(matched, 0, 0, 0, avgVolumeMap, priceHistoryMap);
        return this.sortDescending(scored);
    }
    // audit:no-op(SRP-6) — getFormattedTop, formatForLLM, and getFormattedForLLM
    // are 1-4 line thin delegates to marketDataFormatter. Extracting them to a
    // separate class would over-fragment the public API for zero SRP gain.
    /**
     * Convenience wrapper: run the pipeline **and** format the result in one call.
     *
     * @returns A formatted string ready for LLM context injection.
     */
    async getFormattedTop() {
        const items = await this.getTopItems();
        return (0,_marketDataFormatter__WEBPACK_IMPORTED_MODULE_0__.formatForLLM)(items);
    }
    /**
     * Serialise a list of {@link RankedItem} objects into a compact,
     * human-readable (and LLM-friendly) string block.
     * Delegates to {@link formatForLLM} from `marketDataFormatter`.
     */
    formatForLLM(items) {
        return (0,_marketDataFormatter__WEBPACK_IMPORTED_MODULE_0__.formatForLLM)(items);
    }
    /**
     * Build a broader dataset specifically for LLM chat context.
     *
     * Returns the top {@link LLM_CONTEXT_TOP_N} items by traded value with
     * **no volume or price filters**, giving the LLM a much wider view of
     * the market than the UI's filtered top-20 panel.
     *
     * @returns A formatted string with up to 50 items for LLM context injection.
     */
    async getFormattedForLLM() {
        const items = await this.getTopItems({
            topN: _marketDataFormatter__WEBPACK_IMPORTED_MODULE_0__.LLM_CONTEXT_TOP_N,
            minVolume: 0,
            maxVolume: 0,
            maxPrice: 0,
        });
        return (0,_marketDataFormatter__WEBPACK_IMPORTED_MODULE_0__.formatForLLMCompact)(items);
    }
    // ─── Private Helpers ──────────────────────────────────────────────────
    /**
     * Compute player-constrained liquidity scores and apply all filters.
     *
     * For each record:
     *  - `effectivePlayerVolume = min(globalVolume, buyLimit × 6)`
     *    (falls back to `globalVolume` when `buyLimit` is unknown)
     *  - `maxCapitalPer4H = price × buyLimit` (0 when unknown)
     *  - `tradedValue = price × effectivePlayerVolume` (player-constrained)
     *
     * Volume filters (`minVolume` / `maxVolume`) are applied against the
     * **global daily GE volume** so that preset filters (High / Low)
     * reflect actual market liquidity rather than a single player's
     * buy-limit-constrained throughput.
     *
     * @param records      - Raw records from the cache.
     * @param minVolume    - Minimum global daily volume (inclusive lower bound).
     * @param maxVolume    - Maximum global daily volume (0 = no cap).
     * @param maxPrice     - Maximum item price in gp (0 = no cap).
     * @returns Scored items that pass all filters.
     */
    scoreAndFilter(records, minVolume, maxVolume, maxPrice, avgVolumeMap, priceHistoryMap) {
        return (0,_scoringEngine__WEBPACK_IMPORTED_MODULE_1__.scoreItems)(records, minVolume, maxVolume, maxPrice, avgVolumeMap, priceHistoryMap);
    }
    /**
     * Sort an array of ranked items **descending** by `tradedValue`.
     * Returns a new array; the input is not mutated.
     *
     * @param items - Unsorted scored items.
     * @returns A new array sorted from highest to lowest traded value.
     */
    sortDescending(items) {
        return [...items].sort((a, b) => b.tradedValue - a.tradedValue);
    }
}


/***/ },

/***/ "./services/marketDataFormatter.ts"
/*!*****************************************!*\
  !*** ./services/marketDataFormatter.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LLM_CONTEXT_TOP_N: () => (/* binding */ LLM_CONTEXT_TOP_N),
/* harmony export */   formatForLLM: () => (/* binding */ formatForLLM),
/* harmony export */   formatForLLMCompact: () => (/* binding */ formatForLLMCompact),
/* harmony export */   formatGp: () => (/* binding */ formatGp)
/* harmony export */ });
/**
 * @module marketDataFormatter
 * Pure formatting functions that serialise {@link RankedItem} arrays into
 * LLM-ready and human-readable string blocks.
 *
 * Extracted from {@link MarketAnalyzerService} so that scoring/ranking
 * and presentation are separate concerns.
 *
 * audit:no-op(DRY-4) — formatForLLM and formatForLLMCompact read the
 * same RankedItem fields but format them differently (full labels +
 * toLocaleString vs. abbreviated labels + formatGp). No shared
 * intermediate is extractable; the duplication is in trivial property
 * access, not logic.
 */
/**
 * Number of top items (by traded value, no filters) included in the LLM
 * chat context.  50 items in compact format ≈ 6–8 KB — comfortably fits
 * alongside the system prompt and truncated wiki text within a 50 KB
 * payload budget.
 */
const LLM_CONTEXT_TOP_N = 50;
/**
 * Format a large gp value into a human-readable abbreviated string.
 *
 * | Range               | Suffix | Example |
 * |---------------------|--------|---------|
 * | ≥ 1 000 000 000 000 | T      | 2.65T   |
 * | ≥ 1 000 000 000     | B      | 1.42B   |
 * | ≥ 1 000 000         | M      | 312.5M  |
 * | ≥ 1 000             | K      | 4.2K    |
 * | < 1 000             | (raw)  | 750     |
 *
 * @param value - Raw gp amount.
 * @returns Abbreviated string with up to 2 decimal places.
 */
function formatGp(value) {
    const abs = Math.abs(value);
    const sign = value < 0 ? "-" : "";
    if (abs >= 1000000000000)
        return `${sign}${(abs / 1000000000000).toFixed(2)}T`;
    if (abs >= 1000000000)
        return `${sign}${(abs / 1000000000).toFixed(2)}B`;
    if (abs >= 1000000)
        return `${sign}${(abs / 1000000).toFixed(2)}M`;
    if (abs >= 1000)
        return `${sign}${(abs / 1000).toFixed(2)}K`;
    return `${sign}${abs.toLocaleString("en-US")}`;
}
/**
 * Serialise a list of {@link RankedItem} objects into a compact,
 * human-readable (and LLM-friendly) string block.
 *
 * @param items - Pre-ranked items (as returned by `getTopItems`).
 * @returns Multi-line string suitable for embedding in an LLM prompt.
 */
function formatForLLM(items) {
    if (items.length === 0) {
        return "[No liquid items available — cache may be empty.]";
    }
    const header = `=== RS3 Grand Exchange — Top ${items.length} by Player Traded Value ===`;
    const divider = "=".repeat(header.length);
    const lines = items.map((item, idx) => {
        const rank = String(idx + 1).padStart(2, " ");
        const price = formatGp(item.price);
        const limit = item.buyLimit != null
            ? item.buyLimit.toLocaleString("en-US")
            : "Unknown";
        const effVol = item.effectivePlayerVolume.toLocaleString("en-US");
        const cap4h = item.maxCapitalPer4H > 0
            ? `${formatGp(item.maxCapitalPer4H)} gp`
            : "Unknown";
        const risk = item.isRisky ? " ⚠ RISKY" : "";
        const recBuy = formatGp(item.recBuyPrice);
        const recSell = formatGp(item.recSellPrice);
        const flipPft = formatGp(item.estFlipProfit);
        const hype = item.volumeSpikeMultiplier > 0
            ? ` | 🔥 ${item.volumeSpikeMultiplier}x Vol Spike`
            : "";
        const slope = item.linearSlope >= 0 ? `+${item.linearSlope.toFixed(1)}` : item.linearSlope.toFixed(1);
        const vol = (item.volatility * 100).toFixed(1);
        const predicted = formatGp(Math.round(item.predictedNextPrice));
        const alch = typeof item.highAlch === "number" && item.highAlch > 0
            ? `High Alch: ${formatGp(item.highAlch)} gp`
            : item.highAlch === false ? "High Alch: Not Alchable" : "High Alch: Unknown";
        const velocity = item.tradeVelocity;
        const rot = formatGp(item.returnOnTime);
        const histLen = item.priceHistory.length;
        const histNote = histLen < 3 ? " [LIMITED DATA]" : "";
        return `${rank}. ${item.name} | GE Price: ${price} gp | Buy ≤ ${recBuy} | Sell ≥ ${recSell} | Profit: ${flipPft} gp/ea | Limit: ${limit} | Eff. Vol: ${effVol} | Max 4H Capital: ${cap4h} | Tax Gap: ${formatGp(item.taxGap)} gp | ${alch} | Velocity: ${velocity} | ROT: ${rot} gp/hr | 30d Trend Slope: ${slope} | Volatility: ${vol}%${histNote} | Predicted 24h Price: ${predicted} gp${risk}${hype}`;
    });
    return [header, ...lines, divider].join("\n");
}
/**
 * Compact LLM serialisation — abbreviated field labels to reduce payload size.
 *
 * Header line explains the field order so each data line stays short.
 *
 * @param items - Pre-ranked items.
 * @returns Multi-line string optimised for minimal payload size.
 */
function formatForLLMCompact(items) {
    if (items.length === 0) {
        return "[No liquid items available — cache may be empty.]";
    }
    const header = `=== RS3 Grand Exchange — Top ${items.length} by Traded Value (unfiltered) ===`;
    const legend = "# Fields: Name | Price | Buy | Sell | Profit | Limit | EffVol | 4HCap | TaxGap | Alch | Velocity | ROT(gp/hr) | Slope | Vol% | Pred | Flags";
    const lines = items.map((item, idx) => {
        const rank = String(idx + 1).padStart(2, " ");
        const price = formatGp(item.price);
        const buy = formatGp(item.recBuyPrice);
        const sell = formatGp(item.recSellPrice);
        const profit = formatGp(item.estFlipProfit);
        const limit = item.buyLimit != null
            ? formatGp(item.buyLimit)
            : "?";
        const effVol = formatGp(item.effectivePlayerVolume);
        const cap4h = item.maxCapitalPer4H > 0
            ? formatGp(item.maxCapitalPer4H)
            : "?";
        const taxGap = formatGp(item.taxGap);
        const alch = typeof item.highAlch === "number" && item.highAlch > 0
            ? formatGp(item.highAlch)
            : item.highAlch === false ? "N/A" : "?";
        const velocity = item.tradeVelocity;
        const rot = formatGp(item.returnOnTime);
        const slope = item.linearSlope >= 0
            ? `+${item.linearSlope.toFixed(1)}`
            : item.linearSlope.toFixed(1);
        const vol = `${(item.volatility * 100).toFixed(1)}%`;
        const pred = formatGp(Math.round(item.predictedNextPrice));
        const flags = [];
        if (item.isRisky)
            flags.push("⚠RISKY");
        if (item.priceHistory.length < 3)
            flags.push("LIMITED-DATA");
        if (item.volumeSpikeMultiplier > 0)
            flags.push(`🔥${item.volumeSpikeMultiplier}x`);
        const flagStr = flags.length > 0 ? " " + flags.join(" ") : "";
        return `${rank}. ${item.name} | ${price} | ${buy} | ${sell} | ${profit} | ${limit} | ${effVol} | ${cap4h} | ${taxGap} | ${alch} | ${velocity} | ${rot} | ${slope} | ${vol} | ${pred}${flagStr}`;
    });
    return [header, legend, ...lines].join("\n");
}


/***/ },

/***/ "./services/marketMapCache.ts"
/*!************************************!*\
  !*** ./services/marketMapCache.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketMapCache: () => (/* binding */ MarketMapCache)
/* harmony export */ });
/* harmony import */ var _weirdGloopService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weirdGloopService */ "./services/weirdGloopService.ts");
/* harmony import */ var _dataEnricher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataEnricher */ "./services/dataEnricher.ts");
/**
 * @module MarketMapCache
 * TTL-cached scoring maps (avgVolume + priceHistory) used by the
 * market analyser to avoid redundant IndexedDB reads and API calls.
 *
 * Rebuilt from scratch when the cache is stale (10-minute TTL) or
 * after an explicit {@link invalidate} call.
 */


/** TTL for cached volume/price maps (10 minutes). */
const MAP_CACHE_TTL_MS = 10 * 60 * 1000;
/**
 * Manages TTL-cached `avgVolumeMap` and `priceHistoryMap` built from
 * IndexedDB history with a sparse-data API fallback.
 */
class MarketMapCache {
    constructor(cache) {
        this.cache = cache;
        this.cachedAvgVolumeMap = null;
        this.cachedPriceHistoryMap = null;
        this.mapCacheTimestamp = 0;
    }
    /** Invalidate the cached maps so the next call rebuilds them. */
    invalidate() {
        this.cachedAvgVolumeMap = null;
        this.cachedPriceHistoryMap = null;
        this.mapCacheTimestamp = 0;
    }
    /**
     * Return (possibly cached) avgVolumeMap and priceHistoryMap.
     * Rebuilds both if the cache is stale or empty.
     */
    async getOrBuild(days = 30) {
        if (!this.isStale()) {
            console.log("[MarketMapCache] Using cached scoring maps (age: " +
                `${((Date.now() - this.mapCacheTimestamp) / 1000).toFixed(0)}s).`);
            return {
                avgVolumeMap: this.cachedAvgVolumeMap,
                priceHistoryMap: this.cachedPriceHistoryMap,
            };
        }
        const avgVolumeMap = await this.buildAvgVolumeMap(days);
        const priceHistoryMap = await this.buildPriceHistoryMap(days);
        this.cachedAvgVolumeMap = avgVolumeMap;
        this.cachedPriceHistoryMap = priceHistoryMap;
        this.mapCacheTimestamp = Date.now();
        return { avgVolumeMap, priceHistoryMap };
    }
    /** Check whether the cached maps are still within their TTL. */
    isStale() {
        return !this.cachedAvgVolumeMap
            || !this.cachedPriceHistoryMap
            || (Date.now() - this.mapCacheTimestamp > MAP_CACHE_TTL_MS);
    }
    /**
     * Fetch recent history from IndexedDB and build a
     * `Map<itemName, averageVolume>` for volume-spike detection.
     *
     * With the v3 intraday schema, multiple records per day may exist.
     * We deduplicate by calendar day (taking the max volume per day) so
     * the SMA remains comparable to the legacy daily-keyed behaviour.
     */
    async buildAvgVolumeMap(days) {
        const map = new Map();
        try {
            const history = await this.cache.history.getRecentHistory(days);
            const today = new Date().toISOString().slice(0, 10);
            const grouped = new Map();
            for (const rec of history) {
                const day = rec.day ?? new Date(rec.timestamp).toISOString().slice(0, 10);
                if (day === today)
                    continue;
                const vol = Number(rec.volume) || 0;
                let dayMap = grouped.get(rec.name);
                if (!dayMap) {
                    dayMap = new Map();
                    grouped.set(rec.name, dayMap);
                }
                const existing = dayMap.get(day) ?? 0;
                if (vol > existing)
                    dayMap.set(day, vol);
            }
            for (const [name, dayMap] of grouped) {
                const vols = [...dayMap.values()];
                const avg = vols.reduce((s, v) => s + v, 0) / vols.length;
                map.set(name, avg);
            }
            console.log(`[MarketMapCache] SMA map built from ${history.length} history rows (${map.size} items).`);
        }
        catch (err) {
            console.warn("[MarketMapCache] Could not build SMA map — spike detection disabled.", err);
        }
        return map;
    }
    /**
     * Build a `Map<itemName, number[]>` of chronological daily prices
     * for sparkline rendering.  Each array contains one price per past day
     * (does **not** include today — the caller appends the current price).
     *
     * When local IndexedDB history is sparse, falls back to the Weird Gloop
     * `last90d` API to progressively build history across visits.
     */
    async buildPriceHistoryMap(days) {
        const map = new Map();
        try {
            const history = await this.cache.history.getRecentHistory(days);
            const today = new Date().toISOString().slice(0, 10);
            const grouped = new Map();
            for (const rec of history) {
                const day = rec.day ?? new Date(rec.timestamp).toISOString().slice(0, 10);
                if (day === today)
                    continue;
                let dayMap = grouped.get(rec.name);
                if (!dayMap) {
                    dayMap = new Map();
                    grouped.set(rec.name, dayMap);
                }
                const existing = dayMap.get(day);
                if (!existing || rec.timestamp > existing.ts) {
                    dayMap.set(day, { price: rec.price, ts: rec.timestamp });
                }
            }
            for (const [name, dayMap] of grouped) {
                const sorted = [...dayMap.entries()]
                    .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
                map.set(name, sorted.map(([, v]) => v.price));
            }
            // ── Sparse-data fallback ──────────────────────────────────────────
            const HISTORY_RECENCY_MS = 7 * 24 * 60 * 60 * 1000;
            const now = Date.now();
            const itemsWithSufficient = [...grouped.entries()]
                .filter(([, dayMap]) => {
                if (dayMap.size < 2)
                    return false;
                let newest = "";
                for (const [, { ts }] of dayMap) {
                    if (ts > newest)
                        newest = ts;
                }
                return newest !== "" && (now - new Date(newest).getTime()) <= HISTORY_RECENCY_MS;
            }).length;
            const sparse = itemsWithSufficient < 1000;
            if (!sparse) {
                console.log(`[MarketMapCache] History coverage OK: ${itemsWithSufficient}/1000 items have ≥ 2 days — skipping API fallback.`);
            }
            if (sparse) {
                const allItems = await this.cache.getAll();
                const allNames = allItems.map((r) => r.name);
                const needsHistory = allNames.filter((n) => {
                    const dayMap = grouped.get(n);
                    if (!dayMap || dayMap.size < 2)
                        return true;
                    let newest = "";
                    for (const [, { ts }] of dayMap) {
                        if (ts > newest)
                            newest = ts;
                    }
                    return newest === "" || (now - new Date(newest).getTime()) > HISTORY_RECENCY_MS;
                });
                // Shuffle to avoid alphabetical starvation.
                for (let i = needsHistory.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [needsHistory[i], needsHistory[j]] = [needsHistory[j], needsHistory[i]];
                }
                const SPARSE_CAP = 50;
                const namesToFetch = needsHistory.length > SPARSE_CAP
                    ? needsHistory.slice(0, SPARSE_CAP)
                    : needsHistory;
                console.log(`[MarketMapCache] Local price history is sparse (${itemsWithSufficient}/1000 items have ≥ 2 days) ` +
                    `— fetching ${namesToFetch.length} items from Weird Gloop API…`);
                const apiMap = await (0,_dataEnricher__WEBPACK_IMPORTED_MODULE_1__.fetchSparseHistory)(namesToFetch, days, new _weirdGloopService__WEBPACK_IMPORTED_MODULE_0__.WeirdGloopService(), this.cache.history);
                for (const [name, prices] of apiMap) {
                    if (!map.has(name) || (map.get(name).length < prices.length)) {
                        map.set(name, prices);
                    }
                }
            }
        }
        catch (err) {
            console.warn("[MarketMapCache] Could not build price history map.", err);
        }
        return map;
    }
}


/***/ },

/***/ "./services/newsService.ts"
/*!*********************************!*\
  !*** ./services/newsService.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsService: () => (/* binding */ NewsService)
/* harmony export */ });
/**
 * @module NewsService
 * Fetches recent RS3 game update news from the RS Wiki MediaWiki API.
 *
 * Responsibilities:
 *  - Query the `Category:Game_updates` category for the most recent update
 *    page titles and their publication dates.
 *  - Cache results with a configurable TTL so repeated chat messages
 *    don't hammer the wiki.
 *  - Format a compact news digest string suitable for injection into the
 *    LLM user message, enabling the advisor to correlate price movements
 *    with real game events.
 *
 * Uses only the native browser `fetch` API — no external dependencies.
 *
 * @see https://runescape.wiki/api.php (MediaWiki API sandbox)
 */
// ─── Constants ──────────────────────────────────────────────────────────────
/** RS Wiki MediaWiki API base URL. */
const WIKI_API = "https://runescape.wiki/api.php";
/** Default number of recent game updates to fetch. */
const DEFAULT_COUNT = 15;
/** Cache lifetime — 2 hours. News doesn't change that frequently. */
const CACHE_TTL_MS = 2 * 60 * 60 * 1000;
// ─── Service ────────────────────────────────────────────────────────────────
/**
 * Service that retrieves recent RS3 game update headlines from the
 * official RuneScape Wiki.
 *
 * Results are cached in-memory with a 2-hour TTL to minimise API calls.
 *
 * @example
 * ```ts
 * const news = new NewsService();
 * const items = await news.getRecentNews();
 * const context = news.formatForLLM(items);
 * ```
 */
class NewsService {
    constructor() {
        /** In-memory news cache. */
        this.cache = [];
        /** Epoch-ms timestamp of the last successful fetch. */
        this.cacheTime = 0;
    }
    /**
     * Fetch the most recent RS3 game update titles and dates.
     *
     * Uses the MediaWiki `list=categorymembers` API against
     * `Category:Game_updates` sorted newest-first.  Results are cached
     * for {@link CACHE_TTL_MS} and served from memory on subsequent calls.
     *
     * @param count - Maximum number of updates to return (default 15).
     * @returns An array of {@link NewsItem} objects, newest first.
     */
    async getRecentNews(count = DEFAULT_COUNT) {
        if (this.cache.length > 0 && Date.now() - this.cacheTime < CACHE_TTL_MS) {
            return this.cache.slice(0, count);
        }
        const url = `${WIKI_API}?action=query&list=categorymembers` +
            `&cmtitle=Category:Game_updates&cmsort=timestamp&cmdir=desc` +
            `&cmlimit=${count}&cmprop=title|timestamp&format=json`;
        const resp = await fetch(url);
        if (!resp.ok) {
            console.warn(`[NewsService] Wiki API error: ${resp.status}`);
            return this.cache; // return stale cache on failure
        }
        const json = await resp.json();
        const members = json?.query?.categorymembers ?? [];
        this.cache = members.map((m) => ({
            title: (m.title ?? "").replace(/^Update:/, ""),
            date: m.timestamp ? m.timestamp.slice(0, 10) : "Unknown",
        }));
        this.cacheTime = Date.now();
        console.log(`[NewsService] Fetched ${this.cache.length} recent game updates.`);
        return this.cache.slice(0, count);
    }
    /**
     * Format news items into a compact string block suitable for inclusion
     * in an LLM user message.
     *
     * @param items - News items (from {@link getRecentNews}).
     * @returns A formatted string, or empty string if no items.
     */
    formatForLLM(items) {
        if (items.length === 0)
            return "";
        const lines = items.map((n) => `[${n.date}] ${n.title}`);
        return [
            "=== RECENT RS3 NEWS & GAME UPDATES ===",
            "Use these to explain potential causes of price movements:",
            ...lines,
        ].join("\n");
    }
}


/***/ },

/***/ "./services/portfolioAnalytics.ts"
/*!****************************************!*\
  !*** ./services/portfolioAnalytics.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computePortfolioStats: () => (/* binding */ computePortfolioStats)
/* harmony export */ });
/**
 * @module services/portfolioAnalytics
 * Pure-function statistics over completed flip history.
 *
 * Extracted from {@link PortfolioService} to honour SRP — the service owns
 * CRUD + persistence while this module owns the read-only aggregation math.
 */
/**
 * Aggregate statistics across a set of completed flips.
 *
 * @param flips - The completed-flip array (order does not matter).
 * @returns A {@link PortfolioStats} summary. Returns zeroed stats when the
 *          array is empty.
 */
function computePortfolioStats(flips) {
    const total = flips.length;
    if (total === 0) {
        return { totalProfit: 0, totalFlips: 0, avgProfit: 0, avgRoi: 0 };
    }
    let profit = 0;
    let totalCost = 0;
    for (const f of flips) {
        profit += f.realizedProfit;
        totalCost += f.buyPrice * f.quantity;
    }
    return {
        totalProfit: profit,
        totalFlips: total,
        avgProfit: Math.round(profit / total),
        avgRoi: totalCost > 0 ? profit / totalCost : 0,
    };
}


/***/ },

/***/ "./services/portfolioService.ts"
/*!**************************************!*\
  !*** ./services/portfolioService.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioService: () => (/* binding */ PortfolioService)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./services/utils.ts");
/* harmony import */ var _portfolioAnalytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolioAnalytics */ "./services/portfolioAnalytics.ts");
/**
 * @module PortfolioService
 * Manages the user's active flip portfolio with localStorage persistence.
 *
 * Responsibilities:
 *  - CRUD operations on {@link ActiveFlip} records.
 *  - Automatic persistence to `localStorage` on every mutation.
 *  - UUID generation without external dependencies.
 */


/** `localStorage` key for the serialised active portfolio. */
const LS_KEY = "ger:portfolio";
/** `localStorage` key for the serialised completed-flip history. */
const LS_HISTORY_KEY = "ger:portfolio-history";
/**
 * Service that tracks active GE flips and persists them across sessions.
 *
 * @example
 * ```ts
 * const portfolio = new PortfolioService();
 * portfolio.addFlip("Blue partyhat", 2_140_000_000, 1, 2_200_000_000);
 * console.log(portfolio.getFlips());
 * ```
 */
class PortfolioService {
    constructor() {
        /** In-memory flip store, kept in sync with localStorage. */
        this.flips = [];
        /** In-memory completed-flip ledger, kept in sync with localStorage. */
        this.completedFlips = [];
        this.load();
        this.loadHistory();
    }
    // ─── Public API ─────────────────────────────────────────────────────
    /**
     * Return a shallow copy of all tracked flips (newest first).
     */
    getFlips() {
        return [...this.flips];
    }
    /**
     * Record a new flip and persist the change.
     *
     * @param itemName        - Canonical RS3 item name.
     * @param buyPrice        - Per-item buy price in gp.
     * @param quantity        - Number of items in this offer.
     * @param targetSellPrice - Per-item target sell price in gp.
     * @param buySnapshot     - Optional market snapshot at the time of purchase.
     * @returns The newly created {@link ActiveFlip}.
     */
    addFlip(itemName, buyPrice, quantity, targetSellPrice, buySnapshot) {
        const flip = {
            id: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.uuid)(),
            itemName,
            buyPrice,
            quantity,
            targetSellPrice,
            timestamp: Date.now(),
            buySnapshot,
        };
        this.flips.unshift(flip);
        this.save();
        return flip;
    }
    /**
     * Update editable fields on an active flip and persist the change.
     *
     * Only `buyPrice`, `quantity`, and `targetSellPrice` may be patched.
     *
     * @returns The updated flip, or `undefined` if the ID was not found.
     */
    updateFlip(id, updates) {
        const flip = this.flips.find((f) => f.id === id);
        if (!flip)
            return undefined;
        if (updates.buyPrice != null && updates.buyPrice > 0)
            flip.buyPrice = updates.buyPrice;
        if (updates.quantity != null && updates.quantity > 0)
            flip.quantity = Math.round(updates.quantity);
        if (updates.targetSellPrice != null && updates.targetSellPrice > 0)
            flip.targetSellPrice = updates.targetSellPrice;
        this.save();
        return flip;
    }
    /**
     * Remove a flip by its unique ID and persist the change.
     *
     * @returns `true` if a flip was found and removed, `false` otherwise.
     */
    removeFlip(id) {
        const before = this.flips.length;
        this.flips = this.flips.filter((f) => f.id !== id);
        if (this.flips.length !== before) {
            this.save();
            return true;
        }
        return false;
    }
    /**
     * Mark an active flip as completed, calculate realised profit, and move it
     * to the history ledger.
     *
     * Tax is rounded DOWN per item per official wiki mechanics (exempt ≤50 gp).
     * When `alched` is `true`, no GE tax is applied — profit is simply
     * `(actualSellPrice × quantity) − (buyPrice × quantity)`.
     *
     * @param id              - Unique ID of the active flip to complete.
     * @param actualSellPrice - The per-item price the flip was actually sold at (or High Alch value when alched).
     * @param sellSnapshot    - Optional market snapshot at the time of sale.
     * @param alched          - If `true`, marks this as a High Alch exit (no GE tax).
     * @returns The completed flip record, or `undefined` if the ID was not found.
     */
    completeFlip(id, actualSellPrice, sellSnapshot, alched) {
        const idx = this.flips.findIndex((f) => f.id === id);
        if (idx === -1)
            return undefined;
        const active = this.flips[idx];
        const realizedProfit = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.computeFlipProfit)(actualSellPrice, active.buyPrice, active.quantity, !!alched);
        const completed = {
            ...active,
            actualSellPrice,
            completedAt: Date.now(),
            realizedProfit,
            sellSnapshot,
            ...(alched ? { alched: true } : {}),
        };
        // Move from active → history.
        this.flips.splice(idx, 1);
        this.completedFlips.unshift(completed);
        this.save();
        this.saveHistory();
        return completed;
    }
    /**
     * Return a shallow copy of all completed flips (newest first).
     */
    getCompletedFlips() {
        return [...this.completedFlips];
    }
    /**
     * Remove a completed flip from the history ledger (e.g. accidental completion).
     *
     * @returns `true` if a flip was found and removed, `false` otherwise.
     */
    removeCompletedFlip(id) {
        const before = this.completedFlips.length;
        this.completedFlips = this.completedFlips.filter((f) => f.id !== id);
        if (this.completedFlips.length !== before) {
            this.saveHistory();
            return true;
        }
        return false;
    }
    /**
     * Update editable fields on a completed flip and recalculate realised profit.
     *
     * Respects the `alched` flag: alched flips skip the 2 % GE tax.
     *
     * @returns The updated completed flip, or `undefined` if the ID was not found.
     */
    updateCompletedFlip(id, updates) {
        const flip = this.completedFlips.find((f) => f.id === id);
        if (!flip)
            return undefined;
        if (updates.buyPrice != null && updates.buyPrice > 0)
            flip.buyPrice = updates.buyPrice;
        if (updates.quantity != null && updates.quantity > 0)
            flip.quantity = Math.round(updates.quantity);
        if (updates.actualSellPrice != null && updates.actualSellPrice > 0)
            flip.actualSellPrice = updates.actualSellPrice;
        // Recalculate realised profit with current values.
        flip.realizedProfit = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.computeFlipProfit)(flip.actualSellPrice, flip.buyPrice, flip.quantity, !!flip.alched);
        this.saveHistory();
        return flip;
    }
    /**
     * Aggregate statistics across the completed-flip history.
     */
    getPortfolioStats() {
        return (0,_portfolioAnalytics__WEBPACK_IMPORTED_MODULE_1__.computePortfolioStats)(this.completedFlips);
    }
    // ─── Persistence ────────────────────────────────────────────────────
    /** Serialise the current flip array to localStorage. */
    save() {
        persistJson(LS_KEY, this.flips, "portfolio");
    }
    /** Hydrate from localStorage on construction. */
    load() {
        const parsed = loadJson(LS_KEY, "portfolio");
        if (parsed)
            this.flips = parsed;
    }
    /** Serialise the completed-flip history to localStorage. */
    saveHistory() {
        persistJson(LS_HISTORY_KEY, this.completedFlips, "history");
    }
    /** Hydrate completed-flip history from localStorage on construction. */
    loadHistory() {
        const parsed = loadJson(LS_HISTORY_KEY, "history");
        if (parsed)
            this.completedFlips = parsed;
    }
}
// ─── Helpers ────────────────────────────────────────────────────────────────
/** Safely write a JSON-serialisable value to localStorage. */
function persistJson(key, data, label) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    }
    catch (err) {
        console.warn(`[PortfolioService] Failed to persist ${label}:`, err);
    }
}
/** Safely read and parse a JSON array from localStorage. Returns `null` on failure. */
function loadJson(key, label) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw)
            return null;
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : null;
    }
    catch (err) {
        console.warn(`[PortfolioService] Failed to load ${label}:`, err);
        return null;
    }
}


/***/ },

/***/ "./services/rateLimiter.ts"
/*!*********************************!*\
  !*** ./services/rateLimiter.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateLimiter: () => (/* binding */ RateLimiter)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./services/utils.ts");
/**
 * @module services/rateLimiter
 * Centralised rate-limit, retry, and request-pacing logic extracted from
 * {@link WeirdGloopService}.
 *
 * All state is **static** so it is shared across every service instance in
 * the same browser session — a 429 in one API call pauses all subsequent
 * requests regardless of the caller.
 */

/**
 * Static rate-limiter that gates outbound HTTP requests to avoid 429s from
 * the Weird Gloop API (or any other rate-limited endpoint).
 *
 * Three layers of defence from burst to recovery:
 *  1. **Global request gate** — hard ≥{@link MIN_REQUEST_INTERVAL_MS} floor
 *     between consecutive requests (~10 req/s at 100 ms).
 *  2. **Proactive batch pause** — every {@link BATCH_PAUSE_EVERY} requests,
 *     inject a longer cooldown.
 *  3. **Shared 429 cooldown** — on any 429 / network error, all callers
 *     block until the cooldown expires.
 */
class RateLimiter {
    // ── Public helpers ────────────────────────────────────────────────────
    /**
     * Acquire the global rate-limit gate.
     * Guarantees at least {@link MIN_REQUEST_INTERVAL_MS} between any two
     * requests, regardless of how many callers are active.
     */
    static async acquireRequestSlot() {
        const now = Date.now();
        if (now < RateLimiter.nextRequestAt) {
            await RateLimiter.sleep(RateLimiter.nextRequestAt - now);
        }
        // Reserve the next slot from whichever is later — now or the
        // previously scheduled slot — so back-to-back acquires don't
        // collapse into the same instant.
        RateLimiter.nextRequestAt =
            Math.max(Date.now(), RateLimiter.nextRequestAt) +
                RateLimiter.MIN_REQUEST_INTERVAL_MS;
    }
    /**
     * Fetch a URL with automatic retry + exponential backoff on 429 and
     * transient network errors.  Returns `null` when all retries are
     * exhausted so callers can degrade gracefully.
     *
     * @param url        - Fully-qualified URL to request.
     * @param maxRetries - Override for {@link MAX_RETRIES}.
     * @returns The successful `Response`, or `null` after all attempts fail.
     */
    static async fetchWithRetry(url, maxRetries = RateLimiter.MAX_RETRIES) {
        for (let attempt = 0; attempt <= maxRetries; attempt++) {
            try {
                const resp = await fetch(url, {
                    method: "GET",
                    headers: _utils__WEBPACK_IMPORTED_MODULE_0__.JSON_ACCEPT_HEADER,
                });
                if (resp.ok)
                    return resp;
                // Rate-limited — signal all callers to pause, then back off and retry.
                if (resp.status === 429) {
                    const delay = RateLimiter.BACKOFF_BASE_MS * Math.pow(2, attempt);
                    RateLimiter.rateLimitCooldownUntil = Math.max(RateLimiter.rateLimitCooldownUntil, Date.now() + delay + 5000);
                    console.warn(`[RateLimiter] 429 rate-limited (attempt ${attempt + 1}/${maxRetries + 1}). ` +
                        `Waiting ${(delay / 1000).toFixed(1)}s before retry…`);
                    await RateLimiter.sleep(delay);
                    continue;
                }
                // Non-retryable HTTP error.
                console.error(`[RateLimiter] HTTP ${resp.status} for ${url.slice(0, 120)}`);
                return null;
            }
            catch (err) {
                // Network error — typically a 429 whose CORS headers the server
                // omitted, causing the browser to block before we see the status.
                const delay = RateLimiter.BACKOFF_BASE_MS * Math.pow(2, attempt);
                RateLimiter.rateLimitCooldownUntil = Math.max(RateLimiter.rateLimitCooldownUntil, Date.now() + delay + 5000);
                console.warn(`[RateLimiter] Network error (attempt ${attempt + 1}/${maxRetries + 1}). ` +
                    `Waiting ${(delay / 1000).toFixed(1)}s… [${err.message}]`);
                await RateLimiter.sleep(delay);
            }
        }
        console.error(`[RateLimiter] All ${maxRetries + 1} attempts failed for ${url.slice(0, 120)}`);
        return null;
    }
    /** Promise-based sleep helper. */
    static sleep(ms) {
        return new Promise((r) => setTimeout(r, ms));
    }
}
// ── Constants ─────────────────────────────────────────────────────────
/** Maximum retry attempts on 429 / transient errors. */
RateLimiter.MAX_RETRIES = 4;
/** Base delay (ms) for exponential backoff — doubled on each retry. */
RateLimiter.BACKOFF_BASE_MS = 2000;
/**
 * Minimum interval (ms) between ANY two requests, across all callers.
 * Primary rate-limit control — do not lower below 100 ms (85 ms
 * triggers 429s).
 */
RateLimiter.MIN_REQUEST_INTERVAL_MS = 100;
/** Proactive pause every N history requests. */
RateLimiter.BATCH_PAUSE_EVERY = 60;
/** Pause duration (ms) when the batch threshold is reached. */
RateLimiter.BATCH_PAUSE_MS = 6000;
/** Reset the global counter if this much idle time passes between calls. */
RateLimiter.WINDOW_RESET_MS = 30000;
// ── Shared mutable state (persists for browser session lifetime) ──────
/** Earliest time (epoch ms) the next request may fire. */
RateLimiter.nextRequestAt = 0;
/** Running count of requests in the current rate-limit window. */
RateLimiter.globalHistReqCount = 0;
/** Timestamp of the last proactive batch pause. */
RateLimiter.globalLastPauseTs = 0;
/**
 * Shared cooldown timestamp — set by {@link fetchWithRetry} on 429/network
 * error.  All callers sleep until this timestamp passes.
 */
RateLimiter.rateLimitCooldownUntil = 0;


/***/ },

/***/ "./services/scoringEngine.ts"
/*!***********************************!*\
  !*** ./services/scoringEngine.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROT_FILL_FACTOR: () => (/* binding */ ROT_FILL_FACTOR),
/* harmony export */   scoreItems: () => (/* binding */ scoreItems)
/* harmony export */ });
/* harmony import */ var _timeSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeSeries */ "./services/timeSeries.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./services/utils.ts");
/**
 * @module services/scoringEngine
 * Pure-function scoring pipeline extracted from {@link MarketAnalyzerService}.
 *
 * Computes player-constrained liquidity scores, filters items by volume/price
 * bounds, and returns fully-populated {@link RankedItem} objects. The function
 * is deterministic (same inputs → same outputs) with no side-effects — all
 * network I/O and caching stay in the calling service.
 */


/**
 * Fill-rate factor for ROT estimation — a single player rarely captures
 * 100 % of hourly GE volume.  0.7 is a conservative middle-ground.
 */
const ROT_FILL_FACTOR = 0.7;
/**
 * Compute player-constrained liquidity scores and apply all filters.
 *
 * For each record:
 *  - `effectivePlayerVolume = min(globalVolume, buyLimit × 6)`
 *    (falls back to `globalVolume` when `buyLimit` is unknown)
 *  - `maxCapitalPer4H = price × buyLimit` (0 when unknown)
 *  - `tradedValue = price × effectivePlayerVolume` (player-constrained)
 *
 * Volume filters (`minVolume` / `maxVolume`) are applied against the
 * **global daily GE volume** so that preset filters (High / Low)
 * reflect actual market liquidity rather than a single player's
 * buy-limit-constrained throughput.
 *
 * @param records         - Raw records from the cache.
 * @param minVolume       - Minimum global daily volume (inclusive lower bound).
 * @param maxVolume       - Maximum global daily volume (0 = no cap).
 * @param maxPrice        - Maximum item price in gp (0 = no cap).
 * @param avgVolumeMap    - Map of item name → 7-day SMA volume.
 * @param priceHistoryMap - Map of item name → chronological daily prices (excl. today).
 * @returns Scored items that pass all filters.
 */
function scoreItems(records, minVolume, maxVolume, maxPrice, avgVolumeMap, priceHistoryMap) {
    const result = [];
    for (const record of records) {
        const globalVol = Number(record.volume) || 0;
        const limit = record.buyLimit != null && record.buyLimit > 0
            ? record.buyLimit
            : undefined;
        // Player-constrained daily volume: 6 × 4-hour windows per day.
        const dailyPlayerLimit = limit != null ? limit * 6 : globalVol;
        const effectivePlayerVolume = Math.min(globalVol, dailyPlayerLimit);
        // Apply filters against raw global daily volume so that High / Low
        // presets meaningfully distinguish market liquidity tiers.
        if (globalVol <= minVolume)
            continue;
        if (maxVolume > 0 && globalVol > maxVolume)
            continue;
        if (maxPrice > 0 && record.price > maxPrice)
            continue;
        const maxCapitalPer4H = limit != null ? record.price * limit : 0;
        // Tax gap: minimum spread (in gp) needed to break even after 2% GE tax.
        // Use floor-based tax to match the official RS3 engine rounding.
        const breakEvenSell = Math.ceil(record.price / 0.98);
        const breakEvenTax = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.calculateGETax)(breakEvenSell);
        const taxGap = breakEvenTax + (breakEvenSell - record.price - breakEvenTax);
        // Recommended buy price: ~1% below current GE mid-price.
        const recBuyPrice = Math.max(1, Math.floor(record.price * 0.99));
        // Recommended sell price: high enough above the buy price to cover
        // the 2% GE tax and still yield a meaningful margin.
        // Target: sell at ~3% above mid-price → ~2% spread after tax.
        let recSellPrice = Math.max(recBuyPrice + 1, Math.ceil(record.price * 1.03));
        // High Alchemy floor: never recommend selling below the alch value.
        recSellPrice = Math.max(recSellPrice, typeof record.highAlch === "number" ? record.highAlch : 0);
        // Estimated per-item flip profit: sell − buy − 2% GE tax on the sale.
        // Official RS3 wiki formula: floor(price * 2%), exempt at ≤ 50 gp.
        const expectedTax = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.calculateGETax)(recSellPrice);
        const estFlipProfit = recSellPrice - recBuyPrice - expectedTax;
        // Risk flag: only cheap items (< 500 gp) where the absolute tax
        // gap is large relative to realistic spreads.
        const isRisky = record.price < 500;
        // Volume spike: compare today's volume to the 7-day SMA.
        const avgVol = avgVolumeMap.get(record.name);
        let volumeSpikeMultiplier = 0;
        if (avgVol != null && avgVol > 0 && globalVol > avgVol * 1.5) {
            volumeSpikeMultiplier = +((globalVol / avgVol).toFixed(1));
        }
        // Price history sparkline data: historical prices + today.
        const histPrices = priceHistoryMap.get(record.name) ?? [];
        const priceHistory = [...histPrices, record.price];
        // ── Time-series indicators (30-day window) ────────────────────────
        const ema30d = (0,_timeSeries__WEBPACK_IMPORTED_MODULE_0__.calculateEMA)(priceHistory);
        const volatility = (0,_timeSeries__WEBPACK_IMPORTED_MODULE_0__.calculateVolatility)(priceHistory);
        const { slope: linearSlope, predictedNext: predictedNextPrice } = (0,_timeSeries__WEBPACK_IMPORTED_MODULE_0__.calculateLinearTrend)(priceHistory);
        // 7-day price momentum: classify trend based on overall % change.
        let priceTrend = "Stable";
        if (priceHistory.length >= 2 && priceHistory[0] > 0) {
            const percentChange = (record.price - priceHistory[0]) / priceHistory[0];
            if (percentChange < -0.05)
                priceTrend = "Downtrend";
            else if (percentChange > 0.05)
                priceTrend = "Uptrend";
        }
        // Trade velocity: qualitative speed tier based on hourly volume vs buy limit.
        const hourlyVolume = Math.floor(globalVol / 24);
        const safeBuyLimit = (limit != null && limit > 0) ? limit : 0;
        let tradeVelocity;
        if (hourlyVolume > 5000 || (safeBuyLimit > 0 && hourlyVolume > safeBuyLimit * 5)) {
            tradeVelocity = "Insta-Flip";
        }
        else if (hourlyVolume > 500 || (safeBuyLimit > 0 && hourlyVolume > safeBuyLimit)) {
            tradeVelocity = "Active";
        }
        else if (hourlyVolume > 50) {
            tradeVelocity = "Slow";
        }
        else {
            tradeVelocity = "Very Slow";
        }
        // ── Return on Time (ROT) — gp/hr estimate ────────────────────────
        // ROT = estFlipProfit × estHourlyFillRate × fillFactor.
        // Hourly fill rate is globalVol / 24 (best available estimate from
        // the Weird Gloop rolling-24h volume — RS3 has no sub-daily API).
        const estHourlyFillRate = globalVol / 24;
        const returnOnTime = safeBuyLimit > 0 && estHourlyFillRate > 0
            ? Math.round(estFlipProfit * estHourlyFillRate * ROT_FILL_FACTOR)
            : 0;
        // ── Scoring adjustments based on predictive indicators ──────────
        let tradedValue = record.price * effectivePlayerVolume;
        // Reward upward-trending items (positive linear slope).
        if (linearSlope > 0)
            tradedValue *= 1.05;
        // Penalise highly volatile items (daily σ > 10 %).
        if (volatility > 0.10)
            tradedValue *= 0.90;
        // ── Data confidence indicators ──────────────────────────────────
        const historyDepth = priceHistory.length;
        const dataAgeMinutes = record.fetchedAt
            ? Math.round((Date.now() - record.fetchedAt) / 60000)
            : 0;
        const trendReliability = historyDepth >= 30 ? "High" : historyDepth >= 7 ? "Medium" : "Low";
        result.push({
            name: record.name,
            itemId: record.id,
            price: record.price,
            recBuyPrice,
            volume: globalVol,
            tradedValue,
            buyLimit: record.buyLimit,
            effectivePlayerVolume,
            maxCapitalPer4H,
            taxGap,
            recSellPrice,
            estFlipProfit,
            isRisky,
            volumeSpikeMultiplier,
            tradeVelocity,
            priceHistory,
            priceTrend,
            ema30d,
            volatility,
            returnOnTime,
            linearSlope,
            predictedNextPrice,
            highAlch: record.highAlch,
            historyDepth,
            dataAgeMinutes,
            trendReliability,
        });
    }
    return result;
}


/***/ },

/***/ "./services/seedItems.ts"
/*!*******************************!*\
  !*** ./services/seedItems.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SEED_ITEMS: () => (/* binding */ SEED_ITEMS)
/* harmony export */ });
/**
 * @module services/seedItems
 * Curated seed list of heavily-traded RS3 items used to bootstrap the
 * database on first run when the daily baseline is unavailable.
 *
 * These names must be **exact** canonical RS Wiki titles.
 * Verify via `https://api.weirdgloop.org/exchange/history/rs/last90d?name=<encoded>`
 * before adding new entries.
 */
const SEED_ITEMS = [
    // ── Rares & Discontinued ──────────────────────────────────────────────
    "Blue partyhat",
    "Red partyhat",
    "Green partyhat",
    "Yellow partyhat",
    "Purple partyhat",
    "White partyhat",
    "Christmas cracker",
    "Santa hat",
    "Green hallowe'en mask",
    "Red hallowe'en mask",
    "Blue hallowe'en mask",
    "Easter egg",
    "Pumpkin",
    "Disk of returning",
    "Black Santa hat",
    "Fish mask",
    // ── High-volume Skilling Supplies ─────────────────────────────────────
    "Raw shark",
    "Shark",
    "Raw rocktail",
    "Rocktail",
    "Raw sailfish",
    "Sailfish",
    "Raw lobster",
    "Lobster",
    "Raw swordfish",
    "Swordfish",
    "Grimy dwarf weed",
    "Clean dwarf weed",
    "Grimy lantadyme",
    "Clean lantadyme",
    "Grimy torstol",
    "Clean torstol",
    "Grimy snapdragon",
    "Clean snapdragon",
    "Grimy ranarr",
    "Clean ranarr",
    "Grimy kwuarm",
    "Clean kwuarm",
    "Grimy cadantine",
    "Clean cadantine",
    "Grimy avantoe",
    "Clean avantoe",
    "Grimy toadflax",
    "Clean toadflax",
    "Grimy irit",
    "Clean irit",
    "Grimy spirit weed",
    "Clean spirit weed",
    "Magic logs",
    "Elder logs",
    "Yew logs",
    "Maple logs",
    "Willow logs",
    "Coal",
    "Mithril ore",
    "Adamantite ore",
    "Luminite",
    "Runite ore",
    "Gold ore",
    "Iron ore",
    "Silver ore",
    "Copper ore",
    "Tin ore",
    "Banite ore",
    "Orichalcite ore",
    "Drakolith",
    "Phasmatite",
    "Necrite ore",
    "Light animica",
    "Dark animica",
    "Pure essence",
    "Rune essence",
    "Flax",
    "Bowstring",
    "Uncut diamond",
    "Uncut ruby",
    "Uncut emerald",
    "Uncut sapphire",
    "Diamond",
    "Ruby",
    "Emerald",
    "Sapphire",
    "Crystal flask",
    "Potion flask",
    "Vial of water",
    "Feather",
    // ── Potions & Consumables ─────────────────────────────────────────────
    "Super restore (4)",
    "Prayer potion (4)",
    "Saradomin brew (4)",
    "Weapon poison+++ (4)",
    "Aggression potion (4)",
    "Super antifire (4)",
    "Prayer renewal (4)",
    "Extreme attack (4)",
    "Extreme strength (4)",
    "Extreme defence (4)",
    "Extreme magic (4)",
    "Extreme ranging (4)",
    "Super prayer (4)",
    "Summoning potion (4)",
    "Antifire (4)",
    "Super attack (4)",
    "Super strength (4)",
    "Super defence (4)",
    "Super magic potion (4)",
    "Super ranging potion (4)",
    "Rocktail soup",
    "Sailfish soup",
    "Summer pie",
    // ── Runes ─────────────────────────────────────────────────────────────
    "Blood rune",
    "Death rune",
    "Soul rune",
    "Nature rune",
    "Astral rune",
    "Law rune",
    "Fire rune",
    "Water rune",
    "Air rune",
    "Earth rune",
    "Body rune",
    "Mind rune",
    "Chaos rune",
    "Cosmic rune",
    "Mud rune",
    "Dust rune",
    "Lava rune",
    "Steam rune",
    "Smoke rune",
    "Mist rune",
    "Armadyl rune",
    // ── PvM Drops & Salvage ───────────────────────────────────────────────
    "Dragonfire shield",
    "Abyssal whip",
    "Dark bow",
    "Dragon Rider lance",
    "Noxious scythe",
    "Noxious staff",
    "Noxious longbow",
    "Ascension crossbow",
    "Virtus mask",
    "Virtus robe top",
    "Virtus robe legs",
    "Torva full helm",
    "Torva platebody",
    "Torva platelegs",
    "Pernix cowl",
    "Pernix body",
    "Pernix chaps",
    "Malevolent helm",
    "Malevolent cuirass",
    "Malevolent greaves",
    "Seren godbow",
    "Staff of Sliske",
    "Zaros godsword",
    "Praesul codex",
    "Inquisitor staff",
    "Masterwork platebody",
    "Masterwork platelegs",
    "Masterwork helm",
    "Masterwork boots",
    "Masterwork gloves",
    "Trimmed masterwork platebody",
    "Trimmed masterwork platelegs",
    "Trimmed masterwork helm",
    "Trimmed masterwork boots",
    "Trimmed masterwork gloves",
    "Eldritch crossbow",
    "Blightbound crossbow",
    "Fractured Staff of Armadyl",
    "Scripture of Jas",
    "Scripture of Wen",
    "Scripture of Ful",
    "Cinderbane gloves",
    "Laceration boots",
    "Fleeting boots",
    "Blast diffusion boots",
    "Essence of Finality amulet",
    "Amulet of souls",
    "Reaper necklace",
    "Deathtouch bracelet",
    "Ring of death",
    "Luck of the Dwarves",
    // ── Summoning & Misc ──────────────────────────────────────────────────
    "Spirit shards",
    "Pouch",
    "Pack yak pouch",
    "Water talisman",
    "Fire talisman",
    "Yak-hide",
    "Unicorn horn",
    "Swamp tar",
    // ── Alchable / Margin Items ───────────────────────────────────────────
    "Battlestaff",
    "Onyx",
    "Uncut onyx",
    "Onyx bolts (e)",
    "Rune bar",
    "Adamant bar",
    "Mithril bar",
    "Steel bar",
    "Iron bar",
    "Bronze bar",
    "Gold bar",
    "Bane bar",
    "Elder rune bar",
    "Orikalkum bar",
    "Necronium bar",
    "Hydrix",
    "Uncut dragonstone",
    "Dragonstone",
    "Bond",
    "Cannonball",
    "Broad arrowheads",
    "Dragon bones",
    "Frost dragon bones",
    "Dinosaur bones",
    "Reinforced dragon bones",
    "Dagannoth bones",
    "Infernal ashes",
    "Dragon arrowheads",
    "Rune arrowheads",
    "Adamant arrowheads",
    "Black dragonhide",
    "Royal dragonhide",
    "Green dragonhide",
    "Blue dragonhide",
    "Red dragonhide",
    "Rune platebody",
    "Rune platelegs",
    "Dragon platelegs",
    "Dragon plateskirt",
    "Dragon helm",
];


/***/ },

/***/ "./services/timeSeries.ts"
/*!********************************!*\
  !*** ./services/timeSeries.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateEMA: () => (/* binding */ calculateEMA),
/* harmony export */   calculateLinearTrend: () => (/* binding */ calculateLinearTrend),
/* harmony export */   calculateVolatility: () => (/* binding */ calculateVolatility)
/* harmony export */ });
/**
 * @module timeSeries
 * Pure time-series math utilities — EMA, volatility, and linear trend.
 * No external dependencies; safe to reuse across any service or UI module.
 */
/**
 * Calculate the Exponential Moving Average of a price series.
 *
 * The EMA gives progressively more weight to recent observations.
 * With the default `alpha = 0.2`, the half-life is roughly 3 observations.
 *
 * @param prices - Chronological price array (oldest-first).  Must have ≥ 1 element.
 * @param alpha  - Smoothing factor in (0, 1].  Higher = more reactive.
 * @returns The final EMA value, or `0` if the array is empty.
 */
function calculateEMA(prices, alpha = 0.2) {
    if (prices.length === 0)
        return 0;
    let ema = prices[0];
    for (let i = 1; i < prices.length; i++) {
        ema = alpha * prices[i] + (1 - alpha) * ema;
    }
    return ema;
}
/**
 * Calculate the volatility of a price series as the standard deviation of
 * daily percentage returns.
 *
 * A return of `0.05` means the typical daily swing is ±5 %.
 *
 * @param prices - Chronological price array (oldest-first).  Needs ≥ 2 elements.
 * @returns Population standard deviation of daily % changes, or `0` if too few data points.
 */
function calculateVolatility(prices) {
    if (prices.length < 2)
        return 0;
    const returns = [];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] === 0)
            continue;
        returns.push((prices[i] - prices[i - 1]) / prices[i - 1]);
    }
    if (returns.length === 0)
        return 0;
    const mean = returns.reduce((s, r) => s + r, 0) / returns.length;
    const variance = returns.reduce((s, r) => s + (r - mean) ** 2, 0) / returns.length;
    return Math.sqrt(variance);
}
/**
 * Fit an ordinary least-squares (OLS) linear regression to a price series and
 * return the slope plus a one-step-ahead prediction.
 *
 * The independent variable is a zero-based day index (0, 1, 2, …).
 *
 * @param prices - Chronological price array (oldest-first).  Needs ≥ 2 elements.
 * @returns `{ slope, predictedNext }` where `predictedNext` is the extrapolated
 *          price for day `N` (one beyond the last observation).
 *          Both are `0` when there is insufficient data.
 */
function calculateLinearTrend(prices) {
    const n = prices.length;
    if (n < 2)
        return { slope: 0, predictedNext: 0 };
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;
    for (let i = 0; i < n; i++) {
        sumX += i;
        sumY += prices[i];
        sumXY += i * prices[i];
        sumX2 += i * i;
    }
    const denom = n * sumX2 - sumX * sumX;
    if (denom === 0)
        return { slope: 0, predictedNext: prices[n - 1] };
    const slope = (n * sumXY - sumX * sumY) / denom;
    const intercept = (sumY - slope * sumX) / n;
    const predictedNext = intercept + slope * n;
    return { slope, predictedNext };
}


/***/ },

/***/ "./services/utils.ts"
/*!***************************!*\
  !*** ./services/utils.ts ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSON_ACCEPT_HEADER: () => (/* binding */ JSON_ACCEPT_HEADER),
/* harmony export */   calculateGETax: () => (/* binding */ calculateGETax),
/* harmony export */   chunkArray: () => (/* binding */ chunkArray),
/* harmony export */   computeFlipProfit: () => (/* binding */ computeFlipProfit),
/* harmony export */   isMetadataKey: () => (/* binding */ isMetadataKey),
/* harmony export */   uuid: () => (/* binding */ uuid)
/* harmony export */ });
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
function chunkArray(arr, size) {
    const chunks = [];
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
function calculateGETax(price) {
    if (price <= 50)
        return 0;
    return Math.floor(price * 0.02);
}
/** Standard `Accept: application/json` header for API requests. */
const JSON_ACCEPT_HEADER = { Accept: "application/json" };
/**
 * Check whether a key is a Weird Gloop / RS Wiki metadata key (prefixed with `%`).
 */
function isMetadataKey(key) {
    return key.startsWith("%");
}
/**
 * Compute realised flip profit after GE tax.
 *
 * When `alched` is `true`, no GE tax is applied — profit is simply
 * `(sellPrice − buyPrice) × quantity`.
 */
function computeFlipProfit(sellPrice, buyPrice, quantity, alched) {
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
function uuid() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}


/***/ },

/***/ "./services/weirdGloopService.ts"
/*!***************************************!*\
  !*** ./services/weirdGloopService.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeirdGloopService: () => (/* binding */ WeirdGloopService)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./services/utils.ts");
/* harmony import */ var _rateLimiter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rateLimiter */ "./services/rateLimiter.ts");
/**
 * @module WeirdGloopService
 * HTTP client for the Weird Gloop RS3 Grand Exchange API.
 *
 * Responsibilities:
 *  - Accept an arbitrarily large list of item names.
 *  - Chunk them into batches of {@link WeirdGloopServiceConfig.batchSize} (default 100).
 *  - Fire all batches concurrently via `Promise.allSettled` so one failure
 *    does not abort the entire ingest.
 *  - Return a consolidated map of item → price record.
 *
 * @see https://api.weirdgloop.org/#/exchange
 */


/** Base URL for the Weird Gloop RS3 latest-price endpoint. */
const BASE_URL = "https://api.weirdgloop.org/exchange/history/rs/latest";
/**
 * Service class that encapsulates all communication with the Weird Gloop
 * Grand Exchange REST API.
 *
 * @example
 * ```ts
 * const api = new WeirdGloopService();
 * const prices = await api.fetchLatestPrices([
 *   "Blue partyhat", "Christmas cracker", "Bread",
 * ]);
 * console.log(prices.get("Bread")?.price);
 * ```
 */
class WeirdGloopService {
    /**
     * Create a new service instance.
     * @param config - Optional overrides for batch size, etc.
     */
    constructor(config) {
        this.batchSize = config?.batchSize ?? 100;
    }
    // ─── Public API ───────────────────────────────────────────────────────
    /**
     * Fetch the latest GE snapshot for every item in {@link itemNames}.
     *
     * Items are batched into groups of {@link batchSize} and all batches are
     * dispatched concurrently.  Individual batch failures are logged to the
     * console but do **not** reject the returned promise — successfully
     * fetched records are always returned.
     *
     * @param itemNames - Canonical RS3 item names (case-sensitive as they
     *                    appear on the RS Wiki).
     * @returns A `Map<string, WeirdGloopPriceRecord>` keyed by item name.
     */
    async fetchLatestPrices(itemNames) {
        if (itemNames.length === 0) {
            console.warn("[WeirdGloopService] fetchLatestPrices called with an empty item list.");
            return new Map();
        }
        const batches = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.chunkArray)(itemNames, this.batchSize);
        console.log(`[WeirdGloopService] Fetching ${itemNames.length} items in ${batches.length} batch(es) of up to ${this.batchSize}…`);
        // Execute batches sequentially to stay within API rate limits.
        const consolidated = new Map();
        for (let idx = 0; idx < batches.length; idx++) {
            try {
                const json = await this.fetchBatch(batches[idx], idx);
                for (const [name, record] of Object.entries(json)) {
                    consolidated.set(name, record);
                }
            }
            catch (err) {
                console.error("[WeirdGloopService] Batch failed:", err);
            }
            // Brief pause between batches to avoid rate-limiting.
            if (idx < batches.length - 1) {
                await _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.sleep(300);
            }
        }
        console.log(`[WeirdGloopService] Successfully fetched ${consolidated.size} / ${itemNames.length} price records.`);
        return consolidated;
    }
    /**
     * Fetch up to 90 days of historical daily prices for every item in
     * {@link itemNames}.  The `/last90d` endpoint only accepts **one item per
     * request**, so items are dispatched via a concurrency-limited worker
     * pool gated by {@link acquireRequestSlot} to enforce a safe global
     * request rate.
     *
     * Individual failures are logged but do **not** reject the returned
     * promise — successfully fetched histories are always returned.
     *
     * @param itemNames - Canonical RS3 item names.
     * @param days      - Number of recent days to extract from the 90-day
     *                    window (default 30).  Pass 90 to keep the full range.
     * @returns A `Map<itemName, WeirdGloopHistoryEntry[]>` of chronological
     *          daily snapshots, filtered to the requested window.
     */
    async fetchHistoricalPrices(itemNames, days = 30, onProgress, pacing) {
        if (itemNames.length === 0)
            return new Map();
        const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
        const result = new Map();
        let skippedNotFound = 0;
        let skippedNoData = 0;
        let skippedEmpty = 0;
        let skippedRetry = 0;
        let completed = 0;
        const concurrency = WeirdGloopService.HISTORY_CONCURRENCY;
        const batchPauseEvery = pacing?.batchPauseEvery ?? _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.BATCH_PAUSE_EVERY;
        const batchPauseMs = pacing?.batchPauseMs ?? _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.BATCH_PAUSE_MS;
        console.log(`[WeirdGloopService] Fetching last90d history for ${itemNames.length} item(s) ` +
            `(keeping last ${days} days, concurrency=${concurrency}, ` +
            `pause every ${batchPauseEvery} @ ${batchPauseMs / 1000}s)…`);
        /**
         * Fetch history for a single item and store the result.
         * Designed to be called from a concurrency-limited pool.
         */
        const fetchOne = async (name) => {
            const url = `https://api.weirdgloop.org/exchange/history/rs/last90d?name=${encodeURIComponent(name)}`;
            try {
                const resp = await _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.fetchWithRetry(url);
                if (!resp) {
                    skippedRetry++;
                    console.warn(`[WeirdGloopService] History for "${name}" — all retries exhausted.`);
                    return;
                }
                const json = await resp.json();
                if (json.success === false || json.error) {
                    skippedNotFound++;
                    return;
                }
                let entries = json[name];
                if (!Array.isArray(entries)) {
                    const lc = name.toLowerCase();
                    for (const key of Object.keys(json)) {
                        if (key.toLowerCase() === lc && Array.isArray(json[key])) {
                            entries = json[key];
                            break;
                        }
                    }
                }
                if (!Array.isArray(entries)) {
                    skippedNoData++;
                    return;
                }
                const filtered = entries
                    .filter((e) => e.timestamp >= cutoff)
                    .sort((a, b) => a.timestamp - b.timestamp);
                if (filtered.length > 0) {
                    result.set(name, filtered);
                }
                else {
                    skippedEmpty++;
                }
            }
            catch (err) {
                console.error(`[WeirdGloopService] History for "${name}" failed:`, err);
            }
        };
        // ── Concurrency-limited pool ────────────────────────────────────────
        // Keeps `concurrency` requests in-flight at all times, with a small
        // stagger delay between launches to avoid burst-triggering rate limits.
        // Workers check the class-level `rateLimitCooldownUntil` before each
        // request.  `fetchWithRetry` sets it immediately on 429/network errors
        // so all workers pause the instant one hits a throttle.
        let cursor = 0;
        const runWorker = async () => {
            while (cursor < itemNames.length) {
                // If any request (in any worker, any call) hit a 429, wait it out.
                const now = Date.now();
                if (now < _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.rateLimitCooldownUntil) {
                    await _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.sleep(_rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.rateLimitCooldownUntil - now);
                }
                // Acquire the global rate-limit gate — enforces a hard floor on
                // the interval between any two requests regardless of worker count.
                await _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.acquireRequestSlot();
                const idx = cursor++;
                await fetchOne(itemNames[idx]);
                completed++;
                onProgress?.(completed, itemNames.length);
                // ── Global rate-limit accounting ────────────────────────────────
                // The browser rate-limit window spans across successive
                // fetchHistoricalPrices calls.  Track requests globally so the
                // proactive pause fires at the right cadence during full scans.
                const sinceLastPause = Date.now() - _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.globalLastPauseTs;
                if (sinceLastPause > _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.WINDOW_RESET_MS) {
                    _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.globalHistReqCount = 0;
                }
                _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.globalHistReqCount++;
                if (_rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.globalHistReqCount >= batchPauseEvery) {
                    _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.globalHistReqCount = 0;
                    _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.globalLastPauseTs = Date.now();
                    console.log(`[WeirdGloopService] Batch pause at ${completed}/${itemNames.length} — ` +
                        `cooling ${batchPauseMs / 1000}s to avoid rate-limit window…`);
                    _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.rateLimitCooldownUntil = Math.max(_rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.rateLimitCooldownUntil, Date.now() + batchPauseMs);
                }
                if ((completed) % 50 === 0) {
                    console.log(`[WeirdGloopService] History progress: ${completed}/${itemNames.length} ` +
                        `(${result.size} fetched so far)…`);
                }
            }
        };
        // Launch `concurrency` workers; they each pull from the shared cursor.
        // Staggered 100 ms apart so they don't all fire at the same instant.
        const workers = [];
        for (let w = 0; w < Math.min(concurrency, itemNames.length); w++) {
            workers.push(runWorker());
            if (w < concurrency - 1 && w < itemNames.length - 1) {
                await _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.sleep(100);
            }
        }
        await Promise.all(workers);
        console.log(`[WeirdGloopService] Historical data fetched for ${result.size} / ${itemNames.length} items.`);
        if (skippedNotFound + skippedNoData + skippedEmpty + skippedRetry > 0) {
            console.log(`[WeirdGloopService] Skipped: ${skippedNotFound} not-found, ${skippedNoData} no-data, ` +
                `${skippedEmpty} empty-after-filter, ${skippedRetry} retry-exhausted.`);
        }
        return result;
    }
    // ─── Private Helpers ──────────────────────────────────────────────────
    /**
     * Fetch a single batch of items from the API.
     *
     * @param batch   - Subset of item names (≤ {@link batchSize}).
     * @param batchIdx - Zero-based index used only for logging.
     * @returns The raw JSON response body typed as {@link WeirdGloopLatestResponse}.
     * @throws {Error} If the HTTP response is not OK (status outside 200-299).
     */
    async fetchBatch(batch, batchIdx) {
        // Pipe-delimit item names as required by the Weird Gloop query parameter.
        const nameParam = batch.map((n) => encodeURIComponent(n)).join("|");
        const url = `${BASE_URL}?name=${nameParam}`;
        console.debug(`[WeirdGloopService] Batch ${batchIdx}: requesting ${batch.length} items…`);
        const response = await _rateLimiter__WEBPACK_IMPORTED_MODULE_1__.RateLimiter.fetchWithRetry(url);
        if (!response) {
            throw new Error(`[WeirdGloopService] Batch ${batchIdx}: all retries exhausted`);
        }
        const json = await response.json();
        console.debug(`[WeirdGloopService] Batch ${batchIdx}: received ${Object.keys(json).length} records.`);
        return json;
    }
}
/**
 * Number of concurrent in-flight history requests.
 * The `/last90d` endpoint only accepts 1 item per request, so a small
 * concurrency pool hides per-request latency.  Kept at 3 to stay well
 * under the browser's 6 connections/origin limit while the global
 * request gate enforces the actual pacing.
 */
WeirdGloopService.HISTORY_CONCURRENCY = 3;


/***/ },

/***/ "./services/wikiService.ts"
/*!*********************************!*\
  !*** ./services/wikiService.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WikiService: () => (/* binding */ WikiService)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./services/utils.ts");
/**
 * @module WikiService
 * Client for the official RuneScape 3 Wiki structured-data APIs.
 *
 * Responsibilities:
 *  - Fetch GE buy limits in bulk from `Module:GELimits/data.json`
 *    (single request for all tradeable items, with per-item
 *    `Module:Exchange/<Item>` Lua source fallback).
 *  - Fetch High Alchemy values in bulk from `Module:GEHighAlchs/data.json`
 *    (single request for all alchable items, with per-item fallback).
 *
 * Guide / article text fetching has been removed — the curated
 * `coreKnowledge.ts` rules provide better, flipping-focused context for
 * the LLM than raw wiki prose.
 *
 * Uses only the native browser `fetch` API — no external dependencies.
 *
 * @see https://runescape.wiki/api.php (MediaWiki API sandbox)
 * @see https://runescape.wiki/w/Module:GELimits/data.json?action=raw
 * @see https://runescape.wiki/w/Module:GEHighAlchs/data.json?action=raw
 */

/**
 * Service that retrieves structured item data (buy limits, high alch values)
 * from the official RuneScape 3 Wiki.
 *
 * Buy limits are fetched from the `Module:GELimits/data.json` bulk endpoint
 * in a single HTTP request, with per-item `Module:Exchange/<Item>` fallback.
 *
 * High Alch values are fetched from the `Module:GEHighAlchs/data.json` bulk
 * endpoint in a single HTTP request. Items present in the response are
 * alchable (value = number); items absent are explicitly not alchable
 * (value = `false`). Falls back to per-item `Module:Exchange/<Item>` Lua
 * source parsing when the bulk endpoint is unreachable.
 *
 * @example
 * ```ts
 * const wiki = new WikiService();
 * const limits = await wiki.getBulkBuyLimits(["Blood rune", "Elder logs"]);
 * const alchs = await wiki.getBulkHighAlchValues(["Blood rune", "Elder logs"]);
 * ```
 */
class WikiService {
    /**
     * Fetch GE buy limits in bulk.
     *
     * **Primary source**: the `Module:GELimits/data.json` bulk endpoint
     * (single HTTP request for every tradeable item in the game).
     *
     * **Fallback**: per-item `Module:Exchange/<Item>` Lua source parsing,
     * used only when the bulk endpoint is unreachable.
     *
     * @param itemNames - Canonical RS3 item names.
     * @returns A `Map<string, number>` keyed by item name → buy limit.
     *          Items missing from the wiki are omitted from the map.
     */
    async getBulkBuyLimits(itemNames) {
        if (itemNames.length === 0)
            return new Map();
        // ── Try the single-request bulk endpoint first ───────────────────
        try {
            const bulkData = await this.fetchAllBuyLimits();
            const result = new Map();
            for (const name of itemNames) {
                const val = bulkData.get(name);
                if (val !== undefined)
                    result.set(name, val);
            }
            console.log(`[WikiService] Bulk buy-limit endpoint: ${result.size} / ${itemNames.length} items resolved.`);
            return result;
        }
        catch (bulkErr) {
            console.warn(`[WikiService] Bulk buy-limit endpoint failed — falling back to per-item Module:Exchange.`, bulkErr);
        }
        // ── Fallback: per-item Module:Exchange parsing ───────────────────
        const batches = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.chunkArray)(itemNames, WikiService.EXCHANGE_BATCH_SIZE);
        console.log(`[WikiService] Fetching buy-limit for ${itemNames.length} items in ${batches.length} batch(es) (fallback)…`);
        const settled = await Promise.allSettled(batches.map((batch, idx) => this.fetchBuyLimitBatch(batch, idx)));
        const combined = new Map();
        for (const r of settled) {
            if (r.status === "fulfilled") {
                for (const [name, val] of r.value)
                    combined.set(name, val);
            }
            else {
                console.warn(`[WikiService] buy-limit batch failed:`, r.reason);
            }
        }
        console.log(`[WikiService] Resolved buy-limit for ${combined.size} / ${itemNames.length} items (fallback).`);
        return combined;
    }
    /**
     * Generic batch fetch for `Module:Exchange/<Item>` Lua sources.
     * Handles URL building, HTTP fetch, JSON parsing, and page iteration.
     * The caller-supplied `extractValue` callback inspects each page's Lua source
     * and returns a value to include in the result map, or `undefined` to skip.
     */
    async fetchExchangeBatch(batch, idx, label, extractValue) {
        const titles = batch
            .map((n) => `Module:Exchange/${n.replace(/ /g, "_")}`)
            .join("|");
        const url = `https://runescape.wiki/api.php?action=query&prop=revisions` +
            `&rvprop=content&rvslots=main&format=json&origin=*` +
            `&titles=${encodeURIComponent(titles)}`;
        console.debug(`[WikiService] ${label} batch ${idx + 1}: ${batch.length} items`);
        const response = await fetch(url, {
            method: "GET",
            headers: _utils__WEBPACK_IMPORTED_MODULE_0__.JSON_ACCEPT_HEADER,
        });
        if (!response.ok) {
            throw new Error(`[WikiService] Exchange-module HTTP ${response.status} ${response.statusText} (${label} batch ${idx + 1}).`);
        }
        const json = await response.json();
        const map = new Map();
        const pages = json?.query?.pages;
        if (!pages)
            return map;
        for (const page of Object.values(pages)) {
            if (!page.title || page.missing !== undefined)
                continue;
            const itemName = page.title.replace(/^Module:Exchange\//, "");
            const luaSrc = page.revisions?.[0]?.slots?.main?.["*"] ?? "";
            const value = extractValue(luaSrc);
            if (value !== undefined)
                map.set(itemName, value);
        }
        return map;
    }
    /**
     * Fetch a single batch of buy limits by querying the Lua source of
     * `Module:Exchange/<Item>` pages via the MediaWiki revisions API.
     */
    fetchBuyLimitBatch(batch, idx) {
        return this.fetchExchangeBatch(batch, idx, "Buy-limit", (luaSrc) => {
            const match = WikiService.LIMIT_RE.exec(luaSrc);
            if (match) {
                const limit = Number(match[1]);
                if (limit > 0)
                    return limit;
            }
            return undefined;
        });
    }
    /**
     * Fetch the complete `Module:GELimits/data.json` bulk endpoint.
     * Returns a map of **every tradeable item** in the game → its 4-hour
     * GE buy limit.  Items not present are untradeable or unrecognised.
     *
     * The endpoint returns a flat JSON object with two metadata keys
     * (`%LAST_UPDATE%`, `%LAST_UPDATE_F%`) that are stripped from the result.
     *
     * @returns Map of canonical item name → buy limit.
     * @throws If the network request fails or the response is not valid JSON.
     */
    async fetchAllBuyLimits() {
        console.log("[WikiService] Fetching bulk buy-limit data from GELimits module…");
        const response = await fetch(WikiService.GE_LIMITS_BULK_URL, {
            method: "GET",
            headers: _utils__WEBPACK_IMPORTED_MODULE_0__.JSON_ACCEPT_HEADER,
        });
        if (!response.ok) {
            throw new Error(`[WikiService] GELimits HTTP ${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        const map = new Map();
        for (const [key, value] of Object.entries(json)) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isMetadataKey)(key))
                continue;
            if (typeof value === "number" && value > 0) {
                map.set(key, value);
            }
        }
        console.log(`[WikiService] Bulk buy-limit data: ${map.size} items loaded.`);
        return map;
    }
    /**
     * Fetch High Alchemy values for the given items.
     *
     * **Primary source**: the `Module:GEHighAlchs/data.json` bulk endpoint
     * (single HTTP request for every alchable item in the game).  Items
     * present in the response are alchable (value = number); items absent
     * are explicitly not alchable (value = `false`).
     *
     * **Fallback**: per-item `Module:Exchange/<Item>` Lua source parsing,
     * used only when the bulk endpoint is unreachable.  In fallback mode,
     * items that cannot be resolved remain absent from the map (no `false`).
     *
     * @param itemNames - Canonical RS3 item names.
     * @returns A `Map<string, number | false>` keyed by item name.
     */
    async getBulkHighAlchValues(itemNames) {
        if (itemNames.length === 0)
            return new Map();
        // ── Try the single-request bulk endpoint first ───────────────────
        try {
            const raw = await this.fetchAllHighAlchValues();
            const result = new Map();
            for (const name of itemNames) {
                const val = raw.get(name);
                result.set(name, val !== undefined ? val : false); // absent → not alchable
            }
            console.log(`[WikiService] Bulk alch endpoint: ${result.size} / ${itemNames.length} items resolved.`);
            return result;
        }
        catch (bulkErr) {
            console.warn(`[WikiService] Bulk alch endpoint failed — falling back to per-item Module:Exchange.`, bulkErr);
        }
        // ── Fallback: per-item Module:Exchange parsing ───────────────────
        const batches = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.chunkArray)(itemNames, WikiService.EXCHANGE_BATCH_SIZE);
        console.log(`[WikiService] Fetching alch for ${itemNames.length} items in ${batches.length} batch(es) (fallback)…`);
        const settled = await Promise.allSettled(batches.map((batch, idx) => this.fetchAlchValueBatch(batch, idx)));
        const combined = new Map();
        for (const r of settled) {
            if (r.status === "fulfilled") {
                for (const [name, val] of r.value)
                    combined.set(name, val);
            }
            else {
                console.warn(`[WikiService] alch batch failed:`, r.reason);
            }
        }
        console.log(`[WikiService] Resolved alch for ${combined.size} / ${itemNames.length} items (fallback).`);
        return combined;
    }
    /**
     * Fetch the complete `Module:GEHighAlchs/data.json` bulk endpoint.
     * Returns a map of **every alchable item** in the game → its High Alch
     * value in gp.  Items not present in this map are not alchable.
     *
     * The endpoint returns a flat JSON object with two metadata keys
     * (`%LAST_UPDATE%`, `%LAST_UPDATE_F%`) that are stripped from the result.
     *
     * @returns Map of canonical item name → High Alch value (gp).
     * @throws If the network request fails or the response is not valid JSON.
     */
    async fetchAllHighAlchValues() {
        console.log("[WikiService] Fetching bulk High Alch data from GEHighAlchs module…");
        const response = await fetch(WikiService.HIGH_ALCH_BULK_URL, {
            method: "GET",
            headers: _utils__WEBPACK_IMPORTED_MODULE_0__.JSON_ACCEPT_HEADER,
        });
        if (!response.ok) {
            throw new Error(`[WikiService] GEHighAlchs HTTP ${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        const map = new Map();
        for (const [key, value] of Object.entries(json)) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isMetadataKey)(key))
                continue;
            if (typeof value === "number" && value > 0) {
                map.set(key, value);
            }
        }
        console.log(`[WikiService] Bulk alch data: ${map.size} alchable items loaded.`);
        return map;
    }
    /**
     * Fetch a single batch of high alchemy values from `Module:Exchange/<Item>` Lua sources.
     */
    fetchAlchValueBatch(batch, idx) {
        return this.fetchExchangeBatch(batch, idx, "Alch", (luaSrc) => {
            if (WikiService.ALCHABLE_FALSE_RE.test(luaSrc))
                return undefined;
            const alchMatch = WikiService.ALCH_RE.exec(luaSrc);
            if (alchMatch) {
                const val = Number(alchMatch[1]);
                if (val > 0)
                    return val;
                return undefined;
            }
            const valueMatch = WikiService.VALUE_RE.exec(luaSrc);
            if (valueMatch) {
                const highAlch = Math.floor(Number(valueMatch[1]) * 0.6);
                if (highAlch > 0)
                    return highAlch;
            }
            return undefined;
        });
    }
}
/**
 * Bulk endpoint URL that returns all GE buy limits as a flat
 * `{ itemName: number }` JSON object.
 */
WikiService.GE_LIMITS_BULK_URL = "https://runescape.wiki/w/Module:GELimits/data.json?action=raw";
/**
 * Bulk endpoint URL that returns all alchable items and their High Alch
 * values as a flat `{ itemName: number }` JSON object.
 */
WikiService.HIGH_ALCH_BULK_URL = "https://runescape.wiki/w/Module:GEHighAlchs/data.json?action=raw";
// ─── Bulk Buy Limits (Module:Exchange) ──────────────────────────────
/**
 * Maximum titles per MediaWiki `action=query` request.
 * The API allows up to 50 titles for anonymous (non-bot) callers.
 */
WikiService.EXCHANGE_BATCH_SIZE = 50;
/** Regex that extracts the `limit = <number>` value from a Lua module source. */
WikiService.LIMIT_RE = /limit\s*=\s*(\d+)/;
/** Regex that extracts the `alchvalue = <number>` value from a Lua module source. */
WikiService.ALCH_RE = /alchvalue\s*=\s*(\d+)/;
/** Regex that extracts the `value = <number>` (base item value) from a Lua module source. */
WikiService.VALUE_RE = /\bvalue\s*=\s*(\d+)/;
/** Regex that detects `alchable = false` — items that cannot be alched. */
WikiService.ALCHABLE_FALSE_RE = /alchable\s*=\s*false/i;


/***/ },

/***/ "./ui/allocation.ts"
/*!**************************!*\
  !*** ./ui/allocation.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindAllocationAdvisor: () => (/* binding */ bindAllocationAdvisor)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./services/index.ts");
/* harmony import */ var _favouritesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favouritesData */ "./ui/favouritesData.ts");
/* harmony import */ var _collapseToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapseToggle */ "./ui/collapseToggle.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./ui/state.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _modals_analyticsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/analyticsModal */ "./ui/modals/analyticsModal.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./ui/constants.ts");
/**
 * @module ui/allocation
 * Capital Allocation Suggestions section.
 */







// ─── Local state ────────────────────────────────────────────────────────────
const STRATEGY_HINTS = {
    "balanced": "Spreads capital evenly across items to reduce risk from any single flip failing.",
    "aggressive": "Maximises total estimated profit \u2014 may concentrate capital into few items.",
};
let lastAllocations = [];
// ─── Allocation logic ───────────────────────────────────────────────────────
async function runAllocationAdvisor() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_4__.getEls)();
    const budgetRaw = els.allocationBudget.value.trim();
    const budget = Number(budgetRaw);
    if (!budget || budget <= 0) {
        els.allocationResults.innerHTML =
            '<p class="allocation-empty">Enter a positive cash stack amount.</p>';
        return;
    }
    const source = els.allocationSource.value;
    const strategy = els.allocationStrategy.value;
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.LS_ALLOCATION_STRATEGY, strategy);
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.LS_ALLOCATION_BUDGET, String(budget));
    const analyzer = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getAnalyzer)();
    let items;
    if (source === "top20") {
        const topItems = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getLatestTopItems)();
        items = topItems.length > 0 ? topItems : await analyzer.getTopItems();
    }
    else if (source === "all") {
        items = await analyzer.getAllScored();
    }
    else {
        const favNames = (0,_favouritesData__WEBPACK_IMPORTED_MODULE_1__.getFavorites)();
        if (favNames.size === 0) {
            els.allocationResults.innerHTML =
                '<p class="allocation-empty">Add some items to your Favourites first.</p>';
            return;
        }
        items = await analyzer.getItemsByNames(favNames);
    }
    if (items.length === 0) {
        const label = source === "favourites" ? "Favourited items not yet in cache \u2014 try searching for them first."
            : source === "top20" ? "No Top 20 items available yet \u2014 wait for the initial data load."
                : "No items in cache \u2014 run a market scan first.";
        els.allocationResults.innerHTML = `<p class="allocation-empty">${label}</p>`;
        return;
    }
    const candidates = items
        .filter((it) => it.estFlipProfit > 0 && it.recBuyPrice > 0 && it.buyLimit != null)
        .map((it) => {
        const maxQty = it.buyLimit;
        const maxCost = maxQty * it.recBuyPrice;
        const roi = it.estFlipProfit / it.recBuyPrice;
        return { item: it, maxCost, maxQty, roi };
    });
    if (candidates.length === 0) {
        els.allocationResults.innerHTML =
            '<p class="allocation-empty">No items in the selected source have a positive estimated profit right now.</p>';
        return;
    }
    const MAX_GE_SLOTS = 8;
    let remaining = budget;
    const used = new Set();
    const allocations = [];
    const perItemCap = strategy === "balanced"
        ? Math.floor(budget / Math.min(candidates.length, MAX_GE_SLOTS))
        : Infinity;
    while (remaining > 0 && allocations.length < MAX_GE_SLOTS) {
        let bestIdx = -1;
        let bestScore = -Infinity;
        for (let i = 0; i < candidates.length; i++) {
            const c = candidates[i];
            if (used.has(c.item.name))
                continue;
            const spendCap = strategy === "balanced" ? Math.min(remaining, c.maxCost, perItemCap) : Math.min(remaining, c.maxCost);
            const qty = Math.floor(spendCap / c.item.recBuyPrice);
            if (qty <= 0)
                continue;
            const score = qty * c.item.estFlipProfit;
            if (score > bestScore) {
                bestScore = score;
                bestIdx = i;
            }
        }
        if (bestIdx < 0)
            break;
        const c = candidates[bestIdx];
        const spendCap = strategy === "balanced" ? Math.min(remaining, c.maxCost, perItemCap) : Math.min(remaining, c.maxCost);
        const qty = Math.floor(spendCap / c.item.recBuyPrice);
        const actualSpend = qty * c.item.recBuyPrice;
        const profit = qty * c.item.estFlipProfit;
        allocations.push({ item: c.item, spend: actualSpend, qty, profit });
        remaining -= actualSpend;
        used.add(c.item.name);
    }
    if (allocations.length === 0) {
        els.allocationResults.innerHTML =
            '<p class="allocation-empty">Budget too small to buy any items from the selected source.</p>';
        return;
    }
    lastAllocations = allocations;
    const totalSpent = allocations.reduce((s, a) => s + a.spend, 0);
    const totalProfit = allocations.reduce((s, a) => s + a.profit, 0);
    const rows = allocations.map((a) => {
        const pct = ((a.spend / budget) * 100).toFixed(1);
        const limitNote = a.item.buyLimit
            ? `${a.qty.toLocaleString("en-US")} / ${a.item.buyLimit.toLocaleString("en-US")}`
            : `${a.qty.toLocaleString("en-US")}`;
        return [
            "<tr>",
            `<td class="alloc-item-name alloc-item-link" data-alloc-item="${a.item.name}" title="Click to view analytics for ${a.item.name}">${a.item.name}</td>`,
            `<td class="alloc-gp">${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(a.item.recBuyPrice)}</td>`,
            `<td class="alloc-gp">${limitNote}</td>`,
            `<td class="alloc-gp">${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(a.spend)}</td>`,
            `<td class="alloc-pct">${pct}%</td>`,
            `<td class="alloc-profit">+${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(a.profit)}</td>`,
            "</tr>",
        ].join("");
    }).join("");
    const unallocated = budget - totalSpent;
    const unallocatedRow = unallocated > 0
        ? `<tr class="allocation-summary-row"><td colspan="3" class="alloc-item-name">Unallocated</td><td class="alloc-gp">${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(unallocated)}</td><td class="alloc-pct">${((unallocated / budget) * 100).toFixed(1)}%</td><td></td></tr>`
        : "";
    const hint = STRATEGY_HINTS[strategy] || "";
    els.allocationResults.innerHTML = [
        '<table class="allocation-results-table">',
        "<thead><tr>",
        "<th>Item</th>",
        "<th>Buy Price</th>",
        "<th>Qty / Limit</th>",
        "<th>Capital</th>",
        "<th>%</th>",
        "<th>Est. Profit</th>",
        "</tr></thead>",
        "<tbody>",
        rows,
        `<tr class="allocation-summary-row">`,
        `<td class="alloc-item-name">Total</td>`,
        "<td></td><td></td>",
        `<td class="alloc-gp">${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(totalSpent)}</td>`,
        `<td class="alloc-pct">${((totalSpent / budget) * 100).toFixed(1)}%</td>`,
        `<td class="alloc-profit">+${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(totalProfit)}</td>`,
        "</tr>",
        unallocatedRow,
        "</tbody>",
        "</table>",
        `<p class="allocation-strategy-hint">${hint}</p>`,
    ].join("");
}
// ─── Bind ───────────────────────────────────────────────────────────────────
function bindAllocationAdvisor() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_4__.getEls)();
    const STRATEGY_MIGRATION = {
        "max-profit": "aggressive",
        "best-roi": "aggressive",
        "diversified": "balanced",
    };
    let savedStrategy = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.LS_ALLOCATION_STRATEGY);
    if (savedStrategy && STRATEGY_MIGRATION[savedStrategy]) {
        savedStrategy = STRATEGY_MIGRATION[savedStrategy];
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.LS_ALLOCATION_STRATEGY, savedStrategy);
    }
    if (savedStrategy && els.allocationStrategy.querySelector(`option[value="${savedStrategy}"]`)) {
        els.allocationStrategy.value = savedStrategy;
    }
    const savedBudget = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.LS_ALLOCATION_BUDGET);
    if (savedBudget)
        els.allocationBudget.value = savedBudget;
    els.allocationRunBtn.addEventListener("click", runAllocationAdvisor);
    els.allocationBudget.addEventListener("keydown", (e) => {
        if (e.key === "Enter")
            runAllocationAdvisor();
    });
    els.allocationResults.addEventListener("click", (e) => {
        const cell = e.target.closest(".alloc-item-link");
        if (!cell)
            return;
        const name = cell.dataset.allocItem;
        const match = lastAllocations.find((a) => a.item.name === name);
        if (match)
            (0,_modals_analyticsModal__WEBPACK_IMPORTED_MODULE_5__.showAnalyticsModal)(match.item);
    });
    (0,_collapseToggle__WEBPACK_IMPORTED_MODULE_2__.bindCollapseToggle)({
        collapseBtn: els.allocationCollapseBtn,
        targets: [els.allocationBody],
        headerBar: els.allocationHeader,
    });
}


/***/ },

/***/ "./ui/backToTop.ts"
/*!*************************!*\
  !*** ./ui/backToTop.ts ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindBackToTop: () => (/* binding */ bindBackToTop)
/* harmony export */ });
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domRefs */ "./ui/domRefs.ts");
/**
 * @module ui/backToTop
 * Back-to-top floating button — shows after scrolling past a threshold.
 */

/** Bind scroll listener + click handler for the back-to-top button. */
function bindBackToTop() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_0__.getEls)();
    const THRESHOLD = 300;
    els.marketView.addEventListener("scroll", () => {
        els.backToTopBtn.classList.toggle("visible", els.marketView.scrollTop > THRESHOLD);
    }, { passive: true });
    els.backToTopBtn.addEventListener("click", () => {
        els.marketView.scrollTo({ top: 0, behavior: "smooth" });
    });
}


/***/ },

/***/ "./ui/card/actionBuilder.ts"
/*!**********************************!*\
  !*** ./ui/card/actionBuilder.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildItemActionButtons: () => (/* binding */ buildItemActionButtons),
/* harmony export */   wireAlertInputs: () => (/* binding */ wireAlertInputs)
/* harmony export */ });
/* harmony import */ var _favouritesData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../favouritesData */ "./ui/favouritesData.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./ui/helpers.ts");
/**
 * @module ui/actionBuilder
 * Action buttons (favourite, portfolio, wiki, GE links) and alert input wiring.
 */


/**
 * Populate and wire change listeners on a pair of alert inputs inside `container`.
 * Auto-favourites the item when an alert value is set.
 */
function wireAlertInputs(container, itemName, opts) {
    const buyInput = container.querySelector(opts.buySelector);
    const sellInput = container.querySelector(opts.sellSelector);
    if (!buyInput || !sellInput)
        return;
    const existing = (0,_favouritesData__WEBPACK_IMPORTED_MODULE_0__.getFavoriteAlerts)(itemName);
    if (existing?.targetBuy)
        buyInput.value = String(existing.targetBuy);
    if (existing?.targetSell)
        sellInput.value = String(existing.targetSell);
    const save = () => {
        const bv = buyInput.value ? Number(buyInput.value) : undefined;
        const sv = sellInput.value ? Number(sellInput.value) : undefined;
        if ((bv || sv) && !(0,_favouritesData__WEBPACK_IMPORTED_MODULE_0__.getFavorites)().has(itemName)) {
            (0,_favouritesData__WEBPACK_IMPORTED_MODULE_0__.toggleFavorite)(itemName);
        }
        (0,_favouritesData__WEBPACK_IMPORTED_MODULE_0__.setFavoriteAlerts)(itemName, bv, sv);
        opts.onSave?.(!!bv, !!sv);
    };
    buyInput.addEventListener("change", save);
    sellInput.addEventListener("change", save);
}
/**
 * Build the standard set of action buttons for an item.
 * Returns `[favBtn, addBtn, wikiLink, geLink]` in DOM order.
 */
function buildItemActionButtons(item, opts) {
    const stop = opts?.stopPropagation ?? false;
    const favBtn = document.createElement("button");
    favBtn.className = "fav-btn modal-fav-btn";
    favBtn.textContent = (0,_favouritesData__WEBPACK_IMPORTED_MODULE_0__.getFavorites)().has(item.name) ? "\u2605" : "\u2606";
    favBtn.title = "Toggle favourite";
    favBtn.setAttribute("aria-label", `Toggle favourite for ${item.name}`);
    favBtn.setAttribute("aria-pressed", String((0,_favouritesData__WEBPACK_IMPORTED_MODULE_0__.getFavorites)().has(item.name)));
    favBtn.addEventListener("click", (e) => {
        if (stop)
            e.stopPropagation();
        const nowFav = (0,_favouritesData__WEBPACK_IMPORTED_MODULE_0__.toggleFavorite)(item.name);
        favBtn.textContent = nowFav ? "\u2605" : "\u2606";
        favBtn.setAttribute("aria-pressed", String(nowFav));
        opts?.onFavToggle?.(nowFav);
    });
    const addBtn = document.createElement("button");
    addBtn.className = "quick-add-btn modal-quick-add-btn";
    addBtn.textContent = "+";
    addBtn.title = "Add to portfolio";
    addBtn.setAttribute("aria-label", `Add ${item.name} to portfolio`);
    addBtn.addEventListener("click", (e) => {
        if (stop)
            e.stopPropagation();
        opts?.onClose?.();
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.quickAddToPortfolio)(item);
    });
    const wikiLink = document.createElement("a");
    wikiLink.className = "ext-link wiki-link";
    wikiLink.href = `https://runescape.wiki/w/${encodeURIComponent(item.name)}`;
    wikiLink.target = "_blank";
    wikiLink.rel = "noopener noreferrer";
    wikiLink.textContent = "Wiki";
    wikiLink.title = "Open on RS3 Wiki";
    if (stop)
        wikiLink.addEventListener("click", (e) => e.stopPropagation());
    const geLink = document.createElement("a");
    geLink.className = "ext-link ge-link";
    geLink.href = `https://secure.runescape.com/m=itemdb_rs/viewitem?obj=${item.itemId}`;
    geLink.target = "_blank";
    geLink.rel = "noopener noreferrer";
    geLink.textContent = "GE";
    geLink.title = "Open on GE Database";
    if (stop)
        geLink.addEventListener("click", (e) => e.stopPropagation());
    return [favBtn, addBtn, wikiLink, geLink];
}


/***/ },

/***/ "./ui/card/badgeBuilder.ts"
/*!*********************************!*\
  !*** ./ui/card/badgeBuilder.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VELOCITY_CLASS_MAP: () => (/* binding */ VELOCITY_CLASS_MAP),
/* harmony export */   VELOCITY_TIP_MAP: () => (/* binding */ VELOCITY_TIP_MAP),
/* harmony export */   buildHeaderBadgesHtml: () => (/* binding */ buildHeaderBadgesHtml)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/**
 * @module ui/badgeBuilder
 * Header badge HTML generation for market cards and modals.
 */

// ─── Velocity constant maps ─────────────────────────────────────────────────
/** Velocity → CSS class map. */
const VELOCITY_CLASS_MAP = {
    "Insta-Flip": "velocity-insta",
    "Active": "velocity-active",
    "Slow": "velocity-slow",
    "Very Slow": "velocity-veryslow",
};
/** Velocity → tooltip text map. */
const VELOCITY_TIP_MAP = {
    "Insta-Flip": "Very high hourly volume \u2014 offers typically fill within seconds to a few minutes.",
    "Active": "Solid hourly volume \u2014 expect fills within a few minutes to ~30 min.",
    "Slow": "Low hourly volume \u2014 may take 30 min to several hours to fill.",
    "Very Slow": "Very low hourly volume \u2014 fills can take many hours or may not complete in a 4 h window.",
};
/** Build the header badge HTML string for a ranked item. */
function buildHeaderBadgesHtml(item, opts) {
    const showEma = opts?.showEma !== false;
    const showVol = opts?.showVol !== false;
    const forecastConf = opts?.forecastConfidence === true;
    return [
        `<span class="profit-badge${item.estFlipProfit <= 0 ? " negative" : ""}" title="Estimated profit per item after paying the 2% GE tax on the sale.">${item.estFlipProfit > 0 ? "+" : ""}${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(item.estFlipProfit)}/ea</span>`,
        `<span class="velocity-badge ${VELOCITY_CLASS_MAP[item.tradeVelocity] ?? "velocity-slow"}" title="${VELOCITY_TIP_MAP[item.tradeVelocity] ?? ""}">${item.tradeVelocity}</span>`,
        item.volumeSpikeMultiplier > 1.5
            ? `<span class="hype-badge">\uD83D\uDD25 ${item.volumeSpikeMultiplier}x Vol</span>`
            : "",
        item.priceTrend === "Downtrend"
            ? `<span class="trend-badge trend-downtrend" title="Price has dropped more than 5% over the last 7 days \u2014 potential falling knife.">\u26A0\uFE0F Crashing</span>`
            : item.priceTrend === "Uptrend"
                ? `<span class="trend-badge trend-uptrend" title="Price has risen more than 5% over the last 7 days \u2014 positive momentum.">\uD83D\uDCC8 Rising</span>`
                : "",
        showEma && item.ema30d > 0 && item.price > 0
            ? (() => {
                const ep = ((item.price - item.ema30d) / item.ema30d) * 100;
                const er = Math.abs(ep).toFixed(1);
                const ed = Number(er) === 0 ? "neutral" : ep > 0 ? "up" : "down";
                const ea = ed === "up" ? "\u2191" : ed === "down" ? "\u2193" : "";
                return `<span class="ema-badge ${ed}" title="30-day EMA: ${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(Math.round(item.ema30d))} gp. Price is ${er}% ${ed === "neutral" ? "at" : ep >= 0 ? "above" : "below"} average.">EMA ${ea}${er}%</span>`;
            })()
            : "",
        item.predictedNextPrice > 0 && item.price > 0
            ? (() => {
                const pp = ((item.predictedNextPrice - item.price) / item.price) * 100;
                if (Math.abs(pp) < 0.1)
                    return "";
                const pd = pp > 0.1 ? "up" : "down";
                const confSuffix = forecastConf ? ` Based on OLS regression \u2014 ${item.trendReliability} confidence.` : "";
                return `<span class="predicted-badge ${pd}" title="Predicted next price: ${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(Math.round(item.predictedNextPrice))} gp (${item.linearSlope >= 0 ? "+" : ""}${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(Math.round(item.linearSlope))} gp/day).${confSuffix}">Est ${pp >= 0 ? "+" : ""}${pp.toFixed(1)}%</span>`;
            })()
            : "",
        showVol && item.volatility > 0
            ? `<span class="vol-badge" title="Daily price volatility: ${(item.volatility * 100).toFixed(1)}% std deviation.">Vol ${(item.volatility * 100).toFixed(1)}%</span>`
            : "",
    ].filter(Boolean).join("");
}


/***/ },

/***/ "./ui/card/cardBuilder.ts"
/*!********************************!*\
  !*** ./ui/card/cardBuilder.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildItemCard: () => (/* binding */ buildItemCard)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _favouritesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../favouritesData */ "./ui/favouritesData.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./ui/helpers.ts");
/* harmony import */ var _badgeBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badgeBuilder */ "./ui/card/badgeBuilder.ts");
/* harmony import */ var _detailBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detailBuilder */ "./ui/card/detailBuilder.ts");
/* harmony import */ var _actionBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionBuilder */ "./ui/card/actionBuilder.ts");
/* harmony import */ var _modals_modalBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/modalBase */ "./ui/modals/modalBase.ts");
/**
 * @module ui/cardBuilder
 * Market card assembly — builds complete card DOM elements.
 */








// ─── Card builder ───────────────────────────────────────────────────────────
/**
 * Build a complete market card DOM element for a ranked item.
 * Uses the analytics-modal hook to avoid circular imports.
 */
function buildItemCard(item, rank) {
    const card = document.createElement("div");
    card.className = "market-card";
    if (item.isRisky)
        card.classList.add("risky");
    if (item.volumeSpikeMultiplier > 1.5)
        card.classList.add("hype");
    if ((0,_favouritesData__WEBPACK_IMPORTED_MODULE_1__.getFavorites)().has(item.name))
        card.classList.add("favorited");
    const header = document.createElement("div");
    header.className = "market-card-header";
    if (rank != null) {
        const rankEl = document.createElement("span");
        rankEl.className = "rank-badge";
        rankEl.textContent = `#${rank}`;
        rankEl.title = `Ranked #${rank} by composite score`;
        header.appendChild(rankEl);
    }
    const img = (0,_modals_modalBase__WEBPACK_IMPORTED_MODULE_6__.buildSpriteImg)(item.itemId, item.name);
    const nameEl = document.createElement("span");
    nameEl.className = "item-name";
    nameEl.textContent = item.name;
    const priceEl = document.createElement("span");
    priceEl.className = "item-price";
    priceEl.textContent = `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(item.price)} gp`;
    header.appendChild(img);
    header.appendChild(nameEl);
    header.appendChild(priceEl);
    // ── Streamlined header badges ──
    const flipWrap = document.createElement("span");
    flipWrap.className = "flip-badges";
    flipWrap.innerHTML = (0,_badgeBuilder__WEBPACK_IMPORTED_MODULE_3__.buildHeaderBadgesHtml)(item, { showEma: false, showVol: false, forecastConfidence: true });
    header.appendChild(flipWrap);
    // ── Action buttons ──
    const analyticsBtn = document.createElement("button");
    analyticsBtn.className = "popout-btn";
    analyticsBtn.textContent = "\u2197";
    analyticsBtn.title = "View Analytics";
    analyticsBtn.setAttribute("aria-label", `View analytics for ${item.name}`);
    analyticsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getShowAnalyticsModalHook)()?.(item);
    });
    const [favBtn, addFlipCardBtn, wikiLink, geLink] = (0,_actionBuilder__WEBPACK_IMPORTED_MODULE_5__.buildItemActionButtons)(item, {
        stopPropagation: true,
        onFavToggle: (nowFav) => card.classList.toggle("favorited", nowFav),
    });
    // ── Inline alert popover ──
    const alertPopover = document.createElement("div");
    alertPopover.className = "card-alert-popover";
    alertPopover.innerHTML =
        `<div class="card-alert-row">` +
            `<label>Buy \u2264 <input class="card-alert-buy" type="number" min="0" placeholder="gp" name="alert-buy" /></label>` +
            `</div>` +
            `<div class="card-alert-row">` +
            `<label>Sell \u2265 <input class="card-alert-sell" type="number" min="0" placeholder="gp" name="alert-sell" /></label>` +
            `</div>`;
    alertPopover.addEventListener("click", (e) => e.stopPropagation());
    const existingAlert = (0,_favouritesData__WEBPACK_IMPORTED_MODULE_1__.getFavoriteAlerts)(item.name);
    (0,_actionBuilder__WEBPACK_IMPORTED_MODULE_5__.wireAlertInputs)(alertPopover, item.name, {
        buySelector: ".card-alert-buy",
        sellSelector: ".card-alert-sell",
        onSave: (hasBuy, hasSell) => {
            favBtn.textContent = "\u2605";
            card.classList.add("favorited");
            alertBtn.classList.toggle("alert-active", !!(hasBuy || hasSell));
        },
    });
    const alertBtn = document.createElement("button");
    alertBtn.className = "alert-btn";
    alertBtn.textContent = "\uD83D\uDD14";
    alertBtn.title = "Set price alerts";
    alertBtn.setAttribute("aria-label", `Set price alert for ${item.name}`);
    if (existingAlert?.targetBuy || existingAlert?.targetSell) {
        alertBtn.classList.add("alert-active");
    }
    alertBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = alertPopover.classList.toggle("open");
        if (isOpen) {
            card.parentElement?.querySelectorAll(".card-alert-popover.open").forEach((el) => {
                if (el !== alertPopover)
                    el.classList.remove("open");
            });
        }
    });
    const actions = document.createElement("span");
    actions.className = "card-actions";
    actions.appendChild(analyticsBtn);
    actions.appendChild(favBtn);
    actions.appendChild(alertBtn);
    actions.appendChild(addFlipCardBtn);
    actions.appendChild(wikiLink);
    actions.appendChild(geLink);
    header.appendChild(actions);
    // ── Detail panel ──
    const detail = document.createElement("div");
    detail.className = "market-card-detail";
    detail.innerHTML = (0,_detailBuilder__WEBPACK_IMPORTED_MODULE_4__.buildDetailGroupsHtml)(item, { showLRSlope: false });
    header.tabIndex = 0;
    header.setAttribute("role", "button");
    header.setAttribute("aria-expanded", "false");
    header.addEventListener("click", () => {
        const expanded = card.classList.toggle("expanded");
        header.setAttribute("aria-expanded", String(expanded));
    });
    header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            header.click();
        }
    });
    card.appendChild(header);
    card.appendChild(alertPopover);
    card.appendChild(detail);
    return card;
}


/***/ },

/***/ "./ui/card/detailBuilder.ts"
/*!**********************************!*\
  !*** ./ui/card/detailBuilder.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildDetailGroupsHtml: () => (/* binding */ buildDetailGroupsHtml)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./ui/constants.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formatters */ "./ui/formatters.ts");
/* harmony import */ var _portfolio_metrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portfolio/metrics */ "./ui/portfolio/metrics.ts");
/**
 * @module ui/detailBuilder
 * Grouped detail panel HTML for market cards and modals.
 */




/**
 * Build a single detail-row HTML string.
 *
 * @param key   - Lookup key into {@link DETAIL_LABELS} / {@link DETAIL_TIPS}.
 * @param value - Pre-formatted display value.
 * @param cls   - Optional extra CSS class(es) for the value span.
 */
function row(key, value, cls) {
    const classAttr = cls ? ` ${cls}` : "";
    return `<div class="detail-row"><span class="detail-label" title="${_constants__WEBPACK_IMPORTED_MODULE_1__.DETAIL_TIPS[key] ?? ""}">${_constants__WEBPACK_IMPORTED_MODULE_1__.DETAIL_LABELS[key] ?? key}</span><span class="detail-value${classAttr}">${value}</span></div>`;
}
/** Signed number prefix: "+" for positive, "" for zero/negative. */
function sign(n) { return n > 0 ? "+" : ""; }
/** Build the grouped detail rows HTML string for a ranked item. */
function buildDetailGroupsHtml(item, opts) {
    const showHighAlch = opts?.showHighAlch !== false;
    const showPredictive = opts?.showPredictive !== false;
    const showLRSlope = opts?.showLRSlope !== false;
    const volumeSpikeWhenAbsent = opts?.volumeSpikeWhenAbsent ?? "omit";
    const { roiPct, profitPer4H, volAdjMargin, alchSafety } = (0,_portfolio_metrics__WEBPACK_IMPORTED_MODULE_3__.computeProfitabilityMetrics)(item);
    const emaPct = item.ema30d > 0 && item.price > 0
        ? ((item.price - item.ema30d) / item.ema30d) * 100 : 0;
    const emaSignal = emaPct > 2 ? "bullish" : emaPct < -2 ? "bearish" : "neutral";
    const emaPosLabel = Math.abs(emaPct) < 0.05 ? "at" : emaPct >= 0 ? "above" : "below";
    const predPct = item.predictedNextPrice > 0 && item.price > 0
        ? ((item.predictedNextPrice - item.price) / item.price) * 100 : 0;
    // Volume spike row
    let volumeSpikeRow;
    if (item.volumeSpikeMultiplier > 1.5) {
        volumeSpikeRow = row("Volume Spike", `\uD83D\uDD25 ${item.volumeSpikeMultiplier}x above 7-day avg`, "hype-text");
    }
    else if (volumeSpikeWhenAbsent === "normal") {
        volumeSpikeRow = row("Volume Spike", "Normal");
    }
    else {
        volumeSpikeRow = "";
    }
    // High Alch display value
    const alchDisplay = typeof item.highAlch === "number"
        ? item.highAlch.toLocaleString("en-US") + " gp"
        : item.highAlch === false ? "Not Alchable" : "Unknown";
    const rows = [
        // ── Pricing ──
        `<div class="detail-group">`,
        `<div class="detail-group-title">Pricing</div>`,
        row("GE Price", `${item.price.toLocaleString("en-US")} gp`),
        row("Rec. Buy Price", `${item.recBuyPrice.toLocaleString("en-US")} gp`, "buy-highlight"),
        row("Rec. Sell Price", `${item.recSellPrice.toLocaleString("en-US")} gp`, "sell-highlight"),
    ];
    if (showHighAlch) {
        rows.push(row("High Alch", alchDisplay));
    }
    rows.push(`</div>`);
    // ── Profitability ──
    const profitCls = (v) => v <= 0 ? "risky-text" : "profit-highlight";
    rows.push(`<div class="detail-group">`, `<div class="detail-group-title">Profitability</div>`, row("Est. Flip Profit", `${sign(item.estFlipProfit)}${item.estFlipProfit.toLocaleString("en-US")} gp/ea`, profitCls(item.estFlipProfit)), row("ROI %", `${sign(roiPct)}${roiPct.toFixed(2)}%`, profitCls(roiPct)), row("Profit per 4H", `${sign(profitPer4H)}${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(profitPer4H)} gp`, profitCls(profitPer4H)), row("Return on Time", item.returnOnTime > 0 ? `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(Math.round(item.returnOnTime))} gp/hr` : "N/A"), row("Tax Gap", `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(item.taxGap)} gp${item.isRisky ? " \u26a0 risky" : ""}`, item.isRisky ? "risky-text" : undefined), row("Est. Margin (2% tax)", `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(Math.round(item.price * 0.02))} gp`), row("Vol-Adj Margin", `${sign(volAdjMargin)}${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(volAdjMargin)} gp${volAdjMargin < 0 ? " \u26a0" : ""}`, volAdjMargin < 0 ? "risky-text" : "profit-highlight"));
    rows.push(alchSafety !== null
        ? row("Alch Safety", `${sign(alchSafety)}${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(alchSafety)} gp/ea`, alchSafety < 0 ? "risky-text" : "profit-highlight")
        : row("Alch Safety", "N/A"));
    rows.push(`</div>`);
    // ── Volume & Liquidity ──
    rows.push(`<div class="detail-group">`, `<div class="detail-group-title">Volume &amp; Liquidity</div>`, row("24h Global Vol", (0,_formatters__WEBPACK_IMPORTED_MODULE_2__.formatVolume)(item.volume)), row("Eff. Player Vol", (0,_formatters__WEBPACK_IMPORTED_MODULE_2__.formatVolume)(item.effectivePlayerVolume)));
    if (volumeSpikeRow)
        rows.push(volumeSpikeRow);
    rows.push(row("Buy Limit (4h)", item.buyLimit != null ? item.buyLimit.toLocaleString("en-US") : "Unknown"), row("Max Capital (4h)", item.maxCapitalPer4H > 0 ? `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(item.maxCapitalPer4H)} gp` : "Unknown"), row("Player Traded Val", `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(item.tradedValue)} gp`), `</div>`);
    // ── Predictive Analytics ──
    if (showPredictive) {
        const emaVal = item.ema30d > 0
            ? `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(Math.round(item.ema30d))} gp (${sign(emaPct)}${emaPct.toFixed(1)}% ${emaPosLabel} \u2014 ${emaSignal})`
            : "Insufficient data";
        const volVal = item.volatility > 0 ? `${(item.volatility * 100).toFixed(1)}%` : "Insufficient data";
        const predVal = item.predictedNextPrice > 0
            ? `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(Math.round(item.predictedNextPrice))} gp (${sign(predPct)}${predPct.toFixed(1)}%)`
            : "Insufficient data";
        const slopeVal = item.linearSlope !== 0
            ? `${sign(item.linearSlope)}${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(Math.round(item.linearSlope))} gp/day`
            : "Insufficient data";
        rows.push(`<div class="detail-group detail-group-predictive">`, `<div class="detail-group-title">Predictive Analytics</div>`, row("30d EMA", emaVal), row("Daily Volatility", volVal));
        if (showLRSlope) {
            rows.push(row("LR Slope", slopeVal));
        }
        rows.push(row("Predicted Price", predVal), `</div>`);
    }
    // ── Data Confidence ──
    rows.push(`<div class="detail-group detail-group-confidence">`, `<div class="detail-group-title">Data Confidence</div>`, row("History Depth", `${item.historyDepth} data point${item.historyDepth !== 1 ? "s" : ""}`), row("Data Freshness", (0,_formatters__WEBPACK_IMPORTED_MODULE_2__.formatDataAge)(item.dataAgeMinutes), item.dataAgeMinutes > 1440 ? "risky-text" : undefined), row("Spread Confidence", "Estimated (\u00b11\u20133%)"), row("Trend Reliability", `${item.trendReliability === "Low" ? "\u26a0 " : item.trendReliability === "High" ? "\u2705 " : ""}${item.trendReliability}`, `confidence-${item.trendReliability.toLowerCase()}`), `</div>`);
    return rows.filter(Boolean).join("");
}


/***/ },

/***/ "./ui/chart/chartHelpers.ts"
/*!**********************************!*\
  !*** ./ui/chart/chartHelpers.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHART_MARGIN: () => (/* binding */ CHART_MARGIN),
/* harmony export */   CHART_MIN_ZOOM: () => (/* binding */ CHART_MIN_ZOOM),
/* harmony export */   CHART_Y_TICKS: () => (/* binding */ CHART_Y_TICKS),
/* harmony export */   axisLabel: () => (/* binding */ axisLabel),
/* harmony export */   axisLabelPrecision: () => (/* binding */ axisLabelPrecision),
/* harmony export */   computeEmaSeries: () => (/* binding */ computeEmaSeries),
/* harmony export */   getChartThemeColors: () => (/* binding */ getChartThemeColors),
/* harmony export */   loadChartLayers: () => (/* binding */ loadChartLayers),
/* harmony export */   saveChartLayers: () => (/* binding */ saveChartLayers),
/* harmony export */   withAlpha: () => (/* binding */ withAlpha)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./ui/constants.ts");
/**
 * @module ui/chart/chartHelpers
 * Shared chart utilities: axis labels, colour helpers, EMA computation,
 * theme colour resolution, and chart-layer persistence.
 */

function loadChartLayers() {
    const defaults = { price: true, ema: true, volume: true, dots: true };
    try {
        const raw = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_CHART_LAYERS);
        if (raw)
            return { ...defaults, ...JSON.parse(raw) };
    }
    catch { /* ignore */ }
    return defaults;
}
function saveChartLayers(layers) {
    try {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_CHART_LAYERS, JSON.stringify(layers));
    }
    catch { /* ignore */ }
}
// ─── Shared chart constants ─────────────────────────────────────────────────
const CHART_MARGIN = { left: 58, right: 24, top: 18, bottom: 32 };
const CHART_Y_TICKS = 4;
const CHART_MIN_ZOOM = 5;
// ─── Axis helpers ───────────────────────────────────────────────────────────
/**
 * Abbreviate a gp value for axis labels.
 * When `precision` > 1 the suffix uses more decimal places so tightly-spaced
 * ticks remain distinguishable.
 */
function axisLabel(value, precision = 1) {
    const abs = Math.abs(value);
    const sign = value < 0 ? "-" : "";
    if (abs >= 1000000000)
        return `${sign}${(abs / 1000000000).toFixed(precision)}B`;
    if (abs >= 1000000)
        return `${sign}${(abs / 1000000).toFixed(precision)}M`;
    if (abs >= 1000)
        return `${sign}${(abs / 1000).toFixed(precision)}K`;
    return `${sign}${abs}`;
}
function axisLabelPrecision(min, max, ticks) {
    const step = (max - min) / ticks;
    if (step === 0)
        return 1;
    const ref = Math.max(Math.abs(min), Math.abs(max));
    let divisor = 1;
    if (ref >= 1000000000)
        divisor = 1000000000;
    else if (ref >= 1000000)
        divisor = 1000000;
    else if (ref >= 1000)
        divisor = 1000;
    const stepInUnits = step / divisor;
    if (stepInUnits >= 0.1)
        return 1;
    if (stepInUnits >= 0.01)
        return 2;
    return 3;
}
/** Convert any CSS colour string to rgba() with the given alpha (0–1). */
function withAlpha(color, alpha) {
    const hex = color.replace(/\s/g, "");
    if (hex.startsWith("#")) {
        let r, g, b;
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        }
        else {
            r = parseInt(hex.slice(1, 3), 16);
            g = parseInt(hex.slice(3, 5), 16);
            b = parseInt(hex.slice(5, 7), 16);
        }
        return `rgba(${r},${g},${b},${alpha})`;
    }
    const m = color.match(/rgba?\(([^)]+)\)/);
    if (m) {
        const parts = m[1].split(",").map(s => s.trim());
        return `rgba(${parts[0]},${parts[1]},${parts[2]},${alpha})`;
    }
    return color;
}
/**
 * Compute the full EMA series for a price array.
 * @param prices - Chronological price array (oldest-first).
 * @param alpha  - Smoothing factor (default 2/(30+1) ≈ 0.0645 for 30-day EMA).
 */
function computeEmaSeries(prices, alpha = 2 / 31) {
    if (prices.length === 0)
        return [];
    const ema = [prices[0]];
    for (let i = 1; i < prices.length; i++) {
        ema.push(alpha * prices[i] + (1 - alpha) * ema[i - 1]);
    }
    return ema;
}
/**
 * Read theme-aware colours for chart rendering from CSS custom properties.
 */
function getChartThemeColors() {
    const isLight = document.body.dataset.mode === "light";
    const cs = getComputedStyle(document.body);
    const textMuted = cs.getPropertyValue("--text-muted").trim();
    const textSoft = cs.getPropertyValue("--text-soft").trim();
    return {
        gridLine: isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.07)",
        axisText: textMuted || (isLight ? "#777" : "#999"),
        emptyText: textSoft || (isLight ? "#999" : "#888"),
        dotStroke: isLight ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.5)",
        legendText: textMuted || (isLight ? "#777" : "#bbb"),
        accentGreen: cs.getPropertyValue("--accent-green").trim() || "#4ec9b0",
        accentRed: cs.getPropertyValue("--accent-red").trim() || "#f44747",
        accentPrimary: cs.getPropertyValue("--accent-primary").trim() || "#569cd6",
    };
}


/***/ },

/***/ "./ui/chart/chartRenderer.ts"
/*!***********************************!*\
  !*** ./ui/chart/chartRenderer.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawBaseChart: () => (/* binding */ drawBaseChart),
/* harmony export */   drawGraphChart: () => (/* binding */ drawGraphChart),
/* harmony export */   drawInteractionOverlay: () => (/* binding */ drawInteractionOverlay),
/* harmony export */   prepCanvas: () => (/* binding */ prepCanvas),
/* harmony export */   resolveNearestPoint: () => (/* binding */ resolveNearestPoint)
/* harmony export */ });
/* harmony import */ var _chartHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartHelpers */ "./ui/chart/chartHelpers.ts");
/**
 * @module ui/chart/chartRenderer
 * Pure canvas rendering functions for the interactive chart.
 *
 * Responsible for:
 *  - Drawing the base chart (axes, grid, price line, EMA, volume, dots).
 *  - Drawing the interaction overlay (crosshair, highlight dots).
 *  - Resolving mouse position to nearest data point.
 *  - Legacy single-canvas chart rendering ({@link drawGraphChart}).
 */

// ─── Canvas helpers ─────────────────────────────────────────────────────────
/**
 * Size a canvas to match CSS dimensions at device-pixel ratio.
 * Reads dimensions from `refCanvas` (usually the base canvas).
 */
function prepCanvas(canvas, refCanvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx)
        return null;
    const dpr = window.devicePixelRatio || 1;
    const cssW = refCanvas.offsetWidth || refCanvas.clientWidth || 480;
    const cssH = refCanvas.offsetHeight || refCanvas.clientHeight || 200;
    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, cssW, cssH };
}
/** Map a data-index + value to canvas pixel coordinates. */
function toXY(index, value, stepX, min, range, cssH) {
    const { left, top, bottom } = _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_MARGIN;
    const plotH = cssH - top - bottom;
    return {
        x: left + index * stepX,
        y: top + plotH - ((value - min) / range) * plotH,
    };
}
/** Compute padded Y-axis range, using full data when zoomed for stable axes. */
function computeYRange(s, data, ema) {
    const isZoomed = s.winEnd - s.winStart + 1 < s.fullData.length;
    const ySource = isZoomed
        ? [...s.fullData, ...s.fullEma.filter(v => v > 0)]
        : [...data, ...ema.filter(v => v > 0)];
    const rawMin = Math.min(...ySource);
    const rawMax = Math.max(...ySource);
    const rawRange = rawMax - rawMin || 1;
    const pad = rawRange * 0.05;
    return { min: rawMin - pad, max: rawMax + pad, range: rawMax + pad - (rawMin - pad) };
}
// ─── Base chart ─────────────────────────────────────────────────────────────
/**
 * Draw the full base chart: axes, grid, volume bars, price line, EMA, dots.
 * Side-effects: sets `aria-label` on `baseCanvas`, toggles `zoomHint`
 * visibility, and updates the price pill colour on `toggleStrip`.
 */
function drawBaseChart(ctx, s, baseCanvas, toggleStrip, zoomHint) {
    const data = s.fullData.slice(s.winStart, s.winEnd + 1);
    const ema = s.fullEma.slice(s.winStart, s.winEnd + 1);
    const { cssW, cssH } = s;
    const { left: mL, right: mR, top: mT, bottom: mB } = _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_MARGIN;
    const plotW = cssW - mL - mR;
    const plotH = cssH - mT - mB;
    if (data.length >= 2) {
        const first = data[0];
        const last = data[data.length - 1];
        const pctDelta = ((last - first) / first * 100).toFixed(1);
        const dir = last > first ? "up" : last < first ? "down" : "flat";
        baseCanvas.setAttribute("aria-label", `Price chart: ${data.length} data points. Trend ${dir} ${pctDelta}% from ${(0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.axisLabel)(first)} to ${(0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.axisLabel)(last)} gp.`);
    }
    else {
        baseCanvas.setAttribute("aria-label", "Price chart: insufficient data to display.");
    }
    const theme = (0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.getChartThemeColors)();
    if (data.length === 0) {
        ctx.font = '12px "Segoe UI", sans-serif';
        ctx.fillStyle = theme.emptyText;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("No price history available", cssW / 2, cssH / 2);
        return;
    }
    if (data.length === 1) {
        ctx.font = '11px "Segoe UI", sans-serif';
        ctx.fillStyle = theme.emptyText;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${(0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.axisLabel)(data[0])} gp (1 day)`, cssW / 2, cssH / 2);
        return;
    }
    const isZoomed = s.winEnd - s.winStart + 1 < s.fullData.length;
    const { min, max, range } = computeYRange(s, data, ema);
    const stepX = plotW / (data.length - 1);
    // Y-axis ticks + grid
    const tickValues = [];
    for (let i = 0; i <= _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_Y_TICKS; i++) {
        tickValues.push(min + (range * i) / _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_Y_TICKS);
    }
    const yPrec = (0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.axisLabelPrecision)(min, max, _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_Y_TICKS);
    ctx.font = '11px "Segoe UI", sans-serif';
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (const tv of tickValues) {
        const y = mT + plotH - ((tv - min) / range) * plotH;
        ctx.strokeStyle = theme.gridLine;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(mL, y);
        ctx.lineTo(cssW - mR, y);
        ctx.stroke();
        ctx.fillStyle = theme.axisText;
        ctx.fillText((0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.axisLabel)(tv, yPrec), mL - 6, y);
    }
    // X-axis labels
    ctx.textBaseline = "top";
    ctx.fillStyle = theme.axisText;
    const SHORT_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const maxLabels = 6;
    const totalDays = data.length - 1;
    let dayInterval = Math.max(1, Math.ceil(totalDays / (maxLabels - 1)));
    const niceIntervals = [1, 2, 5, 7, 10, 14, 15, 30, 45, 60, 90];
    for (const ni of niceIntervals) {
        if (ni >= dayInterval) {
            dayInterval = ni;
            break;
        }
    }
    const labelIndices = [];
    for (let idx = totalDays; idx >= 0; idx -= dayInterval) {
        labelIndices.unshift(idx);
    }
    if (labelIndices[0] !== 0)
        labelIndices.unshift(0);
    const labelY = cssH - mB + 8;
    for (let li = 0; li < labelIndices.length; li++) {
        const idx = labelIndices[li];
        const x = mL + idx * stepX;
        const globalIdx = s.winStart + idx;
        const daysAgo = s.fullData.length - 1 - globalIdx;
        let label;
        if (daysAgo === 0) {
            label = "Today";
        }
        else {
            const d = new Date();
            d.setDate(d.getDate() - daysAgo);
            label = `${d.getDate()} ${SHORT_MONTHS[d.getMonth()]}`;
        }
        if (li === 0)
            ctx.textAlign = "left";
        else if (li === labelIndices.length - 1)
            ctx.textAlign = "right";
        else
            ctx.textAlign = "center";
        ctx.fillText(label, x, labelY);
    }
    const trendFirst = isZoomed ? s.fullData[0] : data[0];
    const trendLast = isZoomed ? s.fullData[s.fullData.length - 1] : data[data.length - 1];
    const lineColour = trendLast > trendFirst ? "#4ec9b0" : trendLast < trendFirst ? "#f44747" : "#888888";
    ctx.save();
    ctx.beginPath();
    ctx.rect(mL, mT, plotW, plotH);
    ctx.clip();
    // Volume bars
    if (s.layers.volume) {
        const winVols = s.fullVolumes.slice(s.winStart, s.winEnd + 1);
        const maxVol = Math.max(...winVols, 1);
        const volMaxH = plotH * 0.25;
        const barW = Math.max(1, stepX * 0.5);
        ctx.globalAlpha = 0.25;
        for (let i = 0; i < winVols.length; i++) {
            if (!winVols[i])
                continue;
            const barH = (winVols[i] / maxVol) * volMaxH;
            const x = mL + i * stepX - barW / 2;
            const y = mT + plotH - barH;
            ctx.fillStyle = winVols[i] >= maxVol * 0.75 ? "#e2b93d" : "#888";
            ctx.fillRect(x, y, barW, barH);
        }
        ctx.globalAlpha = 1;
    }
    // Gradient fill under curve
    if (s.layers.price) {
        const p0 = toXY(0, data[0], stepX, min, range, cssH);
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        for (let i = 1; i < data.length; i++) {
            const p = toXY(i, data[i], stepX, min, range, cssH);
            ctx.lineTo(p.x, p.y);
        }
        const pLast = toXY(data.length - 1, data[data.length - 1], stepX, min, range, cssH);
        ctx.lineTo(pLast.x, mT + plotH);
        ctx.lineTo(p0.x, mT + plotH);
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, mT, 0, mT + plotH);
        grad.addColorStop(0, lineColour + "44");
        grad.addColorStop(1, lineColour + "08");
        ctx.fillStyle = grad;
        ctx.fill();
        // Price line
        ctx.strokeStyle = lineColour;
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.beginPath();
        for (let i = 0; i < data.length; i++) {
            const p = toXY(i, data[i], stepX, min, range, cssH);
            if (i === 0)
                ctx.moveTo(p.x, p.y);
            else
                ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
    }
    // EMA line
    if (s.layers.ema && ema.length >= 2 && ema[0] > 0) {
        ctx.save();
        ctx.strokeStyle = "rgba(86,156,214,0.7)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        for (let i = 0; i < ema.length; i++) {
            const p = toXY(i, ema[i], stepX, min, range, cssH);
            if (i === 0)
                ctx.moveTo(p.x, p.y);
            else
                ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
        ctx.restore();
    }
    // Data-point dots
    if (s.layers.dots && s.layers.price) {
        for (let i = 0; i < data.length; i++) {
            const p = toXY(i, data[i], stepX, min, range, cssH);
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = lineColour;
            ctx.fill();
            ctx.strokeStyle = theme.dotStroke;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }
    ctx.restore();
    zoomHint.style.display = s.fullData.length > _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_MIN_ZOOM ? "" : "none";
    const pricePill = toggleStrip.querySelector('[data-layer="price"]');
    if (pricePill)
        pricePill.style.setProperty("--pill-color", lineColour);
}
// ─── Interaction overlay ────────────────────────────────────────────────────
/**
 * Draw the crosshair lines and highlight dots on the interaction canvas.
 */
function drawInteractionOverlay(canvas, cssX, cssY, s, hoverData) {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.warn('[CHART-DIAG] No ctx for interaction canvas');
        return;
    }
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, s.cssW, s.cssH);
    // ── DIAGNOSTIC: bright red rect should be visible on hover ──
    ctx.fillStyle = 'rgba(255,0,0,0.3)';
    ctx.fillRect(0, 0, 50, 50);
    console.debug('[CHART-DIAG] drawInteractionOverlay', { canvasW: canvas.width, canvasH: canvas.height, cssW: s.cssW, cssH: s.cssH, cssX, cssY, hoverData: !!hoverData });
    const { left: mL, right: mR, top: mT, bottom: mB } = _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_MARGIN;
    const plotW = s.cssW - mL - mR;
    const plotH = s.cssH - mT - mB;
    const cx = Math.max(mL, Math.min(cssX, mL + plotW));
    const cy = Math.max(mT, Math.min(cssY, mT + plotH));
    const accentColour = getComputedStyle(document.body)
        .getPropertyValue("--accent-primary").trim() || "#569cd6";
    ctx.save();
    ctx.beginPath();
    ctx.rect(mL, mT, plotW, plotH);
    ctx.clip();
    ctx.strokeStyle = accentColour;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.moveTo(cx, mT);
    ctx.lineTo(cx, mT + plotH);
    ctx.stroke();
    const snapY = hoverData ? hoverData.y : cy;
    ctx.beginPath();
    ctx.moveTo(mL, snapY);
    ctx.lineTo(mL + plotW, snapY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
    if (hoverData && s.layers.price) {
        const { x, y } = hoverData;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = accentColour;
        ctx.globalAlpha = 0.35;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = accentColour;
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    if (hoverData && s.layers.ema) {
        const data = s.fullData.slice(s.winStart, s.winEnd + 1);
        const ema = s.fullEma.slice(s.winStart, s.winEnd + 1);
        const emaVal = ema[hoverData.windowIndex];
        if (emaVal && emaVal > 0 && data.length >= 2) {
            const { min, range } = computeYRange(s, data, ema);
            const stepXE = plotW / (data.length - 1);
            const ep = toXY(hoverData.windowIndex, emaVal, stepXE, min, range, s.cssH);
            ctx.beginPath();
            ctx.arc(ep.x, ep.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(86,156,214,0.35)";
            ctx.fill();
            ctx.strokeStyle = "rgba(86,156,214,0.9)";
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }
    }
    ctx.restore();
}
// ─── Coordinate resolution ──────────────────────────────────────────────────
/**
 * Map a CSS x-coordinate to the nearest data point.
 * Returns hover data or null if insufficient data.
 */
function resolveNearestPoint(cssX, s) {
    const data = s.fullData.slice(s.winStart, s.winEnd + 1);
    const ema = s.fullEma.slice(s.winStart, s.winEnd + 1);
    if (data.length < 2)
        return null;
    const { left: mL, right: mR } = _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_MARGIN;
    const plotW = s.cssW - mL - mR;
    const stepX = plotW / (data.length - 1);
    const { min, range } = computeYRange(s, data, ema);
    const rawIdx = (cssX - mL) / stepX;
    const idx = Math.max(0, Math.min(Math.round(rawIdx), data.length - 1));
    const globalIdx = s.winStart + idx;
    const pt = toXY(idx, data[idx], stepX, min, range, s.cssH);
    const daysAgo = s.fullData.length - 1 - globalIdx;
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    const dateLabel = d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    return {
        windowIndex: idx,
        dataIndex: globalIdx,
        x: pt.x,
        y: pt.y,
        price: data[idx],
        ema: ema[idx] || 0,
        volume: s.fullVolumes[globalIdx] || 0,
        dateLabel,
    };
}
// ─── Legacy single-canvas chart ─────────────────────────────────────────────
/**
 * Legacy wrapper — draw a chart on an existing single `<canvas>`.
 */
function drawGraphChart(canvas, data) {
    const ctx = canvas.getContext("2d");
    if (!ctx)
        return;
    canvas.setAttribute("role", "img");
    if (data.length >= 2) {
        const first = data[0];
        const last = data[data.length - 1];
        const pctDelta = ((last - first) / first * 100).toFixed(1);
        const dir = last > first ? "up" : last < first ? "down" : "flat";
        canvas.setAttribute("aria-label", `Price chart: ${data.length} data points. Trend ${dir} ${pctDelta}% from ${(0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.axisLabel)(first)} to ${(0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.axisLabel)(last)} gp.`);
    }
    else {
        canvas.setAttribute("aria-label", "Price chart: insufficient data to display.");
    }
    const dpr = window.devicePixelRatio || 1;
    const cssW = canvas.offsetWidth || canvas.width;
    const cssH = canvas.offsetHeight || canvas.height;
    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    ctx.scale(dpr, dpr);
    const themeL = (0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.getChartThemeColors)();
    if (data.length === 0) {
        ctx.font = '12px "Segoe UI", sans-serif';
        ctx.fillStyle = themeL.emptyText;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("No price history available", cssW / 2, cssH / 2);
        return;
    }
    if (data.length === 1) {
        ctx.font = '11px "Segoe UI", sans-serif';
        ctx.fillStyle = themeL.emptyText;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${(0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.axisLabel)(data[0])} gp (1 day)`, cssW / 2, cssH / 2);
        return;
    }
    const { left: mL, right: mR, top: mT, bottom: mB } = _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_MARGIN;
    const plotW = cssW - mL - mR;
    const plotH = cssH - mT - mB;
    const rawMin = Math.min(...data);
    const rawMax = Math.max(...data);
    const rawRange = rawMax - rawMin || 1;
    const pad = rawRange * 0.05;
    const min = rawMin - pad;
    const max = rawMax + pad;
    const range = max - min;
    const stepX = plotW / (data.length - 1);
    // Y-axis ticks + grid
    const tickValues = [];
    for (let i = 0; i <= _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_Y_TICKS; i++)
        tickValues.push(min + (range * i) / _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_Y_TICKS);
    const yPrec = (0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.axisLabelPrecision)(rawMin, rawMax, _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_Y_TICKS);
    ctx.font = '11px "Segoe UI", sans-serif';
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (const tv of tickValues) {
        const y = mT + plotH - ((tv - min) / range) * plotH;
        ctx.strokeStyle = themeL.gridLine;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(mL, y);
        ctx.lineTo(cssW - mR, y);
        ctx.stroke();
        ctx.fillStyle = themeL.axisText;
        ctx.fillText((0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.axisLabel)(tv, yPrec), mL - 6, y);
    }
    // X-axis labels
    ctx.textBaseline = "top";
    ctx.fillStyle = themeL.axisText;
    const SHORT_MONTHS_L = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const maxLabelsL = 6;
    const totalDaysL = data.length - 1;
    let dayIntervalL = Math.max(1, Math.ceil(totalDaysL / (maxLabelsL - 1)));
    const niceIntervalsL = [1, 2, 5, 7, 10, 14, 15, 30, 45, 60, 90];
    for (const ni of niceIntervalsL) {
        if (ni >= dayIntervalL) {
            dayIntervalL = ni;
            break;
        }
    }
    const labelIndicesL = [];
    for (let idx = totalDaysL; idx >= 0; idx -= dayIntervalL) {
        labelIndicesL.unshift(idx);
    }
    if (labelIndicesL[0] !== 0)
        labelIndicesL.unshift(0);
    const labelYL = cssH - mB + 8;
    for (let li = 0; li < labelIndicesL.length; li++) {
        const idx = labelIndicesL[li];
        const x = mL + idx * stepX;
        const daysAgo = data.length - 1 - idx;
        let label;
        if (daysAgo === 0) {
            label = "Today";
        }
        else {
            const d = new Date();
            d.setDate(d.getDate() - daysAgo);
            label = `${d.getDate()} ${SHORT_MONTHS_L[d.getMonth()]}`;
        }
        if (li === 0)
            ctx.textAlign = "left";
        else if (li === labelIndicesL.length - 1)
            ctx.textAlign = "right";
        else
            ctx.textAlign = "center";
        ctx.fillText(label, x, labelYL);
    }
    const toXYL = (i) => ({
        x: mL + i * stepX,
        y: mT + plotH - ((data[i] - min) / range) * plotH,
    });
    const first = data[0];
    const last = data[data.length - 1];
    const lineColour = last > first ? "#4ec9b0" : last < first ? "#f44747" : "#888888";
    // Gradient fill
    ctx.beginPath();
    ctx.moveTo(toXYL(0).x, toXYL(0).y);
    for (let i = 1; i < data.length; i++) {
        const p = toXYL(i);
        ctx.lineTo(p.x, p.y);
    }
    ctx.lineTo(toXYL(data.length - 1).x, mT + plotH);
    ctx.lineTo(toXYL(0).x, mT + plotH);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, mT, 0, mT + plotH);
    grad.addColorStop(0, lineColour + "44");
    grad.addColorStop(1, lineColour + "08");
    ctx.fillStyle = grad;
    ctx.fill();
    // Price line
    ctx.strokeStyle = lineColour;
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
        const p = toXYL(i);
        if (i === 0)
            ctx.moveTo(p.x, p.y);
        else
            ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
    // Data-point dots
    for (let i = 0; i < data.length; i++) {
        const p = toXYL(i);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = lineColour;
        ctx.fill();
        ctx.strokeStyle = themeL.dotStroke;
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}


/***/ },

/***/ "./ui/chart/chartTooltip.ts"
/*!**********************************!*\
  !*** ./ui/chart/chartTooltip.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTooltipHtml: () => (/* binding */ buildTooltipHtml),
/* harmony export */   computeTooltipPosition: () => (/* binding */ computeTooltipPosition)
/* harmony export */ });
/* harmony import */ var _chartHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartHelpers */ "./ui/chart/chartHelpers.ts");
/**
 * @module ui/chart/chartTooltip
 * Pure functions for chart tooltip content generation and positioning.
 */

/**
 * Build the inner HTML for the chart tooltip.
 */
function buildTooltipHtml(hd, layers, fullData) {
    const emaRow = layers.ema && hd.ema > 0
        ? `<div class="chart-tooltip-row"><span class="chart-tooltip-label">30d EMA</span><span class="chart-tooltip-value">${Math.round(hd.ema).toLocaleString("en-US")} gp</span></div>`
        : "";
    const volRow = layers.volume && hd.volume > 0
        ? `<div class="chart-tooltip-row"><span class="chart-tooltip-label">Volume</span><span class="chart-tooltip-value">${hd.volume.toLocaleString("en-US")}</span></div>`
        : "";
    const priceDir = fullData.length >= 2 && hd.dataIndex > 0
        ? (hd.price > fullData[hd.dataIndex - 1] ? "up" : hd.price < fullData[hd.dataIndex - 1] ? "down" : "")
        : "";
    return (`<div class="chart-tooltip-row"><span class="chart-tooltip-label">Date</span><span class="chart-tooltip-value">${hd.dateLabel}</span></div>` +
        `<div class="chart-tooltip-row"><span class="chart-tooltip-label">Price</span><span class="chart-tooltip-value ${priceDir}">${hd.price.toLocaleString("en-US")} gp</span></div>` +
        emaRow + volRow);
}
/**
 * Compute tooltip position relative to the chart canvas wrapper.
 */
function computeTooltipPosition(hd, cssW, cssH) {
    const tipW = 180;
    const tipH = 80;
    const { left: mL, right: mR } = _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_MARGIN;
    const plotW = cssW - mL - mR;
    const plotMidX = mL + plotW / 2;
    let left;
    if (hd.x > plotMidX) {
        left = hd.x - tipW - 14;
    }
    else {
        left = hd.x + 14;
    }
    let top = hd.y - tipH / 2;
    if (left + tipW > cssW - 4)
        left = cssW - tipW - 4;
    if (left < 4)
        left = 4;
    if (top < 4)
        top = 4;
    if (top + tipH > cssH - 4)
        top = cssH - tipH - 4;
    return { left, top };
}


/***/ },

/***/ "./ui/chart/interactiveChart.ts"
/*!**************************************!*\
  !*** ./ui/chart/interactiveChart.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InteractiveChart: () => (/* binding */ InteractiveChart),
/* harmony export */   createInteractiveChart: () => (/* binding */ createInteractiveChart),
/* harmony export */   destroyInteractiveChart: () => (/* binding */ destroyInteractiveChart),
/* harmony export */   getActiveCharts: () => (/* binding */ getActiveCharts)
/* harmony export */ });
/* harmony import */ var _chartHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartHelpers */ "./ui/chart/chartHelpers.ts");
/* harmony import */ var _chartRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartRenderer */ "./ui/chart/chartRenderer.ts");
/* harmony import */ var _chartTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartTooltip */ "./ui/chart/chartTooltip.ts");
/**
 * @module ui/chart/interactiveChart
 * Dual-canvas interactive chart with crosshair, tooltip, scroll-zoom, and drag-pan.
 * Also contains the active-chart registry.
 */



/**
 * Dual-canvas interactive chart with crosshair, tooltip, and scroll-zoom.
 */
class InteractiveChart {
    constructor(parent, height = "200px") {
        this.fullData = [];
        this.fullEma = [];
        this.fullVolumes = [];
        this.winStart = 0;
        this.winEnd = 0;
        this.hoverData = null;
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartWinStart = 0;
        this.dragStartWinEnd = 0;
        this.dragEndedAt = 0;
        this.cssW = 0;
        this.cssH = 0;
        this.resizeObs = null;
        this.container = document.createElement("div");
        this.container.className = "chart-container";
        this.baseCanvas = document.createElement("canvas");
        this.baseCanvas.className = "chart-base-canvas";
        this.baseCanvas.style.height = height;
        this.baseCanvas.setAttribute("role", "img");
        this.baseCanvas.setAttribute("aria-label", "Price chart: loading\u2026");
        this.interCanvas = document.createElement("canvas");
        this.interCanvas.className = "chart-interaction-canvas";
        this.tooltip = document.createElement("div");
        this.tooltip.className = "chart-tooltip";
        this.zoomHint = document.createElement("div");
        this.zoomHint.className = "chart-zoom-hint";
        this.zoomHint.textContent = "Scroll to zoom \u2022 Drag to pan";
        this.layers = (0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.loadChartLayers)();
        this.toggleStrip = document.createElement("div");
        this.toggleStrip.className = "chart-layer-toggles";
        const layerDefs = [
            { key: "price", label: "Price", color: "#4ec9b0" },
            { key: "ema", label: "EMA", color: "#569cd6" },
            { key: "volume", label: "Volume", color: "#888" },
            { key: "dots", label: "Dots", color: "#bbb" },
        ];
        for (const def of layerDefs) {
            const pill = document.createElement("button");
            pill.type = "button";
            pill.className = "chart-layer-pill" + (this.layers[def.key] ? " active" : "");
            pill.dataset.layer = def.key;
            pill.style.setProperty("--pill-color", def.color);
            pill.textContent = def.label;
            pill.addEventListener("click", () => {
                this.layers[def.key] = !this.layers[def.key];
                pill.classList.toggle("active", this.layers[def.key]);
                (0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.saveChartLayers)(this.layers);
                this.drawBase();
                if (this.hoverData) {
                    this.drawInteraction(this.hoverData.x, this.hoverData.y);
                }
            });
            this.toggleStrip.appendChild(pill);
        }
        this.canvasWrap = document.createElement("div");
        this.canvasWrap.className = "chart-canvas-wrap";
        this.container.appendChild(this.toggleStrip);
        this.canvasWrap.appendChild(this.baseCanvas);
        this.canvasWrap.appendChild(this.interCanvas);
        this.canvasWrap.appendChild(this.tooltip);
        this.container.appendChild(this.canvasWrap);
        this.container.appendChild(this.zoomHint);
        parent.appendChild(this.container);
        this.resizeObs = new ResizeObserver(() => {
            if (this.fullData.length >= 2)
                this.drawBase();
        });
        this.resizeObs.observe(this.baseCanvas);
        this.boundMouseMove = this.onMouseMove.bind(this);
        this.boundMouseLeave = this.onMouseLeave.bind(this);
        this.boundWheel = this.onWheel.bind(this);
        this.boundMouseDown = this.onMouseDown.bind(this);
        this.boundMouseUp = this.onMouseUp.bind(this);
        this.boundGlobalMouseMove = this.onGlobalMouseMove.bind(this);
        this.container.addEventListener("mousemove", this.boundMouseMove);
        this.container.addEventListener("mouseleave", this.boundMouseLeave);
        this.container.addEventListener("wheel", this.boundWheel, { passive: false });
        this.container.addEventListener("mousedown", this.boundMouseDown);
        window.addEventListener("mouseup", this.boundMouseUp);
        window.addEventListener("mousemove", this.boundGlobalMouseMove);
    }
    setData(prices, volumes = []) {
        this.fullData = prices;
        this.fullEma = (0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.computeEmaSeries)(prices);
        this.fullVolumes = volumes;
        this.winStart = 0;
        this.winEnd = prices.length - 1;
        this.hoverData = null;
        this.hideTooltip();
        this.drawBase();
    }
    destroy() {
        if (this.resizeObs) {
            this.resizeObs.disconnect();
            this.resizeObs = null;
        }
        this.container.removeEventListener("mousemove", this.boundMouseMove);
        this.container.removeEventListener("mouseleave", this.boundMouseLeave);
        this.container.removeEventListener("wheel", this.boundWheel);
        this.container.removeEventListener("mousedown", this.boundMouseDown);
        window.removeEventListener("mouseup", this.boundMouseUp);
        window.removeEventListener("mousemove", this.boundGlobalMouseMove);
        this.container.remove();
    }
    getElement() { return this.container; }
    getBaseCanvas() { return this.baseCanvas; }
    redraw() {
        if (this.fullData.length >= 2)
            this.drawBase();
    }
    wasDragging() {
        return Date.now() - this.dragEndedAt < 300;
    }
    // ═══════════════════════════════════════════════════════════════════════════
    //  PRIVATE — Drawing
    // ═══════════════════════════════════════════════════════════════════════════
    getViewState() {
        return {
            fullData: this.fullData,
            fullEma: this.fullEma,
            fullVolumes: this.fullVolumes,
            winStart: this.winStart,
            winEnd: this.winEnd,
            layers: this.layers,
            cssW: this.cssW,
            cssH: this.cssH,
        };
    }
    windowedData() {
        return this.fullData.slice(this.winStart, this.winEnd + 1);
    }
    drawBase() {
        const result = (0,_chartRenderer__WEBPACK_IMPORTED_MODULE_1__.prepCanvas)(this.baseCanvas, this.baseCanvas);
        if (!result)
            return;
        this.cssW = result.cssW;
        this.cssH = result.cssH;
        (0,_chartRenderer__WEBPACK_IMPORTED_MODULE_1__.prepCanvas)(this.interCanvas, this.baseCanvas);
        (0,_chartRenderer__WEBPACK_IMPORTED_MODULE_1__.drawBaseChart)(result.ctx, this.getViewState(), this.baseCanvas, this.toggleStrip, this.zoomHint);
    }
    drawInteraction(cssX, cssY) {
        (0,_chartRenderer__WEBPACK_IMPORTED_MODULE_1__.drawInteractionOverlay)(this.interCanvas, cssX, cssY, this.getViewState(), this.hoverData);
    }
    // ═══════════════════════════════════════════════════════════════════════════
    //  PRIVATE — Coordinate mapping
    // ═══════════════════════════════════════════════════════════════════════════
    clientToCSS(e) {
        const rect = this.baseCanvas.getBoundingClientRect();
        return { cssX: e.clientX - rect.left, cssY: e.clientY - rect.top };
    }
    resolveNearestPoint(cssX) {
        const hd = (0,_chartRenderer__WEBPACK_IMPORTED_MODULE_1__.resolveNearestPoint)(cssX, this.getViewState());
        this.hoverData = hd;
        return hd;
    }
    // ═══════════════════════════════════════════════════════════════════════════
    //  PRIVATE — Tooltip
    // ═══════════════════════════════════════════════════════════════════════════
    showTooltip(hd) {
        this.tooltip.innerHTML = (0,_chartTooltip__WEBPACK_IMPORTED_MODULE_2__.buildTooltipHtml)(hd, this.layers, this.fullData);
        const pos = (0,_chartTooltip__WEBPACK_IMPORTED_MODULE_2__.computeTooltipPosition)(hd, this.cssW, this.cssH);
        this.tooltip.style.left = `${pos.left}px`;
        this.tooltip.style.top = `${pos.top}px`;
        this.tooltip.classList.add("visible");
    }
    hideTooltip() {
        this.tooltip.classList.remove("visible");
    }
    // ═══════════════════════════════════════════════════════════════════════════
    //  PRIVATE — Event handlers
    // ═══════════════════════════════════════════════════════════════════════════
    onMouseMove(e) {
        if (this.isDragging)
            return;
        const { cssX, cssY } = this.clientToCSS(e);
        console.debug('[CHART-DIAG] onMouseMove', { cssX, cssY, cssW: this.cssW, cssH: this.cssH, dataLen: this.fullData.length });
        const hd = this.resolveNearestPoint(cssX);
        this.drawInteraction(cssX, cssY);
        if (hd) {
            this.showTooltip(hd);
            this.baseCanvas.setAttribute("aria-label", `Price chart: hovering ${hd.dateLabel}, ${hd.price.toLocaleString("en-US")} gp.`);
        }
    }
    onMouseLeave() {
        if (!this.isDragging) {
            this.hoverData = null;
            const ctx = this.interCanvas.getContext("2d");
            if (ctx) {
                const dpr = window.devicePixelRatio || 1;
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                ctx.clearRect(0, 0, this.cssW, this.cssH);
            }
            this.hideTooltip();
            const data = this.windowedData();
            if (data.length >= 2) {
                const first = data[0];
                const last = data[data.length - 1];
                const pctDelta = ((last - first) / first * 100).toFixed(1);
                const dir = last > first ? "up" : last < first ? "down" : "flat";
                this.baseCanvas.setAttribute("aria-label", `Price chart: ${data.length} data points. Trend ${dir} ${pctDelta}% from ${(0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.axisLabel)(first)} to ${(0,_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.axisLabel)(last)} gp.`);
            }
        }
    }
    onMouseDown(e) {
        if (e.button !== 0)
            return;
        const winLen = this.winEnd - this.winStart + 1;
        if (winLen >= this.fullData.length)
            return;
        this.isDragging = true;
        this.dragStartX = this.clientToCSS(e).cssX;
        this.dragStartWinStart = this.winStart;
        this.dragStartWinEnd = this.winEnd;
        this.hideTooltip();
        this.updateCursor();
        e.preventDefault();
    }
    onMouseUp(_e) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.dragEndedAt = Date.now();
        this.updateCursor();
    }
    onGlobalMouseMove(e) {
        if (!this.isDragging)
            return;
        const { cssX } = this.clientToCSS(e);
        const dx = cssX - this.dragStartX;
        const { left: mL, right: mR } = _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_MARGIN;
        const plotW = this.cssW - mL - mR;
        const winLen = this.dragStartWinEnd - this.dragStartWinStart + 1;
        const stepX = plotW / (winLen - 1);
        const indexDelta = Math.round(-dx / stepX);
        let newStart = this.dragStartWinStart + indexDelta;
        newStart = Math.max(0, Math.min(newStart, this.fullData.length - winLen));
        const newEnd = newStart + winLen - 1;
        if (newStart !== this.winStart || newEnd !== this.winEnd) {
            this.winStart = newStart;
            this.winEnd = newEnd;
            this.hoverData = null;
            this.hideTooltip();
            this.drawBase();
        }
    }
    updateCursor() {
        const isZoomed = (this.winEnd - this.winStart + 1) < this.fullData.length;
        if (this.isDragging)
            this.container.style.cursor = "grabbing";
        else if (isZoomed)
            this.container.style.cursor = "grab";
        else
            this.container.style.cursor = "crosshair";
    }
    onWheel(e) {
        if (this.fullData.length <= _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_MIN_ZOOM)
            return;
        e.preventDefault();
        const { cssX } = this.clientToCSS(e);
        const data = this.windowedData();
        if (data.length < 2)
            return;
        const { left: mL, right: mR } = _chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_MARGIN;
        const plotW = this.cssW - mL - mR;
        const stepX = plotW / (data.length - 1);
        const rawIdx = (cssX - mL) / stepX;
        const frac = Math.max(0, Math.min(rawIdx / (data.length - 1), 1));
        const currentLen = this.winEnd - this.winStart + 1;
        const zoomIn = e.deltaY < 0;
        let newLen;
        if (zoomIn) {
            newLen = Math.max(_chartHelpers__WEBPACK_IMPORTED_MODULE_0__.CHART_MIN_ZOOM, Math.floor(currentLen * 0.75));
        }
        else {
            newLen = Math.min(this.fullData.length, Math.ceil(currentLen / 0.75));
        }
        if (newLen === currentLen)
            return;
        const pivotGlobal = this.winStart + frac * (currentLen - 1);
        let newStart = Math.round(pivotGlobal - frac * (newLen - 1));
        newStart = Math.max(0, Math.min(newStart, this.fullData.length - newLen));
        const newEnd = newStart + newLen - 1;
        this.winStart = newStart;
        this.winEnd = Math.min(newEnd, this.fullData.length - 1);
        this.hoverData = null;
        this.hideTooltip();
        this.drawBase();
        this.updateCursor();
    }
}
// ─── Active chart registry ──────────────────────────────────────────────────
const activeCharts = new Map();
/** Return the active chart instance map (used by theme to redraw on change). */
function getActiveCharts() {
    return activeCharts;
}
/**
 * Create (or replace) an InteractiveChart in the given parent.
 */
function createInteractiveChart(key, parent, data, volumes = [], height = "200px") {
    const prev = activeCharts.get(key);
    if (prev)
        prev.destroy();
    const chart = new InteractiveChart(parent, height);
    chart.setData(data, volumes);
    activeCharts.set(key, chart);
    return chart;
}
/**
 * Destroy the interactive chart for a given key (called on modal hide).
 */
function destroyInteractiveChart(key) {
    const chart = activeCharts.get(key);
    if (chart) {
        chart.destroy();
        activeCharts.delete(key);
    }
}


/***/ },

/***/ "./ui/chat.ts"
/*!********************!*\
  !*** ./ui/chat.ts ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindChatEvents: () => (/* binding */ bindChatEvents),
/* harmony export */   bindClearChat: () => (/* binding */ bindClearChat),
/* harmony export */   restoreChatHistory: () => (/* binding */ restoreChatHistory)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./services/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./ui/constants.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./ui/settings.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./ui/state.ts");
/**
 * @module ui/chat
 * LLM chat advisor interface — send, receive, persist, restore.
 */





// ─── LLM Instance ───────────────────────────────────────────────────────────
function resolvedLLMConfig() {
    const providerId = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_PROVIDER) ?? _services__WEBPACK_IMPORTED_MODULE_0__.LLM_PROVIDERS[0].id;
    const provider = (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getProviderById)(providerId);
    const modelOverride = (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_MODEL) ?? "").trim();
    const customEndpoint = (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_ENDPOINT) ?? "").trim();
    const endpoint = provider.id === "custom"
        ? customEndpoint || "http://localhost:1234/v1/chat/completions"
        : provider.endpoint;
    const model = modelOverride || provider.defaultModel;
    return { endpoint, model };
}
function ensureLLMService() {
    const apiKey = (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_API_KEY) ?? "").trim();
    const config = { apiKey, ...resolvedLLMConfig() };
    let llm = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getLLM)();
    if (!llm) {
        llm = new _services__WEBPACK_IMPORTED_MODULE_0__.LLMService(config);
        (0,_state__WEBPACK_IMPORTED_MODULE_4__.setLLM)(llm);
    }
    return llm;
}
// ─── Chat Helpers ───────────────────────────────────────────────────────────
function appendMessage(kind, text) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    const div = document.createElement("div");
    div.className = `chat-msg ${kind}`;
    div.textContent = text;
    els.chatHistory.appendChild(div);
    scrollChatToBottom();
    return div;
}
function removeMessage(el) {
    el.remove();
}
function scrollChatToBottom() {
    (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)().chatHistory.scrollTop = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)().chatHistory.scrollHeight;
}
function setInputLock(locked) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    els.chatInput.disabled = locked;
    els.chatSendBtn.disabled = locked;
}
function formatLLMError(err) {
    switch (err.status) {
        case 401:
            return "Authentication failed \u2014 double-check your API key in \u2699 Settings.";
        case 403:
            return "Access denied \u2014 your API key may lack the required permissions.";
        case 429:
            return "Rate limited \u2014 the API quota has been exceeded. Wait a moment and try again.";
        default:
            return err.status >= 500
                ? "The LLM provider is experiencing issues. Try again later."
                : `LLM request failed (HTTP ${err.status}). Check the console for details.`;
    }
}
// ─── Send ───────────────────────────────────────────────────────────────────
async function handleSend() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    const query = els.chatInput.value.trim();
    if (!query)
        return;
    const apiKey = (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_API_KEY) ?? "").trim();
    const providerId = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_PROVIDER) ?? _services__WEBPACK_IMPORTED_MODULE_0__.LLM_PROVIDERS[0].id;
    if (!apiKey && providerId !== "custom") {
        appendMessage("error", "No API key configured. Open \u2699 Settings and save a key first.");
        return;
    }
    appendMessage("user", query);
    els.chatInput.value = "";
    setInputLock(true);
    const thinkingEl = appendMessage("thinking", "Thinking");
    try {
        const service = ensureLLMService();
        const newsCtx = els.newsContextToggle.checked ? (0,_state__WEBPACK_IMPORTED_MODULE_4__.getLatestNewsContext)() : undefined;
        const advice = await service.generateAdvice(query, (0,_state__WEBPACK_IMPORTED_MODULE_4__.getLatestLLMContext)() || (0,_state__WEBPACK_IMPORTED_MODULE_4__.getLatestMarketSummary)(), newsCtx);
        removeMessage(thinkingEl);
        appendMessage("assistant", advice);
        persistChatHistory();
    }
    catch (err) {
        removeMessage(thinkingEl);
        if (err instanceof _services__WEBPACK_IMPORTED_MODULE_0__.LLMRequestError) {
            console.error(`[UIService] LLM error (HTTP ${err.status}):`, err.message);
            appendMessage("error", formatLLMError(err));
        }
        else {
            console.error("[UIService] Chat pipeline error:", err);
            appendMessage("error", `Unexpected error \u2014 see browser console.`);
        }
    }
    finally {
        setInputLock(false);
        scrollChatToBottom();
    }
}
// ─── Persistence ────────────────────────────────────────────────────────────
function extractPlayerQuestion(content) {
    const marker = "=== PLAYER QUESTION ===";
    const idx = content.indexOf(marker);
    if (idx === -1)
        return content;
    return content.slice(idx + marker.length).trim();
}
function persistChatHistory() {
    const llm = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getLLM)();
    if (!llm)
        return;
    const all = llm.messages;
    const nonSystem = all.filter((m) => m.role !== "system");
    const trimmed = nonSystem.slice(-_constants__WEBPACK_IMPORTED_MODULE_1__.MAX_SAVED_MESSAGES);
    const cleaned = trimmed.map((m) => {
        if (m.role === "user") {
            return { role: m.role, content: extractPlayerQuestion(m.content) };
        }
        return { role: m.role, content: m.content };
    });
    try {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_CHAT_HISTORY, JSON.stringify(cleaned));
    }
    catch (err) {
        console.warn("[UIService] Could not persist chat history:", err);
    }
}
function restoreChatHistory() {
    const raw = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_CHAT_HISTORY);
    if (!raw)
        return;
    try {
        const saved = JSON.parse(raw);
        if (!Array.isArray(saved) || saved.length === 0)
            return;
        for (const msg of saved) {
            if (msg.role === "user" || msg.role === "assistant") {
                appendMessage(msg.role, msg.content);
            }
        }
        const service = ensureLLMService();
        const chatMessages = saved
            .filter((m) => m.role === "user" || m.role === "assistant")
            .map((m) => ({ role: m.role, content: m.content }));
        service.loadHistory(chatMessages);
        scrollChatToBottom();
        console.log(`[UIService] Restored ${chatMessages.length} chat messages from localStorage.`);
    }
    catch (err) {
        console.warn("[UIService] Failed to parse saved chat history:", err);
        localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_CHAT_HISTORY);
    }
}
// ─── Event Binding ──────────────────────────────────────────────────────────
function bindChatEvents() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    els.chatSendBtn.addEventListener("click", handleSend);
    els.chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });
}
function bindClearChat() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    els.clearChatBtn.addEventListener("click", () => {
        els.chatHistory.innerHTML = "";
        localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_CHAT_HISTORY);
        const llm = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getLLM)();
        if (llm)
            llm.clearHistory();
        console.log("[UIService] Chat history cleared.");
    });
}


/***/ },

/***/ "./ui/collapseToggle.ts"
/*!******************************!*\
  !*** ./ui/collapseToggle.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindCollapseToggle: () => (/* binding */ bindCollapseToggle)
/* harmony export */ });
/**
 * @module ui/collapseToggle
 * Shared collapse/expand toggle for collapsible section headers.
 */
/**
 * Wire a standard collapse toggle on a section.
 * Returns a getter for the current collapsed state.
 */
function bindCollapseToggle(opts) {
    let collapsed = opts.storageKey
        ? localStorage.getItem(opts.storageKey) === "true"
        : false;
    const apply = () => {
        opts.collapseBtn.textContent = collapsed ? "\u25B8" : "\u25BE";
        for (const el of opts.targets)
            el.style.display = collapsed ? "none" : "";
        if (opts.storageKey)
            localStorage.setItem(opts.storageKey, String(collapsed));
        opts.onToggle?.(collapsed);
    };
    const toggle = () => { collapsed = !collapsed; apply(); };
    opts.collapseBtn.addEventListener("click", (e) => { e.stopPropagation(); toggle(); });
    opts.headerBar?.addEventListener("click", toggle);
    for (const el of opts.stopPropagationEls ?? []) {
        el.addEventListener("click", (e) => e.stopPropagation());
    }
    // Apply initial state when restoring from localStorage
    if (collapsed)
        apply();
    return () => collapsed;
}


/***/ },

/***/ "./ui/constants.ts"
/*!*************************!*\
  !*** ./ui/constants.ts ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUY_LIMIT_WINDOW_MS: () => (/* binding */ BUY_LIMIT_WINDOW_MS),
/* harmony export */   CONTRAST_CHECK_TOKENS: () => (/* binding */ CONTRAST_CHECK_TOKENS),
/* harmony export */   DETAIL_LABELS: () => (/* binding */ DETAIL_LABELS),
/* harmony export */   DETAIL_TIPS: () => (/* binding */ DETAIL_TIPS),
/* harmony export */   FAV_SORT_KEY: () => (/* binding */ FAV_SORT_KEY),
/* harmony export */   LEGACY_COLORWAY_MAP: () => (/* binding */ LEGACY_COLORWAY_MAP),
/* harmony export */   LS_ACTIVE_TAB: () => (/* binding */ LS_ACTIVE_TAB),
/* harmony export */   LS_ADVANCED_MODE: () => (/* binding */ LS_ADVANCED_MODE),
/* harmony export */   LS_ALLOCATION_BUDGET: () => (/* binding */ LS_ALLOCATION_BUDGET),
/* harmony export */   LS_ALLOCATION_STRATEGY: () => (/* binding */ LS_ALLOCATION_STRATEGY),
/* harmony export */   LS_API_KEY: () => (/* binding */ LS_API_KEY),
/* harmony export */   LS_CHART_LAYERS: () => (/* binding */ LS_CHART_LAYERS),
/* harmony export */   LS_CHAT_HISTORY: () => (/* binding */ LS_CHAT_HISTORY),
/* harmony export */   LS_COLORWAY: () => (/* binding */ LS_COLORWAY),
/* harmony export */   LS_COMPACT_TILES: () => (/* binding */ LS_COMPACT_TILES),
/* harmony export */   LS_CONTRAST: () => (/* binding */ LS_CONTRAST),
/* harmony export */   LS_CONTRAST_AUTO: () => (/* binding */ LS_CONTRAST_AUTO),
/* harmony export */   LS_DEEP_HISTORY: () => (/* binding */ LS_DEEP_HISTORY),
/* harmony export */   LS_DISCLAIMER_ACK: () => (/* binding */ LS_DISCLAIMER_ACK),
/* harmony export */   LS_ENDPOINT: () => (/* binding */ LS_ENDPOINT),
/* harmony export */   LS_FAVORITES: () => (/* binding */ LS_FAVORITES),
/* harmony export */   LS_FILTER_CONFIDENCE: () => (/* binding */ LS_FILTER_CONFIDENCE),
/* harmony export */   LS_FILTER_PRICE: () => (/* binding */ LS_FILTER_PRICE),
/* harmony export */   LS_FILTER_VOLUME: () => (/* binding */ LS_FILTER_VOLUME),
/* harmony export */   LS_INFO_BANNER_DISMISSED: () => (/* binding */ LS_INFO_BANNER_DISMISSED),
/* harmony export */   LS_LAYOUT: () => (/* binding */ LS_LAYOUT),
/* harmony export */   LS_LIMIT_RESET_NOTIFS: () => (/* binding */ LS_LIMIT_RESET_NOTIFS),
/* harmony export */   LS_MODE: () => (/* binding */ LS_MODE),
/* harmony export */   LS_MODEL: () => (/* binding */ LS_MODEL),
/* harmony export */   LS_NEWS_CONTEXT: () => (/* binding */ LS_NEWS_CONTEXT),
/* harmony export */   LS_PNL_COLLAPSED: () => (/* binding */ LS_PNL_COLLAPSED),
/* harmony export */   LS_PORTFOLIO_SUB_TAB: () => (/* binding */ LS_PORTFOLIO_SUB_TAB),
/* harmony export */   LS_PROVIDER: () => (/* binding */ LS_PROVIDER),
/* harmony export */   LS_STYLE: () => (/* binding */ LS_STYLE),
/* harmony export */   LS_THEME: () => (/* binding */ LS_THEME),
/* harmony export */   LS_VIEW_MODE: () => (/* binding */ LS_VIEW_MODE),
/* harmony export */   LS_WINLOSS_COLLAPSED: () => (/* binding */ LS_WINLOSS_COLLAPSED),
/* harmony export */   MAX_SAVED_MESSAGES: () => (/* binding */ MAX_SAVED_MESSAGES),
/* harmony export */   PORTFOLIO_TICK_MS: () => (/* binding */ PORTFOLIO_TICK_MS),
/* harmony export */   SEARCH_SORT_KEY: () => (/* binding */ SEARCH_SORT_KEY),
/* harmony export */   TOP20_SORT_KEY: () => (/* binding */ TOP20_SORT_KEY),
/* harmony export */   WCAG_AA_RATIO: () => (/* binding */ WCAG_AA_RATIO)
/* harmony export */ });
/**
 * @module ui/constants
 * All static constants, type aliases, label maps, and search filter category
 * definitions used across the UI layer.
 */
// ─── localStorage key constants ─────────────────────────────────────────────
const LS_API_KEY = "ger:llm-api-key";
const LS_PROVIDER = "ger:llm-provider";
const LS_MODEL = "ger:llm-model";
const LS_ENDPOINT = "ger:llm-endpoint";
const LS_VIEW_MODE = "ger:view-mode";
const LS_COMPACT_TILES = "ger:compact-tiles";
const LS_LAYOUT = "ger:layout";
const LS_THEME = "ger:theme";
const LS_STYLE = "ger:style";
const LS_COLORWAY = "ger:colorway";
const LS_MODE = "ger:mode";
const LS_CONTRAST = "ger:contrast";
const LS_CHAT_HISTORY = "ger:chat-history";
const LS_FAVORITES = "ger:favorites";
const LS_DEEP_HISTORY = "ger:deep-history";
const LS_CONTRAST_AUTO = "ger:contrast-auto-correct";
const LS_DISCLAIMER_ACK = "ger:disclaimer-ack";
const LS_LIMIT_RESET_NOTIFS = "ger:limit-reset-notifs";
const LS_ACTIVE_TAB = "ger:active-tab";
const LS_FILTER_VOLUME = "ger:filter-volume";
const LS_FILTER_PRICE = "ger:filter-price";
const LS_FILTER_CONFIDENCE = "ger:filter-confidence";
const LS_PORTFOLIO_SUB_TAB = "ger:portfolio-sub-tab";
const LS_NEWS_CONTEXT = "ger:news-context";
const LS_PNL_COLLAPSED = "ger:pnl-collapsed";
const LS_WINLOSS_COLLAPSED = "ger:winloss-collapsed";
const LS_ADVANCED_MODE = "ger:advanced-mode";
const LS_INFO_BANNER_DISMISSED = "ger:info-banner-dismissed";
const LS_ALLOCATION_STRATEGY = "ger:allocation-strategy";
const LS_ALLOCATION_BUDGET = "ger:allocation-budget";
const LS_CHART_LAYERS = "ger:chart-layers";
// ─── Numeric constants ──────────────────────────────────────────────────────
/** WCAG AA minimum contrast ratio for normal text. */
const WCAG_AA_RATIO = 4.5;
/** Maximum number of messages (user + assistant) persisted to localStorage. */
const MAX_SAVED_MESSAGES = 50;
/** GE buy-limit window duration in milliseconds (4 hours). */
const BUY_LIMIT_WINDOW_MS = 4 * 60 * 60 * 1000;
/** Portfolio countdown refresh interval in milliseconds (every 30 s). */
const PORTFOLIO_TICK_MS = 30000;
/** CSS custom properties checked for WCAG AA compliance against the effective background. */
const CONTRAST_CHECK_TOKENS = [
    "--text-muted",
    "--text-accent",
    "--text-heading",
    "--text-price",
    "--accent-gold",
    "--accent-green",
    "--accent-red",
    "--accent-teal",
    "--accent-blue-text",
];
// ─── Legacy migration map ───────────────────────────────────────────────────
const LEGACY_COLORWAY_MAP = {
    classic: { mode: "dark", colorway: "default" },
    osrs: { mode: "dark", colorway: "classic" },
    "rs3-modern": { mode: "dark", colorway: "rs3-modern" },
    light: { mode: "light", colorway: "default" },
    "sol-dark": { mode: "dark", colorway: "solarized" },
    "sol-light": { mode: "light", colorway: "solarized" },
};
// ─── Sort keys ──────────────────────────────────────────────────────────────
const TOP20_SORT_KEY = "ger:top20-sort";
const SEARCH_SORT_KEY = "ger:search-sort";
const FAV_SORT_KEY = "ger:fav-sort";
// ─── Detail-row label text & tooltip descriptions ───────────────────────────
const DETAIL_LABELS = {
    "GE Price": "GE Price",
    "Rec. Buy Price": "Rec. Buy Price",
    "Rec. Sell Price": "Rec. Sell Price",
    "Est. Flip Profit": "Est. Flip Profit",
    "24h Global Vol": "24h Global Vol",
    "Eff. Player Vol": "Eff. Player Vol",
    "Volume Spike": "Volume Spike",
    "Player Traded Val": "Player Traded Val",
    "Buy Limit (4h)": "Buy Limit (4h)",
    "Max Capital (4h)": "Max Capital (4h)",
    "Tax Gap": "Tax Gap",
    "Est. Margin (2% tax)": "Est. Margin (2% tax)",
    "High Alch": "High Alch",
    "ROI %": "ROI %",
    "Profit per 4H": "Profit per 4H",
    "Return on Time": "Return on Time",
    "Vol-Adj Margin": "Vol-Adj Margin",
    "Alch Safety": "Alch Safety",
    "30d EMA": "30d EMA",
    "Daily Volatility": "Daily Volatility",
    "LR Slope": "LR Slope",
    "Predicted Price": "Predicted Price",
    "History Depth": "History Depth",
    "Data Freshness": "Data Freshness",
    "Spread Confidence": "Spread Confidence",
    "Trend Reliability": "Trend Reliability",
};
const DETAIL_TIPS = {
    "GE Price": "Latest mid-price reported by the Grand Exchange API.",
    "Rec. Buy Price": "Suggested buy-offer price — ~1% below the GE mid-price for a realistic instant-buy entry.",
    "Rec. Sell Price": "Suggested sell price — ~3% above mid-price to cover the 2% GE tax and still leave profit.",
    "Est. Flip Profit": "Estimated profit per item if you buy at the rec. buy price and sell at the rec. sell price, after the 2% GE tax.",
    "24h Global Vol": "Total number of this item traded across all players in the last 24 hours.",
    "Eff. Player Vol": "The lower of global daily volume and your personal daily limit (buy limit × 6 windows). Reflects how many you can realistically flip per day.",
    "Volume Spike": "Today's volume compared to its 7-day average. Values above 1.5× indicate unusual hype or demand.",
    "Player Traded Val": "Total gp throughput a single player can achieve per day — GE price × effective player volume.",
    "Buy Limit (4h)": "Maximum quantity you can buy from the GE every 4 hours. Set by Jagex per item.",
    "Max Capital (4h)": "Maximum gp you need to fill one full buy-limit window — GE price × buy limit.",
    "Tax Gap": "Minimum price difference needed between buy and sell to break even after the 2% GE tax.",
    "Est. Margin (2% tax)": "The flat gp amount the 2% GE tax takes from one sale at the current price.",
    "High Alch": "High Alchemy value in gp \u2014 used as the sell-price floor to prevent recommending sales below alch value.",
    "ROI %": "Return on investment per flip \u2014 (flip profit \u00f7 buy price) \u00d7 100. Higher = more capital-efficient.",
    "Profit per 4H": "Total potential profit in one 4-hour buy limit window \u2014 flip profit \u00d7 buy limit.",
    "Return on Time": "Estimated gp earned per hour of active flipping \u2014 accounts for trade velocity and fill rate.",
    "Vol-Adj Margin": "Flip profit minus one standard deviation of daily price movement. Negative = volatility exceeds your margin (risky flip).",
    "Alch Safety": "Profit or loss per item if you bail out and High Alch instead of selling on the GE. No GE tax applies to alchs.",
    "30d EMA": "30-day Exponential Moving Average. Price above EMA = bullish; below = bearish.",
    "Daily Volatility": "Standard deviation of daily percentage price changes. Higher \u2192 wider swings \u2192 more risk but potentially faster flips.",
    "LR Slope": "Linear-regression slope of the price series (gp per day). Positive = upward drift, negative = declining.",
    "Predicted Price": "Next-day price predicted by linear regression of the historical price series.",
    "History Depth": "Number of daily price snapshots cached for this item. More data points = more reliable trend analysis. Low (<7), Medium (7\u201329), High (30+).",
    "Data Freshness": "Time since this item\u2019s price was last fetched from the GE API. Guide prices update roughly once per day.",
    "Spread Confidence": "Recommended buy/sell prices are estimates (\u00b11\u20133% of guide price). The real spread is only visible in-game via margin-checking.",
    "Trend Reliability": "Confidence level of trend and predictive indicators, based on how much historical data is available for this item.",
};


/***/ },

/***/ "./ui/dataManagement.ts"
/*!******************************!*\
  !*** ./ui/dataManagement.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindCacheManagement: () => (/* binding */ bindCacheManagement),
/* harmony export */   bindDataManagement: () => (/* binding */ bindDataManagement)
/* harmony export */ });
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./ui/state.ts");
/**
 * @module ui/dataManagement
 * Export / Import for localStorage settings and IndexedDB cache.
 */


/** localStorage keys included in the JSON backup. */
const EXPORT_KEYS = [
    "ger:favorites",
    "ger:portfolio",
    "ger:portfolio-history",
    "ger:mode",
    "ger:style",
    "ger:colorway",
    "ger:colorway-v2",
    "ger:contrast",
    "ger:contrast-auto-correct",
    "ger:chart-layers",
    "ger:disclaimer-ack",
    "ger:limit-reset-notifs",
    "ger:active-tab",
    "ger:filter-volume",
    "ger:filter-price",
    "ger:filter-confidence",
    "ger:portfolio-sub-tab",
    "ger:allocation-strategy",
    "ger:allocation-budget",
    "ger:news-context",
    "ger:pnl-collapsed",
    "ger:winloss-collapsed",
    "ger:advanced-mode",
    "ger:baseline-loaded-at",
    "ger:info-banner-dismissed",
    "ger:llm-api-key",
    "ger:llm-provider",
    "ger:llm-model",
    "ger:llm-endpoint",
    "ger:view-mode",
    "ger:compact-tiles",
    "ger:layout",
    "ger:chat-history",
    "ger:deep-history",
    "ger:top20-sort",
    "ger:search-sort",
    "ger:fav-sort",
];
function bindDataManagement() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_0__.getEls)();
    // ── Export ──
    els.exportDataBtn.addEventListener("click", () => {
        const payload = {};
        for (const key of EXPORT_KEYS) {
            const raw = localStorage.getItem(key);
            if (raw !== null) {
                try {
                    payload[key] = JSON.parse(raw);
                }
                catch {
                    payload[key] = raw;
                }
            }
        }
        const json = JSON.stringify(payload, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "ger-backup.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
    // ── Import ──
    els.importDataBtn.addEventListener("click", () => {
        els.importFileInput.value = "";
        els.importFileInput.click();
    });
    els.importFileInput.addEventListener("change", () => {
        const file = els.importFileInput.files?.[0];
        if (!file)
            return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(reader.result);
                if (typeof data !== "object" || data === null) {
                    throw new Error("Invalid backup format.");
                }
                let restoredCount = 0;
                for (const key of EXPORT_KEYS) {
                    if (key in data) {
                        localStorage.setItem(key, JSON.stringify(data[key]));
                        restoredCount++;
                    }
                }
                if (restoredCount === 0) {
                    alert("No recognised data keys found in the file.");
                    return;
                }
                if ("ger:colorway" in data) {
                    localStorage.removeItem("ger:colorway-v2");
                }
                alert("Data imported successfully!");
                window.location.reload();
            }
            catch (err) {
                console.error("[UIService] Import failed:", err);
                alert("Import failed \u2014 the file does not contain valid JSON.");
            }
        };
        reader.readAsText(file);
    });
}
function bindCacheManagement() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_0__.getEls)();
    const cache = (0,_state__WEBPACK_IMPORTED_MODULE_1__.getCache)();
    // ── Export Cache ──
    els.exportCacheBtn.addEventListener("click", async () => {
        els.exportCacheBtn.disabled = true;
        els.exportCacheBtn.textContent = "\u23F3 Exporting\u2026";
        try {
            const data = await cache.exportDatabase();
            const json = JSON.stringify(data);
            const blob = new Blob([json], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `ger-cache-${data.exportedAt.slice(0, 10)}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
        catch (err) {
            console.error("[UIService] Cache export failed:", err);
            alert("Cache export failed \u2014 see console for details.");
        }
        finally {
            els.exportCacheBtn.disabled = false;
            els.exportCacheBtn.textContent = "\u2B07 Export Cache";
        }
    });
    // ── Import Cache ──
    els.importCacheBtn.addEventListener("click", () => {
        els.importCacheInput.value = "";
        els.importCacheInput.click();
    });
    els.importCacheInput.addEventListener("change", () => {
        const file = els.importCacheInput.files?.[0];
        if (!file)
            return;
        const reader = new FileReader();
        reader.onload = async () => {
            try {
                const data = JSON.parse(reader.result);
                const counts = await cache.importDatabase(data);
                alert(`Cache imported successfully!\n${counts.prices} price records + ${counts.history} history rows.`);
                window.location.reload();
            }
            catch (err) {
                console.error("[UIService] Cache import failed:", err);
                alert("Cache import failed \u2014 the file does not contain a valid cache export.");
            }
        };
        reader.readAsText(file);
    });
}


/***/ },

/***/ "./ui/disclaimer.ts"
/*!**************************!*\
  !*** ./ui/disclaimer.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindDisclaimer: () => (/* binding */ bindDisclaimer),
/* harmony export */   showDisclaimer: () => (/* binding */ showDisclaimer)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./ui/constants.ts");
/**
 * @module ui/disclaimer
 * Disclaimer overlay binding and show logic.
 */

/**
 * Wire the disclaimer overlay's Acknowledge button and persist checkbox.
 */
function bindDisclaimer() {
    const ackBtn = document.getElementById("disclaimer-ack-btn");
    const persistCheck = document.getElementById("disclaimer-persist-check");
    const overlay = document.getElementById("disclaimer-overlay");
    if (!overlay || !ackBtn)
        return;
    ackBtn.addEventListener("click", () => {
        if (persistCheck?.checked) {
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_DISCLAIMER_ACK, "1");
        }
        overlay.classList.add("hidden");
    });
}
/**
 * Show the disclaimer modal (if not previously acknowledged) and return a
 * Promise that resolves once the user clicks "I Understand".
 */
function showDisclaimer() {
    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_DISCLAIMER_ACK))
        return Promise.resolve();
    const overlay = document.getElementById("disclaimer-overlay");
    if (!overlay)
        return Promise.resolve();
    overlay.classList.remove("hidden");
    return new Promise((resolve) => {
        const ackBtn = document.getElementById("disclaimer-ack-btn");
        if (!ackBtn) {
            resolve();
            return;
        }
        ackBtn.addEventListener("click", () => resolve(), { once: true });
    });
}


/***/ },

/***/ "./ui/domRefs.ts"
/*!***********************!*\
  !*** ./ui/domRefs.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEls: () => (/* binding */ getEls),
/* harmony export */   resolveElements: () => (/* binding */ resolveElements)
/* harmony export */ });
/**
 * @module ui/domRefs
 * Lazily resolved DOM element cache.  Populated once by {@link resolveElements}
 * during {@link initUI}.  Every UI module reads refs via {@link getEls}.
 */
let els;
/** Return the cached DOM element refs.  Must call {@link resolveElements} first. */
function getEls() { return els; }
/**
 * Resolve and cache all required DOM element references once.
 * Throws early with a clear message if any element is missing.
 */
function resolveElements() {
    const q = (id) => {
        const el = document.getElementById(id);
        if (!el)
            throw new Error(`[UIService] Missing DOM element: #${id}`);
        return el;
    };
    els = {
        alt1Status: q("alt1-status"),
        providerSelect: q("provider-select"),
        providerCostHint: q("provider-cost-hint"),
        setupGuideBtn: q("setup-guide-btn"),
        customEndpointGroup: q("custom-endpoint-group"),
        customEndpointInput: q("custom-endpoint-input"),
        modelInput: q("model-input"),
        modelOptions: q("model-options"),
        apiKeyInput: q("api-key-input"),
        saveKeyBtn: q("save-key-btn"),
        keyStatus: q("key-status"),
        filterVolume: q("filter-volume"),
        filterPrice: q("filter-price"),
        filterConfidence: q("filter-confidence"),
        top20SortSelect: q("top20-sort-select"),
        searchSortSelect: q("search-sort-select"),
        volumeCustomGroup: q("volume-custom-group"),
        volumeMinSlider: q("volume-min-slider"),
        volumeMinInput: q("volume-min-input"),
        volumeMaxSlider: q("volume-max-slider"),
        volumeMaxInput: q("volume-max-input"),
        budgetCustomGroup: q("budget-custom-group"),
        budgetSlider: q("budget-slider"),
        budgetInput: q("budget-input"),
        marketSearchInput: q("market-search-input"),
        searchLoading: q("search-loading"),
        searchResults: q("search-results"),
        favoritesSection: q("favorites-section"),
        favoritesItems: q("favorites-items"),
        favoritesCollapseBtn: q("favorites-collapse-btn"),
        favoritesHeader: document.querySelector("#favorites-section .favorites-header"),
        favoritesSortSelect: q("favorites-sort-select"),
        allocationSection: q("allocation-section"),
        allocationBody: q("allocation-body"),
        allocationCollapseBtn: q("allocation-collapse-btn"),
        allocationHeader: document.querySelector("#allocation-section .allocation-header"),
        allocationBudget: q("allocation-budget"),
        allocationSource: q("allocation-source"),
        allocationStrategy: q("allocation-strategy"),
        allocationRunBtn: q("allocation-run-btn"),
        allocationResults: q("allocation-results"),
        refreshMarketBtn: q("refresh-market-btn"),
        fullMarketScanBtn: q("full-market-scan-btn"),
        deepHistoryCheckbox: q("deep-history-checkbox"),
        syncProgress: q("background-sync-progress"),
        syncProgressFill: q("sync-progress-fill"),
        syncProgressText: q("sync-progress-text"),
        marketLoading: q("market-loading"),
        marketItems: q("market-items"),
        errorBanner: q("error-banner"),
        errorBannerMsg: q("error-banner-msg"),
        errorRetryBtn: q("error-retry-btn"),
        viewListBtn: q("view-list-btn"),
        viewTileBtn: q("view-tile-btn"),
        viewHybridBtn: q("view-hybrid-btn"),
        compactTilesToggle: q("compact-tiles-toggle"),
        top20CollapseBtn: q("top20-collapse-btn"),
        marketHeader: q("market-header"),
        chatHistory: q("chat-history"),
        chatInput: q("chat-input"),
        chatSendBtn: q("chat-send-btn"),
        clearChatBtn: q("clear-chat-btn"),
        forceReloadBtn: q("force-reload-btn"),
        reloadStatus: q("reload-status"),
        limitResetNotifsToggle: q("limit-reset-notifs-toggle"),
        newsContextToggle: q("news-context-toggle"),
        layoutTabbedBtn: q("layout-tabbed-btn"),
        layoutSidebarBtn: q("layout-sidebar-btn"),
        styleSelect: q("style-select"),
        colorwaySelect: q("colorway-select"),
        modeDarkBtn: q("mode-dark-btn"),
        modeLightBtn: q("mode-light-btn"),
        contrastSelect: q("contrast-select"),
        contrastAutoToggle: q("contrast-auto-toggle"),
        tabMarketBtn: q("tab-market-btn"),
        tabAdvisorBtn: q("tab-advisor-btn"),
        viewTabs: q("view-tabs"),
        marketView: q("market-view"),
        advisorView: q("advisor-view"),
        tabPortfolioBtn: q("tab-portfolio-btn"),
        portfolioView: q("portfolio-view"),
        flipItemName: q("flip-item-name"),
        flipSuggestions: q("flip-suggestions"),
        flipBuyPrice: q("flip-buy-price"),
        flipQuantity: q("flip-quantity"),
        flipSellPrice: q("flip-sell-price"),
        addFlipBtn: q("add-flip-btn"),
        activeFlipsList: q("active-flips-list"),
        portfolioActiveBtn: q("portfolio-active-btn"),
        portfolioHistoryBtn: q("portfolio-history-btn"),
        portfolioActiveContainer: q("portfolio-active-container"),
        portfolioHistoryContainer: q("portfolio-history-container"),
        dashboardPnlHeader: q("dashboard-pnl-header"),
        dashboardPnlCollapseBtn: q("dashboard-pnl-collapse-btn"),
        dashboardPnlChart: q("dashboard-pnl-chart"),
        dashboardWinlossHeader: q("dashboard-winloss-header"),
        dashboardWinlossCollapseBtn: q("dashboard-winloss-collapse-btn"),
        dashboardWinlossChart: q("dashboard-winloss-chart"),
        statTotalProfit: q("stat-total-profit"),
        statTotalFlips: q("stat-total-flips"),
        statAvgProfit: q("stat-avg-profit"),
        statAvgRoi: q("stat-avg-roi"),
        completedFlipsList: q("completed-flips-list"),
        exportDataBtn: q("export-data-btn"),
        importDataBtn: q("import-data-btn"),
        importFileInput: q("import-file-input"),
        exportCacheBtn: q("export-cache-btn"),
        importCacheBtn: q("import-cache-btn"),
        importCacheInput: q("import-cache-input"),
        completedFlipsFilter: q("completed-flips-filter"),
        exportCsvBtn: q("export-csv-btn"),
        searchFilterBtn: q("search-filter-btn"),
        searchFilterPopover: q("search-filter-popover"),
        browseAllBtn: q("browse-all-btn"),
        backToTopBtn: q("back-to-top-btn"),
        aboutBtn: q("about-btn"),
        guideBtn: q("guide-btn"),
        notifBellBtn: q("notif-bell-btn"),
        notifBellBadge: q("notif-bell-badge"),
        advancedModeToggle: q("advanced-mode-toggle"),
        settingsBtn: q("settings-btn"),
        settingsBackdrop: q("settings-backdrop"),
        settingsCloseBtn: q("settings-close-btn"),
    };
}


/***/ },

/***/ "./ui/favourites.ts"
/*!**************************!*\
  !*** ./ui/favourites.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindFavSort: () => (/* binding */ bindFavSort),
/* harmony export */   bindFavoritesCollapse: () => (/* binding */ bindFavoritesCollapse),
/* harmony export */   renderFavorites: () => (/* binding */ renderFavorites),
/* harmony export */   restoreFavSort: () => (/* binding */ restoreFavSort)
/* harmony export */ });
/* harmony import */ var _favouritesData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favouritesData */ "./ui/favouritesData.ts");
/* harmony import */ var _collapseToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapseToggle */ "./ui/collapseToggle.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./ui/state.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _market_marketSort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./market/marketSort */ "./ui/market/marketSort.ts");
/* harmony import */ var _card_cardBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/cardBuilder */ "./ui/card/cardBuilder.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./ui/constants.ts");
/**
 * @module ui/favourites
 * Favourites section rendering, collapse, and sort.
 */







// ─── Local state ────────────────────────────────────────────────────────────
let isFavoritesCollapsed = () => false;
// ─── Render ─────────────────────────────────────────────────────────────────
async function renderFavorites() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_3__.getEls)();
    const favNames = (0,_favouritesData__WEBPACK_IMPORTED_MODULE_0__.getFavorites)();
    if (favNames.size === 0) {
        els.favoritesSection.style.display = "none";
        return;
    }
    els.favoritesSection.style.display = "";
    if (isFavoritesCollapsed())
        return;
    const analyzer = (0,_state__WEBPACK_IMPORTED_MODULE_2__.getAnalyzer)();
    const items = await analyzer.getItemsByNames(favNames);
    const favSort = els.favoritesSortSelect.value;
    (0,_market_marketSort__WEBPACK_IMPORTED_MODULE_4__.applySortOrder)(items, favSort);
    els.favoritesItems.innerHTML = "";
    els.favoritesItems.className = `market-items ${(0,_state__WEBPACK_IMPORTED_MODULE_2__.getCurrentView)()}`;
    if (items.length === 0) {
        const empty = document.createElement("div");
        empty.className = "market-empty";
        empty.textContent = "Favourited items not yet in cache \u2014 try searching for them first.";
        els.favoritesItems.appendChild(empty);
        return;
    }
    for (const item of items) {
        els.favoritesItems.appendChild((0,_card_cardBuilder__WEBPACK_IMPORTED_MODULE_5__.buildItemCard)(item));
    }
}
// ─── Collapse ───────────────────────────────────────────────────────────────
function bindFavoritesCollapse() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_3__.getEls)();
    isFavoritesCollapsed = (0,_collapseToggle__WEBPACK_IMPORTED_MODULE_1__.bindCollapseToggle)({
        collapseBtn: els.favoritesCollapseBtn,
        targets: [els.favoritesItems],
        headerBar: els.favoritesHeader,
        stopPropagationEls: [els.favoritesSortSelect],
    });
}
// ─── Sort ───────────────────────────────────────────────────────────────────
function restoreFavSort() {
    const saved = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.FAV_SORT_KEY);
    if (saved)
        (0,_domRefs__WEBPACK_IMPORTED_MODULE_3__.getEls)().favoritesSortSelect.value = saved;
}
function bindFavSort() {
    (0,_domRefs__WEBPACK_IMPORTED_MODULE_3__.getEls)().favoritesSortSelect.addEventListener("change", () => {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.FAV_SORT_KEY, (0,_domRefs__WEBPACK_IMPORTED_MODULE_3__.getEls)().favoritesSortSelect.value);
        renderFavorites();
    });
}


/***/ },

/***/ "./ui/favouritesData.ts"
/*!******************************!*\
  !*** ./ui/favouritesData.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFavoriteAlerts: () => (/* binding */ getFavoriteAlerts),
/* harmony export */   getFavorites: () => (/* binding */ getFavorites),
/* harmony export */   loadFavorites: () => (/* binding */ loadFavorites),
/* harmony export */   saveFavorites: () => (/* binding */ saveFavorites),
/* harmony export */   setFavoriteAlerts: () => (/* binding */ setFavoriteAlerts),
/* harmony export */   setRenderFavoritesHook: () => (/* binding */ setRenderFavoritesHook),
/* harmony export */   toggleFavorite: () => (/* binding */ toggleFavorite)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./ui/constants.ts");
/**
 * @module ui/favouritesData
 * Favourites persistence — load, save, toggle, and alert threshold helpers.
 */

// Forward declaration — will be set by favourites module to avoid circular dep.
let _renderFavorites = null;
/** Register the render callback (called from initUI). */
function setRenderFavoritesHook(fn) { _renderFavorites = fn; }
/** Load the persisted favourites list, auto-migrating from legacy format. */
function loadFavorites() {
    try {
        const raw = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_FAVORITES);
        if (!raw)
            return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed))
            return [];
        if (parsed.length > 0 && typeof parsed[0] === "string") {
            const migrated = parsed.map((name) => ({ name }));
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_FAVORITES, JSON.stringify(migrated));
            return migrated;
        }
        return parsed;
    }
    catch {
        return [];
    }
}
/** Persist the favourites list. */
function saveFavorites(favs) {
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_FAVORITES, JSON.stringify(favs));
}
/** Return the Set of favourited item names from localStorage. */
function getFavorites() {
    return new Set(loadFavorites().map((f) => f.name));
}
/** Toggle an item's favourite status and persist the result. Returns the new state. */
function toggleFavorite(name) {
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
function getFavoriteAlerts(name) {
    return loadFavorites().find((f) => f.name === name);
}
/** Update the price-alert thresholds for a favourited item. */
function setFavoriteAlerts(name, targetBuy, targetSell) {
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


/***/ },

/***/ "./ui/formatters.ts"
/*!**************************!*\
  !*** ./ui/formatters.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatCountdown: () => (/* binding */ formatCountdown),
/* harmony export */   formatDataAge: () => (/* binding */ formatDataAge),
/* harmony export */   formatDuration: () => (/* binding */ formatDuration),
/* harmony export */   formatVolume: () => (/* binding */ formatVolume),
/* harmony export */   spriteUrl: () => (/* binding */ spriteUrl)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./ui/constants.ts");
/**
 * @module ui/formatters
 * Pure formatting utilities for prices, volumes, durations, and data age.
 */

/** RS3 item sprite base URL (official Jagex endpoint). */
const SPRITE_BASE = "https://secure.runescape.com/m=itemdb_rs/obj_sprite.gif?id=";
/** Build the full sprite URL for a given item ID. */
function spriteUrl(itemId) {
    return SPRITE_BASE + itemId;
}
/** Format a trade volume with locale separators. */
function formatVolume(vol) {
    return vol.toLocaleString("en-US");
}
/** Format a data-age value (in minutes) as a human-readable string. */
function formatDataAge(minutes) {
    if (minutes <= 0)
        return "Just now";
    if (minutes < 60)
        return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24)
        return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago (stale)`;
}
/** Format a duration in milliseconds as a human-readable string. */
function formatDuration(ms) {
    const totalSec = Math.round(ms / 1000);
    if (totalSec < 60)
        return `${totalSec}s`;
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return sec > 0 ? `${min}m ${sec}s` : `${min}m`;
}
/** Format the buy-limit countdown for a flip. */
function formatCountdown(timestamp) {
    const elapsed = Date.now() - timestamp;
    const remaining = _constants__WEBPACK_IMPORTED_MODULE_0__.BUY_LIMIT_WINDOW_MS - elapsed;
    if (remaining <= 0)
        return "Limit reset \u2713";
    const totalMin = Math.ceil(remaining / 60000);
    const hours = Math.floor(totalMin / 60);
    const mins = totalMin % 60;
    if (hours > 0)
        return `Resets in ${hours}h ${mins}m`;
    return `Resets in ${mins}m`;
}


/***/ },

/***/ "./ui/helpers.ts"
/*!***********************!*\
  !*** ./ui/helpers.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createButton: () => (/* binding */ createButton),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   getShowAnalyticsModalHook: () => (/* binding */ getShowAnalyticsModalHook),
/* harmony export */   openAnalyticsForName: () => (/* binding */ openAnalyticsForName),
/* harmony export */   quickAddToPortfolio: () => (/* binding */ quickAddToPortfolio),
/* harmony export */   setCloseItemSuggestionsHook: () => (/* binding */ setCloseItemSuggestionsHook),
/* harmony export */   setShowAnalyticsModalHook: () => (/* binding */ setShowAnalyticsModalHook),
/* harmony export */   setSwitchTabHook: () => (/* binding */ setSwitchTabHook)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./ui/state.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _portfolio_snapshots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio/snapshots */ "./ui/portfolio/snapshots.ts");
/**
 * @module ui/helpers
 * Cross-cutting coordination hooks, workflows, and generic utilities
 * shared across multiple UI modules.
 *
 * Domain-specific helpers have been extracted:
 *  - Profitability metrics → {@link ./metrics}
 *  - Favourites persistence → {@link ./favouritesData}
 *  - Snapshot / item lookup → {@link ./snapshots}
 *
 * audit:no-op(DRY-2) — A `bindPersistentInput(el, key)` helper was
 * evaluated for the ~28 localStorage↔DOM bindings across the UI layer.
 * Only 3 of 28 have zero side effects; the rest include re-renders,
 * theme invalidation, visibility toggles, or batched saves. A helper
 * would save ~2 lines per call but require callback params for every
 * case, adding abstraction without meaningful deduplication.
 */



// ─── Debounce utility ───────────────────────────────────────────────────────
function debounce(fn, ms) {
    let timer;
    return ((...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), ms);
    });
}
// ─── DOM helpers ────────────────────────────────────────────────────────────
/** Create a `<button type="button">` with common attributes in one call. */
function createButton(opts) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = opts.cls;
    btn.textContent = opts.text;
    if (opts.title)
        btn.title = opts.title;
    if (opts.ariaLabel)
        btn.setAttribute("aria-label", opts.ariaLabel);
    if (opts.onClick)
        btn.addEventListener("click", opts.onClick);
    return btn;
}
// ─── Cross-module hooks ─────────────────────────────────────────────────────
// Analytics modal hook
let _showAnalyticsModal = null;
function setShowAnalyticsModalHook(fn) { _showAnalyticsModal = fn; }
function getShowAnalyticsModalHook() { return _showAnalyticsModal; }
// Tab switching hook
let _switchTab = null;
function setSwitchTabHook(fn) { _switchTab = fn; }
// Autocomplete close hook
let _closeItemSuggestions = null;
function setCloseItemSuggestionsHook(fn) { _closeItemSuggestions = fn; }
// ─── Cross-module workflows ─────────────────────────────────────────────────
/** Look up a RankedItem by name and open the analytics modal. */
async function openAnalyticsForName(name) {
    let item = (0,_portfolio_snapshots__WEBPACK_IMPORTED_MODULE_2__.findRankedItem)(name);
    if (!item) {
        const results = await (0,_state__WEBPACK_IMPORTED_MODULE_0__.getAnalyzer)().getItemsByNames(new Set([name]));
        item = results[0];
    }
    if (item)
        _showAnalyticsModal?.(item);
}
/** Pre-fill the portfolio flip form with the given item data. */
function quickAddToPortfolio(item) {
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.setSuppressAutocomplete)(true);
    _switchTab?.("portfolio");
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    // Ensure the Active Flips sub-tab is visible (not History & Stats)
    els.portfolioActiveBtn.click();
    els.flipItemName.value = item.name;
    els.flipBuyPrice.value = String(item.recBuyPrice);
    els.flipSellPrice.value = String(item.recSellPrice);
    els.flipQuantity.value = "";
    _closeItemSuggestions?.();
    els.flipQuantity.focus();
    requestAnimationFrame(() => { (0,_state__WEBPACK_IMPORTED_MODULE_0__.setSuppressAutocomplete)(false); });
}


/***/ },

/***/ "./ui/index.ts"
/*!*********************!*\
  !*** ./ui/index.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initUI: () => (/* reexport safe */ _initUI__WEBPACK_IMPORTED_MODULE_0__.initUI),
/* harmony export */   showDisclaimer: () => (/* reexport safe */ _disclaimer__WEBPACK_IMPORTED_MODULE_1__.showDisclaimer)
/* harmony export */ });
/* harmony import */ var _initUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initUI */ "./ui/initUI.ts");
/* harmony import */ var _disclaimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disclaimer */ "./ui/disclaimer.ts");
/**
 * @module ui
 * Barrel re-export for the decomposed UI layer.
 * Only the public surface consumed by `src/index.ts` is exported here.
 */




/***/ },

/***/ "./ui/initUI.ts"
/*!**********************!*\
  !*** ./ui/initUI.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initUI: () => (/* binding */ initUI)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./services/index.ts");
/* harmony import */ var _allocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allocation */ "./ui/allocation.ts");
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat */ "./ui/chat.ts");
/* harmony import */ var _dataManagement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataManagement */ "./ui/dataManagement.ts");
/* harmony import */ var _disclaimer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disclaimer */ "./ui/disclaimer.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _favourites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favourites */ "./ui/favourites.ts");
/* harmony import */ var _favouritesData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favouritesData */ "./ui/favouritesData.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./ui/helpers.ts");
/* harmony import */ var _market_marketPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./market/marketPanel */ "./ui/market/marketPanel.ts");
/* harmony import */ var _market_marketSearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./market/marketSearch */ "./ui/market/marketSearch.ts");
/* harmony import */ var _modals_analyticsModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/analyticsModal */ "./ui/modals/analyticsModal.ts");
/* harmony import */ var _modals_editFlipModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/editFlipModal */ "./ui/modals/editFlipModal.ts");
/* harmony import */ var _modals_editCompletedFlipModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/editCompletedFlipModal */ "./ui/modals/editCompletedFlipModal.ts");
/* harmony import */ var _modals_modalHooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/modalHooks */ "./ui/modals/modalHooks.ts");
/* harmony import */ var _notifications_errorBanner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./notifications/errorBanner */ "./ui/notifications/errorBanner.ts");
/* harmony import */ var _notifications_notifBell__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notifications/notifBell */ "./ui/notifications/notifBell.ts");
/* harmony import */ var _notifications_priceAlerts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./notifications/priceAlerts */ "./ui/notifications/priceAlerts.ts");
/* harmony import */ var _notifications_infoBanner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notifications/infoBanner */ "./ui/notifications/infoBanner.ts");
/* harmony import */ var _backToTop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./backToTop */ "./ui/backToTop.ts");
/* harmony import */ var _portfolio_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./portfolio/autocomplete */ "./ui/portfolio/autocomplete.ts");
/* harmony import */ var _portfolio_completedFlips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./portfolio/completedFlips */ "./ui/portfolio/completedFlips.ts");
/* harmony import */ var _portfolio_portfolio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./portfolio/portfolio */ "./ui/portfolio/portfolio.ts");
/* harmony import */ var _portfolio_portfolioDashboard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./portfolio/portfolioDashboard */ "./ui/portfolio/portfolioDashboard.ts");
/* harmony import */ var _scanProgress__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./scanProgress */ "./ui/scanProgress.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./settings */ "./ui/settings.ts");
/* harmony import */ var _pipelineReload__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipelineReload */ "./ui/pipelineReload.ts");
/* harmony import */ var _modals_setupGuideModal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modals/setupGuideModal */ "./ui/modals/setupGuideModal.ts");
/* harmony import */ var _modals_aboutModal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modals/aboutModal */ "./ui/modals/aboutModal.ts");
/* harmony import */ var _modals_guideModal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modals/guideModal */ "./ui/modals/guideModal.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./state */ "./ui/state.ts");
/* harmony import */ var _layoutManager__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./layoutManager */ "./ui/layoutManager.ts");
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./theme/theme */ "./ui/theme/theme.ts");
/* harmony import */ var _tabManager__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./tabManager */ "./ui/tabManager.ts");
/**
 * @module ui/initUI
 * Boot orchestrator – resolves DOM refs, wires cross-module hooks,
 * initialises services, binds all UI event listeners, and kicks the
 * initial data pipeline.  This is the single entry-point called by
 * `src/index.ts`.
 */

// ─── UI modules (alphabetical) ─────────────────────────────────────────────

































// ─── Public API ─────────────────────────────────────────────────────────────
/**
 * Bootstrap the entire UI.  Call once from the entry point after the DOM is
 * ready.  Returns only after the initial data pipeline has completed and the
 * market panel is rendered.
 */
async function initUI() {
    wireHooks();
    bindAllListeners();
    await initServices();
    await loadInitialData();
    await initFavoritesAndPortfolio();
}
/** Phase 0 — Wire cross-module hooks (must precede any bind* call). */
function wireHooks() {
    (0,_favouritesData__WEBPACK_IMPORTED_MODULE_7__.setRenderFavoritesHook)(_favourites__WEBPACK_IMPORTED_MODULE_6__.renderFavorites);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.setShowAnalyticsModalHook)(_modals_analyticsModal__WEBPACK_IMPORTED_MODULE_11__.showAnalyticsModal);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.setSwitchTabHook)(_tabManager__WEBPACK_IMPORTED_MODULE_33__.switchTab);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.setCloseItemSuggestionsHook)(_portfolio_autocomplete__WEBPACK_IMPORTED_MODULE_20__.closeItemSuggestions);
    (0,_notifications_errorBanner__WEBPACK_IMPORTED_MODULE_15__.setRefreshMarketPanelHook)(_market_marketPanel__WEBPACK_IMPORTED_MODULE_9__.refreshMarketPanel);
    (0,_scanProgress__WEBPACK_IMPORTED_MODULE_24__.setScanRefreshHook)(_market_marketPanel__WEBPACK_IMPORTED_MODULE_9__.refreshMarketPanel);
    (0,_pipelineReload__WEBPACK_IMPORTED_MODULE_26__.setReloadRefreshHook)(_market_marketPanel__WEBPACK_IMPORTED_MODULE_9__.refreshMarketPanel);
    (0,_settings__WEBPACK_IMPORTED_MODULE_25__.setShowSetupGuideHook)(_modals_setupGuideModal__WEBPACK_IMPORTED_MODULE_27__.showSetupGuide);
    (0,_settings__WEBPACK_IMPORTED_MODULE_25__.setShowAboutModalHook)(_modals_aboutModal__WEBPACK_IMPORTED_MODULE_28__.showAboutModal);
    (0,_settings__WEBPACK_IMPORTED_MODULE_25__.setShowGuideModalHook)(_modals_guideModal__WEBPACK_IMPORTED_MODULE_29__.showGuideModal);
    (0,_modals_editFlipModal__WEBPACK_IMPORTED_MODULE_12__.setRenderFlipsHook)(_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_22__.renderFlips);
    (0,_modals_editCompletedFlipModal__WEBPACK_IMPORTED_MODULE_13__.setRenderCompletedFlipsHook)(_portfolio_completedFlips__WEBPACK_IMPORTED_MODULE_21__.renderCompletedFlips);
    (0,_modals_modalHooks__WEBPACK_IMPORTED_MODULE_14__.setRenderMarketItemsHook)(_market_marketPanel__WEBPACK_IMPORTED_MODULE_9__.renderMarketItems);
    (0,_layoutManager__WEBPACK_IMPORTED_MODULE_31__.setRenderFavoritesForViewToggle)(_favourites__WEBPACK_IMPORTED_MODULE_6__.renderFavorites);
    (0,_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_22__.setRenderPortfolioDashboardHook)(_portfolio_portfolioDashboard__WEBPACK_IMPORTED_MODULE_23__.renderPortfolioDashboard);
}
/** Phase 1 — Resolve DOM refs and bind all event listeners. */
function bindAllListeners() {
    (0,_domRefs__WEBPACK_IMPORTED_MODULE_5__.resolveElements)();
    (0,_disclaimer__WEBPACK_IMPORTED_MODULE_4__.bindDisclaimer)();
    (0,_settings__WEBPACK_IMPORTED_MODULE_25__.populateProviderDropdown)();
    (0,_settings__WEBPACK_IMPORTED_MODULE_25__.restoreSettings)();
    (0,_settings__WEBPACK_IMPORTED_MODULE_25__.bindSettingsEvents)();
    (0,_chat__WEBPACK_IMPORTED_MODULE_2__.bindChatEvents)();
    (0,_layoutManager__WEBPACK_IMPORTED_MODULE_31__.bindViewToggle)();
    (0,_market_marketPanel__WEBPACK_IMPORTED_MODULE_9__.bindMarketFilters)();
    (0,_market_marketSearch__WEBPACK_IMPORTED_MODULE_10__.bindSearchFilters)();
    (0,_pipelineReload__WEBPACK_IMPORTED_MODULE_26__.bindForceReload)();
    (0,_layoutManager__WEBPACK_IMPORTED_MODULE_31__.bindLayoutToggle)();
    (0,_theme_theme__WEBPACK_IMPORTED_MODULE_32__.bindTheme)();
    (0,_tabManager__WEBPACK_IMPORTED_MODULE_33__.bindTabNavigation)();
    (0,_chat__WEBPACK_IMPORTED_MODULE_2__.bindClearChat)();
    (0,_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_22__.bindPortfolio)();
    (0,_notifications_errorBanner__WEBPACK_IMPORTED_MODULE_15__.bindErrorRetry)();
    (0,_dataManagement__WEBPACK_IMPORTED_MODULE_3__.bindDataManagement)();
    (0,_dataManagement__WEBPACK_IMPORTED_MODULE_3__.bindCacheManagement)();
    (0,_scanProgress__WEBPACK_IMPORTED_MODULE_24__.bindFullMarketScan)();
    (0,_backToTop__WEBPACK_IMPORTED_MODULE_19__.bindBackToTop)();
    (0,_notifications_priceAlerts__WEBPACK_IMPORTED_MODULE_17__.requestNotificationPermission)();
}
/** Phase 2 — Create shared service singletons and store in UI state. */
async function initServices() {
    const cache = new _services__WEBPACK_IMPORTED_MODULE_0__.CacheService();
    await cache.open();
    const analyzer = new _services__WEBPACK_IMPORTED_MODULE_0__.MarketAnalyzerService(cache);
    const wiki = new _services__WEBPACK_IMPORTED_MODULE_0__.WikiService();
    const portfolio = new _services__WEBPACK_IMPORTED_MODULE_0__.PortfolioService();
    (0,_state__WEBPACK_IMPORTED_MODULE_30__.setCache)(cache);
    (0,_state__WEBPACK_IMPORTED_MODULE_30__.setAnalyzer)(analyzer);
    (0,_state__WEBPACK_IMPORTED_MODULE_30__.setWiki)(wiki);
    (0,_state__WEBPACK_IMPORTED_MODULE_30__.setPortfolio)(portfolio);
    const newsService = new _services__WEBPACK_IMPORTED_MODULE_0__.NewsService();
    (0,_state__WEBPACK_IMPORTED_MODULE_30__.setNewsService)(newsService);
    newsService
        .getRecentNews()
        .then((items) => {
        (0,_state__WEBPACK_IMPORTED_MODULE_30__.setLatestNewsContext)(newsService.formatForLLM(items));
    })
        .catch((err) => console.warn("[UIService] News fetch failed:", err));
}
/** Phase 3+4 — Initial market render, favourites, allocation. */
async function loadInitialData() {
    try {
        await (0,_market_marketPanel__WEBPACK_IMPORTED_MODULE_9__.refreshMarketPanel)();
    }
    catch (err) {
        console.error("[UIService] Startup: market panel failed:", err);
        const msg = err instanceof Error ? err.message : "Could not load market data.";
        (0,_notifications_errorBanner__WEBPACK_IMPORTED_MODULE_15__.showError)(msg);
    }
    (0,_favourites__WEBPACK_IMPORTED_MODULE_6__.restoreFavSort)();
    (0,_favourites__WEBPACK_IMPORTED_MODULE_6__.bindFavSort)();
    await (0,_favourites__WEBPACK_IMPORTED_MODULE_6__.renderFavorites)();
    (0,_favourites__WEBPACK_IMPORTED_MODULE_6__.bindFavoritesCollapse)();
    (0,_allocation__WEBPACK_IMPORTED_MODULE_1__.bindAllocationAdvisor)();
    (0,_domRefs__WEBPACK_IMPORTED_MODULE_5__.getEls)().allocationSection.style.display = "";
    (0,_market_marketPanel__WEBPACK_IMPORTED_MODULE_9__.bindTop20Collapse)();
}
/** Phase 5+6 — Catalogue, chat history, portfolio, dashboard, info banner. */
async function initFavoritesAndPortfolio() {
    await (0,_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_22__.loadItemCatalogue)();
    try {
        const geCat = await (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchGECatalogue)();
        (0,_state__WEBPACK_IMPORTED_MODULE_30__.setGeCatalogue)(geCat);
    }
    catch (err) {
        console.warn("[UIService] GE catalogue fetch failed:", err);
        (0,_state__WEBPACK_IMPORTED_MODULE_30__.setGeCatalogue)([]);
    }
    (0,_chat__WEBPACK_IMPORTED_MODULE_2__.restoreChatHistory)();
    (0,_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_22__.renderFlips)();
    (0,_portfolio_completedFlips__WEBPACK_IMPORTED_MODULE_21__.renderCompletedFlips)();
    (0,_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_22__.startPortfolioTimer)();
    (0,_notifications_priceAlerts__WEBPACK_IMPORTED_MODULE_17__.checkBuyLimitResets)();
    (0,_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_22__.bindPortfolioSubNav)();
    (0,_portfolio_portfolioDashboard__WEBPACK_IMPORTED_MODULE_23__.bindDashboardCollapse)();
    (0,_portfolio_completedFlips__WEBPACK_IMPORTED_MODULE_21__.bindCompletedFlipsFilter)();
    (0,_portfolio_completedFlips__WEBPACK_IMPORTED_MODULE_21__.bindCsvExport)();
    (0,_notifications_notifBell__WEBPACK_IMPORTED_MODULE_16__.bindNotifBell)();
    const cache = (0,_state__WEBPACK_IMPORTED_MODULE_30__.getCache)();
    (0,_notifications_infoBanner__WEBPACK_IMPORTED_MODULE_18__.maybeShowInfoBanner)(cache).catch((err) => console.warn("[UIService] Info banner check failed:", err));
}


/***/ },

/***/ "./ui/layoutManager.ts"
/*!*****************************!*\
  !*** ./ui/layoutManager.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyLayout: () => (/* binding */ applyLayout),
/* harmony export */   bindLayoutToggle: () => (/* binding */ bindLayoutToggle),
/* harmony export */   bindViewToggle: () => (/* binding */ bindViewToggle),
/* harmony export */   setRenderFavoritesForViewToggle: () => (/* binding */ setRenderFavoritesForViewToggle),
/* harmony export */   setViewMode: () => (/* binding */ setViewMode)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./ui/constants.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _market_marketSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./market/marketSearch */ "./ui/market/marketSearch.ts");
/* harmony import */ var _market_marketPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./market/marketPanel */ "./ui/market/marketPanel.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./ui/state.ts");
/**
 * @module ui/layoutManager
 * Layout mode management (tabbed vs. sidebar).
 */





function applyLayout(mode) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    document.body.dataset.layout = mode;
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_LAYOUT, mode);
    els.layoutTabbedBtn.classList.toggle("active", mode === "tabbed");
    els.layoutSidebarBtn.classList.toggle("active", mode === "sidebar");
    els.layoutTabbedBtn.setAttribute("aria-pressed", String(mode === "tabbed"));
    els.layoutSidebarBtn.setAttribute("aria-pressed", String(mode === "sidebar"));
    if (mode === "sidebar") {
        els.marketView.classList.add("active-tab");
        els.advisorView.classList.add("active-tab");
        els.portfolioView.classList.add("active-tab");
    }
    else {
        const advisorActive = els.tabAdvisorBtn.classList.contains("active");
        const portfolioActive = els.tabPortfolioBtn.classList.contains("active");
        els.marketView.classList.toggle("active-tab", !advisorActive && !portfolioActive);
        els.advisorView.classList.toggle("active-tab", advisorActive);
        els.portfolioView.classList.toggle("active-tab", portfolioActive);
    }
}
function bindLayoutToggle() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    const saved = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_LAYOUT) ?? "tabbed";
    applyLayout(saved);
    els.layoutTabbedBtn.addEventListener("click", () => applyLayout("tabbed"));
    els.layoutSidebarBtn.addEventListener("click", () => applyLayout("sidebar"));
}
// ─── View Toggle (list / tile / hybrid) ─────────────────────────────────────
/** Forward ref to renderFavorites — wired in initUI. */
let _renderFavorites = async () => { };
function setRenderFavoritesForViewToggle(fn) {
    _renderFavorites = fn;
}
function bindViewToggle() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    const saved = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_VIEW_MODE) ?? "list";
    setViewMode(saved);
    els.viewListBtn.addEventListener("click", () => setViewMode("list"));
    els.viewTileBtn.addEventListener("click", () => setViewMode("tile"));
    els.viewHybridBtn.addEventListener("click", () => setViewMode("hybrid"));
    const compact = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_COMPACT_TILES) === "true";
    (0,_state__WEBPACK_IMPORTED_MODULE_4__.setCompactMode)(compact);
    els.compactTilesToggle.checked = compact;
    els.compactTilesToggle.addEventListener("change", () => {
        (0,_state__WEBPACK_IMPORTED_MODULE_4__.setCompactMode)(els.compactTilesToggle.checked);
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_COMPACT_TILES, els.compactTilesToggle.checked ? "true" : "false");
        const topItems = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getLatestTopItems)();
        if (topItems.length > 0)
            (0,_market_marketPanel__WEBPACK_IMPORTED_MODULE_3__.renderMarketItems)(topItems);
        if ((0,_state__WEBPACK_IMPORTED_MODULE_4__.getAnalyzer)())
            _renderFavorites();
        const searchResults = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getLatestSearchResults)();
        if (searchResults.length > 0)
            (0,_market_marketSearch__WEBPACK_IMPORTED_MODULE_2__.renderSearchResults)(searchResults);
    });
}
function setViewMode(mode) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    (0,_state__WEBPACK_IMPORTED_MODULE_4__.setCurrentView)(mode);
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_VIEW_MODE, mode);
    els.viewListBtn.classList.toggle("active", mode === "list");
    els.viewTileBtn.classList.toggle("active", mode === "tile");
    els.viewHybridBtn.classList.toggle("active", mode === "hybrid");
    els.marketItems.className = `market-items ${mode}`;
    els.searchResults.className = `market-items ${mode}`;
    els.favoritesItems.className = `market-items ${mode}`;
    const topItems = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getLatestTopItems)();
    if (topItems.length > 0)
        (0,_market_marketPanel__WEBPACK_IMPORTED_MODULE_3__.renderMarketItems)(topItems);
    if ((0,_state__WEBPACK_IMPORTED_MODULE_4__.getAnalyzer)())
        _renderFavorites();
}


/***/ },

/***/ "./ui/market/marketPanel.ts"
/*!**********************************!*\
  !*** ./ui/market/marketPanel.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindMarketFilters: () => (/* binding */ bindMarketFilters),
/* harmony export */   bindTop20Collapse: () => (/* binding */ bindTop20Collapse),
/* harmony export */   refreshMarketPanel: () => (/* binding */ refreshMarketPanel),
/* harmony export */   renderMarketItems: () => (/* binding */ renderMarketItems)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./ui/constants.ts");
/* harmony import */ var _marketSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marketSort */ "./ui/market/marketSort.ts");
/* harmony import */ var _marketSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marketSearch */ "./ui/market/marketSearch.ts");
/* harmony import */ var _collapseToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../collapseToggle */ "./ui/collapseToggle.ts");
/* harmony import */ var _card_cardBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card/cardBuilder */ "./ui/card/cardBuilder.ts");
/* harmony import */ var _notifications_errorBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notifications/errorBanner */ "./ui/notifications/errorBanner.ts");
/* harmony import */ var _notifications_priceAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notifications/priceAlerts */ "./ui/notifications/priceAlerts.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/**
 * @module ui/marketPanel
 * Top 20 rendering, filter config, refresh pipeline,
 * and collapse binding.
 */









// ─── Local state ────────────────────────────────────────────────────────────
// ─── Filter config ──────────────────────────────────────────────────────────
function readFilterConfig() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_7__.getEls)();
    const config = {};
    const volPreset = els.filterVolume.value;
    if (volPreset === "high") {
        config.minVolume = 50000;
    }
    else if (volPreset === "low") {
        config.maxVolume = 5000;
    }
    else if (volPreset === "custom") {
        const minVol = Number(els.volumeMinInput.value) || 0;
        const maxVol = Number(els.volumeMaxInput.value) || 0;
        if (minVol > 0)
            config.minVolume = minVol;
        if (maxVol > 0)
            config.maxVolume = maxVol;
    }
    const pricePreset = els.filterPrice.value;
    if (pricePreset === "custom") {
        const maxPrice = Number(els.budgetInput.value) || 0;
        if (maxPrice > 0)
            config.maxPrice = maxPrice;
    }
    else {
        const maxPrice = Number(pricePreset);
        if (maxPrice > 0)
            config.maxPrice = maxPrice;
    }
    return config;
}
// ─── Refresh market panel ───────────────────────────────────────────────────
async function refreshMarketPanel() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_7__.getEls)();
    const cache = (0,_state__WEBPACK_IMPORTED_MODULE_8__.getCache)();
    const analyzer = (0,_state__WEBPACK_IMPORTED_MODULE_8__.getAnalyzer)();
    (0,_notifications_errorBanner__WEBPACK_IMPORTED_MODULE_5__.hideError)();
    els.marketLoading.style.display = "";
    els.marketLoading.textContent = "Loading market data\u2026";
    els.marketLoading.classList.remove("error");
    els.marketItems.innerHTML = "";
    try {
        const filters = readFilterConfig();
        let topItems = await analyzer.getTopItems(filters);
        const confLevel = els.filterConfidence.value;
        if (confLevel === "medium") {
            topItems = topItems.filter((i) => i.trendReliability === "Medium" || i.trendReliability === "High");
        }
        else if (confLevel === "high") {
            topItems = topItems.filter((i) => i.trendReliability === "High");
        }
        (0,_state__WEBPACK_IMPORTED_MODULE_8__.setLatestTopItems)(topItems);
        (0,_state__WEBPACK_IMPORTED_MODULE_8__.setLatestMarketSummary)(analyzer.formatForLLM(topItems));
        (0,_marketSort__WEBPACK_IMPORTED_MODULE_1__.applySortOrder)(topItems, els.top20SortSelect.value);
        renderMarketItems(topItems);
        cache.getByName("Nature rune").then((rec) => {
            if (rec?.price)
                (0,_state__WEBPACK_IMPORTED_MODULE_8__.setCachedNatureRunePrice)(rec.price);
        }).catch(() => { });
        analyzer.getFormattedForLLM().then(ctx => { (0,_state__WEBPACK_IMPORTED_MODULE_8__.setLatestLLMContext)(ctx); }).catch(() => { });
        try {
            const allItems = await analyzer.getTopItems({ topN: 99999, minVolume: 0 });
            (0,_notifications_priceAlerts__WEBPACK_IMPORTED_MODULE_6__.checkPriceAlerts)(allItems);
        }
        catch { /* non-critical */ }
    }
    catch (err) {
        console.error("[UIService] Failed to refresh market panel:", err);
        const msg = err instanceof Error ? err.message : "Failed to load market data.";
        (0,_notifications_errorBanner__WEBPACK_IMPORTED_MODULE_5__.showError)(msg);
        return;
    }
    els.marketLoading.style.display = "none";
}
// ─── Render functions ───────────────────────────────────────────────────────
function renderMarketItems(items) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_7__.getEls)();
    els.marketItems.innerHTML = "";
    if (items.length === 0) {
        const empty = document.createElement("div");
        empty.className = "market-empty";
        empty.textContent = "No liquid items found.";
        els.marketItems.appendChild(empty);
        return;
    }
    items.forEach((item, i) => {
        els.marketItems.appendChild((0,_card_cardBuilder__WEBPACK_IMPORTED_MODULE_4__.buildItemCard)(item, i + 1));
    });
}
// ─── Bind Market Filters ────────────────────────────────────────────────────
function bindMarketFilters() {
    bindFilterDropdowns();
    bindSortSelects();
    bindRefreshButton();
    (0,_marketSearch__WEBPACK_IMPORTED_MODULE_2__.bindSearchInput)();
}
/** Restore + bind volume/price/confidence filter dropdowns and custom slider sync. */
function bindFilterDropdowns() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_7__.getEls)();
    const savedVol = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_FILTER_VOLUME);
    if (savedVol) {
        els.filterVolume.value = savedVol;
        if (savedVol === "custom")
            els.volumeCustomGroup.style.display = "";
    }
    const savedPrice = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_FILTER_PRICE);
    if (savedPrice) {
        els.filterPrice.value = savedPrice;
        if (savedPrice === "custom")
            els.budgetCustomGroup.style.display = "";
    }
    const savedConf = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_FILTER_CONFIDENCE);
    if (savedConf)
        els.filterConfidence.value = savedConf;
    els.filterVolume.addEventListener("change", () => {
        els.volumeCustomGroup.style.display =
            els.filterVolume.value === "custom" ? "" : "none";
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_FILTER_VOLUME, els.filterVolume.value);
    });
    els.filterPrice.addEventListener("change", () => {
        els.budgetCustomGroup.style.display =
            els.filterPrice.value === "custom" ? "" : "none";
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_FILTER_PRICE, els.filterPrice.value);
    });
    els.filterConfidence.addEventListener("change", () => {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_FILTER_CONFIDENCE, els.filterConfidence.value);
    });
    syncSliderAndInput(els.volumeMinSlider, els.volumeMinInput);
    syncSliderAndInput(els.volumeMaxSlider, els.volumeMaxInput);
    syncSliderAndInput(els.budgetSlider, els.budgetInput);
}
/** Restore + bind Top 20 and Search sort selects. */
function bindSortSelects() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_7__.getEls)();
    const savedTop20Sort = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.TOP20_SORT_KEY);
    if (savedTop20Sort)
        els.top20SortSelect.value = savedTop20Sort;
    els.top20SortSelect.addEventListener("change", () => {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.TOP20_SORT_KEY, els.top20SortSelect.value);
        const topItems = (0,_state__WEBPACK_IMPORTED_MODULE_8__.getLatestTopItems)();
        (0,_marketSort__WEBPACK_IMPORTED_MODULE_1__.applySortOrder)(topItems, els.top20SortSelect.value);
        renderMarketItems(topItems);
    });
    const savedSearchSort = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.SEARCH_SORT_KEY);
    if (savedSearchSort)
        els.searchSortSelect.value = savedSearchSort;
    els.searchSortSelect.addEventListener("change", () => {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.SEARCH_SORT_KEY, els.searchSortSelect.value);
        const searchResults = (0,_state__WEBPACK_IMPORTED_MODULE_8__.getLatestSearchResults)();
        if (searchResults.length > 0) {
            (0,_marketSort__WEBPACK_IMPORTED_MODULE_1__.applySortOrder)(searchResults, els.searchSortSelect.value);
            (0,_marketSearch__WEBPACK_IMPORTED_MODULE_2__.renderSearchResults)(searchResults);
        }
    });
}
/** Bind refresh button — clears search state and re-fetches top items. */
function bindRefreshButton() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_7__.getEls)();
    els.refreshMarketBtn.addEventListener("click", async () => {
        els.marketSearchInput.value = "";
        (0,_state__WEBPACK_IMPORTED_MODULE_8__.setIsSearchActive)(false);
        (0,_marketSearch__WEBPACK_IMPORTED_MODULE_2__.resetBrowseAllButton)();
        (0,_state__WEBPACK_IMPORTED_MODULE_8__.setLatestSearchResults)([]);
        (0,_state__WEBPACK_IMPORTED_MODULE_8__.setUnfilteredSearchResults)([]);
        els.searchResults.innerHTML = "";
        els.searchLoading.style.display = "none";
        await refreshMarketPanel();
    });
}
function syncSliderAndInput(slider, input) {
    slider.addEventListener("input", () => { input.value = slider.value; });
    input.addEventListener("input", () => {
        const v = Number(input.value) || 0;
        if (v > Number(slider.max))
            slider.max = String(v);
        slider.value = String(v);
    });
}
// ─── Top 20 Collapse ────────────────────────────────────────────────────────
function bindTop20Collapse() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_7__.getEls)();
    const marketActions = els.marketHeader.querySelector(".market-header-actions");
    (0,_collapseToggle__WEBPACK_IMPORTED_MODULE_3__.bindCollapseToggle)({
        collapseBtn: els.top20CollapseBtn,
        targets: [els.marketItems],
        headerBar: els.marketHeader,
        stopPropagationEls: marketActions ? [marketActions] : [],
        onToggle: (collapsed) => {
            if (collapsed)
                els.marketLoading.style.display = "none";
        },
    });
}


/***/ },

/***/ "./ui/market/marketSearch.ts"
/*!***********************************!*\
  !*** ./ui/market/marketSearch.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applySearchCategoryFilters: () => (/* binding */ applySearchCategoryFilters),
/* harmony export */   bindSearchFilters: () => (/* binding */ bindSearchFilters),
/* harmony export */   bindSearchInput: () => (/* binding */ bindSearchInput),
/* harmony export */   hideBrowseAll: () => (/* binding */ hideBrowseAll),
/* harmony export */   loadBrowseAll: () => (/* binding */ loadBrowseAll),
/* harmony export */   refilterSearchResults: () => (/* binding */ refilterSearchResults),
/* harmony export */   renderSearchResults: () => (/* binding */ renderSearchResults),
/* harmony export */   resetBrowseAllButton: () => (/* binding */ resetBrowseAllButton),
/* harmony export */   updateFilterBadge: () => (/* binding */ updateFilterBadge)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _searchFilterData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchFilterData */ "./ui/market/searchFilterData.ts");
/* harmony import */ var _marketSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marketSort */ "./ui/market/marketSort.ts");
/* harmony import */ var _card_cardBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/cardBuilder */ "./ui/card/cardBuilder.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./ui/helpers.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/**
 * @module ui/marketSearch
 * Search orchestration: category filter matching, filter badge,
 * browse-all mode, and search filter popover DOM building.
 */







// ─── Render search results ──────────────────────────────────────────────────
function renderSearchResults(items) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_5__.getEls)();
    els.searchResults.innerHTML = "";
    els.searchResults.className = `market-items ${(0,_state__WEBPACK_IMPORTED_MODULE_6__.getCurrentView)()}`;
    if (items.length === 0) {
        const empty = document.createElement("div");
        empty.className = "market-empty";
        empty.textContent = "No results found.";
        els.searchResults.appendChild(empty);
        return;
    }
    for (const item of items) {
        els.searchResults.appendChild((0,_card_cardBuilder__WEBPACK_IMPORTED_MODULE_3__.buildItemCard)(item));
    }
}
// ─── Search category filter helpers ─────────────────────────────────────────
function applySearchCategoryFilters(items) {
    const activeSearchFilters = (0,_state__WEBPACK_IMPORTED_MODULE_6__.getActiveSearchFilters)();
    if (activeSearchFilters.size === 0)
        return items;
    const activeByGroup = new Map();
    for (const group of _searchFilterData__WEBPACK_IMPORTED_MODULE_1__.SEARCH_FILTER_GROUPS) {
        const active = group.filters.filter((f) => activeSearchFilters.has(f.id));
        if (active.length > 0)
            activeByGroup.set(group.title, active);
    }
    if (activeByGroup.size === 0)
        return items;
    return items.filter((item) => {
        for (const [, filters] of activeByGroup) {
            const anyMatch = filters.some((f) => f.match(item.name, item));
            if (!anyMatch)
                return false;
        }
        return true;
    });
}
function updateFilterBadge() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_5__.getEls)();
    const count = (0,_state__WEBPACK_IMPORTED_MODULE_6__.getActiveSearchFilters)().size;
    const existing = els.searchFilterBtn.querySelector(".filter-count-badge");
    if (existing)
        existing.remove();
    if (count > 0) {
        els.searchFilterBtn.classList.add("has-active-filters");
        const badge = document.createElement("span");
        badge.className = "filter-count-badge";
        badge.textContent = String(count);
        els.searchFilterBtn.appendChild(badge);
    }
    else {
        els.searchFilterBtn.classList.remove("has-active-filters");
    }
}
function refilterSearchResults() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_5__.getEls)();
    const query = els.marketSearchInput.value.trim();
    const activeSearchFilters = (0,_state__WEBPACK_IMPORTED_MODULE_6__.getActiveSearchFilters)();
    if (query.length === 0 && activeSearchFilters.size > 0) {
        loadBrowseAll();
        return;
    }
    if (query.length === 0 && activeSearchFilters.size === 0) {
        (0,_state__WEBPACK_IMPORTED_MODULE_6__.setIsSearchActive)(false);
        (0,_state__WEBPACK_IMPORTED_MODULE_6__.setLatestSearchResults)([]);
        (0,_state__WEBPACK_IMPORTED_MODULE_6__.setUnfilteredSearchResults)([]);
        els.searchResults.innerHTML = "";
        els.searchLoading.style.display = "none";
        updateFilterBadge();
        return;
    }
    const filtered = applySearchCategoryFilters((0,_state__WEBPACK_IMPORTED_MODULE_6__.getUnfilteredSearchResults)());
    (0,_state__WEBPACK_IMPORTED_MODULE_6__.setLatestSearchResults)(filtered);
    (0,_marketSort__WEBPACK_IMPORTED_MODULE_2__.applySortOrder)(filtered, els.searchSortSelect.value);
    if (filtered.length > 0 || (0,_state__WEBPACK_IMPORTED_MODULE_6__.getUnfilteredSearchResults)().length > 0) {
        renderSearchResults(filtered);
    }
    updateFilterBadge();
}
async function loadBrowseAll() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_5__.getEls)();
    const analyzer = (0,_state__WEBPACK_IMPORTED_MODULE_6__.getAnalyzer)();
    const activeSearchFilters = (0,_state__WEBPACK_IMPORTED_MODULE_6__.getActiveSearchFilters)();
    (0,_state__WEBPACK_IMPORTED_MODULE_6__.setIsSearchActive)(true);
    (0,_state__WEBPACK_IMPORTED_MODULE_6__.setIsBrowseAllActive)(true);
    els.browseAllBtn.textContent = "\u2716 Hide All";
    els.browseAllBtn.title = "Hide browse-all results";
    els.searchLoading.textContent = "Loading all items\u2026";
    els.searchLoading.style.display = "";
    els.searchResults.innerHTML = "";
    try {
        const limit = activeSearchFilters.size > 0 ? 0 : 500;
        const all = await analyzer.getAllScored(limit);
        (0,_state__WEBPACK_IMPORTED_MODULE_6__.setUnfilteredSearchResults)(all);
        const filtered = applySearchCategoryFilters(all);
        (0,_state__WEBPACK_IMPORTED_MODULE_6__.setLatestSearchResults)(filtered);
        (0,_marketSort__WEBPACK_IMPORTED_MODULE_2__.applySortOrder)(filtered, els.searchSortSelect.value);
        renderSearchResults(filtered);
        els.searchLoading.style.display = "none";
    }
    catch (err) {
        console.error("[UIService] Browse all failed:", err);
        els.searchLoading.textContent = "Failed to load items.";
    }
    updateFilterBadge();
}
function hideBrowseAll() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_5__.getEls)();
    (0,_state__WEBPACK_IMPORTED_MODULE_6__.setIsBrowseAllActive)(false);
    (0,_state__WEBPACK_IMPORTED_MODULE_6__.setIsSearchActive)(false);
    resetBrowseAllButton();
    els.searchResults.innerHTML = "";
    els.searchLoading.style.display = "none";
    (0,_state__WEBPACK_IMPORTED_MODULE_6__.setLatestSearchResults)([]);
    (0,_state__WEBPACK_IMPORTED_MODULE_6__.setUnfilteredSearchResults)([]);
    updateFilterBadge();
}
function resetBrowseAllButton() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_5__.getEls)();
    (0,_state__WEBPACK_IMPORTED_MODULE_6__.setIsBrowseAllActive)(false);
    els.browseAllBtn.textContent = "\uD83D\uDCCB Browse All";
    els.browseAllBtn.title = "Browse all cached items (apply filters to narrow down)";
}
// ─── Search input binding ───────────────────────────────────────────────────
/** Bind the debounced search input handler. */
function bindSearchInput() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_5__.getEls)();
    els.marketSearchInput.addEventListener("input", (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.debounce)(async () => {
        const query = els.marketSearchInput.value.trim();
        if (query.length > 2) {
            (0,_state__WEBPACK_IMPORTED_MODULE_6__.setIsSearchActive)(true);
            resetBrowseAllButton();
            els.searchLoading.textContent = "Searching\u2026";
            els.searchLoading.style.display = "";
            els.searchResults.innerHTML = "";
            try {
                const needle = query.toLowerCase();
                const catalogueHits = (0,_state__WEBPACK_IMPORTED_MODULE_6__.getGeCatalogue)()
                    .filter((e) => e.name.toLowerCase().includes(needle))
                    .slice(0, 50);
                if (catalogueHits.length === 0) {
                    els.searchLoading.textContent = `No items match "${query}".`;
                    return;
                }
                const cache = (0,_state__WEBPACK_IMPORTED_MODULE_6__.getCache)();
                const wiki = (0,_state__WEBPACK_IMPORTED_MODULE_6__.getWiki)();
                const analyzer = (0,_state__WEBPACK_IMPORTED_MODULE_6__.getAnalyzer)();
                const cachedRecords = await cache.getAll();
                const cachedNames = new Set(cachedRecords.map((r) => r.name));
                const uncachedHits = catalogueHits.filter((e) => !cachedNames.has(e.name));
                if (uncachedHits.length > 0) {
                    els.searchLoading.textContent = `Fetching ${uncachedHits.length} item(s)\u2026`;
                    const api = new _services__WEBPACK_IMPORTED_MODULE_0__.WeirdGloopService();
                    const prices = await api.fetchLatestPrices(uncachedHits.map((e) => e.name));
                    if (prices.size > 0) {
                        els.searchLoading.textContent = `Enriching ${prices.size} item(s) with buy limits\u2026`;
                        const itemNames = Array.from(prices.keys());
                        const buyLimits = await wiki.getBulkBuyLimits(itemNames);
                        for (const [name, record] of prices) {
                            const limit = buyLimits.get(name);
                            if (limit !== undefined) {
                                record.buyLimit = limit;
                            }
                        }
                        await cache.bulkInsert(prices);
                    }
                }
                const results = await analyzer.searchItems(query);
                (0,_state__WEBPACK_IMPORTED_MODULE_6__.setUnfilteredSearchResults)(results);
                const filtered = applySearchCategoryFilters(results);
                (0,_state__WEBPACK_IMPORTED_MODULE_6__.setLatestSearchResults)(filtered);
                (0,_marketSort__WEBPACK_IMPORTED_MODULE_2__.applySortOrder)(filtered, els.searchSortSelect.value);
                renderSearchResults(filtered);
                if (results.length === 0) {
                    els.searchLoading.textContent = `No price data for "${query}".`;
                    els.searchLoading.style.display = "";
                    return;
                }
            }
            catch (err) {
                console.error("[UIService] Search failed:", err);
            }
            els.searchLoading.style.display = "none";
        }
        else if (query.length === 0) {
            if ((0,_state__WEBPACK_IMPORTED_MODULE_6__.getActiveSearchFilters)().size > 0) {
                loadBrowseAll();
            }
            else {
                (0,_state__WEBPACK_IMPORTED_MODULE_6__.setIsSearchActive)(false);
                resetBrowseAllButton();
                (0,_state__WEBPACK_IMPORTED_MODULE_6__.setLatestSearchResults)([]);
                (0,_state__WEBPACK_IMPORTED_MODULE_6__.setUnfilteredSearchResults)([]);
                els.searchResults.innerHTML = "";
                els.searchLoading.style.display = "none";
            }
        }
    }, 300));
}
// ─── Search filter popover ──────────────────────────────────────────────────
function bindSearchFilters() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_5__.getEls)();
    const popover = els.searchFilterPopover;
    const activeSearchFilters = (0,_state__WEBPACK_IMPORTED_MODULE_6__.getActiveSearchFilters)();
    for (const group of _searchFilterData__WEBPACK_IMPORTED_MODULE_1__.SEARCH_FILTER_GROUPS) {
        const section = document.createElement("div");
        section.className = "search-filter-group";
        const title = document.createElement("span");
        title.className = "search-filter-group-title";
        title.textContent = group.title;
        section.appendChild(title);
        const tags = document.createElement("div");
        tags.className = "search-filter-tags";
        for (const filter of group.filters) {
            const tag = document.createElement("label");
            tag.className = "search-filter-tag";
            tag.dataset.filterId = filter.id;
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.name = `search-filter-${filter.id}`;
            const text = document.createTextNode(filter.label);
            tag.appendChild(cb);
            tag.appendChild(text);
            cb.addEventListener("change", () => {
                if (cb.checked) {
                    activeSearchFilters.add(filter.id);
                    tag.classList.add("checked");
                }
                else {
                    activeSearchFilters.delete(filter.id);
                    tag.classList.remove("checked");
                }
                refilterSearchResults();
            });
            tags.appendChild(tag);
        }
        section.appendChild(tags);
        popover.appendChild(section);
    }
    const actions = document.createElement("div");
    actions.className = "search-filter-actions";
    const clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.className = "search-filter-clear-btn";
    clearBtn.textContent = "Clear All";
    clearBtn.addEventListener("click", () => {
        activeSearchFilters.clear();
        popover.querySelectorAll(".search-filter-tag.checked").forEach((t) => {
            t.classList.remove("checked");
            const cb = t.querySelector("input");
            if (cb)
                cb.checked = false;
        });
        refilterSearchResults();
    });
    actions.appendChild(clearBtn);
    popover.appendChild(actions);
    els.searchFilterBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        popover.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
        if (!popover.contains(e.target) && e.target !== els.searchFilterBtn) {
            popover.classList.remove("open");
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape")
            popover.classList.remove("open");
    });
    els.browseAllBtn.addEventListener("click", () => {
        if ((0,_state__WEBPACK_IMPORTED_MODULE_6__.getIsBrowseAllActive)()) {
            hideBrowseAll();
        }
        else {
            els.marketSearchInput.value = "";
            loadBrowseAll();
        }
    });
}


/***/ },

/***/ "./ui/market/marketSort.ts"
/*!*********************************!*\
  !*** ./ui/market/marketSort.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applySortOrder: () => (/* binding */ applySortOrder)
/* harmony export */ });
/**
 * @module ui/marketSort
 * Shared sort helper for ranked item lists (Top 20, Search, Favourites).
 */
function applySortOrder(items, sortKey) {
    if (sortKey === "default") {
        items.sort((a, b) => b.tradedValue - a.tradedValue);
    }
    else if (sortKey === "alpha") {
        items.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortKey === "price-desc") {
        items.sort((a, b) => b.price - a.price);
    }
    else if (sortKey === "profit-desc") {
        items.sort((a, b) => b.estFlipProfit - a.estFlipProfit);
    }
    else if (sortKey === "rot-desc") {
        items.sort((a, b) => b.returnOnTime - a.returnOnTime);
    }
    return items;
}


/***/ },

/***/ "./ui/market/searchFilterData.ts"
/*!***************************************!*\
  !*** ./ui/market/searchFilterData.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SEARCH_FILTER_GROUPS: () => (/* binding */ SEARCH_FILTER_GROUPS),
/* harmony export */   nameHasAny: () => (/* binding */ nameHasAny)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/**
 * @module ui/searchFilterData
 * Search filter category definitions and keyword matching logic
 * for the market search popover.
 */

// ─── Helpers ────────────────────────────────────────────────────────────────
/** Case-insensitive keyword helper. */
function nameHasAny(name, keywords) {
    const lower = name.toLowerCase();
    return keywords.some((k) => lower.includes(k.toLowerCase()));
}
// ─── Filter groups ──────────────────────────────────────────────────────────
const SEARCH_FILTER_GROUPS = [
    /* ── Combat Equipment ──────────────────────────────────────────── */
    {
        title: "Combat Equipment",
        filters: [
            { id: "ce-melee-armour", label: "Melee Armour", match: (n) => nameHasAny(n, [
                    "platebody", "platelegs", "plateskirt", "chainbody", "full helm", "med helm",
                    "kiteshield", "sq shield", "gauntlets", "sabatons", "defender",
                    "bandos", "torva", "malevolent", "masterwork", "rock-shell",
                    "bane armour", "elder rune armour", "orikalkum armour", "necronium armour",
                    "trimmed masterwork", "hauberk", "greaves", "cuirass", "linza"
                ]) },
            { id: "ce-melee-weapons", label: "Melee Weapons", match: (n) => nameHasAny(n, [
                    "sword", "scimitar", "mace", "warhammer", "lance", "halberd", "whip",
                    "godsword", "maul", "rapier", "spear", "claw", "dagger", "2h sword",
                    "battleaxe", "longsword", "hasta", "noxious scythe", "drygore",
                    "khopesh", "abyssal vine", "lava whip", "ripper claw", "korasi",
                    "saradomin sword", "zamorakian spear", "flail", "cleaver"
                ]) },
            { id: "ce-ranged-armour", label: "Ranged Armour", match: (n) => nameHasAny(n, [
                    "dragonhide body", "d'hide body", "d'hide chaps", "d'hide vamb",
                    "armadyl", "pernix", "sirenic", "royal d'hide", "karil",
                    "robin hood", "ranger boots", "snakeskin", "spined", "coif",
                    "chaps", "vambraces", "anima core of zamorak", "elite ranger",
                    "glaiven", "fleeting boots", "tracking gloves"
                ]) },
            { id: "ce-ranged-weapons", label: "Ranged Weapons", match: (n) => nameHasAny(n, [
                    "crossbow", "shortbow", "longbow", "shieldbow", "chargebow",
                    "noxious longbow", "seren godbow", "blowpipe", "decimation",
                    "zaryte bow", "hexhunter bow", "wyvern crossbow", "ascension crossbow",
                    "mechanised chinchompa", "sagittarian", "hand cannon"
                ]) },
            { id: "ce-magic-armour", label: "Magic Armour", match: (n) => nameHasAny(n, [
                    "mystic robe", "ahrim", "virtus", "tectonic", "subjugation",
                    "ganodermic", "seasinger", "anima core of seren", "skeletal",
                    "splitbark", "infinity robe", "zuriel", "robes of", "batwing",
                    "dagon'hai", "fungal visor", "fungal poncho", "fungal leggings",
                    "battle-mage"
                ]) },
            { id: "ce-magic-weapons", label: "Magic Weapons", match: (n) => nameHasAny(n, [
                    "staff of", " staff", "wand", "book of", "seismic", "noxious staff",
                    "inquisitor staff", "fractured staff", "cywir", "obliteration",
                    "abyssal wand", "seasinger kiba", "virtus wand", "orb of",
                    "polypore staff", "camel staff", "staff of sliske"
                ]) },
            { id: "ce-ammunition", label: "Ammunition", match: (n) => nameHasAny(n, [
                    "arrow", "bolt", "dart", "javelin", "throwing knife", "throwing axe",
                    "chinchompa", "brutal", "cannonball", "skillchompa",
                    "bakriminel", "ascension bolt", "dragonstone bolt", "ruby bolt",
                    "diamond bolt", "onyx bolt", "hydrix bolt", "tar", "grapple",
                    "fire arrows", "ogre arrow"
                ]) },
            { id: "ce-prayer-necro", label: "Prayer / Necro Gear", match: (n) => nameHasAny(n, [
                    "proselyte", "initiate", "vestment", "monk robe", "stole",
                    "mitre", "crozier", "deathwarden", "deathstorm",
                    "skull lantern", "spectral shield", "prayer cape",
                    "spirit shield", "deathguard", "omni guard",
                    "first necromancer", "soulbound lantern"
                ]) },
        ],
    },
    /* ── Skills / Materials ────────────────────────────────────────── */
    {
        title: "Skills / Materials",
        filters: [
            { id: "sk-herblore", label: "Herblore", match: (n) => nameHasAny(n, [
                    "grimy", "clean ", "unfinished potion", "vial of",
                    "dwarf weed", "snapdragon", "torstol", "lantadyme", "cadantine",
                    "kwuarm", "avantoe", "ranarr", "toadflax", "irit", "harralander",
                    "tarromin", "guam", "marrentill", "spirit weed", "wergali", "fellstalk",
                    "arbuck", "bloodweed",
                    "eye of newt", "limpwurt root", "white berries", "red spiders' eggs",
                    "wine of zamorak", "potato cactus", "mort myre fungus", "snape grass",
                    "blue dragon scale", "crushed nest", "jangerberries", "ground mud rune",
                    "bird nest", "unicorn horn dust", "kebbit teeth dust",
                    "primal extract", "coconut milk", "desert goat horn", "goat horn dust",
                    "cave nightshade", "grenwall spike", "crystal flask", "proboscis",
                    "spark chitin", "ground miasma rune", "wimpy feather"
                ]) },
            { id: "sk-mining-smithing", label: "Mining & Smithing", match: (n) => nameHasAny(n, [
                    " ore", " bar", "arrowhead", "dart tip", "unfinished bolt",
                    "bane ", "elder rune", "orikalkum", "necronium", "phasmatite",
                    "banite", "luminite", "drakolith", "light animica", "dark animica",
                    "copper ore", "tin ore", "iron ore", "coal", "mithril ore",
                    "adamantite ore", "runite ore", "gold ore", "silver ore",
                    "bronze bar", "iron bar", "steel bar", "mithril bar", "adamant bar",
                    "rune bar", "gold bar", "silver bar", "stone spirit",
                    "corrupted ore", "concentrated gold", "seren stone"
                ]) },
            { id: "sk-crafting", label: "Crafting", match: (n) => nameHasAny(n, [
                    "dragonhide", "d'hide", "leather", "uncut ", " gem",
                    "emerald", "ruby", "sapphire", "diamond", "onyx", "hydrix",
                    "dragonstone", "gold bar", "silver bar", "battlestaff",
                    "molten glass", "ball of wool", "flax", "bowstring",
                    "red topaz", "jade", "opal", "cut "
                ]) },
            { id: "sk-cooking", label: "Cooking", match: (n) => nameHasAny(n, [
                    "raw ", "cooked ", "shark", "rocktail", "sailfish", "lobster",
                    "swordfish", "monkfish", "tuna", "trout", "salmon", "pie",
                    "cake", "bread", "soup", "manta ray", "cavefish", "catfish",
                    "great white", "blue blubber", "green blubber",
                    "baron shark", "bass", "herring", "karambwan",
                    "ale yeast", "barley", "barley malt", "hops",
                    "dough", "flour", "milk", "chocolate", "grapes",
                    "biscuit", "pizza", "kebab", "stew",
                    "shrimp", "sardine", "mackerel", "pike", "cod",
                    "sea turtle", "roast ", "wrapped oomlie"
                ]) },
            { id: "sk-fletching", label: "Fletching", match: (n) => nameHasAny(n, [
                    "arrow shaft", "bowstring", "headless arrow", "feather",
                    "unstrung", "bow (u)", "crossbow (u)", "longbow (u)", "shortbow (u)",
                    "shieldbow (u)", "javelin shaft", "flax", "bolt tips",
                    "broad arrowhead", "ascension shard"
                ]) },
            { id: "sk-farming", label: "Farming & Seeds", match: (n) => nameHasAny(n, [
                    "seed", "sapling", "compost", "plant cure", "herb seed",
                    "allotment", "snapdragon seed", "torstol seed", "magic seed",
                    "yew seed", "papaya", "coconut", "pineapple", "sweetcorn",
                    "strawberry", "watermelon", "avocado", "mango", "dragonfruit",
                    "cactus spine", "calquat", "spirit seed", "palm tree",
                    "mushroom spore", "poison ivy"
                ]) },
            { id: "sk-runecrafting", label: "Runecrafting", match: (n) => nameHasAny(n, [
                    "pure essence", "rune essence", "talisman", "tiara",
                    "binding necklace", "runecrafting", "vis wax"
                ]) },
            { id: "sk-construction", label: "Construction", match: (n) => nameHasAny(n, [
                    "plank", "limestone", "marble block", "white marble", "gold leaf",
                    "mahogany plank", "teak plank", "oak plank",
                    "bolt of cloth", "nails", "flatpack", "bagged ",
                    "clockwork"
                ]) },
            { id: "sk-woodcutting", label: "Woodcutting", match: (n) => nameHasAny(n, [
                    "logs", "wood spirit"
                ]) },
            { id: "sk-archaeology", label: "Archaeology", match: (n) => nameHasAny(n, [
                    "soil", "chronotes", "artefact", "restored ", "mattock",
                    "ancient vis", "tyrian purple", "whiteite", "cadmium red",
                    "samite silk", "goldrune", "orthenglass", "star of saradomin",
                    "hellfire metal", "quintessence", "imperial steel",
                    "armadylean yellow", "stormguard steel", "wings of war",
                    "warforged bronze", "zarosian insignia", "third age iron",
                    "blood of orcus", "white oak", "soapstone", "vellum",
                    "leather scraps", "animal furs", "malachite green",
                    "cobalt blue", "chaotic brimstone", "demonhide", "keramos",
                    "silvthril", "everlight silvthril", "orgone", "felt"
                ]) },
            { id: "sk-summoning", label: "Summoning", match: (n) => nameHasAny(n, [
                    "pouch", "spirit shard", "charm", "spirit gem", "summoning",
                    "water talisman", "tortoise shell", "honeycomb",
                    "swamp lizard", "crimson charm", "blue charm", "gold charm", "green charm",
                    "kyatt", "graahk", "larupia"
                ]) },
            { id: "sk-prayer", label: "Prayer Materials", match: (n) => nameHasAny(n, [
                    "bone", "ashes", "ectoplasm", "dragon bone", "frost dragon bone",
                    "big bone", "dagannoth bone", "airut bone", "dinosaur bone",
                    "reinforced dragon bone", "hardened dragon bone", "baby dragon bone",
                    "wyvern bone", "impious ashes", "accursed ashes", "infernal ashes",
                    "searing ashes", "tortured ashes", "holy elixir"
                ]) },
            { id: "sk-divination", label: "Divination", match: (n) => nameHasAny(n, [
                    "energy", "sign of", "divine ", "porter", "incandescent",
                    "luminous", "brilliant", "vibrant", "radiant", "elder energy",
                    "cursed energy", "pale energy", "flickering", "gleaming", "lustrous"
                ]) },
            { id: "sk-invention", label: "Invention", match: (n) => nameHasAny(n, [
                    "augment", "divine charge", "simple parts", "component",
                    "siphon", "equipment dissolver", "charge pack",
                    "ancient invention", "gizmo"
                ]) },
            { id: "sk-firemaking", label: "Firemaking", match: (n) => nameHasAny(n, [
                    "incense stick", "pyre log", "pyre logs"
                ]) },
            { id: "sk-hunting", label: "Hunting", match: (n) => nameHasAny(n, [
                    "box trap", "bird snare", "butterfly net", "magic box",
                    "noose wand", "teasing stick", "kebbit", "chinchompa",
                    "imp-in-a-box", "rabbit", "jerboa", "larupia", "graahk",
                    "kyatt", "polar kebbit", "sabre-tooth", "hunter kit"
                ]) },
        ],
    },
    /* ── Consumables ───────────────────────────────────────────────── */
    {
        title: "Consumables",
        filters: [
            { id: "co-food", label: "Food & Drink", match: (n) => nameHasAny(n, [
                    "shark", "rocktail", "sailfish", "lobster", "swordfish", "monkfish",
                    "tuna", "manta ray", "cavefish", "baron shark", "blue blubber",
                    "great white", "green blubber", "catfish", "bass", "trout", "salmon",
                    "pie", "cake", "bread", "soup", "stew", "pizza", "biscuit",
                    "anchovies", "cooked ", "baguette", "kebab", "curry",
                    "beer", "ale ", "wine", "cider", "grog",
                    "jellyfish", "beltfish", "desert sole", "ghostly sole",
                    "shrimp", "sardine", "herring", "mackerel", "pike",
                    "karambwan", "sea turtle", "roast ", "wrapped oomlie"
                ]) },
            { id: "co-potions", label: "Potions", match: (n) => nameHasAny(n, [
                    "potion", "flask", "overload", "brew", "prayer renewal",
                    "super restore", "weapon poison", "antifire", "aggression",
                    "adrenaline", "extreme", "supreme overload", "saradomin brew",
                    "super antifire", "super prayer", "replenishment", "powerburst",
                    "antipoison", "super antipoison", "combat mix", "prayer mix",
                    "restore mix", "mixture", "juju"
                ]) },
            { id: "co-runes-teleports", label: "Runes & Teleports", match: (n) => nameHasAny(n, [
                    "air rune", "water rune", "earth rune", "fire rune",
                    "mind rune", "body rune", "cosmic rune", "chaos rune",
                    "nature rune", "law rune", "death rune", "blood rune",
                    "soul rune", "astral rune", "armadyl rune",
                    "dust rune", "lava rune", "mist rune", "mud rune",
                    "smoke rune", "steam rune",
                    "teleport", "teletab", "tablet",
                    "ring of duelling", "ring of wealth", "combat bracelet",
                    "skills necklace", "games necklace", "amulet of glory",
                    "ectophial", "house teleport"
                ]) },
            { id: "co-scrolls", label: "Summoning Scrolls", match: (n) => nameHasAny(n, [
                    "scroll ("
                ]) },
            { id: "co-pocket", label: "Pocket Items", match: (n) => nameHasAny(n, [
                    "scrimshaw", "god book", "book of", "illuminated ",
                    "sign of the porter", "sign of life", "sign of death",
                    "scripture", "grimoire", "god page",
                    "ancient page", "armadyl page", "bandos page",
                    "guthix page", "saradomin page", "zamorak page", "zaros page",
                    "seren page"
                ]) },
        ],
    },
    /* ── Other ─────────────────────────────────────────────────────── */
    {
        title: "Other",
        filters: [
            { id: "ot-jewellery", label: "Jewellery", match: (n) => nameHasAny(n, [
                    "amulet", "necklace", "bracelet", "ring of", "brooch",
                    "pendant", "ring (", "onyx ring", "diamond ring",
                    "ruby ring", "emerald ring", "sapphire ring", "dragonstone ring",
                    "zenyte", "alchemical onyx",
                    "luck of the dwarves", "hazelmere", "locket"
                ]) },
            { id: "ot-salvage", label: "Salvage", match: (n) => nameHasAny(n, ["salvage"]) },
            { id: "ot-stone-spirits", label: "Stone Spirits", match: (n) => nameHasAny(n, [
                    "stone spirit"
                ]) },
            { id: "ot-costumes", label: "Costumes", match: (n) => nameHasAny(n, [
                    "costume", "outfit", "mask", "wig", "robe set",
                    "fancy dress", "mime", "lederhosen", "camo", "zombie"
                ]) },
            { id: "ot-tools", label: "Tools & Containers", match: (n) => nameHasAny(n, [
                    "hatchet", "pickaxe", "chisel", "hammer", "knife",
                    "tinderbox", "bucket", "jug", "vial", "pot ", "basket",
                    "watering can", "secateurs", "spade", "rake"
                ]) },
            { id: "ot-familiars", label: "Familiars", match: (n) => nameHasAny(n, [
                    "pouch", "familiar", "beast of burden", "titan ", "minotaur",
                    "unicorn stallion", "war tortoise", "pack yak", "nihil",
                    "ripper demon", "steel titan", "pack mammoth"
                ]) },
            { id: "ot-rares", label: "Rares / Discontinued", match: (n) => nameHasAny(n, [
                    "partyhat", "cracker", "santa hat", "h'ween mask", "halloween mask",
                    "disk of returning", "pumpkin", "easter egg", "black santa",
                    "christmas scythe", "christmas cracker",
                    "fish mask", "holly wreath", "candy cane", "yo-yo"
                ]) },
        ],
    },
    /* ── Metric-based signals (no GE category equivalent) ──────────── */
    {
        title: "Market Signals",
        filters: [
            { id: "ms-uptrend", label: "\u25b2 Uptrend", match: (_n, item) => item?.priceTrend === "Uptrend" },
            { id: "ms-downtrend", label: "\u25bc Downtrend", match: (_n, item) => item?.priceTrend === "Downtrend" },
            { id: "ms-instaflip", label: "\u26a1 Insta-Flip", match: (_n, item) => item?.tradeVelocity === "Insta-Flip" },
            { id: "ms-hype", label: "\ud83d\udd25 Volume Spike", match: (_n, item) => (item?.volumeSpikeMultiplier ?? 0) > 0 },
            { id: "ms-highalch", label: "\ud83e\uddea Alch Profit", match: (_n, item) => typeof item?.highAlch === "number" && item.highAlch > (item.price + (0,_state__WEBPACK_IMPORTED_MODULE_0__.getCachedNatureRunePrice)()) },
            { id: "ms-risky", label: "\u26a0 Risky", match: (_n, item) => item?.isRisky === true },
            { id: "ms-conf-high", label: "\u2705 High Confidence", match: (_n, item) => item?.trendReliability === "High" },
            { id: "ms-conf-med", label: "\u25cf Med Confidence", match: (_n, item) => item?.trendReliability === "Medium" || item?.trendReliability === "High" },
        ],
    },
];


/***/ },

/***/ "./ui/modals/aboutModal.ts"
/*!*********************************!*\
  !*** ./ui/modals/aboutModal.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showAboutModal: () => (/* binding */ showAboutModal)
/* harmony export */ });
/* harmony import */ var _modalBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalBase */ "./ui/modals/modalBase.ts");
/**
 * @module ui/modals/aboutModal
 * "How It Works" about modal — data accuracy disclaimers + prediction confidence.
 */

const ensureAboutModal = (0,_modalBase__WEBPACK_IMPORTED_MODULE_0__.singletonModal)({
    backdropClass: "about-modal-backdrop",
    modalClass: "about-modal",
    ariaLabel: "About Gielinor Equity Research",
});
/** Show the "How It Works" about modal. */
function showAboutModal() {
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
    closeBtn?.focus();
}


/***/ },

/***/ "./ui/modals/analyticsModal.ts"
/*!*************************************!*\
  !*** ./ui/modals/analyticsModal.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideAnalyticsModal: () => (/* binding */ hideAnalyticsModal),
/* harmony export */   showAnalyticsModal: () => (/* binding */ showAnalyticsModal)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _card_badgeBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/badgeBuilder */ "./ui/card/badgeBuilder.ts");
/* harmony import */ var _card_detailBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/detailBuilder */ "./ui/card/detailBuilder.ts");
/* harmony import */ var _trendStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trendStats */ "./ui/trendStats.ts");
/* harmony import */ var _card_actionBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card/actionBuilder */ "./ui/card/actionBuilder.ts");
/* harmony import */ var _chart_interactiveChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chart/interactiveChart */ "./ui/chart/interactiveChart.ts");
/* harmony import */ var _notifications_toasts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notifications/toasts */ "./ui/notifications/toasts.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/* harmony import */ var _graphModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graphModal */ "./ui/modals/graphModal.ts");
/* harmony import */ var _modalBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modalBase */ "./ui/modals/modalBase.ts");
/**
 * @module ui/modals/analyticsModal
 * Full analytics modal — badges, grouped details, alerts, interactive chart.
 */










const ensureAnalyticsModal = (0,_modalBase__WEBPACK_IMPORTED_MODULE_9__.singletonModal)({
    backdropClass: "analytics-modal-backdrop",
    modalClass: "analytics-modal",
    ariaLabel: "Full analytics",
    onClose: () => hideAnalyticsModal(),
    shouldPreventClose: () => {
        for (const chart of (0,_chart_interactiveChart__WEBPACK_IMPORTED_MODULE_5__.getActiveCharts)().values()) {
            if (chart.wasDragging())
                return true;
        }
        return false;
    },
    trapFocus: true,
});
/** Hide the analytics modal and destroy its chart instance. */
function hideAnalyticsModal() {
    ensureAnalyticsModal().backdrop.classList.remove("visible");
    (0,_chart_interactiveChart__WEBPACK_IMPORTED_MODULE_5__.destroyInteractiveChart)("analytics");
}
/** Show the full analytics modal for the given item. */
async function showAnalyticsModal(item) {
    const cache = (0,_state__WEBPACK_IMPORTED_MODULE_7__.getCache)();
    const { backdrop, content: modal } = ensureAnalyticsModal();
    modal.setAttribute("aria-labelledby", "analytics-modal-title");
    const range = 7;
    modal.innerHTML = "";
    // ── Header ──
    const header = document.createElement("div");
    header.className = "analytics-modal-header";
    const img = (0,_modalBase__WEBPACK_IMPORTED_MODULE_9__.buildSpriteImg)(item.itemId, item.name, [48, 42]);
    img.title = `Item ID: ${item.itemId}`;
    const nameEl = document.createElement("span");
    nameEl.className = "analytics-modal-name";
    nameEl.id = "analytics-modal-title";
    nameEl.textContent = item.name;
    const priceEl = document.createElement("span");
    priceEl.className = "analytics-modal-price";
    priceEl.textContent = `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(item.price)} gp`;
    const closeBtn = document.createElement("button");
    closeBtn.className = "analytics-modal-close";
    closeBtn.textContent = "\u2715";
    closeBtn.title = "Close (Esc)";
    closeBtn.setAttribute("aria-label", "Close analytics modal");
    closeBtn.addEventListener("click", hideAnalyticsModal);
    header.appendChild(img);
    header.appendChild(nameEl);
    header.appendChild(priceEl);
    header.appendChild(closeBtn);
    // ── Content wrapper ──
    const content = document.createElement("div");
    content.className = "analytics-content";
    // ── Badges ──
    const badgesHtml = (0,_card_badgeBuilder__WEBPACK_IMPORTED_MODULE_1__.buildHeaderBadgesHtml)(item);
    const badgesEl = document.createElement("div");
    badgesEl.className = "analytics-badges";
    badgesEl.innerHTML = badgesHtml;
    content.appendChild(badgesEl);
    // ── Action buttons ──
    const actionsEl = document.createElement("div");
    actionsEl.className = "analytics-actions";
    const [modalFavBtn, modalAddBtn, modalWikiLink, modalGeLink] = (0,_card_actionBuilder__WEBPACK_IMPORTED_MODULE_4__.buildItemActionButtons)(item, { onClose: hideAnalyticsModal });
    actionsEl.appendChild(modalFavBtn);
    actionsEl.appendChild(modalAddBtn);
    actionsEl.appendChild(modalWikiLink);
    actionsEl.appendChild(modalGeLink);
    content.appendChild(actionsEl);
    // ── Grouped detail rows ──
    const groupedRows = (0,_card_detailBuilder__WEBPACK_IMPORTED_MODULE_2__.buildDetailGroupsHtml)(item, { volumeSpikeWhenAbsent: "normal" });
    const detailsGrid = document.createElement("div");
    detailsGrid.className = "analytics-details-grid";
    detailsGrid.innerHTML = groupedRows;
    content.appendChild(detailsGrid);
    // ── Price alerts ──
    const alertSection = document.createElement("div");
    alertSection.innerHTML = (0,_modalBase__WEBPACK_IMPORTED_MODULE_9__.buildAlertInputsHtml)("analytics");
    content.appendChild(alertSection);
    // ── Price History section ──
    const graphTitle = document.createElement("h3");
    graphTitle.className = "analytics-section-title";
    graphTitle.textContent = "Price History";
    content.appendChild(graphTitle);
    const graphSection = document.createElement("div");
    graphSection.className = "analytics-graph-section";
    graphSection.innerHTML =
        `<div class="analytics-range-row">` +
            `<label>Range: <select class="graph-range-inline" name="graph-range">` +
            [7, 30, 90].map((d) => `<option value="${d}"${d === range ? " selected" : ""}>History: ${d} days</option>`).join("") +
            `</select></label>` +
            `</div>` +
            `<div class="graph-loading-msg" style="text-align:center;padding:24px;color:var(--text-dimmed)">Checking cached history\u2026</div>`;
    content.appendChild(graphSection);
    // ── Assemble and show ──
    modal.appendChild(header);
    modal.appendChild(content);
    backdrop.classList.add("visible");
    closeBtn.focus();
    // ── Wire alert inputs ──
    (0,_card_actionBuilder__WEBPACK_IMPORTED_MODULE_4__.wireAlertInputs)(alertSection, item.name, {
        buySelector: "#analytics-alert-buy",
        sellSelector: "#analytics-alert-sell",
        onSave: () => { modalFavBtn.textContent = "\u2605"; },
    });
    // ── Async: fetch history & render graph ──
    const cachedCount = (await cache.history.getHistoricalRecords(item.name, 90)).length;
    const loadingEl = graphSection.querySelector(".graph-loading-msg");
    if (cachedCount < 7 && loadingEl) {
        loadingEl.textContent = "Fetching price history\u2026";
    }
    let fetched;
    try {
        fetched = await (0,_graphModal__WEBPACK_IMPORTED_MODULE_8__.fetchItemHistoryFull)(item.name, range);
    }
    catch {
        (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_6__.showToast)("History unavailable \u2014 could not fetch price data.", "info");
        fetched = { prices: [], volumes: [] };
    }
    const hist = fetched.prices.length > 0
        ? [...fetched.prices, item.price]
        : (item.priceHistory.length >= 2 ? item.priceHistory : [item.price]);
    const histVols = fetched.volumes.length > 0
        ? [...fetched.volumes, 0] : [];
    if (fetched.prices.length > 0 && range <= 7) {
        item.priceHistory = [...fetched.prices, item.price];
        if (item.priceHistory.length >= 2 && item.priceHistory[0] > 0) {
            const pct = (item.price - item.priceHistory[0]) / item.priceHistory[0];
            item.priceTrend = pct < -0.05 ? "Downtrend" : pct > 0.05 ? "Uptrend" : "Stable";
        }
    }
    const trendStats = (0,_trendStats__WEBPACK_IMPORTED_MODULE_3__.computeGraphTrendStats)(hist, item.price);
    const insufficientData = hist.length < 7;
    graphSection.innerHTML =
        `<div class="analytics-range-row">` +
            `<label>Range: <select class="graph-range-inline" name="graph-range">` +
            [7, 30, 90].map((d) => `<option value="${d}"${d === range ? " selected" : ""}>History: ${d} days</option>`).join("") +
            `</select></label>` +
            `</div>` +
            `<div class="chart-slot"${insufficientData ? ' style="display:none"' : ''}></div>` +
            `<div class="graph-history-status${insufficientData ? ' visible' : ''}">` +
            `Insufficient history \u2022 ` +
            `<button class="refresh-history-btn">Refresh</button>` +
            `</div>` +
            `<div class="analytics-stats-grid">` +
            (0,_trendStats__WEBPACK_IMPORTED_MODULE_3__.buildGraphStatsHtml)(trendStats, range, "analytics-stat-card") +
            `</div>`;
    const inlineRange = graphSection.querySelector(".graph-range-inline");
    if (inlineRange) {
        inlineRange.addEventListener("change", () => {
            const newRange = parseInt(inlineRange.value, 10) || 7;
            refreshAnalyticsGraph(item, graphSection, newRange);
        });
    }
    bindAnalyticsRefreshBtn(graphSection, item);
    requestAnimationFrame(() => {
        const slot = graphSection.querySelector(".chart-slot");
        if (slot && !insufficientData) {
            (0,_chart_interactiveChart__WEBPACK_IMPORTED_MODULE_5__.createInteractiveChart)("analytics", slot, hist, histVols);
        }
    });
}
async function refreshAnalyticsGraph(item, graphSection, range) {
    (0,_chart_interactiveChart__WEBPACK_IMPORTED_MODULE_5__.destroyInteractiveChart)("analytics");
    let fetched;
    try {
        fetched = await (0,_graphModal__WEBPACK_IMPORTED_MODULE_8__.fetchItemHistoryFull)(item.name, range);
    }
    catch {
        (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_6__.showToast)("History unavailable \u2014 could not fetch price data.", "info");
        fetched = { prices: [], volumes: [] };
    }
    const hist = fetched.prices.length > 0 ? [...fetched.prices, item.price] : [item.price];
    const histVols = fetched.volumes.length > 0 ? [...fetched.volumes, 0] : [];
    const trendStats = (0,_trendStats__WEBPACK_IMPORTED_MODULE_3__.computeGraphTrendStats)(hist, item.price);
    const statsGrid = graphSection.querySelector(".analytics-stats-grid");
    if (statsGrid) {
        statsGrid.innerHTML = (0,_trendStats__WEBPACK_IMPORTED_MODULE_3__.buildGraphStatsHtml)(trendStats, range, "analytics-stat-card");
    }
    const statusEl = graphSection.querySelector(".graph-history-status");
    const chartSlot = graphSection.querySelector(".chart-slot");
    if (hist.length < 7) {
        statusEl?.classList.add("visible");
        if (chartSlot)
            chartSlot.style.display = "none";
    }
    else {
        statusEl?.classList.remove("visible");
        if (chartSlot)
            chartSlot.style.display = "";
    }
    requestAnimationFrame(() => {
        if (chartSlot && hist.length >= 2) {
            (0,_chart_interactiveChart__WEBPACK_IMPORTED_MODULE_5__.createInteractiveChart)("analytics", chartSlot, hist, histVols);
        }
    });
}
function bindAnalyticsRefreshBtn(graphSection, item) {
    const btn = graphSection.querySelector(".refresh-history-btn");
    if (!btn)
        return;
    btn.addEventListener("click", async () => {
        btn.disabled = true;
        btn.textContent = "Fetching\u2026";
        try {
            await (0,_graphModal__WEBPACK_IMPORTED_MODULE_8__.ensureItemHistory)(item.name, 90);
            const range = parseInt((graphSection.querySelector(".graph-range-inline")?.value) || "7", 10);
            await refreshAnalyticsGraph(item, graphSection, range);
        }
        catch {
            (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_6__.showToast)("Failed to load history", "info");
            btn.textContent = "Refresh";
            btn.disabled = false;
        }
    });
}


/***/ },

/***/ "./ui/modals/editCompletedFlipModal.ts"
/*!*********************************************!*\
  !*** ./ui/modals/editCompletedFlipModal.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setRenderCompletedFlipsHook: () => (/* binding */ setRenderCompletedFlipsHook),
/* harmony export */   showEditCompletedFlipModal: () => (/* binding */ showEditCompletedFlipModal)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/* harmony import */ var _modalBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalBase */ "./ui/modals/modalBase.ts");
/**
 * @module ui/modals/editCompletedFlipModal
 * Edit Completed Flip modal — modify buy price, quantity, or sell price of a completed flip.
 */


const ensureEditCompletedFlipModal = (0,_modalBase__WEBPACK_IMPORTED_MODULE_1__.singletonModal)({
    backdropClass: "flip-detail-backdrop",
    modalClass: "flip-detail-modal flip-edit-modal",
    ariaLabel: "Edit completed flip",
});
/** Forward ref to renderCompletedFlips – wired in initUI. */
let _renderCompletedFlips = () => { };
/** Set the renderCompletedFlips hook (called from initUI). */
function setRenderCompletedFlipsHook(fn) {
    _renderCompletedFlips = fn;
}
/** Show the edit completed flip modal. */
function showEditCompletedFlipModal(flip) {
    const portfolio = (0,_state__WEBPACK_IMPORTED_MODULE_0__.getPortfolio)();
    const { backdrop, content } = ensureEditCompletedFlipModal();
    const modal = content;
    modal.innerHTML = "";
    const header = (0,_modalBase__WEBPACK_IMPORTED_MODULE_1__.buildModalHeader)(`Edit: ${flip.itemName}`, () => backdrop.classList.remove("visible"));
    const form = document.createElement("form");
    form.className = "flip-edit-form";
    form.addEventListener("submit", (e) => e.preventDefault());
    const sellLabel = flip.alched ? "High Alch Value" : "Actual Sell Price";
    const fields = [
        { label: "Buy Price", id: "cedit-buy-price", value: flip.buyPrice },
        { label: "Quantity", id: "cedit-quantity", value: flip.quantity, step: "1" },
        { label: sellLabel, id: "cedit-sell-price", value: flip.actualSellPrice },
    ];
    (0,_modalBase__WEBPACK_IMPORTED_MODULE_1__.buildFormFields)(form, fields);
    const btnRow = document.createElement("div");
    btnRow.className = "flip-edit-actions";
    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.className = "flip-edit-save";
    saveBtn.textContent = "Save Changes";
    saveBtn.addEventListener("click", () => {
        const buyPrice = Number(modal.querySelector("#cedit-buy-price").value);
        const quantity = Number(modal.querySelector("#cedit-quantity").value);
        const actualSellPrice = Number(modal.querySelector("#cedit-sell-price").value);
        if (!buyPrice || buyPrice <= 0 || !quantity || quantity <= 0 || !actualSellPrice || actualSellPrice <= 0)
            return;
        portfolio.updateCompletedFlip(flip.id, { buyPrice, quantity, actualSellPrice });
        backdrop.classList.remove("visible");
        _renderCompletedFlips();
    });
    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.className = "flip-edit-cancel";
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", () => backdrop.classList.remove("visible"));
    btnRow.appendChild(saveBtn);
    btnRow.appendChild(cancelBtn);
    modal.appendChild(header);
    modal.appendChild(form);
    modal.appendChild(btnRow);
    backdrop.classList.add("visible");
}


/***/ },

/***/ "./ui/modals/editFlipModal.ts"
/*!************************************!*\
  !*** ./ui/modals/editFlipModal.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setRenderFlipsHook: () => (/* binding */ setRenderFlipsHook),
/* harmony export */   showEditFlipModal: () => (/* binding */ showEditFlipModal)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/* harmony import */ var _modalBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalBase */ "./ui/modals/modalBase.ts");
/**
 * @module ui/modals/editFlipModal
 * Edit Flip modal — modify buy price, quantity, or target sell price of an active flip.
 */


const ensureEditFlipModal = (0,_modalBase__WEBPACK_IMPORTED_MODULE_1__.singletonModal)({
    backdropClass: "flip-detail-backdrop",
    modalClass: "flip-detail-modal flip-edit-modal",
    ariaLabel: "Edit flip",
});
/** Forward ref to renderFlips – wired in initUI. */
let _renderFlips = () => { };
/** Set the renderFlips hook (called from initUI). */
function setRenderFlipsHook(fn) {
    _renderFlips = fn;
}
/** Show the edit flip modal for an active flip. */
function showEditFlipModal(flip) {
    const portfolio = (0,_state__WEBPACK_IMPORTED_MODULE_0__.getPortfolio)();
    const { backdrop, content } = ensureEditFlipModal();
    const modal = content;
    modal.innerHTML = "";
    const header = (0,_modalBase__WEBPACK_IMPORTED_MODULE_1__.buildModalHeader)(`Edit: ${flip.itemName}`, () => backdrop.classList.remove("visible"));
    const form = document.createElement("form");
    form.className = "flip-edit-form";
    form.addEventListener("submit", (e) => e.preventDefault());
    const fields = [
        { label: "Buy Price", id: "edit-buy-price", value: flip.buyPrice },
        { label: "Quantity", id: "edit-quantity", value: flip.quantity, step: "1" },
        { label: "Target Sell Price", id: "edit-sell-price", value: flip.targetSellPrice },
    ];
    (0,_modalBase__WEBPACK_IMPORTED_MODULE_1__.buildFormFields)(form, fields);
    const btnRow = document.createElement("div");
    btnRow.className = "flip-edit-actions";
    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.className = "flip-edit-save";
    saveBtn.textContent = "Save Changes";
    saveBtn.addEventListener("click", () => {
        const buyPrice = Number(modal.querySelector("#edit-buy-price").value);
        const quantity = Number(modal.querySelector("#edit-quantity").value);
        const targetSellPrice = Number(modal.querySelector("#edit-sell-price").value);
        if (!buyPrice || buyPrice <= 0 || !quantity || quantity <= 0 || !targetSellPrice || targetSellPrice <= 0)
            return;
        portfolio.updateFlip(flip.id, { buyPrice, quantity, targetSellPrice });
        backdrop.classList.remove("visible");
        _renderFlips();
    });
    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.className = "flip-edit-cancel";
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", () => backdrop.classList.remove("visible"));
    btnRow.appendChild(saveBtn);
    btnRow.appendChild(cancelBtn);
    modal.appendChild(header);
    modal.appendChild(form);
    modal.appendChild(btnRow);
    backdrop.classList.add("visible");
}


/***/ },

/***/ "./ui/modals/flipDetailModal.ts"
/*!**************************************!*\
  !*** ./ui/modals/flipDetailModal.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showFlipDetailModal: () => (/* binding */ showFlipDetailModal)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _modalBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalBase */ "./ui/modals/modalBase.ts");
/**
 * @module ui/modals/flipDetailModal
 * Flip Detail modal — trade summary + side-by-side snapshot comparison table.
 */


const ensureFlipDetailModal = (0,_modalBase__WEBPACK_IMPORTED_MODULE_1__.singletonModal)({
    backdropClass: "flip-detail-backdrop",
    modalClass: "flip-detail-modal",
    ariaLabel: "Flip details",
});
/** Show the flip detail modal for a completed flip. */
function showFlipDetailModal(flip) {
    const { backdrop, content } = ensureFlipDetailModal();
    const modal = content;
    modal.innerHTML = "";
    const header = (0,_modalBase__WEBPACK_IMPORTED_MODULE_1__.buildModalHeader)(flip.itemName, () => backdrop.classList.remove("visible"), { ariaLabel: "Close flip details" });
    modal.appendChild(header);
    // ── Trade Summary ──
    const summarySection = document.createElement("div");
    summarySection.className = "flip-detail-section";
    const cost = flip.buyPrice * flip.quantity;
    const roi = cost > 0 ? (flip.realizedProfit / cost) * 100 : 0;
    const summaryTitle = document.createElement("div");
    summaryTitle.className = "flip-detail-section-title";
    summaryTitle.textContent = "Trade Summary";
    summarySection.appendChild(summaryTitle);
    const grid = document.createElement("div");
    grid.className = "flip-detail-grid";
    const rows = [
        ["Buy Price", `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(flip.buyPrice)} gp`],
        [flip.alched ? "Alch Value" : "Sell Price", `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(flip.actualSellPrice)} gp`],
        ["Quantity", flip.quantity.toLocaleString("en-US")],
        ["Total Cost", `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(cost)} gp`],
        ["Net Profit", `${flip.realizedProfit >= 0 ? "\u25B2" : "\u25BC"} ${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(flip.realizedProfit)} gp`],
        ["ROI", `${roi >= 0 ? "+" : ""}${roi.toFixed(1)}%`],
        ["Exit Method", flip.alched ? "\uD83D\uDD25 High Alchemy (no GE tax)" : "GE Sale (2% tax)"],
        ["Bought", new Date(flip.timestamp).toLocaleString("en-GB", { day: "numeric", month: "short", year: "2-digit", hour: "2-digit", minute: "2-digit" })],
        [flip.alched ? "Alched" : "Sold", new Date(flip.completedAt).toLocaleString("en-GB", { day: "numeric", month: "short", year: "2-digit", hour: "2-digit", minute: "2-digit" })],
    ];
    for (const [label, value] of rows) {
        const lbl = document.createElement("span");
        lbl.className = "flip-detail-label";
        lbl.textContent = label;
        const val = document.createElement("span");
        val.className = "flip-detail-value";
        if (label === "Net Profit")
            val.classList.add(flip.realizedProfit >= 0 ? "win" : "loss");
        if (label === "ROI")
            val.classList.add(roi >= 0 ? "win" : "loss");
        val.textContent = value;
        grid.appendChild(lbl);
        grid.appendChild(val);
    }
    summarySection.appendChild(grid);
    modal.appendChild(summarySection);
    // ── Snapshot Comparison ──
    const buySnap = flip.buySnapshot;
    const sellSnap = flip.sellSnapshot;
    if (buySnap || sellSnap) {
        const compSection = document.createElement("div");
        compSection.className = "flip-detail-section";
        const compTitle = document.createElement("div");
        compTitle.className = "flip-detail-section-title";
        compTitle.textContent = "Market Snapshot Comparison";
        compSection.appendChild(compTitle);
        const table = document.createElement("table");
        table.className = "flip-snapshot-table";
        const thead = document.createElement("thead");
        const hRow = document.createElement("tr");
        for (const h of ["Metric", "At Buy", "At Sell", "Change"]) {
            const th = document.createElement("th");
            th.textContent = h;
            hRow.appendChild(th);
        }
        thead.appendChild(hRow);
        table.appendChild(thead);
        const tbody = document.createElement("tbody");
        const na = "N/A";
        const fmtGp = (v) => v != null ? `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(v)} gp` : na;
        const fmtVol = (v) => v != null ? v.toLocaleString("en-US") : na;
        const fmtPct = (v) => v != null ? `${(v * 100).toFixed(1)}%` : na;
        const fmtStr = (v) => v ?? na;
        const snapRows = [];
        // Guide Price
        {
            const b = buySnap?.price;
            const s = sellSnap?.price;
            let change = na;
            let cls = "";
            if (b != null && s != null) {
                const diff = s - b;
                const pct = b > 0 ? (diff / b) * 100 : 0;
                change = `${diff >= 0 ? "+" : ""}${pct.toFixed(1)}%`;
                cls = diff >= 0 ? "win" : "loss";
            }
            snapRows.push({ label: "Guide Price", buy: fmtGp(b), sell: fmtGp(s), change, changeClass: cls });
        }
        // Volume
        {
            const b = buySnap?.volume;
            const s = sellSnap?.volume;
            let change = na;
            let cls = "";
            if (b != null && s != null) {
                const diff = s - b;
                const pct = b > 0 ? (diff / b) * 100 : 0;
                change = `${diff >= 0 ? "+" : ""}${pct.toFixed(1)}%`;
                cls = diff >= 0 ? "win" : "loss";
            }
            snapRows.push({ label: "Volume", buy: fmtVol(b), sell: fmtVol(s), change, changeClass: cls });
        }
        // Trade Velocity
        snapRows.push({ label: "Trade Velocity", buy: fmtStr(buySnap?.tradeVelocity), sell: fmtStr(sellSnap?.tradeVelocity), change: buySnap?.tradeVelocity && sellSnap?.tradeVelocity ? (buySnap.tradeVelocity === sellSnap.tradeVelocity ? "\u2014" : "Changed") : na });
        // Price Trend
        snapRows.push({ label: "Price Trend", buy: fmtStr(buySnap?.priceTrend), sell: fmtStr(sellSnap?.priceTrend), change: buySnap?.priceTrend && sellSnap?.priceTrend ? (buySnap.priceTrend === sellSnap.priceTrend ? "\u2014" : "Changed") : na });
        // EMA 30d
        {
            const b = buySnap?.ema30d;
            const s = sellSnap?.ema30d;
            let change = na;
            let cls = "";
            if (b != null && s != null) {
                const diff = s - b;
                const pct = b > 0 ? (diff / b) * 100 : 0;
                change = `${diff >= 0 ? "+" : ""}${pct.toFixed(1)}%`;
                cls = diff >= 0 ? "win" : "loss";
            }
            snapRows.push({ label: "EMA 30d", buy: fmtGp(b), sell: fmtGp(s), change, changeClass: cls });
        }
        // Volatility
        snapRows.push({ label: "Volatility", buy: fmtPct(buySnap?.volatility), sell: fmtPct(sellSnap?.volatility), change: buySnap?.volatility != null && sellSnap?.volatility != null ? `${(sellSnap.volatility - buySnap.volatility) >= 0 ? "+" : ""}${((sellSnap.volatility - buySnap.volatility) * 100).toFixed(1)}pp` : na });
        // Est. Flip Profit
        {
            const b = buySnap?.estFlipProfit;
            const s = sellSnap?.estFlipProfit;
            let change = na;
            let cls = "";
            if (b != null && s != null) {
                const diff = s - b;
                const pct = b > 0 ? (diff / b) * 100 : 0;
                change = `${diff >= 0 ? "+" : ""}${pct.toFixed(1)}%`;
                cls = diff >= 0 ? "win" : "loss";
            }
            snapRows.push({ label: "Est. Flip Profit", buy: fmtGp(b), sell: fmtGp(s), change, changeClass: cls });
        }
        // Return on Time
        {
            const b = buySnap?.returnOnTime;
            const s = sellSnap?.returnOnTime;
            let change = na;
            let cls = "";
            if (b != null && s != null) {
                const diff = s - b;
                const pct = b > 0 ? (diff / b) * 100 : 0;
                change = `${diff >= 0 ? "+" : ""}${pct.toFixed(1)}%`;
                cls = diff >= 0 ? "win" : "loss";
            }
            snapRows.push({ label: "Return on Time", buy: fmtGp(b), sell: fmtGp(s), change, changeClass: cls });
        }
        for (const r of snapRows) {
            const tr = document.createElement("tr");
            const tdLabel = document.createElement("td");
            tdLabel.textContent = r.label;
            tdLabel.className = "snap-label";
            const tdBuy = document.createElement("td");
            tdBuy.textContent = r.buy;
            const tdSell = document.createElement("td");
            tdSell.textContent = r.sell;
            const tdChange = document.createElement("td");
            tdChange.textContent = r.change;
            if (r.changeClass)
                tdChange.classList.add(r.changeClass);
            tr.appendChild(tdLabel);
            tr.appendChild(tdBuy);
            tr.appendChild(tdSell);
            tr.appendChild(tdChange);
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        compSection.appendChild(table);
        modal.appendChild(compSection);
    }
    else {
        const noSnap = document.createElement("div");
        noSnap.className = "flip-detail-section flip-detail-no-snapshot";
        noSnap.textContent = "No market snapshots available for this flip (added before snapshot tracking was enabled).";
        modal.appendChild(noSnap);
    }
    backdrop.classList.add("visible");
    const closeBtn = header.querySelector("button");
    closeBtn?.focus();
}


/***/ },

/***/ "./ui/modals/graphModal.ts"
/*!*********************************!*\
  !*** ./ui/modals/graphModal.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ensureItemHistory: () => (/* binding */ ensureItemHistory),
/* harmony export */   fetchItemHistory: () => (/* binding */ fetchItemHistory),
/* harmony export */   fetchItemHistoryFull: () => (/* binding */ fetchItemHistoryFull),
/* harmony export */   hideGraphModal: () => (/* binding */ hideGraphModal),
/* harmony export */   showGraphModal: () => (/* binding */ showGraphModal)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _trendStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trendStats */ "./ui/trendStats.ts");
/* harmony import */ var _chart_interactiveChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart/interactiveChart */ "./ui/chart/interactiveChart.ts");
/* harmony import */ var _notifications_toasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notifications/toasts */ "./ui/notifications/toasts.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/* harmony import */ var _modalBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modalBase */ "./ui/modals/modalBase.ts");
/**
 * @module ui/modals/graphModal
 * Graph modal — interactive price chart with range selector, history helpers.
 */






const ensureGraphModal = (0,_modalBase__WEBPACK_IMPORTED_MODULE_5__.singletonModal)({
    backdropClass: "graph-modal-backdrop",
    modalClass: "graph-modal",
    ariaLabel: "Price chart",
    onClose: () => hideGraphModal(),
    shouldPreventClose: () => {
        for (const chart of (0,_chart_interactiveChart__WEBPACK_IMPORTED_MODULE_2__.getActiveCharts)().values()) {
            if (chart.wasDragging())
                return true;
        }
        return false;
    },
});
/**
 * Ensure at least `days` days of price history exist in cache for the given item.
 * Falls back to API if cache is stale or sparse.
 */
async function ensureItemHistory(itemName, days = 90) {
    const cache = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getCache)();
    const cached = await cache.history.getHistoricalRecords(itemName, days);
    const RECENCY_MS = 7 * 24 * 60 * 60 * 1000;
    const newest = cached.length > 0
        ? new Date(cached[cached.length - 1].timestamp).getTime()
        : 0;
    const isRecent = (Date.now() - newest) < RECENCY_MS;
    if (cached.length >= 7 && isRecent) {
        return cached.map((r) => r.price);
    }
    try {
        const api = new _services__WEBPACK_IMPORTED_MODULE_0__.WeirdGloopService();
        const historyMap = await api.fetchHistoricalPrices([itemName], days);
        if (historyMap.size > 0) {
            await cache.history.bulkInsertHistory(historyMap);
        }
        const fresh = await cache.history.getHistoricalRecords(itemName, days);
        return fresh.map((r) => r.price);
    }
    catch (err) {
        console.warn(`[ensureItemHistory] Failed for "${itemName}":`, err);
        return cached.map((r) => r.price);
    }
}
/** Fetch price-only history for an item, trimmed to the requested range. */
async function fetchItemHistory(name, range = 7) {
    const allPrices = await ensureItemHistory(name, 90);
    if (allPrices.length === 0)
        return [];
    if (range >= 90 || allPrices.length <= range)
        return allPrices;
    return allPrices.slice(-range);
}
/** Fetch price + volume history for an item, trimmed to the requested range. */
async function fetchItemHistoryFull(name, range = 7) {
    const cache = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getCache)();
    await ensureItemHistory(name, 90);
    const records = await cache.history.getHistoricalRecords(name, 90);
    if (records.length === 0)
        return { prices: [], volumes: [] };
    const sliced = (range < 90 && records.length > range)
        ? records.slice(-range) : records;
    return {
        prices: sliced.map(r => r.price),
        volumes: sliced.map(r => r.volume ?? 0),
    };
}
async function refreshItemGraph(item, range) {
    const { content } = ensureGraphModal();
    const mBody = content.querySelector(".graph-modal-body");
    (0,_chart_interactiveChart__WEBPACK_IMPORTED_MODULE_2__.destroyInteractiveChart)("graph-modal");
    let fetched;
    try {
        fetched = await fetchItemHistoryFull(item.name, range);
    }
    catch {
        (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_3__.showToast)("History unavailable \u2014 could not fetch price data.", "info");
        fetched = { prices: [], volumes: [] };
    }
    const hist = fetched.prices.length > 0 ? [...fetched.prices, item.price] : [item.price];
    const histVols = fetched.volumes.length > 0 ? [...fetched.volumes, 0] : [];
    const trendStats = (0,_trendStats__WEBPACK_IMPORTED_MODULE_1__.computeGraphTrendStats)(hist, item.price);
    const statsEl = mBody.querySelector(".graph-stats");
    if (statsEl) {
        statsEl.innerHTML = (0,_trendStats__WEBPACK_IMPORTED_MODULE_1__.buildGraphStatsHtml)(trendStats, range, "graph-stat-row");
    }
    const statusEl = mBody.querySelector(".graph-history-status");
    const chartSlot = mBody.querySelector(".chart-slot");
    if (hist.length < 7) {
        statusEl?.classList.add("visible");
        if (chartSlot)
            chartSlot.style.display = "none";
    }
    else {
        statusEl?.classList.remove("visible");
        if (chartSlot)
            chartSlot.style.display = "";
    }
    requestAnimationFrame(() => {
        if (chartSlot && hist.length >= 2) {
            (0,_chart_interactiveChart__WEBPACK_IMPORTED_MODULE_2__.createInteractiveChart)("graph-modal", chartSlot, hist, histVols, "180px");
        }
    });
}
/** Show the graph modal with an interactive price chart for the given item. */
async function showGraphModal(item) {
    const cache = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getCache)();
    const { backdrop, content } = ensureGraphModal();
    content.innerHTML = "";
    const range = 7;
    // ── Header ──
    const mHeader = document.createElement("div");
    mHeader.className = "graph-modal-header";
    const img = (0,_modalBase__WEBPACK_IMPORTED_MODULE_5__.buildSpriteImg)(item.itemId, item.name);
    const title = document.createElement("span");
    title.className = "graph-modal-title";
    title.textContent = `${item.name} \u2014 Price Chart`;
    const closeBtn = document.createElement("button");
    closeBtn.className = "item-modal-close";
    closeBtn.textContent = "\u2715";
    closeBtn.setAttribute("aria-label", "Close price chart");
    closeBtn.addEventListener("click", hideGraphModal);
    mHeader.appendChild(img);
    mHeader.appendChild(title);
    mHeader.appendChild(closeBtn);
    content.appendChild(mHeader);
    // ── Body ──
    const mBody = document.createElement("div");
    mBody.className = "graph-modal-body";
    mBody.innerHTML = `<div class="graph-loading-msg" style="text-align:center;padding:24px;color:var(--text-dimmed)">Checking cached history\u2026</div>`;
    content.appendChild(mBody);
    backdrop.classList.add("visible");
    const cachedCount = (await cache.history.getHistoricalRecords(item.name, 90)).length;
    if (cachedCount < 7) {
        const loadingEl = mBody.querySelector(".graph-loading-msg");
        if (loadingEl)
            loadingEl.textContent = "Fetching price history\u2026";
    }
    let fetched;
    try {
        fetched = await fetchItemHistoryFull(item.name, range);
    }
    catch {
        (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_3__.showToast)("History unavailable \u2014 could not fetch price data.", "info");
        fetched = { prices: [], volumes: [] };
    }
    const hist = fetched.prices.length > 0 ? [...fetched.prices, item.price] : (item.priceHistory.length >= 2 ? item.priceHistory : [item.price]);
    const histVols = fetched.volumes.length > 0 ? [...fetched.volumes, 0] : [];
    if (fetched.prices.length > 0 && range <= 7) {
        item.priceHistory = [...fetched.prices, item.price];
        if (item.priceHistory.length >= 2 && item.priceHistory[0] > 0) {
            const pct = (item.price - item.priceHistory[0]) / item.priceHistory[0];
            item.priceTrend = pct < -0.05 ? "Downtrend" : pct > 0.05 ? "Uptrend" : "Stable";
        }
    }
    const trendStats = (0,_trendStats__WEBPACK_IMPORTED_MODULE_1__.computeGraphTrendStats)(hist, item.price);
    const rangeOptions = [7, 30, 90].map((d) => `<option value="${d}"${d === range ? " selected" : ""}>History: ${d} days</option>`).join("");
    const insufficientData = hist.length < 7;
    mBody.innerHTML =
        `<div class="graph-modal-range-row">` +
            `<label>Range: <select class="graph-range-inline" name="graph-range">${rangeOptions}</select></label>` +
            `</div>` +
            `<div class="chart-slot"${insufficientData ? ' style="display:none"' : ''}></div>` +
            `<div class="graph-history-status${insufficientData ? ' visible' : ''}">` +
            `Insufficient history \u2022 ` +
            `<button class="refresh-history-btn">Refresh</button>` +
            `</div>` +
            `<div class="graph-stats">` +
            (0,_trendStats__WEBPACK_IMPORTED_MODULE_1__.buildGraphStatsHtml)(trendStats, range, "graph-stat-row") +
            `</div>`;
    const inlineRange = mBody.querySelector(".graph-range-inline");
    if (inlineRange) {
        inlineRange.addEventListener("change", () => {
            const newRange = parseInt(inlineRange.value, 10) || 7;
            refreshItemGraph(item, newRange);
        });
    }
    bindRefreshHistoryBtn(mBody, item);
    requestAnimationFrame(() => {
        const slot = mBody.querySelector(".chart-slot");
        if (slot && !insufficientData) {
            (0,_chart_interactiveChart__WEBPACK_IMPORTED_MODULE_2__.createInteractiveChart)("graph-modal", slot, hist, histVols, "180px");
        }
    });
}
function bindRefreshHistoryBtn(container, item) {
    const btn = container.querySelector(".refresh-history-btn");
    if (!btn)
        return;
    btn.addEventListener("click", async () => {
        btn.disabled = true;
        btn.textContent = "Fetching\u2026";
        try {
            await ensureItemHistory(item.name, 90);
            const range = parseInt((container.querySelector(".graph-range-inline")?.value) || "7", 10);
            await refreshItemGraph(item, range);
        }
        catch {
            (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_3__.showToast)("Failed to load history", "info");
            btn.textContent = "Refresh";
            btn.disabled = false;
        }
    });
}
/** Hide the graph modal and destroy its chart instance. */
function hideGraphModal() {
    ensureGraphModal().backdrop.classList.remove("visible");
    (0,_chart_interactiveChart__WEBPACK_IMPORTED_MODULE_2__.destroyInteractiveChart)("graph-modal");
}


/***/ },

/***/ "./ui/modals/guideModal.ts"
/*!*********************************!*\
  !*** ./ui/modals/guideModal.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showGuideModal: () => (/* binding */ showGuideModal)
/* harmony export */ });
/* harmony import */ var _modalBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalBase */ "./ui/modals/modalBase.ts");
/**
 * @module ui/modals/guideModal
 * Flipping Guide modal — step-by-step GE flipping tutorial for new players.
 */

const ensureGuideModal = (0,_modalBase__WEBPACK_IMPORTED_MODULE_0__.singletonModal)({
    backdropClass: "about-modal-backdrop",
    modalClass: "about-modal guide-modal",
    ariaLabel: "Flipping guide",
});
/** Show the Flipping Guide modal. */
function showGuideModal() {
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
    closeBtn?.focus();
}


/***/ },

/***/ "./ui/modals/modalBase.ts"
/*!********************************!*\
  !*** ./ui/modals/modalBase.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildAlertInputsHtml: () => (/* binding */ buildAlertInputsHtml),
/* harmony export */   buildFormFields: () => (/* binding */ buildFormFields),
/* harmony export */   buildModalHeader: () => (/* binding */ buildModalHeader),
/* harmony export */   buildSpriteImg: () => (/* binding */ buildSpriteImg),
/* harmony export */   createModalShell: () => (/* binding */ createModalShell),
/* harmony export */   singletonModal: () => (/* binding */ singletonModal)
/* harmony export */ });
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatters */ "./ui/formatters.ts");
/**
 * @module ui/modals/modalBase
 * Shared modal scaffold — backdrop, inner container, ARIA, close-on-click, Escape key.
 */

/**
 * Create a standard modal backdrop with an inner container, ARIA attributes,
 * close-on-backdrop-click, and Escape key dismissal.
 */
function createModalShell(opts) {
    const backdrop = document.createElement("div");
    backdrop.className = opts.backdropClass;
    /** Element that had focus before the modal opened; restored on close. */
    let previousFocus = null;
    const restoreFocus = () => {
        if (previousFocus && typeof previousFocus.focus === "function") {
            previousFocus.focus();
            previousFocus = null;
        }
    };
    const baseHide = opts.onClose ?? (() => backdrop.classList.remove("visible"));
    const hide = () => { baseHide(); restoreFocus(); };
    // Capture focus whenever the modal becomes visible.
    const observer = new MutationObserver(() => {
        if (backdrop.classList.contains("visible")) {
            previousFocus = document.activeElement;
        }
    });
    observer.observe(backdrop, { attributes: true, attributeFilter: ["class"] });
    backdrop.addEventListener("click", (e) => {
        if (e.target !== backdrop)
            return;
        if (opts.shouldPreventClose?.())
            return;
        hide();
    });
    const content = document.createElement("div");
    content.className = opts.modalClass;
    content.setAttribute("role", "dialog");
    content.setAttribute("aria-modal", "true");
    content.setAttribute("aria-label", opts.ariaLabel);
    backdrop.appendChild(content);
    document.body.appendChild(backdrop);
    document.addEventListener("keydown", (e) => {
        if (!backdrop.classList.contains("visible"))
            return;
        if (e.key === "Escape") {
            hide();
            return;
        }
        if (opts.trapFocus && e.key === "Tab") {
            const focusable = content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable.length === 0)
                return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            }
            else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
    });
    return { backdrop, content };
}
/**
 * Create a lazily-initialised singleton modal.
 * Returns a function that always returns the same {@link ModalShell}
 * (created on first call, cached thereafter).
 */
function singletonModal(opts) {
    let shell = null;
    return () => {
        if (!shell)
            shell = createModalShell(opts);
        return shell;
    };
}
/**
 * Build a standard modal header with title text and a close button.
 *
 * @param titleText - Text displayed in the header.
 * @param onClose   - Callback fired when the close button is clicked.
 * @param opts      - Optional overrides for CSS class names and ARIA label.
 */
function buildModalHeader(titleText, onClose, opts) {
    const hc = opts?.headerClass ?? "flip-detail-header";
    const tc = opts?.titleClass ?? "flip-detail-title";
    const cc = opts?.closeClass ?? "flip-detail-close";
    const header = document.createElement("div");
    header.className = hc;
    const title = document.createElement("span");
    title.className = tc;
    title.textContent = titleText;
    const closeBtn = document.createElement("button");
    closeBtn.className = cc;
    closeBtn.type = "button";
    closeBtn.textContent = "\u2715";
    closeBtn.title = "Close (Esc)";
    if (opts?.ariaLabel)
        closeBtn.setAttribute("aria-label", opts.ariaLabel);
    closeBtn.addEventListener("click", onClose);
    header.appendChild(title);
    header.appendChild(closeBtn);
    return header;
}
/**
 * Build labelled number-input fields and append them to a form.
 *
 * @param form   - The `<form>` element to append fields to.
 * @param fields - Array of field descriptors (`label`, `id`, `value`, optional `step`).
 */
function buildFormFields(form, fields) {
    for (const f of fields) {
        const group = document.createElement("div");
        group.className = "flip-edit-field";
        const lbl = document.createElement("label");
        lbl.setAttribute("for", f.id);
        lbl.textContent = f.label;
        const input = document.createElement("input");
        input.type = "number";
        input.id = f.id;
        input.min = "1";
        if (f.step)
            input.step = f.step;
        input.value = String(f.value);
        group.appendChild(lbl);
        group.appendChild(input);
        form.appendChild(group);
    }
}
/**
 * Create a sprite `<img>` element for a modal/card header.
 *
 * @param itemId - RS3 item ID for the sprite URL.
 * @param name   - Alt text and error-fallback label.
 * @param size   - `[width, height]` in px. Defaults to `[36, 32]`.
 */
function buildSpriteImg(itemId, name, size = [36, 32]) {
    const img = document.createElement("img");
    img.className = "item-sprite";
    img.src = (0,_formatters__WEBPACK_IMPORTED_MODULE_0__.spriteUrl)(itemId);
    img.alt = name;
    img.width = size[0];
    img.height = size[1];
    img.loading = "lazy";
    img.onerror = () => { img.style.display = "none"; };
    return img;
}
/**
 * Build the HTML for a "Price Alerts" form section used in modals.
 *
 * @param idPrefix - Prefix for the input element IDs (e.g. `"modal"` → `#modal-alert-buy`).
 */
function buildAlertInputsHtml(idPrefix) {
    return (`<div class="alert-inputs">` +
        `<h4 class="alert-inputs-title">\uD83D\uDD14 Price Alerts</h4>` +
        `<div class="alert-row">` +
        `<label for="${idPrefix}-alert-buy">Alert if drops below</label>` +
        `<input id="${idPrefix}-alert-buy" type="number" min="0" placeholder="Buy target (gp)" />` +
        `</div>` +
        `<div class="alert-row">` +
        `<label for="${idPrefix}-alert-sell">Alert if rises above</label>` +
        `<input id="${idPrefix}-alert-sell" type="number" min="0" placeholder="Sell target (gp)" />` +
        `</div>` +
        `</div>`);
}


/***/ },

/***/ "./ui/modals/modalHooks.ts"
/*!*********************************!*\
  !*** ./ui/modals/modalHooks.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderItemList: () => (/* binding */ renderItemList),
/* harmony export */   setRenderMarketItemsHook: () => (/* binding */ setRenderMarketItemsHook)
/* harmony export */ });
/**
 * @module ui/modals/modalHooks
 * Forward-declaration hooks that break circular dependencies between
 * modal dialogs and the market panel.
 */
/** Forward ref to renderMarketItems — wired in initUI. */
let _renderMarketItems = () => { };
/** Register the market-panel render callback used by modals. */
function setRenderMarketItemsHook(fn) {
    _renderMarketItems = fn;
}
/** @deprecated Use the market panel directly. Thin wrapper kept for backward compat. */
function renderItemList(items) {
    _renderMarketItems(items);
}


/***/ },

/***/ "./ui/modals/setupGuideModal.ts"
/*!**************************************!*\
  !*** ./ui/modals/setupGuideModal.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showSetupGuide: () => (/* binding */ showSetupGuide)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings */ "./ui/settings.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _modalBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalBase */ "./ui/modals/modalBase.ts");
/**
 * @module ui/modals/setupGuideModal
 * Setup Guide modal — per-provider API key instructions + comparison table.
 */




const ensureSetupGuideModal = (0,_modalBase__WEBPACK_IMPORTED_MODULE_3__.singletonModal)({
    backdropClass: "setup-guide-backdrop",
    modalClass: "setup-guide-modal",
    ariaLabel: "API key setup guide",
});
const SETUP_GUIDES = {
    groq: {
        steps: [
            'Go to <a href="https://console.groq.com" target="_blank" rel="noopener">console.groq.com</a> and click <strong>Sign Up</strong> (Google / GitHub / email).',
            "No credit card is required \u2014 the free tier is generous enough for this plugin.",
            'Once logged in, navigate to <strong>API Keys</strong> in the left sidebar (or visit <a href="https://console.groq.com/keys" target="_blank" rel="noopener">console.groq.com/keys</a>).',
            'Click <strong>Create API Key</strong>, give it a name (e.g. "GE Analyzer"), and copy the key.',
            "Paste the key into the <em>API Key</em> field above and click <strong>Save</strong>.",
            "Select a model (the default <strong>Llama 3.1 8B Instant</strong> works great) and you\u2019re ready to go!",
        ],
        note: "Groq\u2019s free tier allows thousands of requests per day with fast inference \u2014 perfect for this plugin. Rate limits reset daily.",
    },
    openai: {
        steps: [
            'Go to <a href="https://platform.openai.com/signup" target="_blank" rel="noopener">platform.openai.com</a> and create an account.',
            "Add a payment method under <strong>Settings \u2192 Billing</strong>.",
            'Navigate to <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener">API Keys</a> and click <strong>Create new secret key</strong>.',
            "Copy the key, paste it above, and click <strong>Save</strong>.",
        ],
        note: "OpenAI charges per token. GPT-4o Mini is very affordable for this use case.",
    },
    openrouter: {
        steps: [
            'Go to <a href="https://openrouter.ai" target="_blank" rel="noopener">openrouter.ai</a> and sign up.',
            "Some models (e.g. Llama 3 8B) are free to use \u2014 no payment needed.",
            'Navigate to <a href="https://openrouter.ai/keys" target="_blank" rel="noopener">Keys</a> and create a new API key.',
            "Paste the key above and click <strong>Save</strong>.",
        ],
        note: "OpenRouter aggregates many providers. Look for the \u26A1 icon on their site to find free models.",
    },
    together: {
        steps: [
            'Go to <a href="https://api.together.xyz" target="_blank" rel="noopener">api.together.xyz</a> and create an account.',
            "New accounts receive <strong>$5 in free credit</strong> \u2014 no card required.",
            'Navigate to <a href="https://api.together.xyz/settings/api-keys" target="_blank" rel="noopener">Settings \u2192 API Keys</a> and create a key.',
            "Paste the key above and click <strong>Save</strong>.",
        ],
    },
    mistral: {
        steps: [
            'Go to <a href="https://console.mistral.ai" target="_blank" rel="noopener">console.mistral.ai</a> and create an account.',
            'Navigate to <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">API Keys</a> and generate a key.',
            "Paste the key above and click <strong>Save</strong>.",
        ],
        note: "Mistral offers competitive per-token pricing, especially for their smaller models.",
    },
};
/** Show the setup guide modal for the currently selected LLM provider. */
function showSetupGuide() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    const provider = (0,_settings__WEBPACK_IMPORTED_MODULE_1__.getProviderById)(els.providerSelect.value);
    const { backdrop, content } = ensureSetupGuideModal();
    const modal = content;
    const guide = SETUP_GUIDES[provider.id];
    const badge = (0,_settings__WEBPACK_IMPORTED_MODULE_1__.costTierBadge)(provider.costTier);
    let html = '<div class="setup-guide-header">';
    html += `<h3>Setup Guide: ${provider.label}</h3>`;
    html += '<button class="setup-guide-close" aria-label="Close">\u00D7</button>';
    html += "</div>";
    html += `<div class="setup-guide-tier tier-${provider.costTier}">`;
    html += `<span class="tier-badge">${badge}</span>`;
    html += `<span>${provider.costNote}</span>`;
    html += "</div>";
    if (guide) {
        html += '<ol class="setup-guide-steps">';
        for (const step of guide.steps) {
            html += `<li>${step}</li>`;
        }
        html += "</ol>";
        if (guide.note) {
            html += `<div class="setup-guide-note">\uD83D\uDCA1 ${guide.note}</div>`;
        }
    }
    else {
        html += "<p>Visit your provider\u2019s dashboard to create an API key, then paste it into the API Key field and click Save.</p>";
    }
    if (provider.signupUrl) {
        html += `<a class="setup-guide-link" href="${provider.signupUrl}" target="_blank" rel="noopener">\u2192 Open ${provider.label} API Keys page</a>`;
    }
    html += '<div class="setup-guide-comparison">';
    html += "<h4>Provider Comparison</h4>";
    html += '<table class="provider-comparison-table"><thead><tr>';
    html += "<th>Provider</th><th>Cost</th><th>Notes</th>";
    html += "</tr></thead><tbody>";
    for (const p of _services__WEBPACK_IMPORTED_MODULE_0__.LLM_PROVIDERS) {
        if (p.id === "custom")
            continue;
        const isActive = p.id === provider.id;
        const rowBadge = (0,_settings__WEBPACK_IMPORTED_MODULE_1__.costTierBadge)(p.costTier);
        html += `<tr class="${isActive ? "active-row" : ""}">`;
        html += `<td>${p.label}${p.id === "groq" ? " \u2B50" : ""}</td>`;
        html += `<td><span class="tier-badge-sm tier-${p.costTier}">${rowBadge}</span></td>`;
        html += `<td>${p.costNote}</td>`;
        html += "</tr>";
    }
    html += "</tbody></table>";
    html += "</div>";
    modal.innerHTML = html;
    const closeBtn = modal.querySelector(".setup-guide-close");
    closeBtn?.addEventListener("click", () => backdrop.classList.remove("visible"));
    backdrop.classList.add("visible");
}


/***/ },

/***/ "./ui/notifications/errorBanner.ts"
/*!*****************************************!*\
  !*** ./ui/notifications/errorBanner.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindErrorRetry: () => (/* binding */ bindErrorRetry),
/* harmony export */   hideError: () => (/* binding */ hideError),
/* harmony export */   setRefreshMarketPanelHook: () => (/* binding */ setRefreshMarketPanelHook),
/* harmony export */   showError: () => (/* binding */ showError)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/**
 * @module ui/errorBanner
 * Dismissible error banner + retry logic at the top of the market view.
 */



// ─── Forward declaration for refreshMarketPanel ─────────────────────────────
let _refreshMarketPanel = null;
/** Register the market-panel refresh callback used by the retry button. */
function setRefreshMarketPanelHook(fn) {
    _refreshMarketPanel = fn;
}
// ─── Error Banner ───────────────────────────────────────────────────────────
/** Show the sticky error banner with the given message. */
function showError(message) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    els.errorBannerMsg.textContent = message;
    els.errorBanner.classList.remove("hidden");
    els.marketLoading.style.display = "none";
}
/** Hide the error banner and clear its message. */
function hideError() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    els.errorBanner.classList.add("hidden");
    els.errorBannerMsg.textContent = "";
}
// ─── Error Retry ────────────────────────────────────────────────────────────
/** Bind the retry button inside the error banner. */
function bindErrorRetry() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    els.errorRetryBtn.addEventListener("click", async () => {
        hideError();
        els.marketLoading.style.display = "";
        els.marketLoading.textContent = "Retrying\u2026";
        try {
            let cache = (0,_state__WEBPACK_IMPORTED_MODULE_2__.getCache)();
            await cache.clear();
            await (0,_services__WEBPACK_IMPORTED_MODULE_0__.initDataPipeline)();
            cache = new _services__WEBPACK_IMPORTED_MODULE_0__.CacheService();
            await cache.open();
            (0,_state__WEBPACK_IMPORTED_MODULE_2__.setCache)(cache);
            (0,_state__WEBPACK_IMPORTED_MODULE_2__.setAnalyzer)(new _services__WEBPACK_IMPORTED_MODULE_0__.MarketAnalyzerService(cache));
            await _refreshMarketPanel?.();
        }
        catch (err) {
            console.error("[UIService] Retry failed:", err);
            const msg = err instanceof Error ? err.message : "Retry failed \u2014 see console.";
            showError(msg);
        }
    });
}


/***/ },

/***/ "./ui/notifications/infoBanner.ts"
/*!****************************************!*\
  !*** ./ui/notifications/infoBanner.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maybeShowInfoBanner: () => (/* binding */ maybeShowInfoBanner),
/* harmony export */   showInfoBanner: () => (/* binding */ showInfoBanner)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./ui/constants.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formatters */ "./ui/formatters.ts");
/* harmony import */ var _errorBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errorBanner */ "./ui/notifications/errorBanner.ts");
/* harmony import */ var _market_marketPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../market/marketPanel */ "./ui/market/marketPanel.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/**
 * @module ui/infoBanner
 * Dismissible informational banner prompting the user to run a deep scan,
 * plus the startup coverage check that decides whether to show it.
 */







/**
 * Show a dismissible info banner at the top of the market view.
 *
 * @param message - The informational text to display.
 * @param onScan  - Callback invoked when the user clicks "Deep Scan".
 */
function showInfoBanner(message, onScan) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    // Prevent duplicate banners.
    if (document.querySelector(".info-banner"))
        return;
    const banner = document.createElement("div");
    banner.className = "info-banner";
    banner.innerHTML =
        `<span class="info-banner-icon">\uD83D\uDCCA</span>` +
            `<div class="info-banner-content">` +
            `<p class="info-banner-text">${message}</p>` +
            `<div class="info-banner-actions">` +
            `<button class="info-banner-scan-btn" type="button">\u23F3 Deep Scan (~12+ min)</button>` +
            `<button class="info-banner-dismiss-btn" type="button">\u2715 Dismiss</button>` +
            `</div>` +
            `</div>`;
    const scanBtn = banner.querySelector(".info-banner-scan-btn");
    const dismissBtn = banner.querySelector(".info-banner-dismiss-btn");
    scanBtn.addEventListener("click", () => {
        banner.remove();
        onScan();
    });
    dismissBtn.addEventListener("click", () => {
        // Show a brief hint before removing the banner.
        const hint = document.createElement("div");
        hint.className = "info-banner-hint";
        hint.textContent = "You can run a deep scan later from Settings \u2192 Data (Advanced Mode).";
        banner.querySelector(".info-banner-actions")?.replaceWith(hint);
        setTimeout(() => {
            hint.classList.add("fade-out");
            hint.addEventListener("transitionend", () => banner.remove(), { once: true });
            setTimeout(() => banner.remove(), 600);
        }, 4000);
        localStorage.setItem("ger:info-banner-dismissed", new Date().toISOString());
    });
    // Insert at the start of the market view.
    els.marketView.prepend(banner);
}
/**
 * Check price-history coverage and show the info banner if the user
 * would benefit from a deep scan.
 *
 * Skips if the banner was previously dismissed or if history coverage is
 * already sufficient (>30% of items with ≥2 history rows).
 */
async function maybeShowInfoBanner(cache) {
    const dismissedAt = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__.LS_INFO_BANNER_DISMISSED);
    if (dismissedAt) {
        const DISMISS_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000;
        const age = Date.now() - new Date(dismissedAt).getTime();
        if (!Number.isNaN(age) && age < DISMISS_EXPIRY_MS)
            return;
        localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_2__.LS_INFO_BANNER_DISMISSED);
    }
    const records = await cache.getAll();
    if (records.length === 0)
        return;
    const recentHistory = await cache.history.getRecentHistory(30);
    const grouped = new Map();
    for (const h of recentHistory) {
        grouped.set(h.name, (grouped.get(h.name) ?? 0) + 1);
    }
    const withHistory = [...grouped.values()].filter((c) => c >= 2).length;
    if (withHistory >= records.length * 0.3)
        return;
    showInfoBanner("Trend analytics (price trends, volatility, predictions) require price history data. " +
        "You can load history for individual items via their analytics modal, or run a full " +
        "deep scan to populate all items at once. Note: a deep scan takes approximately " +
        "12\u201320 minutes depending on network conditions and API rate limits.", async () => {
        const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
        let geCatalogue = (0,_state__WEBPACK_IMPORTED_MODULE_6__.getGeCatalogue)();
        if (geCatalogue.length === 0) {
            try {
                geCatalogue = await (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchGECatalogue)();
                (0,_state__WEBPACK_IMPORTED_MODULE_6__.setGeCatalogue)(geCatalogue);
            }
            catch {
                (0,_errorBanner__WEBPACK_IMPORTED_MODULE_4__.showError)("Could not load item catalogue. Try again later.");
                return;
            }
        }
        if (geCatalogue.length === 0) {
            (0,_errorBanner__WEBPACK_IMPORTED_MODULE_4__.showError)("Item catalogue is empty \u2014 cannot scan.");
            return;
        }
        els.syncProgress.classList.remove("hidden");
        els.syncProgressFill.style.width = "0%";
        els.syncProgressText.textContent = "Starting deep scan\u2026";
        const scanStart = Date.now();
        try {
            await (0,_services__WEBPACK_IMPORTED_MODULE_0__.runFullMarketScan)(geCatalogue, (done, total) => {
                const pct = Math.round((done / total) * 100);
                els.syncProgressFill.style.width = pct + "%";
                const elapsed = Date.now() - scanStart;
                const elapsedStr = (0,_formatters__WEBPACK_IMPORTED_MODULE_3__.formatDuration)(elapsed);
                let etaStr = "";
                if (done > 0 && pct < 100) {
                    const rate = done / elapsed;
                    const remaining = (total - done) / rate;
                    etaStr = ` \u2014 ~${(0,_formatters__WEBPACK_IMPORTED_MODULE_3__.formatDuration)(remaining)} remaining`;
                }
                els.syncProgressText.textContent =
                    `Scanning ${done.toLocaleString("en-US")} / ${total.toLocaleString("en-US")}\u2026 (${pct}%) [${elapsedStr}${etaStr}] (deep history: ON)`;
            }, undefined, true);
            const freshCache = new _services__WEBPACK_IMPORTED_MODULE_0__.CacheService();
            await freshCache.open();
            (0,_state__WEBPACK_IMPORTED_MODULE_6__.setCache)(freshCache);
            (0,_state__WEBPACK_IMPORTED_MODULE_6__.setAnalyzer)(new _services__WEBPACK_IMPORTED_MODULE_0__.MarketAnalyzerService(freshCache));
            await (0,_market_marketPanel__WEBPACK_IMPORTED_MODULE_5__.refreshMarketPanel)();
            const totalElapsed = (0,_formatters__WEBPACK_IMPORTED_MODULE_3__.formatDuration)(Date.now() - scanStart);
            els.syncProgressFill.style.width = "100%";
            els.syncProgressText.textContent = `Deep scan complete \u2714 (${totalElapsed})`;
            setTimeout(() => els.syncProgress.classList.add("hidden"), 4000);
        }
        catch (err) {
            console.error("[InfoBanner] Deep scan failed:", err);
            els.syncProgressText.textContent = "Scan failed \u2014 see console.";
            setTimeout(() => els.syncProgress.classList.add("hidden"), 5000);
        }
    });
}


/***/ },

/***/ "./ui/notifications/notifBell.ts"
/*!***************************************!*\
  !*** ./ui/notifications/notifBell.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindNotifBell: () => (/* binding */ bindNotifBell),
/* harmony export */   pushNotification: () => (/* binding */ pushNotification)
/* harmony export */ });
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domRefs */ "./ui/domRefs.ts");
/**
 * @module ui/notifBell
 * Notification bell icon with badge counter and dropdown log panel.
 */

const notifLog = [];
let notifUnseenCount = 0;
let notifPanel = null;
// ─── Public API ─────────────────────────────────────────────────────────────
/** Append a notification entry and bump the unseen badge count. */
function pushNotification(message, type) {
    notifLog.push({ message, type, timestamp: Date.now() });
    notifUnseenCount++;
    updateNotifBadge();
}
/** Wire the bell button click and outside-click-to-close behaviour. */
function bindNotifBell() {
    (0,_domRefs__WEBPACK_IMPORTED_MODULE_0__.getEls)().notifBellBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleNotifPanel();
    });
    document.addEventListener("click", closeNotifPanelOnOutsideClick);
}
// ─── Internal helpers ───────────────────────────────────────────────────────
function updateNotifBadge() {
    const badge = (0,_domRefs__WEBPACK_IMPORTED_MODULE_0__.getEls)().notifBellBadge;
    if (notifUnseenCount > 0) {
        badge.textContent = notifUnseenCount > 99 ? "99+" : String(notifUnseenCount);
        badge.style.display = "";
    }
    else {
        badge.style.display = "none";
    }
}
function ensureNotifPanel() {
    if (notifPanel)
        return notifPanel;
    notifPanel = document.createElement("div");
    notifPanel.className = "notif-panel";
    notifPanel.style.display = "none";
    notifPanel.addEventListener("click", (e) => e.stopPropagation());
    (0,_domRefs__WEBPACK_IMPORTED_MODULE_0__.getEls)().notifBellBtn.appendChild(notifPanel);
    return notifPanel;
}
function renderNotifPanel() {
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
function toggleNotifPanel() {
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
function closeNotifPanelOnOutsideClick(e) {
    if (!notifPanel || notifPanel.style.display === "none")
        return;
    if ((0,_domRefs__WEBPACK_IMPORTED_MODULE_0__.getEls)().notifBellBtn.contains(e.target))
        return;
    if (notifPanel.contains(e.target))
        return;
    notifPanel.style.display = "none";
}


/***/ },

/***/ "./ui/notifications/priceAlerts.ts"
/*!*****************************************!*\
  !*** ./ui/notifications/priceAlerts.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkBuyLimitResets: () => (/* binding */ checkBuyLimitResets),
/* harmony export */   checkPriceAlerts: () => (/* binding */ checkPriceAlerts),
/* harmony export */   notifyUser: () => (/* binding */ notifyUser),
/* harmony export */   requestNotificationPermission: () => (/* binding */ requestNotificationPermission)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./ui/constants.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formatters */ "./ui/formatters.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/* harmony import */ var _favouritesData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../favouritesData */ "./ui/favouritesData.ts");
/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toasts */ "./ui/notifications/toasts.ts");
/* harmony import */ var _notifBell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifBell */ "./ui/notifications/notifBell.ts");
/**
 * @module ui/priceAlerts
 * Price alert engine, buy-limit reset checks, unified notification
 * dispatcher, and native Notification permission handling.
 */







// ─── Dedup sets (session-scoped) ────────────────────────────────────────────
const firedAlerts = new Set();
const firedLimitResets = new Set();
// ─── Notification Permission ────────────────────────────────────────────────
/** Request native `Notification` permission if still in the default state. */
function requestNotificationPermission() {
    if (typeof Notification !== "undefined" && Notification.permission === "default") {
        Notification.requestPermission().catch(() => { });
    }
}
// ─── Unified Dispatcher ─────────────────────────────────────────────────────
/** Combined toast + bell log + native Notification. Single point of dispatch. */
function notifyUser(title, message, type = "info", durationMs = 6000) {
    (0,_toasts__WEBPACK_IMPORTED_MODULE_5__.showToast)(message, type, durationMs);
    (0,_notifBell__WEBPACK_IMPORTED_MODULE_6__.pushNotification)(message, type);
    if (typeof Notification !== "undefined" && Notification.permission === "granted") {
        new Notification(title, { body: message, icon: (0,_formatters__WEBPACK_IMPORTED_MODULE_2__.spriteUrl)(0) });
    }
}
// ─── Price Alert Engine ─────────────────────────────────────────────────────
/** Check favourites against current prices and fire alerts for target hits. */
function checkPriceAlerts(items) {
    const favs = (0,_favouritesData__WEBPACK_IMPORTED_MODULE_4__.loadFavorites)();
    if (favs.length === 0)
        return;
    const priceMap = new Map();
    for (const it of items)
        priceMap.set(it.name, it.price);
    for (const fav of favs) {
        const currentPrice = priceMap.get(fav.name);
        if (currentPrice == null)
            continue;
        if (fav.targetBuy && currentPrice <= fav.targetBuy) {
            const key = `${fav.name}|buy`;
            if (!firedAlerts.has(key)) {
                firedAlerts.add(key);
                const msg = `\uD83D\uDCC9 ${fav.name} has dropped to ${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(currentPrice)} gp (target: \u2264${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(fav.targetBuy)} gp)`;
                notifyUser("GE Price Alert \u2014 Buy", msg, "buy");
            }
        }
        if (fav.targetSell && currentPrice >= fav.targetSell) {
            const key = `${fav.name}|sell`;
            if (!firedAlerts.has(key)) {
                firedAlerts.add(key);
                const msg = `\uD83D\uDCC8 ${fav.name} has risen to ${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(currentPrice)} gp (target: \u2265${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(fav.targetSell)} gp)`;
                notifyUser("GE Price Alert \u2014 Sell", msg, "sell");
            }
        }
    }
}
// ─── Buy-Limit Reset Checks ────────────────────────────────────────────────
/** Check active flips for expired 4-hour buy-limit windows and notify. */
function checkBuyLimitResets() {
    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_LIMIT_RESET_NOTIFS) === "false")
        return;
    const portfolio = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getPortfolio)();
    const flips = portfolio.getFlips();
    for (const flip of flips) {
        if (firedLimitResets.has(flip.id))
            continue;
        const elapsed = Date.now() - flip.timestamp;
        if (elapsed >= _constants__WEBPACK_IMPORTED_MODULE_1__.BUY_LIMIT_WINDOW_MS) {
            firedLimitResets.add(flip.id);
            const msg = `\u23F0 Buy limit for ${flip.itemName} has reset \u2014 you can buy another ${flip.quantity.toLocaleString("en-US")} units.`;
            notifyUser("GE Buy Limit Reset", msg, "info", 8000);
        }
    }
}


/***/ },

/***/ "./ui/notifications/toasts.ts"
/*!************************************!*\
  !*** ./ui/notifications/toasts.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showToast: () => (/* binding */ showToast)
/* harmony export */ });
/**
 * @module ui/toasts
 * Ephemeral toast notifications with auto-dismiss.
 */
// ─── State ──────────────────────────────────────────────────────────────────
let toastContainer = null;
function ensureToastContainer() {
    if (toastContainer)
        return toastContainer;
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.setAttribute("aria-live", "polite");
    toastContainer.setAttribute("aria-relevant", "additions");
    toastContainer.setAttribute("role", "status");
    document.body.appendChild(toastContainer);
    return toastContainer;
}
// ─── Public API ─────────────────────────────────────────────────────────────
/** Show a brief toast notification that auto-dismisses after `durationMs`. */
function showToast(message, type = "info", durationMs = 6000) {
    const container = ensureToastContainer();
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    setTimeout(() => {
        toast.classList.remove("show");
        toast.addEventListener("transitionend", () => toast.remove());
        setTimeout(() => toast.remove(), 500);
    }, durationMs);
}


/***/ },

/***/ "./ui/pipelineReload.ts"
/*!******************************!*\
  !*** ./ui/pipelineReload.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindForceReload: () => (/* binding */ bindForceReload),
/* harmony export */   setReloadRefreshHook: () => (/* binding */ setReloadRefreshHook)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./services/index.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _notifications_errorBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications/errorBanner */ "./ui/notifications/errorBanner.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./ui/state.ts");
/**
 * @module ui/pipelineReload
 * Force-reload button: clears cache, re-runs the data pipeline,
 * reconstructs services, and refreshes the market panel.
 */




// ─── Forward declaration ────────────────────────────────────────────────────
let _refreshMarketPanel = null;
/** Register the callback used to refresh the market panel after reload. */
function setReloadRefreshHook(fn) {
    _refreshMarketPanel = fn;
}
// ─── Binding ────────────────────────────────────────────────────────────────
/** Bind the force-reload button to a full pipeline re-initialisation. */
function bindForceReload() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    els.forceReloadBtn.addEventListener("click", async () => {
        els.forceReloadBtn.disabled = true;
        els.reloadStatus.textContent = "Clearing cache\u2026";
        els.reloadStatus.classList.remove("error");
        try {
            let cache = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getCache)();
            await cache.clear();
            els.reloadStatus.textContent = "Fetching fresh data\u2026";
            await (0,_services__WEBPACK_IMPORTED_MODULE_0__.initDataPipeline)();
            cache = new _services__WEBPACK_IMPORTED_MODULE_0__.CacheService();
            await cache.open();
            (0,_state__WEBPACK_IMPORTED_MODULE_3__.setCache)(cache);
            (0,_state__WEBPACK_IMPORTED_MODULE_3__.setAnalyzer)(new _services__WEBPACK_IMPORTED_MODULE_0__.MarketAnalyzerService(cache));
            await _refreshMarketPanel?.();
            els.reloadStatus.textContent = "Data reloaded \u2713";
        }
        catch (err) {
            console.error("[UIService] Force reload failed:", err);
            const msg = err instanceof Error ? err.message : "Reload failed \u2014 see console.";
            els.reloadStatus.textContent = msg;
            els.reloadStatus.classList.add("error");
            (0,_notifications_errorBanner__WEBPACK_IMPORTED_MODULE_2__.showError)(msg);
        }
        finally {
            els.forceReloadBtn.disabled = false;
        }
    });
}


/***/ },

/***/ "./ui/portfolio/autocomplete.ts"
/*!**************************************!*\
  !*** ./ui/portfolio/autocomplete.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindItemAutocomplete: () => (/* binding */ bindItemAutocomplete),
/* harmony export */   closeItemSuggestions: () => (/* binding */ closeItemSuggestions)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domRefs */ "./ui/domRefs.ts");
/**
 * @module ui/autocomplete
 * Portfolio item-name autocomplete — keyboard-navigable dropdown
 * sourced from cached market data and top-20 recommendations.
 */



// ─── Autocomplete state ─────────────────────────────────────────────────────
let acHighlight = -1;
/** Wire keyboard navigation and click listeners to the autocomplete dropdown. */
function bindItemAutocomplete() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    const input = els.flipItemName;
    const list = els.flipSuggestions;
    input.addEventListener("focus", () => updateSuggestions());
    input.addEventListener("input", () => updateSuggestions());
    input.addEventListener("keydown", (e) => {
        if (!list.classList.contains("open"))
            return;
        const items = list.querySelectorAll(".autocomplete-item");
        if (items.length === 0)
            return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            acHighlight = Math.min(acHighlight + 1, items.length - 1);
            highlightSuggestion(items);
        }
        else if (e.key === "ArrowUp") {
            e.preventDefault();
            acHighlight = Math.max(acHighlight - 1, 0);
            highlightSuggestion(items);
        }
        else if (e.key === "Escape") {
            closeItemSuggestions();
        }
    });
    document.addEventListener("mousedown", (e) => {
        if (!list.contains(e.target) && e.target !== input) {
            closeItemSuggestions();
        }
    });
}
/** Close the autocomplete dropdown and reset keyboard highlight. */
function closeItemSuggestions() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    els.flipSuggestions.classList.remove("open");
    els.flipSuggestions.innerHTML = "";
    acHighlight = -1;
}
// ─── Private helpers ────────────────────────────────────────────────────────
function updateSuggestions() {
    if ((0,_state__WEBPACK_IMPORTED_MODULE_1__.getSuppressAutocomplete)())
        return;
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    const input = els.flipItemName;
    const list = els.flipSuggestions;
    const query = input.value.trim().toLowerCase();
    const latestTopItems = (0,_state__WEBPACK_IMPORTED_MODULE_1__.getLatestTopItems)();
    const allCachedItems = (0,_state__WEBPACK_IMPORTED_MODULE_1__.getAllCachedItems)();
    list.innerHTML = "";
    acHighlight = -1;
    const recommendedNames = new Set(latestTopItems.map((i) => i.name));
    if (query.length === 0) {
        if (latestTopItems.length > 0) {
            appendSectionHeader(list, "Recommended (filtered)");
            for (const item of latestTopItems) {
                appendSuggestionRow(list, item.name, item.price);
            }
        }
        const others = allCachedItems.filter((i) => !recommendedNames.has(i.name));
        if (others.length > 0) {
            appendSectionHeader(list, "All items");
            for (const item of others) {
                appendSuggestionRow(list, item.name, item.price);
            }
        }
        if (latestTopItems.length === 0 && allCachedItems.length === 0) {
            appendEmptyHint(list, "No market data loaded");
        }
    }
    else {
        const recMatches = [];
        const otherMatches = [];
        for (const item of allCachedItems) {
            if (item.name.toLowerCase().includes(query)) {
                if (recommendedNames.has(item.name)) {
                    recMatches.push(item);
                }
                else {
                    otherMatches.push(item);
                }
            }
        }
        if (recMatches.length === 0 && otherMatches.length === 0) {
            appendEmptyHint(list, "No matching items");
        }
        else {
            if (recMatches.length > 0) {
                appendSectionHeader(list, "Recommended");
                for (const item of recMatches)
                    appendSuggestionRow(list, item.name, item.price);
            }
            if (otherMatches.length > 0) {
                if (recMatches.length > 0)
                    appendSectionHeader(list, "All items");
                for (const item of otherMatches)
                    appendSuggestionRow(list, item.name, item.price);
            }
        }
    }
    list.classList.add("open");
}
function appendSectionHeader(container, label) {
    const hdr = document.createElement("div");
    hdr.className = "autocomplete-section";
    hdr.textContent = label;
    container.appendChild(hdr);
}
function appendSuggestionRow(container, name, price) {
    const row = document.createElement("div");
    row.className = "autocomplete-item";
    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;
    const priceSpan = document.createElement("span");
    priceSpan.className = "autocomplete-item-price";
    priceSpan.textContent = `${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(price)} gp`;
    row.appendChild(nameSpan);
    row.appendChild(priceSpan);
    row.addEventListener("mousedown", (e) => {
        e.preventDefault();
        selectSuggestion(name, price);
    });
    container.appendChild(row);
}
function appendEmptyHint(container, text) {
    const el = document.createElement("div");
    el.className = "autocomplete-empty";
    el.textContent = text;
    container.appendChild(el);
}
function highlightSuggestion(items) {
    items.forEach((el, i) => el.classList.toggle("highlighted", i === acHighlight));
    if (acHighlight >= 0 && acHighlight < items.length) {
        items[acHighlight].scrollIntoView({ block: "nearest" });
    }
}
function selectSuggestion(name, price) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    els.flipItemName.value = name;
    els.flipBuyPrice.value = String(price);
    closeItemSuggestions();
    els.flipQuantity.focus();
}


/***/ },

/***/ "./ui/portfolio/completedFlips.ts"
/*!****************************************!*\
  !*** ./ui/portfolio/completedFlips.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindCompletedFlipsFilter: () => (/* binding */ bindCompletedFlipsFilter),
/* harmony export */   bindCsvExport: () => (/* binding */ bindCsvExport),
/* harmony export */   renderCompletedFlips: () => (/* binding */ renderCompletedFlips)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./ui/helpers.ts");
/* harmony import */ var _modals_editCompletedFlipModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/editCompletedFlipModal */ "./ui/modals/editCompletedFlipModal.ts");
/* harmony import */ var _modals_flipDetailModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/flipDetailModal */ "./ui/modals/flipDetailModal.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/**
 * @module ui/completedFlips
 * Completed flips table, portfolio stats summary, CSV export,
 * and filter binding.
 */






// ─── Render Completed Flips ─────────────────────────────────────────────────
/** Build the completed-flips table with sortable headers and action buttons. */
function renderCompletedFlips() {
    renderPortfolioStats();
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_4__.getEls)();
    const container = els.completedFlipsList;
    container.innerHTML = "";
    const portfolio = (0,_state__WEBPACK_IMPORTED_MODULE_5__.getPortfolio)();
    let flips = portfolio.getCompletedFlips();
    const filterText = els.completedFlipsFilter.value.trim().toLowerCase();
    if (filterText) {
        flips = flips.filter((f) => {
            const profitStr = String(f.realizedProfit);
            return f.itemName.toLowerCase().includes(filterText) || profitStr.includes(filterText);
        });
    }
    if (flips.length === 0) {
        const empty = document.createElement("div");
        empty.className = "portfolio-empty";
        empty.textContent = filterText
            ? "No flips match the current filter."
            : "No completed flips yet. Use the \u2713 button on an active flip to log a sale.";
        container.appendChild(empty);
        return;
    }
    const completedFlipsSortCol = (0,_state__WEBPACK_IMPORTED_MODULE_5__.getCompletedFlipsSortCol)();
    const completedFlipsSortAsc = (0,_state__WEBPACK_IMPORTED_MODULE_5__.getCompletedFlipsSortAsc)();
    const dir = completedFlipsSortAsc ? 1 : -1;
    flips.sort((a, b) => {
        switch (completedFlipsSortCol) {
            case "date": return dir * (a.completedAt - b.completedAt);
            case "item": return dir * a.itemName.localeCompare(b.itemName);
            case "profit": return dir * (a.realizedProfit - b.realizedProfit);
            case "roi": {
                const roiA = a.buyPrice * a.quantity > 0 ? a.realizedProfit / (a.buyPrice * a.quantity) : 0;
                const roiB = b.buyPrice * b.quantity > 0 ? b.realizedProfit / (b.buyPrice * b.quantity) : 0;
                return dir * (roiA - roiB);
            }
            default: return 0;
        }
    });
    const table = document.createElement("table");
    table.className = "completed-flips-table";
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const columns = [
        { key: "date", label: "Date" },
        { key: "item", label: "Item" },
        { key: "profit", label: "Profit" },
        { key: "roi", label: "ROI" },
    ];
    for (const col of columns) {
        const th = document.createElement("th");
        const arrow = completedFlipsSortCol === col.key
            ? (completedFlipsSortAsc ? " \u25B2" : " \u25BC")
            : "";
        th.innerHTML = `${col.label}<span class="sort-arrow">${arrow}</span>`;
        th.addEventListener("click", () => {
            if ((0,_state__WEBPACK_IMPORTED_MODULE_5__.getCompletedFlipsSortCol)() === col.key) {
                (0,_state__WEBPACK_IMPORTED_MODULE_5__.setCompletedFlipsSortAsc)(!(0,_state__WEBPACK_IMPORTED_MODULE_5__.getCompletedFlipsSortAsc)());
            }
            else {
                (0,_state__WEBPACK_IMPORTED_MODULE_5__.setCompletedFlipsSortCol)(col.key);
                (0,_state__WEBPACK_IMPORTED_MODULE_5__.setCompletedFlipsSortAsc)(col.key === "item");
            }
            renderCompletedFlips();
        });
        headerRow.appendChild(th);
    }
    const actTh = document.createElement("th");
    actTh.textContent = "";
    actTh.className = "actions-col";
    headerRow.appendChild(actTh);
    thead.appendChild(headerRow);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (const flip of flips) {
        const row = document.createElement("tr");
        row.className = flip.realizedProfit > 0 ? "win" : "loss";
        const dateCell = document.createElement("td");
        dateCell.textContent = new Date(flip.completedAt).toLocaleDateString("en-GB", {
            day: "numeric", month: "short", year: "2-digit",
        });
        const itemCell = document.createElement("td");
        itemCell.className = "completed-item-link";
        if (flip.alched) {
            const nameSpan = document.createElement("span");
            nameSpan.textContent = flip.itemName;
            const alchBadge = document.createElement("span");
            alchBadge.className = "alch-badge";
            alchBadge.textContent = "\uD83D\uDD25 Alched";
            alchBadge.title = "Completed via High Alchemy (no GE tax)";
            itemCell.appendChild(nameSpan);
            itemCell.appendChild(alchBadge);
        }
        else {
            itemCell.textContent = flip.itemName;
        }
        itemCell.title = `View analytics for ${flip.itemName}`;
        itemCell.addEventListener("click", () => (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.openAnalyticsForName)(flip.itemName));
        const profitCell = document.createElement("td");
        profitCell.className = `profit-cell ${flip.realizedProfit > 0 ? "win" : "loss"}`;
        const profitPrefix = flip.realizedProfit > 0 ? "\u25B2 " : "\u25BC ";
        profitCell.textContent = `${profitPrefix}${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(flip.realizedProfit)} gp`;
        const roi = flip.buyPrice * flip.quantity > 0
            ? (flip.realizedProfit / (flip.buyPrice * flip.quantity)) * 100
            : 0;
        const roiCell = document.createElement("td");
        roiCell.className = `profit-cell ${roi >= 0 ? "win" : "loss"}`;
        roiCell.textContent = `${roi >= 0 ? "+" : ""}${roi.toFixed(1)}%`;
        const actionsCell = document.createElement("td");
        actionsCell.className = "actions-col";
        const viewBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)({
            cls: "flip-view-btn", text: "\uD83D\uDD0D", title: "View flip details",
            ariaLabel: `View details for ${flip.itemName}`,
            onClick: () => (0,_modals_flipDetailModal__WEBPACK_IMPORTED_MODULE_3__.showFlipDetailModal)(flip),
        });
        const editBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)({
            cls: "flip-edit-btn", text: "\u270F\uFE0F", title: "Edit flip",
            ariaLabel: `Edit ${flip.itemName} flip`,
            onClick: () => (0,_modals_editCompletedFlipModal__WEBPACK_IMPORTED_MODULE_2__.showEditCompletedFlipModal)(flip),
        });
        const delBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)({
            cls: "flip-delete-btn", text: "\u2715", title: "Remove from history",
            ariaLabel: `Remove ${flip.itemName} from history`,
            onClick: () => { portfolio.removeCompletedFlip(flip.id); renderCompletedFlips(); },
        });
        actionsCell.appendChild(viewBtn);
        actionsCell.appendChild(editBtn);
        actionsCell.appendChild(delBtn);
        row.appendChild(dateCell);
        row.appendChild(itemCell);
        row.appendChild(profitCell);
        row.appendChild(roiCell);
        row.appendChild(actionsCell);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    container.appendChild(table);
}
// ─── Portfolio Stats ────────────────────────────────────────────────────────
function renderPortfolioStats() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_4__.getEls)();
    const portfolio = (0,_state__WEBPACK_IMPORTED_MODULE_5__.getPortfolio)();
    const stats = portfolio.getPortfolioStats();
    const profitEl = els.statTotalProfit;
    const profitPrefix = stats.totalProfit >= 0 ? "\u25B2 " : "\u25BC ";
    profitEl.textContent = `${profitPrefix}${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(stats.totalProfit)} gp`;
    profitEl.className = `stat-value ${stats.totalProfit >= 0 ? "profit" : "loss"}`;
    els.statTotalFlips.textContent = String(stats.totalFlips);
    const avgProfitEl = els.statAvgProfit;
    const avgPrefix = stats.avgProfit >= 0 ? "\u25B2 " : "\u25BC ";
    avgProfitEl.textContent = `${avgPrefix}${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(stats.avgProfit)} gp`;
    avgProfitEl.className = `stat-value ${stats.avgProfit >= 0 ? "profit" : "loss"}`;
    els.statAvgRoi.textContent = `${(stats.avgRoi * 100).toFixed(1)}%`;
    els.statAvgRoi.className = `stat-value ${stats.avgRoi >= 0 ? "profit" : "loss"}`;
}
// ─── CSV Export ─────────────────────────────────────────────────────────────
function exportCompletedFlipsCsv() {
    const portfolio = (0,_state__WEBPACK_IMPORTED_MODULE_5__.getPortfolio)();
    const flips = portfolio.getCompletedFlips();
    if (flips.length === 0) {
        alert("No completed flips to export.");
        return;
    }
    const header = "Item,Buy Price,Qty,Sell Price,Realised Profit,Date";
    const rows = flips.map((f) => {
        const dateStr = new Date(f.completedAt).toISOString().slice(0, 10);
        const safeName = f.itemName.includes(",") ? `"${f.itemName}"` : f.itemName;
        return `${safeName},${f.buyPrice},${f.quantity},${f.actualSellPrice},${f.realizedProfit},${dateStr}`;
    });
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ge-advisor-flips.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
/** Bind the CSV export button click handler. */
function bindCsvExport() {
    (0,_domRefs__WEBPACK_IMPORTED_MODULE_4__.getEls)().exportCsvBtn.addEventListener("click", exportCompletedFlipsCsv);
}
/** Bind the completed-flips filter input listener. */
function bindCompletedFlipsFilter() {
    (0,_domRefs__WEBPACK_IMPORTED_MODULE_4__.getEls)().completedFlipsFilter.addEventListener("input", () => {
        renderCompletedFlips();
    });
}


/***/ },

/***/ "./ui/portfolio/flipCard.ts"
/*!**********************************!*\
  !*** ./ui/portfolio/flipCard.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFlipCard: () => (/* binding */ buildFlipCard),
/* harmony export */   calcFlipMetrics: () => (/* binding */ calcFlipMetrics)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./ui/constants.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formatters */ "./ui/formatters.ts");
/* harmony import */ var _snapshots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snapshots */ "./ui/portfolio/snapshots.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./ui/helpers.ts");
/* harmony import */ var _modals_editFlipModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/editFlipModal */ "./ui/modals/editFlipModal.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/**
 * @module ui/flipCard
 * Active flip card DOM assembly, metric calculation, and event wiring.
 */







/** Compute cost, revenue, profit, and ROI for an active flip. */
function calcFlipMetrics(flip) {
    const cost = flip.buyPrice * flip.quantity;
    const tax = (0,_services__WEBPACK_IMPORTED_MODULE_0__.calculateGETax)(flip.targetSellPrice);
    const revenue = (flip.targetSellPrice - tax) * flip.quantity;
    const profit = revenue - cost;
    const roi = cost > 0 ? (profit / cost) * 100 : 0;
    return { cost, revenue, profit, roi };
}
/**
 * Build and wire a fully interactive flip card element for display in the
 * active flips list.
 */
function buildFlipCard(flip, renderFlips, renderCompletedFlips) {
    const card = buildFlipCardDOM(flip);
    wireFlipCardEvents(card, flip, renderFlips, renderCompletedFlips);
    return card;
}
// ─── Internals ──────────────────────────────────────────────────────────────
/** Pure DOM assembly — no event listeners. */
function buildFlipCardDOM(flip) {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.dataset.flipId = flip.id;
    const msElapsed = Date.now() - flip.timestamp;
    const limitReady = msElapsed >= _constants__WEBPACK_IMPORTED_MODULE_1__.BUY_LIMIT_WINDOW_MS;
    if (limitReady)
        card.classList.add("limit-ready");
    const top = document.createElement("div");
    top.className = "flip-card-top";
    const nameEl = document.createElement("span");
    nameEl.className = "flip-item-name flip-item-link";
    nameEl.textContent = flip.itemName;
    nameEl.title = `View analytics for ${flip.itemName}`;
    const removeBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createButton)({ cls: "flip-remove-btn", text: "\u2715", title: "Remove flip", ariaLabel: `Remove ${flip.itemName} flip` });
    const completeBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createButton)({ cls: "flip-complete-btn", text: "\u2713", title: "Mark as sold", ariaLabel: `Mark ${flip.itemName} as sold` });
    const alchBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createButton)({ cls: "flip-alch-btn", text: "\uD83D\uDD25", title: "High Alch (exit without GE tax)", ariaLabel: `High Alch ${flip.itemName}` });
    const editBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createButton)({ cls: "flip-edit-btn", text: "\u270F\uFE0F", title: "Edit flip", ariaLabel: `Edit ${flip.itemName} flip` });
    const actions = document.createElement("div");
    actions.className = "flip-card-actions";
    actions.appendChild(completeBtn);
    actions.appendChild(alchBtn);
    actions.appendChild(editBtn);
    actions.appendChild(removeBtn);
    top.appendChild(nameEl);
    top.appendChild(actions);
    const details = document.createElement("div");
    details.className = "flip-details";
    const { cost, profit, roi } = calcFlipMetrics(flip);
    const snapLimit = flip.buySnapshot?.buyLimit;
    const liveItem = (0,_snapshots__WEBPACK_IMPORTED_MODULE_3__.findRankedItem)(flip.itemName);
    const limit = snapLimit ?? liveItem?.buyLimit;
    const limitUsed = limit != null
        ? `<span class="flip-limit" title="Quantity bought vs. 4-hour buy limit">${flip.quantity.toLocaleString("en-US")} / ${limit.toLocaleString("en-US")}</span>`
        : "";
    details.innerHTML = [
        `<span>Buy: ${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(flip.buyPrice)}</span>`,
        `<span>Sell: ${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(flip.targetSellPrice)}</span>`,
        `<span>Qty: ${flip.quantity.toLocaleString("en-US")}</span>`,
        limitUsed,
        `<span title="Total capital invested">Capital: ${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(cost)}</span>`,
        `<span class="flip-profit${profit < 0 ? " loss" : ""}">P/L: ${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(Math.round(profit))} gp</span>`,
        `<span class="flip-profit${roi < 0 ? " loss" : ""}" title="Return on investment">ROI: ${roi >= 0 ? "+" : ""}${roi.toFixed(1)}%</span>`,
        `<span class="flip-timer${limitReady ? " ready" : ""}">${(0,_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCountdown)(flip.timestamp)}</span>`,
    ].filter(Boolean).join("");
    card.appendChild(top);
    card.appendChild(details);
    return card;
}
/** Attach all event listeners to a fully-assembled flip card. */
function wireFlipCardEvents(card, flip, renderFlips, renderCompletedFlips) {
    const portfolio = (0,_state__WEBPACK_IMPORTED_MODULE_6__.getPortfolio)();
    const nameEl = card.querySelector(".flip-item-name");
    nameEl?.addEventListener("click", () => (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.openAnalyticsForName)(flip.itemName));
    card.querySelector(".flip-remove-btn")?.addEventListener("click", () => {
        portfolio.removeFlip(flip.id);
        renderFlips();
    });
    card.querySelector(".flip-complete-btn")?.addEventListener("click", () => {
        const input = prompt(`Enter the actual sell price per item for "${flip.itemName}":`, String(flip.targetSellPrice));
        if (input === null)
            return;
        const price = Number(input);
        if (!price || price <= 0)
            return;
        const ranked = (0,_snapshots__WEBPACK_IMPORTED_MODULE_3__.findRankedItem)(flip.itemName);
        const sellSnap = ranked ? (0,_snapshots__WEBPACK_IMPORTED_MODULE_3__.buildSnapshot)(ranked) : undefined;
        portfolio.completeFlip(flip.id, price, sellSnap);
        renderFlips();
        renderCompletedFlips();
    });
    card.querySelector(".flip-alch-btn")?.addEventListener("click", () => {
        const ranked = (0,_snapshots__WEBPACK_IMPORTED_MODULE_3__.findRankedItem)(flip.itemName);
        const alchVal = ranked?.highAlch;
        let alchPrice;
        if (typeof alchVal === "number" && alchVal > 0) {
            const totalProfit = (alchVal * flip.quantity) - (flip.buyPrice * flip.quantity);
            const pfx = totalProfit >= 0 ? "profit" : "loss";
            if (!confirm(`High Alch ${flip.itemName} at ${alchVal.toLocaleString("en-US")} gp each?\n\n` +
                `Qty: ${flip.quantity.toLocaleString("en-US")}\n` +
                `Total ${pfx}: ${totalProfit >= 0 ? "+" : ""}${totalProfit.toLocaleString("en-US")} gp (no GE tax)`))
                return;
            alchPrice = alchVal;
        }
        else {
            const input = prompt(`High Alch value unknown for "${flip.itemName}".\nEnter the High Alch value per item:`);
            if (input === null)
                return;
            const parsed = Number(input);
            if (!parsed || parsed <= 0)
                return;
            alchPrice = parsed;
        }
        const sellSnap = ranked ? (0,_snapshots__WEBPACK_IMPORTED_MODULE_3__.buildSnapshot)(ranked) : undefined;
        portfolio.completeFlip(flip.id, alchPrice, sellSnap, true);
        renderFlips();
        renderCompletedFlips();
    });
    card.querySelector(".flip-edit-btn")?.addEventListener("click", () => (0,_modals_editFlipModal__WEBPACK_IMPORTED_MODULE_5__.showEditFlipModal)(flip));
}


/***/ },

/***/ "./ui/portfolio/metrics.ts"
/*!*********************************!*\
  !*** ./ui/portfolio/metrics.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeProfitabilityMetrics: () => (/* binding */ computeProfitabilityMetrics)
/* harmony export */ });
/**
 * @module ui/metrics
 * Computed profitability metrics derived from RankedItem data.
 */
/** Compute derived profitability metrics from a ranked item. */
function computeProfitabilityMetrics(item) {
    return {
        roiPct: item.recBuyPrice > 0 ? (item.estFlipProfit / item.recBuyPrice) * 100 : 0,
        profitPer4H: (item.buyLimit ?? 0) > 0 ? item.estFlipProfit * item.buyLimit : 0,
        volAdjMargin: item.estFlipProfit - Math.round(item.price * item.volatility),
        alchSafety: typeof item.highAlch === "number" ? item.highAlch - item.recBuyPrice : null,
    };
}


/***/ },

/***/ "./ui/portfolio/portfolio.ts"
/*!***********************************!*\
  !*** ./ui/portfolio/portfolio.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindPortfolio: () => (/* binding */ bindPortfolio),
/* harmony export */   bindPortfolioSubNav: () => (/* binding */ bindPortfolioSubNav),
/* harmony export */   loadItemCatalogue: () => (/* binding */ loadItemCatalogue),
/* harmony export */   renderFlips: () => (/* binding */ renderFlips),
/* harmony export */   setRenderPortfolioDashboardHook: () => (/* binding */ setRenderPortfolioDashboardHook),
/* harmony export */   startPortfolioTimer: () => (/* binding */ startPortfolioTimer)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./ui/constants.ts");
/* harmony import */ var _snapshots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snapshots */ "./ui/portfolio/snapshots.ts");
/* harmony import */ var _notifications_toasts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifications/toasts */ "./ui/notifications/toasts.ts");
/* harmony import */ var _notifications_priceAlerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notifications/priceAlerts */ "./ui/notifications/priceAlerts.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autocomplete */ "./ui/portfolio/autocomplete.ts");
/* harmony import */ var _completedFlips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./completedFlips */ "./ui/portfolio/completedFlips.ts");
/* harmony import */ var _flipCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flipCard */ "./ui/portfolio/flipCard.ts");
/**
 * @module ui/portfolio
 * Active flip form binding, sub-nav, portfolio timer, and item catalogue loader.
 *
 * audit:no-op(SRP-3) — ~170 lines, cohesive around the active-flip
 * form lifecycle and portfolio tab wiring.
 */









// ─── Forward ref for renderPortfolioDashboard (wired in initUI) ─────────────
let _renderPortfolioDashboard = () => { };
function setRenderPortfolioDashboardHook(fn) {
    _renderPortfolioDashboard = fn;
}
// ─── Portfolio binding ──────────────────────────────────────────────────────
function bindPortfolio() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_4__.getEls)();
    els.addFlipBtn.addEventListener("click", handleAddFlip);
    const inputs = [els.flipItemName, els.flipBuyPrice, els.flipQuantity, els.flipSellPrice];
    for (const inp of inputs) {
        inp.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                if (inp === els.flipItemName && els.flipSuggestions.classList.contains("open")) {
                    const hl = els.flipSuggestions.querySelector(".highlighted");
                    if (hl) {
                        hl.click();
                        return;
                    }
                }
                handleAddFlip();
            }
        });
    }
    (0,_autocomplete__WEBPACK_IMPORTED_MODULE_6__.bindItemAutocomplete)();
}
function bindPortfolioSubNav() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_4__.getEls)();
    els.portfolioActiveBtn.addEventListener("click", () => {
        els.portfolioActiveBtn.classList.add("active");
        els.portfolioHistoryBtn.classList.remove("active");
        els.portfolioActiveBtn.setAttribute("aria-selected", "true");
        els.portfolioHistoryBtn.setAttribute("aria-selected", "false");
        els.portfolioActiveContainer.style.display = "";
        els.portfolioHistoryContainer.style.display = "none";
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_PORTFOLIO_SUB_TAB, "active");
    });
    els.portfolioHistoryBtn.addEventListener("click", () => {
        els.portfolioHistoryBtn.classList.add("active");
        els.portfolioActiveBtn.classList.remove("active");
        els.portfolioHistoryBtn.setAttribute("aria-selected", "true");
        els.portfolioActiveBtn.setAttribute("aria-selected", "false");
        els.portfolioHistoryContainer.style.display = "";
        els.portfolioActiveContainer.style.display = "none";
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_PORTFOLIO_SUB_TAB, "history");
        (0,_completedFlips__WEBPACK_IMPORTED_MODULE_7__.renderCompletedFlips)();
        _renderPortfolioDashboard();
    });
    const saved = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_PORTFOLIO_SUB_TAB);
    if (saved === "history" || saved === "dashboard") {
        els.portfolioHistoryBtn.click();
    }
}
// ─── Add Flip ───────────────────────────────────────────────────────────────
function handleAddFlip() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_4__.getEls)();
    (0,_autocomplete__WEBPACK_IMPORTED_MODULE_6__.closeItemSuggestions)();
    const itemName = els.flipItemName.value.trim();
    const buyPrice = Number(els.flipBuyPrice.value);
    const quantity = Number(els.flipQuantity.value);
    const sellPrice = Number(els.flipSellPrice.value);
    if (!itemName) {
        (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_2__.showToast)("Please enter an item name.", "info");
        els.flipItemName.focus();
        return;
    }
    if (!buyPrice || buyPrice <= 0) {
        (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_2__.showToast)("Please enter a valid buy price.", "info");
        els.flipBuyPrice.focus();
        return;
    }
    if (!quantity || quantity <= 0) {
        (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_2__.showToast)("Please enter a valid quantity.", "info");
        els.flipQuantity.focus();
        return;
    }
    if (!sellPrice || sellPrice <= 0) {
        (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_2__.showToast)("Please enter a valid sell price.", "info");
        els.flipSellPrice.focus();
        return;
    }
    const portfolio = (0,_state__WEBPACK_IMPORTED_MODULE_5__.getPortfolio)();
    const ranked = (0,_snapshots__WEBPACK_IMPORTED_MODULE_1__.findRankedItem)(itemName);
    const snapshot = ranked ? (0,_snapshots__WEBPACK_IMPORTED_MODULE_1__.buildSnapshot)(ranked) : undefined;
    portfolio.addFlip(itemName, buyPrice, quantity, sellPrice, snapshot);
    (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_2__.showToast)(`Flip added: ${itemName}`, "buy");
    els.flipItemName.value = "";
    els.flipBuyPrice.value = "";
    els.flipQuantity.value = "";
    els.flipSellPrice.value = "";
    els.flipItemName.blur();
    renderFlips();
}
// ─── Render Active Flips ────────────────────────────────────────────────────
function renderFlips() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_4__.getEls)();
    const container = els.activeFlipsList;
    container.innerHTML = "";
    const portfolio = (0,_state__WEBPACK_IMPORTED_MODULE_5__.getPortfolio)();
    const flips = portfolio.getFlips();
    if (flips.length === 0) {
        const empty = document.createElement("div");
        empty.className = "portfolio-empty";
        empty.textContent = "No active flips. Use the form above to track one.";
        container.appendChild(empty);
        return;
    }
    for (const flip of flips) {
        container.appendChild((0,_flipCard__WEBPACK_IMPORTED_MODULE_8__.buildFlipCard)(flip, renderFlips, _completedFlips__WEBPACK_IMPORTED_MODULE_7__.renderCompletedFlips));
    }
}
// ─── Timer & Catalogue ──────────────────────────────────────────────────────
function startPortfolioTimer() {
    if ((0,_state__WEBPACK_IMPORTED_MODULE_5__.getPortfolioTimerId)() !== null)
        return;
    const portfolio = (0,_state__WEBPACK_IMPORTED_MODULE_5__.getPortfolio)();
    (0,_state__WEBPACK_IMPORTED_MODULE_5__.setPortfolioTimerId)(setInterval(() => {
        if (portfolio.getFlips().length > 0) {
            renderFlips();
            (0,_notifications_priceAlerts__WEBPACK_IMPORTED_MODULE_3__.checkBuyLimitResets)();
        }
    }, _constants__WEBPACK_IMPORTED_MODULE_0__.PORTFOLIO_TICK_MS));
}
async function loadItemCatalogue() {
    try {
        const cache = (0,_state__WEBPACK_IMPORTED_MODULE_5__.getCache)();
        const records = await cache.getAll();
        (0,_state__WEBPACK_IMPORTED_MODULE_5__.setAllCachedItems)(records
            .map((r) => ({ name: r.name, price: r.price }))
            .sort((a, b) => a.name.localeCompare(b.name)));
        console.log(`[UIService] Item catalogue loaded: ${(0,_state__WEBPACK_IMPORTED_MODULE_5__.getAllCachedItems)().length} items.`);
    }
    catch (err) {
        console.warn("[UIService] Failed to load item catalogue:", err);
        (0,_state__WEBPACK_IMPORTED_MODULE_5__.setAllCachedItems)([]);
    }
}


/***/ },

/***/ "./ui/portfolio/portfolioDashboard.ts"
/*!********************************************!*\
  !*** ./ui/portfolio/portfolioDashboard.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindDashboardCollapse: () => (/* binding */ bindDashboardCollapse),
/* harmony export */   renderPortfolioDashboard: () => (/* binding */ renderPortfolioDashboard)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _collapseToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collapseToggle */ "./ui/collapseToggle.ts");
/* harmony import */ var _chart_chartHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart/chartHelpers */ "./ui/chart/chartHelpers.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./ui/constants.ts");
/**
 * @module ui/portfolioDashboard
 * Portfolio Dashboard — Cumulative P&L chart + Win/Loss donut chart.
 *
 * audit:no-op(SRP) — Both chart renderers serve a single cohesive
 * concern (portfolio dashboard visualisation). The P&L function is long
 * (~370 lines of canvas drawing) but long function ≠ SRP violation;
 * both renderers share state, imports, and DOM scope.
 */






// ─── Local state ────────────────────────────────────────────────────────────
const DASH_MARGIN = { left: 58, right: 16, top: 14, bottom: 32 };
const DASH_Y_TICKS = 4;
// ─── Collapse ───────────────────────────────────────────────────────────────
function bindDashboardCollapse() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_3__.getEls)();
    (0,_collapseToggle__WEBPACK_IMPORTED_MODULE_1__.bindCollapseToggle)({
        collapseBtn: els.dashboardPnlCollapseBtn,
        targets: [els.dashboardPnlChart],
        headerBar: els.dashboardPnlHeader,
        storageKey: _constants__WEBPACK_IMPORTED_MODULE_5__.LS_PNL_COLLAPSED,
    });
    (0,_collapseToggle__WEBPACK_IMPORTED_MODULE_1__.bindCollapseToggle)({
        collapseBtn: els.dashboardWinlossCollapseBtn,
        targets: [els.dashboardWinlossChart],
        headerBar: els.dashboardWinlossHeader,
        storageKey: _constants__WEBPACK_IMPORTED_MODULE_5__.LS_WINLOSS_COLLAPSED,
    });
}
// ─── Main render ────────────────────────────────────────────────────────────
function renderPortfolioDashboard() {
    renderCumulativePnlChart();
    renderWinLossDonut();
}
// ─── Cumulative P&L line chart ──────────────────────────────────────────────
function renderCumulativePnlChart() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_3__.getEls)();
    const container = els.dashboardPnlChart;
    container.innerHTML = "";
    const portfolio = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getPortfolio)();
    const flips = portfolio.getCompletedFlips().slice().sort((a, b) => a.completedAt - b.completedAt);
    if (flips.length < 2) {
        container.innerHTML = '<p class="dashboard-empty">Complete at least 2 flips to see your P&L chart.</p>';
        return;
    }
    const cumValues = [];
    let running = 0;
    for (const f of flips) {
        running += f.realizedProfit;
        cumValues.push(running);
    }
    const canvasWrap = document.createElement("div");
    canvasWrap.className = "chart-canvas-wrap";
    const baseCanvas = document.createElement("canvas");
    baseCanvas.className = "chart-base-canvas";
    baseCanvas.style.height = "200px";
    baseCanvas.setAttribute("role", "img");
    baseCanvas.setAttribute("aria-label", `Cumulative P&L chart: ${flips.length} flips. Current total ${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(running)} gp.`);
    const interCanvas = document.createElement("canvas");
    interCanvas.className = "chart-interaction-canvas";
    const tooltip = document.createElement("div");
    tooltip.className = "pnl-chart-tooltip";
    canvasWrap.appendChild(baseCanvas);
    canvasWrap.appendChild(interCanvas);
    canvasWrap.appendChild(tooltip);
    container.appendChild(canvasWrap);
    let cssW = 0;
    let cssH = 0;
    let yMin = 0;
    let yRange = 1;
    let stepX = 1;
    let zeroY = 0;
    const toX = (i) => DASH_MARGIN.left + i * stepX;
    const toY = (v) => DASH_MARGIN.top + (cssH - DASH_MARGIN.top - DASH_MARGIN.bottom) - ((v - yMin) / yRange) * (cssH - DASH_MARGIN.top - DASH_MARGIN.bottom);
    const prepCanvas = (canvas) => {
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return null;
        const dpr = window.devicePixelRatio || 1;
        cssW = baseCanvas.offsetWidth || baseCanvas.clientWidth || 480;
        cssH = baseCanvas.offsetHeight || baseCanvas.clientHeight || 200;
        canvas.width = cssW * dpr;
        canvas.height = cssH * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        return ctx;
    };
    const drawBase = () => {
        const ctx = prepCanvas(baseCanvas);
        if (!ctx)
            return;
        prepCanvas(interCanvas);
        const { left: mL, right: mR, top: mT, bottom: mB } = DASH_MARGIN;
        const plotW = cssW - mL - mR;
        const plotH = cssH - mT - mB;
        const theme = (0,_chart_chartHelpers__WEBPACK_IMPORTED_MODULE_2__.getChartThemeColors)();
        const rawMin = Math.min(0, ...cumValues);
        const rawMax = Math.max(0, ...cumValues);
        const rawRange = rawMax - rawMin || 1;
        const pad = rawRange * 0.08;
        yMin = rawMin - pad;
        const yMax = rawMax + pad;
        yRange = yMax - yMin;
        stepX = plotW / Math.max(1, cumValues.length - 1);
        zeroY = toY(0);
        const yPrec = (0,_chart_chartHelpers__WEBPACK_IMPORTED_MODULE_2__.axisLabelPrecision)(yMin, yMax, DASH_Y_TICKS);
        ctx.font = '11px "Segoe UI", sans-serif';
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        for (let i = 0; i <= DASH_Y_TICKS; i++) {
            const tv = yMin + (yRange * i) / DASH_Y_TICKS;
            const y = toY(tv);
            ctx.strokeStyle = theme.gridLine;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mL, y);
            ctx.lineTo(cssW - mR, y);
            ctx.stroke();
            ctx.fillStyle = theme.axisText;
            ctx.fillText((0,_chart_chartHelpers__WEBPACK_IMPORTED_MODULE_2__.axisLabel)(tv, yPrec), mL - 6, y);
        }
        ctx.save();
        ctx.strokeStyle = theme.axisText;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 3]);
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.moveTo(mL, zeroY);
        ctx.lineTo(cssW - mR, zeroY);
        ctx.stroke();
        ctx.restore();
        const SHORT_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const toDateKey = (ts) => {
            const d = new Date(ts);
            return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        };
        const dayBoundaries = [0];
        for (let i = 1; i < flips.length; i++) {
            if (toDateKey(flips[i].completedAt) !== toDateKey(flips[i - 1].completedAt)) {
                dayBoundaries.push(i);
            }
        }
        const maxLbls = Math.max(2, Math.floor(plotW / 52));
        let labelIndices = dayBoundaries;
        if (dayBoundaries.length > maxLbls) {
            const step = Math.ceil(dayBoundaries.length / maxLbls);
            labelIndices = dayBoundaries.filter((_, i) => i % step === 0);
            if (labelIndices[labelIndices.length - 1] !== dayBoundaries[dayBoundaries.length - 1]) {
                labelIndices.push(dayBoundaries[dayBoundaries.length - 1]);
            }
        }
        ctx.textBaseline = "top";
        ctx.fillStyle = theme.axisText;
        ctx.font = '10px "Segoe UI", sans-serif';
        const labelY = cssH - mB + 6;
        for (let li = 0; li < labelIndices.length; li++) {
            const idx = labelIndices[li];
            const d = new Date(flips[idx].completedAt);
            const label = `${d.getDate()} ${SHORT_MONTHS[d.getMonth()]}`;
            const x = toX(idx);
            ctx.textAlign = li === 0 ? "left" : li === labelIndices.length - 1 ? "right" : "center";
            ctx.fillText(label, x, labelY);
        }
        ctx.save();
        ctx.beginPath();
        ctx.rect(mL, mT, plotW, plotH);
        ctx.clip();
        const greenColor = theme.accentGreen;
        const redColor = theme.accentRed;
        const pts = cumValues.map((v, i) => ({ x: toX(i), y: toY(v) }));
        // Green fill (above zero line).
        ctx.save();
        ctx.beginPath();
        ctx.rect(mL, mT, plotW, zeroY - mT);
        ctx.clip();
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++)
            ctx.lineTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[pts.length - 1].x, zeroY);
        ctx.lineTo(pts[0].x, zeroY);
        ctx.closePath();
        const gGrad = ctx.createLinearGradient(0, mT, 0, zeroY);
        gGrad.addColorStop(0, (0,_chart_chartHelpers__WEBPACK_IMPORTED_MODULE_2__.withAlpha)(greenColor, 0.27));
        gGrad.addColorStop(1, (0,_chart_chartHelpers__WEBPACK_IMPORTED_MODULE_2__.withAlpha)(greenColor, 0.03));
        ctx.fillStyle = gGrad;
        ctx.fill();
        ctx.restore();
        // Red fill (below zero line).
        ctx.save();
        ctx.beginPath();
        ctx.rect(mL, zeroY, plotW, mT + plotH - zeroY);
        ctx.clip();
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++)
            ctx.lineTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[pts.length - 1].x, zeroY);
        ctx.lineTo(pts[0].x, zeroY);
        ctx.closePath();
        const rGrad = ctx.createLinearGradient(0, zeroY, 0, mT + plotH);
        rGrad.addColorStop(0, (0,_chart_chartHelpers__WEBPACK_IMPORTED_MODULE_2__.withAlpha)(redColor, 0.03));
        rGrad.addColorStop(1, (0,_chart_chartHelpers__WEBPACK_IMPORTED_MODULE_2__.withAlpha)(redColor, 0.27));
        ctx.fillStyle = rGrad;
        ctx.fill();
        ctx.restore();
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        for (let i = 1; i < pts.length; i++) {
            const above = cumValues[i] >= 0 && cumValues[i - 1] >= 0;
            const below = cumValues[i] < 0 && cumValues[i - 1] < 0;
            ctx.strokeStyle = below ? redColor : above ? greenColor : greenColor;
            ctx.beginPath();
            ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
            ctx.lineTo(pts[i].x, pts[i].y);
            ctx.stroke();
        }
        const dotRadius = flips.length <= 12 ? 5 : 3.5;
        for (let i = 0; i < pts.length; i++) {
            const dotColor = cumValues[i] >= 0 ? greenColor : redColor;
            ctx.beginPath();
            ctx.arc(pts[i].x, pts[i].y, dotRadius + 2, 0, Math.PI * 2);
            ctx.fillStyle = dotColor;
            ctx.globalAlpha = 0.2;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(pts[i].x, pts[i].y, dotRadius, 0, Math.PI * 2);
            ctx.fillStyle = dotColor;
            ctx.fill();
            ctx.strokeStyle = document.body.dataset.mode === "light" ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.6)";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        if (flips.length <= 10) {
            ctx.font = '10px "Segoe UI", sans-serif';
            ctx.fillStyle = theme.axisText;
            ctx.textBaseline = "bottom";
            for (let i = 0; i < pts.length; i++) {
                const name = flips[i].itemName.length > 16
                    ? flips[i].itemName.slice(0, 15) + "\u2026"
                    : flips[i].itemName;
                const above = i % 2 === 0;
                const ly = above ? pts[i].y - dotRadius - 4 : pts[i].y + dotRadius + 12;
                ctx.textBaseline = above ? "bottom" : "top";
                ctx.textAlign = i === 0 ? "left" : i === pts.length - 1 ? "right" : "center";
                ctx.fillText(name, pts[i].x, ly);
            }
        }
        ctx.restore();
    };
    const drawCrosshair = (idx) => {
        const ctx = interCanvas.getContext("2d");
        if (!ctx)
            return;
        const dpr = window.devicePixelRatio || 1;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, cssW, cssH);
        const { left: mL, right: mR, top: mT, bottom: mB } = DASH_MARGIN;
        const plotW = cssW - mL - mR;
        const plotH = cssH - mT - mB;
        const ptX = toX(idx);
        const ptY = toY(cumValues[idx]);
        const accentColour = (0,_chart_chartHelpers__WEBPACK_IMPORTED_MODULE_2__.getChartThemeColors)().accentPrimary;
        ctx.save();
        ctx.beginPath();
        ctx.rect(mL, mT, plotW, plotH);
        ctx.clip();
        ctx.strokeStyle = accentColour;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 3]);
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.moveTo(ptX, mT);
        ctx.lineTo(ptX, mT + plotH);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(mL, ptY);
        ctx.lineTo(mL + plotW, ptY);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(ptX, ptY, 9, 0, Math.PI * 2);
        ctx.fillStyle = accentColour;
        ctx.globalAlpha = 0.15;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(ptX, ptY, 6, 0, Math.PI * 2);
        ctx.fillStyle = accentColour;
        ctx.globalAlpha = 0.4;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = accentColour;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();
    };
    const clearCrosshair = () => {
        const ctx = interCanvas.getContext("2d");
        if (!ctx)
            return;
        const dpr = window.devicePixelRatio || 1;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, cssW, cssH);
    };
    drawBase();
    const resizeObs = new ResizeObserver(() => drawBase());
    resizeObs.observe(baseCanvas);
    const resolveIndex = (e) => {
        const rect = baseCanvas.getBoundingClientRect();
        const cssXPos = e.clientX - rect.left;
        const rawIdx = (cssXPos - DASH_MARGIN.left) / stepX;
        return Math.max(0, Math.min(Math.round(rawIdx), cumValues.length - 1));
    };
    const onMove = (e) => {
        const idx = resolveIndex(e);
        const flip = flips[idx];
        drawCrosshair(idx);
        const profitClass = flip.realizedProfit >= 0 ? "profit" : "loss";
        const cumClass = cumValues[idx] >= 0 ? "profit" : "loss";
        const d = new Date(flip.completedAt);
        const dateStr = d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
        tooltip.innerHTML =
            `<div class="pnl-tooltip-date">Flip #${idx + 1} \u2014 ${dateStr}</div>` +
                `<div class="pnl-tooltip-item">${flip.itemName}</div>` +
                `<div class="pnl-tooltip-profit ${profitClass}">Flip: ${flip.realizedProfit >= 0 ? "+" : ""}${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(flip.realizedProfit)} gp</div>` +
                `<div class="pnl-tooltip-cumulative ${cumClass}">Total: ${cumValues[idx] >= 0 ? "+" : ""}${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(cumValues[idx])} gp</div>`;
        tooltip.classList.add("visible");
        const ptX = toX(idx);
        const ptY = toY(cumValues[idx]);
        const tipW = 180;
        const tipH = 80;
        const { left: mL, right: mR } = DASH_MARGIN;
        const plotW = cssW - mL - mR;
        const plotMidX = mL + plotW / 2;
        let left;
        if (ptX > plotMidX) {
            left = ptX - tipW - 14;
        }
        else {
            left = ptX + 14;
        }
        let top = ptY - tipH / 2;
        if (left < 4)
            left = 4;
        if (top < 4)
            top = 4;
        if (top + tipH > cssH - 4)
            top = cssH - tipH - 4;
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    };
    canvasWrap.addEventListener("mousemove", onMove);
    canvasWrap.addEventListener("mouseleave", () => {
        clearCrosshair();
        tooltip.classList.remove("visible");
    });
}
// ─── Win/Loss donut chart ───────────────────────────────────────────────────
function renderWinLossDonut() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_3__.getEls)();
    const container = els.dashboardWinlossChart;
    container.innerHTML = "";
    const portfolio = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getPortfolio)();
    const flips = portfolio.getCompletedFlips();
    if (flips.length === 0) {
        container.innerHTML = '<p class="dashboard-empty">No completed flips yet.</p>';
        return;
    }
    const wins = flips.filter(f => f.realizedProfit > 0).length;
    const losses = flips.length - wins;
    const winPct = wins / flips.length;
    const wrap = document.createElement("div");
    wrap.className = "winloss-chart-wrap";
    const canvas = document.createElement("canvas");
    const SIZE = 120;
    canvas.style.width = `${SIZE}px`;
    canvas.style.height = `${SIZE}px`;
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", `Win/loss donut: ${wins} wins, ${losses} losses (${(winPct * 100).toFixed(0)}% win rate).`);
    const legend = document.createElement("div");
    legend.className = "winloss-legend";
    legend.innerHTML =
        `<div class="winloss-legend-item"><span class="winloss-swatch win"></span>Wins: <span class="winloss-count">${wins}</span> (${(winPct * 100).toFixed(1)}%)</div>` +
            `<div class="winloss-legend-item"><span class="winloss-swatch loss"></span>Losses: <span class="winloss-count">${losses}</span> (${((1 - winPct) * 100).toFixed(1)}%)</div>` +
            `<div class="winloss-legend-item" style="margin-top:2px;color:var(--text-muted);font-size:10px">Total: ${flips.length} flips</div>`;
    wrap.appendChild(canvas);
    wrap.appendChild(legend);
    container.appendChild(wrap);
    const drawDonut = () => {
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = SIZE * dpr;
        canvas.height = SIZE * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const cx = SIZE / 2;
        const cy = SIZE / 2;
        const outerR = SIZE / 2 - 4;
        const innerR = outerR * 0.55;
        const theme = (0,_chart_chartHelpers__WEBPACK_IMPORTED_MODULE_2__.getChartThemeColors)();
        const greenColor = theme.accentGreen;
        const redColor = theme.accentRed;
        const startAngle = -Math.PI / 2;
        const winAngle = winPct * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(cx, cy, outerR, startAngle, startAngle + winAngle);
        ctx.arc(cx, cy, innerR, startAngle + winAngle, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = greenColor;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx, cy, outerR, startAngle + winAngle, startAngle + Math.PI * 2);
        ctx.arc(cx, cy, innerR, startAngle + Math.PI * 2, startAngle + winAngle, true);
        ctx.closePath();
        ctx.fillStyle = redColor;
        ctx.fill();
        ctx.fillStyle = theme.axisText;
        ctx.font = 'bold 18px "Segoe UI", sans-serif';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${(winPct * 100).toFixed(0)}%`, cx, cy - 6);
        ctx.font = '10px "Segoe UI", sans-serif';
        ctx.fillText("win rate", cx, cy + 10);
    };
    drawDonut();
    const resizeObs = new ResizeObserver(() => drawDonut());
    resizeObs.observe(canvas);
}


/***/ },

/***/ "./ui/portfolio/snapshots.ts"
/*!***********************************!*\
  !*** ./ui/portfolio/snapshots.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSnapshot: () => (/* binding */ buildSnapshot),
/* harmony export */   findRankedItem: () => (/* binding */ findRankedItem)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./ui/state.ts");
/**
 * @module ui/snapshots
 * Flip snapshot builders and ranked-item lookup helpers.
 */

/** Build a {@link FlipSnapshot} from a {@link RankedItem}'s current metrics. */
function buildSnapshot(item) {
    return {
        price: item.price,
        volume: item.volume,
        buyLimit: item.buyLimit,
        tradeVelocity: item.tradeVelocity,
        priceTrend: item.priceTrend,
        ema30d: item.ema30d,
        volatility: item.volatility,
        estFlipProfit: item.estFlipProfit,
        returnOnTime: item.returnOnTime,
    };
}
/** Look up a {@link RankedItem} by name across all in-memory scored lists. */
function findRankedItem(name) {
    const lc = name.toLowerCase();
    return (0,_state__WEBPACK_IMPORTED_MODULE_0__.getLatestTopItems)().find((i) => i.name.toLowerCase() === lc)
        ?? (0,_state__WEBPACK_IMPORTED_MODULE_0__.getLatestSearchResults)().find((i) => i.name.toLowerCase() === lc);
}


/***/ },

/***/ "./ui/scanProgress.ts"
/*!****************************!*\
  !*** ./ui/scanProgress.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindFullMarketScan: () => (/* binding */ bindFullMarketScan),
/* harmony export */   setScanRefreshHook: () => (/* binding */ setScanRefreshHook)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./services/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./ui/constants.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./ui/state.ts");
/* harmony import */ var _notifications_errorBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications/errorBanner */ "./ui/notifications/errorBanner.ts");
/* harmony import */ var _notifications_toasts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications/toasts */ "./ui/notifications/toasts.ts");
/* harmony import */ var _notifications_priceAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications/priceAlerts */ "./ui/notifications/priceAlerts.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formatters */ "./ui/formatters.ts");
/**
 * @module ui/scanProgress
 * Full-market background scan button, deep-history checkbox, progress bar,
 * and visibility-change warning.
 */








// ─── Forward declaration for refreshMarketPanel ─────────────────────────────
let _refreshMarketPanel = null;
function setScanRefreshHook(fn) { _refreshMarketPanel = fn; }
// ─── Module state ───────────────────────────────────────────────────────────
let scanAbortController = null;
let deepHistoryWarned = false;
let visibilityWarned = false;
function onVisibilityChange() {
    if (document.hidden && scanAbortController && !visibilityWarned) {
        visibilityWarned = true;
        (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_5__.showToast)("\u26A0\uFE0F Scan slows down when this tab is in the background \u2014 " +
            "keep the tab visible for best speed.", "info", 10000);
    }
}
function bindFullMarketScan() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    // ── Restore persisted deep-history preference ──
    const savedDeep = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_DEEP_HISTORY) === "true";
    els.deepHistoryCheckbox.checked = savedDeep;
    els.deepHistoryCheckbox.addEventListener("change", () => {
        const checked = els.deepHistoryCheckbox.checked;
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_DEEP_HISTORY, String(checked));
        if (checked && !deepHistoryWarned) {
            deepHistoryWarned = true;
            (0,_notifications_toasts__WEBPACK_IMPORTED_MODULE_5__.showToast)("Deep history enabled \u2014 full scans may take 3\u201310 minutes depending on connection.", "info", 8000);
        }
    });
    els.fullMarketScanBtn.addEventListener("click", async () => {
        if (scanAbortController) {
            scanAbortController.abort();
            scanAbortController = null;
            els.fullMarketScanBtn.textContent = "\uD83D\uDD0D Scan Full Market";
            els.syncProgress.classList.add("hidden");
            return;
        }
        let geCatalogue = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getGeCatalogue)();
        if (geCatalogue.length === 0) {
            try {
                geCatalogue = await (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchGECatalogue)();
                (0,_state__WEBPACK_IMPORTED_MODULE_3__.setGeCatalogue)(geCatalogue);
            }
            catch {
                (0,_notifications_errorBanner__WEBPACK_IMPORTED_MODULE_4__.showError)("Could not load item catalogue. Try again later.");
                return;
            }
        }
        if (geCatalogue.length === 0) {
            (0,_notifications_errorBanner__WEBPACK_IMPORTED_MODULE_4__.showError)("Item catalogue is empty \u2014 cannot scan.");
            return;
        }
        const deepHistory = els.deepHistoryCheckbox.checked;
        const deepLabel = deepHistory ? " (deep history: ON)" : "";
        scanAbortController = new AbortController();
        els.fullMarketScanBtn.textContent = "\u23F9 Cancel Scan";
        els.syncProgress.classList.remove("hidden");
        els.syncProgressFill.style.width = "0%";
        els.syncProgressText.textContent =
            "Scanning 0 / " + geCatalogue.length.toLocaleString("en-US") + "\u2026" + deepLabel;
        visibilityWarned = false;
        document.addEventListener("visibilitychange", onVisibilityChange);
        const scanStart = Date.now();
        try {
            await (0,_services__WEBPACK_IMPORTED_MODULE_0__.runFullMarketScan)(geCatalogue, (done, total) => {
                const pct = Math.round((done / total) * 100);
                els.syncProgressFill.style.width = pct + "%";
                const elapsed = Date.now() - scanStart;
                const elapsedStr = (0,_formatters__WEBPACK_IMPORTED_MODULE_7__.formatDuration)(elapsed);
                let etaStr = "";
                if (done > 0 && pct < 100) {
                    const rate = done / elapsed;
                    const remaining = (total - done) / rate;
                    etaStr = ` \u2014 ~${(0,_formatters__WEBPACK_IMPORTED_MODULE_7__.formatDuration)(remaining)} remaining`;
                }
                els.syncProgressText.textContent =
                    `Scanning ${done.toLocaleString("en-US")} / ${total.toLocaleString("en-US")}\u2026 (${pct}%) [${elapsedStr}${etaStr}]${deepLabel}`;
            }, scanAbortController.signal, deepHistory);
            const cache = new _services__WEBPACK_IMPORTED_MODULE_0__.CacheService();
            await cache.open();
            (0,_state__WEBPACK_IMPORTED_MODULE_3__.setCache)(cache);
            (0,_state__WEBPACK_IMPORTED_MODULE_3__.setAnalyzer)(new _services__WEBPACK_IMPORTED_MODULE_0__.MarketAnalyzerService(cache));
            await _refreshMarketPanel?.();
            const elapsed = (0,_formatters__WEBPACK_IMPORTED_MODULE_7__.formatDuration)(Date.now() - scanStart);
            const scanMsg = `\u2705 Scan complete \u2014 ${geCatalogue.length.toLocaleString("en-US")} items in ${elapsed}${deepLabel}`;
            els.syncProgressFill.style.width = "100%";
            els.syncProgressText.textContent = "Full market scan complete \u2714";
            setTimeout(() => els.syncProgress.classList.add("hidden"), 4000);
            (0,_notifications_priceAlerts__WEBPACK_IMPORTED_MODULE_6__.notifyUser)("GE Market Scan Complete", scanMsg, "info", 8000);
        }
        catch (err) {
            console.error("[UIService] Full market scan error:", err);
            els.syncProgressText.textContent = "Scan failed \u2014 see console.";
            setTimeout(() => els.syncProgress.classList.add("hidden"), 5000);
        }
        finally {
            scanAbortController = null;
            document.removeEventListener("visibilitychange", onVisibilityChange);
            els.fullMarketScanBtn.textContent = "\uD83D\uDD0D Scan Full Market";
        }
    });
}


/***/ },

/***/ "./ui/settings.ts"
/*!************************!*\
  !*** ./ui/settings.ts ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyProviderUI: () => (/* binding */ applyProviderUI),
/* harmony export */   bindSettingsEvents: () => (/* binding */ bindSettingsEvents),
/* harmony export */   costTierBadge: () => (/* binding */ costTierBadge),
/* harmony export */   getProviderById: () => (/* binding */ getProviderById),
/* harmony export */   populateModelDatalist: () => (/* binding */ populateModelDatalist),
/* harmony export */   populateProviderDropdown: () => (/* binding */ populateProviderDropdown),
/* harmony export */   restoreSettings: () => (/* binding */ restoreSettings),
/* harmony export */   saveSettings: () => (/* binding */ saveSettings),
/* harmony export */   setKeyStatus: () => (/* binding */ setKeyStatus),
/* harmony export */   setShowAboutModalHook: () => (/* binding */ setShowAboutModalHook),
/* harmony export */   setShowGuideModalHook: () => (/* binding */ setShowGuideModalHook),
/* harmony export */   setShowSetupGuideHook: () => (/* binding */ setShowSetupGuideHook)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./services/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./ui/constants.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./ui/state.ts");
/**
 * @module ui/settings
 * LLM provider settings: dropdown population, save/restore, key status,
 * and event binding for the settings panel.
 *
 * audit:no-op(SRP-2) — ~220 lines, single cohesive concern (provider
 * settings lifecycle). All functions share the same DOM fieldset and
 * localStorage save/restore flow.
 */




// ─── Forward declarations ───────────────────────────────────────────────────
let _showSetupGuide = null;
function setShowSetupGuideHook(fn) { _showSetupGuide = fn; }
let _showAboutModal = null;
function setShowAboutModalHook(fn) { _showAboutModal = fn; }
let _showGuideModal = null;
function setShowGuideModalHook(fn) { _showGuideModal = fn; }
// ─── Cost tier badge ────────────────────────────────────────────────────────
function costTierBadge(tier) {
    switch (tier) {
        case "free": return "\u2705 FREE";
        case "free-tier": return "\uD83C\uDD93 Free Tier";
        case "low-cost": return "\uD83D\uDCB2 Low Cost";
        case "paid": return "\uD83D\uDCB3 Paid";
        case "self-hosted": return "\uD83D\uDDA5\uFE0F Self-hosted";
        default: return "";
    }
}
// ─── Provider dropdown ──────────────────────────────────────────────────────
function populateProviderDropdown() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    els.providerSelect.innerHTML = "";
    for (const p of _services__WEBPACK_IMPORTED_MODULE_0__.LLM_PROVIDERS) {
        const opt = document.createElement("option");
        opt.value = p.id;
        const badge = costTierBadge(p.costTier);
        opt.textContent = badge ? `${p.label}  ${badge}` : p.label;
        if (p.id === "groq")
            opt.textContent += " \u2B50 Recommended";
        els.providerSelect.appendChild(opt);
    }
}
function getProviderById(id) {
    return _services__WEBPACK_IMPORTED_MODULE_0__.LLM_PROVIDERS.find((p) => p.id === id) ?? _services__WEBPACK_IMPORTED_MODULE_0__.LLM_PROVIDERS[0];
}
// ─── Restore / Apply ────────────────────────────────────────────────────────
function restoreSettings() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    const savedProvider = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_PROVIDER) ?? _services__WEBPACK_IMPORTED_MODULE_0__.LLM_PROVIDERS[0].id;
    const savedModel = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_MODEL) ?? "";
    const savedEndpoint = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_ENDPOINT) ?? "";
    const savedKey = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_API_KEY) ?? "";
    els.providerSelect.value = savedProvider;
    els.modelInput.value = savedModel;
    els.customEndpointInput.value = savedEndpoint;
    els.apiKeyInput.value = savedKey;
    applyProviderUI(getProviderById(savedProvider));
    if (savedKey) {
        setKeyStatus("Key loaded from storage.", false);
    }
    // Buy-limit reset notifications toggle (default: enabled).
    const savedLimitNotifs = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_LIMIT_RESET_NOTIFS);
    els.limitResetNotifsToggle.checked = savedLimitNotifs !== "false";
    els.limitResetNotifsToggle.addEventListener("change", () => {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_LIMIT_RESET_NOTIFS, String(els.limitResetNotifsToggle.checked));
    });
    // RS3 news context toggle (default: enabled).
    const savedNewsCtx = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_NEWS_CONTEXT);
    els.newsContextToggle.checked = savedNewsCtx !== "false";
    els.newsContextToggle.addEventListener("change", () => {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_NEWS_CONTEXT, String(els.newsContextToggle.checked));
    });
    // Advanced mode toggle (default: disabled).
    const savedAdvanced = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_ADVANCED_MODE) === "true";
    els.advancedModeToggle.checked = savedAdvanced;
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.setAdvancedMode)(savedAdvanced);
    if (savedAdvanced)
        document.body.dataset.advanced = "true";
    else
        delete document.body.dataset.advanced;
    els.advancedModeToggle.addEventListener("change", () => {
        const on = els.advancedModeToggle.checked;
        (0,_state__WEBPACK_IMPORTED_MODULE_3__.setAdvancedMode)(on);
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_ADVANCED_MODE, String(on));
        if (on)
            document.body.dataset.advanced = "true";
        else
            delete document.body.dataset.advanced;
    });
}
function applyProviderUI(provider) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    els.customEndpointGroup.classList.toggle("hidden", provider.id !== "custom");
    els.apiKeyInput.placeholder = provider.keyPlaceholder;
    els.modelInput.placeholder = provider.defaultModel || "(enter model name)";
    const badge = costTierBadge(provider.costTier);
    els.providerCostHint.textContent = badge ? `${badge} \u2014 ${provider.costNote}` : provider.costNote;
    els.providerCostHint.className = `provider-cost-hint tier-${provider.costTier}`;
    els.setupGuideBtn.classList.toggle("hidden", !provider.signupUrl);
    populateModelDatalist(provider);
}
function populateModelDatalist(provider) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    els.modelOptions.innerHTML = "";
    for (const m of provider.models) {
        const opt = document.createElement("option");
        opt.value = m.id;
        opt.label = m.recommended ? `\u2605 ${m.label} (recommended)` : m.label;
        els.modelOptions.appendChild(opt);
    }
}
// ─── Save / Status ──────────────────────────────────────────────────────────
function saveSettings() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    const providerId = els.providerSelect.value;
    const model = els.modelInput.value.trim();
    const endpoint = els.customEndpointInput.value.trim();
    const key = els.apiKeyInput.value.trim();
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_PROVIDER, providerId);
    if (model)
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_MODEL, model);
    else
        localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_MODEL);
    if (endpoint)
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_ENDPOINT, endpoint);
    else
        localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_ENDPOINT);
    if (key.length === 0) {
        localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_API_KEY);
        setKeyStatus("Settings saved \u2014 key cleared.", false);
    }
    else {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.LS_API_KEY, key);
        const provider = getProviderById(providerId);
        setKeyStatus(`Settings saved \u2713 (${provider.label})`, false);
    }
    // Invalidate cached LLM instance.
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.setLLM)(null);
}
function setKeyStatus(msg, isError) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    els.keyStatus.textContent = msg;
    els.keyStatus.classList.toggle("error", isError);
}
// ─── Event binding ──────────────────────────────────────────────────────────
function openSettings() {
    (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)().settingsBackdrop.classList.add("visible");
}
function closeSettings() {
    (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)().settingsBackdrop.classList.remove("visible");
}
function bindSettingsEvents() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_2__.getEls)();
    // Open / close modal
    els.settingsBtn.addEventListener("click", openSettings);
    els.settingsCloseBtn.addEventListener("click", closeSettings);
    els.settingsBackdrop.addEventListener("click", (e) => {
        if (e.target === els.settingsBackdrop)
            closeSettings();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && els.settingsBackdrop.classList.contains("visible")) {
            closeSettings();
        }
    });
    els.saveKeyBtn.addEventListener("click", saveSettings);
    els.apiKeyInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter")
            saveSettings();
    });
    els.modelInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter")
            saveSettings();
    });
    els.customEndpointInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter")
            saveSettings();
    });
    els.providerSelect.addEventListener("change", () => {
        const provider = getProviderById(els.providerSelect.value);
        applyProviderUI(provider);
        els.modelInput.value = "";
    });
    els.setupGuideBtn.addEventListener("click", () => _showSetupGuide?.());
    els.aboutBtn.addEventListener("click", () => _showAboutModal?.());
    els.guideBtn.addEventListener("click", () => _showGuideModal?.());
}


/***/ },

/***/ "./ui/state.ts"
/*!*********************!*\
  !*** ./ui/state.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveSearchFilters: () => (/* binding */ getActiveSearchFilters),
/* harmony export */   getAdvancedMode: () => (/* binding */ getAdvancedMode),
/* harmony export */   getAllCachedItems: () => (/* binding */ getAllCachedItems),
/* harmony export */   getAnalyzer: () => (/* binding */ getAnalyzer),
/* harmony export */   getCache: () => (/* binding */ getCache),
/* harmony export */   getCachedNatureRunePrice: () => (/* binding */ getCachedNatureRunePrice),
/* harmony export */   getCompactMode: () => (/* binding */ getCompactMode),
/* harmony export */   getCompletedFlipsSortAsc: () => (/* binding */ getCompletedFlipsSortAsc),
/* harmony export */   getCompletedFlipsSortCol: () => (/* binding */ getCompletedFlipsSortCol),
/* harmony export */   getCurrentView: () => (/* binding */ getCurrentView),
/* harmony export */   getGeCatalogue: () => (/* binding */ getGeCatalogue),
/* harmony export */   getIsBrowseAllActive: () => (/* binding */ getIsBrowseAllActive),
/* harmony export */   getIsSearchActive: () => (/* binding */ getIsSearchActive),
/* harmony export */   getLLM: () => (/* binding */ getLLM),
/* harmony export */   getLatestLLMContext: () => (/* binding */ getLatestLLMContext),
/* harmony export */   getLatestMarketSummary: () => (/* binding */ getLatestMarketSummary),
/* harmony export */   getLatestNewsContext: () => (/* binding */ getLatestNewsContext),
/* harmony export */   getLatestSearchResults: () => (/* binding */ getLatestSearchResults),
/* harmony export */   getLatestTopItems: () => (/* binding */ getLatestTopItems),
/* harmony export */   getNewsService: () => (/* binding */ getNewsService),
/* harmony export */   getPortfolio: () => (/* binding */ getPortfolio),
/* harmony export */   getPortfolioTimerId: () => (/* binding */ getPortfolioTimerId),
/* harmony export */   getSuppressAutocomplete: () => (/* binding */ getSuppressAutocomplete),
/* harmony export */   getUnfilteredSearchResults: () => (/* binding */ getUnfilteredSearchResults),
/* harmony export */   getWiki: () => (/* binding */ getWiki),
/* harmony export */   setAdvancedMode: () => (/* binding */ setAdvancedMode),
/* harmony export */   setAllCachedItems: () => (/* binding */ setAllCachedItems),
/* harmony export */   setAnalyzer: () => (/* binding */ setAnalyzer),
/* harmony export */   setCache: () => (/* binding */ setCache),
/* harmony export */   setCachedNatureRunePrice: () => (/* binding */ setCachedNatureRunePrice),
/* harmony export */   setCompactMode: () => (/* binding */ setCompactMode),
/* harmony export */   setCompletedFlipsSortAsc: () => (/* binding */ setCompletedFlipsSortAsc),
/* harmony export */   setCompletedFlipsSortCol: () => (/* binding */ setCompletedFlipsSortCol),
/* harmony export */   setCurrentView: () => (/* binding */ setCurrentView),
/* harmony export */   setGeCatalogue: () => (/* binding */ setGeCatalogue),
/* harmony export */   setIsBrowseAllActive: () => (/* binding */ setIsBrowseAllActive),
/* harmony export */   setIsSearchActive: () => (/* binding */ setIsSearchActive),
/* harmony export */   setLLM: () => (/* binding */ setLLM),
/* harmony export */   setLatestLLMContext: () => (/* binding */ setLatestLLMContext),
/* harmony export */   setLatestMarketSummary: () => (/* binding */ setLatestMarketSummary),
/* harmony export */   setLatestNewsContext: () => (/* binding */ setLatestNewsContext),
/* harmony export */   setLatestSearchResults: () => (/* binding */ setLatestSearchResults),
/* harmony export */   setLatestTopItems: () => (/* binding */ setLatestTopItems),
/* harmony export */   setNewsService: () => (/* binding */ setNewsService),
/* harmony export */   setPortfolio: () => (/* binding */ setPortfolio),
/* harmony export */   setPortfolioTimerId: () => (/* binding */ setPortfolioTimerId),
/* harmony export */   setSuppressAutocomplete: () => (/* binding */ setSuppressAutocomplete),
/* harmony export */   setUnfilteredSearchResults: () => (/* binding */ setUnfilteredSearchResults),
/* harmony export */   setWiki: () => (/* binding */ setWiki)
/* harmony export */ });
/**
 * @module ui/state
 * Centralised shared mutable state for the UI layer.
 * Each variable is exposed via explicit getters/setters so that modules
 * import only what they need and mutations remain traceable.
 */
// ─── Service instances (initialised once in initUI) ─────────────────────────
let cache;
function getCache() { return cache; }
function setCache(c) { cache = c; }
let analyzer;
function getAnalyzer() { return analyzer; }
function setAnalyzer(a) { analyzer = a; }
let wiki;
function getWiki() { return wiki; }
function setWiki(w) { wiki = w; }
let portfolio;
function getPortfolio() { return portfolio; }
function setPortfolio(p) { portfolio = p; }
let llm = null;
function getLLM() { return llm; }
function setLLM(l) { llm = l; }
let newsService = null;
function getNewsService() { return newsService; }
function setNewsService(n) { newsService = n; }
// ─── Market data ────────────────────────────────────────────────────────────
let latestMarketSummary = "";
function getLatestMarketSummary() { return latestMarketSummary; }
function setLatestMarketSummary(s) { latestMarketSummary = s; }
let latestLLMContext = "";
function getLatestLLMContext() { return latestLLMContext; }
function setLatestLLMContext(s) { latestLLMContext = s; }
let latestNewsContext = "";
function getLatestNewsContext() { return latestNewsContext; }
function setLatestNewsContext(s) { latestNewsContext = s; }
let latestTopItems = [];
function getLatestTopItems() { return latestTopItems; }
function setLatestTopItems(items) { latestTopItems = items; }
let latestSearchResults = [];
function getLatestSearchResults() { return latestSearchResults; }
function setLatestSearchResults(items) { latestSearchResults = items; }
let unfilteredSearchResults = [];
function getUnfilteredSearchResults() { return unfilteredSearchResults; }
function setUnfilteredSearchResults(items) { unfilteredSearchResults = items; }
const activeSearchFilters = new Set();
function getActiveSearchFilters() { return activeSearchFilters; }
let cachedNatureRunePrice = 500;
function getCachedNatureRunePrice() { return cachedNatureRunePrice; }
function setCachedNatureRunePrice(p) { cachedNatureRunePrice = p; }
// ─── UI state ───────────────────────────────────────────────────────────────
let currentView = "list";
function getCurrentView() { return currentView; }
function setCurrentView(v) { currentView = v; }
let compactMode = false;
function getCompactMode() { return compactMode; }
function setCompactMode(v) { compactMode = v; }
let advancedMode = false;
function getAdvancedMode() { return advancedMode; }
function setAdvancedMode(v) { advancedMode = v; }
let portfolioTimerId = null;
function getPortfolioTimerId() { return portfolioTimerId; }
function setPortfolioTimerId(id) { portfolioTimerId = id; }
let allCachedItems = [];
function getAllCachedItems() { return allCachedItems; }
function setAllCachedItems(items) { allCachedItems = items; }
let geCatalogue = [];
function getGeCatalogue() { return geCatalogue; }
function setGeCatalogue(cat) { geCatalogue = cat; }
// ─── Search state ───────────────────────────────────────────────────────────
let isSearchActive = false;
function getIsSearchActive() { return isSearchActive; }
function setIsSearchActive(v) { isSearchActive = v; }
let isBrowseAllActive = false;
function getIsBrowseAllActive() { return isBrowseAllActive; }
function setIsBrowseAllActive(v) { isBrowseAllActive = v; }
// ─── Completed-flips sort state ─────────────────────────────────────────────
let completedFlipsSortCol = "date";
function getCompletedFlipsSortCol() { return completedFlipsSortCol; }
function setCompletedFlipsSortCol(c) { completedFlipsSortCol = c; }
let completedFlipsSortAsc = false;
function getCompletedFlipsSortAsc() { return completedFlipsSortAsc; }
function setCompletedFlipsSortAsc(v) { completedFlipsSortAsc = v; }
// ─── Portfolio autocomplete ─────────────────────────────────────────────────
let suppressAutocomplete = false;
function getSuppressAutocomplete() { return suppressAutocomplete; }
function setSuppressAutocomplete(v) { suppressAutocomplete = v; }


/***/ },

/***/ "./ui/tabManager.ts"
/*!**************************!*\
  !*** ./ui/tabManager.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindTabNavigation: () => (/* binding */ bindTabNavigation),
/* harmony export */   switchTab: () => (/* binding */ switchTab)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./ui/constants.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domRefs */ "./ui/domRefs.ts");
/**
 * @module ui/tabManager
 * Tab navigation management (market / advisor / portfolio).
 */


function switchTab(tab) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    els.tabMarketBtn.classList.toggle("active", tab === "market");
    els.tabAdvisorBtn.classList.toggle("active", tab === "advisor");
    els.tabPortfolioBtn.classList.toggle("active", tab === "portfolio");
    els.tabMarketBtn.setAttribute("aria-selected", String(tab === "market"));
    els.tabAdvisorBtn.setAttribute("aria-selected", String(tab === "advisor"));
    els.tabPortfolioBtn.setAttribute("aria-selected", String(tab === "portfolio"));
    els.marketView.classList.toggle("active-tab", tab === "market");
    els.advisorView.classList.toggle("active-tab", tab === "advisor");
    els.portfolioView.classList.toggle("active-tab", tab === "portfolio");
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_ACTIVE_TAB, tab);
}
function bindTabNavigation() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    els.tabMarketBtn.addEventListener("click", () => switchTab("market"));
    els.tabAdvisorBtn.addEventListener("click", () => switchTab("advisor"));
    els.tabPortfolioBtn.addEventListener("click", () => switchTab("portfolio"));
    const saved = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_ACTIVE_TAB);
    if (saved === "advisor" || saved === "portfolio")
        switchTab(saved);
}


/***/ },

/***/ "./ui/theme/theme.ts"
/*!***************************!*\
  !*** ./ui/theme/theme.ts ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyColorway: () => (/* binding */ applyColorway),
/* harmony export */   applyContrast: () => (/* binding */ applyContrast),
/* harmony export */   applyMode: () => (/* binding */ applyMode),
/* harmony export */   applyStyle: () => (/* binding */ applyStyle),
/* harmony export */   applyThemeBatch: () => (/* binding */ applyThemeBatch),
/* harmony export */   bindTheme: () => (/* binding */ bindTheme),
/* harmony export */   forceStyleInvalidation: () => (/* binding */ forceStyleInvalidation)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./ui/constants.ts");
/* harmony import */ var _domRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domRefs */ "./ui/domRefs.ts");
/* harmony import */ var _chart_interactiveChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart/interactiveChart */ "./ui/chart/interactiveChart.ts");
/* harmony import */ var _wcagCompliance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wcagCompliance */ "./ui/theme/wcagCompliance.ts");
/**
 * @module ui/theme
 * Theme application: Mode × Style × Colorway × Contrast, migration helpers,
 * style invalidation, and event binding for appearance controls.
 */




// ─── Migration helpers ──────────────────────────────────────────────────────
function migrateThemeKey() {
    const legacy = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_THEME);
    if (!legacy)
        return;
    const STYLE_MAP = {
        classic: "basic", osrs: "basic", "rs3-modern": "basic",
        glass: "glass", neumorphism: "neumorphism", minimalism: "basic", skeuomorphism: "skeuomorphism",
    };
    if (!localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_STYLE)) {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_STYLE, STYLE_MAP[legacy] ?? "basic");
    }
    if (!localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_COLORWAY)) {
        const COLORWAY_TMP = {
            classic: "default", osrs: "classic", "rs3-modern": "rs3-modern",
            glass: "default", neumorphism: "default", minimalism: "light", skeuomorphism: "default",
        };
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_COLORWAY, COLORWAY_TMP[legacy] ?? "default");
    }
    localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_THEME);
}
function migrateColorwayToMode() {
    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_MODE))
        return;
    const oldColorway = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_COLORWAY);
    if (!oldColorway)
        return;
    const mapping = _constants__WEBPACK_IMPORTED_MODULE_0__.LEGACY_COLORWAY_MAP[oldColorway];
    if (mapping) {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_MODE, mapping.mode);
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_COLORWAY, mapping.colorway);
    }
    else {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_MODE, "dark");
    }
}
function migrateColorwayRename() {
    if (localStorage.getItem("ger:colorway-v2"))
        return;
    const RENAME_MAP = {
        classic: "default",
        osrs: "classic",
    };
    const current = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_COLORWAY);
    if (current && RENAME_MAP[current]) {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_COLORWAY, RENAME_MAP[current]);
    }
    localStorage.setItem("ger:colorway-v2", "1");
}
// ─── Style invalidation ─────────────────────────────────────────────────────
function forceStyleInvalidation() {
    const ds = document.body.dataset;
    const currentMode = ds.mode ?? "dark";
    const oppositeMode = currentMode === "dark" ? "light" : "dark";
    ds.mode = oppositeMode;
    void getComputedStyle(document.body).getPropertyValue("--bg-main");
    ds.mode = currentMode;
    void getComputedStyle(document.body).getPropertyValue("--bg-main");
}
// ─── Apply helpers ──────────────────────────────────────────────────────────
function applyMode(mode) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    document.body.dataset.mode = mode;
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_MODE, mode);
    els.modeDarkBtn.classList.toggle("active", mode === "dark");
    els.modeLightBtn.classList.toggle("active", mode === "light");
    forceStyleInvalidation();
    (0,_wcagCompliance__WEBPACK_IMPORTED_MODULE_3__.ensureContrastCompliance)();
}
function applyStyle(style) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    document.body.dataset.style = style;
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_STYLE, style);
    els.styleSelect.value = style;
    (0,_wcagCompliance__WEBPACK_IMPORTED_MODULE_3__.ensureContrastCompliance)();
}
function applyColorway(colorway) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    document.body.dataset.colorway = colorway;
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_COLORWAY, colorway);
    els.colorwaySelect.value = colorway;
    forceStyleInvalidation();
    (0,_wcagCompliance__WEBPACK_IMPORTED_MODULE_3__.ensureContrastCompliance)();
}
function applyContrast(contrast) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    document.body.dataset.contrast = contrast;
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_CONTRAST, contrast);
    els.contrastSelect.value = contrast;
    forceStyleInvalidation();
    (0,_wcagCompliance__WEBPACK_IMPORTED_MODULE_3__.ensureContrastCompliance)();
}
function applyThemeBatch(mode, style, colorway, contrast) {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    const ds = document.body.dataset;
    ds.mode = mode;
    ds.style = style;
    ds.colorway = colorway;
    ds.contrast = contrast;
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_MODE, mode);
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_STYLE, style);
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_COLORWAY, colorway);
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_CONTRAST, contrast);
    els.modeDarkBtn.classList.toggle("active", mode === "dark");
    els.modeLightBtn.classList.toggle("active", mode === "light");
    els.styleSelect.value = style;
    els.colorwaySelect.value = colorway;
    els.contrastSelect.value = contrast;
    forceStyleInvalidation();
    (0,_wcagCompliance__WEBPACK_IMPORTED_MODULE_3__.ensureContrastCompliance)();
    for (const chart of (0,_chart_interactiveChart__WEBPACK_IMPORTED_MODULE_2__.getActiveCharts)().values())
        chart.redraw();
}
// ─── Bind functions ─────────────────────────────────────────────────────────
function bindTheme() {
    const els = (0,_domRefs__WEBPACK_IMPORTED_MODULE_1__.getEls)();
    migrateThemeKey();
    migrateColorwayToMode();
    migrateColorwayRename();
    const savedMode = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_MODE) ?? "dark";
    const savedStyle = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_STYLE) ?? "basic";
    const savedColorway = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_COLORWAY) ?? "default";
    const savedContrast = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_CONTRAST) ?? "default";
    applyThemeBatch(savedMode, savedStyle, savedColorway, savedContrast);
    els.modeDarkBtn.addEventListener("click", () => applyMode("dark"));
    els.modeLightBtn.addEventListener("click", () => applyMode("light"));
    els.styleSelect.addEventListener("change", () => {
        applyStyle(els.styleSelect.value);
    });
    els.colorwaySelect.addEventListener("change", () => {
        applyColorway(els.colorwaySelect.value);
    });
    els.contrastSelect.addEventListener("change", () => {
        applyContrast(els.contrastSelect.value);
    });
    els.contrastAutoToggle.checked = (0,_wcagCompliance__WEBPACK_IMPORTED_MODULE_3__.isContrastAutoEnabled)();
    els.contrastAutoToggle.addEventListener("change", () => {
        (0,_wcagCompliance__WEBPACK_IMPORTED_MODULE_3__.setContrastAutoEnabled)(els.contrastAutoToggle.checked);
        (0,_wcagCompliance__WEBPACK_IMPORTED_MODULE_3__.ensureContrastCompliance)();
    });
}


/***/ },

/***/ "./ui/theme/wcagColorHelpers.ts"
/*!**************************************!*\
  !*** ./ui/theme/wcagColorHelpers.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blendToward: () => (/* binding */ blendToward),
/* harmony export */   contrastRatio: () => (/* binding */ contrastRatio),
/* harmony export */   parseCssColor: () => (/* binding */ parseCssColor),
/* harmony export */   relativeLuminance: () => (/* binding */ relativeLuminance)
/* harmony export */ });
/**
 * @module ui/wcagColorHelpers
 * Pure WCAG 2.1 colour-math utilities: parsing, luminance, contrast ratio,
 * and color blending. No DOM access — all inputs/outputs are plain data.
 */
/** Parse a CSS color string (rgb/rgba or hex) into an [R, G, B] tuple (0–255). */
function parseCssColor(raw) {
    const trimmed = raw.trim();
    const rgbMatch = trimmed.match(/^rgba?\(\s*(\d+(?:\.\d+)?)[,\s]+(\d+(?:\.\d+)?)[,\s]+(\d+(?:\.\d+)?)/);
    if (rgbMatch) {
        return [
            Math.round(Number(rgbMatch[1])),
            Math.round(Number(rgbMatch[2])),
            Math.round(Number(rgbMatch[3])),
        ];
    }
    const hexMatch = trimmed.match(/^#([0-9a-f]{3,8})$/i);
    if (hexMatch) {
        let hex = hexMatch[1];
        if (hex.length === 3 || hex.length === 4) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        return [
            parseInt(hex.slice(0, 2), 16),
            parseInt(hex.slice(2, 4), 16),
            parseInt(hex.slice(4, 6), 16),
        ];
    }
    return [0, 0, 0];
}
/** sRGB gamma linearization for a single 0–255 channel. */
function linearize(c8) {
    const c = c8 / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}
/** WCAG 2.1 relative luminance of an [R, G, B] triple. */
function relativeLuminance([r, g, b]) {
    return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}
/** WCAG contrast ratio between two [R, G, B] colours. */
function contrastRatio(a, b) {
    const lA = relativeLuminance(a);
    const lB = relativeLuminance(b);
    const lighter = Math.max(lA, lB);
    const darker = Math.min(lA, lB);
    return (lighter + 0.05) / (darker + 0.05);
}
/** Linearly blend `color` toward `target` by `amount` (0–1). */
function blendToward(color, target, amount) {
    const t = Math.max(0, Math.min(1, amount));
    return [
        Math.round(color[0] + (target[0] - color[0]) * t),
        Math.round(color[1] + (target[1] - color[1]) * t),
        Math.round(color[2] + (target[2] - color[2]) * t),
    ];
}


/***/ },

/***/ "./ui/theme/wcagCompliance.ts"
/*!************************************!*\
  !*** ./ui/theme/wcagCompliance.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ensureContrastCompliance: () => (/* binding */ ensureContrastCompliance),
/* harmony export */   isContrastAutoEnabled: () => (/* binding */ isContrastAutoEnabled),
/* harmony export */   setContrastAutoEnabled: () => (/* binding */ setContrastAutoEnabled)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./ui/constants.ts");
/* harmony import */ var _wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wcagColorHelpers */ "./ui/theme/wcagColorHelpers.ts");
/**
 * @module ui/wcagCompliance
 * WCAG AA contrast auto-correction engine.
 *
 * Resolves effective background colour (including glassmorphism compositing),
 * binary-searches for compliant foreground colours when contrast is below 4.5:1,
 * and nudges neumorphism shadows for visibility.
 */


// ─── Contrast auto-correction state ─────────────────────────────────────────
let contrastAutoEnabled = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_CONTRAST_AUTO) !== "false";
function isContrastAutoEnabled() {
    return contrastAutoEnabled;
}
function setContrastAutoEnabled(enabled) {
    contrastAutoEnabled = enabled;
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.LS_CONTRAST_AUTO, enabled ? "true" : "false");
}
// ─── WCAG-dependent DOM helpers ─────────────────────────────────────────────
// audit:no-op — these three private helpers are tightly coupled to
// ensureContrastCompliance() and not reusable outside WCAG correction.
// Extracting them would scatter a single algorithm across files.
function resolveGlassBackground() {
    const cs = getComputedStyle(document.body);
    const bodyVia = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.parseCssColor)(cs.getPropertyValue("--glass-body-via"));
    const panelRaw = cs.getPropertyValue("--glass-panel").trim();
    const alphaMatch = panelRaw.match(/rgba?\(\s*(\d+(?:\.\d+)?)[,\s]+(\d+(?:\.\d+)?)[,\s]+(\d+(?:\.\d+)?)[,\s/]+(\d*\.?\d+)/);
    if (!alphaMatch)
        return bodyVia;
    const pr = Math.round(Number(alphaMatch[1]));
    const pg = Math.round(Number(alphaMatch[2]));
    const pb = Math.round(Number(alphaMatch[3]));
    const pa = Number(alphaMatch[4]);
    return [
        Math.round(pr * pa + bodyVia[0] * (1 - pa)),
        Math.round(pg * pa + bodyVia[1] * (1 - pa)),
        Math.round(pb * pa + bodyVia[2] * (1 - pa)),
    ];
}
function ensureNeuShadowVisibility() {
    const cs = getComputedStyle(document.body);
    const bgMain = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.parseCssColor)(cs.getPropertyValue("--bg-main"));
    const neuDark = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.parseCssColor)(cs.getPropertyValue("--neu-shadow-dark"));
    const neuLight = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.parseCssColor)(cs.getPropertyValue("--neu-shadow-light"));
    const bgL = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.relativeLuminance)(bgMain);
    const darkL = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.relativeLuminance)(neuDark);
    const lightL = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.relativeLuminance)(neuLight);
    const MIN_DELTA = 0.03;
    const bs = document.body.style;
    if (Math.abs(bgL - darkL) < MIN_DELTA) {
        const nudged = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.blendToward)(neuDark, [0, 0, 0], 0.35);
        bs.setProperty("--neu-shadow-dark", `rgb(${nudged[0]},${nudged[1]},${nudged[2]})`);
    }
    if (Math.abs(lightL - bgL) < MIN_DELTA) {
        const nudged = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.blendToward)(neuLight, [255, 255, 255], 0.25);
        bs.setProperty("--neu-shadow-light", `rgb(${nudged[0]},${nudged[1]},${nudged[2]})`);
    }
}
function updateContrastDisplay(ratio) {
    const badge = document.getElementById("contrast-ratio-display");
    if (!badge)
        return;
    const rounded = ratio.toFixed(2);
    const passes = ratio >= _constants__WEBPACK_IMPORTED_MODULE_0__.WCAG_AA_RATIO;
    badge.textContent = `Contrast: ${rounded}:1 ${passes ? "\u2705 AA" : "\u26A0\uFE0F Fail"}`;
    badge.style.color = passes ? "var(--accent-green)" : "var(--accent-red)";
}
function ensureContrastCompliance() {
    const bs = document.body.style;
    bs.removeProperty("--text-main");
    bs.removeProperty("--text-bright");
    for (const token of _constants__WEBPACK_IMPORTED_MODULE_0__.CONTRAST_CHECK_TOKENS)
        bs.removeProperty(token);
    bs.removeProperty("--neu-shadow-dark");
    bs.removeProperty("--neu-shadow-light");
    void getComputedStyle(document.body).getPropertyValue("--text-main");
    const cs = getComputedStyle(document.body);
    const style = (document.body.dataset.style ?? "basic");
    const mode = (document.body.dataset.mode ?? "dark");
    let bgRgb;
    if (style === "glass") {
        bgRgb = resolveGlassBackground();
    }
    else {
        bgRgb = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.parseCssColor)(cs.getPropertyValue("--bg-main"));
    }
    const textMainRgb = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.parseCssColor)(cs.getPropertyValue("--text-main"));
    const textBrightRgb = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.parseCssColor)(cs.getPropertyValue("--text-bright"));
    const ratio = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.contrastRatio)(textMainRgb, bgRgb);
    const ratioBright = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.contrastRatio)(textBrightRgb, bgRgb);
    updateContrastDisplay(ratio);
    if (!contrastAutoEnabled)
        return;
    const target = mode === "dark" ? [255, 255, 255] : [0, 0, 0];
    // audit:no-op(DRY) — the binary-search loop below appears 3× (--text-main,
    // --text-bright, CONTRAST_CHECK_TOKENS). Extracting a helper would require
    // passing bg, target, token name, and a setProperty callback — the call-site
    // would be as long as the loop itself. Kept inline for readability.
    if (ratio < _constants__WEBPACK_IMPORTED_MODULE_0__.WCAG_AA_RATIO) {
        let lo = 0;
        let hi = 1;
        let corrected = textMainRgb;
        for (let i = 0; i < 16; i++) {
            const mid = (lo + hi) / 2;
            const candidate = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.blendToward)(textMainRgb, target, mid);
            if ((0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.contrastRatio)(candidate, bgRgb) >= _constants__WEBPACK_IMPORTED_MODULE_0__.WCAG_AA_RATIO) {
                corrected = candidate;
                hi = mid;
            }
            else {
                lo = mid;
            }
        }
        bs.setProperty("--text-main", `rgb(${corrected[0]},${corrected[1]},${corrected[2]})`);
        updateContrastDisplay((0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.contrastRatio)(corrected, bgRgb));
    }
    if (ratioBright < _constants__WEBPACK_IMPORTED_MODULE_0__.WCAG_AA_RATIO) {
        let lo = 0;
        let hi = 1;
        let corrected = textBrightRgb;
        for (let i = 0; i < 16; i++) {
            const mid = (lo + hi) / 2;
            const candidate = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.blendToward)(textBrightRgb, target, mid);
            if ((0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.contrastRatio)(candidate, bgRgb) >= _constants__WEBPACK_IMPORTED_MODULE_0__.WCAG_AA_RATIO) {
                corrected = candidate;
                hi = mid;
            }
            else {
                lo = mid;
            }
        }
        bs.setProperty("--text-bright", `rgb(${corrected[0]},${corrected[1]},${corrected[2]})`);
    }
    for (const token of _constants__WEBPACK_IMPORTED_MODULE_0__.CONTRAST_CHECK_TOKENS) {
        const fg = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.parseCssColor)(cs.getPropertyValue(token));
        if ((0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.contrastRatio)(fg, bgRgb) < _constants__WEBPACK_IMPORTED_MODULE_0__.WCAG_AA_RATIO) {
            let lo = 0;
            let hi = 1;
            let corrected = fg;
            for (let i = 0; i < 16; i++) {
                const mid = (lo + hi) / 2;
                const candidate = (0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.blendToward)(fg, target, mid);
                if ((0,_wcagColorHelpers__WEBPACK_IMPORTED_MODULE_1__.contrastRatio)(candidate, bgRgb) >= _constants__WEBPACK_IMPORTED_MODULE_0__.WCAG_AA_RATIO) {
                    corrected = candidate;
                    hi = mid;
                }
                else {
                    lo = mid;
                }
            }
            bs.setProperty(token, `rgb(${corrected[0]},${corrected[1]},${corrected[2]})`);
        }
    }
    if (style === "neumorphism") {
        ensureNeuShadowVisibility();
    }
}


/***/ },

/***/ "./ui/trendStats.ts"
/*!**************************!*\
  !*** ./ui/trendStats.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildGraphStatsHtml: () => (/* binding */ buildGraphStatsHtml),
/* harmony export */   computeGraphTrendStats: () => (/* binding */ computeGraphTrendStats)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./services/index.ts");
/**
 * @module ui/trendStats
 * Graph trend statistics: compute and render stat cards for price history charts.
 */

const STAT_TIPS = {
    "Trend": "Overall price direction over the selected time window. Uptrend (>+5%), Downtrend (>\u22125%), or Stable.",
    "Change": "Absolute gp change and percentage change between the oldest and most recent price in the range.",
    "Current Price": "The latest mid-price reported by the Grand Exchange API.",
    "High": "Highest recorded daily price within the selected time window.",
    "Low": "Lowest recorded daily price within the selected time window.",
    "Volatility": "Price range as a percentage of the lowest price \u2014 higher values mean wider swings and more risk.",
    "Data Points": "Number of daily price snapshots available in the selected window. More points = more reliable trend data.",
};
/** Build a single stat-card HTML string with a tooltip `title` attribute. */
function statCardHtml(cls, label, value, tipKey, style) {
    const labelCls = cls === "analytics-stat-card" ? "analytics-stat-label" : "graph-stat-label";
    const valueCls = cls === "analytics-stat-card" ? "analytics-stat-value" : "graph-stat-value";
    const tip = STAT_TIPS[tipKey] ?? "";
    const styleAttr = style ? ` style="${style}"` : "";
    return (`<div class="${cls}" title="${tip}">` +
        `<span class="${labelCls}">${label}</span>` +
        `<span class="${valueCls}"${styleAttr}>${value}</span>` +
        `</div>`);
}
/** Compute trend statistics from an array of historical prices, ending at the current price. */
function computeGraphTrendStats(hist, currentPrice) {
    const hasData = hist.length >= 2;
    const oldestPrice = hasData ? hist[0] : currentPrice;
    const highPrice = hasData ? Math.max(...hist) : currentPrice;
    const lowPrice = hasData ? Math.min(...hist) : currentPrice;
    const pctChange = oldestPrice > 0 ? ((currentPrice - oldestPrice) / oldestPrice) * 100 : 0;
    const absChange = currentPrice - oldestPrice;
    const volatility = hasData ? ((highPrice - lowPrice) / lowPrice) * 100 : 0;
    const trendLabel = pctChange < -5 ? "Downtrend" : pctChange > 5 ? "Uptrend" : "Stable";
    const trendColour = trendLabel === "Uptrend" ? "var(--accent-green-bright, #4ec9b0)"
        : trendLabel === "Downtrend" ? "var(--accent-red, #f44747)" : "var(--text-muted, #888)";
    const trendIcon = trendLabel === "Uptrend" ? "\uD83D\uDCC8" : trendLabel === "Downtrend" ? "\u26A0\uFE0F" : "\u27A1\uFE0F";
    return {
        trendLabel,
        trendColour,
        trendIcon,
        pctChange,
        absChange,
        currentPrice,
        highPrice,
        lowPrice,
        volatility,
        dataPoints: hist.length,
    };
}
/**
 * Build the stat card HTML for chart trend stats.
 * @param stats    - Pre-computed trend statistics.
 * @param range    - Number of days for the range label (e.g. 7, 30, 90).
 * @param cssClass - CSS class for each stat card (e.g. "graph-stat-row" or "analytics-stat-card").
 */
function buildGraphStatsHtml(stats, range, cssClass) {
    return (statCardHtml(cssClass, `${range}-Day Trend`, `${stats.trendIcon} ${stats.trendLabel}`, "Trend", `color:${stats.trendColour}`) +
        statCardHtml(cssClass, "Change", `${stats.absChange >= 0 ? "+" : ""}${(0,_services__WEBPACK_IMPORTED_MODULE_0__.formatGp)(stats.absChange)} gp (${stats.pctChange >= 0 ? "+" : ""}${stats.pctChange.toFixed(1)}%)`, "Change", `color:${stats.trendColour}`) +
        statCardHtml(cssClass, "Current Price", `${stats.currentPrice.toLocaleString("en-US")} gp`, "Current Price") +
        statCardHtml(cssClass, `${range}-Day High`, `${stats.highPrice.toLocaleString("en-US")} gp`, "High") +
        statCardHtml(cssClass, `${range}-Day Low`, `${stats.lowPrice.toLocaleString("en-US")} gp`, "Low") +
        statCardHtml(cssClass, "Volatility", `${stats.volatility.toFixed(1)}%`, "Volatility") +
        statCardHtml(cssClass, "Data Points", `${stats.dataPoints} day${stats.dataPoints !== 1 ? "s" : ""}`, "Data Points"));
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./services/index.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./ui/index.ts");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/main.css */ "./css/main.css");
/**
 * @module index
 * Application entry point.
 *
 * Responsibilities (in order):
 *  1. Import static assets so Webpack emits them.
 *  2. Import the stylesheet (processed by style-loader → injected at runtime).
 *  3. Detect the Alt1 environment and show the appropriate status banner.
 *  4. Run the data-ingest pipeline (fetch + cache).
 *  5. Bootstrap the UI (market panel, settings, chat).
 */


// ── Static asset imports (Webpack asset/resource) ───────────────────────────


// ── Stylesheet (Webpack css-loader resolves @imports → style-loader injects) ─

// ── Early theme restoration ─────────────────────────────────────────────────
// Theme attributes (data-mode, data-style, data-colorway, data-contrast) are
// now set by an inline <script> in index.html that runs BEFORE the webpack
// bundle loads. This ensures body[data-mode="light"][data-colorway="..."]
// selectors match on the *first* style computation (when style-loader injects
// CSS), preventing Chrome from caching stale dark :root values.
//
// The IIFE that was here previously ran too late — style-loader had already
// injected CSS and Chrome had already computed/cached dark :root defaults.
// ── Alt1 environment detection ──────────────────────────────────────────────
const alt1Status = document.getElementById("alt1-status");
if (window.alt1) {
    alt1.identifyAppUrl("./appconfig.json");
}
else if (alt1Status) {
    const addAppUrl = `alt1://addapp/${new URL("./appconfig.json", document.location.href).href}`;
    alt1Status.innerHTML =
        `Alt1 not detected — <a href="${addAppUrl}">click here</a> to add this app.`;
}
// ── Boot sequence ───────────────────────────────────────────────────────────
// Startup loading overlay – March 2026
const startupOverlay = document.getElementById("startup-overlay");
const startupStatus = document.getElementById("startup-status");
/** Update the startup overlay status text. */
function setStartupStatus(msg) {
    if (startupStatus) {
        startupStatus.textContent = msg;
    }
}
/** Fade out and remove the startup overlay. */
function dismissOverlay() {
    if (!startupOverlay)
        return;
    startupOverlay.classList.add("fade-out");
    startupOverlay.addEventListener("transitionend", () => {
        startupOverlay.remove();
    }, { once: true });
    // Safety fallback in case transitionend doesn't fire.
    setTimeout(() => { startupOverlay.remove(); }, 600);
}
(async () => {
    try {
        // Load baseline data (or seed fallback) into IndexedDB cache.
        setStartupStatus("Loading market data\u2026");
        await (0,_services__WEBPACK_IMPORTED_MODULE_0__.initDataPipeline)();
        // Wire services → DOM and render the interface.
        setStartupStatus("Preparing interface\u2026");
        await (0,_ui__WEBPACK_IMPORTED_MODULE_1__.initUI)();
        console.log("[GE Analyzer] Startup complete.");
        dismissOverlay();
        // Show disclaimer modal (blocks interaction until acknowledged).
        await (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showDisclaimer)();
    }
    catch (err) {
        console.error("[GE Analyzer] Startup failed:", err);
        setStartupStatus("Startup failed \u2014 see console for details.");
        alt1Status?.insertAdjacentHTML("beforeend", `<div style="color:var(--accent-red);margin-top:4px">Startup error \u2014 see console.</div>`);
    }
})();

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});