import type { BaseButtonProps } from '../BaseButton';

import type { Responsive } from '../../types';

export type ButtonProps = BaseButtonProps & {
  /**
   * Sets the button height.
   * @default large
   */
  size?: Responsive<'medium' | 'small'>;
};
