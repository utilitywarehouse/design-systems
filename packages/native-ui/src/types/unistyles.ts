/* eslint-disable @typescript-eslint/no-empty-object-type */
import { breakpoints } from '../core/breakpoints';
import { appThemes } from '../core/themes';

export type AppBreakpoints = typeof breakpoints;

export type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}
