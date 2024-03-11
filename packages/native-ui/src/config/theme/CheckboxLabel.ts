import { createStyle } from '@gluestack-style/react';

export const CheckboxLabel = createStyle({
  color: '$brandMidnight',
  ':checked': {
    color: '$brandMidnight',
  },
  ':hover': {
    color: '$brandMidnight',
    ':checked': {
      color: '$brandMidnight',
      ':disabled': {
        color: '$brandMidnight',
      },
    },
    ':disabled': {
      color: '$brandMidnight',
    },
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
    },
    ':hover': {
      color: '$brandWhite',
      ':checked': {
        color: '$brandWhite',
        ':disabled': {
          color: '$brandWhite',
        },
      },
    },
    ':disabled': {
      color: '$brandWhite',
    },

    ':active': {
      color: '$brandWhite',

      ':checked': {
        color: '$brandWhite',
      },
    },
  },
});
