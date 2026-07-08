import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type AvatarProps =
  | ({ src: string; alt: string; initials?: never } & Omit<
      React.ComponentPropsWithoutRef<'div'>,
      'children' | 'dangerouslySetInnerHTML'
    >)
  | ({ src?: undefined; alt: string; initials?: string } & Omit<
      React.ComponentPropsWithoutRef<'div'>,
      'children' | 'dangerouslySetInnerHTML'
    >);

/**
 * Avatar.
 */
const AvatarBase = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  const {
    className,
    size = 'md',
    src,
    alt,
    initials,
    style,
    ...rest
  } = props as AvatarProps & {
    src?: string;
    alt: string;
    initials?: string;
    size?: AvatarSize;
  };

  const diameterBySize: Record<AvatarSize, string> = {
    xs: '1.5rem',
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
    xl: '3.5rem',
  };

  const fontSizeBySize: Record<AvatarSize, string> = {
    xs: tokens.typography.fontSize.sm,
    sm: tokens.typography.fontSize.sm,
    md: tokens.typography.fontSize.md,
    lg: tokens.typography.fontSize.lg,
    xl: tokens.typography.fontSize.xl,
  };

  const content =
    src != null && src !== '' ? (
      <img
        alt={alt}
        src={src}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          borderRadius: tokens.radius.full,
          objectFit: 'cover',
        }}
      />
    ) : (
      <span
        aria-label={alt}
        style={{
          fontFamily: tokens.typography.fontFamily.sans,
          fontSize: fontSizeBySize[size],
          fontWeight: tokens.typography.fontWeight.semibold,
          lineHeight: 1,
          color: tokens.colors.text.primary,
        }}
      >
        {initials ?? ''}
      </span>
    );

  return (
    <div
      ref={ref}
      className={cn('ui-avatar', className)}
      style={
        {
          width: diameterBySize[size],
          height: diameterBySize[size],
          borderRadius: tokens.radius.full,
          overflow: 'hidden',
          backgroundColor: tokens.colors.surface.muted,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {content}
    </div>
  );
});

(AvatarBase as React.ForwardRefExoticComponent<any>).displayName = 'Avatar';

export const Avatar = AvatarBase;
