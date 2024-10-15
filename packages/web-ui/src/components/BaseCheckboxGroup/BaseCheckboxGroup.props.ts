import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { BaseCheckboxGroupContextValue } from './BaseCheckboxGroup.context';

import { BoxProps } from '../Box';

// TODO: should probably extend formfield props
export interface BaseCheckboxGroupProps extends ComponentPropsWithoutRef<'fieldset'> {
  name?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: Array<string>;
  value?: BaseCheckboxGroupContextValue['value'];
  onValueChange?: (value: Array<string>) => void;
  /**
   * The label for the checkbox group. This should contain the question being
   * answered by the checkbox group.
   *
   * If you don't include a label you need to ensure you use the `aria-label`
   * or `aria-labelledby` prop to properly associate a label with the checkbox
   * group.
   */
  label?: ReactNode;
  /**
   * Helper text for the checkbox group. Provides a hint such as specific
   * requirements for what to choose. When displayed, child `Checkbox` or
   * `CheckboxTile` components will not display `helperText`.
   */
  helperText?: ReactNode;
  /**
   * Position of the helper text.
   * @default 'top'
   */
  helperTextPosition?: 'top' | 'bottom';
  /**
   * Set whether to display the helper text icon.
   */
  showHelperTextIcon?: boolean;
  /** Controls whether the error message is displayed. */
  error?: boolean;
  /** The error message to be displayed. */
  errorMessage?: ReactNode;
  /**
   * Set whether to display the error message icon.
   */
  showErrorMessageIcon?: boolean;
  /**
   * Set the width of the CheckboxGroup children, separate to the width of the
   * entire CheckboxGroup.
   */
  contentWidth?: BoxProps['width'];
}
