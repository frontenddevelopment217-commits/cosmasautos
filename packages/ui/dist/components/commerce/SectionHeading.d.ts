import * as React from 'react';
export type SectionHeadingProps = {
    children?: React.ReactNode;
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export declare const SectionHeading: React.ForwardRefExoticComponent<SectionHeadingProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref">, "children" | "ref"> & React.RefAttributes<HTMLHeadingElement>>;
