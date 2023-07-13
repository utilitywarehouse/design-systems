import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { fonts, fontWeights } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';
import { Box } from '../Box';
import { pxToRem } from '../utils';
import { SxProps } from '../types';

export interface FormHelperTextProps extends SxProps, HTMLAttributes<HTMLSpanElement> {
  /** Sets whether the text should appear disabled. */
  disabled?: boolean;
  children: ReactNode;
}

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * This component should be used with form field components to display helper
 * text.
 */
export const FormHelperText = forwardRef<HTMLSpanElement, FormHelperTextProps>(
  ({ disabled, sx, ...props }, ref) => {
    const defaultColor = colors.grey800;
    const disabledColor = colors.grey400;
    return (
      <Box
        ref={ref}
        component="span"
        color={disabled ? disabledColor : defaultColor}
        fontFamily={fonts.secondary}
        fontWeight={fontWeights.secondary.regular}
        fontSize={pxToRem(13)}
        lineHeight={pxToRem(16)}
        sx={{
          color: defaultColor,
          '[data-disabled] &': {
            color: disabledColor,
          },
          ...sx,
        }}
        {...props}
      />
    );
  }
);

FormHelperText.displayName = 'FormHelperText';
