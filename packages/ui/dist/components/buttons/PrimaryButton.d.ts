import * as React from 'react';
import type { BaseButtonProps, ButtonSize } from './types';
/**
 * Primary button variant.
 */
export type PrimaryButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children' | 'disabled'> & BaseButtonProps & {
    /**
     * Optional size shortcut.
     *
     * @defaultValue 'md'
     */
    size?: ButtonSize;
    /**
     * Visual variant is fixed to 'primary'.
     */
    variant?: never;
    /**
     * Optional disabled state.
     */
    disabled?: boolean;
};
/**
 * Solid primary action button.
 */
export declare const PrimaryButton: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "disabled" | "className"> & BaseButtonProps & {
    /**
     * Optional size shortcut.
     *
     * @defaultValue 'md'
     */
    size?: ButtonSize;
    /**
     * Visual variant is fixed to 'primary'.
     */
    variant?: never;
    /**
     * Optional disabled state.
     */
    disabled?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
