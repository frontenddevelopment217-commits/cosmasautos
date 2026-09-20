import * as React from 'react';
import type { ClassValue } from '../../utils/cn';
/**
 * Lightweight tooltip.
 */
export type TooltipProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'role' | 'children' | 'content'> & {
    /** Tooltip content. */
    content: React.ReactNode;
    /** Tooltip trigger children. */
    children: React.ReactElement;
    /** Controls whether tooltip is visible. */
    open?: boolean;
    /** Optional id for aria-describedby compatibility. */
    id?: string;
    /** Additional className for tooltip bubble. */
    className?: ClassValue;
};
/**
 * Consolidated tooltip component.
 */
export declare const Tooltip: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "role" | "content"> & {
    /** Tooltip content. */
    content: React.ReactNode;
    /** Tooltip trigger children. */
    children: React.ReactElement;
    /** Controls whether tooltip is visible. */
    open?: boolean;
    /** Optional id for aria-describedby compatibility. */
    id?: string;
    /** Additional className for tooltip bubble. */
    className?: ClassValue;
} & React.RefAttributes<HTMLDivElement>>;
