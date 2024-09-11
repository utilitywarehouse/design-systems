import type { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';
import type { ReactNode } from 'react';

export interface BaseCheckboxProps
  extends Omit<
    RadixCheckboxProps,
    'asChild' | 'value' | 'onCheckedChange' | 'defaultChecked' | 'defaultValue'
  > {
  /** The value given as data when submitted with a `name`. */
  value?: string;
  defaultValue?: string;
  /**
   * The label for the Checkbox. If not using please properly associate the
   * checkbox with a label using the `aria-label` or `aria-labelledby` props.
   */
  label?: ReactNode;
  /** Helper text for the Checkbox. Will not display if the checkbox group has `helperText` set. */
  helperText?: ReactNode;
  /** The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange. */
  checked?: boolean;
  /** Event handler called when the checked state of the checkbox changes. */
  onCheckedChange?: (checked: boolean) => void;
  /** The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state. */
  defaultChecked?: boolean;
}
