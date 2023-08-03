import { fonts, fontWeights } from '../tokens';
import { useBackground } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { SxProps } from '../types';
import { ElementType, PropsWithChildren } from 'react';
import styled, { FunctionInterpolation } from '@emotion/styled';
import { unstable_styleFunctionSx as styleFunctionSx } from '@mui/system';
import { useMediaQuery } from '../hooks';

export type TextProps = {
  /**
   * Applies the text font styles.
   * @default body
   */
  variant?: 'subtitle' | 'body' | 'legalNote' | 'caption';
  /**
   * Sets the text color.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
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
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: 'right' | 'left' | 'inherit' | 'center' | 'justify' | undefined;
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean | undefined;
  /**
   * Set the text-transform on the component.
   * @default 'none'
   */
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
} & SxProps;

const displayName = 'Text';

const StyledText = styled('p', {
  label: displayName,
  shouldForwardProp: prop =>
    prop !== 'color' && prop !== 'as' && prop !== 'textTransform' && prop !== 'variant',
})<TextProps>(
  styleFunctionSx as FunctionInterpolation<TextProps>,
  ({ bold, noWrap, variant, color, align, textTransform }) => {
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
      textTransform,
      textAlign: align,
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
export const Text = ({ component = 'p', ...props }: PropsWithChildren<TextProps>) => {
  return <StyledText as={component} {...props} />;
};

Text.displayName = displayName;
