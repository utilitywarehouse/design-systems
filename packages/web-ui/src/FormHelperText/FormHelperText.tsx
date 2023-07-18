import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { fonts, fontWeights } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';
import { Box } from '../Box';
import { pxToRem } from '../utils';
import { SxProps } from '../types';

export interface FormHelperTextProps extends SxProps, HTMLAttributes<HTMLSpanElement> {
  /** Set the text appearance to disabled. */
  disabled?: boolean;
  /** Set the text appearance when showing an error message. This will override the disabled styles. */
  error?: boolean;
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
  ({ disabled, error, ...props }, ref) => {
    const defaultColor = colors.grey800;
    const disabledColor = colors.grey400;
    const errorColor = colors.red600;
    const color = error ? errorColor : disabled ? disabledColor : defaultColor;
    return (
      <Box
        ref={ref}
        component="span"
        color={color}
        fontFamily={fonts.secondary}
        fontWeight={fontWeights.secondary.regular}
        fontSize={pxToRem(13)}
        lineHeight={pxToRem(16)}
        {...props}
      />
    );
  }
);

FormHelperText.displayName = 'FormHelperText';
