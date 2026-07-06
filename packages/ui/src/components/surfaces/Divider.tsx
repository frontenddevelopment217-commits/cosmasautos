import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

export type DividerOrientation = 'horizontal' | 'vertical';

/**
 * Divider surface element.
 */
export type DividerProps = {
  className?: string;
  orientation?: DividerOrientation;
} & Omit<React.ComponentPropsWithoutRef<'hr'>, 'className'>;

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(function Divider(
  { className, orientation = 'horizontal', ...rest },
  ref,
) {
  return (
    <hr
      ref={ref}
      className={cn('ui-divider', className)}
      style={
        {
          border: '0',
          backgroundColor: tokens.colors.border.base,
          width: orientation === 'vertical' ? '1px' : '100%',
          height: orientation === 'vertical' ? '100%' : '1px',
          margin: '0',
          flex: orientation === 'vertical' ? '0 0 auto' : '0 0 auto',
          alignSelf: orientation === 'vertical' ? 'stretch' : 'auto',
        } as React.CSSProperties
      }
      {...rest}
    />
  );
});

Divider.displayName = 'Divider';
