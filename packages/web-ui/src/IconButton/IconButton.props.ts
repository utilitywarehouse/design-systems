import { BaseButtonProps } from '../BaseButton';
import { Responsive } from '../types';

export type IconButtonProps = BaseButtonProps & {
  /**
   * An accessibility label that describes the button.
   * Make sure this label reflects the visual icon.
   */
  label: string;
  /**
   * Sets the button height & width.
   * @default large
   */
  size?: Responsive<'large' | 'medium' | 'small' | 'xsmall'>;
};
