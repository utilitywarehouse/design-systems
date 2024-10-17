import { createContext, useContext } from 'react';

export type BaseRadioGroupContextValue = {
  hasGroupHelperText: boolean;
  'aria-describedby'?: string;
};

export const BaseRadioGroupContext = createContext<BaseRadioGroupContextValue>({
  hasGroupHelperText: false,
} as BaseRadioGroupContextValue);

export const BaseRadioGroupProvider = BaseRadioGroupContext.Provider;

export const useBaseRadioGroup = () => useContext(BaseRadioGroupContext);
