'use client';

import * as React from 'react';
import Link from 'next/link';

import * as navigationModule from '../../config/navigation';

export interface NavigationMenuProps {
  /** Optional className for the navigation container. */
  className?: string;
}

/**
 * NavigationMenu
 *
 * Renders desktop navigation links from `apps/web/src/config/navigation.ts`.
 * Renders nothing if that config has no items.
 */
export function NavigationMenu({ className }: NavigationMenuProps) {
  const items = (navigationModule as unknown as { navigation?: { label: string; href: string }[] })
    .navigation;

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <nav
      className={className}
      aria-label="Primary"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 32,
      }}
    >
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

NavigationMenu.displayName = 'NavigationMenu';
