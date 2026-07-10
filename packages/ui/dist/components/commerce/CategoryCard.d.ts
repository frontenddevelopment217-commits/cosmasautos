import * as React from 'react';
export type CategoryCardProps = {
    className?: string;
    title?: string;
    description?: string;
    /** Optional CTA placeholder label. */
    ctaLabel?: string;
};
export declare function CategoryCard({ className, title, description, ctaLabel }: CategoryCardProps): React.JSX.Element;
