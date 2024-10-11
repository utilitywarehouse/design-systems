import type { ReactNode } from 'react';

import type { FieldsetProps } from '../Fieldset';

export interface FormFieldProps extends FieldsetProps {
  /**
   * The label for the FormField.
   */
  label?: ReactNode;
  /**
   * Helper text for the FormField.
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
}
