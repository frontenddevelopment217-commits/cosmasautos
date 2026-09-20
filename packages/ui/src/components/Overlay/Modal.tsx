import * as React from 'react';

import { cn } from '../../utils/cn';
import type { ClassValue } from '../../utils/cn';

/**
 * Modal dialog with backdrop and basic accessibility.
 */
export type ModalProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'role' | 'aria-modal' | 'title'
> & {
  /** Controls whether the modal is visible. */
  open: boolean;
  /** Called when the user requests to close the modal (Escape / backdrop). */
  onClose: () => void;
  /** Optional title text; used for aria-labelledby. */
  title?: string;
  /** Modal body. */
  children?: React.ReactNode;
  /** Additional className for the dialog panel. */
  className?: ClassValue;
};

/**
 * Consolidated modal component.
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(
  { open, onClose, title, children, className, onKeyDown, ...divProps },
  ref,
) {
  const titleId = React.useId();

  React.useEffect(() => {
    if (!open) return;

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keyup', onKeyUp);
    return () => window.removeEventListener('keyup', onKeyUp);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      aria-hidden={undefined}
      style={styles.backdrop}
      onMouseDown={(e) => {
        // Backdrop click closes when clicking outside the panel.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        {...divProps}
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        className={cn(styles.panel, className as unknown as string)}
        style={{ ...styles.panelInline, ...(divProps.style ?? {}) }}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.preventDefault();
            onClose();
            return;
          }
          onKeyDown?.(e);
        }}
      >
        {title ? (
          <div id={titleId} style={styles.title}>
            {title}
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

const styles = {
  backdrop: {
    position: 'fixed' as const,
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 60,
    padding: 16,
  },
  panel: 'cosmas-modal-panel',
  panelInline: {
    background: 'white',
    borderRadius: 12,
    boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
    color: '#111827',
    maxWidth: 720,
    width: '100%',
    outline: 'none',
    padding: 16,
  } as React.CSSProperties,
  title: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 8,
  } as React.CSSProperties,
};
