import { createStyle } from '@gluestack-style/react';

export const Input = createStyle({
  borderWidth: 1,
  borderColor: '$backgroundLight300',
  height: '$14',
  borderRadius: '$sm',
  flexDirection: 'row',
  overflow: 'hidden',
  alignContent: 'center',

  ':hover': {
    borderColor: '$borderLight400',
  },

  ':focus': {
    borderColor: '$primary700',
    ':hover': {
      borderColor: '$primary700',
    },
  },

  ':disabled': {
    opacity: 0.4,
    ':hover': {
      borderColor: '$backgroundLight300',
    },
  },

  _input: {
    py: 'auto',
    px: '$3',
  },

  _icon: {
    color: '$textLight400',
  },

  _dark: {
    borderColor: '$borderDark700',
    ':hover': {
      borderColor: '$borderDark400',
    },
    ':focus': {
      borderColor: '$primary400',
      ':hover': {
        borderColor: '$primary400',
      },
    },
    ':disabled': {
      ':hover': {
        borderColor: '$borderDark700',
      },
    },
  },

  variants: {
    validationStatus: {
      initial: {},
      valid: {},
      invalid: {},
    },
  },

  defaultProps: {
    validationStatus: 'initial',
  },
});
