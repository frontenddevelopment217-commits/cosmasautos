import * as React from 'react';
export type ProductGridProps = {
    className?: string;
    /** Number of columns at the grid primitive level. */
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
    children?: React.ReactNode;
};
export declare function ProductGrid({ className, columns, children }: ProductGridProps): React.JSX.Element;
