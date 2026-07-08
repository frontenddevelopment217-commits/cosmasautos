'use client';

import * as React from 'react';

import * as navigationModule from '../../config/navigation';

/**
 * Props for the NavigationMenu component.
 */
export interface NavigationMenuProps {
  /** Optional className for the navigation container. */
  className?: string;
}

/**
 * NavigationMenu
 *
 * Renders desktop navigation links.
 *
 * Note: `apps/web/src/config/navigation.ts` is intentionally empty in this phase.
 * This component must gracefully render nothing when there are no navigation items.
 */
export function NavigationMenu({ className }: NavigationMenuProps) {
  const items = (navigationModule as unknown as { navigation?: unknown }).navigation;

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <nav className={className} aria-label="Primary">
      {/* No links in this phase. */}
    </nav>
  );
}

NavigationMenu.displayName = 'NavigationMenu';
