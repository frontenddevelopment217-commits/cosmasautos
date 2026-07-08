import * as React from 'react';
/**
 * Pagination.
 *
 * Provides previous/next controls and current page indication.
 */
export type PaginationProps = React.ComponentPropsWithoutRef<'nav'> & {
    /** Current page (1-indexed) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Callback when previous is requested */
    onPrevious?: () => void;
    /** Callback when next is requested */
    onNext?: () => void;
};
export declare const Pagination: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    /** Current page (1-indexed) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Callback when previous is requested */
    onPrevious?: () => void;
    /** Callback when next is requested */
    onNext?: () => void;
} & React.RefAttributes<HTMLElement>>;
