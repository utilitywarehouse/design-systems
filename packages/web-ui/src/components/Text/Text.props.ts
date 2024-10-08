import type { ComponentPropsWithoutRef } from 'react';

import type { ResponsiveStyleValue } from '@mui/system';

import { BoxProps } from '../Box';

export interface TextProps
  extends ComponentPropsWithoutRef<'span'>,
    Pick<BoxProps, 'textTransform' | 'padding' | 'margin'> {
  /**
   * Applies the text font styles.
   * @default body
   */
  variant?: 'subtitle' | 'body' | 'legalNote' | 'caption';
  /**
   * Sets the text color.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   *
   * The default color is `colorsCommon.brandMidnight` unless within a `Box`
   * component with the background prop set to a darker brand background, then
   * it will be `colorsCommon.brandWhite`.
   *
   * @default colorsCommon.brandMidnight
   */
  color?: string;
  /**
   * Set the font-weight to semibold.
   * @default false
   */
  bold?: boolean;
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: ResponsiveStyleValue<'right' | 'left' | 'inherit' | 'center' | 'justify' | undefined>;
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean | undefined;
  /**
   * Sets the HTML component that is rendered.
   * @default p
   */
  component?: BoxProps['component'];
  /** Inverts the component colours, for use on darker backgrounds. */
  inverted?: boolean;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
  /** Set the font-weight */
  fontWeight?: 'regular' | 'medium' | 'semibold';
}
