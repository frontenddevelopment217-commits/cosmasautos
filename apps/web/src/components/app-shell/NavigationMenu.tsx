'use client';

import * as React from 'react';
import Link from 'next/link';

import { navigation } from '../../config/navigation';

export interface NavigationMenuProps {
  className?: string;
  variant?: 'horizontal' | 'vertical';
}

export function NavigationMenu({ className, variant = 'horizontal' }: NavigationMenuProps) {
  if (!Array.isArray(navigation) || navigation.length === 0) return null;

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
        width: isVertical ? '100%' : undefined,
      }}
    >
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          style={
            isVertical
              ? {
                  display: 'block',
                  width: '100%',
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
