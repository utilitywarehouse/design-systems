import { styled } from '@gluestack-ui/themed';
import { Pressable } from 'react-native';

const IconButton = styled(
  Pressable,
  {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$full',
    width: 48,
    height: 48,
    _icon: {
      width: 24,
      height: 24,
    },
    variants: {
      colorScheme: {
        cyan: {
          backgroundColor: '$cyan400',
          borderColor: '$cyan400',

          _icon: {
            color: '$cyan1000',
          },

          ':active': {
            bg: '$cyan500',

            _icon: {
              color: '$cyan1000',
            },
          },

          ':disabled': {
            backgroundColor: '$cyan100',

            _icon: {
              color: '$cyan300',
            },
          },

          _dark: {
            bg: '$darkCyan700',

            _icon: {
              color: '$darkCyan50',
            },

            ':active': {
              bg: '$darkCyan800',
              _icon: {
                color: '$darkCyan50',
              },
            },

            ':disabled': {
              backgroundColor: '$darkGrey175',

              _icon: {
                color: '$darkGrey400',
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

          ':active': {
            bg: '$red700',

            _icon: {
              color: '$white',
            },
          },

          ':disabled': {
            backgroundColor: '$red200',

            _icon: {
              color: '$white',
            },
          },

          _dark: {
            bg: '$darkRed700',

            _icon: {
              color: '$darkRed50',
            },

            ':active': {
              bg: '$darkRed800',

              _icon: {
                color: '$darkRed50',
              },
            },

            ':disabled': {
              backgroundColor: '$darkGrey175',

              _icon: {
                color: '$darkGrey400',
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

          ':active': {
            bg: '$green600',

            _icon: {
              color: '$white',
            },
          },

          ':disabled': {
            backgroundColor: '$green200',

            _icon: {
              color: '$white',
            },
          },

          _dark: {
            bg: '$darkGreen700',

            _icon: {
              color: '$darkGreen50',
            },

            ':active': {
              bg: '$darkGreen800',

              _icon: {
                color: '$darkGreen50',
              },
            },

            ':disabled': {
              backgroundColor: '$darkGrey175',

              _icon: {
                color: '$darkGrey400',
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

          ':active': {
            bg: '$grey700',

            _icon: {
              color: '$white',
            },
          },

          ':disabled': {
            backgroundColor: '$grey100',

            _icon: {
              color: '$grey300',
            },
          },

          _dark: {
            bg: '$darkGrey500',

            _icon: {
              color: '$darkWhite',
            },

            ':active': {
              bg: '$darkGrey700',

              _icon: {
                color: '$darkWhite',
              },
            },

            ':disabled': {
              backgroundColor: '$darkGrey100',

              _icon: {
                color: '$darkGrey300',
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

          ':active': {
            bg: '$gold700',

            _icon: {
              color: '$white',
            },
          },

          ':disabled': {
            backgroundColor: '$gold100',

            _icon: {
              color: '$gold300',
            },
          },

          _dark: {
            bg: '$darkGold500',

            _icon: {
              color: '$darkWhite',
            },

            ':active': {
              bg: '$darkGold700',

              _icon: {
                color: '$darkWhite',
              },
            },

            ':disabled': {
              backgroundColor: '$darkGold100',

              _icon: {
                color: '$darkGold300',
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

          ':active': {
            backgroundColor: '$cyan50',

            _icon: {
              color: '$cyan1000',
            },
          },

          ':disabled': {
            borderColor: '$cyan200',
            backgroundColor: 'transparent',

            _icon: {
              color: '$cyan300',
            },
          },

          _dark: {
            backgroundColor: 'transparent',
            borderColor: '$darkCyan700',

            _icon: {
              color: '$darkCyan1000',
            },

            ':active': {
              backgroundColor: '$darkGrey150',
              borderColor: '$darkCyan800',

              _icon: {
                color: '$darkCyan1000',
              },
            },

            ':disabled': {
              borderColor: '$darkGrey175',
              backgroundColor: 'transparent',

              _icon: {
                color: '$darkGrey400',
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

          ':active': {
            backgroundColor: '$red50',
            borderColor: '$red600',

            _icon: {
              color: '$red900',
            },
          },

          ':disabled': {
            borderColor: '$red200',
            backgroundColor: 'transparent',

            _icon: {
              color: '$red300',
            },
          },

          _dark: {
            backgroundColor: 'transparent',
            borderColor: '$darkRed700',

            _icon: {
              color: '$darkRed900',
            },

            ':active': {
              backgroundColor: '$darkRed50',
              borderColor: '$darkRed800',

              _icon: {
                color: '$darkRed900',
              },
            },

            ':disabled': {
              borderColor: '$darkGrey175',
              backgroundColor: 'transparent',

              _icon: {
                color: '$darkGrey400',
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

          ':active': {
            backgroundColor: '$green50',
            borderColor: '$green600',

            _icon: {
              color: '$green900',
            },
          },

          ':disabled': {
            borderColor: '$green200',
            backgroundColor: 'transparent',

            _icon: {
              color: '$green300',
            },
          },

          _dark: {
            backgroundColor: 'transparent',
            borderColor: '$darkGreen700',

            _icon: {
              color: '$darkGreen900',
            },

            ':active': {
              backgroundColor: '$darkGreen50',
              borderColor: '$darkGreen800',

              _icon: {
                color: '$darkGreen900',
              },
            },

            ':disabled': {
              borderColor: '$darkGrey175',
              backgroundColor: 'transparent',

              _icon: {
                color: '$darkGrey400',
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

          _icon: {
            color: '$grey800',
          },

          ':active': {
            backgroundColor: '$grey175',

            _icon: {
              color: '$grey1000',
            },
          },

          ':disabled': {
            borderColor: '$grey300',
            backgroundColor: 'transparent',

            _icon: {
              color: '$grey300',
            },
          },

          _dark: {
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGrey600',
            },

            ':active': {
              backgroundColor: '$darkGrey175',

              _icon: {
                color: '$darkGrey1000',
              },
            },

            ':disabled': {
              borderColor: '$darkGrey300',
              backgroundColor: 'transparent',

              _icon: {
                color: '$darkGrey300',
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

          _icon: {
            color: '$gold600',
          },

          ':active': {
            backgroundColor: '$gold200',

            _icon: {
              color: '$gold900',
            },
          },

          ':disabled': {
            borderColor: '$gold300',
            backgroundColor: 'transparent',

            _icon: {
              color: '$gold300',
            },
          },

          _dark: {
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGold600',
            },

            ':active': {
              backgroundColor: '$darkGold200',

              _icon: {
                color: '$darkGold900',
              },
            },

            ':disabled': {
              borderColor: '$darkGold300',
              backgroundColor: 'transparent',

              _icon: {
                color: '$darkGold300',
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

          ':active': {
            backgroundColor: '$grey100',

            _icon: {
              color: '$cyan600',
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _icon: {
              color: '$cyan300',
            },
          },

          _dark: {
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkCyan700',
            },

            ':active': {
              backgroundColor: '$darkGrey175',

              _icon: {
                color: '$darkCyan700',
              },
            },

            ':disabled': {
              backgroundColor: 'transparent',

              _icon: {
                color: '$darkGrey400',
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

          ':active': {
            backgroundColor: '$grey100',

            _icon: {
              color: '$red600',
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _icon: {
              color: '$red300',
            },
          },

          _dark: {
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkRed600',
            },

            ':active': {
              backgroundColor: '$darkGrey175',

              _icon: {
                color: '$darkRed600',
              },
            },

            ':disabled': {
              backgroundColor: 'transparent',

              _icon: {
                color: '$darkGrey400',
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

          ':active': {
            backgroundColor: '$grey100',

            _icon: {
              color: '$green600',
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _icon: {
              color: '$green300',
            },
          },

          _dark: {
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGreen700',
            },

            ':active': {
              backgroundColor: '$darkGrey175',

              _icon: {
                color: '$darkGreen700',
              },
            },

            ':disabled': {
              backgroundColor: 'transparent',

              _icon: {
                color: '$darkGrey400',
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
            color: '$grey1000',
          },

          ':active': {
            backgroundColor: '$grey175',

            _icon: {
              color: '$grey1000',
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _icon: {
              color: '$grey300',
            },
          },

          _dark: {
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGrey1000',
            },

            ':active': {
              backgroundColor: '$darkGrey175',

              _icon: {
                color: '$darkGrey1000',
              },
            },

            ':disabled': {
              backgroundColor: 'transparent',

              _icon: {
                color: '$darkGrey300',
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
            color: '$gold900',
          },

          ':active': {
            backgroundColor: '$gold200',

            _icon: {
              color: '$gold900',
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _icon: {
              color: '$gold300',
            },
          },

          _dark: {
            backgroundColor: 'transparent',

            _icon: {
              color: '$darkGold900',
            },

            ':active': {
              backgroundColor: '$darkGold200',

              _icon: {
                color: '$darkGold900',
              },
            },

            ':disabled': {
              backgroundColor: 'transparent',

              _icon: {
                color: '$darkGold300',
              },
            },
          },
        },
      },
    ],

    props: {
      variant: 'solid',
      colorScheme: 'cyan',
    },
  },
  {
    componentName: 'IconButton',
    descendantStyle: ['_icon'],
    ancestorStyle: ['_button'],
  } as const
);
export default IconButton;
