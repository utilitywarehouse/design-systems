import type { ComponentPropsWithout, RemovedProps } from '../../types/component-props';
import type { Responsive } from '../../types/responsive';

export interface HeadingProps extends ComponentPropsWithout<'h2', RemovedProps> {
  /**
   * Applies the text font styles.
   * @default h2
   */
  variant?: 'displayHeading' | 'h1' | 'h2' | 'h3' | 'h4';
  /**
   * Set the font-weight
   * @default 'bold'
   */
  weight?: Responsive<'regular' | 'bold'>;
  /**
   * Set the text-align on the component.
   */
  align?: Responsive<'left' | 'center' | 'right'>;
  /**
   * Sets the text colour.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   *
   * @default colorsCommon.brandPrimaryPurple
   */
  color?: string;
}
