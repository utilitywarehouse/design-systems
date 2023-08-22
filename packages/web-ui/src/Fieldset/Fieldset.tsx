import { forwardRef, PropsWithChildren, FieldsetHTMLAttributes } from 'react';
import styled, { FunctionInterpolation } from '@emotion/styled';
import { unstable_styleFunctionSx as styleFunctionSx } from '@mui/system';
import { Box } from '../Box';
import { PropsWithSx } from '../types';

const displayName = 'Fieldset';

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {}

const StyledFieldset = styled('fieldset', { label: displayName })<FieldsetProps>(
  { border: 0, margin: 0, padding: 0 },
  styleFunctionSx as FunctionInterpolation<FieldsetProps>
);

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The `Fieldset` component should be used to group related form inputs, and
 * should be used with the `FieldsetLegend` component
 **/
export const Fieldset = forwardRef<
  HTMLFieldSetElement,
  PropsWithChildren<PropsWithSx<FieldsetProps>>
>(({ children, ...props }, ref) => {
  return (
    <StyledFieldset ref={ref} {...props}>
      <Box display="flex" flexDirection="column" gap={2}>
        {children}
      </Box>
    </StyledFieldset>
  );
});

Fieldset.displayName = displayName;
