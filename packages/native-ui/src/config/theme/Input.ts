import { createStyle } from '@gluestack-style/react';

export const Input = createStyle({
  borderWidth: 2,
  borderColor: '$grey500',
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

  ':focus': {
    borderColor: '$cyan500',
    borderBottomColor: '$cyan500',
  },

  ':readOnly': {
    opacity: 0.5,
    borderColor: '$transparent',
    borderBottomColor: '$transparent',
  },

  ':disabled': {
    borderColor: '$grey400',
    borderBottomColor: '$grey600',

    _icon: {
      color: '$grey400',
    },

    _input: {
      props: {
        placeholderTextColor: '$grey400',
      },
    },
  },

  _input: {
    py: 'auto',
    px: '$2',
  },

  _icon: {
    color: '$grey700',
  },

  _dark: {},

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
      },
    },
  },

  defaultProps: {
    validationStatus: 'initial',
  },
});
