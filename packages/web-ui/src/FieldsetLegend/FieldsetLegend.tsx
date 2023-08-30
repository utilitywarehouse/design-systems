import { PropsWithChildren, forwardRef } from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { PropsWithSx } from '../types';
import { Typography } from '../Typography';
import { FieldsetLegendProps } from './Fieldset.props';

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The `FieldsetLegend` should be used with the `Fieldset` component to label
 * grouped from inputs.
 */
export const FieldsetLegend = forwardRef<
  HTMLLegendElement,
  PropsWithChildren<PropsWithSx<FieldsetLegendProps>>
>(({ disabled, ...props }, ref) => {
  return (
    <Typography
      ref={ref}
      padding={0}
      fontFamily="secondary"
      weight="semibold"
      fontSize={pxToRem(16)}
      lineHeight={pxToRem(24)}
      color={disabled ? colors.grey400 : colors.grey1000}
      {...props}
    />
  );
});

FieldsetLegend.displayName = 'FieldsetLegend';
