import { createStyle } from '@gluestack-style/react';

export const RadioIcon = createStyle({
  borderRadius: '$full',
  ':checked': {
    color: '$cyan500',
    ':disabled': {
      color: '$grey400',
    },
    ':hover': {
      color: '$cyan500',
      ':disabled': {
        color: '$grey400',
      },
    },
  },
  ':disabled': {
    color: '$grey400',
  },
  _dark: {
    ':checked': {
      color: '$darkCyan700',
      ':disabled': {
        color: '$darkGrey400',
      },
      ':hover': {
        color: '$darkCyan700',
        ':disabled': {
          color: '$darkGrey400',
        },
      },
    },
  },
});
