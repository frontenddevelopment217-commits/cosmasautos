/**
 * Shared button types for the buttons component family.
 */

import * as React from 'react';

/** Button variants supported by the design system. */
export type ButtonVariant = 'primary' | 'secondary';

/**
 * Supported button sizes.
 *
 * These map to spacing / typography tokens inside `ButtonBase`.
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Common base props for all buttons.
 */
export type BaseButtonProps = {
  /** Additional className(s) appended to the component root. */
  className?: string;
  /** Button content. */
  children?: React.ReactNode;
  /** Visual size. */
  size?: ButtonSize;
  /** Visual variant. */
  variant?: ButtonVariant;
  /** Native disabled state. */
  disabled?: boolean;
  /** Optional loading indicator state. */
  loading?: boolean;
};

/**
 * Props for icon-only buttons.
 *
 * Accessibility: `aria-label` is required.
 */
export type IconOnlyButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  /** Accessible label for the button. */
  'aria-label': string;
  /** Icon node(s). */
  children?: React.ReactNode;
  /** Additional className(s). */
  className?: string;
  /** Optional loading indicator state. */
  loading?: boolean;
};
