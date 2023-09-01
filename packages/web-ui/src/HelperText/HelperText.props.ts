import { ComponentPropsWithoutRef } from 'react';

export interface HelperTextProps extends ComponentPropsWithoutRef<'span'> {
  /** Set the text appearance to disabled. */
  disabled?: boolean;
  /** Set the text appearance when showing an error message. This will override the disabled styles. */
  error?: boolean;
}
