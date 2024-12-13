function withDataPrefix(name: string) {
  return `data-${name}`;
}

/* a set of data-attributes used for styling */
export const DATA_ATTRIBUTES = {
  colorscheme: withDataPrefix('colorscheme'),
  disableUserSelect: withDataPrefix('disable-user-select'),
};
