import * as React from 'react';
type TextElement = 'p' | 'span' | 'label' | 'small';
/**
 * Polymorphic Text.
 */
export type TextProps<T extends TextElement = 'p'> = {
    as?: T;
    children?: React.ReactNode;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;
export declare const Text: <T extends TextElement = "p">(props: TextProps<T> & {
    ref?: React.ForwardedRef<HTMLElement>;
}) => React.ReactElement | null;
export {};
