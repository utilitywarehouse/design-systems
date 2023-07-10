import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { fonts, fontWeights } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';
import { Box } from '../Box';
import { pxToRem } from '../utils';
import { SxProps } from '../types';

export interface FieldsetLegendProps extends SxProps, HTMLAttributes<HTMLLegendElement> {
  /** Sets whether the text should appear disabled. */
  disabled?: boolean;
  children: ReactNode;
}

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The `FieldsetLegend` should be used with the `Fieldset` component to label
 * grouped from inputs.
 */
export const FieldsetLegend = forwardRef<HTMLLegendElement, FieldsetLegendProps>(
  ({ disabled, sx, ...props }, ref) => {
    const defaultColor = colors.grey1000;
    const disabledColor = colors.grey400;
    return (
      <Box
        ref={ref}
        component="legend"
        padding={0} // reset
        color={disabled ? disabledColor : defaultColor}
        fontFamily={fonts.secondary}
        fontWeight={fontWeights.secondary.semibold}
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(16)}
        sx={{
          cursor: disabled ? 'auto' : 'pointer',
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

FieldsetLegend.displayName = 'FieldsetLegend';
