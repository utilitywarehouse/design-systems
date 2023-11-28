export function withDataPrefix(name: string) {
  return `data-${name}`;
}

// TODO: remove in v1
export const dataAttributes = {
  // when removing this, update ToggleButton to use context
  inverse: withDataPrefix('inverse-background'),
  legacy: withDataPrefix('legacy-cwui'),
  primary: withDataPrefix('primary'),
  secondary: withDataPrefix('secondary'),
  success: withDataPrefix('success'),
  error: withDataPrefix('error'),
  variant: withDataPrefix('variant'),
  size: withDataPrefix('size'),
  heading: withDataPrefix('heading'),
  bgcolorBrand: withDataPrefix('bg-color-brand'),
};
