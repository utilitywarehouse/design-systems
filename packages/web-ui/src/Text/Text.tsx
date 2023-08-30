import { useBackground } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { Typography } from '../Typography';
import { TextProps } from './Text.props';
import { PropsWithStyleOverrides } from '../types';

/**
 * Text renders the secondary UW font, Work Sans, to be used for body text.
 */
export const Text = forwardRef<
  ElementRef<'span'>,
  PropsWithChildren<PropsWithStyleOverrides<TextProps>>
>(({ variant = 'body', bold, color, ...props }, ref) => {
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
      weight={bold ? 'semibold' : 'regular'}
      color={textColor}
      {...props}
    />
  );
});

Text.displayName = 'Text';
