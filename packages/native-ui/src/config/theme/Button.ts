import { createStyle } from '@gluestack-style/react';

export const Button = createStyle({
  borderRadius: '$full',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
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

  ':focusVisible': {
    outlineWidth: '$1',
    outlineStyle: 'solid',
  },

  variants: {
    colorScheme: {
      cyan: {
        backgroundColor: '$cyan400',
        borderColor: '$cyan400',
        ':hover': {
          bg: '$cyan500',
        },
        ':active': {
          bg: '$cyan300',
        },

        _text: {
          color: '$cyan1000',
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
          color: '$cyan1000',
          ':hover': {
            color: '$cyan1000',
          },
          ':active': {
            color: '$cyan1000',
          },
        },

        ':disabled': {
          backgroundColor: '$cyan100',

          _text: {
            color: '$cyan300',
          },
          _icon: {
            color: '$cyan300',
          },
          _spinner: {
            color: '$cyan300',
          },
        },

        ':focusVisible': {
          outlineColor: '$cyan800',
        },

        _dark: {
          bg: '$darkCyan400',
          ':hover': {
            bg: '$darkCyan500',
          },
          ':active': {
            bg: '$darkCyan300',
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
            color: '$darkCyan1000',
            ':hover': {
              color: '$darkCyan1000',
            },
            ':active': {
              color: '$darkCyan1000',
            },
          },

          ':disabled': {
            backgroundColor: '$darkCyan100',

            _text: {
              color: '$darkCyan300',
            },
            _icon: {
              color: '$darkCyan300',
            },
            _spinner: {
              color: '$darkCyan300',
            },

            ':focusVisible': {
              outlineColor: '$darkCyan800',
            },
          },
        },
      },

      red: {
        backgroundColor: '$red500',
        borderColor: '$red500',
        ':hover': {
          bg: '$red600',
        },
        ':active': {
          bg: '$red700',
        },

        _text: {
          color: '$white',
        },

        _icon: {
          color: '$white',
          ':hover': {
            color: '$white',
          },
          ':active': {
            color: '$white',
          },
        },

        _spinner: {
          color: '$white',
          ':hover': {
            color: '$white',
          },
          ':active': {
            color: '$white',
          },
        },

        ':disabled': {
          backgroundColor: '$red100',

          _text: {
            color: '$red300',
          },
          _icon: {
            color: '$red300',
          },
          _spinner: {
            color: '$red300',
          },
        },

        ':focusVisible': {
          outlineColor: '$red700',
        },

        _dark: {
          bg: '$darkRed500',
          ':hover': {
            bg: '$darkRed600',
          },
          ':active': {
            bg: '$darkRed700',
          },
          _text: {
            color: '$darkWhite',
            ':hover': {
              color: '$darkWhite',
            },
            ':active': {
              color: '$darkWhite',
            },
          },
          _icon: {
            color: '$darkWhite',
            ':hover': {
              color: '$darkWhite',
            },
            ':active': {
              color: '$darkWhite',
            },
          },
          _spinner: {
            color: '$darkWhite',
            ':hover': {
              color: '$darkWhite',
            },
            ':active': {
              color: '$darkWhite',
            },
          },

          ':disabled': {
            backgroundColor: '$darkRed100',

            _text: {
              color: '$darkRed300',
            },
            _icon: {
              color: '$darkRed300',
            },
            _spinner: {
              color: '$darkRed300',
            },

            ':focusVisible': {
              outlineColor: '$darkRed700',
            },
          },
        },
      },
    },

    variant: {
      solid: {},
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
      },
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: 0,
      },
    },

    size: {
      small: {
        paddingVertical: '$2',
        paddingHorizontal: '$3',
        minHeight: 32,

        _text: {
          paddingHorizontal: '$1',
        },
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
          paddingHorizontal: '$2',
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      size: 'small',
      value: {
        paddingVertical: '$1',
      },
    },
    {
      variant: 'outline',
      size: 'regular',
      value: {
        paddingVertical: '$3',
      },
    },
    {
      variant: 'outline',
      colorScheme: 'cyan',
      value: {
        backgroundColor: 'transparent',

        ':hover': {
          backgroundColor: '$cyan75',
        },

        ':active': {
          backgroundColor: '$cyan200',
        },

        ':disabled': {
          borderColor: '$cyan300',
          backgroundColor: 'transparent',

          _text: {
            color: '$cyan300',
          },
          _icon: {
            color: '$cyan300',
          },
          _spinner: {
            color: '$cyan300',
          },
        },

        ':focusVisible': {
          backgroundColor: '$cyan75',
          outlineColor: '$cyan700',
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkCyan75',
          },

          ':active': {
            backgroundColor: '$darkCyan200',
          },

          ':disabled': {
            borderColor: '$darkCyan300',
            backgroundColor: 'transparent',

            _text: {
              color: '$darkCyan300',
            },
            _icon: {
              color: '$darkCyan300',
            },
            _spinner: {
              color: '$darkCyan300',
            },

            ':focusVisible': {
              backgroundColor: '$darkCyan75',
              outlineColor: '$darkCyan700',
            },
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'cyan',
      value: {
        backgroundColor: 'transparent',

        ':hover': {
          backgroundColor: '$cyan100',
        },

        ':active': {
          backgroundColor: '$cyan200',
        },

        ':disabled': {
          backgroundColor: 'transparent',

          _text: {
            color: '$cyan300',
          },
          _icon: {
            color: '$cyan300',
          },
          _spinner: {
            color: '$cyan300',
          },
        },

        ':focusVisible': {
          backgroundColor: '$cyan100',
          outlineColor: '$cyan700',
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkCyan100',
          },

          ':active': {
            backgroundColor: '$darkCyan200',
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _text: {
              color: '$darkCyan300',
            },
            _icon: {
              color: '$darkCyan300',
            },
            _spinner: {
              color: '$darkCyan300',
            },

            ':focusVisible': {
              backgroundColor: '$darkCyan100',
              outlineColor: '$darkCyan700',
            },
          },
        },
      },
    },
  ],

  props: {
    size: 'regular',
    variant: 'solid',
    colorScheme: 'cyan',
  },

  ':disabled': {
    opacity: 0.4,
  },
});
