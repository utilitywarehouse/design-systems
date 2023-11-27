const withDataPrefix = (name: string) => `data-${name}`;
const colorSchemeDataAttributeSelector = (color: string) => `:where([data-colorscheme="${color}"])`;

export const dataAttributes = {
  legacy: withDataPrefix('legacy-cwui'),
  primary: withDataPrefix('primary'),
  secondary: withDataPrefix('secondary'),
  success: withDataPrefix('success'),
  error: withDataPrefix('error'),
  variant: withDataPrefix('variant'),
  size: withDataPrefix('size'),
  inverse: withDataPrefix('inverse-background'),
  multiline: withDataPrefix('multiline'),
  heading: withDataPrefix('heading'),
  bgcolorBrand: withDataPrefix('bg-color-brand'),
  // TODO: I think this may be becoming a little muddled between attributes and selectors, might be good to review & refactor.
  disabled: ':where([data-disabled="true"])',
  ariaDisabled: ':where([aria-disabled="true"])',
  cyan: colorSchemeDataAttributeSelector('cyan'),
  red: colorSchemeDataAttributeSelector('red'),
  green: colorSchemeDataAttributeSelector('green'),
  gold: colorSchemeDataAttributeSelector('gold'),
  grey: colorSchemeDataAttributeSelector('grey'),
};
