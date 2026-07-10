import * as React from 'react';

import { PrimaryButton } from '../buttons/PrimaryButton';
import type { PrimaryButtonProps } from '../buttons';
import { cn } from '../../utils';

export type AddToCartButtonProps = Omit<PrimaryButtonProps, 'children'> & {
  children?: React.ReactNode;
};

export function AddToCartButton({
  className,
  children,
  disabled,
  loading,
  type,
  ...rest
}: AddToCartButtonProps) {
  return (
    <PrimaryButton
      {...rest}
      type={type}
      disabled={disabled}
      loading={loading}
      className={cn('ui-commerce-add-to-cart-button', className)}
    >
      {children ?? 'Add to cart'}
    </PrimaryButton>
  );
}
