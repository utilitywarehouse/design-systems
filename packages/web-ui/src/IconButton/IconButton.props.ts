import { BaseButtonProps } from '../BaseButton';

export type IconButtonProps = BaseButtonProps & {
  /**
   * Sets the button height.
   * @default large
   */
  size?: 'large' | 'small' | 'xsmall';
};
