import { useRadioGroupState } from 'react-stately';
import { useRadioGroup } from 'react-aria';
import { createContext } from 'react';
import type { ReactNode } from 'react';
import type { AriaRadioGroupProps } from 'react-aria';
import type { RadioGroupState } from 'react-stately';
import { BoxProps } from '../Box';
import { FormHelperText } from '../FormHelperText';
import { Fieldset, FieldsetLegend } from '../Fieldset';
import { Stack } from '../Stack';

export const RadioContext = createContext<RadioGroupState>({} as RadioGroupState);

export interface RadioGroupProps
  extends Omit<
    AriaRadioGroupProps,
    'description' | 'orientation' | 'isDisabled' | 'validationState'
  > {
  /** Disable the entire RadioGroup */
  disabled?: AriaRadioGroupProps['isDisabled'];
  children: ReactNode;
  direction?: 'column' | 'row';
  /** Helper text for the field. Provides a hint such as specific requirements for what to choose. */
  helperText?: AriaRadioGroupProps['description'];
  sx?: BoxProps['sx'];
  error?: boolean;
}

/**
 * The Radio Group allows the user to select one option from a set.
 */
export const RadioGroup = (props: RadioGroupProps) => {
  const {
    children,
    direction = 'column',
    label,
    helperText,
    errorMessage,
    error,
    sx,
    disabled,
  } = props;
  const orientationMap: { [key: string]: AriaRadioGroupProps['orientation'] } = {
    column: 'vertical',
    row: 'horizontal',
  };
  const validationState = error ? 'invalid' : 'valid';
  const state = useRadioGroupState({
    ...props,
    validationState,
    isDisabled: disabled,
  });
  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(
    {
      ...props,
      orientation: orientationMap[direction],
      validationState,
    },
    state
  );

  return (
    <Fieldset {...radioGroupProps} sx={sx}>
      <FieldsetLegend disabled={disabled} {...labelProps}>
        {label}
      </FieldsetLegend>
      <RadioContext.Provider value={state}>
        <Stack spacing={2} direction={direction}>
          {children}
        </Stack>
      </RadioContext.Provider>
      {helperText ? (
        <FormHelperText {...descriptionProps} disabled={disabled}>
          {helperText}
        </FormHelperText>
      ) : null}
      {errorMessage && error ? (
        <FormHelperText {...errorMessageProps} error>
          {errorMessage}
        </FormHelperText>
      ) : null}
    </Fieldset>
  );
};
