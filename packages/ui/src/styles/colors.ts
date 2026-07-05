/**
 * @fileoverview Semantic color design tokens.
 *
 * These tokens are intended for use by UI components (e.g. buttons, inputs, surfaces)
 * to reference stable semantic roles instead of arbitrary color values.
 */

/**
 * Semantic colors for the design system.
 *
 * Notes:
 * - Values are CSS-ready strings so consumers can directly use them.
 * - This set includes common semantic roles (primary, background, text, etc.).
 */
export const colors = {
  /** Brand primary actions and emphasis. */
  primary: {
    /** Solid primary base. */
    base: '#2563EB',
    /** Primary hover. */
    hover: '#1D4ED8',
    /** Primary active/pressed. */
    active: '#1E40AF',
    /** Primary text color on solid backgrounds. */
    onBase: '#FFFFFF',
  },

  /** Secondary actions (less prominent than primary). */
  secondary: {
    base: '#4F46E5',
    hover: '#4338CA',
    active: '#3730A3',
    onBase: '#FFFFFF',
  },

  /** Success state semantics. */
  success: {
    base: '#16A34A',
    hover: '#15803D',
    active: '#166534',
    onBase: '#FFFFFF',
  },

  /** Warning state semantics. */
  warning: {
    base: '#F59E0B',
    hover: '#D97706',
    active: '#B45309',
    onBase: '#111827',
  },

  /** Danger state semantics. */
  danger: {
    base: '#DC2626',
    hover: '#B91C1C',
    active: '#991B1B',
    onBase: '#FFFFFF',
  },

  /** Surface/background colors for cards/panels. */
  surface: {
    /** Default surface background. */
    base: '#FFFFFF',
    /** Elevated surface (e.g. dropdown, modal background). */
    elevated: '#F9FAFB',
    /** Muted surface used for subtle blocks. */
    muted: '#F3F4F6',
    /** Divider line color. */
    border: '#E5E7EB',
    /** Text color on surfaces. */
    onBase: '#111827',
  },

  /** Global page background semantics. */
  background: {
    base: '#F9FAFB',
    elevated: '#FFFFFF',
  },

  /** Text semantics. */
  text: {
    primary: '#111827',
    secondary: '#4B5563',
    muted: '#6B7280',
    inverse: '#FFFFFF',
  },

  /** Border semantics for focus rings, outlines, and separators. */
  border: {
    base: '#E5E7EB',
    subtle: '#F3F4F6',
    focus: '#2563EB',
  },
} as const;
