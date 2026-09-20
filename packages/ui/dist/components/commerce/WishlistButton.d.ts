import * as React from 'react';
import type { IconButtonProps } from '../buttons';
export type WishlistButtonProps = Omit<IconButtonProps, 'children'> & {
    /** Accessible label override. */
    'aria-label'?: string;
    /** Optional visual override. */
    children?: React.ReactNode;
};
export declare function WishlistButton({ className, children, disabled, loading, type, 'aria-label': ariaLabel, ...rest }: WishlistButtonProps): React.JSX.Element;
