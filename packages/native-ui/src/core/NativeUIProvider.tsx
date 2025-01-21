import React, { PropsWithChildren, useEffect } from 'react';
import { breakpoints } from './breakpoints';
import { appThemes } from './themes';
import { StyleSheet, UnistylesRuntime, UnistylesThemes } from 'react-native-unistyles';

StyleSheet.configure({
  breakpoints,
  themes: appThemes,
  settings: {
    initialTheme: 'light',
    adaptiveThemes: false,
    CSSVars: false,
  },
});

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
