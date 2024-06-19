import { Breakpoints } from '../types';
import { DATA_ATTRIBUTES } from './data-attributes';

export function classSelector(className: string) {
  return `:where(.${className})`;
}
export function responsiveClassSelector(className: string, breakpoint: Breakpoints) {
  return `:where(.${breakpoint}\\:${className})`;
}

function colorSchemeSelector(color: string) {
  return `:where([${DATA_ATTRIBUTES.colorscheme}="${color}"])`;
}

export const COLORSCHEME_SELECTORS = {
  cyan: colorSchemeSelector('cyan'),
  red: colorSchemeSelector('red'),
  green: colorSchemeSelector('green'),
  gold: colorSchemeSelector('gold'),
  grey: colorSchemeSelector('grey'),
  error: colorSchemeSelector('error'),
  info: colorSchemeSelector('info'),
  warning: colorSchemeSelector('warning'),
  success: colorSchemeSelector('success'),
};

export const DATA_ATTRIBUTE_SELECTORS = {
  // TODO: replace usage of this with inverted
  onBrandBackground: `:where([${DATA_ATTRIBUTES.onBrandBackground}])`,
  inverted: `:where([${DATA_ATTRIBUTES.inverted}])`,
  customColor: `:where([${DATA_ATTRIBUTES.customColor}])`,
};
