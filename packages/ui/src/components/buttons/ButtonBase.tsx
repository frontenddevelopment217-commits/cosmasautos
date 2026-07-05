import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

import type { BaseButtonProps, ButtonSize, ButtonVariant } from './types';

/**
 * Primitive button component.
 *
 * Responsible only for:
 * - forwarding refs
 * - merging class names
 * - disabled state
 * - loading state
 * - native button props
 */
export type ButtonBaseProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'className' | 'disabled' | 'children'
> &
  BaseButtonProps & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  };

function getButtonStyles(variant: ButtonVariant, size: ButtonSize) {
  // Primary tokens map.
  const v = variant;

  const paddingYBySize: Record<ButtonSize, string> = {
    sm: tokens.spacing.sm,
    md: tokens.spacing.md,
    lg: tokens.spacing.lg,
  };

  const paddingXBySize: Record<ButtonSize, string> = {
    sm: tokens.spacing.md,
    md: tokens.spacing.lg,
    lg: tokens.spacing.xl,
  };

  const fontSizeBySize: Record<ButtonSize, string> = {
    sm: tokens.typography.fontSize.sm,
    md: tokens.typography.fontSize.md,
    lg: tokens.typography.fontSize.lg,
  };

  const lineHeightBySize: Record<ButtonSize, number> = {
    sm: tokens.typography.lineHeight.normal,
    md: tokens.typography.lineHeight.normal,
    lg: tokens.typography.lineHeight.normal,
  };

  const fontWeightBySize: Record<ButtonSize, number> = {
    sm: tokens.typography.fontWeight.medium,
    md: tokens.typography.fontWeight.semibold,
    lg: tokens.typography.fontWeight.semibold,
  };

  if (v === 'primary') {
    return {
      background: tokens.colors.primary.base,
      color: tokens.colors.primary.onBase,
      borderColor: tokens.colors.primary.base,
      hoverBackground: tokens.colors.primary.hover,
    };
  }

  return {
    background: tokens.colors.secondary.base,
    color: tokens.colors.secondary.onBase,
    borderColor: tokens.colors.secondary.base,
    hoverBackground: tokens.colors.secondary.hover,
  };
}

/**
 * ForwardRef primitive.
 */
export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(function ButtonBase(
  {
    className,
    children,
    disabled,
    loading,
    size = 'md',
    variant = 'primary',
    type = 'button',
    ...rest
  },
  ref,
) {
  const isDisabled = disabled || loading;
  const styles = getButtonStyles(variant, size);

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      className={cn('ui-button', className)}
      data-variant={variant}
      data-size={size}

      style={
        {
          // Note: style is used only to consume design tokens; it is not tailwind-dependent.
          // The appearance is token-derived and consistent with the design system.
          backgroundColor: styles.background,
          color: styles.color,
          borderColor: styles.borderColor,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: tokens.radius.md,
          paddingTop: tokens.spacing.md,
          paddingBottom: tokens.spacing.md,
          paddingLeft: tokens.spacing.lg,
          paddingRight: tokens.spacing.lg,
          boxShadow: 'none',
          fontFamily: tokens.typography.fontFamily.sans,
          fontSize:
            size === 'sm'
              ? tokens.typography.fontSize.sm
              : size === 'lg'
                ? tokens.typography.fontSize.lg
                : tokens.typography.fontSize.md,
          fontWeight: tokens.typography.fontWeight.semibold,
          lineHeight: tokens.typography.lineHeight.normal,
          letterSpacing: tokens.typography.letterSpacing.normal,
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          opacity: isDisabled ? 0.65 : 1,
        } as React.CSSProperties
      }
      {...rest}
    >
      {loading ? <span aria-hidden="true">…</span> : children}
    </button>
  );
});
