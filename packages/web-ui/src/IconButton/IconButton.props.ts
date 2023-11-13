import { BaseButtonProps } from '../BaseButton';
import { Responsive } from '../types';

export type IconButtonProps = BaseButtonProps & {
  /**
   * Sets the button height & width.
   * @default large
   */
  size?: Responsive<'large' | 'small' | 'xsmall'>;
};
