import { createStyle } from '@gluestack-style/react';

export const CheckboxIcon = createStyle({
  ':checked': {
    color: 'white',
  },
  _dark: {
    ':checked': {
      color: '$darkCyan50',
    },
  },
});
