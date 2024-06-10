import { createStyle } from '@gluestack-style/react';

export const FormField = createStyle({
  flexDirection: 'column',
  gap: '$2',

  variants: {
    validationStatus: {
      initial: {},
      valid: {
        _labelText: {
          color: '$green500',
        },

        _input: {},
      },
      invalid: {
        _labelText: {
          color: '$red500',
        },

        _input: {
          props: {
            validationStatus: 'invalid',
          },
        },

        ':focus': {
          _input: {
            props: {
              validationStatus: 'invalid',
            },
          },
        },
      },
    },
  },

  defaultProps: {},
});
