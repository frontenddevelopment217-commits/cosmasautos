import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingTokens = {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
};

/**
 * Polymorphic Heading.
 */
export type HeadingProps<T extends HeadingElement = 'h2'> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

function getHeadingTokens(as: HeadingElement): HeadingTokens {
  const t = tokens.typography;

  switch (as) {
    case 'h1':
      return {
        fontSize: t.fontSize['3xl'],
        fontWeight: t.fontWeight.bold,
        lineHeight: t.lineHeight.relaxed,
      };
    case 'h2':
      return {
        fontSize: t.fontSize['2xl'],
        fontWeight: t.fontWeight.semibold,
        lineHeight: t.lineHeight.normal,
      };
    case 'h3':
      return {
        fontSize: t.fontSize.xl,
        fontWeight: t.fontWeight.semibold,
        lineHeight: t.lineHeight.normal,
      };
    case 'h4':
      return {
        fontSize: t.fontSize.lg,
        fontWeight: t.fontWeight.medium,
        lineHeight: t.lineHeight.normal,
      };
    case 'h5':
      return {
        fontSize: t.fontSize.md,
        fontWeight: t.fontWeight.medium,
        lineHeight: t.lineHeight.normal,
      };
    case 'h6':
      return {
        fontSize: t.fontSize.sm,
        fontWeight: t.fontWeight.normal,
        lineHeight: t.lineHeight.snug,
      };
  }
}

const HeadingBase = React.forwardRef(function HeadingBase(
  props: HeadingProps<HeadingElement>,
  ref: React.ForwardedRef<HTMLHeadingElement>,
) {
  const { as, children, className, ...rest } = props;
  const Element = (as ?? 'h2') as HeadingElement;
  const headingTokens = getHeadingTokens(Element);

  return (
    <Element
      ref={ref as unknown as React.Ref<HTMLHeadingElement>}
      className={cn('ui-heading', className)}
      style={
        {
          fontFamily: tokens.typography.fontFamily.sans,
          fontSize: headingTokens.fontSize,
          fontWeight: headingTokens.fontWeight,
          lineHeight: headingTokens.lineHeight,
          letterSpacing: tokens.typography.letterSpacing.normal,
        } as React.CSSProperties
      }
      {...(rest as React.ComponentPropsWithoutRef<HeadingElement>)}
    >
      {children}
    </Element>
  );
});

(HeadingBase as React.ForwardRefExoticComponent<any>).displayName = 'Heading';

export const Heading = HeadingBase as unknown as <T extends HeadingElement = 'h2'>(
  props: HeadingProps<T> & { ref?: React.ForwardedRef<HTMLHeadingElement> },
) => React.ReactElement | null;
