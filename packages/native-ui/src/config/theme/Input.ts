import { createStyle } from '@gluestack-style/react';

export const Input = createStyle({
  borderWidth: 2,
  borderTopColor: '$grey500',
  borderLeftColor: '$grey500',
  borderRightColor: '$grey500',
  borderBottomColor: '$grey900',
  height: '$14',
  borderTopLeftRadius: '$2xl',
  borderTopRightRadius: '$2xl',
  borderBottomLeftRadius: '$none',
  borderBottomRightRadius: '$none',
  flexDirection: 'row',
  overflow: 'hidden',
  alignContent: 'center',
  px: '$4',
  backgroundColor: '$white',
  gap: '$2',

  ':focus': {
    borderColor: '$cyan500',
    borderBottomColor: '$cyan500',
  },

  ':readOnly': {
    borderColor: '$transparent',
    borderBottomColor: '$transparent',
    px: 0,
  },

  ':disabled': {
    borderColor: '$grey400',
    borderBottomColor: '$grey600',
    backgroundColor: '$grey50',

    _icon: {
      color: '$grey400',
    },

    _input: {
      color: '$grey400',

      _validationIcon: {
        color: '$grey400',
      },

      props: {
        placeholderTextColor: '$grey400',
      },
    },
  },

  _input: {
    py: 'auto',
  },

  _icon: {
    color: '$grey700',
  },

  _validationIcon: {
    pl: '$2',
  },

  _dark: {
    borderColor: '$darkGrey500',
    borderBottomColor: '$darkGrey900',
    backgroundColor: '$darkGrey25',

    ':focus': {
      borderColor: '$darkCyan700',
      borderBottomColor: '$darkyCyan700',
    },

    ':disabled': {
      borderColor: '$darkGrey400',
      borderBottomColor: '$darkGrey600',
      backgroundColor: '$darkGrey50',

      _icon: {
        color: '$darkGrey400',
      },

      _input: {
        color: '$darkGrey400',
        props: {
          placeholderTextColor: '$darkGrey400',
        },
      },
    },

    _icon: {
      color: '$darkGrey700',
    },
  },

  variants: {
    validationStatus: {
      initial: {},
      valid: {
        borderBottomColor: '$green500',

        _validationIcon: {
          color: '$green500',
        },

        ':focus': {
          borderColor: '$green500',
          borderBottomColor: '$green500',
        },

        _dark: {
          borderBottomColor: '$darkGreen700',

          _validationIcon: {
            color: '$darkGreen700',
          },

          ':focus': {
            borderColor: '$darkGreen700',
            borderBottomColor: '$darkGreen700',
          },
        },
      },
      invalid: {
        borderBottomColor: '$red500',

        _validationIcon: {
          color: '$red500',
        },

        ':focus': {
          borderColor: '$red500',
          borderBottomColor: '$red500',
        },

        _dark: {
          borderBottomColor: '$darkRed700',

          _validationIcon: {
            color: '$darkRed700',
          },

          ':focus': {
            borderColor: '$darkRed700',
            borderBottomColor: '$darkRed700',
          },
        },
      },
    },
  },

  defaultProps: {
    validationStatus: 'initial',
  },
});
