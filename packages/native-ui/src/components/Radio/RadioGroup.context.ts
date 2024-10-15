import { createContext, useContext } from 'react';

export const RadioGroupContext = createContext<{
  disabled?: boolean;
}>({});

export const useRadioGroupContext = () => useContext(RadioGroupContext);
