import { createContext, useContext } from 'react';

export type CheckboxGroupBaseContextValue = {
  name?: string;
  value?: Array<string>;
  onItemCheck(value: string): void;
  onItemUncheck(value: string): void;
};
export const CheckboxGroupBaseContext = createContext<CheckboxGroupBaseContextValue | undefined>(
  undefined
);
export const CheckboxGroupBaseProvider = CheckboxGroupBaseContext.Provider;
export const useCheckboxGroupBase = () => useContext(CheckboxGroupBaseContext);
