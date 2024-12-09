import { ColorProps } from '../../props/color.props';
import { PropDef } from '../../props/prop-def';
import { TextAlignProps } from '../../props/text-align.props';
import type { ComponentPropsWithout, RemovedProps } from '../../types/component-props';
import type { Responsive } from '../../types/responsive';

const weights = ['regular', 'bold'] as const;
const variants = ['displayHeading', 'h1', 'h2', 'h3', 'h4'] as const;

export const headingPropDefs = {
  weight: { className: 'weight', tokens: weights, responsive: true, default: 'bold' },
  variant: { className: 'variant', tokens: variants, responsive: false, default: 'h2' },
} satisfies {
  weight: PropDef<(typeof weights)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

export interface HeadingProps
  extends TextAlignProps,
    ColorProps,
    ComponentPropsWithout<'h2', RemovedProps> {
  /**
   * @default h2
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  /** Change the default rendered element for the one passed as a child, merging their props and behavior. */
  asChild?: boolean;
  /**
   * Applies the text font styles.
   * @default h2
   */
  variant?: (typeof variants)[number];
  /**
   * Set the font-weight
   * @default 'bold'
   */
  weight?: Responsive<(typeof weights)[number]>;
  /**
   * Set the text-align on the component.
   */
  align?: Responsive<'left' | 'center' | 'right'>;
}
