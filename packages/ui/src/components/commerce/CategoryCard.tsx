import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';
import { Card } from '../surfaces/Card';
import { Stack } from '../layout/Stack';
import { Heading } from '../typography/Heading';
import { Text } from '../typography/Text';

export type CategoryCardProps = {
  className?: string;
  title?: string;
  description?: string;
  /** Optional CTA placeholder label. */
  ctaLabel?: string;
};

export function CategoryCard({ className, title, description, ctaLabel }: CategoryCardProps) {
  return (
    <Card className={cn('ui-commerce-category-card', className)} outlined>
      <Stack direction="vertical" gap="md">
        <div
          aria-label="Category image placeholder"
          style={{
            width: '100%',
            aspectRatio: '16 / 10',
            borderRadius: tokens.radius.sm,
            backgroundColor: tokens.colors.surface.muted,
            border: `1px solid ${tokens.colors.border.base}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontFamily: tokens.typography.fontFamily.sans,
              fontSize: tokens.typography.fontSize.sm,
              fontWeight: tokens.typography.fontWeight.semibold,
              opacity: 0.8,
            }}
          >
            Category placeholder
          </span>
        </div>

        <Stack direction="vertical" gap="sm">
          <Heading as="h3">{title ?? ''}</Heading>
          {description ? (
            <Text as="p" style={{ margin: 0, opacity: 0.85 } as any}>
              {description}
            </Text>
          ) : null}
        </Stack>

        <div
          aria-label="Category CTA placeholder"
          style={{
            width: '100%',
            borderRadius: tokens.radius.sm,
            border: `1px dashed ${tokens.colors.border.base}`,
            padding: tokens.spacing.md,
            textAlign: 'center',
          }}
        >
          <Text as="span" style={{ margin: 0, opacity: 0.9 } as any}>
            {ctaLabel ?? 'View category'}
          </Text>
        </div>
      </Stack>
    </Card>
  );
}
