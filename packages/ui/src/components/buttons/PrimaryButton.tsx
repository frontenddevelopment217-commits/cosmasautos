import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

import { ButtonBase } from './ButtonBase';
import type { BaseButtonProps, ButtonSize } from './types';

/**
 * Primary button variant.
 */
export type PrimaryButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'className' | 'children' | 'disabled'
> &
  BaseButtonProps & {
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
export const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  function PrimaryButton(
    { className, children, size = 'md', loading, disabled, type, ...rest },
    ref,
  ) {
    return (
      <ButtonBase
        ref={ref}
        type={type ?? 'button'}
        variant="primary"
        size={size}
        loading={loading}
        disabled={disabled}
        className={cn('ui-button-primary', className)}
        {...rest}
      >
        {children}
      </ButtonBase>
    );
  },
);
