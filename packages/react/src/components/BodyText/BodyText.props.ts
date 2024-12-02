import type { ComponentPropsWithout, RemovedProps } from '../../types/component-props';
import type { Responsive } from '../../types/responsive';

interface CommonBodyTextProps {
  /**
   * @default p
   */
  as?: 'p' | 'div' | 'span';
  /** Change the default rendered element for the one passed as a child, merging their props and behavior. */
  asChild?: boolean;
  /**
   * Applies the text font styles.
   * @default body
   */
  variant?: 'subtitle' | 'body' | 'legalNote' | 'caption';
  /**
   * Set the font-weight
   * @default regular
   */
  weight?: Responsive<'regular' | 'medium' | 'semibold'>;
  /**
   * Set the text-align on the component.
   */
  align?: Responsive<'left' | 'center' | 'right'>;
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  truncate?: boolean | undefined;
  /**
   * Sets the text colour.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   *
   * @default colorsCommon.brandMidnight
   */
  color?: string;
}
type BodyTextDivProps = { as: 'div' } & ComponentPropsWithout<'div', RemovedProps>;
type BodyTextSpanProps = { as: 'span' } & ComponentPropsWithout<'span', RemovedProps>;
type BodyTextPProps = { as?: 'p' } & ComponentPropsWithout<'p', RemovedProps>;
export type BodyTextProps = CommonBodyTextProps &
  (BodyTextSpanProps | BodyTextDivProps | BodyTextPProps);
