import * as React from 'react';

import { Badge } from '../../components/surfaces/Badge';

type StockBadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type StockBadgeProps = {
  label?: string;
  variant?: StockBadgeVariant;
};

export const StockBadge = React.forwardRef<HTMLSpanElement, StockBadgeProps>(function StockBadge(
  { label = 'In stock', variant = 'success' },
  ref,
) {
  return (
    <Badge ref={ref} variant={variant as any}>
      {label}
    </Badge>
  );
});

StockBadge.displayName = 'StockBadge';
