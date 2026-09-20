import * as React from 'react';

import { Container, Stack } from '@cosmas/ui';

import { CatalogHeader } from './CatalogHeader';
import { CatalogPagination } from './CatalogPagination';
import { ProductResults } from './ProductResults';

const placeholderProducts = Array.from({ length: 10 }).map((_, idx) => {
  const n = idx + 1;
  return {
    id: `prod-${n}`,
    title: `Product ${n}`,
    description: 'Placeholder product description.',
    brand: ['Bosch', 'Denso', 'NGK'][idx % 3],
    price: `$${(n * 19.99).toFixed(2)}`,
    ratingValue: `${4 - (idx % 3) * 0.3}`,
    stockLabel: idx % 4 === 0 ? 'Out of stock' : 'In stock',
    compatibleLabel: 'Fits many models',
  };
});

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
        productCount={placeholderProducts.length}
      />

      <Container>
        <Stack direction="vertical" gap="lg">
          <ProductResults products={placeholderProducts} />
          <CatalogPagination />
        </Stack>
      </Container>
    </Stack>
  );
}
