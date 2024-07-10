import { BaseButtonProps } from '../../BaseButton';
import { Responsive } from '../../types';

export type ButtonProps = BaseButtonProps & {
  /**
   * Sets the button height.
   * @default medium
   */
  size?: Responsive<'medium' | 'small'>;
};
