import * as React from 'react';
type StockBadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type StockBadgeProps = {
    label?: string;
    variant?: StockBadgeVariant;
};
export declare const StockBadge: React.ForwardRefExoticComponent<StockBadgeProps & React.RefAttributes<HTMLSpanElement>>;
export {};
