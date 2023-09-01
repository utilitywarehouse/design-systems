import { forwardRef, PropsWithChildren, ElementRef } from 'react';
import { Box } from '../Box';
import { PropsWithSx } from '../types';
import { FieldsetProps } from './Fieldset.props';

const displayName = 'Fieldset';

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The `Fieldset` component should be used to group related form inputs, and
 * should be used with the `FieldsetLegend` component
 **/
export const Fieldset = forwardRef<
  ElementRef<'fieldset'>,
  PropsWithChildren<PropsWithSx<FieldsetProps>>
>(({ children, ...props }, ref) => {
  return (
    <Box ref={ref} component="fieldset" border={0} margin={0} padding={0} {...props}>
      <Box display="flex" flexDirection="column" gap={2}>
        {children}
      </Box>
    </Box>
  );
});

Fieldset.displayName = displayName;
