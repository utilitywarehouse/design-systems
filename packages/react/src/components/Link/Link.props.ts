import { ComponentPropsWithout, RemovedProps } from '../../types/component-props';
import { Responsive } from '../../types/responsive';

export interface LinkProps extends ComponentPropsWithout<'a', RemovedProps> {
  /**
   * Sets the link size.
   * @default large
   */
  size?: Responsive<'large' | 'small'>;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
}
