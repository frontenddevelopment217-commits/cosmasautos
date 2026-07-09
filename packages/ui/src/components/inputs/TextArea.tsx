'use client';

import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';

import type { TextAreaProps } from './types';

/**
 * Accessible native textarea with optional label/helper/error.
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { label, helperText, error, className, id: idProp, 'aria-describedby': ariaDescribedBy, ...rest },
  ref,
) {
  const id = idProp ?? undefined;

  const reactId = React.useId();
  const labelId = id ? `${id}__label` : `ui-textarea-label__${reactId}`;
  const helperId = `${labelId}__helper`;
  const errorId = `${labelId}__error`;

  const describedByParts = [
    ariaDescribedBy,
    helperText ? helperId : undefined,
    error ? errorId : undefined,
  ].filter(Boolean) as string[];

  const invalid = error != null && error !== false && error !== '';

  return (
    <div className={cn('ui-textarea-root', className)}>
      {label ? (
        <label id={labelId} htmlFor={id} style={labelStyle}>
          {label}
        </label>
      ) : null}

      <textarea
        {...rest}
        id={id}
        ref={mergeRefs(ref)}
        className={cn('ui-textarea', (rest as { className?: string }).className)}
        aria-invalid={invalid || Boolean(rest['aria-invalid'])}
        aria-describedby={describedByParts.length ? describedByParts.join(' ') : undefined}
        style={inputStyle(invalid)}
      />

      {helperText ? (
        <div id={helperId} className="ui-textarea-helper" style={helperStyle}>
          {helperText}
        </div>
      ) : null}

      {invalid ? (
        <div id={errorId} className="ui-textarea-error" style={errorStyle}>
          {error}
        </div>
      ) : null}
    </div>
  );
});

TextArea.displayName = 'TextArea';

const labelStyle: React.CSSProperties = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  fontWeight: tokens.typography.fontWeight.medium,
  lineHeight: tokens.typography.lineHeight.normal,
  color: tokens.colors.text.secondary,
  marginBottom: tokens.spacing.xs,
  display: 'block',
};

function inputStyle(invalid: boolean): React.CSSProperties {
  return {
    fontFamily: tokens.typography.fontFamily.sans,
    fontSize: tokens.typography.fontSize.md,
    lineHeight: tokens.typography.lineHeight.normal,
    paddingTop: tokens.spacing.md,
    paddingBottom: tokens.spacing.md,
    paddingLeft: tokens.spacing.lg,
    paddingRight: tokens.spacing.lg,
    borderRadius: tokens.radius.md,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: invalid ? tokens.colors.danger.base : tokens.colors.border.base,
    backgroundColor: tokens.colors.surface.base,
    color: tokens.colors.text.primary,
    boxShadow: 'none',
    outline: 'none',
    resize: 'vertical',
    minHeight: '6rem',
  };
}

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
