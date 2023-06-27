import { forwardRef } from 'react';
import type { ReactNode, FieldsetHTMLAttributes } from 'react';
import { Box, BoxProps } from '../Box';
import { Stack } from '../Stack';

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /** Sets the Fieldset content */
  children: ReactNode;
  sx?: BoxProps['sx'];
}

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The `Fieldset` component should be used to group related form inputs, and
 * should be used with the `FieldsetLegend` component
 **/
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
