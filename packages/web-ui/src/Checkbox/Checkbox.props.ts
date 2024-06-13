import type { ReactNode } from 'react';
import { BaseCheckboxProps } from '../CheckboxTile/BaseCheckboxGroup';

export interface CheckboxProps extends BaseCheckboxProps {
  /**
   * The label for the Checkbox. If not using please properly associate the
   * Radio with a label using the `aria-label` or `aria-labelledby` props.
   */
  label?: ReactNode;
  /** Helper text for the Checkbox. TODO: Will not display if the radio group has `helperText` set. */
  helperText?: ReactNode;
}
