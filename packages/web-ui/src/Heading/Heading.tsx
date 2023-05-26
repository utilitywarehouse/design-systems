import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { Box, BoxProps } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { fonts, fontWeights } from '../tokens';
import { pxToRem } from '../utils';

export type HeadingProps = Pick<BoxProps, 'sx' | 'component' | 'children'> &
  Pick<MuiTypographyProps, 'textTransform' | 'align' | 'noWrap'> & {
    /**
     * Applies the typography size styles.
     * @default md
     */
    size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    /**
     * Set the text color. It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
     * @default colorsCommon.brandPrimaryPurple
     */
    color?: string;
  };

/**
 * Heading renders the primary UW font, to be used for heading-level typography.
 */
export const Heading = ({
  color = colorsCommon.brandPrimaryPurple,
  component = 'h2',
  size = 'md',
  align,
  noWrap,
  sx,
  ...props
}: HeadingProps) => {
  const fontFamily = fonts.primary;
  const fontWeight = fontWeights.primary;
  const fontSizes = {
    xs: {
      mobile: pxToRem(18),
      desktop: pxToRem(20),
    },
    sm: {
      mobile: pxToRem(22),
      desktop: pxToRem(24),
    },
    md: {
      mobile: pxToRem(28),
      desktop: pxToRem(32),
    },
    lg: {
      mobile: pxToRem(32),
      desktop: pxToRem(42),
    },
    xl: {
      mobile: pxToRem(42),
      desktop: pxToRem(64),
    },
  };
  const lineHeights = {
    xs: 1.5,
    sm: 1.5,
    md: {
      mobile: 1.2,
      desktop: 1.5,
    },
    lg: 1.2,
    xl: 1,
  };

  const noWrapStyles = {
    ...sx,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  return (
    <Box
      color={color}
      component={component}
      fontFamily={fontFamily}
      fontSize={fontSizes[size]}
      fontWeight={fontWeight}
      lineHeight={lineHeights[size]}
      textAlign={align}
      sx={noWrap ? noWrapStyles : sx}
      {...props}
    />
  );
};

Heading.displayName = 'Heading';
