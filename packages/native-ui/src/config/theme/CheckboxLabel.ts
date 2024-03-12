import { createStyle } from '@gluestack-style/react';

export const CheckboxLabel = createStyle({
  color: '$brandMidnight',
  ':checked': {
    color: '$brandMidnight',
    ':disabled': {
      color: '$grey400',
    },
  },
  ':hover': {
    color: '$brandMidnight',
    ':checked': {
      color: '$brandMidnight',
      ':disabled': {
        color: '$grey400',
      },
    },
    ':disabled': {
      color: '$grey400',
    },
  },
  ':disabled': {
    color: '$grey400',
  },
  ':active': {
    color: '$brandMidnight',

    ':checked': {
      color: '$brandMidnight',
    },
  },

  _web: {
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
  },
  userSelect: 'none',
  _dark: {
    color: '$brandWhite',
    ':checked': {
      color: '$brandWhite',
      ':disabled': {
        color: '$darkGrey700',
      },
    },
    ':hover': {
      color: '$brandWhite',
      ':checked': {
        color: '$brandWhite',
        ':disabled': {
          color: '$darkGrey700',
        },
      },
    },
    ':disabled': {
      color: '$darkGrey700',
    },

    ':active': {
      color: '$brandWhite',

      ':checked': {
        color: '$brandWhite',
      },
    },
  },
});
