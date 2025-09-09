import { FC, PropsWithChildren } from 'react';
import { useColorMode } from '../../src';

const HideInDarkMode: FC<PropsWithChildren> = ({ children }) => {
  const [colorMode] = useColorMode();

  return colorMode === 'light' ? children : null;
};

export default HideInDarkMode;
