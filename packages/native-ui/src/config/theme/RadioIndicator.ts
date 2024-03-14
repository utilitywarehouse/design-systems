import { createStyle } from '@gluestack-style/react';

export const RadioIndicator = createStyle({
  justifyContent: 'center',
  alignItems: 'center',
  bg: 'transparent',
  borderColor: '$grey500',
  borderWidth: 2,
  borderRadius: 999,
  _web: {
    ':focusVisible': {
      outlineWidth: 2,
      outlineColor: '$cyan700',
      outlineStyle: 'solid',
      _dark: {
        outlineColor: '$darkCyan700',
      },
    },
  },
  ':checked': {
    borderColor: '$cyan500',
    bg: 'transparent',
    ':disabled': {
      borderColor: '$grey400',
    },
  },

  ':disabled': {
    borderColor: '$grey400',
  },

  ':hover': {
    borderColor: '$cyan500',
    bg: 'transparent',

    ':checked': {
      bg: 'transparent',
      borderColor: '$cyan500',
    },
    ':disabled': {
      borderColor: '$grey400',
    },
  },

  _dark: {
    borderColor: '$darkGrey600',
    bg: '$transparent',

    ':hover': {
      borderColor: '$darkCyan700',
      bg: 'transparent',

      ':checked': {
        bg: 'transparent',
        borderColor: '$darkCyan700',
      },

      ':disabled': {
        borderColor: 'darkGrey400',
        ':checked': {
          bg: 'transparent',
          borderColor: 'darkGrey400',
        },
      },
    },

    ':checked': {
      borderColor: '$darkCyan700',
      bg: 'transparent',
      ':disabled': {
        borderColor: '$darkGrey400',
      },
    },

    ':disabled': {
      borderColor: '$darkGrey400',
    },
  },
});
