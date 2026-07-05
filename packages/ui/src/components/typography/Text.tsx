import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

type TextElement = 'p' | 'span' | 'label' | 'small';

type TextTokens = {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
};

/**
 * Polymorphic Text.
 */
export type TextProps<T extends TextElement = 'p'> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

function getTextTokens(as: TextElement): TextTokens {
  const t = tokens.typography;

  switch (as) {
    case 'small':
      return {
        fontSize: t.fontSize.sm,
        fontWeight: t.fontWeight.normal,
        lineHeight: t.lineHeight.snug,
      };
    case 'p':
    case 'span':
    case 'label':
      return {
        fontSize: t.fontSize.md,
        fontWeight: t.fontWeight.normal,
        lineHeight: t.lineHeight.normal,
      };
  }
}

const TextBase = React.forwardRef(function TextBase(
  props: TextProps<TextElement>,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const { as, children, className, ...rest } = props;
  const Element = (as ?? 'p') as TextElement;
  const textTokens = getTextTokens(Element);

  return (
    <Element
      ref={ref as unknown as React.Ref<any>}
      className={cn('ui-text', className)}
      style={
        {
          fontFamily: tokens.typography.fontFamily.sans,
          fontSize: textTokens.fontSize,
          fontWeight: textTokens.fontWeight,
          lineHeight: textTokens.lineHeight,
          letterSpacing: tokens.typography.letterSpacing.normal,
        } as React.CSSProperties
      }
      {...(rest as unknown as Record<string, unknown>)}
    >
      {children}
    </Element>
  );
});

(TextBase as React.ForwardRefExoticComponent<any>).displayName = 'Text';

export const Text = TextBase as unknown as <T extends TextElement = 'p'>(
  props: TextProps<T> & { ref?: React.ForwardedRef<HTMLElement> },
) => React.ReactElement | null;
