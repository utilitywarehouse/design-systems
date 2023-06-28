import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { fonts, fontWeights } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';
import { Box, BoxProps } from '../Box';
import { pxToRem } from '../utils';

export interface FormHelperTextProps extends HTMLAttributes<HTMLSpanElement> {
  /** Sets whether the text should appear disabled. */
  disabled?: boolean;
  /** Sets whether the text is displaying an error message. */
  error?: boolean;
  children: ReactNode;
  sx?: BoxProps['sx'];
}

/**
 * This component should be used with form field components to display helper
 * text, descriptions or error messages.
 */
export const FormHelperText = forwardRef<HTMLSpanElement, FormHelperTextProps>(
  ({ disabled, error, sx, ...props }, ref) => {
    const getColor = () => {
      if (error) return colors.red600;
      if (disabled) return colors.grey400;
      return colors.grey800;
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
