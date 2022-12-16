import * as React from 'react';
import {
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
  useTheme,
} from '@mui/material';
import { TypographyProps } from '../Typography';
import Stack, { StackProps } from '../Stack';
import Box from '../Box';

export interface RadioGroupContextValues {
  basic?: boolean;
  disabled?: boolean;
  textTransform: TypographyProps['textTransform'];
}

export const RadioGroupContext = React.createContext<RadioGroupContextValues | null>(null);

export interface RadioGroupProps extends Omit<MuiRadioGroupProps, 'row'> {
  direction?: StackProps['direction'];
  spacing?: StackProps['spacing'];
  basic?: RadioGroupContextValues['basic'];
  disabled?: RadioGroupContextValues['disabled'];
  textTransform?: RadioGroupContextValues['textTransform'];
  columns?: StackProps['spacing'];
}

const RadioGroup = ({
  direction = 'column',
  children,
  spacing,
  basic,
  disabled,
  columns,
  textTransform,
  ...props
}: RadioGroupProps) => {
  const getSpacing = () => {
    if (spacing) return spacing;
    if (!basic) return 2;
    if (direction === 'row') return 1;
    return 0;
  };
  const convert = (c: string) => `repeat(${c}, minmax(10px, 1fr))`;
  const theme = useTheme();
  const getColumns = () => {
    if (Array.isArray(columns)) {
      return columns.map(s => convert(s as string));
    }
    if (typeof columns === 'object') {
      return Object.keys(theme.breakpoints.values).reduce(
        (acc: { [key: string]: string }, breakpoint: string) => {
          if (columns[breakpoint] !== null) {
            acc[breakpoint] = convert(columns[breakpoint] as string);
          }
          return acc;
        },
        {}
      );
    }
    return convert(columns as string);
  };

  const gap = getSpacing();

  if (columns) {
    const gridTemplateColumns = getColumns();
    return (
      <MuiRadioGroup {...props} sx={{ flexDirection: 'row', width: 'fit-content' }}>
        <RadioGroupContext.Provider value={{ basic, disabled, textTransform }}>
          <Box
            sx={{
              display: 'grid',
              gap,
              gridTemplateColumns,
            }}
          >
            {children}
          </Box>
        </RadioGroupContext.Provider>
      </MuiRadioGroup>
    );
  }

  return (
    <MuiRadioGroup {...props} sx={{ flexDirection: 'row', width: 'fit-content' }}>
      <RadioGroupContext.Provider value={{ basic, disabled, textTransform }}>
        <Stack direction={direction} spacing={gap}>
          {children}
        </Stack>
      </RadioGroupContext.Provider>
    </MuiRadioGroup>
  );
};
export default RadioGroup;
