import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import type { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';

export interface BaseCheckboxProps extends RadixCheckboxProps {
  // extends Omit<
  //   ComponentPropsWithoutRef<typeof RadixCheckbox.Root>,
  //   'checked' | 'defaultChecked' | 'onCheckedChange' | 'name'
  // > {
  value: string;
  /**
   * The label for the Checkbox. If not using please properly associate the
   * Radio with a label using the `aria-label` or `aria-labelledby` props.
   */
  label?: ReactNode;
  /** Helper text for the Checkbox. TODO: Will not display if the radio group has `helperText` set. */
  helperText?: ReactNode;
}
