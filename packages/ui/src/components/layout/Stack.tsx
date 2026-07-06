import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

/**
 * Stack.
 *
 * Simple flexbox layout with direction and tokenized gap.
 */
export type StackProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'> & {
  /** Layout contents */
  children?: React.ReactNode;
  /** Optional extra className */
  className?: string;
  /** Stack direction */
  direction?: 'vertical' | 'horizontal';
  /** Tokenized flex gap */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** flex align-items */
  align?: React.CSSProperties['alignItems'];
  /** flex justify-content */
  justify?: React.CSSProperties['justifyContent'];
  /** Toggle flex wrap */
  wrap?: boolean;
};

const gapByToken: Record<NonNullable<StackProps['gap']>, string> = {
  none: '0',

  xs: tokens.spacing.xs,
  sm: tokens.spacing.sm,
  md: tokens.spacing.md,
  lg: tokens.spacing.lg,
  xl: tokens.spacing.xl,
};

/**
 * Layout primitive for simple spacing between children.
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(function Stack(
  { children, className, direction = 'vertical', gap = 'md', align, justify, wrap, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('ui-stack', className)}
      style={
        {
          display: 'flex',
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          gap: gapByToken[gap],
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap ? 'wrap' : 'nowrap',
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
});

Stack.displayName = 'Stack';
