import { createContext, forwardRef, type ReactNode } from 'react';
import { Box } from '../Box';
import { type RadioGroupProps as RadixRadioGroupProps, Root } from '@radix-ui/react-radio-group';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { FormHelperText } from '../FormHelperText';
import { useIds } from '../hooks';
import { PropsWithSx, SxProps } from '../types';
import { mergeIds } from '../utils';

export type RadioGroupContextValue = { hasGroupHelperText: boolean; 'aria-describedby'?: string };
export const RadioGroupContext = createContext<RadioGroupContextValue>({
  hasGroupHelperText: false,
} as RadioGroupContextValue);

export interface BaseRadioGroupProps extends Omit<RadixRadioGroupProps, 'dir'> {
  children: ReactNode;
  /**
   * The label for the radio group. This should contain the question being
   * answered by the radio group.
   *
   * If you don't include a label you need to ensure you use the `aria-label`
   * or `aria-labelledby` prop to properly associate a label with the radio
   * group.
   */
  label?: ReactNode;
  /**
   * Helper text for the radio group. Provides a hint such as specific
   * requirements for what to choose. When displayed, child `Radio` or
   * `RadioTile` components will not display `helperText`.
   */
  helperText?: ReactNode;
  /**
   * Position of the helper text.
   * @default 'top'
   */
  helperTextPosition?: 'top' | 'bottom';
  /** Controls whether the error message is displayed. */
  error?: boolean;
  /** The error message to be displayed. */
  errorMessage?: ReactNode;
}

export const RadioGroupFormControl = forwardRef<HTMLDivElement, PropsWithSx<BaseRadioGroupProps>>(
  (
    {
      id: providedId,
      children,
      label,
      helperText,
      helperTextPosition = 'top',
      error,
      errorMessage,
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
      componentPrefix: 'radiogroup',
    });
    const showErrorMessage = Boolean(error && errorMessage);
    const direction = helperTextPosition === 'top' ? 'column' : 'column-reverse';
    const value = {
      hasGroupHelperText: !!helperText,
      'aria-describedby': mergeIds(
        ariaDescribedby || !!helperText ? helperTextId : undefined,
        ariaErrorMessage || showErrorMessage ? errorMessageId : undefined
      ),
    };

    return (
      <Root
        ref={ref}
        asChild
        {...props}
        disabled={disabled}
        id={id}
        aria-errormessage={ariaErrorMessage || showErrorMessage ? errorMessageId : undefined}
        aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
        aria-invalid={showErrorMessage}
      >
        <Fieldset sx={sx}>
          {label ? (
            <FieldsetLegend id={labelId} disabled={disabled}>
              {label}
            </FieldsetLegend>
          ) : null}

          <Box display="flex" gap={2} flexDirection={direction}>
            {helperText ? (
              <FormHelperText id={helperTextId} disabled={disabled}>
                {helperText}
              </FormHelperText>
            ) : null}
            <RadioGroupContext.Provider value={value}>{children}</RadioGroupContext.Provider>
          </Box>

          {showErrorMessage ? (
            <FormHelperText error id={errorMessageId}>
              {errorMessage}
            </FormHelperText>
          ) : null}
        </Fieldset>
      </Root>
    );
  }
);
