import { createContext, useContext } from 'react';
import { FormFieldBaseProps } from './FormField.props';

export const FormFieldContext = createContext<FormFieldBaseProps>({});

export const useFormFieldContext = () => useContext(FormFieldContext);
