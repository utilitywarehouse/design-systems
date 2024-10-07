import type { ComponentPropsWithoutRef } from 'react';

import { Responsive } from '../../types';

export interface InputProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Sets the component size
   * @default medium
   */
  size?: Responsive<'medium' | 'small'>;
}
