import { StyleSheet, Display, Hide, mq, useUnistyles, withUnistyles } from 'react-native-unistyles';
import { breakpoints } from './breakpoints';
import { themes } from './themes';
export { default as NativeUIProvider } from './NativeUIProvider';

StyleSheet.configure({
  breakpoints,
  themes: themes,
  settings: {
    initialTheme: 'light',
    adaptiveThemes: false,
    CSSVars: false,
  },
});

export { StyleSheet, breakpoints, themes, Display, Hide, mq, useUnistyles, withUnistyles };

export type * from '../types/unistyles';
