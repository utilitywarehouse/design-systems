import { forwardRef } from 'react';
import type { ReactNode, FieldsetHTMLAttributes } from 'react';
import { Stack } from '../Stack';
import { SxProps } from '../types';
import styled, { FunctionInterpolation } from '@emotion/styled';
import { unstable_styleFunctionSx as styleFunctionSx } from '@mui/system';

const displayName = 'Fieldset';

export interface FieldsetProps extends SxProps, FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /** Sets the Fieldset content */
  children: ReactNode;
}

const StyledFieldset = styled('fieldset', { label: displayName })<FieldsetProps>(
  styleFunctionSx as FunctionInterpolation<FieldsetProps>,
  {
    border: 0,
    margin: 0,
    padding: 0,
  }
);

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The `Fieldset` component should be used to group related form inputs, and
 * should be used with the `FieldsetLegend` component
 **/
export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledFieldset ref={ref} {...props}>
        <Stack spacing={2}>{children}</Stack>
      </StyledFieldset>
    );
  }
);

Fieldset.displayName = displayName;
