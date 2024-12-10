import { PropDef } from '../../props/prop-def';
import { TextAlignProps } from '../../props/text-align.props';
import type { ComponentPropsWithout, RemovedProps } from '../../types/component-props';
import type { Responsive } from '../../types/responsive';

const weights = ['regular', 'medium', 'semibold'] as const;
const variants = ['subtitle', 'body', 'legalNote', 'caption'] as const;

export const bodyTextPropDefs = {
  weight: { className: 'weight', tokens: weights, responsive: true, default: 'regular' },
  variant: { className: 'variant', tokens: variants, responsive: false, default: 'body' },
  color: { className: 'body-text-color', responsive: false },
} satisfies {
  weight: PropDef<(typeof weights)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  color: PropDef<string>;
};

interface CommonBodyTextProps extends TextAlignProps {
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
  variant?: (typeof variants)[number];
  /**
   * Set the text color
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   */
  color?: string;
  /**
   * Set the font-weight
   * @default regular
   */
  weight?: Responsive<(typeof weights)[number]>;
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  truncate?: boolean | undefined;
}
type BodyTextDivProps = { as: 'div' } & ComponentPropsWithout<'div', RemovedProps>;
type BodyTextSpanProps = { as: 'span' } & ComponentPropsWithout<'span', RemovedProps>;
type BodyTextPProps = { as?: 'p' } & ComponentPropsWithout<'p', RemovedProps>;
export type BodyTextProps = CommonBodyTextProps &
  (BodyTextSpanProps | BodyTextDivProps | BodyTextPProps);
