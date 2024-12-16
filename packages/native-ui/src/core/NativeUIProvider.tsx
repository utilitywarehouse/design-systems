import React, { PropsWithChildren, useEffect } from 'react';
import { breakpoints } from './breakpoints';
import { darkTheme, lightTheme } from './themes';
import {
  UnistylesRegistry,
  UnistylesRuntime,
  UnistylesThemes,
  useInitialTheme,
  UnistylesProvider,
} from 'react-native-unistyles';

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  })
  .addConfig({
    adaptiveThemes: false,
  });

const NativeUIProvider: React.FC<PropsWithChildren<{ colorMode?: keyof UnistylesThemes }>> = ({
  children,
  colorMode = 'light',
}) => {
  useInitialTheme(colorMode);
  useEffect(() => {
    UnistylesRuntime.setTheme(colorMode === 'dark' ? 'dark' : 'light');
  }, [colorMode]);
  return <UnistylesProvider>{children}</UnistylesProvider>;
};

export default NativeUIProvider;
