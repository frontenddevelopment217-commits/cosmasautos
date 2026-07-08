import * as React from 'react';

import { cn } from '../../utils/cn';
import type { ClassValue } from '../../utils/cn';

/**
 * Drawer dialog with backdrop.
 */
export type DrawerProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'role' | 'aria-modal'> & {
  /** Controls whether the drawer is visible. */
  open: boolean;
  /** Called when the user requests to close the drawer. */
  onClose: () => void;
  /** Drawer side. */
  side: 'left' | 'right' | 'top' | 'bottom';
  /** Drawer content. */
  children?: React.ReactNode;
  /** Additional className for the panel. */
  className?: ClassValue;
};

/**
 * Consolidated drawer component.
 */
export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
  { open, onClose, side, children, className, ...divProps },
  ref,
) {
  React.useEffect(() => {
    if (!open) return;

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keyup', onKeyUp);
    return () => window.removeEventListener('keyup', onKeyUp);
  }, [open, onClose]);

  if (!open) return null;

  const placement = side;

  return (
    <div
      style={styles.backdrop}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        {...divProps}
        ref={ref}
        role="dialog"
        aria-modal="true"
        className={cn(styles.panel, className as unknown as string)}
        style={{ ...styles.panelInline(placement), ...(divProps.style ?? {}) }}
      >
        {children}
      </div>
    </div>
  );
});

Drawer.displayName = 'Drawer';

const styles = {
  backdrop: {
    position: 'fixed' as const,
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    zIndex: 60,
  },
  panel: 'cosmas-drawer-panel',
  panelInline: (side: 'left' | 'right' | 'top' | 'bottom'): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'absolute',
      background: 'white',
      color: '#111827',
      borderRadius: 12,
      boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
      outline: 'none',
      overflow: 'auto',
      padding: 16,
    };

    switch (side) {
      case 'left':
        return { ...base, left: 16, top: 16, bottom: 16, width: 360 };
      case 'right':
        return { ...base, right: 16, top: 16, bottom: 16, width: 360 };
      case 'top':
        return { ...base, left: 16, right: 16, top: 16, height: 240 };
      case 'bottom':
        return { ...base, left: 16, right: 16, bottom: 16, height: 240 };
    }
  },
};
