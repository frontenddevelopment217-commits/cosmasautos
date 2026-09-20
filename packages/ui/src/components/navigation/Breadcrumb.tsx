import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

/**
 * Breadcrumb.
 *
 * Displays hierarchical navigation as an ordered list.
 */
export type BreadcrumbProps = React.ComponentPropsWithoutRef<'nav'> & {
  /** Breadcrumb items */
  items: Array<{
    /** Visible label */
    label: string;
    /** Link target (if not provided, renders as span) */
    href?: string;
    /** Marks the current page */
    isCurrent?: boolean;
  }>;
};

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(function Breadcrumb(
  { className, style, items, ...rest },
  ref,
) {
  const currentIndex = Math.max(-1, ...items.map((it, idx) => (it.isCurrent ? idx : -1)));

  return (
    <nav
      ref={ref}
      aria-label="Breadcrumb"
      className={cn('ui-breadcrumb', className)}
      style={{
        padding: tokens.spacing.md,
        fontFamily: tokens.typography.fontFamily.sans,
        color: tokens.colors.text.secondary,
        ...style,
      }}
      {...rest}
    >
      <ol
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          gap: tokens.spacing.sm,
          alignItems: 'center',
        }}
      >
        {items.map((item, idx) => {
          const isCurrent = idx === currentIndex || item.isCurrent === true;
          return (
            <li key={`${item.label}-${idx}`} aria-current={isCurrent ? 'page' : undefined}>
              {item.href && !isCurrent ? (
                <a
                  href={item.href}
                  style={{
                    color: tokens.colors.primary.base,
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span style={{ color: isCurrent ? tokens.colors.text.primary : 'inherit' }}>
                  {item.label}
                </span>
              )}
              {idx < items.length - 1 ? (
                <span aria-hidden="true" style={{ padding: `0 ${tokens.spacing.xs}` }}>
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
});

Breadcrumb.displayName = 'Breadcrumb';
