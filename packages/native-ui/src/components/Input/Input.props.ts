import type { Input } from '@gluestack-ui/themed';
import type { ComponentProps } from 'react';

/**
 * Props for the Input component.
 */
interface InputProps extends ComponentProps<typeof Input> {
  /**
   * The show validation icon when validationStatus is 'valid' or 'invalid'.
   * @default true
   * @example
   * ```tsx
   * <Input validationStatus="valid" showValidationIcon={false} />
   * ```
   **/
  showValidationIcon?: boolean;
}

export default InputProps;
