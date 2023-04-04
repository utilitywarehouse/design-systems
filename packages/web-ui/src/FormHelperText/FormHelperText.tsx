import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { colors, fonts, fontWeights } from '@utilitywarehouse/design-tokens';
import { Box, BoxProps } from '../Box';
import { pxToRem } from '../utils';

export interface FormHelperTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  disabled?: boolean;
  sx?: BoxProps['sx'];
  error?: boolean;
}

export const FormHelperText = forwardRef<HTMLSpanElement, FormHelperTextProps>(
  ({ disabled, error, sx, ...props }, ref) => {
    const maroon60 = '#CE2261';
    const getColor = () => {
      if (error) return maroon60;
      if (disabled) return colors.codGray40;
      return colors.midnight;
    };
    const color = getColor();
    return (
      <Box
        ref={ref}
        component="span"
        color={color}
        fontFamily={fonts.secondary}
        fontWeight={fontWeights.secondary.regular}
        fontSize={pxToRem(13)}
        lineHeight={pxToRem(16)}
        sx={{ cursor: 'auto', ...sx }}
        {...props}
      />
    );
  }
);

FormHelperText.displayName = 'FormHelperText';
