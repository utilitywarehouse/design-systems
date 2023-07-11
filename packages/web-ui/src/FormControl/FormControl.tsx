import { createContext, type AllHTMLAttributes, useContext } from 'react';
import type { ReactNode } from 'react';
import { BoxProps } from '../Box';
import { FormHelperText } from '../FormHelperText';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { Stack } from '../Stack';
import { FormErrorMessage } from '../FormErrorMessage';
import { useIds } from '../hooks';

export interface FormControlContextValue {
  hasGroupHelperText: boolean;
}

export const FormControlContext = createContext<FormControlContextValue>({
  hasGroupHelperText: false,
} as FormControlContextValue);

export const useFormControl = () => useContext(FormControlContext);

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;

export interface FormControlProps {
  children: ReactNode;
  id: NonNullable<FormElementProps['id']> | undefined;
  disabled?: boolean;
  label: ReactNode;
  labelId?: string;
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
  'aria-label'?: NonNullable<FormElementProps['aria-label']>;
  'aria-labelledby'?: NonNullable<FormElementProps['aria-labelledby']>;
  'aria-describedby'?: NonNullable<FormElementProps['aria-describedby']>;
  'aria-errormessage'?: NonNullable<FormElementProps['aria-errormessage']>;
}

export const FormControl = ({
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
}: FormControlProps) => {
  const { id, labelId, helperTextId, errorMessageId } = useIds({
    providedId,
    providedLabelId,
    providedHelperTextId,
    providedErrorMessageId,
  });
  const showErrorMessage = Boolean(error && errorMessage);
  const hasGroupHelperText = Boolean(helperText);
  const direction = helperTextPosition === 'top' ? 'column' : 'column-reverse';

  return (
    <Fieldset
      id={id}
      sx={sx}
      aria-errormessage={ariaErrorMessage || showErrorMessage ? errorMessageId : undefined}
      aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
      aria-describedby={ariaDescribedby || !!helperText ? helperTextId : undefined}
    >
      <FieldsetLegend id={labelId} disabled={disabled}>
        {label}
      </FieldsetLegend>
      <FormControlContext.Provider value={{ hasGroupHelperText }}>
        {hasGroupHelperText ? (
          <Stack spacing={2} direction={direction}>
            <FormHelperText id={helperTextId} disabled={disabled}>
              {helperText}
            </FormHelperText>
            {children}
          </Stack>
        ) : (
          children
        )}
        {showErrorMessage ? <FormErrorMessage>{errorMessage}</FormErrorMessage> : null}
      </FormControlContext.Provider>
    </Fieldset>
  );
};
