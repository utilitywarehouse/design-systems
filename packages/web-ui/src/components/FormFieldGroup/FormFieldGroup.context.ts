import { createContext, useContext } from 'react';

export type FormFieldGroupContextValue = {
  hasGroupHelperText: boolean;
  'aria-describedby'?: string;
};

export const FormFieldGroupContext = createContext<FormFieldGroupContextValue>({
  hasGroupHelperText: false,
} as FormFieldGroupContextValue);

export const FormFieldGroupProvider = FormFieldGroupContext.Provider;

export const useFormFieldGroup = () => useContext(FormFieldGroupContext);
