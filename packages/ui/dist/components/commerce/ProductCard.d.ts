import * as React from 'react';
import type { ImagePlaceholder } from './ImageGallery';
export type ProductCardProps = {
    className?: string;
    title?: string;
    description?: string;
    brand?: string;
    price?: string;
    ratingValue?: string;
    /** Visual condition badge label (e.g. Brand New / Tokunbo / Nigerian Used). */
    conditionBadgeLabel?: string;
    /** Dealer inventory badge label (e.g. In stock). */
    stockLabel?: string;
    compatibleLabel?: string;
    transmission?: string;
    fuelType?: string;
    mileage?: string;
    year?: string;
    location?: string;
    images: ImagePlaceholder[];
    thumbnails?: ImagePlaceholder[];
    wishlistAriaLabel?: string;
    addToCartChildren?: React.ReactNode;
    addToCartDisabled?: boolean;
    /** Optional CTA label shown as a secondary action (no routing). */
    viewDetailsLabel?: string;
};
export declare function ProductCard({ className, title, description, brand, price, ratingValue, conditionBadgeLabel, stockLabel, compatibleLabel, transmission, fuelType, mileage, year, location, images, thumbnails, wishlistAriaLabel, addToCartChildren, addToCartDisabled, viewDetailsLabel, }: ProductCardProps): React.JSX.Element;
