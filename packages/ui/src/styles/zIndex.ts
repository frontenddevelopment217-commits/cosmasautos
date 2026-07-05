/**
 * @fileoverview Z-index design tokens.
 *
 * Provides semantic layering tokens for common UI layers such as dropdowns,
 * modals, popovers, and toasts.
 */

/**
 * Semantic z-index layer tokens.
 */
export const zIndex = {
  base: 0,
  dropdown: 50,
  sticky: 60,
  overlay: 70,
  modal: 80,
  popover: 75,
  tooltip: 90,
  toast: 100,
} as const;
