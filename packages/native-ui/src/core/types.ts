import { breakpoints } from './breakpoints';
import { darkTheme, lightTheme } from './themes';

export type AppBreakpoints = typeof breakpoints;

export type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}
