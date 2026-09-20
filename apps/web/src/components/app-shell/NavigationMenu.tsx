'use client';

import * as React from 'react';
import Link from 'next/link';

import * as navigationModule from '../../config/navigation';

export interface NavigationMenuProps {
  /** Optional className for the navigation container. */
  className?: string;
  /** 'horizontal' for the desktop header (default), 'vertical' for the mobile drawer. */
  variant?: 'horizontal' | 'vertical';
}

export function NavigationMenu({ className, variant = 'horizontal' }: NavigationMenuProps) {
  const items = (navigationModule as unknown as { navigation?: { label: string; href: string }[] })
    .navigation;

  if (!Array.isArray(items) || items.length === 0) return null;

  const isVertical = variant === 'vertical';

  return (
    <nav
      className={className}
      aria-label="Primary"
      style={{
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        alignItems: isVertical ? 'stretch' : 'center',
        gap: isVertical ? 4 : 32,
      }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          style={
            isVertical
              ? {
                  padding: '14px 4px',
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#fff',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }
              : undefined
          }
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

NavigationMenu.displayName = 'NavigationMenu';
