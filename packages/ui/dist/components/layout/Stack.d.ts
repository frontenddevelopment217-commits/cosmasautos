import * as React from 'react';
/**
 * Stack.
 *
 * Simple flexbox layout with direction and tokenized gap.
 */
export type StackProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'> & {
    /** Layout contents */
    children?: React.ReactNode;
    /** Optional extra className */
    className?: string;
    /** Stack direction */
    direction?: 'vertical' | 'horizontal';
    /** Tokenized flex gap */
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** flex align-items */
    align?: React.CSSProperties['alignItems'];
    /** flex justify-content */
    justify?: React.CSSProperties['justifyContent'];
    /** Toggle flex wrap */
    wrap?: boolean;
};
/**
 * Layout primitive for simple spacing between children.
 */
export declare const Stack: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "children" | "className"> & {
    /** Layout contents */
    children?: React.ReactNode;
    /** Optional extra className */
    className?: string;
    /** Stack direction */
    direction?: "vertical" | "horizontal";
    /** Tokenized flex gap */
    gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
    /** flex align-items */
    align?: React.CSSProperties["alignItems"];
    /** flex justify-content */
    justify?: React.CSSProperties["justifyContent"];
    /** Toggle flex wrap */
    wrap?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
