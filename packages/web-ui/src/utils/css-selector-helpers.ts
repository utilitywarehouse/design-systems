import { Breakpoints } from '../types';
import { DATA_ATTRIBUTES } from './data-attributes';

export function classSelector(className: string) {
  return `:where(.${className})`;
}

export function responsiveClassSelector(className: string, breakpoint: Breakpoints) {
  return `:where(.${breakpoint}\\:${className})`;
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

export const DATA_ATTRIBUTE_SELECTORS = {
  onBrandBackground: `:where([${DATA_ATTRIBUTES.onBrandBackground}="true"])`,
};
