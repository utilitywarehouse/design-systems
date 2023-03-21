import { forwardRef } from 'react';
import type { ReactNode, LabelHTMLAttributes } from 'react';
import { colors, fonts, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import { Box, BoxProps } from '../Box';
import { pxToRem } from '../utils';

export interface FieldsetLegendProps extends LabelHTMLAttributes<HTMLLegendElement> {
  children: ReactNode;
  disabled?: boolean;
  sx?: BoxProps['sx'];
}

export const FieldsetLegend = forwardRef<HTMLLegendElement, FieldsetLegendProps>(
  ({ disabled, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        component="legend"
        color={disabled ? colors.codGray40 : colors.midnight}
        fontFamily={fonts.secondary}
        fontWeight={fontWeights.secondary.semibold}
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(16)}
        {...props}
      />
    );
  }
);

FieldsetLegend.displayName = 'FieldsetLegend';
