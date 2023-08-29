import { PropsWithChildren, HTMLAttributes } from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { PropsWithSx } from '../types';
import { Typography } from '../Typography';

export interface FieldsetLegendProps extends HTMLAttributes<HTMLLegendElement> {
  /** Sets whether the text should appear disabled. */
  disabled?: boolean;
}

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The `FieldsetLegend` should be used with the `Fieldset` component to label
 * grouped from inputs.
 */
export const FieldsetLegend = ({
  disabled,
  ...props
}: PropsWithChildren<PropsWithSx<FieldsetLegendProps>>) => {
  return (
    <Typography
      padding={0}
      fontFamily="secondary"
      fontWeight="semibold"
      fontSize={pxToRem(16)}
      lineHeight={pxToRem(24)}
      color={disabled ? colors.grey400 : colors.grey1000}
      {...props}
    />
  );
};

FieldsetLegend.displayName = 'FieldsetLegend';
