import type { CheckboxProps as PrimitiveCheckboxProps } from '@radix-ui/react-checkbox';
import type { ReactNode } from 'react';

export interface CheckboxTileProps extends PrimitiveCheckboxProps {
  /**
   * The label for the Checkbox. If not using please properly associate the
   * Radio with a label using the `aria-label` or `aria-labelledby` props.
   */
  label?: ReactNode;
  /** Helper text for the Checkbox. TODO: Will not display if the radio group has `helperText` set. */
  helperText?: ReactNode;
}
