import { createContext, useContext } from 'react';

export const CheckboxGroupContext = createContext<{
  disabled?: boolean;
  validationStatus?: 'valid' | 'invalid' | 'initial';
}>({});

export const useCheckboxGroupContext = () => useContext(CheckboxGroupContext);
