import { Responsive } from '../../types/responsive';
import { ButtonBaseProps } from '../ButtonBase/ButtonBase.props';

export type ButtonProps = ButtonBaseProps & {
  /**
   * Sets the button height.
   * @default medium
   */
  size?: Responsive<'medium' | 'small'>;
};
