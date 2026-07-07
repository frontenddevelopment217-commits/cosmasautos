import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

export type SpinnerProps = {
  /** Visual size in pixels. */
  size?: number;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>;

/**
 * Spinner.
 *
 * Static, accessible loading indicator (no animation by design).
 */
export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(
  { size, className, ...rest },
  ref,
) {
  const s = size ?? 24;

  return (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={cn('ui-spinner', className)}
      style={
        {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: s,
          height: s,
          borderRadius: tokens.radius.full,
          borderWidth: Math.max(2, Math.round(s * 0.08)),
          borderStyle: 'solid',
          borderColor: tokens.colors.border.base,
          borderTopColor: tokens.colors.primary.base,
          boxSizing: 'border-box',
          fontFamily: tokens.typography.fontFamily.sans,
          flex: '0 0 auto',
        } as React.CSSProperties
      }
      {...rest}
    >
      <span
        style={
          {
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          } as React.CSSProperties
        }
      >
        Loading
      </span>
    </div>
  );
});

Spinner.displayName = 'Spinner';
