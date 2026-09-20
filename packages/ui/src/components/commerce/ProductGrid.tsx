import * as React from 'react';

import { cn } from '../../utils';
import { Grid } from '../layout/Grid';

export type ProductGridProps = {
  className?: string;
  /** Number of columns at the grid primitive level. */
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
};

export function ProductGrid({ className, columns = 3, children }: ProductGridProps) {
  return (
    <Grid className={cn('ui-commerce-product-grid', className)} columns={columns} gap="lg">
      {children}
    </Grid>
  );
}
