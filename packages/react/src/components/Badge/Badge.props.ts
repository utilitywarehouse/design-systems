import { ComponentPropsWithout, RemovedProps } from '../../types/component-props';
import { Responsive } from '../../types/responsive';

export interface BadgeProps extends ComponentPropsWithout<'span', RemovedProps> {
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
   * Removes the bottom radius, set when the Badge sits directly above another container
   * @default false
   */
  bottomRadiusZero?: boolean;
  /**
   * Sets a more compact padding
   * @default false
   */
  size?: Responsive<'small' | 'medium'>;
}
