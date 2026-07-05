import * as React from 'react';
/**
 * Accessible native input with optional label/helper/error.
 */
export declare const Input: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "children" | "className"> & {
    className?: string;
} & import("./types").SharedInputDecorationProps & React.RefAttributes<HTMLInputElement>>;
