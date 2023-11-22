import { UnstyledButtonProps } from '../UnstyledButton';

export type BaseButtonProps = UnstyledButtonProps & {
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
};
