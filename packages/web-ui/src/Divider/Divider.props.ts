export const ORIENTATIONS = ['horizontal', 'vertical'] as const;

export type Orientation = (typeof ORIENTATIONS)[number];

export interface DividerProps extends React.ComponentPropsWithoutRef<'hr'> {
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
