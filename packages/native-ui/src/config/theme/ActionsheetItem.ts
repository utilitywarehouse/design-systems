import { createStyle } from '@gluestack-style/react';

export const ActionsheetItem = createStyle({
  flexDirection: 'row',
  alignItems: 'center',
  rounded: '$sm',
  py: '$1.5',
  w: '$full',

  ':disabled': {
    opacity: 0.4,
    _web: {
      pointerEvents: 'all !important',
      cursor: 'not-allowed',
    },
  },

  ':hover': {
    bg: '$backgroundLight50',
  },

  ':active': {
    bg: '$backgroundLight100',
  },

  ':focus': {
    bg: '$backgroundLight100',
  },

  _dark: {
    ':hover': {
      bg: '$backgroundDark800',
    },

    ':active': {
      bg: '$backgroundDark700',
    },

    ':focus': {
      bg: '$backgroundDark700',
    },
  },

  _web: {
    ':focusVisible': {
      bg: '$backgroundLight100',
      _dark: {
        bg: '$backgroundDark700',
      },
    },
  },
});
