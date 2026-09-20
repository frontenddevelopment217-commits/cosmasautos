import * as React from 'react';

import { EmptyState } from '../data-display/EmptyState';

export type EmptyProductStateProps = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'title' | 'children'
> & {
  className?: string;
};

export function EmptyProductState({ className, ...rest }: EmptyProductStateProps) {
  return (
    <EmptyState
      {...rest}
      className={className}
      title="No products found"
      description="Try adjusting your filters or search criteria."
    />
  );
}
