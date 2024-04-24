import { ComponentPropsWithoutRef, ElementType } from 'react';
import { ResponsiveStyleValue } from '@mui/system';

export interface HeadingProps extends ComponentPropsWithoutRef<'h2'> {
  /**
   * Applies the heading font styles.
   * @default h2
   */
  variant?: 'displayHeading' | 'h1' | 'h2' | 'h3' | 'h4';
  /**
   * Sets the heading color.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   *
   * The default color is `colorsCommon.brandPrimaryPurple` unless within a `Box`
   * component with the background prop set to a darker brand background, then
   * it will be `colorsCommon.brandWhite`.
   *
   * @default colorsCommon.brandPrimaryPurple
   */
  color?: string;
  /**
   * Sets the HTML component that is rendered.
   * @default h2
   */
  component?: ElementType;
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean | undefined;
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: ResponsiveStyleValue<'right' | 'left' | 'inherit' | 'center' | 'justify' | undefined>;
  /**
   * Set the text-transform on the component.
   * @default 'none'
   */
  textTransform?: ResponsiveStyleValue<
    'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined
  >;
}
