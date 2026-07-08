import * as React from 'react';

import { NavigationMenu } from './NavigationMenu';

/**
 * Props for the MobileNav component.
 */
export interface MobileNavProps {
  /** Controls whether the mobile navigation is open. */
  isOpen: boolean;
  /** Called when the mobile navigation should be closed. */
  onClose: () => void;
}

/**
 * MobileNav
 *
 * Semantic navigation container for mobile.
 *
 * This phase does not assume a Drawer exists.
 */
export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <nav
      aria-label="Mobile navigation"
      style={{
        padding: 16,
      }}
      onClick={onClose}
    >
      <NavigationMenu />
    </nav>
  );
}

MobileNav.displayName = 'MobileNav';
