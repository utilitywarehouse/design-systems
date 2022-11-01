import './types/overrides';

export { default as Box } from './components/Box';
export type { BoxProps } from './components/Box';
export { default as Background } from './components/Background';
export type { BackgroundProps } from './components/Background';
export { default as ThemeProvider } from './components/ThemeProvider';
export { default as Typography, variantMapping, typographyClasses } from './components/Typography';
export type { TypographyProps } from './components/Typography';

export { default as CssBaseline } from '@mui/material/CssBaseline';

export {
  neutralBackgroundColors,
  inverseBackgroundColors as brandBackgroundColors,
  backgroundColors,
} from './types';
export type {
  NeutralBackgroundColor,
  InverseBackgroundColor as BrandBackgroundColor,
  BackgroundColor,
} from './types';
