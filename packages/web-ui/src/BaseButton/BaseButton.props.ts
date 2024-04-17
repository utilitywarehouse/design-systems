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
      }
    | {
        /**
         * Sets the button's visual variant
         * @default solid
         */
        variant?: 'outline' | 'ghost';
        /**
         * Sets the button's colour scheme
         * @default cyan
         */
        colorScheme?: 'cyan' | 'red' | 'green' | 'gold' | 'grey';
      }
  );
