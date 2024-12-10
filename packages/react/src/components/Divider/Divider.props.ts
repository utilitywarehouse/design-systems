import { PropDef } from '../../props/prop-def';
import { ComponentPropsWithout, RemovedProps } from '../../types/component-props';
import { Orientation } from '../../types/orientation';

export const dividerPropDefs = {
  color: { className: 'divider-color', responsive: false },
} satisfies {
  color: PropDef<string>;
};

export interface DividerProps extends ComponentPropsWithout<'hr', 'children' | RemovedProps> {
  /**
   * @default horizontal
   */
  orientation?: Orientation;
  /**
   * Whether or not the component is purely decorative. When true, accessibility-related attributes
   * are updated so that that the rendered element is removed from the accessibility tree.
   */
  decorative?: boolean;
  /**
   * Override the default Divider colour.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   */
  color?: string;
}
