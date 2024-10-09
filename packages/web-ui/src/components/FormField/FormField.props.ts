import type { ComponentPropsWithoutRef } from 'react';

import { Responsive } from '../../types';

export interface FormFieldProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Sets the component size
   * @default medium
   */
  size?: Responsive<'medium' | 'small'>;
}
