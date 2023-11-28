import { Breakpoints } from '../types';

export function classSelector(className: string) {
  return `&:where(.${className})`;
}

export function responsiveClassSelector(className: string, breakpoint: Breakpoints) {
  return `&:where(.${breakpoint}\\:${className})`;
}

export function colorSchemeSelector(color: string) {
  return `:where([data-colorscheme="${color}"])`;
}

export const COLORSCHEME_SELECTORS = {
  cyan: colorSchemeSelector('cyan'),
  red: colorSchemeSelector('red'),
  green: colorSchemeSelector('green'),
  gold: colorSchemeSelector('gold'),
  grey: colorSchemeSelector('grey'),
};
