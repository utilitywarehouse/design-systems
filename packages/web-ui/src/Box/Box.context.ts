import { createContext, useContext } from 'react';
import { colorsCommon } from '@utilitywarehouse/colour-system';

type BackgroundContextValue = {
  background: string;
  /** @deprecated Please use `isInvertedBackground` */
  isBrandBackground: boolean;
  isInvertedBackground: boolean;
};

const BackgroundContext = createContext<BackgroundContextValue>({
  background: colorsCommon.brandWhite,
  isBrandBackground: false,
  isInvertedBackground: false,
});

export const BackgroundProvider = BackgroundContext.Provider;

export const useBackground = () => useContext(BackgroundContext);
