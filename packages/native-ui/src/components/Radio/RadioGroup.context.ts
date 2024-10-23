import { createContext, useContext } from 'react';

export const RadioGroupContext = createContext<{
  disabled?: boolean;
  validationStatus?: 'valid' | 'invalid' | 'initial';
}>({});

export const useRadioGroupContext = () => useContext(RadioGroupContext);
