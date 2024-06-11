import type { Input } from '@gluestack-ui/themed';
import type { ComponentProps } from 'react';

export interface InputComponentProps extends ComponentProps<typeof Input> {}

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
  disabled?: InputComponentProps['isDisabled'];
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
}

export default InputProps;
