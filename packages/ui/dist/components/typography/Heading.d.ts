import * as React from 'react';
type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
/**
 * Polymorphic Heading.
 */
export type HeadingProps<T extends HeadingElement = 'h2'> = {
    as?: T;
    children?: React.ReactNode;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;
export declare const Heading: <T extends HeadingElement = "h2">(props: HeadingProps<T> & {
    ref?: React.ForwardedRef<HTMLHeadingElement>;
}) => React.ReactElement | null;
export {};
