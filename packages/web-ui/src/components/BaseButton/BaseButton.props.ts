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
        variant?: 'outline' | 'ghost';
        colorScheme?: 'cyan' | 'red' | 'green' | 'gold' | 'grey';
      }
  ) & {
    /** Inverts the component colours, for use on darker backgrounds. */
    inverted?: boolean;
  };
