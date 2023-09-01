import { createContext, useContext } from 'react';
import { colorsCommon } from '@utilitywarehouse/colour-system';

type BackgroundContextValue = { background: string; isBrandBackground: boolean };

const BackgroundContext = createContext<BackgroundContextValue>({
  background: colorsCommon.brandWhite,
  isBrandBackground: false,
});

export const BackgroundProvider = BackgroundContext.Provider;

export const useBackground = () => useContext(BackgroundContext);
