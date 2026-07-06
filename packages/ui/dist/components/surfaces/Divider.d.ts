import * as React from 'react';
export type DividerOrientation = 'horizontal' | 'vertical';
/**
 * Divider surface element.
 */
export type DividerProps = {
    className?: string;
    orientation?: DividerOrientation;
} & Omit<React.ComponentPropsWithoutRef<'hr'>, 'className'>;
export declare const Divider: React.ForwardRefExoticComponent<{
    className?: string;
    orientation?: DividerOrientation;
} & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref">, "className"> & React.RefAttributes<HTMLHRElement>>;
