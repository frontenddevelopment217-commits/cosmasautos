import * as React from 'react';
type RatingVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type RatingProps = {
    /** Rating value (caller responsible for formatting, e.g. "4.8"). */
    value?: string;
    variant?: RatingVariant;
    className?: string;
};
export declare const Rating: React.ForwardRefExoticComponent<RatingProps & React.RefAttributes<HTMLSpanElement>>;
export {};
