import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { fonts, fontWeights } from '../tokens';
import { Box, BoxProps } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';

export type TextProps = Pick<BoxProps, 'sx' | 'component' | 'children'> &
  Pick<MuiTypographyProps, 'textTransform' | 'align' | 'noWrap'> & {
    /**
     * Applies the typography size styles.
     * @default md
     */
    size?: 'lg' | 'md' | 'sm' | 'xs';
    /**
     * Set the text color. It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
     * @default colorsCommon.brandMidnight
     */
    color?: string;
    /**
     * Set the font-weight to semibold.
     * @default false
     */
    bold?: boolean;
  };

/**
 * Text renders the secondary UW font, Work Sans, to be used for body copy.
 */
export const Text = ({
  color = colorsCommon.brandMidnight,
  bold = false,
  component = 'span',
  size = 'md',
  align,
  noWrap,
  sx,
  ...props
}: TextProps) => {
  const fontFamily = fonts.secondary;
  const fontWeight = bold ? fontWeights.secondary.semibold : undefined;
  const fontSizes = {
    xs: pxToRem(12),
    sm: pxToRem(14),
    md: pxToRem(16),
    lg: {
      mobile: pxToRem(18),
      desktop: pxToRem(20),
    },
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
      lineHeight={size === 'xs' ? 2 : 1.5}
      textAlign={align}
      sx={noWrap ? noWrapStyles : sx}
      {...props}
    />
  );
};

Text.displayName = 'Text';
