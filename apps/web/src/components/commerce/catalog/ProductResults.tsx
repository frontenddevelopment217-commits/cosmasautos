import * as React from 'react';

import { EmptyProductState, ProductCard, ProductGrid, Stack } from '@cosmas/ui';

import type { InventoryVehicle } from './inventoryData';

export type ProductResultsProps = {
  products: InventoryVehicle[];
};

export function ProductResults({ products }: ProductResultsProps) {
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div>
        <EmptyProductState />
      </div>
    );
  }

  return (
    <Stack direction="vertical" gap="lg" style={{ width: '100%' }}>
      <ProductGrid columns={3}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            images={[{ id: p.id, src: p.image, alt: p.title }]}
            title={p.title}
            description={p.description}
            brand={p.brand}
            price={p.price}
            ratingValue={p.ratingValue}
            stockLabel={p.stockLabel}
            compatibleLabel={p.compatibleLabel}
            transmission={p.transmission}
            fuelType={p.fuelType}
            mileage={p.mileage}
            year={p.year}
            location={p.location}
            wishlistAriaLabel={`Add ${p.title} to wishlist`}
            addToCartDisabled
            addToCartChildren={null}
          />
        ))}
      </ProductGrid>
    </Stack>
  );
}
