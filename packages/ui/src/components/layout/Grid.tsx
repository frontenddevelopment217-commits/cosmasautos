import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

export type GridProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'> & {
  children?: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** When true, ignores `columns` and auto-fits as many columns as fit, each at least `minItemWidth` wide. */
  responsive?: boolean;
  /** Minimum width per item when `responsive` is true. Defaults to 260px. */
  minItemWidth?: number;
};

const gapByToken: Record<NonNullable<GridProps['gap']>, string> = {
  none: '0',
  xs: tokens.spacing.xs,
  sm: tokens.spacing.sm,
  md: tokens.spacing.md,
  lg: tokens.spacing.lg,
  xl: tokens.spacing.xl,
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(function Grid(
  { children, className, columns = 1, gap = 'md', responsive, minItemWidth = 260, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('ui-grid', className)}
      style={
        {
          display: 'grid',
          gridTemplateColumns: responsive
            ? `repeat(auto-fit, minmax(min(${minItemWidth}px, 100%), 1fr))`
            : `repeat(${columns},minmax(0,1fr))`,
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
