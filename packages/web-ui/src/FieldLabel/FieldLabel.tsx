import { forwardRef } from 'react';
import type { ReactNode, LabelHTMLAttributes } from 'react';
import { colors, fonts, fontWeights } from '@utilitywarehouse/design-tokens';
import { Box, BoxProps } from '../Box';
import { pxToRem } from '../utils';

export interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  disabled?: boolean;
  sx?: BoxProps['sx'];
}

export const FieldLabel = forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ disabled, sx, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        component="label"
        color={disabled ? colors.codGray40 : colors.midnight}
        fontFamily={fonts.secondary}
        fontWeight={fontWeights.secondary.regular}
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(24)}
        sx={{ cursor: disabled ? 'auto' : 'pointer', ...sx }}
        {...props}
      />
    );
  }
);

FieldLabel.displayName = 'FieldLabel';
