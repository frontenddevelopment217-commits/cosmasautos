import * as React from 'react';
export type AvatarGroupProps = ({
    children?: React.ReactNode;
    max?: number;
    overlap?: number;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>) | ({
    children: React.ReactNode;
    max?: number;
    overlap?: number;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>);
/**
 * Avatar group.
 */
export declare const AvatarGroup: React.ForwardRefExoticComponent<AvatarGroupProps & React.RefAttributes<HTMLDivElement>>;
