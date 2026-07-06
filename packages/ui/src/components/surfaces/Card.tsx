import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

/**
 * Card surface container.
 */
export type CardProps = {
  children?: React.ReactNode;
  className?: string;
  elevated?: boolean;
  outlined?: boolean;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, className, elevated, outlined, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('ui-card', className)}
      style={
        {
          backgroundColor: tokens.colors.surface.base,
          borderRadius: tokens.radius.md,
          padding: tokens.spacing.lg,
          borderWidth: outlined ? '1px' : '0',
          borderStyle: outlined ? 'solid' : 'solid',
          borderColor: tokens.colors.border.base,
          boxShadow: elevated ? tokens.shadows.md : tokens.shadows.none,
          fontFamily: tokens.typography.fontFamily.sans,
          color: tokens.colors.surface.onBase,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';
