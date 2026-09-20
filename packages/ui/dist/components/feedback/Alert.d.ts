import * as React from 'react';
export type AlertVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type AlertProps = {
    /** Semantic alert variant. */
    variant: AlertVariant;
    /** Optional title text. */
    title?: React.ReactNode;
    /** Alert content. */
    children?: React.ReactNode;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'role'>;
/**
 * Alert.
 *
 * Renders a semantic, token-driven alert message.
 */
export declare const Alert: React.ForwardRefExoticComponent<{
    /** Semantic alert variant. */
    variant: AlertVariant;
    /** Optional title text. */
    title?: React.ReactNode;
    /** Alert content. */
    children?: React.ReactNode;
    className?: string;
} & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "children" | "className" | "role"> & React.RefAttributes<HTMLDivElement>>;
