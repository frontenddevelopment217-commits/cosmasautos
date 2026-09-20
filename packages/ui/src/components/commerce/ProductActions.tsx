import * as React from 'react';

import { Stack } from '../layout/Stack';

import { AddToCartButton } from './AddToCartButton';
import { WishlistButton } from './WishlistButton';

export type ProductActionsProps = {
  className?: string;
  wishlistAriaLabel?: string;
  addToCartChildren?: React.ReactNode;
  addToCartDisabled?: boolean;
};

export function ProductActions({
  className,
  wishlistAriaLabel,
  addToCartChildren,
  addToCartDisabled,
}: ProductActionsProps) {
  return (
    <Stack className={className} direction="horizontal" gap="md" align="center">
      <WishlistButton aria-label={wishlistAriaLabel ?? 'Add to wishlist'} />
      <AddToCartButton disabled={addToCartDisabled}>
        {addToCartChildren ?? 'Add to cart'}
      </AddToCartButton>
    </Stack>
  );
}
