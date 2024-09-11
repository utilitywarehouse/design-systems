import type { RadioGroupItemProps } from '@radix-ui/react-radio-group';
import type { ReactNode } from 'react';

export interface RadioProps extends Omit<RadioGroupItemProps, 'children'> {
  /**
   * The label for the Radio. If not using please properly associate the
   * Radio with a label using the `aria-label` or `aria-labelledby` props.
   */
  label?: ReactNode;
  /** Helper text for the Radio. Will not display if the radio group has `helperText` set. */
  helperText?: ReactNode;
}
