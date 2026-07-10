import * as React from 'react';
import { type ImagePlaceholder } from './ImageGallery';
export type ProductGalleryProps = {
    className?: string;
    /** Main images (visual only). */
    images: ImagePlaceholder[];
    /** Optional thumbnails rendered as additional placeholders. */
    thumbnails?: ImagePlaceholder[];
    height?: number;
};
export declare function ProductGallery({ className, images, thumbnails, height }: ProductGalleryProps): React.JSX.Element;
