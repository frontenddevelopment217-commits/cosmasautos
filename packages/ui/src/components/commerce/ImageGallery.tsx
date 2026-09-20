import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';
import { Card } from '../surfaces/Card';

export type ImagePlaceholder = {
  /** Unique key for React rendering. */
  id: string;
  /** Optional alt text for the placeholder. */
  alt?: string;
  /** Optional inline image URL (still rendered as a placeholder box). */
  src?: string;
};

export type ImageGalleryProps = {
  className?: string;
  /** Image placeholders to render (visual only). */
  images: ImagePlaceholder[];
  /** Fixed height for placeholders. */
  height?: number;
};

export function ImageGallery({ className, images, height = 240 }: ImageGalleryProps) {
  return (
    <Card className={cn('ui-commerce-image-gallery', className)} outlined>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          gap: tokens.spacing.sm,
        }}
      >
        {images.map((img) => (
          <div
            key={img.id}
            aria-label={img.alt ?? 'Product image'}
            style={{
              position: 'relative',
              width: '100%',
              height,
              borderRadius: tokens.radius.sm,
              backgroundColor: tokens.colors.surface.muted,
              border: `1px solid ${tokens.colors.border.base}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {img.src ? (
              <img
                src={img.src}
                alt={img.alt ?? 'Product image'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <span
                style={{
                  fontFamily: tokens.typography.fontFamily.sans,
                  fontSize: tokens.typography.fontSize.sm,
                  fontWeight: tokens.typography.fontWeight.semibold,
                  opacity: 0.8,
                  padding: tokens.spacing.sm,
                  textAlign: 'center',
                }}
              >
                Image placeholder
              </span>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
