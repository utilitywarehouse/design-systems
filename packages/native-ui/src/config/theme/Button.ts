import { createStyle } from '@gluestack-style/react';

export const Button = createStyle({
  borderRadius: '$full',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  _text: {
    fontWeight: '$medium',
    color: '$cyan1000',
    _dark: {
      color: '$darkCyan1000',
    },
  },

  _icon: {
    color: '$cyan1000',
    _dark: {
      color: '$darkCyan1000',
    },
  },

  _spinner: {
    props: {
      color: '$cyan1000',
    },
    _dark: {
      props: {
        color: '$darkCyan1000',
      },
    },
  },

  variants: {
    colorScheme: {
      cyan: {
        backgroundColor: '$cyan400',
        borderColor: '$cyan400',

        ':hover': {
          bg: '$cyan400',
          borderColor: '$cyan400',
        },

        ':active': {
          bg: '$cyan400',
          borderColor: '$cyan400',
        },

        _text: {
          color: '$cyan1000',
          ':hover': {
            color: '$cyan1000',
          },
          ':active': {
            color: '$primary700',
          },
        },

        _icon: {
          color: '$cyan1000',
          ':hover': {
            color: '$cyan1000',
          },
          ':active': {
            color: '$cyan1000',
          },
        },

        _spinner: {
          props: {
            color: '$cyan1000',
          },
          ':hover': {
            props: {
              color: '$cyan1000',
            },
          },
          ':active': {
            props: {
              color: '$cyan1000',
            },
          },
        },

        _dark: {
          bg: '$darkCyan400',

          ':hover': {
            bg: '$darkCyan400',
            borderColor: '$darkCyan400',
          },
          ':active': {
            bg: '$darkCyan400',
            borderColor: '$darkCyan400',
          },
          _text: {
            color: '$darkCyan1000',
            ':hover': {
              color: '$darkCyan1000',
            },
            ':active': {
              color: '$darkCyan1000',
            },
          },
          _icon: {
            color: '$darkCyan1000',
            ':hover': {
              color: '$darkCyan1000',
            },
            ':active': {
              color: '$darkCyan1000',
            },
          },
          _spinner: {
            props: { color: '$darkCyan1000' },
            ':hover': {
              props: { color: '$darkCyan1000' },
            },
            ':active': {
              props: { color: '$darkCyan1000' },
            },
          },

          ':focusVisible': {
            _web: {
              boxShadow: 'offset 0 0 0 2px $info400',
            },
          },
        },
      },
    },

    variant: {
      solid: {},
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
      },
    },

    size: {
      small: {
        paddingVertical: '$2',
        paddingHorizontal: '$3',
        minHeight: 32,
      },
      regular: {
        paddingVertical: '$4',
        paddingHorizontal: '$6',
        minHeight: 48,
        _icon: {
          width: 16,
          height: 16,
        },
        _text: {
          props: {
            size: 'md',
            fontWeight: '$medium',
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      colorScheme: 'cyan',
      value: {},
    },
    {
      variant: 'outline',
      colorScheme: 'cyan',
      value: {
        backgroundColor: 'transparent',
      },
    },
  ],

  props: {
    size: 'regular',
    variant: 'solid',
    colorScheme: 'cyan',
  },

  _web: {
    ':focusVisible': {
      outlineWidth: '$0.5',
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      _dark: {
        outlineColor: '$primary300',
      },
    },
  },

  ':disabled': {
    opacity: 0.4,
  },
});
