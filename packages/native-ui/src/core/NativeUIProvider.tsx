import React, { PropsWithChildren, useEffect } from 'react';
import { StyleSheet, UnistylesRuntime, UnistylesThemes } from 'react-native-unistyles';
import { breakpoints } from './breakpoints';
import { themes } from './themes';

StyleSheet.configure({
  breakpoints,
  themes: themes,
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
    if (UnistylesRuntime.themeName !== colorMode) {
      UnistylesRuntime.setTheme(colorMode === 'dark' ? 'dark' : 'light');
    }
  }, [colorMode]);
  return children;
};

export default NativeUIProvider;
