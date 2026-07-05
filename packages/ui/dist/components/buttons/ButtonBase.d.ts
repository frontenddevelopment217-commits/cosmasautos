import * as React from 'react';
import type { BaseButtonProps, ButtonSize, ButtonVariant } from './types';
/**
 * Primitive button component.
 *
 * Responsible only for:
 * - forwarding refs
 * - merging class names
 * - disabled state
 * - loading state
 * - native button props
 */
export type ButtonBaseProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'disabled' | 'children'> & BaseButtonProps & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};
/**
 * ForwardRef primitive.
 */
export declare const ButtonBase: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "disabled" | "className"> & BaseButtonProps & {
    variant?: ButtonVariant;
    size?: ButtonSize;
} & React.RefAttributes<HTMLButtonElement>>;
