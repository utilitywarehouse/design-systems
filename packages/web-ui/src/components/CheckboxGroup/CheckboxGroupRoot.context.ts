import { createContext, useContext } from 'react';

export type CheckboxGroupRootContextValue = {
  name?: string;
  value?: Array<string>;
  onItemCheck(value: string): void;
  onItemUncheck(value: string): void;
};

export const CheckboxGroupRootContext = createContext<CheckboxGroupRootContextValue | undefined>(
  undefined
);

export const CheckboxGroupRootProvider = CheckboxGroupRootContext.Provider;

export const useCheckboxGroupRoot = () => useContext(CheckboxGroupRootContext);
