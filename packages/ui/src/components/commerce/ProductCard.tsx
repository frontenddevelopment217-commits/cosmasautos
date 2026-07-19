import * as React from 'react';

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
import { tokens } from '../../styles';

export type ProductCardProps = {
  className?: string;

  title?: string;
  description?: string;
  brand?: string;

  price?: string;
  ratingValue?: string;

  /** Visual condition badge label (e.g. Brand New / Tokunbo / Nigerian Used). */
  conditionBadgeLabel?: string;

  /** Dealer inventory badge label (e.g. In stock). */
  stockLabel?: string;
  compatibleLabel?: string;

  transmission?: string;
  fuelType?: string;
  mileage?: string;
  year?: string;
  location?: string;

  images: ImagePlaceholder[];
  thumbnails?: ImagePlaceholder[];

  wishlistAriaLabel?: string;
  addToCartChildren?: React.ReactNode;
  addToCartDisabled?: boolean;
  /** Optional CTA label shown as a secondary action (no routing). */
  viewDetailsLabel?: string;
};

export function ProductCard({
  className,
  title,
  description,
  brand,
  price,
  ratingValue,
  conditionBadgeLabel,
  stockLabel,
  compatibleLabel,
  transmission,
  fuelType,
  mileage,
  year,
  location,
  images,
  thumbnails,
  wishlistAriaLabel,
  addToCartChildren,
  addToCartDisabled,
  viewDetailsLabel = 'View Details',
}: ProductCardProps) {
  return (
    <Card className={cn('ui-commerce-product-card', className)} elevated>
      <Stack direction="vertical" gap="md">
        {/* Image + badges */}
        <Stack direction="vertical" gap="sm">
          <div style={{ position: 'relative' }}>
            <ProductGallery images={images} thumbnails={thumbnails} height={220} />

            <Stack
              direction="horizontal"
              gap="xs"
              align="center"
              wrap
              className="ui-commerce-product-badges"
              // badge row overlay (visual only)
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
                right: 12,
                justifyContent: 'flex-start',
              }}
            >
              {conditionBadgeLabel ? (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '6px 10px',
                    borderRadius: tokens.radius.sm,
                    backgroundColor: tokens.colors.surface.muted,
                    border: `1px solid ${tokens.colors.border.base}`,
                    fontFamily: tokens.typography.fontFamily.sans,
                    fontSize: tokens.typography.fontSize.sm,
                    fontWeight: tokens.typography.fontWeight.semibold,
                    opacity: 0.95,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {conditionBadgeLabel}
                </span>
              ) : null}
            </Stack>
          </div>
        </Stack>

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

          {/* Price emphasis row */}
          <Stack direction="horizontal" gap="sm" align="center" justify="space-between" wrap>
            <PriceDisplay value={price} />
            <Rating value={ratingValue} />
          </Stack>

          {/* Inventory / compatibility */}
          <Stack direction="horizontal" gap="sm" align="center" wrap>
            <StockBadge label={stockLabel} />
            <CompatibilityBadge label={compatibleLabel} />
          </Stack>

          {/* Specs row */}
          <Stack direction="vertical" gap="xs" style={{ padding: tokens.spacing.sm }}>
            <Stack direction="horizontal" gap="md" align="center" wrap>
              {year ? (
                <Text as="small" style={{ margin: 0, opacity: 0.9 } as any}>
                  <b style={{ fontWeight: tokens.typography.fontWeight.bold }}>Year:</b> {year}
                </Text>
              ) : null}
              {mileage ? (
                <Text as="small" style={{ margin: 0, opacity: 0.9 } as any}>
                  <b style={{ fontWeight: tokens.typography.fontWeight.bold }}>Mileage:</b>{' '}
                  {mileage}
                </Text>
              ) : null}
            </Stack>
            <Stack direction="horizontal" gap="md" align="center" wrap>
              {transmission ? (
                <Text as="small" style={{ margin: 0, opacity: 0.9 } as any}>
                  <b style={{ fontWeight: tokens.typography.fontWeight.bold }}>Transmission:</b>{' '}
                  {transmission}
                </Text>
              ) : null}
              {fuelType ? (
                <Text as="small" style={{ margin: 0, opacity: 0.9 } as any}>
                  <b style={{ fontWeight: tokens.typography.fontWeight.bold }}>Fuel:</b> {fuelType}
                </Text>
              ) : null}
            </Stack>
            {location ? (
              <Text as="small" style={{ margin: 0, opacity: 0.9 } as any}>
                <b style={{ fontWeight: tokens.typography.fontWeight.bold }}>Location:</b>{' '}
                {location}
              </Text>
            ) : null}
          </Stack>
        </Stack>

        <Divider orientation="horizontal" />

        {/* Actions row: View Details (visual) + existing commerce actions */}
        <Stack direction="horizontal" gap="md" align="center" justify="space-between" wrap>
          <div
            aria-label="View details"
            style={{
              borderRadius: tokens.radius.sm,
              border: `1px solid ${tokens.colors.border.base}`,
              padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
              fontFamily: tokens.typography.fontFamily.sans,
              fontSize: tokens.typography.fontSize.sm,
              fontWeight: tokens.typography.fontWeight.semibold,
              opacity: 0.95,
              backgroundColor: tokens.colors.surface.base,
              userSelect: 'none',
            }}
          >
            {viewDetailsLabel}
          </div>

          <ProductActions
            wishlistAriaLabel={wishlistAriaLabel}
            addToCartChildren={addToCartChildren}
            addToCartDisabled={addToCartDisabled}
          />
        </Stack>

        <div style={{ height: 0 }} />
      </Stack>
    </Card>
  );
}
