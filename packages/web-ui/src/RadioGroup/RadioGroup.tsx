import { useRadioGroupState } from 'react-stately';
import { useRadioGroup } from 'react-aria';
import { createContext } from 'react';
import type { ReactNode } from 'react';
import type { AriaRadioGroupProps } from 'react-aria';
import type { RadioGroupState } from 'react-stately';
import { Box } from '../Box';
import { colors, fonts, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import { Stack } from '@mui/system';

export const RadioContext = createContext<RadioGroupState>({} as RadioGroupState);

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, 'description'> {
  children: ReactNode;
  direction?: 'column' | 'row';
  helperText?: AriaRadioGroupProps['description'];
}

export const RadioGroup = (props: RadioGroupProps) => {
  let { children, direction = 'column', label, helperText, errorMessage, validationState } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(
    props,
    state
  );

  return (
    <Box component="fieldset" border={0} margin={0} padding={0} {...radioGroupProps}>
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
          <Box
            {...descriptionProps}
            component="span"
            color={colors.midnight}
            fontFamily={fonts.secondary}
            fontWeight={fontWeights.secondary.regular}
            fontSize={`${13 / 16}rem`}
            lineHeight="1rem"
            sx={{ cursor: 'auto' }}
          >
            {helperText}
          </Box>
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
