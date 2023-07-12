import { createContext, forwardRef, type ReactNode } from 'react';
import { BoxProps } from '../Box';
import { Stack } from '../Stack';
import { type RadioGroupProps as RadixRadioGroupProps, Root } from '@radix-ui/react-radio-group';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { FormHelperText } from '../FormHelperText';
import { FormErrorMessage } from '../FormErrorMessage';
import { useIds } from '../hooks';

export type RadioGroupContextValue = { hasGroupHelperText: boolean };
export const RadioGroupContext = createContext<RadioGroupContextValue>({
  hasGroupHelperText: false,
} as RadioGroupContextValue);

export interface BaseRadioGroupProps extends Omit<RadixRadioGroupProps, 'dir'> {
  /**
   * The label for the radio group, renders a legend element for the fieldset
   * group. This should contain the question being answered by the radio
   * group.
   */
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

export const RadioGroupFormControl = forwardRef<HTMLDivElement, RadioGroupProps>(
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
    const { id, labelId, helperTextId, errorMessageId } = useIds({
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
      <RadioGroupFormControl
        ref={ref}
        {...props}
        orientation={orientation || direction === 'column' ? 'vertical' : 'horizontal'}
      >
        <Stack spacing={2} direction={direction} minWidth="fit-content" width={contentWidth}>
          {children}
        </Stack>
      </RadioGroupFormControl>
    );
  }
);
