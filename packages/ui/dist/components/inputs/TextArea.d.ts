import * as React from 'react';
/**
 * Accessible native textarea with optional label/helper/error.
 */
export declare const TextArea: React.ForwardRefExoticComponent<Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "children" | "className"> & {
    className?: string;
} & import("./types").SharedInputDecorationProps & React.RefAttributes<HTMLTextAreaElement>>;
