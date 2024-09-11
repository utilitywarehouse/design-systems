import clsx from 'clsx';
import * as React from 'react';
import { ElementRef, PropsWithChildren, forwardRef } from 'react';

import { colors } from '@utilitywarehouse/colour-system';

import { FieldsetLegendProps } from './FieldsetLegend.props';

import { styled } from '../theme';
import { fontWeights, fonts } from '../tokens';
import { PropsWithSx } from '../types';
import { pxToRem, withGlobalPrefix } from '../utils';

const componentName = 'FieldsetLegend';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled('legend')({
  padding: 0,
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.semibold,
  fontSize: pxToRem(16),
  lineHeight: pxToRem(24),
  '--fieldset-legend-color': colors.grey1000,
  '--fieldset-legend-color-disabled': colors.grey400,
  color: 'var(--fieldset-legend-color)',
  ':where([data-disabled])': {
    '--fieldset-legend-color': 'var(--fieldset-legend-color-disabled)',
  },
});

/**
 * The `FieldsetLegend` should be used with the `Fieldset` component to label
 * grouped form inputs.
 */
export const FieldsetLegend = forwardRef<
  ElementRef<'legend'>,
  PropsWithChildren<PropsWithSx<FieldsetLegendProps>>
>(({ disabled, className, ...props }, ref) => {
  return (
    <StyledElement
      ref={ref}
      className={clsx(componentClassName, className)}
      data-disabled={disabled ? '' : undefined}
      {...props}
    />
  );
});

FieldsetLegend.displayName = componentName;
