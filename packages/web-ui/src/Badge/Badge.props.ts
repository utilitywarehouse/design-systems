import { ComponentPropsWithoutRef } from 'react';
import { Responsive } from '../types';

export interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  /**
   * Sets the badges's visual variant
   * @default soft
   */
  variant?: 'soft' | 'strong' | 'outline';
  /**
   * Sets the colour scheme.
   * @default cyan
   */
  colorScheme?: 'cyan' | 'green' | 'red' | 'gold' | 'grey';
  /**
   * Inverts the colorScheme, for use on darker brand backgrounds.
   * Only affects the outline variant
   * @default false
   */
  inverted?: boolean;
  /**
   * Removes the bottom radius, set when the Badge sits directly above another container
   * @default false
   */
  bottomRadiusZero?: boolean;
  /**
   * Sets a more compact padding
   * @default false
   */
  compact?: Responsive<boolean>;
}
