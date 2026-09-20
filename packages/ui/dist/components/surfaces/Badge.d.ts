import * as React from 'react';
export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type BadgeSize = 'sm' | 'md';
/**
 * Badge surface indicator.
 */
export type BadgeProps = {
    children?: React.ReactNode;
    className?: string;
    variant?: BadgeVariant;
    size?: BadgeSize;
} & Omit<React.ComponentPropsWithoutRef<'span'>, 'children' | 'className'>;
export declare const Badge: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    className?: string;
    variant?: BadgeVariant;
    size?: BadgeSize;
} & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref">, "children" | "className"> & React.RefAttributes<HTMLSpanElement>>;
