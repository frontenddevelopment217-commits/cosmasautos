'use client';

import * as React from 'react';
import { X } from 'lucide-react';

import { NavigationMenu } from './NavigationMenu';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Lock page scroll while the drawer is open.
  React.useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        aria-hidden
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.6)',
          zIndex: 60,
        }}
      />

      <nav
        aria-label="Mobile navigation"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(320px, 85vw)',
          background: '#0D0D0F',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          zIndex: 70,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              borderRadius: 9999,
              color: '#fff',
              background: 'transparent',
              border: 'none',
            }}
          >
            <X size={20} strokeWidth={1.75} />
          </button>
        </div>

        {/* closes the drawer when a link inside is tapped */}
        <div onClick={onClose}>
          <NavigationMenu variant="vertical" />
        </div>
      </nav>
    </>
  );
}

MobileNav.displayName = 'MobileNav';
