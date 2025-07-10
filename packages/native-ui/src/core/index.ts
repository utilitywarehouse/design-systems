import {
  Display,
  Hide,
  mq,
  StyleSheet,
  UnistylesRuntime,
  useUnistyles,
  withUnistyles,
} from 'react-native-unistyles';
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

export { default as NativeUIProvider } from './NativeUIProvider';

export {
  breakpoints,
  Display,
  Hide,
  mq,
  StyleSheet,
  themes,
  UnistylesRuntime,
  useUnistyles,
  withUnistyles,
};

export type * from '../types/unistyles';
