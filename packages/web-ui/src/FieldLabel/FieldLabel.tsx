import type { ReactNode, LabelHTMLAttributes } from 'react';
import { Box, BoxProps } from '../Box';
import { pxToRem } from '../utils';
import { fonts, fontWeights } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';

export interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  disabled?: boolean;
  sx?: BoxProps['sx'];
  component?: BoxProps['component'];
}

export const FieldLabel = ({ disabled, sx, component = 'label', ...props }: FieldLabelProps) => {
  return (
    <Box
      component={component}
      color={disabled ? colors.grey400 : colors.grey1000}
      fontFamily={fonts.secondary}
      fontWeight={fontWeights.secondary.regular}
      fontSize={pxToRem(16)}
      lineHeight={pxToRem(24)}
      sx={{ cursor: disabled ? 'auto' : 'pointer', ...sx }}
      {...props}
    />
  );
};

FieldLabel.displayName = 'FieldLabel';
