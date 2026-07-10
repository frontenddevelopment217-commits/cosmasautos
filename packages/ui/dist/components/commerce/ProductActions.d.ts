import * as React from 'react';
export type ProductActionsProps = {
    className?: string;
    wishlistAriaLabel?: string;
    addToCartChildren?: React.ReactNode;
    addToCartDisabled?: boolean;
};
export declare function ProductActions({ className, wishlistAriaLabel, addToCartChildren, addToCartDisabled, }: ProductActionsProps): React.JSX.Element;
