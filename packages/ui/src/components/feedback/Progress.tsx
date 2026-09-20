import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

export type ProgressProps = {
  /** Current value. */
  value: number;
  /** Maximum value. */
  max?: number;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'className' | 'role'>;

/**
 * Progress.
 */
export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  { value, max = 100, className, ...rest },
  ref,
) {
  const safeMax = Number.isFinite(max) && max > 0 ? max : 100;
  const raw = Number.isFinite(value) ? value : 0;
  const clamped = Math.min(Math.max(raw, 0), safeMax);
  const pct = (clamped / safeMax) * 100;

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={clamped}

      className={cn('ui-progress', className)}
      style={
        {
          width: '100%',
          height: tokens.spacing.lg,
          borderRadius: tokens.radius.md,
          backgroundColor: tokens.colors.surface.muted,
          border: `1px solid ${tokens.colors.border.subtle}`,
          overflow: 'hidden',
          boxSizing: 'border-box',
        } as React.CSSProperties
      }
      {...rest}
    >
      <div
        style={
          {
            width: `${pct}%`,
            height: '100%',
            backgroundColor: tokens.colors.primary.base,
            borderRadius: tokens.radius.md,
            transition: tokens.animations.transitionPresets.interactive,
          } as React.CSSProperties
        }
      />
    </div>
  );
});

Progress.displayName = 'Progress';
