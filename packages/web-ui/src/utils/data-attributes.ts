function withDataPrefix(name: string) {
  return `data-${name}`;
}

/* a set of data-attributes used internally for styling */
export const DATA_ATTRIBUTES = {
  customColor: withDataPrefix('custom-color'),
  colorscheme: withDataPrefix('colorscheme'),
  inverted: withDataPrefix('inverted'),
  orientation: withDataPrefix('orientation'),
  // TODO: remove in v1
  primary: withDataPrefix('primary'),
  secondary: withDataPrefix('secondary'),
  success: withDataPrefix('success'),
  error: withDataPrefix('error'),
  variant: withDataPrefix('variant'),
  size: withDataPrefix('size'),
  heading: withDataPrefix('heading'),
  bgcolorBrand: withDataPrefix('bg-color-brand'),
};
