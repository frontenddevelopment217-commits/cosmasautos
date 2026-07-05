import * as React from 'react';
/**
 * Icon-only button.
 *
 * This component expects the consumer to provide the accessible label via
 * `aria-label`.
 */
export declare const IconButton: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    'aria-label': string;
    children?: React.ReactNode;
    className?: string;
    loading?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
