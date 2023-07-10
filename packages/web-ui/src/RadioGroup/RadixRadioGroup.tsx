import { createContext } from 'react';
import type { ReactNode } from 'react';
import { Box, BoxProps } from '../Box';
import { FormHelperText } from '../FormHelperText';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { Stack, StackProps } from '../Stack';
import { breakpoints } from '../tokens';
import type { RadioGroupProps as RadixRadioGroupProps } from '@radix-ui/react-radio-group';
import { useFormControl } from '../hooks';
import { FormErrorMessage } from '../FormErrorMessage';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';

export type RadioGroupContextValue = { hasGroupHelperText: boolean };
export const RadioGroupContext = createContext<RadioGroupContextValue>({
  hasGroupHelperText: false,
} as RadioGroupContextValue);

export interface RadioGroupProps extends Omit<RadixRadioGroupProps, 'dir'> {
  label: ReactNode;
  labelId?: string;
  children: ReactNode;
  /** Helper text for the field. Provides a hint such as specific requirements for what to choose. */
  helperText?: ReactNode;
  /**
   * Position of the helper text.
   * @default 'top'
   */
  helperTextPosition?: 'top' | 'bottom';
  helperTextId?: string;
  sx?: BoxProps['sx'];
  error?: boolean;
  errorMessage?: ReactNode;
  errorMessageId?: string;
  /** Set the width of the RadioGroup children, separate to the width of the entire RadioGroup. */
  contentWidth?: BoxProps['width'];
  /** Display the RadioGRoup contents in a set number of columns */
  columns?: StackProps['spacing'];
}

/**
 * The RadioGroup provides an accessible way to group and control a set of
 * RadioItem components, allowing the user to select one option from a set.
 */
export const RadioGroup = ({
  children,
  label,
  labelId: providedLabelId,
  id: providedId,
  helperText,
  helperTextPosition = 'top',
  helperTextId: providedHelperTextId,
  error,
  errorMessage,
  errorMessageId: providedErrorMessageId,
  sx,
  disabled,
  contentWidth = 'fit-content',
  columns,
  orientation = 'vertical',
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
  'aria-errormessage': ariaErrorMessage,
  ...props
}: RadioGroupProps) => {
  const { id, labelId, helperTextId, errorMessageId } = useFormControl({
    providedId,
    providedLabelId,
    providedHelperTextId,
    providedErrorMessageId,
  });
  const direction = { vertical: 'column' as const, horizontal: 'row' as const }[orientation];
  const showErrorMessage = Boolean(error && errorMessage);

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

  return (
    <RadixRadioGroup.Root
      asChild
      {...props}
      orientation={!columns ? orientation : undefined}
      disabled={disabled}
    >
      <Fieldset
        id={id}
        sx={sx}
        aria-errormessage={ariaErrorMessage || showErrorMessage ? errorMessageId : undefined}
        aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
        aria-describedby={ariaDescribedby || !!helperText ? helperTextId : undefined}
      >
        <FieldsetLegend disabled={disabled} id={labelId}>
          {label}
        </FieldsetLegend>
        {helperText && helperTextPosition === 'top' ? (
          <FormHelperText disabled={disabled} id={helperTextId}>
            {helperText}
          </FormHelperText>
        ) : null}
        <RadioGroupContext.Provider value={{ hasGroupHelperText: !!helperText }}>
          {!columns ? (
            <Stack spacing={2} direction={direction} minWidth="fit-content" width={contentWidth}>
              {children}
            </Stack>
          ) : (
            <Box
              display="grid"
              gap={2}
              gridTemplateColumns={getColumns()}
              minWidth="fit-content"
              width={contentWidth}
            >
              {children}
            </Box>
          )}
        </RadioGroupContext.Provider>
        {helperText && helperTextPosition === 'bottom' ? (
          <FormHelperText disabled={disabled} id={helperTextId}>
            {helperText}
          </FormHelperText>
        ) : null}
        {showErrorMessage ? <FormErrorMessage>{errorMessage}</FormErrorMessage> : null}
      </Fieldset>
    </RadixRadioGroup.Root>
  );
};

RadioGroup.displayName = 'RadioGroup';
