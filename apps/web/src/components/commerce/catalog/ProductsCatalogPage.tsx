import * as React from 'react';

import { Container, Stack } from '@cosmas/ui';

import { CatalogHeader } from './CatalogHeader';
import { CatalogPagination } from './CatalogPagination';
import { ProductResults } from './ProductResults';
import { inventoryVehicles } from './inventoryData';

export function ProductsCatalogPage() {
  return (
    <Stack direction="vertical" gap="lg">
      <CatalogHeader
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Products', isCurrent: true },
        ]}
        title="Products"
        description="Shop by category, compatibility, or brand."
        productCount={inventoryVehicles.length}
      />

      <Container size="xl">
        <Stack direction="vertical" gap="lg">
          <ProductResults products={inventoryVehicles} />
          <CatalogPagination />
        </Stack>
      </Container>
    </Stack>
  );
}
