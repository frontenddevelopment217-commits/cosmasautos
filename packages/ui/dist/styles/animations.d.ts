/**
 * @fileoverview Animation design tokens.
 *
 * Includes duration tokens, easing tokens, and reusable transition presets.
 */
/**
 * Animation tokens.
 */
export declare const animations: {
    /** Duration scale (CSS-ready ms strings). */
    readonly duration: {
        readonly fast: "150ms";
        readonly normal: "200ms";
        readonly slow: "300ms";
    };
    /** Easing tokens. */
    readonly easing: {
        /** Standard UI easing. */
        readonly standard: "cubic-bezier(0.4, 0, 0.2, 1)";
        /** Emphasizes acceleration then deceleration. */
        readonly emphasize: "cubic-bezier(0.2, 0, 0, 1)";
    };
    /** Transition presets that can be used as CSS transition values. */
    readonly transitionPresets: {
        /** Common interactive transition. */
        readonly interactive: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)";
        /** Focus / hover transition with easing. */
        readonly focus: "box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)";
        /** Modal enter/exit transition. */
        readonly modal: "opacity 200ms cubic-bezier(0.2, 0, 0, 1), transform 200ms cubic-bezier(0.2, 0, 0, 1)";
    };
};
