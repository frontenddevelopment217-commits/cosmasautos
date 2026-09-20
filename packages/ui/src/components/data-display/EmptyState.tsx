import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

export type EmptyStateProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> & {
  className?: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
};

/**
 * Empty state.
 */
export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(function EmptyState(
  { className, style, title, description, icon, action, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('ui-empty-state', className)}
      style={
        {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: tokens.spacing.xl,
          gap: tokens.spacing.md,
          fontFamily: tokens.typography.fontFamily.sans,
          color: tokens.colors.text.primary,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {icon ? (
        <div aria-hidden="true" style={{ display: 'flex', justifyContent: 'center' }}>
          {icon}
        </div>
      ) : null}

      <h2
        style={
          {
            fontSize: tokens.typography.fontSize['2xl'],
            fontWeight: tokens.typography.fontWeight.semibold,
            lineHeight: tokens.typography.lineHeight.normal,
            margin: 0,
          } as React.CSSProperties
        }
      >
        {title}
      </h2>

      {description ? (
        <p
          style={
            {
              margin: 0,
              maxWidth: '48rem',
              color: tokens.colors.text.secondary,
              fontSize: tokens.typography.fontSize.md,
              lineHeight: tokens.typography.lineHeight.normal,
            } as React.CSSProperties
          }
        >
          {description}
        </p>
      ) : null}

      {action ? (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: tokens.spacing.lg,
          }}
        >
          {action}
        </div>
      ) : null}
    </div>
  );
});

(EmptyState as React.ForwardRefExoticComponent<any>).displayName = 'EmptyState';
