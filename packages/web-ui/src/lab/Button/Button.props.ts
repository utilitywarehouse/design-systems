import { Responsive } from '../../types';
import { UnstyledButtonProps } from '../../UnstyledButton';

export type ButtonProps = UnstyledButtonProps & {
  /**
   * Sets the button's visual variant
   * @default solid
   */
  variant?: 'solid' | 'outline' | 'ghost';
  /**
   * Sets the button's colour scheme
   * @default cyan
   */
  colorScheme?: 'cyan' | 'red' | 'green' | 'gold' | 'grey';
  /**
   * Sets the button height.
   * @default large
   */
  size?: Responsive<'large' | 'small'>;
};
