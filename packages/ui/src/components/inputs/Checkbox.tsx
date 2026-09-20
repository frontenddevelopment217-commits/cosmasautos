'use client';

import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';

import type { CheckboxProps } from './types';

/**
 * Accessible native checkbox with optional helper/error.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, helperText, error, className, id, 'aria-describedby': ariaDescribedBy, ...rest },
  ref,
) {
  const reactId = React.useId();
  const labelId = id ? `${id}__label` : `ui-checkbox-label__${reactId}`;
  const helperId = `${labelId}__helper`;
  const errorId = `${labelId}__error`;

  const describedByParts = [
    ariaDescribedBy,
    helperText ? helperId : undefined,
    error ? errorId : undefined,
  ].filter(Boolean) as string[];

  const invalid = error != null && error !== false && error !== '';

  return (
    <div className={cn('ui-checkbox-root', className)}>
      <div style={rowStyle}>
        <input
          {...rest}
          id={id}
          ref={mergeRefs(ref)}
          type="checkbox"
          className={cn('ui-checkbox', (rest as { className?: string }).className)}
          aria-invalid={invalid || Boolean(rest['aria-invalid'])}
          aria-describedby={describedByParts.length ? describedByParts.join(' ') : undefined}
          style={inputStyle(invalid)}
        />

        {label ? (
          <label id={labelId} htmlFor={id} style={labelTextStyle}>
            {label}
          </label>
        ) : null}
      </div>

      {helperText ? (
        <div id={helperId} className="ui-checkbox-helper" style={helperStyle}>
          {helperText}
        </div>
      ) : null}

      {invalid ? (
        <div id={errorId} className="ui-checkbox-error" style={errorStyle}>
          {error}
        </div>
      ) : null}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

const rowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: tokens.spacing.sm,
};

function inputStyle(invalid: boolean): React.CSSProperties {
  return {
    width: '1rem',
    height: '1rem',
    borderRadius: tokens.radius.sm,
    accentColor: invalid ? tokens.colors.danger.base : tokens.colors.primary.base,
  };
}

const labelTextStyle: React.CSSProperties = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.md,
  lineHeight: tokens.typography.lineHeight.normal,
  color: tokens.colors.text.primary,
  cursor: 'pointer',
};

const helperStyle: React.CSSProperties = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  marginTop: tokens.spacing.xs,
  color: tokens.colors.text.muted,
};

const errorStyle: React.CSSProperties = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  marginTop: tokens.spacing.xs,
  color: tokens.colors.danger.base,
};
