import { useRadioGroupState } from 'react-stately';
import { useRadioGroup } from 'react-aria';
import { createContext } from 'react';
import type { ReactNode } from 'react';
import type { AriaRadioGroupProps } from 'react-aria';
import type { RadioGroupState } from 'react-stately';
import { Box, BoxProps } from '../Box';
import { colors, fonts, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import { Stack } from '@mui/system';
import { HelperText } from '../HelperText';

export const RadioContext = createContext<RadioGroupState>({} as RadioGroupState);

export interface RadioGroupProps
  extends Omit<AriaRadioGroupProps, 'description' | 'orientation' | 'isDisabled'> {
  disabled?: AriaRadioGroupProps['isDisabled'];
  children: ReactNode;
  direction?: 'column' | 'row';
  helperText?: AriaRadioGroupProps['description'];
  sx?: BoxProps['sx'];
}

export const RadioGroup = (props: RadioGroupProps) => {
  let {
    children,
    direction = 'column',
    label,
    helperText,
    errorMessage,
    validationState,
    sx,
    disabled,
  } = props;
  const orientationMap: { [key: string]: AriaRadioGroupProps['orientation'] } = {
    column: 'vertical',
    row: 'horizontal',
  };
  let state = useRadioGroupState({ ...props, isDisabled: disabled });
  let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(
    { ...props, orientation: orientationMap[direction] },
    state
  );

  return (
    <Box component="fieldset" border={0} margin={0} padding={0} {...radioGroupProps} sx={sx}>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Box
            component="legend"
            fontFamily={fonts.secondary}
            fontWeight={fontWeights.secondary.semibold}
            fontSize="1rem"
            lineHeight="1rem"
            {...labelProps}
          >
            {label}
          </Box>
          <RadioContext.Provider value={state}>
            <Stack spacing={1} direction={direction}>
              {children}
            </Stack>
          </RadioContext.Provider>
        </Stack>
        {helperText && !(errorMessage && validationState === 'invalid') ? (
          <HelperText {...descriptionProps} disabled={disabled}>
            {helperText}
          </HelperText>
        ) : null}
        {errorMessage && validationState === 'invalid' ? (
          <Box
            {...errorMessageProps}
            component="span"
            color="#CE2261" // maroon60
            fontFamily={fonts.secondary}
            fontWeight={fontWeights.secondary.regular}
            fontSize={`${13 / 16}rem`}
            lineHeight="1rem"
            sx={{ cursor: 'auto' }}
          >
            {errorMessage}
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
};
