import { ComponentPropsWithoutRef } from 'react';

import type { LabelProps } from '../Label';

export interface HelperTextProps
  extends ComponentPropsWithoutRef<'span'>,
    Pick<LabelProps, 'disableUserSelect'> {
  /**
   * Set the helper text appearance to disabled.
   * This will be overriden by the validation status.
   */
  disabled?: boolean;
  /**
   * Set the helper text appearance to show the validation status.
   * This will override the disabled styles.
   *
   * @default undefined
   */
  validationStatus?: 'valid' | 'invalid';
  /**
   * Show the relevant pre-defined icon.
   */
  showIcon?: boolean;
}
