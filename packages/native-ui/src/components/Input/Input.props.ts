import type { ViewProps } from 'react-native';

export interface InputComponentProps extends ViewProps {}

/**
 * Props for the Input component.
 */
interface InputProps extends Omit<InputComponentProps, 'isInvalid'> {
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

export interface InputContextValue
  extends Pick<
    InputProps,
    'validationStatus' | 'showValidationIcon' | 'disabled' | 'readonly' | 'focused'
  > {}

export default InputProps;
