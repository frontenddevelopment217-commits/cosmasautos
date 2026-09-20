import * as React from 'react';
/**
 * Card surface container.
 */
export type CardProps = {
    children?: React.ReactNode;
    className?: string;
    elevated?: boolean;
    outlined?: boolean;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;
export declare const Card: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    className?: string;
    elevated?: boolean;
    outlined?: boolean;
} & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "children" | "className"> & React.RefAttributes<HTMLDivElement>>;
