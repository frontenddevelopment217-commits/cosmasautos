import * as React from 'react';
export type ImagePlaceholder = {
    /** Unique key for React rendering. */
    id: string;
    /** Optional alt text for the placeholder. */
    alt?: string;
    /** Optional inline image URL (still rendered as a placeholder box). */
    src?: string;
};
export type ImageGalleryProps = {
    className?: string;
    /** Image placeholders to render (visual only). */
    images: ImagePlaceholder[];
    /** Fixed height for placeholders. */
    height?: number;
};
export declare function ImageGallery({ className, images, height }: ImageGalleryProps): React.JSX.Element;
