import { ComponentPropsWithout, RemovedProps } from '../../types/component-props';
import { Orientation } from '../../types/orientation';

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
   */
  color?: string;
}
