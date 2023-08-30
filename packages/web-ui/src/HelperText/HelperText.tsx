import { forwardRef, PropsWithChildren, HTMLAttributes } from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { PropsWithSx } from '../types';
import { Typography } from '../Typography';

export interface HelperTextProps extends HTMLAttributes<HTMLSpanElement> {
  /** Set the text appearance to disabled. */
  disabled?: boolean;
  /** Set the text appearance when showing an error message. This will override the disabled styles. */
  error?: boolean;
}

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * This component should be used with form field components to display helper
 * text.
 */
export const HelperText = forwardRef<
  HTMLSpanElement,
  PropsWithChildren<PropsWithSx<HelperTextProps>>
>(({ disabled, error, ...props }, ref) => {
  const color = error ? colors.red600 : disabled ? colors.grey400 : colors.grey800;
  return (
    <Typography
      ref={ref}
      fontFamily="secondary"
      fontWeight="regular"
      fontSize={pxToRem(13)}
      lineHeight={pxToRem(16)}
      color={color}
      {...props}
    />
  );
});

HelperText.displayName = 'HelperText';
