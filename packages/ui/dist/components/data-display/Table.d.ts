import * as React from 'react';
export type TableProps = Omit<React.ComponentPropsWithoutRef<'table'>, 'className'> & {
    className?: string;
    /** Optional caption text. */
    caption?: string;
};
/**
 * Table.
 */
export declare const Table: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref">, "className"> & {
    className?: string;
    /** Optional caption text. */
    caption?: string;
} & React.RefAttributes<HTMLTableElement>>;
