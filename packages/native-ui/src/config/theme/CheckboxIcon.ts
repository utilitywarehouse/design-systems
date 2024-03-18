import { createStyle } from '@gluestack-style/react';

export const CheckboxIcon = createStyle({
  ':checked': {
    color: '$brandWhite',
  },
  _dark: {
    ':checked': {
      color: '$darkCyan50',
    },
  },
});
