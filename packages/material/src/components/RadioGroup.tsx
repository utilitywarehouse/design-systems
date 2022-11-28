import * as React from 'react';
import { RadioGroup as MuiRadioGroup } from '@mui/material';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup/RadioGroup';
import Stack, { StackProps } from './Stack';

export interface RadioGroupProps extends MuiRadioGroupProps {
  direction?: StackProps['direction'];
  spacing?: StackProps['spacing'];
}

const RadioGroup: ({ direction, children, spacing, ...props }: RadioGroupProps) => JSX.Element = ({
  direction = {
    mobile: 'column',
    tablet: 'row',
    desktop: 'row',
  },
  children,
  spacing = 2,
  ...props
}: RadioGroupProps) => {
  return (
    <MuiRadioGroup {...props}>
      <Stack direction={direction} spacing={spacing}>
        {children}
      </Stack>
    </MuiRadioGroup>
  );
};
export default RadioGroup;
