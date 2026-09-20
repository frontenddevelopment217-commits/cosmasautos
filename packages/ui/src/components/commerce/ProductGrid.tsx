import * as React from 'react';

import { cn } from '../../utils';
import { Grid } from '../layout/Grid';

export type ProductGridProps = {
  className?: string;
  children?: React.ReactNode;
};

export function ProductGrid({ className, children }: ProductGridProps) {
  return (
    <Grid
      className={cn('ui-commerce-product-grid', className)}
      responsive
      minItemWidth={280}
      gap="lg"
    >
      {children}
    </Grid>
  );
}
