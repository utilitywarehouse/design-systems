import { fonts, fontWeights } from '../tokens';
import { useBackground } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { SxProps } from '../types';
import { ElementType, PropsWithChildren } from 'react';
import {
  palette,
  PaletteProps,
  typography,
  TypographyProps,
  unstable_styleFunctionSx as styleFunctionSx,
} from '@mui/system';
import styled, { FunctionInterpolation } from '@emotion/styled';
import { useMediaQuery } from '../hooks';
import isPropValid from '@emotion/is-prop-valid';
import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx';

export type TextProps = {
  /**
   * Applies the text font styles.
   * @default body
   */
  variant?: 'subtitle' | 'body' | 'legalNote' | 'caption';
  /**
   * Sets the text color.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   * @default colorsCommon.brandMidnight
   *
   * The default color is `colors.brandMidnight` unless within a `Box`
   * component with the background prop set to a darker brand background, then
   * it will be `colors.brandWhite`.
   */
  color?: string;
  /**
   * Set the font-weight to semibold.
   * @default false
   */
  bold?: boolean;
  /**
   * Sets the HTML component that is rendered.
   * @default p
   */
  component?: ElementType<any> | undefined;
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
} & SxProps;

const StyledText = styled('p', {
  label: 'Text',
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'color',
})<TextProps & PaletteProps & TypographyProps>(
  palette,
  typography,
  styleFunctionSx as FunctionInterpolation<TextProps>,
  ({ bold, noWrap, variant, color }) => {
    const isDesktop = useMediaQuery(theme => theme.breakpoints.up('desktop'));
    const fontSizes: { [key: string]: any } = {
      caption: pxToRem(12),
      legalNote: pxToRem(14),
      body: pxToRem(16),
      subtitle: pxToRem(isDesktop ? 20 : 18),
    };
    const { isBrandBackground } = useBackground();
    const defaultColor = isBrandBackground ? colorsCommon.brandWhite : colorsCommon.brandMidnight;
    return {
      fontFamily: fonts.secondary,
      fontSize: variant ? fontSizes[variant] : fontSizes.body,
      fontWeight: fontWeights.secondary[bold ? 'semibold' : 'regular'],
      color: color || defaultColor,
      lineHeight: variant === 'caption' ? 2 : 1.5,
      ...(noWrap && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }),
    };
  }
);

/**
 * Text renders the secondary UW font, Work Sans, to be used for body copy.
 */
export const Text = ({ component = 'p', align, sx, ...props }: PropsWithChildren<TextProps>) => {
  return <StyledText as={component} {...props} sx={{ textAlign: align, ...sx }} />;
};

Text.displayName = 'Text';
