import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

/**
 * Section.
 *
 * Applies vertical padding with design spacing tokens and renders a semantic element via `as`.
 */
export type SectionProps = {
  /** Layout contents */
  children?: React.ReactNode;
  /** Optional extra className */
  className?: string;
  /** Semantic element */
  as?: 'section' | 'main' | 'article' | 'aside';
  /** Vertical spacing preset */
  spacing?: 'none' | 'sm' | 'md' | 'lg';
} & Omit<
  React.ComponentPropsWithoutRef<'section'>,
  'as' | 'children' | 'className' | 'style' | 'ref'
>;

const paddingYBySpacing: Record<
  NonNullable<SectionProps['spacing']>,
  React.CSSProperties['paddingTop']
> = {
  none: '0',
  sm: tokens.spacing.sm,
  md: tokens.spacing.md,
  lg: tokens.spacing.lg,
};

/**
 * Layout primitive for vertical rhythm.
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(function Section(
  { children, className, as = 'section', spacing = 'md', ...rest },
  ref,
) {
  const Element = as;

  return (
    <Element
      ref={ref as unknown as React.Ref<HTMLElement>}
      className={cn('ui-section', className)}
      style={{
        paddingTop: paddingYBySpacing[spacing],
        paddingBottom: paddingYBySpacing[spacing],
        ...(rest as unknown as { style?: React.CSSProperties }).style,
      }}
      {...(rest as typeof rest)}
    >
      {children}
    </Element>
  );
});

Section.displayName = 'Section';
