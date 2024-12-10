import { PropDef } from '../../props/prop-def';
import { ComponentPropsWithout, RemovedProps } from '../../types/component-props';

const variants = ['solid', 'outline', 'ghost'] as const;

export const buttonBasePropDefs = {
  variant: { className: 'variant', tokens: variants, responsive: false, default: 'medium' },
} satisfies {
  variant: PropDef<(typeof variants)[number]>;
};

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
