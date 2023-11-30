function withDataPrefix(name: string) {
  return `data-${name}`;
}

export const DATA_ATTRIBUTES = {
  onBrandBackground: withDataPrefix('on-brand-bg'),
  customColor: withDataPrefix('custom-color'),
  colorscheme: withDataPrefix('colorscheme'),
  // TODO: remove in v1
  legacy: withDataPrefix('legacy-cwui'),
  primary: withDataPrefix('primary'),
  secondary: withDataPrefix('secondary'),
  success: withDataPrefix('success'),
  error: withDataPrefix('error'),
  variant: withDataPrefix('variant'),
  size: withDataPrefix('size'),
  heading: withDataPrefix('heading'),
  bgcolorBrand: withDataPrefix('bg-color-brand'),
  // when removing this, update ToggleButton to use context
  inverse: withDataPrefix('inverse-background'),
};
