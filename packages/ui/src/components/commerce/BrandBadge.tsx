import * as React from 'react';

import { Badge } from '../../components/surfaces/Badge';

export type BrandBadgeProps = {
  brand?: string;
};

export const BrandBadge = React.forwardRef<HTMLSpanElement, BrandBadgeProps>(function BrandBadge(
  { brand },
  ref,
) {
  return (
    <Badge ref={ref} variant="secondary">
      {brand ?? ''}
    </Badge>
  );
});

BrandBadge.displayName = 'BrandBadge';
