import { createStyle } from '@gluestack-style/react';

export const CheckboxLabel = createStyle({
  color: '$grey1000',
  lineHeight: 24,
  fontWeight: '$semibold',
  ':checked': {
    color: '$grey1000',
    ':disabled': {
      color: '$grey400',
    },
  },
  ':hover': {
    color: '$grey1000',
    ':checked': {
      color: '$grey1000',
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
    color: '$grey1000',

    ':checked': {
      color: '$grey1000',
    },
  },

  _web: {
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
  },
  userSelect: 'none',
  _dark: {
    color: '$darkGrey1000',
    ':checked': {
      color: '$darkGrey1000',
      ':disabled': {
        color: '$darkGrey400',
      },
    },
    ':hover': {
      color: '$darkGrey1000',
      ':checked': {
        color: '$darkGrey1000',
        ':disabled': {
          color: '$darkGrey400',
        },
      },
    },
    ':disabled': {
      color: '$darkGrey400',
    },

    ':active': {
      color: '$darkGrey1000',

      ':checked': {
        color: '$darkGrey1000',
      },
    },
  },
});
