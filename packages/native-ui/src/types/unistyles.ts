import { breakpoints } from '../core/breakpoints';
import { darkTheme, lightTheme } from '../core/themes';

export type AppBreakpoints = typeof breakpoints;

export type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export type UnistylesBreakpoints = AppBreakpoints;
  export type UnistylesThemes = AppThemes;
}
