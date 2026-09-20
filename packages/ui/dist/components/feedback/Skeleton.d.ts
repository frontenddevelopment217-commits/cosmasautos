import * as React from 'react';
export type SkeletonProps = {
    /** Width in CSS units (e.g. 100%, 12rem, 200px). */
    width?: React.CSSProperties['width'];
    /** Height in CSS units (e.g. 1rem, 16px). */
    height?: React.CSSProperties['height'];
    /** Border radius token or keyword. */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>;
/**
 * Skeleton placeholder.
 */
export declare const Skeleton: React.ForwardRefExoticComponent<{
    /** Width in CSS units (e.g. 100%, 12rem, 200px). */
    width?: React.CSSProperties["width"];
    /** Height in CSS units (e.g. 1rem, 16px). */
    height?: React.CSSProperties["height"];
    /** Border radius token or keyword. */
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
    className?: string;
} & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "className"> & React.RefAttributes<HTMLDivElement>>;
