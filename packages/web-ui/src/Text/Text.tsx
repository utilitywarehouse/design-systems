import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { fonts, fontWeights } from '../tokens';
import { Box, useBackground } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { SxProps } from '../types';
import { ElementType, PropsWithChildren } from 'react';

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
} & SxProps &
  Pick<MuiTypographyProps, 'textTransform' | 'align' | 'noWrap'>;

/**
 * Text renders the secondary UW font, Work Sans, to be used for body copy.
 */
export const Text = ({
  color,
  bold = false,
  component = 'p',
  variant = 'body',
  align,
  noWrap,
  sx,
  ...props
}: PropsWithChildren<TextProps>) => {
  const fontSizes = {
    caption: pxToRem(12),
    legalNote: pxToRem(14),
    body: pxToRem(16),
    subtitle: {
      mobile: pxToRem(18),
      desktop: pxToRem(20),
    },
  };

  const { isBrandBackground } = useBackground();
  const defaultColor = isBrandBackground ? colorsCommon.brandWhite : colorsCommon.brandMidnight;

  return (
    <Box
      color={color || defaultColor}
      component={component}
      fontFamily={fonts.secondary}
      fontSize={fontSizes[variant]}
      fontWeight={fontWeights.secondary[bold ? 'semibold' : 'regular']}
      lineHeight={variant === 'caption' ? 2 : 1.5}
      textAlign={align}
      sx={{
        ...(noWrap && {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }),
        ...sx,
      }}
      {...props}
    />
  );
};

Text.displayName = 'Text';
