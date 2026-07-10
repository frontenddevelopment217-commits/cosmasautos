import * as React from 'react';

import { Badge } from '../../components/surfaces/Badge';
import { cn } from '../../utils';

type RatingVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type RatingProps = {
  /** Rating value (caller responsible for formatting, e.g. "4.8"). */
  value?: string;
  variant?: RatingVariant;
  className?: string;
};

export const Rating = React.forwardRef<HTMLSpanElement, RatingProps>(function Rating(
  { value, variant = 'warning', className },
  ref,
) {
  return (
    <Badge ref={ref} variant={variant as any} className={cn(className)}>
      {value ?? ''}
    </Badge>
  );
});

Rating.displayName = 'Rating';
