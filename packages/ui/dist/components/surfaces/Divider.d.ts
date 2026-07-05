import * as React from 'react';
export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerProps = {
    className?: string;
    orientation?: DividerOrientation;
};
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLHRElement>>;
