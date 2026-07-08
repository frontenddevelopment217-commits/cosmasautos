import * as React from 'react';

import { tokens } from '@cosmas/ui';
import { cn } from '@cosmas/ui';

/**
 * Props for the Footer component.
 */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

/**
 * Footer
 *
 * Semantic footer landmark with placeholder sections.
 */
export function Footer({ className, style, ...props }: FooterProps) {
  return (
    <footer
      {...props}
      className={cn(className)}
      style={{
        width: '100%',
        borderTop: `1px solid rgba(0,0,0,0.08)`,
        background: 'transparent',
        padding: 0,
        ...style,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 24,
          paddingBottom: 24,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 16,
          fontFamily: tokens.typography.fontFamily.sans,
        }}
      >
        <section aria-label="Company">
          <h2 style={{ fontSize: 14, fontWeight: 700, margin: 0 }}>Company</h2>
        </section>

        <section aria-label="Quick Links">
          <h2 style={{ fontSize: 14, fontWeight: 700, margin: 0 }}>Quick Links</h2>
        </section>

        <section aria-label="Categories">
          <h2 style={{ fontSize: 14, fontWeight: 700, margin: 0 }}>Categories</h2>
        </section>

        <section aria-label="Contact">
          <h2 style={{ fontSize: 14, fontWeight: 700, margin: 0 }}>Contact</h2>
        </section>

        <section aria-label="Copyright">
          <h2 style={{ fontSize: 14, fontWeight: 700, margin: 0 }}>Copyright</h2>
        </section>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
