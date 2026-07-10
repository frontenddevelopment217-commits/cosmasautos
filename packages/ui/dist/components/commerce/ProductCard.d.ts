import * as React from 'react';
import type { ImagePlaceholder } from './ImageGallery';
export type ProductCardProps = {
    className?: string;
    title?: string;
    description?: string;
    brand?: string;
    price?: string;
    ratingValue?: string;
    stockLabel?: string;
    compatibleLabel?: string;
    images: ImagePlaceholder[];
    thumbnails?: ImagePlaceholder[];
    wishlistAriaLabel?: string;
    addToCartChildren?: React.ReactNode;
    addToCartDisabled?: boolean;
};
export declare function ProductCard({ className, title, description, brand, price, ratingValue, stockLabel, compatibleLabel, images, thumbnails, wishlistAriaLabel, addToCartChildren, addToCartDisabled, }: ProductCardProps): React.JSX.Element;
