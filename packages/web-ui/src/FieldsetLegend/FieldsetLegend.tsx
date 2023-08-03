import { forwardRef, PropsWithChildren, HTMLAttributes } from 'react';
import { fonts, fontWeights } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { SxProps } from '../types';
import styled, { FunctionInterpolation } from '@emotion/styled';
import { unstable_styleFunctionSx as styleFunctionSx } from '@mui/system';

const displayName = 'FieldsetLegend';

export interface FieldsetLegendProps extends SxProps, HTMLAttributes<HTMLLegendElement> {
  /** Sets whether the text should appear disabled. */
  disabled?: boolean;
}

const StyledFieldsetLegend = styled('legend', { label: displayName })<FieldsetLegendProps>(
  styleFunctionSx as FunctionInterpolation<FieldsetLegendProps>,
  ({ disabled }) => ({
    padding: 0,
    color: disabled ? colors.grey400 : colors.grey1000,
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.semibold,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(16),
  })
);

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The `FieldsetLegend` should be used with the `Fieldset` component to label
 * grouped from inputs.
 */
export const FieldsetLegend = forwardRef<HTMLLegendElement, PropsWithChildren<FieldsetLegendProps>>(
  (props, ref) => {
    return <StyledFieldsetLegend ref={ref} {...props} />;
  }
);

FieldsetLegend.displayName = 'FieldsetLegend';
