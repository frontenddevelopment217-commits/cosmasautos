import * as React from 'react';
export type EmptyStateProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> & {
    className?: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
};
/**
 * Empty state.
 */
export declare const EmptyState: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "title"> & {
    className?: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
