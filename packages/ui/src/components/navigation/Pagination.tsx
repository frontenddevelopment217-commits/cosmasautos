import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

/**
 * Pagination.
 *
 * Provides previous/next controls and current page indication.
 */
export type PaginationProps = React.ComponentPropsWithoutRef<'nav'> & {
  /** Current page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when previous is requested */
  onPrevious?: () => void;
  /** Callback when next is requested */
  onNext?: () => void;
};

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(function Pagination(
  { className, style, currentPage, totalPages, onPrevious, onNext, ...rest },
  ref,
) {
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <nav
      ref={ref}
      aria-label="Pagination"
      className={cn('ui-pagination', className)}
      style={{
        padding: tokens.spacing.md,
        fontFamily: tokens.typography.fontFamily.sans,
        color: tokens.colors.text.primary,
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing.sm }}>
        <button
          type="button"
          onClick={canGoPrev ? onPrevious : undefined}
          disabled={!canGoPrev}
          aria-label="Previous page"
          style={{
            cursor: canGoPrev ? 'pointer' : 'not-allowed',
            padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
            borderRadius: tokens.radius.sm,
            border: `1px solid ${tokens.colors.border.base}`,
            backgroundColor: tokens.colors.surface.base,
            color: tokens.colors.text.secondary,
          }}
        >
          Previous
        </button>

        <div aria-live="polite" style={{ fontWeight: tokens.typography.fontWeight.medium }}>
          Page {currentPage} of {totalPages}
        </div>

        <button
          type="button"
          onClick={canGoNext ? onNext : undefined}
          disabled={!canGoNext}
          aria-label="Next page"
          style={{
            cursor: canGoNext ? 'pointer' : 'not-allowed',
            padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
            borderRadius: tokens.radius.sm,
            border: `1px solid ${tokens.colors.border.base}`,
            backgroundColor: tokens.colors.surface.base,
            color: tokens.colors.text.secondary,
          }}
        >
          Next
        </button>
      </div>
    </nav>
  );
});

Pagination.displayName = 'Pagination';
