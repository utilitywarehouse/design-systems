import { forwardRef, PropsWithChildren, HTMLAttributes } from 'react';
import { fonts, fontWeights } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { PropsWithSx } from '../types';
import styled, { FunctionInterpolation } from '@emotion/styled';
import { unstable_styleFunctionSx as styleFunctionSx } from '@mui/system';

const displayName = 'HelperText';

export interface HelperTextProps extends HTMLAttributes<HTMLSpanElement> {
  /** Set the text appearance to disabled. */
  disabled?: boolean;
  /** Set the text appearance when showing an error message. This will override the disabled styles. */
  error?: boolean;
}

const StyledHelperText = styled('span', { label: displayName })<HelperTextProps>(
  ({ disabled, error }) => {
    const color = error ? colors.red600 : disabled ? colors.grey400 : colors.grey800;
    return {
      color,
      fontFamily: fonts.secondary,
      fontWeight: fontWeights.secondary.regular,
      fontSize: pxToRem(13),
      lineHeight: pxToRem(16),
    };
  },
  styleFunctionSx as FunctionInterpolation<HelperTextProps>
);

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
>((props, ref) => {
  return <StyledHelperText ref={ref} {...props} />;
});

HelperText.displayName = displayName;
