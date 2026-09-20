import * as React from 'react';
import { type ModalProps } from './Modal';
/**
 * Dialog composed from Modal.
 */
export type DialogProps = Omit<ModalProps, 'children' | 'title' | 'open' | 'onClose' | 'className'> & {
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
export declare const Dialog: React.ForwardRefExoticComponent<Omit<ModalProps, "children" | "className" | "title" | "open" | "onClose"> & {
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
} & React.RefAttributes<HTMLDivElement>>;
