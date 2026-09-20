import * as React from 'react';
export type SpinnerProps = {
    /** Visual size in pixels. */
    size?: number;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>;
/**
 * Spinner.
 *
 * Static, accessible loading indicator (no animation by design).
 */
export declare const Spinner: React.ForwardRefExoticComponent<{
    /** Visual size in pixels. */
    size?: number;
    className?: string;
} & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "className"> & React.RefAttributes<HTMLDivElement>>;
