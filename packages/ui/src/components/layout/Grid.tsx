import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

/**
 * Grid.
 *
 * CSS grid layout with tokenized gap and fixed column counts.
 */
export type GridProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'> & {
  /** Layout contents */
  children?: React.ReactNode;
  /** Optional extra className */
  className?: string;
  /** Number of columns */
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Tokenized grid gap */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

const gapByToken: Record<NonNullable<GridProps['gap']>, string> = {
  none: '0',

  xs: tokens.spacing.xs,
  sm: tokens.spacing.sm,
  md: tokens.spacing.md,
  lg: tokens.spacing.lg,
  xl: tokens.spacing.xl,
};

/**
 * Layout primitive for simple fixed-column grids.
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(function Grid(
  { children, className, columns = 1, gap = 'md', ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('ui-grid', className)}
      style={
        {
          display: 'grid',
          gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`,
          gap: gapByToken[gap],
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
});

Grid.displayName = 'Grid';
