import { type ReactNode } from 'react';

import { FieldsetProps } from '../Fieldset';

export interface FormFieldGroupProps extends FieldsetProps {
  /**
   * The label for the formfield group. This should contain the question being
   * answered by the formfield group.
   *
   * If you don't include a label you need to ensure you use the `aria-label`
   * or `aria-labelledby` prop to properly associate a label with the formfield
   * group.
   */
  label?: ReactNode;
  /**
   * Helper text for the formfield group. Provides a hint such as specific
   * requirements for what to choose. When displayed, child
   * components should not display their own `helperText`.
   */
  helperText?: ReactNode;
  /**
   * Position of the helper text.
   * @default 'top'
   */
  helperTextPosition?: 'top' | 'bottom';
  /** Set whether to display the helper text icon. */
  showHelperTextIcon?: boolean;
  /** Controls whether the error message is displayed. */
  error?: boolean;
  /** The error message to be displayed. */
  errorMessage?: ReactNode;
  /** Set whether to display the error message icon. */
  showErrorMessageIcon?: boolean;
}
