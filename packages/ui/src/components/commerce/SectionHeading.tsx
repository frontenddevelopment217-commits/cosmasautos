import * as React from 'react';

import { Heading } from '../../components/typography/Heading';

export type SectionHeadingProps = {
  children?: React.ReactNode;
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const SectionHeading = React.forwardRef<
  HTMLHeadingElement,
  SectionHeadingProps & Omit<React.ComponentPropsWithoutRef<'h2'>, 'children' | 'ref'>
>(function SectionHeading({ children, as = 'h2', ...rest }, ref) {
  return (
    <Heading as={as as any} ref={ref as any} {...(rest as any)}>
      {children}
    </Heading>
  );
});

SectionHeading.displayName = 'SectionHeading';
