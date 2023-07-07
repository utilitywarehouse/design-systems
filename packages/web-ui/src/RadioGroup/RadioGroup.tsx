import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-aria/radio';
import { createContext } from 'react';
import type { ReactNode } from 'react';
import type { AriaRadioGroupProps } from '@react-aria/radio';
import type { RadioGroupState } from '@react-stately/radio';
import { Box, BoxProps } from '../Box';
import { FormHelperText } from '../FormHelperText';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { Stack, StackProps } from '../Stack';
import { breakpoints } from '../tokens';

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
  helperTextPosition?: 'top' | 'bottom'; // TODO: change to start/end
  sx?: BoxProps['sx'];
  error?: boolean;
  /** Set the width of the RadioGroup children, separate to the width of the entire RadioGroup. */
  contentWidth?: BoxProps['width'];
  /** Display the RadioGRoup contents in a set number of columns */
  columns?: StackProps['spacing'];
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
    columns,
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

  const convert = (c: string) => `repeat(${c}, minmax(10px, 1fr))`;
  const getColumns = () => {
    if (Array.isArray(columns)) {
      return columns.map(s => convert(s as string));
    }
    if (typeof columns === 'object') {
      return Object.keys(breakpoints).reduce(
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
        {!!columns ? (
          <Box
            display="grid"
            gap={2}
            gridTemplateColumns={getColumns()}
            minWidth="fit-content"
            width={contentWidth}
          >
            {children}
          </Box>
        ) : (
          <Stack spacing={2} direction={direction} minWidth="fit-content" width={contentWidth}>
            {children}
          </Stack>
        )}
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
