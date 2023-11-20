import { ComponentPropsWithoutRef } from 'react';

export interface HelperTextProps extends ComponentPropsWithoutRef<'span'> {
  /** Set the text appearance to disabled. */
  disabled?: boolean;
  /**
   * Set the text appearance to show the validation status.
   * This will override the disabled styles.
   * */
  validationStatus?: 'default' | 'valid' | 'invalid';
}
