import { ComponentPropsWithoutRef } from 'react';
import { Responsive } from '../../types';

export type ButtonProps = {
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
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
} & ComponentPropsWithoutRef<'button'>;
