import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

/**
 * Footer.
 *
 * Semantic footer landmark for page-level footer content.
 */
export type FooterProps = React.ComponentPropsWithoutRef<'footer'>;

export const Footer = React.forwardRef<HTMLElement, FooterProps>(function Footer(
  { className, style, ...rest },
  ref,
) {
  return (
    <footer
      ref={ref}
      className={cn('ui-footer', className)}
      style={{
        padding: tokens.spacing.lg,
        backgroundColor: tokens.colors.background.elevated,
        borderTop: `1px solid ${tokens.colors.border.base}`,
        fontFamily: tokens.typography.fontFamily.sans,
        ...style,
      }}
      {...rest}
    />
  );
});

Footer.displayName = 'Footer';
