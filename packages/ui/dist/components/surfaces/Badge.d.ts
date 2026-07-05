import * as React from 'react';
export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type BadgeSize = 'sm' | 'md';
export type BadgeProps = {
    children?: React.ReactNode;
    className?: string;
    variant?: BadgeVariant;
    size?: BadgeSize;
};
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
