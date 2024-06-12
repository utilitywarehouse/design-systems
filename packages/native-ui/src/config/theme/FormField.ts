import { createStyle } from '@gluestack-style/react';

export const FormField = createStyle({
  flexDirection: 'column',
  gap: '$2',

  ':disabled': {
    _labelText: {
      color: '$grey400',
    },

    _helperText: {
      color: '$grey400',
    },

    _helperIcon: {
      color: '$grey400',
    },

    _invalidText: {
      color: '$grey400',
    },

    _validText: {
      color: '$grey400',
    },

    _invalidIcon: {
      color: '$grey400',
    },

    _validIcon: {
      color: '$grey400',
    },

    _dark: {
      ':disabled': {
        _labelText: {
          color: '$darkGrey400',
        },

        _helperText: {
          color: '$darkGrey400',
        },

        _helperIcon: {
          color: '$darkGrey400',
        },

        _invalidText: {
          color: '$darkGrey400',
        },

        _validText: {
          color: '$darkGrey400',
        },

        _invalidIcon: {
          color: '$darkGrey400',
        },

        _validIcon: {
          color: '$darkGrey400',
        },
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

  defaultProps: {},
});
