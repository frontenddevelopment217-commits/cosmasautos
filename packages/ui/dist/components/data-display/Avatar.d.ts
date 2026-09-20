import * as React from 'react';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarProps = ({
    src: string;
    alt: string;
    initials?: never;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'dangerouslySetInnerHTML'>) | ({
    src?: undefined;
    alt: string;
    initials?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'dangerouslySetInnerHTML'>);
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
