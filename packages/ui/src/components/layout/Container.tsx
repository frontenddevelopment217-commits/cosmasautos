import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

/**
 * Container.
 *
 * Centers content horizontally with a max-width based on `size`.
 */
export type ContainerProps = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'children' | 'className'
> & {
  /** Layout contents */
  children?: React.ReactNode;
  /** Optional extra className */
  className?: string;
  /** Max-width preset */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

const maxWidthBySize: Record<
  NonNullable<ContainerProps['size']>,
  React.CSSProperties['maxWidth']
> = {
  sm: '28rem',
  md: '36rem',
  lg: '48rem',
  xl: '60rem',
  full: '100%',
};

/**
 * Layout primitive for consistent horizontal centering.
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { children, className, size = 'md', ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('ui-container', className)}
      style={
        {
          width: '100%',
          marginInline: 'auto',
          maxWidth: maxWidthBySize[size],
          paddingInline: tokens.spacing.lg,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';
