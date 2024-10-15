import { createContext, useContext } from 'react';

export const CheckboxGroupContext = createContext<{
  disabled?: boolean;
}>({});

export const useCheckboxGroupContext = () => useContext(CheckboxGroupContext);
