import * as React from 'react';
import type { BaseButtonProps, ButtonSize } from './types';
/**
 * Secondary button variant.
 */
export type SecondaryButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children' | 'disabled'> & BaseButtonProps & {
    /**
     * Optional size shortcut.
     *
     * @defaultValue 'md'
     */
    size?: ButtonSize;
    /**
     * Visual variant is fixed to 'secondary'.
     */
    variant?: never;
    /**
     * Optional disabled state.
     */
    disabled?: boolean;
};
/**
 * Outline-ish secondary action button.
 */
export declare const SecondaryButton: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "disabled" | "className"> & BaseButtonProps & {
    /**
     * Optional size shortcut.
     *
     * @defaultValue 'md'
     */
    size?: ButtonSize;
    /**
     * Visual variant is fixed to 'secondary'.
     */
    variant?: never;
    /**
     * Optional disabled state.
     */
    disabled?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
