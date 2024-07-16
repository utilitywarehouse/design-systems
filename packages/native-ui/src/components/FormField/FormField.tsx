import React, { createContext, useContext, FC, useMemo } from 'react';
import { createFormControl } from '@gluestack-ui/form-control';
import {
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
} from './styled-components';

export const FormField = createFormControl({
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
});

export type FormFieldProps = React.ComponentProps<typeof FormField>;

interface FormFieldContextType {
  validationStatus: 'valid' | 'invalid' | 'initial';
}

const FormFieldContext = createContext<FormFieldContextType | undefined>(undefined);

const FormFieldProvider: FC<FormFieldProps> = ({ children, ...props }) => {
  const value = useMemo(
    () => ({
      validationStatus: props.validationStatus || 'initial',
    }),
    [props.validationStatus]
  );

  return (
    <FormFieldContext.Provider value={value}>
      <FormField {...props}>{children}</FormField>
    </FormFieldContext.Provider>
  );
};

const useFormFieldContext = (): FormFieldContextType | undefined => useContext(FormFieldContext);

export { FormFieldProvider, useFormFieldContext };
