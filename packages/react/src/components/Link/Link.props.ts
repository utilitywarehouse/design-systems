import { PropDef } from '../../props/prop-def';
import { ComponentPropsWithout, RemovedProps } from '../../types/component-props';
import { Responsive } from '../../types/responsive';

const sizes = ['small', 'large'];

export const linkPropDefs = {
  size: { className: 'size', tokens: sizes, responsive: true, default: 'large' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
};

export interface LinkProps extends ComponentPropsWithout<'a', RemovedProps> {
  /**
   * Sets the link size.
   * @default large
   */
  size?: Responsive<(typeof sizes)[number]>;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
}
