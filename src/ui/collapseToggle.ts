/**
 * @module ui/collapseToggle
 * Shared collapse/expand toggle for collapsible section headers.
 */

export interface CollapseToggleOptions {
  /** The button element that shows ▸ / ▾. */
  collapseBtn: HTMLElement;
  /** The container element(s) to show/hide. */
  targets: HTMLElement[];
  /** Optional clickable header bar — clicking anywhere on it toggles collapse. */
  headerBar?: HTMLElement;
  /** Optional localStorage key to persist the collapsed state. */
  storageKey?: string;
  /** Additional interactive children that should stopPropagation. */
  stopPropagationEls?: HTMLElement[];
  /** Extra callback fired after each toggle (receives the new `collapsed` state). */
  onToggle?: (collapsed: boolean) => void;
}

/**
 * Wire a standard collapse toggle on a section.
 * Returns a getter for the current collapsed state.
 */
export function bindCollapseToggle(opts: CollapseToggleOptions): () => boolean {
  let collapsed = opts.storageKey
    ? localStorage.getItem(opts.storageKey) === "true"
    : false;

  const apply = () => {
    opts.collapseBtn.textContent = collapsed ? "\u25B8" : "\u25BE";
    for (const el of opts.targets) el.style.display = collapsed ? "none" : "";
    if (opts.storageKey) localStorage.setItem(opts.storageKey, String(collapsed));
    opts.onToggle?.(collapsed);
  };

  const toggle = () => { collapsed = !collapsed; apply(); };

  opts.collapseBtn.addEventListener("click", (e) => { e.stopPropagation(); toggle(); });
  opts.headerBar?.addEventListener("click", toggle);
  for (const el of opts.stopPropagationEls ?? []) {
    el.addEventListener("click", (e) => e.stopPropagation());
  }

  // Apply initial state when restoring from localStorage
  if (collapsed) apply();

  return () => collapsed;
}
