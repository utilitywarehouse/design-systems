import { ComponentPropsWithoutRef } from 'react';

export interface BaseBadgeProps extends ComponentPropsWithoutRef<'span'> {
  /**
   * Sets the colour scheme.
   * @default cyan
   */
  colorScheme?: 'cyan' | 'green' | 'red' | 'gold' | 'grey';
  /**
   * Removes the bottom radius, set when the Badge sits directly above another container
   * @default false
   */
  hasBottomRadiusZero?: boolean;
  /**
   * Sets a more compressed padding
   * @default false
   */
  compact?: boolean;
  children: string;
}

export type BadgeProps = BaseBadgeProps &
  (
    | {
        /**
         * Sets the badges's visual variant
         * @default soft
         */
        variant?: 'soft' | 'strong';
      }
    | {
        /**
         * Sets the badges's visual variant
         * @default soft
         */
        variant?: 'outline';
        /**
         * Sets the colorScheme to be inverted, for use on darker brand backgrounds.
         * @default false
         */
        inverted?: boolean;
      }
  );
