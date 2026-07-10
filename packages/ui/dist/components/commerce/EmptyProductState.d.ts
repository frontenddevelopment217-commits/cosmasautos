import * as React from 'react';
export type EmptyProductStateProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'title' | 'children'> & {
    className?: string;
};
export declare function EmptyProductState({ className, ...rest }: EmptyProductStateProps): React.JSX.Element;
