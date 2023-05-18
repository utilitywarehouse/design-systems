import { useRadioGroupState } from 'react-stately';
import { useRadioGroup } from 'react-aria';
import { createContext } from 'react';
import type { ReactNode } from 'react';
import type { AriaRadioGroupProps } from 'react-aria';
import type { RadioGroupState } from 'react-stately';
import { BoxProps } from '../Box';
import { FormHelperText } from '../FormHelperText';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { Stack } from '../Stack';

export type RadioGroupContextValue = RadioGroupState & { hasGroupHelperText: boolean };
export const RadioGroupContext = createContext<RadioGroupContextValue>({
  hasGroupHelperText: false,
} as RadioGroupContextValue);

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
  /**
   * Position of the helper text.
   * @default 'top'
   */
  helperTextPosition?: 'top' | 'bottom';
  sx?: BoxProps['sx'];
  error?: boolean;
  /** Set the width of the RadioGroup children, separate to the width of the entire RadioGroup. */
  contentWidth?: BoxProps['width'];
}

/**
 * The RadioGroup provides an accessible way to group and control a set of
 * RadioItem components, allowing the user to select one option from a set.
 */
export const RadioGroup = (props: RadioGroupProps) => {
  const {
    children,
    direction = 'column',
    label,
    helperText,
    helperTextPosition = 'top',
    errorMessage,
    error,
    sx,
    disabled,
    contentWidth = 'fit-content',
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

  const HelperText = () => (
    <FormHelperText {...descriptionProps} disabled={disabled}>
      {helperText}
    </FormHelperText>
  );

  return (
    <Fieldset {...radioGroupProps} aria-errormessage={errorMessageProps.id} sx={sx}>
      <FieldsetLegend disabled={disabled} {...labelProps}>
        {label}
      </FieldsetLegend>
      {helperText && helperTextPosition === 'top' ? <HelperText /> : null}
      <RadioGroupContext.Provider value={{ ...state, hasGroupHelperText: !!helperText }}>
        <Stack spacing={2} direction={direction} minWidth="fit-content" width={contentWidth}>
          {children}
        </Stack>
      </RadioGroupContext.Provider>
      {helperText && helperTextPosition === 'bottom' ? <HelperText /> : null}
      {errorMessage && error ? (
        <FormHelperText {...errorMessageProps} error>
          {errorMessage}
        </FormHelperText>
      ) : null}
    </Fieldset>
  );
};
