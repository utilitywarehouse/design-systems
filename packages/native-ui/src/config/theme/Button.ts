import { createStyle } from '@gluestack-style/react';

export const Button = createStyle({
  borderRadius: '$full',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  _text: {
    fontWeight: '$medium',
  },

  variants: {
    colorScheme: {
      cyan: {
        backgroundColor: '$cyan400',
        borderColor: '$cyan400',

        _text: {
          color: '$cyan1000',
        },

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

          _text: {
            color: '$cyan1000',
          },

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

          _text: {
            color: '$cyan300',
          },
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

          _text: {
            color: '$darkCyan50',
          },

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
            _text: {
              color: '$darkCyan50',
            },
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

            _text: {
              color: '$darkGrey400',
            },
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

        _text: {
          color: '$white',
        },

        _icon: {
          color: '$white',
        },

        _spinner: {
          _svg: {
            color: '$white',
          },
        },

        ':active': {
          bg: '$red600',

          _text: {
            color: '$white',
          },
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

          _text: {
            color: '$white',
          },
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

          _text: {
            color: '$darkRed50',
          },

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

            _text: {
              color: '$darkRed50',
            },

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

            _text: {
              color: '$darkGrey400',
            },
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

        _text: {
          color: '$white',
        },

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

          _text: {
            color: '$white',
          },

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

          _text: {
            color: '$white',
          },
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

          _text: {
            color: '$darkGreen50',
          },

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

            _text: {
              color: '$darkGreen50',
            },

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

            _text: {
              color: '$darkGrey400',
            },
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

        _text: {
          color: '$white',
        },

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

          _text: {
            color: '$white',
          },

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

          _text: {
            color: '$grey300',
          },
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
          bg: '$darkGrey500',

          _text: {
            color: '$darkWhite',
          },

          _icon: {
            color: '$darkWhite',
          },

          _spinner: {
            _svg: {
              color: '$darkWhite',
            },
          },

          ':active': {
            bg: '$darkGrey700',

            _text: {
              color: '$darkWhite',
            },

            _icon: {
              color: '$darkWhite',
            },

            _spinner: {
              _svg: {
                color: '$darkWhite',
              },
            },
          },

          ':disabled': {
            backgroundColor: '$darkGrey100',

            _text: {
              color: '$darkGrey300',
            },
            _icon: {
              color: '$darkGrey300',
            },
            _spinner: {
              _svg: {
                color: '$darkGrey300',
              },
            },
          },
        },
      },
      gold: {
        backgroundColor: '$gold500',
        borderColor: '$gold500',

        _text: {
          color: '$white',
        },

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

          _text: {
            color: '$white',
          },

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

          _text: {
            color: '$gold300',
          },
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
          bg: '$darkGold500',

          _text: {
            color: '$darkWhite',
          },

          _icon: {
            color: '$darkWhite',
          },

          _spinner: {
            _svg: {
              color: '$darkWhite',
            },
          },

          ':active': {
            bg: '$darkGold700',

            _text: {
              color: '$darkWhite',
            },

            _icon: {
              color: '$darkWhite',
            },

            _spinner: {
              _svg: {
                color: '$darkWhite',
              },
            },
          },

          ':disabled': {
            backgroundColor: '$darkGold100',

            _text: {
              color: '$darkGold300',
            },
            _icon: {
              color: '$darkGold300',
            },
            _spinner: {
              _svg: {
                color: '$darkGold300',
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
      small: {
        paddingVertical: '$2',
        paddingHorizontal: '$3',
        minHeight: 32,
        gap: '$2',
      },
      regular: {
        paddingVertical: '$4',
        paddingHorizontal: '$6',
        minHeight: 48,
        gap: '$2',
        _icon: {
          width: 16,
          height: 16,
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

          _text: {
            color: '$cyan1000',
          },

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

          _text: {
            color: '$cyan200',
          },
          _icon: {
            color: '$cyan200',
          },
          _spinner: {
            _svg: {
              color: '$cyan200',
            },
          },
        },

        _dark: {
          backgroundColor: 'transparent',
          borderColor: '$darkCyan700',

          _text: {
            color: '$darkCyan1000',
          },

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

            _text: {
              color: '$darkCyan1000',
            },

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

            _text: {
              color: '$darkGrey400',
            },
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

        _text: {
          color: '$red900',
        },

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

          _text: {
            color: '$red900',
          },

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

          _text: {
            color: '$red300',
          },
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

          _text: {
            color: '$darkRed900',
          },

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

            _text: {
              color: '$darkRed900',
            },

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

            _text: {
              color: '$darkGrey400',
            },
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

        _text: {
          color: '$green900',
        },

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

          _text: {
            color: '$green900',
          },

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

          _text: {
            color: '$green300',
          },
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

          _text: {
            color: '$darkGreen900',
          },

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

            _text: {
              color: '$darkGreen900',
            },

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

            _text: {
              color: '$darkGrey400',
            },
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

        _text: {
          color: '$grey900',
        },

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

          _text: {
            color: '$grey900',
          },

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

          _text: {
            color: '$grey200',
          },
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

          _text: {
            color: '$darkGrey900',
          },

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

            _text: {
              color: '$darkGrey900',
            },

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

            _text: {
              color: '$darkGrey400',
            },
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

        _text: {
          color: '$gold900',
        },

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

          _text: {
            color: '$gold900',
          },

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

          _text: {
            color: '$gold300',
          },
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

          _text: {
            color: '$darkGold900',
          },

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

            _text: {
              color: '$darkGold900',
            },

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

            _text: {
              color: '$darkGrey400',
            },

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

        _text: {
          color: '$cyan600',
        },

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

          _text: {
            color: '$cyan600',
          },

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

          _text: {
            color: '$cyan200',
          },
          _icon: {
            color: '$cyan200',
          },
          _spinner: {
            _svg: {
              color: '$cyan200',
            },
          },
        },

        _dark: {
          backgroundColor: 'transparent',

          _text: {
            color: '$darkCyan600',
          },

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

            _text: {
              color: '$darkCyan600',
            },

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

            _text: {
              color: '$darkGrey400',
            },
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

        _text: {
          color: '$red600',
        },

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

          _text: {
            color: '$red600',
          },

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

          _text: {
            color: '$red300',
          },
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

          _text: {
            color: '$darkRed600',
          },

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

            _text: {
              color: '$darkRed600',
            },

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

            _text: {
              color: '$darkGrey400',
            },
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

        _text: {
          color: '$green600',
        },

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

          _text: {
            color: '$green600',
          },

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

          _text: {
            color: '$green300',
          },
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

          _text: {
            color: '$darkGreen600',
          },

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

            _text: {
              color: '$darkGreen600',
            },

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

            _text: {
              color: '$darkGrey400',
            },

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

        _text: {
          color: '$grey700',
        },

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

          _text: {
            color: '$grey700',
          },

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

          _text: {
            color: '$grey200',
          },

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

          _text: {
            color: '$darkGrey600',
          },

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

            _text: {
              color: '$darkGrey600',
            },

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

            _text: {
              color: '$darkGrey400',
            },

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

        _text: {
          color: '$gold700',
        },

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

          _text: {
            color: '$gold700',
          },

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

          _text: {
            color: '$gold300',
          },

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

          _text: {
            color: '$darkGold600',
          },

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

            _text: {
              color: '$darkGold700',
            },

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

            _text: {
              color: '$darkGrey400',
            },

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
    size: 'regular',
    variant: 'solid',
    colorScheme: 'cyan',
  },
});
