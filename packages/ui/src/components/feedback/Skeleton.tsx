import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

export type SkeletonProps = {
  /** Width in CSS units (e.g. 100%, 12rem, 200px). */
  width?: React.CSSProperties['width'];
  /** Height in CSS units (e.g. 1rem, 16px). */
  height?: React.CSSProperties['height'];
  /** Border radius token or keyword. */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>;

/**
 * Skeleton placeholder.
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  { width, height, rounded = 'md', className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('ui-skeleton', className)}
      style={
        {
          width: width ?? '100%',
          height: height ?? tokens.spacing.lg,
          borderRadius: tokens.radius[rounded],
          backgroundColor: tokens.colors.surface.muted,
          border: `1px solid ${tokens.colors.border.subtle}`,
          boxSizing: 'border-box',
        } as React.CSSProperties
      }
      {...rest}
    />
  );
});

Skeleton.displayName = 'Skeleton';
