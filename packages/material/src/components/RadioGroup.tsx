import * as React from 'react';
import { RadioGroup as MuiRadioGroup } from '@mui/material';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup/RadioGroup';
import { useDeviceSize } from '../index';
import Stack, { StackProps } from './Stack';

interface Props extends MuiRadioGroupProps {
  inline?: boolean;
  spacing?: StackProps['spacing'];
}

const RadioGroup: ({ inline, children, spacing, ...props }: Props) => JSX.Element = ({
  inline = true,
  children,
  spacing,
  ...props
}: Props) => {
  const { isMobile } = useDeviceSize();
  return (
    <MuiRadioGroup {...props}>
      <Stack direction={!isMobile && inline ? 'row' : 'column'} spacing={spacing || 2}>
        {children}
      </Stack>
    </MuiRadioGroup>
  );
};
export default RadioGroup;
