import * as React from 'react';

/** Shared decoration props for input-like controls. */
export type SharedInputDecorationProps = {
  /** Accessible label text/node. */
  label?: React.ReactNode;
  /** Helper text shown below the control. */
  helperText?: React.ReactNode;
  /** Error content; when provided, marks the control as invalid. */
  error?: React.ReactNode;
  /** Additional className(s) appended to the root element. */
  className?: string;
};

type SharedNativeClassProps = {
  className?: string;
};

/**
 * Props for the primitive Input.
 *
 * Extends native input attributes and adds decoration props.
 */
export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'className' | 'children'
> &
  SharedNativeClassProps &
  SharedInputDecorationProps;

/** Props for the primitive TextArea. */
export type TextAreaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'className' | 'children'
> &
  SharedNativeClassProps &
  SharedInputDecorationProps;

/**
 * Props for the primitive Select.
 *
 * Supports native <option> children. No custom dropdown behavior.
 */
export type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'className' | 'children'
> &
  SharedNativeClassProps &
  SharedInputDecorationProps & {
    children?: React.ReactNode;
  };

/**
 * Props for the primitive Checkbox.
 *
 * Must be fully accessible and uses a native <input type="checkbox" />.
 */
export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'className' | 'children'
> &
  SharedNativeClassProps &
  SharedInputDecorationProps;
