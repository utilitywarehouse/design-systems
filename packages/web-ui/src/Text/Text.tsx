import { useBackground } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { forwardRef, PropsWithChildren } from 'react';
import { Typography } from '../Typography';
import { TextProps } from './Text.props';
import { PropsWithStyleOverrides } from '../types';

/**
 * Text renders the secondary UW font, Work Sans, to be used for body text.
 */
export const Text = forwardRef<
  React.ElementRef<'span'>,
  PropsWithChildren<PropsWithStyleOverrides<TextProps>>
>(function Text({ variant = 'body', align, bold, color, ...props }, ref) {
  const fontSizes: { [key: string]: any } = {
    caption: pxToRem(12),
    legalNote: pxToRem(14),
    body: pxToRem(16),
    subtitle: {
      mobile: pxToRem(18),
      desktop: pxToRem(20),
    },
  };
  const { isBrandBackground } = useBackground();
  const textColor = !!color
    ? color
    : isBrandBackground
    ? colorsCommon.brandWhite
    : colorsCommon.brandMidnight;

  return (
    <Typography
      ref={ref}
      fontFamily="secondary"
      fontSize={fontSizes[variant]}
      lineHeight={variant === 'caption' ? 2 : 1.5}
      fontWeight={bold ? 'semibold' : 'regular'}
      textAlign={align}
      color={textColor}
      {...props}
    />
  );
});
