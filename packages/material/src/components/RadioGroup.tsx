import * as React from 'react';
import { RadioGroup as MuiRadioGroup } from '@mui/material';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup/RadioGroup';
import Stack, { StackProps } from './Stack';

export interface RadioGroupContextValues {
  hideTile?: boolean;
  disabled?: boolean;
}

export const RadioGroupContext = React.createContext<RadioGroupContextValues | null>(null);

export interface RadioGroupProps extends Omit<MuiRadioGroupProps, 'row'> {
  direction?: StackProps['direction'];
  spacing?: StackProps['spacing'];
  hideTile?: RadioGroupContextValues['hideTile'];
  disabled?: RadioGroupContextValues['disabled'];
}

const RadioGroup = ({
  direction = 'column',
  children,
  spacing = 2,
  hideTile,
  disabled,
  ...props
}: RadioGroupProps) => {
  return (
    <MuiRadioGroup {...props}>
      <Stack direction={direction} spacing={spacing}>
        <RadioGroupContext.Provider value={{ hideTile, disabled }}>
          {children}
        </RadioGroupContext.Provider>
      </Stack>
    </MuiRadioGroup>
  );
};
export default RadioGroup;
