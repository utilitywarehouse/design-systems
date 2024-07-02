import { Breakpoints, COLOR_SCHEME } from '../types';
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

export function colorSchemeParentSelector(colorScheme: COLOR_SCHEME) {
  return `:where([${DATA_ATTRIBUTES.colorscheme}="${colorScheme}"] &)`;
}

export const COLORSCHEME_SELECTORS = {
  cyan: colorSchemeSelector(COLOR_SCHEME.cyan),
  red: colorSchemeSelector(COLOR_SCHEME.red),
  green: colorSchemeSelector(COLOR_SCHEME.green),
  gold: colorSchemeSelector(COLOR_SCHEME.gold),
  grey: colorSchemeSelector(COLOR_SCHEME.grey),
};

export const DATA_ATTRIBUTE_SELECTORS = {
  inverted: `:where([${DATA_ATTRIBUTES.inverted}])`,
  customColor: `:where([${DATA_ATTRIBUTES.customColor}])`,
};
