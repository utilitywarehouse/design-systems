import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { pxToRem } from '../utils';
import { colors } from '@utilitywarehouse/colour-system';
import { PropsWithStyleOverrides } from '../types';
import { LabelProps } from './Label.props';
import { Typography } from '../Typography';

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The Label component is used for labelling form elements, such as radio inputs.
 */
export const Label = forwardRef<
  ElementRef<'label'>,
  PropsWithChildren<PropsWithStyleOverrides<LabelProps>>
>(({ component = 'label', disabled, nested, ...props }, ref) => {
  return (
    <Typography
      ref={ref}
      component={component}
      fontFamily="secondary"
      weight={nested ? 'regular' : 'semibold'}
      fontSize={pxToRem(16)}
      lineHeight={pxToRem(24)}
      color={disabled ? colors.grey400 : colors.grey1000}
      {...props}
    />
  );
});

Label.displayName = 'Label';
