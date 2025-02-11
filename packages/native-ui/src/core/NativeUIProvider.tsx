import React, { PropsWithChildren, useEffect } from 'react';
import { UnistylesRuntime, UnistylesThemes } from 'react-native-unistyles';

const NativeUIProvider: React.FC<PropsWithChildren<{ colorMode?: keyof UnistylesThemes }>> = ({
  children,
  colorMode = 'light',
}) => {
  useEffect(() => {
    UnistylesRuntime.setTheme(colorMode === 'dark' ? 'dark' : 'light');
  }, [colorMode]);
  return children;
};

export default NativeUIProvider;
