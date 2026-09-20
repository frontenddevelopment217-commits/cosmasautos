import * as React from 'react';
import type { PrimaryButtonProps } from '../buttons';
export type AddToCartButtonProps = Omit<PrimaryButtonProps, 'children'> & {
    children?: React.ReactNode;
};
export declare function AddToCartButton({ className, children, disabled, loading, type, ...rest }: AddToCartButtonProps): React.JSX.Element;
