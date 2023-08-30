import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { PropsWithStyleOverrides } from '../types';
import { Typography } from '../Typography';
import { HelperTextProps } from './HelperText.props';

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * This component should be used with form field components to display helper
 * text.
 */
export const HelperText = forwardRef<
  ElementRef<'span'>,
  PropsWithChildren<PropsWithStyleOverrides<HelperTextProps>>
>(({ disabled, error, ...props }, ref) => {
  const color = error ? colors.red600 : disabled ? colors.grey400 : colors.grey800;
  return (
    <Typography
      ref={ref}
      component="span"
      fontFamily="secondary"
      weight="regular"
      fontSize={pxToRem(13)}
      lineHeight={pxToRem(16)}
      color={color}
      {...props}
    />
  );
});

HelperText.displayName = 'HelperText';
