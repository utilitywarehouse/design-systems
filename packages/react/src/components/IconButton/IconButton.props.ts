import { Responsive } from '../../types/responsive';
import { ButtonBaseProps } from '../ButtonBase/ButtonBase.props';

export type IconButtonProps = ButtonBaseProps & {
  /**
   * An accessibility label that describes the button.
   * Make sure this label reflects the visual icon.
   */
  label: string;
  /**
   * Sets the button height.
   * @default medium
   */
  size?: Responsive<'medium' | 'small' | 'xsmall'>;
};
