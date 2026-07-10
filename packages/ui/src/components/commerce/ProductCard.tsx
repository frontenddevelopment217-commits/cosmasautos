import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';
import { Card } from '../surfaces/Card';
import { Stack } from '../layout/Stack';
import { Heading } from '../typography/Heading';
import { Text } from '../typography/Text';
import { BrandBadge } from './BrandBadge';
import { CompatibilityBadge } from './CompatibilityBadge';
import { PriceDisplay } from './PriceDisplay';
import { Rating } from './Rating';
import { StockBadge } from './StockBadge';
import { ProductActions } from './ProductActions';
import { ProductGallery } from './ProductGallery';
import type { ImagePlaceholder } from './ImageGallery';
import { Divider } from '../surfaces/Divider';

export type ProductCardProps = {
  className?: string;

  title?: string;
  description?: string;
  brand?: string;

  price?: string;
  ratingValue?: string;
  stockLabel?: string;
  compatibleLabel?: string;

  images: ImagePlaceholder[];
  thumbnails?: ImagePlaceholder[];

  wishlistAriaLabel?: string;
  addToCartChildren?: React.ReactNode;
  addToCartDisabled?: boolean;
};

export function ProductCard({
  className,
  title,
  description,
  brand,
  price,
  ratingValue,
  stockLabel,
  compatibleLabel,
  images,
  thumbnails,
  wishlistAriaLabel,
  addToCartChildren,
  addToCartDisabled,
}: ProductCardProps) {
  return (
    <Card className={cn('ui-commerce-product-card', className)} elevated>
      <Stack direction="vertical" gap="md">
        <ProductGallery images={images} thumbnails={thumbnails} height={220} />

        <Stack direction="vertical" gap="sm">
          <Heading as="h3" className="ui-commerce-product-title">
            {title ?? ''}
          </Heading>

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
        </Stack>

        <Divider orientation="horizontal" />

        <ProductActions
          wishlistAriaLabel={wishlistAriaLabel}
          addToCartChildren={addToCartChildren}
          addToCartDisabled={addToCartDisabled}
        />

        <div style={{ height: 0 }} />
      </Stack>
    </Card>
  );
}
