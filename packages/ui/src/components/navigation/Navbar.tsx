import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

/**
 * Navbar.
 *
 * Semantic navigation container for top-level navigation links.
 */
export type NavbarProps = React.ComponentPropsWithoutRef<'nav'>;

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(function Navbar(
  { className, style, ...rest },
  ref,
) {
  return (
    <nav
      ref={ref}
      className={cn('ui-navbar', className)}
      style={{
        padding: tokens.spacing.lg,
        backgroundColor: tokens.colors.background.base,
        borderBottom: `1px solid ${tokens.colors.border.base}`,
        fontFamily: tokens.typography.fontFamily.sans,
        ...style,
      }}
      {...rest}
    />
  );
});

Navbar.displayName = 'Navbar';
