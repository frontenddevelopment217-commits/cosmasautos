import * as React from 'react';
export type ProgressProps = {
    /** Current value. */
    value: number;
    /** Maximum value. */
    max?: number;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'className' | 'role'>;
/**
 * Progress.
 */
export declare const Progress: React.ForwardRefExoticComponent<{
    /** Current value. */
    value: number;
    /** Maximum value. */
    max?: number;
    className?: string;
} & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "className" | "role"> & React.RefAttributes<HTMLDivElement>>;
