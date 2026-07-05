/**
 * @fileoverview Animation design tokens.
 *
 * Includes duration tokens, easing tokens, and reusable transition presets.
 */

/**
 * Animation tokens.
 */
export const animations = {
  /** Duration scale (CSS-ready ms strings). */
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
  },

  /** Easing tokens. */
  easing: {
    /** Standard UI easing. */
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    /** Emphasizes acceleration then deceleration. */
    emphasize: 'cubic-bezier(0.2, 0, 0, 1)',
  },

  /** Transition presets that can be used as CSS transition values. */
  transitionPresets: {
    /** Common interactive transition. */
    interactive:
      'transform 200ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    /** Focus / hover transition with easing. */
    focus:
      'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    /** Modal enter/exit transition. */
    modal: 'opacity 200ms cubic-bezier(0.2, 0, 0, 1), transform 200ms cubic-bezier(0.2, 0, 0, 1)',
  },
} as const;
