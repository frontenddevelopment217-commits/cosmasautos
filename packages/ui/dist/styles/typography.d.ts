/**
 * @fileoverview Typography design tokens.
 *
 * Provides font families, sizes, weights, and rhythm tokens.
 */
/**
 * Typography tokens.
 */
export declare const typography: {
    /** Font family stacks. */
    readonly fontFamily: {
        readonly sans: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'";
        readonly mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
    };
    /** Font size scale (CSS-ready rem strings). */
    readonly fontSize: {
        readonly sm: "0.875rem";
        readonly md: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly '2xl': "1.5rem";
        readonly '3xl': "2rem";
    };
    /** Font weight scale. */
    readonly fontWeight: {
        readonly normal: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
    };
    /** Line heights for readability and vertical rhythm. */
    readonly lineHeight: {
        readonly snug: 1.25;
        readonly normal: 1.5;
        readonly relaxed: 1.75;
    };
    /** Letter spacing scale (CSS-ready em strings). */
    readonly letterSpacing: {
        readonly tight: "-0.02em";
        readonly normal: "0em";
        readonly wide: "0.02em";
    };
};
