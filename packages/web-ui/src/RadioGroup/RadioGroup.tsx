import { useRadioGroupState } from 'react-stately';
import { useRadioGroup } from 'react-aria';
import { createContext } from 'react';
import type { ReactNode } from 'react';
import type { AriaRadioGroupProps } from 'react-aria';
import type { RadioGroupState } from 'react-stately';
import { Box } from '../Box';
import { fonts, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import { Stack } from '@mui/system';

export const RadioContext = createContext<RadioGroupState>({} as RadioGroupState);

export interface RadioGroupProps extends AriaRadioGroupProps {
  children: ReactNode;
  direction?: 'column' | 'row';
}

export const RadioGroup = (props: RadioGroupProps) => {
  let { children, direction = 'column', label, description, errorMessage, validationState } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(
    props,
    state
  );

  return (
    <Stack component="fieldset" spacing={1} border={0} margin={0} padding={0} {...radioGroupProps}>
      <Box
        component="legend"
        fontFamily={fonts.secondary}
        fontWeight={fontWeights.secondary.semibold}
        fontSize="1rem"
        {...labelProps}
      >
        {label}
      </Box>
      <RadioContext.Provider value={state}>
        <Stack spacing={direction === 'row' ? 1 : 0} direction={direction}>
          {children}
        </Stack>
      </RadioContext.Provider>
      {/* {description && ( */}
      {/*   <div {...descriptionProps} style={{ fontSize: 12 }}> */}
      {/*     {description} */}
      {/*   </div> */}
      {/* )} */}
      {/* {errorMessage && validationState === 'invalid' && ( */}
      {/*   <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}> */}
      {/*     {errorMessage} */}
      {/*   </div> */}
      {/* )} */}
    </Stack>
  );
};
