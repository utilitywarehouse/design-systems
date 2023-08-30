import { useBackground } from '../Box';
import { PropsWithStyleOverrides } from '../types';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { fonts, fontWeights } from '../tokens';
import { pxToRem } from '../utils';
import { ElementType, PropsWithChildren } from 'react';
import {
  typography,
  TypographyProps,
  ResponsiveStyleValue,
  unstable_styleFunctionSx as styleFunctionSx,
} from '@mui/system';
import styled, { FunctionInterpolation } from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

const displayName = 'Heading';

export interface HeadingProps {
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
}

const StyledHeading = styled('p', {
  label: displayName,
  shouldForwardProp: prop =>
    isPropValid(prop) && prop !== 'color' && prop !== 'fontSize' && prop !== 'lineHeight',
})<HeadingProps & TypographyProps>(
  typography, // TODO: i don't think we want this
  ({ noWrap, color }) => {
    const { isBrandBackground } = useBackground();
    return {
      fontFamily: fonts.primary,
      fontWeight: fontWeights.primary,
      color: color || colorsCommon.brandPrimaryPurple,
      textRendering: 'optimizeLegibility', // ensure we preserve the ligatures & kerning of the Aeonik typeface
      ...(isBrandBackground && { color: color || colorsCommon.brandWhite }),
      ...(noWrap && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }),
    };
  },
  styleFunctionSx as FunctionInterpolation<HeadingProps>
);

/**
 * Heading renders the primary UW font, to be used for heading-level typography.
 */
export const Heading = ({
  component = 'h2',
  variant = 'h2',
  align,
  textTransform,
  ...props
}: PropsWithChildren<PropsWithStyleOverrides<HeadingProps>>) => {
  const fontSizes = {
    h4: {
      mobile: pxToRem(18),
      desktop: pxToRem(20),
    },
    h3: {
      mobile: pxToRem(22),
      desktop: pxToRem(24),
    },
    h2: {
      mobile: pxToRem(28),
      desktop: pxToRem(32),
    },
    h1: {
      mobile: pxToRem(32),
      desktop: pxToRem(42),
    },
    displayHeading: {
      mobile: pxToRem(42),
      desktop: pxToRem(64),
    },
  };
  const lineHeights = {
    h4: 1.5,
    h3: 1.5,
    h2: {
      mobile: 1.2,
      desktop: 1.5,
    },
    h1: 1.2,
    displayHeading: 1.2,
  };
  const combinedProps = {
    as: component,
    textTransform,
    textAlign: align,
    fontSize: fontSizes[variant],
    lineHeight: lineHeights[variant],
    ...props,
  };

  return <StyledHeading {...combinedProps} />;
};

Heading.displayName = displayName;
