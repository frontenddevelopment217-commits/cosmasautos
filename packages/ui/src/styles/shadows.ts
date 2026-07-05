/**
 * @fileoverview Shadow / elevation design tokens.
 *
 * Shadows are exposed as reusable elevation levels intended for consistent
 * depth across components (cards, popovers, modals, etc.).
 */

/**
 * Elevation shadow tokens.
 *
 * Values are CSS-ready box-shadow strings.
 */
export const shadows = {
  none: 'none',
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.08)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.12)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.14)',
} as const;
