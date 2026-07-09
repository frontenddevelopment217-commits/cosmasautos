'use client';

import * as React from 'react';

import { IconButton } from '@cosmas/ui';

import { NavigationMenu } from './NavigationMenu';
import { MobileNav } from './MobileNav';

/**
 * Props for the Header component.
 */
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

/**
 * Header
 *
 * Semantic page header.
 *
 * Contains:
 * - Logo placeholder
 * - NavigationMenu
 * - Search placeholder
 * - Account placeholder
 * - Cart placeholder
 * - Mobile navigation trigger button
 */
export function Header({ className, style, ...props }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header
      {...props}
      className={className}
      style={{
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        background: 'transparent',
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
          paddingTop: 16,
          paddingBottom: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div aria-label="Logo placeholder" style={{ fontWeight: 700 }}>
          Cosmas Autos
        </div>

        <div style={{ flex: 1 }}>
          <NavigationMenu />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div aria-label="Search placeholder" style={{ opacity: 0.8 }}>
            Search
          </div>
          <div aria-label="Account placeholder" style={{ opacity: 0.8 }}>
            Account
          </div>
          <div aria-label="Cart placeholder" style={{ opacity: 0.8 }}>
            Cart
          </div>

          <IconButton
            aria-label="Open mobile menu"
            onClick={() => setMobileOpen(true)}
            style={{ marginLeft: 8 }}
          >
            Menu
          </IconButton>
        </div>
      </div>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
