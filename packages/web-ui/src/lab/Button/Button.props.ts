import { ComponentPropsWithoutRef } from 'react';

type SolidColorSchemeProps = {
  variant?: 'solid';
  colorScheme?: 'cyan' | 'red' | 'green';
};

type OutlineColorSchemeProps = {
  variant?: 'outline';
  colorScheme?: 'cyan' | 'grey' | 'red' | 'green' | 'gold';
};

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  (SolidColorSchemeProps | OutlineColorSchemeProps) & {
    /**
     * Sets the button's visual variant
     * @default solid
     */
    // variant?: 'solid' | 'outline' | 'ghost';
    /**
     * Sets the button's colour scheme
     * @default cyan
     */
    // colorScheme?: 'cyan';
    /**
     * Sets the button height.
     * @default large
     */
    size?: 'small' | 'large';
  };
