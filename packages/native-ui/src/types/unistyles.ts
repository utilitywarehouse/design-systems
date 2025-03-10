/* eslint-disable @typescript-eslint/no-empty-object-type */
import { breakpoints } from '../core/breakpoints';
import { darkTheme, lightTheme } from '../core/themes';

export type AppBreakpoints = typeof breakpoints;

export type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}
