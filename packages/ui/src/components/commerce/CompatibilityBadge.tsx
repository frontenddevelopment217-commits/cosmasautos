import * as React from 'react';

import { Badge } from '../../components/surfaces/Badge';

export type CompatibilityBadgeProps = {
  label?: string;
};

export const CompatibilityBadge = React.forwardRef<HTMLSpanElement, CompatibilityBadgeProps>(function CompatibilityBadge(
  { label = 'Compatible' },
  ref,
) {
  return (
    <Badge ref={ref} variant="primary">
      {label}
    </Badge>
  );
});

CompatibilityBadge.displayName = 'CompatibilityBadge';

