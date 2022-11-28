import * as React from 'react';
import { RadioGroup as MuiRadioGroup } from '@mui/material';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup/RadioGroup';
import { useDeviceSize } from '../index';
import Stack, { StackProps } from './Stack';

export interface RadioGroupProps extends MuiRadioGroupProps {
  direction?: StackProps['direction'];
  spacing?: StackProps['spacing'];
}

const RadioGroup: ({ direction, children, spacing, ...props }: RadioGroupProps) => JSX.Element = ({
  direction = 'row',
  children,
  spacing,
  ...props
}: RadioGroupProps) => {
  const { isMobile } = useDeviceSize();
  return (
    <MuiRadioGroup {...props}>
      <Stack direction={!isMobile ? direction : 'column'} spacing={spacing || 2}>
        {children}
      </Stack>
    </MuiRadioGroup>
  );
};
export default RadioGroup;
