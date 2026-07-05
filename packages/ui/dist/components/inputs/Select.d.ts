import * as React from 'react';
/**
 * Accessible native select with optional label/helper/error.
 *
 * Consumers provide native <option> children.
 */
export declare const Select: React.ForwardRefExoticComponent<Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children" | "className"> & {
    className?: string;
} & import("./types").SharedInputDecorationProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLSelectElement>>;
