import * as React from 'react';
/**
 * Section.
 *
 * Applies vertical padding with design spacing tokens and renders a semantic element via `as`.
 */
export type SectionProps = {
    /** Layout contents */
    children?: React.ReactNode;
    /** Optional extra className */
    className?: string;
    /** Semantic element */
    as?: 'section' | 'main' | 'article' | 'aside';
    /** Vertical spacing preset */
    spacing?: 'none' | 'sm' | 'md' | 'lg';
} & Omit<React.ComponentPropsWithoutRef<'section'>, 'as' | 'children' | 'className' | 'style' | 'ref'>;
/**
 * Layout primitive for vertical rhythm.
 */
export declare const Section: React.ForwardRefExoticComponent<{
    /** Layout contents */
    children?: React.ReactNode;
    /** Optional extra className */
    className?: string;
    /** Semantic element */
    as?: "section" | "main" | "article" | "aside";
    /** Vertical spacing preset */
    spacing?: "none" | "sm" | "md" | "lg";
} & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref">, "children" | "className" | "style" | "ref" | "as"> & React.RefAttributes<HTMLElement>>;
