function withDataPrefix(name: string) {
  return `data-${name}`;
}

/* a set of data-attributes used for styling */
export const DATA_ATTRIBUTES = {
  customColor: withDataPrefix('custom-color'),
  colorscheme: withDataPrefix('colorscheme'),
  inverted: withDataPrefix('inverted'),
  disableUserSelect: withDataPrefix('disable-user-select'),
};
