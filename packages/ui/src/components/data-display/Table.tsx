import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

export type TableProps = Omit<React.ComponentPropsWithoutRef<'table'>, 'className'> & {
  className?: string;
  /** Optional caption text. */
  caption?: string;
};

/**
 * Table.
 */
export const Table = React.forwardRef<HTMLTableElement, TableProps>(function Table(
  { className, caption, style, ...rest },
  ref,
) {
  return (
    <div
      className={cn('ui-table-responsive', className && 'ui-table-wrapper')}
      style={
        {
          width: '100%',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        } as React.CSSProperties
      }
    >
      <table
        ref={ref}
        {...rest}
        className={cn('ui-table', className)}
        style={
          {
            width: '100%',
            borderCollapse: 'collapse',
            color: tokens.colors.text.primary,
            fontFamily: tokens.typography.fontFamily.sans,
            fontSize: tokens.typography.fontSize.md,
            ...style,
          } as React.CSSProperties
        }
      >
        {caption ? (
          <caption style={{ padding: tokens.spacing.md, color: tokens.colors.text.secondary }}>
            {caption}
          </caption>
        ) : null}
        {rest.children}
      </table>
    </div>
  );
});

(Table as React.ForwardRefExoticComponent<any>).displayName = 'Table';
