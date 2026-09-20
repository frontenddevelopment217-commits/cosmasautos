import * as React from 'react';
import type { ClassValue } from '../../utils/cn';
/**
 * Modal dialog with backdrop and basic accessibility.
 */
export type ModalProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'role' | 'aria-modal' | 'title'> & {
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
export declare const Modal: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "role" | "aria-modal"> & {
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
} & React.RefAttributes<HTMLDivElement>>;
