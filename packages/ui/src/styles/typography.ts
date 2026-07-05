/**
 * @fileoverview Typography design tokens.
 *
 * Provides font families, sizes, weights, and rhythm tokens.
 */

/**
 * Typography tokens.
 */
export const typography = {
  /** Font family stacks. */
  fontFamily: {
    sans: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },

  /** Font size scale (CSS-ready rem strings). */
  fontSize: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
  },

  /** Font weight scale. */
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  /** Line heights for readability and vertical rhythm. */
  lineHeight: {
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },

  /** Letter spacing scale (CSS-ready em strings). */
  letterSpacing: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.02em',
  },
} as const;
