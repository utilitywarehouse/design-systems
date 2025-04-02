import type { ComponentType } from 'react';
import type { TextInputProps, ViewProps } from 'react-native';

export interface TextareaBaseProps {
  /**
   * The show validation icon when validationStatus is 'valid' or 'invalid'.
   * @default true
   * @type boolean
   * @example
   * ```tsx
   * <Textarea validationStatus="valid" showValidationIcon={false} />
   * ```
   **/
  showValidationIcon?: boolean;
  /**
   * If true, the input will be disabled.
   *
   * @type boolean
   * @example
   * ```tsx
   * <Textarea disabled={true} />
   * ```
   */
  disabled?: boolean;
  /**
   * The validation status of the Textarea component.
   *
   * @type 'initial' | 'valid' | 'invalid'
   * @example
   * ```tsx
   * <Textarea validationStatus="valid" />
   * ```
   */
  validationStatus?: 'initial' | 'valid' | 'invalid';
  readonly?: boolean;
  focused?: boolean;
}

export interface TextareaWithChildrenProps extends TextareaBaseProps, ViewProps {
  children: React.ReactNode;
  leadingIcon?: never;
  trailingIcon?: never;
}

interface TextareaWithoutChildrenProps extends TextareaBaseProps, TextInputProps {
  children?: never;
  leadingIcon?: ComponentType;
  trailingIcon?: ComponentType;
}

/**
 * Props for the Textarea component.
 */
type TextareaProps = TextareaWithChildrenProps | TextareaWithoutChildrenProps;

export type TextareaContextValue = TextareaBaseProps;

export default TextareaProps;
