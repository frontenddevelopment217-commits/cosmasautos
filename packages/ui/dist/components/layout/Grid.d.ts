import * as React from 'react';
/**
 * Grid.
 *
 * CSS grid layout with tokenized gap and fixed column counts.
 */
export type GridProps = {
    /** Layout contents */
    children?: React.ReactNode;
    /** Optional extra className */
    className?: string;
    /** Number of columns */
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
    /** Tokenized grid gap */
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};
/**
 * Layout primitive for simple fixed-column grids.
 */
export declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
