import { UnstyledButtonProps } from '../UnstyledButton';

export type BaseButtonProps = UnstyledButtonProps &
  (
    | {
        /**
         * Sets the button's visual variant
         * @default solid
         */
        variant?: 'solid';
        /**
         * Sets the button's colour scheme
         * @default cyan
         */
        colorScheme?: 'cyan' | 'red' | 'green';
        /**
         * Sets the colorScheme to be inverted, for use on darker brand backgrounds.
         * @default false
         */
        inverted?: boolean;
      }
    | {
        variant?: 'outline' | 'ghost';
        colorScheme?: 'cyan' | 'red' | 'green' | 'gold' | 'grey';
      }
  );
