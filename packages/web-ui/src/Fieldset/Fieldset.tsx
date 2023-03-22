import { forwardRef } from 'react';
import type { ReactNode, FieldsetHTMLAttributes } from 'react';
import { Box, BoxProps } from '../Box';
import { Stack } from '../Stack';

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: ReactNode;
  sx?: BoxProps['sx'];
}

export const Fieldset = forwardRef<HTMLLegendElement, FieldsetProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} component="fieldset" border={0} margin={0} padding={0} {...props}>
        <Stack spacing={2}>{children}</Stack>
      </Box>
    );
  }
);

Fieldset.displayName = 'Fieldset';
