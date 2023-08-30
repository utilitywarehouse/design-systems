import { fonts, fontWeights } from '../tokens';
import { useBackground } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { PropsWithStyleOverrides } from '../types';
import { ElementType, PropsWithChildren } from 'react';
import {
  palette,
  PaletteProps,
  typography,
  TypographyProps,
  unstable_styleFunctionSx as styleFunctionSx,
} from '@mui/system';
import styled, { FunctionInterpolation } from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx';

const displayName = 'Text';

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
  /**
   * Set the text-transform on the component.
   * @default 'none'
   */
  textTransform?: ResponsiveStyleValue<
    'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined
  >;
};

const StyledText = styled('p', {
  label: displayName,
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'color' && prop !== 'fontSize',
})<TextProps & PaletteProps & TypographyProps>(
  palette,
  typography,
  ({ bold, noWrap, variant, color }) => {
    const { isBrandBackground } = useBackground();
    return {
      fontFamily: fonts.secondary,
      fontWeight: fontWeights.secondary[bold ? 'semibold' : 'regular'],
      lineHeight: variant === 'caption' ? 2 : 1.5,
      color: color || colorsCommon.brandMidnight,
      ...(isBrandBackground && { color: color || colorsCommon.brandWhite }),
      ...(noWrap && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }),
    };
  },
  styleFunctionSx as FunctionInterpolation<TextProps>
);

/**
 * Text renders the secondary UW font, Work Sans, to be used for body copy.
 */
export const Text = ({
  component = 'p',
  variant = 'body',
  align,
  textTransform,
  ...props
}: PropsWithChildren<PropsWithStyleOverrides<TextProps>>) => {
  const fontSizes = {
    caption: pxToRem(12),
    legalNote: pxToRem(14),
    body: pxToRem(16),
    subtitle: {
      mobile: pxToRem(18),
      desktop: pxToRem(20),
    },
  };
  const combinedProps = {
    as: component,
    variant,
    textTransform,
    textAlign: align,
    fontSize: fontSizes[variant],
    ...props,
  };
  return <StyledText {...combinedProps} />;
};

Text.displayName = displayName;
