const colorSchemeDataAttribute = (color: string) => `:where([data-colorscheme="${color}"])`;

export const dataAttributes = {
  legacy: 'legacy-cwui',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  error: 'error',
  variant: 'variant',
  size: 'size',
  inverse: 'inverse-background',
  multiline: 'multiline',
  heading: 'heading',
  bgcolorBrand: 'bg-color-brand',
  ariaDisabled: ':where([aria-disabled="true"])',
  cyan: colorSchemeDataAttribute('cyan'),
  red: colorSchemeDataAttribute('red'),
  green: colorSchemeDataAttribute('green'),
  gold: colorSchemeDataAttribute('gold'),
  grey: colorSchemeDataAttribute('grey'),
};
