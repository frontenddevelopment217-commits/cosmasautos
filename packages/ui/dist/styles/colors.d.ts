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
export declare const colors: {
    /** Brand primary actions and emphasis. */
    readonly primary: {
        /** Solid primary base. */
        readonly base: "#2563EB";
        /** Primary hover. */
        readonly hover: "#1D4ED8";
        /** Primary active/pressed. */
        readonly active: "#1E40AF";
        /** Primary text color on solid backgrounds. */
        readonly onBase: "#FFFFFF";
    };
    /** Secondary actions (less prominent than primary). */
    readonly secondary: {
        readonly base: "#4F46E5";
        readonly hover: "#4338CA";
        readonly active: "#3730A3";
        readonly onBase: "#FFFFFF";
    };
    /** Success state semantics. */
    readonly success: {
        readonly base: "#16A34A";
        readonly hover: "#15803D";
        readonly active: "#166534";
        readonly onBase: "#FFFFFF";
    };
    /** Warning state semantics. */
    readonly warning: {
        readonly base: "#F59E0B";
        readonly hover: "#D97706";
        readonly active: "#B45309";
        readonly onBase: "#111827";
    };
    /** Danger state semantics. */
    readonly danger: {
        readonly base: "#DC2626";
        readonly hover: "#B91C1C";
        readonly active: "#991B1B";
        readonly onBase: "#FFFFFF";
    };
    /** Surface/background colors for cards/panels. */
    readonly surface: {
        /** Default surface background. */
        readonly base: "#FFFFFF";
        /** Elevated surface (e.g. dropdown, modal background). */
        readonly elevated: "#F9FAFB";
        /** Muted surface used for subtle blocks. */
        readonly muted: "#F3F4F6";
        /** Divider line color. */
        readonly border: "#E5E7EB";
        /** Text color on surfaces. */
        readonly onBase: "#111827";
    };
    /** Global page background semantics. */
    readonly background: {
        readonly base: "#F9FAFB";
        readonly elevated: "#FFFFFF";
    };
    /** Text semantics. */
    readonly text: {
        readonly primary: "#111827";
        readonly secondary: "#4B5563";
        readonly muted: "#6B7280";
        readonly inverse: "#FFFFFF";
    };
    /** Border semantics for focus rings, outlines, and separators. */
    readonly border: {
        readonly base: "#E5E7EB";
        readonly subtle: "#F3F4F6";
        readonly focus: "#2563EB";
    };
};
