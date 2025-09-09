/* eslint-disable @typescript-eslint/no-empty-object-type */
import { breakpoints } from '../core/breakpoints';
import { themes } from '../core/themes';

export type AppBreakpoints = typeof breakpoints;

export type themes = typeof themes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends themes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}
