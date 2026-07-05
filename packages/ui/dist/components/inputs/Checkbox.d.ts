import * as React from 'react';
/**
 * Accessible native checkbox with optional helper/error.
 */
export declare const Checkbox: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "children" | "type" | "className"> & {
    className?: string;
} & import("./types").SharedInputDecorationProps & React.RefAttributes<HTMLInputElement>>;
