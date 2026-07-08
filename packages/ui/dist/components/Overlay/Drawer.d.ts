import * as React from 'react';
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
export declare const Drawer: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "role" | "aria-modal"> & {
    /** Controls whether the drawer is visible. */
    open: boolean;
    /** Called when the user requests to close the drawer. */
    onClose: () => void;
    /** Drawer side. */
    side: "left" | "right" | "top" | "bottom";
    /** Drawer content. */
    children?: React.ReactNode;
    /** Additional className for the panel. */
    className?: ClassValue;
} & React.RefAttributes<HTMLDivElement>>;
