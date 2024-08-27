import { createStyle } from '@gluestack-style/react';

export const CheckboxIndicator = createStyle({
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '$grey500',
  bg: '$transparent',
  height: '$6',
  width: '$6',
  borderRadius: 4,
  borderWidth: 2,

  ':checked': {
    borderColor: '$cyan500',
    bg: '$cyan500',

    _icon: {
      props: {
        color: '$brandWhite',
      },
    },
  },

  ':hover': {
    borderColor: '$grey500',
    bg: '$transparent',

    ':checked': {
      borderColor: '$cyan500',
      bg: '$cyan500',
      ':disabled': {
        bg: '$grey150',
        borderColor: '$grey150',
      },
    },
    ':disabled': {
      borderColor: '$grey400',
    },
  },

  ':active': {
    ':checked': {
      borderColor: '$cyan500',
      bg: '$cyan500',
    },
  },
  ':disabled': {
    borderColor: '$grey400',
    ':checked': {
      bg: '$grey150',
      borderColor: '$grey150',
      _icon: {
        color: '$grey400',
      },
    },
  },

  _dark: {
    borderColor: '$darkGrey600',
    bg: '$transparent',

    ':checked': {
      borderColor: '$darkCyan700',
      bg: '$darkCyan700',
    },
    ':hover': {
      borderColor: '$darkGrey600',
      bg: 'transparent',
      ':checked': {
        bg: '$darkCyan700',
        borderColor: '$darkCyan700',
        ':disabled': {
          borderColor: '$darkGrey700',
          bg: '$darkGrey700',
        },
      },
      ':disabled': {
        borderColor: '$darkGrey400',
      },
    },
    ':active': {
      ':checked': {
        borderColor: '$darkCyan700',
        bg: '$darkCyan700',
      },
    },
    ':disabled': {
      borderColor: '$darkGrey400',
      ':checked': {
        bg: '$darkGrey700',
        borderColor: '$darkGrey700',
        _icon: {
          color: '$darkGrey500',
        },
      },
    },
  },
});
