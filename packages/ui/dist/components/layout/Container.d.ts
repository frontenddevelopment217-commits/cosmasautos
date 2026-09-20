import * as React from 'react';
/**
 * Container.
 *
 * Centers content horizontally with a max-width based on `size`.
 */
export type ContainerProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'> & {
    /** Layout contents */
    children?: React.ReactNode;
    /** Optional extra className */
    className?: string;
    /** Max-width preset */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};
/**
 * Layout primitive for consistent horizontal centering.
 */
export declare const Container: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "children" | "className"> & {
    /** Layout contents */
    children?: React.ReactNode;
    /** Optional extra className */
    className?: string;
    /** Max-width preset */
    size?: "sm" | "md" | "lg" | "xl" | "full";
} & React.RefAttributes<HTMLDivElement>>;
