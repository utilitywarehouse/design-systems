import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { colors, fonts, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import { Box, BoxProps } from '../Box';
import { pxToRem } from '../utils';

export interface HelperTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  disabled?: boolean;
  sx?: BoxProps['sx'];
}

export const HelperText = forwardRef<HTMLSpanElement, HelperTextProps>(
  ({ disabled, children, sx, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        component="span"
        color={disabled ? colors.codGray40 : colors.midnight}
        fontFamily={fonts.secondary}
        fontWeight={fontWeights.secondary.regular}
        fontSize={pxToRem(13)}
        lineHeight={pxToRem(16)}
        sx={{ cursor: 'auto', ...sx }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

HelperText.displayName = 'HelperText';
