import type { ComponentType } from 'react';
import type { TextInputProps, ViewProps } from 'react-native';

export interface InputBaseProps {
  /**
   * The show validation icon when validationStatus is 'valid' or 'invalid'.
   * @default true
   * @type boolean
   * @example
   * ```tsx
   * <Input validationStatus="valid" showValidationIcon={false} />
   * ```
   **/
  showValidationIcon?: boolean;
  /**
   * If true, the input will be disabled.
   *
   * @type boolean
   * @example
   * ```tsx
   * <Input disabled={true} />
   * ```
   */
  disabled?: boolean;
  /**
   * The validation status of the Input component.
   *
   * @type 'initial' | 'valid' | 'invalid'
   * @example
   * ```tsx
   * <Input validationStatus="valid" />
   * ```
   */
  validationStatus?: 'initial' | 'valid' | 'invalid';
  readonly?: boolean;
  focused?: boolean;
}

export interface InputWithChildrenProps extends InputBaseProps, ViewProps {
  children: React.ReactNode;
  leadingIcon?: never;
  trailingIcon?: never;
  type?: never;
}

interface InputWithoutChildrenProps extends InputBaseProps, TextInputProps {
  children?: never;
  leadingIcon?: ComponentType;
  trailingIcon?: ComponentType;
  type?: 'text' | 'password';
}

/**
 * Props for the Input component.
 */
type InputProps = InputWithChildrenProps | InputWithoutChildrenProps;

export type InputContextValue = InputBaseProps;

export default InputProps;
