import * as React from 'react';

import { Breadcrumb, Container, SectionHeading, Stack } from '@cosmas/ui';

export type CatalogHeaderProps = {
  /** Current breadcrumb items */
  breadcrumbItems: Array<{ label: string; href?: string; isCurrent?: boolean }>;
  title?: string;
  description?: string;
  productCount?: number;
};

export function CatalogHeader({
  breadcrumbItems,
  title = 'Products',
  description = 'Browse our catalog of automotive products.',
  productCount = 10,
}: CatalogHeaderProps) {
  return (
    <Container>
      <Stack direction="vertical" gap="lg" style={{ width: '100%' }}>
        <Breadcrumb items={breadcrumbItems} />

        <Stack direction="vertical" gap="sm">
          <SectionHeading title={title} />
          <p style={{ margin: 0, opacity: 0.85 }}>
            {description} <span style={{ fontWeight: 600 }}>{productCount} items</span>.
          </p>
        </Stack>
      </Stack>
    </Container>
  );
}
