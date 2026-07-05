import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type BadgeSize = 'sm' | 'md';

export type BadgeProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
};

const getVariantTokens = (variant: BadgeVariant) => {
  return tokens.colors[variant];
};

const getSizeTokens = (size: BadgeSize) => {
  switch (size) {
    case 'sm':
      return {
        paddingX: tokens.spacing.sm,
        paddingY: tokens.spacing.xs,
        fontSize: tokens.typography.fontSize.sm,
        lineHeight: tokens.typography.lineHeight.normal,
        fontWeight: tokens.typography.fontWeight.semibold,
      };
    case 'md':
    default:
      return {
        paddingX: tokens.spacing.md,
        paddingY: tokens.spacing.sm,
        fontSize: tokens.typography.fontSize.md,
        lineHeight: tokens.typography.lineHeight.normal,
        fontWeight: tokens.typography.fontWeight.semibold,
      };
  }
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { children, className, variant = 'primary', size = 'md' },
  ref,
) {
  const v = getVariantTokens(variant);
  const s = getSizeTokens(size);

  return (
    <span
      ref={ref}
      className={cn('ui-badge', className)}
      style={
        {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          verticalAlign: 'middle',
          gap: tokens.spacing.xs,
          backgroundColor: v.base,
          color: v.onBase,
          borderRadius: tokens.radius.full,
          paddingLeft: s.paddingX,
          paddingRight: s.paddingX,
          paddingTop: s.paddingY,
          paddingBottom: s.paddingY,
          fontFamily: tokens.typography.fontFamily.sans,
          fontSize: s.fontSize,
          lineHeight: s.lineHeight,
          fontWeight: s.fontWeight,
          userSelect: 'none',
          whiteSpace: 'nowrap',
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';
