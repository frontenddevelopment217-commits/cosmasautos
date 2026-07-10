import * as React from 'react';
import { type ImagePlaceholder } from './ImageGallery';
export type ProductListItemProps = {
    className?: string;
    title?: string;
    description?: string;
    brand?: string;
    price?: string;
    ratingValue?: string;
    stockLabel?: string;
    compatibleLabel?: string;
    images: ImagePlaceholder[];
    wishlistAriaLabel?: string;
    addToCartChildren?: React.ReactNode;
    addToCartDisabled?: boolean;
};
export declare function ProductListItem({ className, title, description, brand, price, ratingValue, stockLabel, compatibleLabel, images, wishlistAriaLabel, addToCartChildren, addToCartDisabled, }: ProductListItemProps): React.JSX.Element;
