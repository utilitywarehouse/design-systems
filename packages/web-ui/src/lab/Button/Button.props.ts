import { ComponentPropsWithoutRef } from 'react';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
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
  size?: 'large' | 'small';
};
