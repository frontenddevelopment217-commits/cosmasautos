import * as React from 'react';
export type CardProps = {
    children?: React.ReactNode;
    className?: string;
    elevated?: boolean;
    outlined?: boolean;
};
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
