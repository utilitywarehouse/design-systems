import type { ReactNode } from 'react';

import type { RadioGroupProps as RadixRadioGroupProps } from '@radix-ui/react-radio-group';

import { BoxProps } from '../Box';

export interface BaseRadioGroupProps extends Omit<RadixRadioGroupProps, 'dir'> {
  children: ReactNode;
  /**
   * The label for the radio group. This should contain the question being
   * answered by the radio group.
   *
   * If you don't include a label you need to ensure you use the `aria-label`
   * or `aria-labelledby` prop to properly associate a label with the radio
   * group.
   */
  label?: ReactNode;
  /**
   * Helper text for the radio group. Provides a hint such as specific
   * requirements for what to choose. When displayed, child `Radio` or
   * `RadioTile` components will not display `helperText`.
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
   * Set the width of the RadioGroup children, separate to the width of the
   * entire RadioGroup.
   */
  contentWidth?: BoxProps['width'];
}
