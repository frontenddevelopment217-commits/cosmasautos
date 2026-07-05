import * as React from 'react';

import { cn } from '../../utils';

import { ButtonBase } from './ButtonBase';
import type { IconOnlyButtonProps } from './types';

/**
 * Icon-only button.
 *
 * This component expects the consumer to provide the accessible label via
 * `aria-label`.
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconOnlyButtonProps>(
  function IconButton(
    { className, children, loading, disabled, type, 'aria-label': ariaLabel, ...rest },
    ref,
  ) {
    return (
      <ButtonBase
        ref={ref}
        type={type ?? 'button'}
        variant="primary"
        size="md"
        loading={loading}
        disabled={disabled}
        aria-label={ariaLabel}
        className={cn('ui-icon-button', className)}
        {...rest}
      >
        {children}
      </ButtonBase>
    );
  },
);
