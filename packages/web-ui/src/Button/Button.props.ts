import { BaseButtonProps } from '../BaseButton';
import { Responsive } from '../types';

export type ButtonProps = BaseButtonProps & {
  /**
   * Sets the button height.
   * @default large
   */
  size?: Responsive<'medium' | 'small'>;
};
