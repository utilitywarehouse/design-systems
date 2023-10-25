import * as React from 'react';
import { forwardRef, PropsWithChildren, ElementRef } from 'react';
import { Box, createBox } from '../Box';
import { PropsWithSx } from '../types';
import { FieldsetProps } from './Fieldset.props';

const componentClassName = 'Fieldset';
const BaseBox = createBox<'fieldset'>({ componentClassName });

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
    <BaseBox ref={ref} component="fieldset" border={0} margin={0} padding={0} {...props}>
      <Box display="flex" flexDirection="column" gap={2}>
        {children}
      </Box>
    </BaseBox>
  );
});

Fieldset.displayName = componentClassName;
