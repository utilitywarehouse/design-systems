import { useBackground } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { forwardRef } from 'react';
import { Typography } from '../Typography';
import { OverridableComponent } from '@mui/types';
import { TextTypeMap } from './Text.props';

/**
 * Text renders the secondary UW font, Work Sans, to be used for body text.
 */
export const Text = forwardRef(function Text(
  { component = 'p', variant = 'body', align, bold, color, ...props },
  ref
) {
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
  const textColor = !!color
    ? color
    : isBrandBackground
    ? colorsCommon.brandWhite
    : colorsCommon.brandMidnight;
  return (
    <Typography
      ref={ref}
      component={component}
      fontFamily="secondary"
      fontSize={fontSizes[variant]}
      lineHeight={variant === 'caption' ? 2 : 1.5}
      fontWeight={bold ? 'semibold' : 'regular'}
      textAlign={align}
      color={textColor}
      {...props}
    />
  );
}) as OverridableComponent<TextTypeMap>;
