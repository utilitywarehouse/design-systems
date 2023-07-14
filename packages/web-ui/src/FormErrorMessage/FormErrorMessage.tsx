import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { fonts, fontWeights } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';
import { Box } from '../Box';
import { pxToRem } from '../utils';
import { SxProps } from '../types';

export interface FormErrorMessageProps extends SxProps, HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * This component should be used with form field components to display error
 * messages.
 */
export const FormErrorMessage = forwardRef<HTMLSpanElement, FormErrorMessageProps>(
  ({ sx, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        component="span"
        color={colors.red600}
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

FormErrorMessage.displayName = 'FormErrorMessage';
