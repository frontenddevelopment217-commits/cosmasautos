import * as React from 'react';

import { EmptyProductState, ProductCard, ProductGrid, Stack } from '@cosmas/ui';

export type CatalogProduct = {
  id: string;
  title: string;
  description?: string;
  brand?: string;
  price?: string;
  ratingValue?: string;
  stockLabel?: string;
  compatibleLabel?: string;
};

export type ProductResultsProps = {
  products: CatalogProduct[];
};

const placeholderImage = {
  id: 'placeholder-product-image',
  src: 'https://via.placeholder.com/600x400?text=Product',
  alt: 'Product image',
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
            images={[placeholderImage]}
            title={p.title}
            description={p.description}
            brand={p.brand}
            price={p.price}
            ratingValue={p.ratingValue}
            stockLabel={p.stockLabel}
            compatibleLabel={p.compatibleLabel}
            wishlistAriaLabel={`Add ${p.title} to wishlist`}
            addToCartDisabled
            addToCartChildren={null}
          />
        ))}
      </ProductGrid>
    </Stack>
  );
}
