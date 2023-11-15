import * as React from 'react';
import { PropsWithChildren, forwardRef, ElementRef } from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { pxToRem, getPrefixedName } from '../utils';
import { PropsWithSx } from '../types';
import { Typography } from '../Typography';
import { FieldsetLegendProps } from './FieldsetLegend.props';
import clsx from 'clsx';

const displayName = 'FieldsetLegend';
const componentClassName = getPrefixedName(displayName);

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The `FieldsetLegend` should be used with the `Fieldset` component to label
 * grouped from inputs.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const FieldsetLegend = forwardRef<
  ElementRef<'legend'>,
  PropsWithChildren<PropsWithSx<FieldsetLegendProps>>
>(({ disabled, className, ...props }, ref) => {
  return (
    <Typography
      ref={ref}
      component="legend"
      className={clsx(componentClassName, className)}
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

FieldsetLegend.displayName = displayName;
