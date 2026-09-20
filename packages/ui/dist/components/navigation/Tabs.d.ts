import * as React from 'react';
/**
 * Tabs.
 *
 * Accessible tablist + panels implementation.
 */
export type TabsProps = React.ComponentPropsWithoutRef<'div'> & {
    /** Tab definitions */
    tabs: Array<{
        id: string;
        label: string;
        panel: React.ReactNode;
        disabled?: boolean;
    }>;
    /** Controlled selected tab id */
    value?: string;
    /** Default selected tab id (uncontrolled) */
    defaultValue?: string;
    /** Called when selection changes */
    onValueChange?: (value: string) => void;
};
export declare const Tabs: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /** Tab definitions */
    tabs: Array<{
        id: string;
        label: string;
        panel: React.ReactNode;
        disabled?: boolean;
    }>;
    /** Controlled selected tab id */
    value?: string;
    /** Default selected tab id (uncontrolled) */
    defaultValue?: string;
    /** Called when selection changes */
    onValueChange?: (value: string) => void;
} & React.RefAttributes<HTMLDivElement>>;
