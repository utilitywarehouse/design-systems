import { ComponentPropsWithout, RemovedProps } from '../../types/component-props';

export type ButtonBaseProps = ComponentPropsWithout<'button', RemovedProps> &
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
  );
