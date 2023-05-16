import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { fonts, fontWeights } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';
import { Box, BoxProps } from '../Box';
import { pxToRem } from '../utils';

export interface FieldsetLegendProps extends HTMLAttributes<HTMLLegendElement> {
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
        padding={0} // reset
        color={disabled ? colors.grey400 : colors.grey1000}
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
