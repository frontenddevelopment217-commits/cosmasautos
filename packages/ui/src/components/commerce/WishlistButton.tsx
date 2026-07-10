import * as React from 'react';

import { IconButton } from '../buttons/IconButton';
import type { IconButtonProps } from '../buttons';
import { cn } from '../../utils';

export type WishlistButtonProps = Omit<IconButtonProps, 'children'> & {
  /** Accessible label override. */
  'aria-label'?: string;
  /** Optional visual override. */
  children?: React.ReactNode;
};

export function WishlistButton({
  className,
  children,
  disabled,
  loading,
  type,
  'aria-label': ariaLabel,
  ...rest
}: WishlistButtonProps) {
  return (
    <IconButton
      {...rest}
      type={type}
      disabled={disabled}
      loading={loading}
      className={cn('ui-commerce-wishlist-button', className)}
      aria-label={ariaLabel ?? 'Add to wishlist'}
    >
      {children ?? (
        <span
          aria-hidden="true"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <span style={{ lineHeight: 1 }}>♡</span>
          <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Wishlist</span>
        </span>
      )}
    </IconButton>
  );
}
