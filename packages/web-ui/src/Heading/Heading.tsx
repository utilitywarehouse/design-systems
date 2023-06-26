import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { Box, BoxProps, useBackground } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { fonts, fontWeights } from '../tokens';
import { pxToRem } from '../utils';

export type HeadingProps = {
  /**
   * Applies the heading font styles.
   * @default h2
   */
  variant?: 'displayHeading' | 'h1' | 'h2' | 'h3' | 'h4';
  /**
   * Sets the heading color.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   * @default colorsCommon.brandPrimaryPurple
   */
  color?: string;
} & Pick<BoxProps, 'sx' | 'component' | 'children'> &
  Pick<MuiTypographyProps, 'textTransform' | 'align' | 'noWrap'>;

/**
 * Heading renders the primary UW font, to be used for heading-level typography.
 */
export const Heading = ({
  color,
  component = 'h2',
  variant = 'h2',
  align,
  noWrap,
  sx,
  ...props
}: HeadingProps) => {
  const fontFamily = fonts.primary;
  const fontWeight = fontWeights.primary;
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

  const noWrapStyles = {
    ...sx,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  const { isBrandBackground } = useBackground();
  const defaultColor = isBrandBackground
    ? colorsCommon.brandWhite
    : colorsCommon.brandPrimaryPurple;

  return (
    <Box
      color={color || defaultColor}
      component={component}
      fontFamily={fontFamily}
      fontSize={fontSizes[variant]}
      fontWeight={fontWeight}
      lineHeight={lineHeights[variant]}
      textAlign={align}
      sx={noWrap ? noWrapStyles : sx}
      {...props}
    />
  );
};

Heading.displayName = 'Heading';
