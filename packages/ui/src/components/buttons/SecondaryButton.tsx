import * as React from 'react';

import { cn } from '../../utils';

import { ButtonBase } from './ButtonBase';
import type { BaseButtonProps, ButtonSize } from './types';

/**
 * Secondary button variant.
 */
export type SecondaryButtonProps = Omit<
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
export const SecondaryButton = React.forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  function SecondaryButton(
    { className, children, size = 'md', loading, disabled, type, ...rest },
    ref,
  ) {
    return (
      <ButtonBase
        ref={ref}
        type={type ?? 'button'}
        variant="secondary"
        size={size}
        loading={loading}
        disabled={disabled}
        className={cn('ui-button-secondary', className)}
        {...rest}
      >
        {children}
      </ButtonBase>
    );
  },
);
