import { createContext, useContext } from 'react';

import { colorsCommon } from '@utilitywarehouse/colour-system';

type BackgroundContextValue = {
  background: string;
  isInvertedBackground: boolean;
};

const BackgroundContext = createContext<BackgroundContextValue>({
  background: colorsCommon.brandWhite,
  isInvertedBackground: false,
});

export const BackgroundProvider = BackgroundContext.Provider;

export const useBackground = () => useContext(BackgroundContext);
