import { Breakpoints } from '../types';
import { DATA_ATTRIBUTES } from './data-attributes';

export function classSelector(className: string) {
  return `:where(.${className})`;
}

export function pseudoClassSelector(className: string) {
  return `:where(:${className})`;
}

export function dataAttributeSelector(attribute: string) {
  return `:where([${attribute}])`;
}

export function responsiveClassSelector(className: string, breakpoint: Breakpoints) {
  return `:where(.${breakpoint}\\:${className})`;
}

export function colorSchemeSelector(color: string) {
  return `:where([${DATA_ATTRIBUTES.colorscheme}="${color}"])`;
}

export const CSS_SELECTORS = {
  focusVisible: pseudoClassSelector('focus-visible'),
  active: pseudoClassSelector('active'),
  hover: pseudoClassSelector('hover:enabled'),
  colorScheme: {
    cyan: colorSchemeSelector('cyan'),
    red: colorSchemeSelector('red'),
    green: colorSchemeSelector('green'),
    gold: colorSchemeSelector('gold'),
    grey: colorSchemeSelector('grey'),
  },
};

export const DATA_ATTRIBUTE_SELECTORS = {
  onBrandBackground: dataAttributeSelector(DATA_ATTRIBUTES.onBrandBackground),
  disabled: dataAttributeSelector(DATA_ATTRIBUTES.disabled),
  nested: dataAttributeSelector(DATA_ATTRIBUTES.nested),
};
