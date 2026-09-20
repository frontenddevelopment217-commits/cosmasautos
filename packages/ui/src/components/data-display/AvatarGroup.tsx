import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';
import { Avatar, AvatarProps } from './Avatar';

export type AvatarGroupProps =
  | ({
      children?: React.ReactNode;
      max?: number;
      overlap?: number;
      className?: string;
    } & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>)
  | ({
      children: React.ReactNode;
      max?: number;
      overlap?: number;
      className?: string;
    } & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>);

/**
 * Avatar group.
 */
export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(function AvatarGroup(
  { children, max = 3, overlap = 10, className, style, ...rest },
  ref,
) {
  const childrenArray = React.Children.toArray(children).filter(Boolean);
  const visible = childrenArray.slice(0, max);
  const overflow = Math.max(0, childrenArray.length - visible.length);

  const overlapPx = Math.max(0, overlap);

  return (
    <div
      ref={ref}
      className={cn('ui-avatar-group', className)}
      style={
        {
          display: 'inline-flex',
          alignItems: 'center',
          position: 'relative',
          fontFamily: tokens.typography.fontFamily.sans,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {visible.map((child, idx) => {
        // Attempt to preserve Avatar props via element clone only when possible.
        const el = child as React.ReactElement<any>;
        const left = idx === 0 ? 0 : -overlapPx;

        return (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={el?.key ?? idx}
            style={{
              marginLeft: left,
              position: 'relative',
              zIndex: 10 - idx,
            }}
          >
            {React.isValidElement(el) ? el : child}
          </span>
        );
      })}

      {overflow > 0 ? (
        <span
          style={{
            marginLeft: visible.length === 0 ? 0 : -overlapPx,
            width: (tokens.typography.fontSize.md as unknown as string) || undefined,
          }}
        >
          <span
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: tokens.radius.full,
              backgroundColor: tokens.colors.surface.muted,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: tokens.typography.fontSize.md,
              fontWeight: tokens.typography.fontWeight.semibold,
              color: tokens.colors.text.primary,
              overflow: 'hidden',
            }}
            aria-label={`+${overflow}`}
          >
            +{overflow}
          </span>
        </span>
      ) : null}
    </div>
  );
});

AvatarGroup.displayName = 'AvatarGroup';
