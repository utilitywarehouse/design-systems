import { DATA_ATTRIBUTES } from './data-attributes';

import type { Breakpoints } from '../types';

export function classSelector(className: string) {
  return `:where(.${className})`;
}
export function responsiveClassSelector(className: string, breakpoint: Breakpoints) {
  return `:where(.${breakpoint}\\:${className})`;
}

function colorSchemeSelector(color: string) {
  return `:where([${DATA_ATTRIBUTES.colorscheme}="${color}"])`;
}

export function colorSchemeParentSelector(colorScheme: string) {
  return `:where([${DATA_ATTRIBUTES.colorscheme}="${colorScheme}"] &)`;
}

export const COLORSCHEME_SELECTORS = {
  cyan: colorSchemeSelector('cyan'),
  red: colorSchemeSelector('red'),
  green: colorSchemeSelector('green'),
  gold: colorSchemeSelector('gold'),
  grey: colorSchemeSelector('grey'),
};

export const DATA_ATTRIBUTE_SELECTORS = {
  inverted: `:where([${DATA_ATTRIBUTES.inverted}])`,
  customColor: `:where([${DATA_ATTRIBUTES.customColor}])`,
  disableUserSelect: `:where([${DATA_ATTRIBUTES.disableUserSelect}])`,
  placement: `:where([${DATA_ATTRIBUTES.placement}])`,
};
