import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';
import { Card } from '../surfaces/Card';
import { Stack } from '../layout/Stack';
import { ImageGallery, type ImagePlaceholder } from './ImageGallery';

export type ProductGalleryProps = {
  className?: string;
  /** Main images (visual only). */
  images: ImagePlaceholder[];
  /** Optional thumbnails rendered as additional placeholders. */
  thumbnails?: ImagePlaceholder[];
  height?: number;
};

export function ProductGallery({ className, images, thumbnails, height }: ProductGalleryProps) {
  return (
    <Stack className={cn('ui-commerce-product-gallery', className)} direction="vertical" gap="md">
      {thumbnails?.length ? (
        <Card outlined>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${Math.min(thumbnails.length, 6)}, minmax(0, 1fr))`,
              gap: tokens.spacing.sm,
            }}
          >
            {thumbnails.map((thumb) => (
              <div
                key={thumb.id}
                aria-label={thumb.alt ?? 'Thumbnail placeholder'}
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: tokens.radius.sm,
                  backgroundColor: tokens.colors.surface.muted,
                  border: `1px solid ${tokens.colors.border.base}`,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {thumb.src ? (
                  <img
                    src={thumb.src}
                    alt={thumb.alt ?? 'Thumbnail placeholder'}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.22,
                    }}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </Card>
      ) : null}

      <ImageGallery images={images} height={height} />
    </Stack>
  );
}
