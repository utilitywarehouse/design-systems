import { PropDef } from '../../props/prop-def';
import { ComponentPropsWithout, RemovedProps } from '../../types/component-props';
import { Responsive } from '../../types/responsive';

const variants = ['soft', 'strong', 'outline'] as const;
const sizes = ['small', 'medium'] as const;

export const badgePropDefs = {
  variant: { className: 'variant', tokens: variants, responsive: false, default: 'soft' },
  size: { className: 'size', tokens: sizes, responsive: true, default: 'medium' },
} satisfies {
  variant: PropDef<(typeof variants)[number]>;
  size: PropDef<(typeof sizes)[number]>;
};

export interface BadgeProps extends ComponentPropsWithout<'span', RemovedProps> {
  /**
   * Sets the badges's visual variant
   * @default soft
   */
  variant?: (typeof variants)[number];
  /**
   * Sets the colour scheme.
   * @default cyan
   */
  colorScheme?: 'cyan' | 'green' | 'red' | 'gold' | 'grey';
  /**
   * Removes the bottom radius, set when the Badge sits directly above another container
   * @default false
   */
  bottomRadiusZero?: boolean;
  /**
   * Set the size of the Badge
   * @default medium
   */
  size?: Responsive<(typeof sizes)[number]>;
}
