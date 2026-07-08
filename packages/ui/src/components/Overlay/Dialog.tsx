import * as React from 'react';

import { Modal, type ModalProps } from './Modal';

/**
 * Dialog composed from Modal.
 */
export type DialogProps = Omit<
  ModalProps,
  'children' | 'title' | 'open' | 'onClose' | 'className'
> & {
  /** Controls whether the dialog is visible. */
  open: boolean;
  /** Called when the user requests to close the dialog. */
  onClose: () => void;
  /** Required title text for accessibility. */
  title: string;
  /** Dialog body. */
  children?: React.ReactNode;
  /** Optional footer rendered under body. */
  footer?: React.ReactNode;
  /** Additional className for the dialog panel. */
  className?: string;
};

/**
 * Consolidated dialog component.
 */
export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(function Dialog(
  { open, onClose, title, children, footer, className },
  ref,
) {
  return (
    <Modal ref={ref} open={open} onClose={onClose} title={title} className={className}>
      {children}
      {footer ? <div style={styles.footer}>{footer}</div> : null}
    </Modal>
  );
});

Dialog.displayName = 'Dialog';

const styles = {
  footer: {
    marginTop: 16,
  } as React.CSSProperties,
};
