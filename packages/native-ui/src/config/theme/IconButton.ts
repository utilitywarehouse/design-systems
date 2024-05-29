import { createStyle } from '@gluestack-style/react';

export const IconButton = createStyle({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$full',
  variants: {
    colorScheme: {
      cyan: {
        backgroundColor: '$cyan400',
        borderColor: '$cyan400',

        _icon: {
          color: '$cyan1000',
        },

        _spinner: {
          _svg: {
            color: '$cyan1000',
          },
        },

        ':active': {
          bg: '$cyan500',

          _icon: {
            color: '$cyan1000',
          },

          _spinner: {
            _svg: {
              color: '$cyan1000',
            },
          },
        },

        ':disabled': {
          backgroundColor: '$cyan100',

          _icon: {
            color: '$cyan300',
          },

          _spinner: {
            _svg: {
              color: '$cyan300',
            },
          },
        },

        _dark: {
          bg: '$darkCyan700',

          _icon: {
            color: '$darkCyan50',
          },

          _spinner: {
            _svg: {
              color: '$darkCyan50',
            },
          },

          ':active': {
            bg: '$darkCyan800',
            _icon: {
              color: '$darkCyan50',
            },

            _spinner: {
              _svg: {
                color: '$darkCyan50',
              },
            },
          },

          ':disabled': {
            backgroundColor: '$darkGrey175',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },

      red: {
        backgroundColor: '$red500',
        borderColor: '$red500',

        _icon: {
          color: '$white',
        },

        _spinner: {
          _svg: {
            color: '$white',
          },
        },

        ':active': {
          bg: '$red700',

          _icon: {
            color: '$white',
          },

          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        ':disabled': {
          backgroundColor: '$red200',

          _icon: {
            color: '$white',
          },

          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        _dark: {
          bg: '$darkRed700',

          _icon: {
            color: '$darkRed50',
          },

          _spinner: {
            _svg: {
              color: '$darkRed50',
            },
          },

          ':active': {
            bg: '$darkRed800',

            _icon: {
              color: '$darkRed50',
            },

            _spinner: {
              _svg: {
                color: '$darkRed50',
              },
            },
          },

          ':disabled': {
            backgroundColor: '$darkGrey175',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },

      green: {
        backgroundColor: '$green500',
        borderColor: '$green500',

        _icon: {
          color: '$white',
        },

        _spinner: {
          _svg: {
            color: '$white',
          },
        },

        ':active': {
          bg: '$green600',

          _icon: {
            color: '$white',
          },

          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        ':disabled': {
          backgroundColor: '$green200',

          _icon: {
            color: '$white',
          },

          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        _dark: {
          bg: '$darkGreen700',

          _icon: {
            color: '$darkGreen50',
          },

          _spinner: {
            _svg: {
              color: '$darkGreen50',
            },
          },

          ':active': {
            bg: '$darkGreen800',

            _icon: {
              color: '$darkGreen50',
            },

            _spinner: {
              _svg: {
                color: '$darkGreen50',
              },
            },
          },

          ':disabled': {
            backgroundColor: '$darkGrey175',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },

      grey: {
        backgroundColor: '$grey500',
        borderColor: '$grey500',

        _icon: {
          color: '$white',
        },

        _spinner: {
          _svg: {
            color: '$white',
          },
        },

        ':active': {
          bg: '$grey700',

          _icon: {
            color: '$white',
          },

          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        ':disabled': {
          backgroundColor: '$grey100',

          _icon: {
            color: '$grey300',
          },

          _spinner: {
            _svg: {
              color: '$grey300',
            },
          },
        },

        _dark: {
          bg: '$darkGrey700',

          _icon: {
            color: '$darkGrey50',
          },

          _spinner: {
            _svg: {
              color: '$darkGrey50',
            },
          },

          ':active': {
            bg: '$darkGrey800',

            _icon: {
              color: '$darkGrey50',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey50',
              },
            },
          },

          ':disabled': {
            backgroundColor: '$darkGrey175',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },
      gold: {
        backgroundColor: '$gold500',
        borderColor: '$gold500',

        _icon: {
          color: '$white',
        },

        _spinner: {
          _svg: {
            color: '$white',
          },
        },

        ':active': {
          bg: '$gold700',

          _icon: {
            color: '$white',
          },

          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        ':disabled': {
          backgroundColor: '$gold100',

          _icon: {
            color: '$gold300',
          },

          _spinner: {
            _svg: {
              color: '$gold300',
            },
          },
        },

        _dark: {
          bg: '$darkGold700',

          _icon: {
            color: '$darkGold50',
          },

          _spinner: {
            _svg: {
              color: '$darkGold50',
            },
          },

          ':active': {
            bg: '$darkGold800',

            _icon: {
              color: '$darkGold50',
            },

            _spinner: {
              _svg: {
                color: '$darkGold50',
              },
            },
          },

          ':disabled': {
            backgroundColor: '$darkGrey175',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
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
      'x-small': {
        width: 24,
        height: 24,
        _icon: {
          width: 16,
          height: 16,
        },
      },
      small: {
        width: 32,
        height: 32,
        _icon: {
          width: 24,
          height: 24,
        },
      },
      large: {
        width: 48,
        height: 48,
        _icon: {
          width: 24,
          height: 24,
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      colorScheme: 'cyan',
      value: {
        backgroundColor: 'transparent',

        _icon: {
          color: '$cyan1000',
        },

        _spinner: {
          _svg: {
            color: '$cyan1000',
          },
        },

        ':active': {
          backgroundColor: '$cyan50',

          _icon: {
            color: '$cyan1000',
          },

          _spinner: {
            _svg: {
              color: '$cyan1000',
            },
          },
        },

        ':disabled': {
          borderColor: '$cyan200',
          backgroundColor: 'transparent',

          _icon: {
            color: '$cyan300',
          },

          _spinner: {
            _svg: {
              color: '$cyan300',
            },
          },
        },

        _dark: {
          backgroundColor: 'transparent',
          borderColor: '$darkCyan700',

          _icon: {
            color: '$darkCyan1000',
          },

          _spinner: {
            _svg: {
              color: '$darkCyan1000',
            },
          },

          ':active': {
            backgroundColor: '$darkGrey150',
            borderColor: '$darkCyan800',

            _icon: {
              color: '$darkCyan1000',
            },

            _spinner: {
              _svg: {
                color: '$darkCyan1000',
              },
            },
          },

          ':disabled': {
            borderColor: '$darkGrey175',
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },
    },
    {
      variant: 'outline',
      colorScheme: 'red',
      value: {
        backgroundColor: 'transparent',

        _icon: {
          color: '$red900',
        },

        _spinner: {
          _svg: {
            color: '$red900',
          },
        },

        ':active': {
          backgroundColor: '$red50',
          borderColor: '$red600',

          _icon: {
            color: '$red900',
          },

          _spinner: {
            _svg: {
              color: '$red900',
            },
          },
        },

        ':disabled': {
          borderColor: '$red200',
          backgroundColor: 'transparent',

          _icon: {
            color: '$red300',
          },

          _spinner: {
            _svg: {
              color: '$red300',
            },
          },
        },

        _dark: {
          backgroundColor: 'transparent',
          borderColor: '$darkRed700',

          _icon: {
            color: '$darkRed900',
          },

          _spinner: {
            _svg: {
              color: '$darkRed900',
            },
          },

          ':active': {
            backgroundColor: '$darkRed50',
            borderColor: '$darkRed800',

            _icon: {
              color: '$darkRed900',
            },

            _spinner: {
              _svg: {
                color: '$darkRed900',
              },
            },
          },

          ':disabled': {
            borderColor: '$darkGrey175',
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },
    },
    {
      colorScheme: 'green',
      variant: 'outline',
      value: {
        backgroundColor: 'transparent',

        _icon: {
          color: '$green900',
        },

        _spinner: {
          _svg: {
            color: '$green900',
          },
        },

        ':active': {
          backgroundColor: '$green50',
          borderColor: '$green600',

          _icon: {
            color: '$green900',
          },

          _spinner: {
            _svg: {
              color: '$green900',
            },
          },
        },

        ':disabled': {
          borderColor: '$green200',
          backgroundColor: 'transparent',

          _icon: {
            color: '$green300',
          },

          _spinner: {
            _svg: {
              color: '$green300',
            },
          },
        },

        _dark: {
          backgroundColor: 'transparent',
          borderColor: '$darkGreen700',

          _icon: {
            color: '$darkGreen900',
          },

          _spinner: {
            _svg: {
              color: '$darkGreen900',
            },
          },

          ':active': {
            backgroundColor: '$darkGreen50',
            borderColor: '$darkGreen800',

            _icon: {
              color: '$darkGreen900',
            },

            _spinner: {
              _svg: {
                color: '$darkGreen900',
              },
            },
          },

          ':disabled': {
            borderColor: '$darkGrey175',
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },
    },
    {
      colorScheme: 'grey',
      variant: 'outline',
      value: {
        backgroundColor: 'transparent',
        borderColor: '$grey500',

        _icon: {
          color: '$grey900',
        },

        _spinner: {
          _svg: {
            color: '$grey900',
          },
        },

        ':active': {
          backgroundColor: '$grey100',
          borderColor: '$grey600',

          _icon: {
            color: '$grey900',
          },

          _spinner: {
            _svg: {
              color: '$grey900',
            },
          },
        },

        ':disabled': {
          borderColor: '$grey200',
          backgroundColor: 'transparent',

          _icon: {
            color: '$grey200',
          },

          _spinner: {
            _svg: {
              color: '$grey200',
            },
          },
        },

        _dark: {
          backgroundColor: 'transparent',
          borderColor: '$darkGrey700',

          _icon: {
            color: '$darkGrey900',
          },

          _spinner: {
            _svg: {
              color: '$darkGrey900',
            },
          },

          ':active': {
            backgroundColor: '$darkGrey150',
            borderColor: '$darkGrey800',

            _icon: {
              color: '$darkGrey800',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey800',
              },
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',
            borderColor: '$darkGrey175',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },
    },
    {
      colorScheme: 'gold',
      variant: 'outline',
      value: {
        backgroundColor: 'transparent',
        borderColor: '$gold500',

        _icon: {
          color: '$gold900',
        },

        _spinner: {
          _svg: {
            color: '$gold900',
          },
        },

        ':active': {
          backgroundColor: '$gold50',
          borderColor: '$gold600',

          _icon: {
            color: '$gold900',
          },

          _spinner: {
            _svg: {
              color: '$gold900',
            },
          },
        },

        ':disabled': {
          borderColor: '$gold300',
          backgroundColor: 'transparent',

          _icon: {
            color: '$gold300',
          },

          _spinner: {
            _svg: {
              color: '$gold300',
            },
          },
        },

        _dark: {
          backgroundColor: 'transparent',
          borderColor: '$darkGold700',

          _icon: {
            color: '$darkGold900',
          },

          _spinner: {
            _svg: {
              color: '$darkGold900',
            },
          },

          ':active': {
            backgroundColor: '$darkGold50',
            borderColor: '$darkGold800',

            _icon: {
              color: '$darkGold900',
            },

            _spinner: {
              _svg: {
                color: '$darkGold900',
              },
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',
            borderColor: '$darkGrey175',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
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

        _icon: {
          color: '$cyan600',
        },

        _spinner: {
          _svg: {
            color: '$cyan600',
          },
        },

        ':active': {
          backgroundColor: '$grey100',

          _icon: {
            color: '$cyan600',
          },

          _spinner: {
            _svg: {
              color: '$cyan600',
            },
          },
        },

        ':disabled': {
          backgroundColor: 'transparent',

          _icon: {
            color: '$cyan300',
          },

          _spinner: {
            _svg: {
              color: '$cyan300',
            },
          },
        },

        _dark: {
          backgroundColor: 'transparent',

          _icon: {
            color: '$darkCyan600',
          },

          _spinner: {
            _svg: {
              color: '$darkCyan600',
            },
          },

          ':active': {
            backgroundColor: '$darkGrey175',

            _icon: {
              color: '$darkCyan600',
            },

            _spinner: {
              _svg: {
                color: '$darkCyan600',
              },
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'red',
      value: {
        backgroundColor: 'transparent',

        _icon: {
          color: '$red600',
        },

        _spinner: {
          _svg: {
            color: '$red600',
          },
        },

        ':active': {
          backgroundColor: '$grey100',

          _icon: {
            color: '$red600',
          },

          _spinner: {
            _svg: {
              color: '$red600',
            },
          },
        },

        ':disabled': {
          backgroundColor: 'transparent',

          _icon: {
            color: '$red300',
          },

          _spinner: {
            _svg: {
              color: '$red300',
            },
          },
        },

        _dark: {
          backgroundColor: 'transparent',

          _icon: {
            color: '$darkRed600',
          },

          _spinner: {
            _svg: {
              color: '$darkRed600',
            },
          },

          ':active': {
            backgroundColor: '$darkGrey175',

            _icon: {
              color: '$darkRed600',
            },

            _spinner: {
              _svg: {
                color: '$darkRed600',
              },
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'green',
      value: {
        backgroundColor: 'transparent',

        _icon: {
          color: '$green600',
        },

        _spinner: {
          _svg: {
            color: '$green600',
          },
        },

        ':active': {
          backgroundColor: '$grey100',

          _icon: {
            color: '$green600',
          },

          _spinner: {
            _svg: {
              color: '$green600',
            },
          },
        },

        ':disabled': {
          backgroundColor: 'transparent',

          _icon: {
            color: '$green300',
          },

          _spinner: {
            _svg: {
              color: '$green300',
            },
          },
        },

        _dark: {
          backgroundColor: 'transparent',

          _icon: {
            color: '$darkGreen600',
          },

          _spinner: {
            _svg: {
              color: '$darkGreen600',
            },
          },

          ':active': {
            backgroundColor: '$darkGrey175',

            _icon: {
              color: '$darkGreen600',
            },

            _spinner: {
              _svg: {
                color: '$darkGreen600',
              },
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'grey',
      value: {
        backgroundColor: 'transparent',

        _icon: {
          color: '$grey700',
        },

        _spinner: {
          _svg: {
            color: '$grey700',
          },
        },

        ':active': {
          backgroundColor: '$grey100',

          _icon: {
            color: '$grey700',
          },

          _spinner: {
            _svg: {
              color: '$grey700',
            },
          },
        },

        ':disabled': {
          backgroundColor: 'transparent',

          _icon: {
            color: '$grey200',
          },

          _spinner: {
            _svg: {
              color: '$grey200',
            },
          },
        },

        _dark: {
          backgroundColor: 'transparent',

          _icon: {
            color: '$darkGrey600',
          },

          _spinner: {
            _svg: {
              color: '$darkGrey600',
            },
          },

          ':active': {
            backgroundColor: '$darkGrey175',

            _icon: {
              color: '$darkGrey600',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey600',
              },
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'gold',
      value: {
        backgroundColor: 'transparent',

        _icon: {
          color: '$gold700',
        },

        _spinner: {
          _svg: {
            color: '$gold700',
          },
        },

        ':active': {
          backgroundColor: '$grey100',

          _icon: {
            color: '$gold700',
          },

          _spinner: {
            _svg: {
              color: '$gold700',
            },
          },
        },

        ':disabled': {
          backgroundColor: 'transparent',

          _icon: {
            color: '$gold300',
          },

          _spinner: {
            _svg: {
              color: '$gold300',
            },
          },
        },

        _dark: {
          backgroundColor: 'transparent',

          _icon: {
            color: '$darkGold600',
          },

          _spinner: {
            _svg: {
              color: '$darkGold600',
            },
          },

          ':active': {
            backgroundColor: '$darkGrey175',

            _icon: {
              color: '$darkGold700',
            },

            _spinner: {
              _svg: {
                color: '$darkGold700',
              },
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGrey400',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey400',
              },
            },
          },
        },
      },
    },
  ],

  props: {
    size: 'large',
    variant: 'solid',
    colorScheme: 'cyan',
  },
});
