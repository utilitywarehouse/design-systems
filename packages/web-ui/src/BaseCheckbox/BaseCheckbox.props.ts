import type { ReactNode } from 'react';
import type { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';

export interface BaseCheckboxProps extends Omit<RadixCheckboxProps, 'value'> {
  value?: string;
  /**
   * The label for the Checkbox. If not using please properly associate the
   * checkbox with a label using the `aria-label` or `aria-labelledby` props.
   */
  label?: ReactNode;
  /** Helper text for the Checkbox. Will not display if the checkbox group has `helperText` set. */
  helperText?: ReactNode;
}
