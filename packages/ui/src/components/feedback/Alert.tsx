import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

export type AlertVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type AlertProps = {
  /** Semantic alert variant. */
  variant: AlertVariant;
  /** Optional title text. */
  title?: React.ReactNode;
  /** Alert content. */
  children?: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'role'>;

const variantToTokens = (variant: AlertVariant) => {
  const c = tokens.colors[variant];

  return {
    borderColor: c.base,
    textColor: c.onBase,
    backgroundColor: c.base,
  };
};

/**
 * Alert.
 *
 * Renders a semantic, token-driven alert message.
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { variant, title, children, className, ...rest },
  ref,
) {
  const v = variantToTokens(variant);

  return (
    <div
      ref={ref}
      role="alert"
      className={cn('ui-alert', className)}
      style={
        {
          display: 'flex',
          alignItems: 'flex-start',
          gap: tokens.spacing.sm,
          borderRadius: tokens.radius.md,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: v.borderColor,
          backgroundColor: v.backgroundColor,
          color: v.textColor,
          padding: tokens.spacing.lg,
          fontFamily: tokens.typography.fontFamily.sans,
        } as React.CSSProperties
      }
      {...rest}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.xs }}>
        {title ? (
          <div
            style={
              {
                fontSize: tokens.typography.fontSize.md,
                fontWeight: tokens.typography.fontWeight.semibold,
                lineHeight: tokens.typography.lineHeight.normal,
                letterSpacing: tokens.typography.letterSpacing.normal,
              } as React.CSSProperties
            }
          >
            {title}
          </div>
        ) : null}
        {children ? (
          <div
            style={
              {
                fontSize: tokens.typography.fontSize.md,
                fontWeight: tokens.typography.fontWeight.normal,
                lineHeight: tokens.typography.lineHeight.normal,
                letterSpacing: tokens.typography.letterSpacing.normal,
              } as React.CSSProperties
            }
          >
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
});

Alert.displayName = 'Alert';
