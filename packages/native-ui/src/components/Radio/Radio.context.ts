import { createContext, useContext } from 'react';

export const RadioContext = createContext<{
  disabled?: boolean;
  checked?: boolean;
}>({});

export const useRadioContext = () => useContext(RadioContext);
