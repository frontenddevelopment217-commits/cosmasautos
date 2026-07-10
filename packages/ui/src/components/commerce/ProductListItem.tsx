import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';
import { Card } from '../surfaces/Card';
import { Stack } from '../layout/Stack';
import { Heading } from '../typography/Heading';
import { Text } from '../typography/Text';
import { ProductActions } from './ProductActions';
import { PriceDisplay } from './PriceDisplay';
import { Rating } from './Rating';
import { StockBadge } from './StockBadge';
import { BrandBadge } from './BrandBadge';
import { CompatibilityBadge } from './CompatibilityBadge';
import { ImageGallery, type ImagePlaceholder } from './ImageGallery';

export type ProductListItemProps = {
  className?: string;

  title?: string;
  description?: string;
  brand?: string;

  price?: string;
  ratingValue?: string;
  stockLabel?: string;
  compatibleLabel?: string;

  images: ImagePlaceholder[];

  wishlistAriaLabel?: string;
  addToCartChildren?: React.ReactNode;
  addToCartDisabled?: boolean;
};

export function ProductListItem({
  className,
  title,
  description,
  brand,
  price,
  ratingValue,
  stockLabel,
  compatibleLabel,
  images,
  wishlistAriaLabel,
  addToCartChildren,
  addToCartDisabled,
}: ProductListItemProps) {
  return (
    <Card className={cn('ui-commerce-product-list-item', className)} outlined>
      <Stack direction="horizontal" gap="md" align="flex-start" wrap={false}>
        <div style={{ width: 140 }}>
          <ImageGallery images={images.slice(0, 1)} height={100} />
        </div>

        <Stack direction="vertical" gap="sm" style={{ flex: 1 } as any}>
          <Stack direction="horizontal" gap="sm" align="center" justify="space-between" wrap>
            <Heading as="h3">{title ?? ''}</Heading>
          </Stack>

          {brand ? <BrandBadge brand={brand} /> : null}

          {description ? (
            <Text as="p" style={{ margin: 0, opacity: 0.85 } as any}>
              {description}
            </Text>
          ) : null}

          <Stack direction="horizontal" gap="sm" align="center" justify="space-between">
            <PriceDisplay value={price} />
            <Rating value={ratingValue} />
          </Stack>

          <Stack direction="horizontal" gap="sm" align="center" wrap>
            <StockBadge label={stockLabel} />
            <CompatibilityBadge label={compatibleLabel} />
          </Stack>

          <div style={{ height: tokens.spacing.sm }} />

          <ProductActions
            wishlistAriaLabel={wishlistAriaLabel}
            addToCartChildren={addToCartChildren}
            addToCartDisabled={addToCartDisabled}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
