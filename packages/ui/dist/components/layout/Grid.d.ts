import * as React from 'react';
export type GridProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'> & {
    children?: React.ReactNode;
    className?: string;
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** When true, ignores `columns` and auto-fits as many columns as fit, each at least `minItemWidth` wide. */
    responsive?: boolean;
    /** Minimum width per item when `responsive` is true. Defaults to 260px. */
    minItemWidth?: number;
};
export declare const Grid: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "children" | "className"> & {
    children?: React.ReactNode;
    className?: string;
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
    gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
    /** When true, ignores `columns` and auto-fits as many columns as fit, each at least `minItemWidth` wide. */
    responsive?: boolean;
    /** Minimum width per item when `responsive` is true. Defaults to 260px. */
    minItemWidth?: number;
} & React.RefAttributes<HTMLDivElement>>;
