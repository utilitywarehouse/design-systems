import { createContext, useContext } from 'react';

import type { FormFieldProps } from './FormField.props';

export type FormFieldContextValue = {
  name?: FormFieldProps['name'];
  disabled?: FormFieldProps['disabled'];
  helperText?: FormFieldProps['helperText'];
  'aria-describedby'?: string;
};

export const FormFieldContext = createContext<FormFieldContextValue | undefined>(undefined);
export const FormFieldProvider = FormFieldContext.Provider;
export const useFormField = () => useContext(FormFieldContext);
