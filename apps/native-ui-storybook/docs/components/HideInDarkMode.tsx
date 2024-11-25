import { useColorMode } from '@utilitywarehouse/native-ui';
import React, { FC, PropsWithChildren } from 'react';

const HideInDarkMode: FC<PropsWithChildren> = ({ children }) => {
  const colorMode = useColorMode();

  return colorMode === 'light' ? children : null;
};

export default HideInDarkMode;
