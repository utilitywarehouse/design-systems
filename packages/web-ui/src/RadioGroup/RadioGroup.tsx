import { createContext, forwardRef } from 'react';
import type { ReactNode } from 'react';
import { Box, BoxProps } from '../Box';
import { FormHelperText } from '../FormHelperText';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { Stack, StackProps } from '../Stack';
import { type RadioGroupProps as RadixRadioGroupProps, Root } from '@radix-ui/react-radio-group';
import { useFormControl } from '../hooks';
import { FormErrorMessage } from '../FormErrorMessage';

export type RadioGroupContextValue = { hasGroupHelperText: boolean };
export const RadioGroupContext = createContext<RadioGroupContextValue>({
  hasGroupHelperText: false,
} as RadioGroupContextValue);

export interface BaseRadioGroupProps extends Omit<RadixRadioGroupProps, 'dir'> {
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
}

export const BaseRadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      id: providedId,
      children,
      label,
      labelId: providedLabelId,
      helperText,
      helperTextId: providedHelperTextId,
      helperTextPosition = 'top',
      error,
      errorMessage,
      errorMessageId: providedErrorMessageId,
      sx,
      disabled,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-errormessage': ariaErrorMessage,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId, errorMessageId } = useFormControl({
      providedId,
      providedLabelId,
      providedHelperTextId,
      providedErrorMessageId,
    });
    const showErrorMessage = Boolean(error && errorMessage);

    return (
      <Root ref={ref} asChild {...props} disabled={disabled}>
        <Fieldset
          id={id}
          sx={sx}
          aria-errormessage={ariaErrorMessage || showErrorMessage ? errorMessageId : undefined}
          aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
          aria-describedby={ariaDescribedby || !!helperText ? helperTextId : undefined}
        >
          <FieldsetLegend id={labelId}>{label}</FieldsetLegend>
          <Stack spacing={2} direction={helperTextPosition === 'top' ? 'column' : 'column-reverse'}>
            {helperText ? <FormHelperText id={helperTextId}>{helperText}</FormHelperText> : null}
            <RadioGroupContext.Provider value={{ hasGroupHelperText: !!helperText }}>
              {children}
            </RadioGroupContext.Provider>
          </Stack>
          {showErrorMessage ? <FormErrorMessage>{errorMessage}</FormErrorMessage> : null}
        </Fieldset>
      </Root>
    );
  }
);

export interface RadioGroupProps extends BaseRadioGroupProps {
  direction?: 'column' | 'row';
  /** Set the width of the RadioGroup children, separate to the width of the entire RadioGroup. */
  contentWidth?: BoxProps['width'];
}

/**
 * The RadioGroup provides an accessible way to group and control a set of
 * RadioItem components, allowing the user to select one option from a set.
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      children,
      contentWidth = 'fit-content',
      direction = 'column',
      orientation = 'vertical',
      ...props
    },
    ref
  ) => {
    return (
      <BaseRadioGroup
        ref={ref}
        {...props}
        orientation={orientation || direction === 'column' ? 'vertical' : 'horizontal'}
      >
        <Stack spacing={2} direction={direction} minWidth="fit-content" width={contentWidth}>
          {children}
        </Stack>
      </BaseRadioGroup>
    );
  }
);
