import * as React from 'react';
/**
 * Breadcrumb.
 *
 * Displays hierarchical navigation as an ordered list.
 */
export type BreadcrumbProps = React.ComponentPropsWithoutRef<'nav'> & {
    /** Breadcrumb items */
    items: Array<{
        /** Visible label */
        label: string;
        /** Link target (if not provided, renders as span) */
        href?: string;
        /** Marks the current page */
        isCurrent?: boolean;
    }>;
};
export declare const Breadcrumb: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    /** Breadcrumb items */
    items: Array<{
        /** Visible label */
        label: string;
        /** Link target (if not provided, renders as span) */
        href?: string;
        /** Marks the current page */
        isCurrent?: boolean;
    }>;
} & React.RefAttributes<HTMLElement>>;
