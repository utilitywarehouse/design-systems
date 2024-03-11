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

  _web: {
    ':focusVisible': {
      outlineWidth: '2px',
      outlineColor: '$cyan700',
      outlineStyle: 'solid',
      _dark: {
        outlineColor: '$darkCyan500',
      },
    },
  },

  ':checked': {
    borderColor: '$cyan500',
    bg: '$cyan500',
  },

  ':hover': {
    borderColor: '$grey500',
    bg: '$transparent',
    ':invalid': {
      borderColor: '$error700',
    },
    ':checked': {
      borderColor: '$cyan500',
      bg: '$cyan500',
      ':disabled': {
        bg: '$grey150',
        borderColor: '$grey150',
        ':invalid': {
          borderColor: '$error700',
        },
      },
    },
    ':disabled': {
      borderColor: '$grey400',
      ':invalid': {
        borderColor: '$error700',
      },
    },
  },

  ':active': {
    ':checked': {
      bg: '$primary800',
      borderColor: '$primary800',
    },
  },
  ':invalid': {
    borderColor: '$error700',
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
      ':invalid': {
        borderColor: '$error400',
      },
      ':checked': {
        bg: '$darkCyan700',
        borderColor: '$darkCyan700',
        ':disabled': {
          borderColor: '$darkGrey700',
          bg: '$darkGrey700',
          ':invalid': {
            borderColor: '$error400',
          },
        },
      },
      ':disabled': {
        borderColor: '$darkGrey400',
        ':invalid': {
          borderColor: '$error400',
        },
      },
    },
    ':active': {
      ':checked': {
        bg: '$primary300',
        borderColor: '$primary300',
      },
    },

    ':invalid': {
      borderColor: '$error400',
    },
  },
});
