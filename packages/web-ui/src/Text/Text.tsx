import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { fonts, fontWeights } from '../tokens';
import { Box, BoxProps } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';

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
   */
  color?: string;
  /**
   * Set the font-weight to semibold.
   * @default false
   */
  bold?: boolean;
} & Pick<BoxProps, 'sx' | 'component' | 'children'> &
  Pick<MuiTypographyProps, 'textTransform' | 'align' | 'noWrap'>;

/**
 * Text renders the secondary UW font, Work Sans, to be used for body copy.
 */
export const Text = ({
  color = colorsCommon.brandMidnight,
  bold = false,
  component = 'p',
  variant = 'body',
  align,
  noWrap,
  sx,
  ...props
}: TextProps) => {
  const fontFamily = fonts.secondary;
  const fontWeight = bold ? fontWeights.secondary.semibold : undefined;
  const fontSizes = {
    caption: pxToRem(12),
    legalNote: pxToRem(14),
    body: pxToRem(16),
    subtitle: {
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
      fontSize={fontSizes[variant]}
      fontWeight={fontWeight}
      lineHeight={variant === 'caption' ? 2 : 1.5}
      textAlign={align}
      sx={noWrap ? noWrapStyles : sx}
      {...props}
    />
  );
};

Text.displayName = 'Text';
