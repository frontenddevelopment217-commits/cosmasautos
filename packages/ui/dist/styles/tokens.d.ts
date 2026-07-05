/**
 * @fileoverview Consolidated design tokens.
 *
 * This module aggregates all token groups into a single `tokens` object.
 */
/**
 * Consolidated design token object.
 */
export declare const tokens: {
    readonly colors: {
        readonly primary: {
            readonly base: "#2563EB";
            readonly hover: "#1D4ED8";
            readonly active: "#1E40AF";
            readonly onBase: "#FFFFFF";
        };
        readonly secondary: {
            readonly base: "#4F46E5";
            readonly hover: "#4338CA";
            readonly active: "#3730A3";
            readonly onBase: "#FFFFFF";
        };
        readonly success: {
            readonly base: "#16A34A";
            readonly hover: "#15803D";
            readonly active: "#166534";
            readonly onBase: "#FFFFFF";
        };
        readonly warning: {
            readonly base: "#F59E0B";
            readonly hover: "#D97706";
            readonly active: "#B45309";
            readonly onBase: "#111827";
        };
        readonly danger: {
            readonly base: "#DC2626";
            readonly hover: "#B91C1C";
            readonly active: "#991B1B";
            readonly onBase: "#FFFFFF";
        };
        readonly surface: {
            readonly base: "#FFFFFF";
            readonly elevated: "#F9FAFB";
            readonly muted: "#F3F4F6";
            readonly border: "#E5E7EB";
            readonly onBase: "#111827";
        };
        readonly background: {
            readonly base: "#F9FAFB";
            readonly elevated: "#FFFFFF";
        };
        readonly text: {
            readonly primary: "#111827";
            readonly secondary: "#4B5563";
            readonly muted: "#6B7280";
            readonly inverse: "#FFFFFF";
        };
        readonly border: {
            readonly base: "#E5E7EB";
            readonly subtle: "#F3F4F6";
            readonly focus: "#2563EB";
        };
    };
    readonly spacing: {
        readonly xs: "0.25rem";
        readonly sm: "0.5rem";
        readonly md: "0.75rem";
        readonly lg: "1rem";
        readonly xl: "1.25rem";
        readonly '2xl': "1.5rem";
        readonly '3xl': "2rem";
    };
    readonly typography: {
        readonly fontFamily: {
            readonly sans: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'";
            readonly mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
        };
        readonly fontSize: {
            readonly sm: "0.875rem";
            readonly md: "1rem";
            readonly lg: "1.125rem";
            readonly xl: "1.25rem";
            readonly '2xl': "1.5rem";
            readonly '3xl': "2rem";
        };
        readonly fontWeight: {
            readonly normal: 400;
            readonly medium: 500;
            readonly semibold: 600;
            readonly bold: 700;
        };
        readonly lineHeight: {
            readonly snug: 1.25;
            readonly normal: 1.5;
            readonly relaxed: 1.75;
        };
        readonly letterSpacing: {
            readonly tight: "-0.02em";
            readonly normal: "0em";
            readonly wide: "0.02em";
        };
    };
    readonly radius: {
        readonly none: "0";
        readonly sm: "0.375rem";
        readonly md: "0.5rem";
        readonly lg: "0.75rem";
        readonly xl: "1rem";
        readonly full: "9999px";
    };
    readonly shadows: {
        readonly none: "none";
        readonly sm: "0 1px 2px rgba(0, 0, 0, 0.05)";
        readonly md: "0 4px 6px rgba(0, 0, 0, 0.08)";
        readonly lg: "0 10px 15px rgba(0, 0, 0, 0.12)";
        readonly xl: "0 20px 25px rgba(0, 0, 0, 0.14)";
    };
    readonly breakpoints: {
        readonly sm: "640px";
        readonly md: "768px";
        readonly lg: "1024px";
        readonly xl: "1280px";
        readonly '2xl': "1536px";
    };
    readonly animations: {
        readonly duration: {
            readonly fast: "150ms";
            readonly normal: "200ms";
            readonly slow: "300ms";
        };
        readonly easing: {
            readonly standard: "cubic-bezier(0.4, 0, 0.2, 1)";
            readonly emphasize: "cubic-bezier(0.2, 0, 0, 1)";
        };
        readonly transitionPresets: {
            readonly interactive: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)";
            readonly focus: "box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)";
            readonly modal: "opacity 200ms cubic-bezier(0.2, 0, 0, 1), transform 200ms cubic-bezier(0.2, 0, 0, 1)";
        };
    };
    readonly zIndex: {
        readonly base: 0;
        readonly dropdown: 50;
        readonly sticky: 60;
        readonly overlay: 70;
        readonly modal: 80;
        readonly popover: 75;
        readonly tooltip: 90;
        readonly toast: 100;
    };
};
