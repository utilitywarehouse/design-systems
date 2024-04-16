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

      green: {
        backgroundColor: '$green500',
        borderColor: '$green500',
        ':hover': {
          bg: '$green600',
        },
        ':active': {
          bg: '$green700',
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
          backgroundColor: '$green100',

          _text: {
            color: '$green300',
          },
          _icon: {
            color: '$green300',
          },
          _spinner: {
            color: '$green300',
          },
        },

        ':focusVisible': {
          outlineColor: '$green700',
        },

        _dark: {
          bg: '$darkGreen500',
          ':hover': {
            bg: '$darkGreen600',
          },
          ':active': {
            bg: '$darkGreen700',
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
            backgroundColor: '$darkGreen100',

            _text: {
              color: '$darkGreen300',
            },
            _icon: {
              color: '$darkGreen300',
            },
            _spinner: {
              color: '$darkGreen300',
            },

            ':focusVisible': {
              outlineColor: '$darkGreen700',
            },
          },
        },
      },

      grey: {
        backgroundColor: '$grey500',
        borderColor: '$grey500',
        ':hover': {
          bg: '$grey600',
        },
        ':active': {
          bg: '$grey700',
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
          backgroundColor: '$grey100',

          _text: {
            color: '$grey300',
          },
          _icon: {
            color: '$grey300',
          },
          _spinner: {
            color: '$grey300',
          },
        },

        ':focusVisible': {
          outlineColor: '$grey700',
        },

        _dark: {
          bg: '$darkGray500',
          ':hover': {
            bg: '$darkGray600',
          },
          ':active': {
            bg: '$darkGray700',
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
            backgroundColor: '$darkGray100',

            _text: {
              color: '$darkGray300',
            },
            _icon: {
              color: '$darkGray300',
            },
            _spinner: {
              color: '$darkGray300',
            },

            ':focusVisible': {
              outlineColor: '$darkGray700',
            },
          },
        },
      },
      gold: {
        backgroundColor: '$gold500',
        borderColor: '$gold500',
        ':hover': {
          bg: '$gold600',
        },
        ':active': {
          bg: '$gold700',
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
          backgroundColor: '$gold100',

          _text: {
            color: '$gold300',
          },
          _icon: {
            color: '$gold300',
          },
          _spinner: {
            color: '$gold300',
          },
        },

        ':focusVisible': {
          outlineColor: '$gold700',
        },

        _dark: {
          bg: '$darkGold500',
          ':hover': {
            bg: '$darkGold600',
          },
          ':active': {
            bg: '$darkGold700',
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
            backgroundColor: '$darkGold100',

            _text: {
              color: '$darkGold300',
            },
            _icon: {
              color: '$darkGold300',
            },
            _spinner: {
              color: '$darkGold300',
            },

            ':focusVisible': {
              outlineColor: '$darkGold700',
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

        // _text: {
        //   paddingHorizontal: '$1',
        // },
      },
      regular: {
        paddingVertical: '$4',
        paddingHorizontal: '$6',
        minHeight: 48,
        gap: '$4',
        _icon: {
          width: 16,
          height: 16,
        },
        // _text: {
        //   paddingHorizontal: '$2',
        // },
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
      variant: 'outline',
      colorScheme: 'red',
      value: {
        backgroundColor: 'transparent',

        ':hover': {
          backgroundColor: '$red100',

          _icon: {
            color: '$red500',
          },

          _spinner: {
            color: '$red500',
          },
        },

        ':active': {
          backgroundColor: '$red200',

          _icon: {
            color: '$red500',
          },

          _spinner: {
            color: '$red500',
          },
        },

        _text: {
          color: '$red500',
        },

        _icon: {
          color: '$red500',
        },

        _spinner: {
          color: '$red500',
        },

        ':disabled': {
          borderColor: '$red900',
          backgroundColor: 'transparent',

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
          backgroundColor: '$red100',
          outlineColor: '$red700',
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkRed100',

            _icon: {
              color: '$darkRed500',
            },

            _spinner: {
              color: '$darkRed500',
            },
          },

          ':active': {
            backgroundColor: '$darkRed200',

            _icon: {
              color: '$darkRed500',
            },

            _spinner: {
              color: '$darkRed500',
            },
          },

          _text: {
            color: '$darkRed500',
          },

          _icon: {
            color: '$darkRed500',
          },

          _spinner: {
            color: '$darkRed500',
          },

          ':disabled': {
            borderColor: '$darkRed900',
            backgroundColor: 'transparent',

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
              backgroundColor: '$darkRed100',
              outlineColor: '$darkRed700',
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

        ':hover': {
          backgroundColor: '$green100',

          _icon: {
            color: '$green900',
          },

          _spinner: {
            color: '$green900',
          },
        },

        ':active': {
          backgroundColor: '$green200',

          _icon: {
            color: '$green900',
          },

          _spinner: {
            color: '$green900',
          },
        },

        _text: {
          color: '$green900',
        },

        _icon: {
          color: '$green900',
        },

        _spinner: {
          color: '$green900',
        },

        ':disabled': {
          borderColor: '$green300',
          backgroundColor: 'transparent',

          _text: {
            color: '$green300',
          },
          _icon: {
            color: '$green300',
          },
          _spinner: {
            color: '$green300',
          },
        },

        ':focusVisible': {
          backgroundColor: '$green100',
          outlineColor: '$green700',
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkGreen100',

            _icon: {
              color: '$darkGreen900',
            },

            _spinner: {
              color: '$darkGreen900',
            },
          },

          ':active': {
            backgroundColor: '$darkGreen200',

            _icon: {
              color: '$darkGreen900',
            },

            _spinner: {
              color: '$darkGreen900',
            },
          },

          _text: {
            color: '$darkGreen500',
          },

          _icon: {
            color: '$darkGreen500',
          },

          _spinner: {
            color: '$darkGreen500',
          },

          ':disabled': {
            borderColor: '$darkGreen900',
            backgroundColor: 'transparent',

            _text: {
              color: '$darkGreen300',
            },
            _icon: {
              color: '$darkGreen300',
            },
            _spinner: {
              color: '$darkGreen300',
            },

            ':focusVisible': {
              backgroundColor: '$darkGreen100',
              outlineColor: '$darkGreen700',
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

        ':hover': {
          backgroundColor: '$grey100',

          _icon: {
            color: '$grey1000',
          },

          _spinner: {
            color: '$grey1000',
          },
        },

        ':active': {
          backgroundColor: '$grey175',

          _icon: {
            color: '$grey1000',
          },

          _spinner: {
            color: '$grey1000',
          },
        },

        _text: {
          color: '$grey1000',
        },

        _icon: {
          color: '$grey1000',
        },

        _spinner: {
          color: '$grey1000',
        },

        ':disabled': {
          borderColor: '$grey300',
          backgroundColor: 'transparent',

          _text: {
            color: '$grey300',
          },
          _icon: {
            color: '$grey300',
          },
          _spinner: {
            color: '$grey300',
          },
        },

        ':focusVisible': {
          backgroundColor: '$grey100',
          outlineColor: '$grey700',
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkGray100',

            _icon: {
              color: '$darkGray1000',
            },

            _spinner: {
              color: '$darkGray1000',
            },
          },

          ':active': {
            backgroundColor: '$darkGray175',

            _icon: {
              color: '$darkGray1000',
            },

            _spinner: {
              color: '$darkGray1000',
            },
          },

          _text: {
            color: '$darkGray1000',
          },

          _icon: {
            color: '$darkGray1000',
          },

          _spinner: {
            color: '$darkGray1000',
          },

          ':disabled': {
            borderColor: '$darkGray300',
            backgroundColor: 'transparent',

            _text: {
              color: '$darkGray300',
            },
            _icon: {
              color: '$darkGray300',
            },
            _spinner: {
              color: '$darkGray300',
            },

            ':focusVisible': {
              backgroundColor: '$darkGray100',
              outlineColor: '$darkGray700',
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

        ':hover': {
          backgroundColor: '$gold100',

          _icon: {
            color: '$gold900',
          },

          _spinner: {
            color: '$gold900',
          },
        },

        ':active': {
          backgroundColor: '$gold200',

          _icon: {
            color: '$gold900',
          },

          _spinner: {
            color: '$gold900',
          },
        },

        _text: {
          color: '$gold900',
        },

        _icon: {
          color: '$gold900',
        },

        _spinner: {
          color: '$gold900',
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
            color: '$gold300',
          },
        },

        ':focusVisible': {
          backgroundColor: '$gold100',
          outlineColor: '$gold700',
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkGold100',

            _icon: {
              color: '$darkGold900',
            },

            _spinner: {
              color: '$darkGold900',
            },
          },

          ':active': {
            backgroundColor: '$darkGold200',

            _icon: {
              color: '$darkGold900',
            },

            _spinner: {
              color: '$darkGold900',
            },
          },

          _text: {
            color: '$darkGold900',
          },

          _icon: {
            color: '$darkGold900',
          },

          _spinner: {
            color: '$darkGold900',
          },

          ':disabled': {
            borderColor: '$darkGold300',
            backgroundColor: 'transparent',

            _text: {
              color: '$darkGold300',
            },
            _icon: {
              color: '$darkGold300',
            },
            _spinner: {
              color: '$darkGold300',
            },

            ':focusVisible': {
              backgroundColor: '$darkGold100',
              outlineColor: '$darkGold700',
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
    {
      variant: 'ghost',
      colorScheme: 'red',
      value: {
        backgroundColor: 'transparent',

        ':hover': {
          backgroundColor: '$red100',
          _icon: {
            color: '$red900',
          },

          _spinner: {
            color: '$red900',
          },
        },

        ':active': {
          backgroundColor: '$red200',

          _icon: {
            color: '$red900',
          },

          _spinner: {
            color: '$red900',
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
            color: '$red300',
          },
        },

        ':focusVisible': {
          backgroundColor: '$red100',
          outlineColor: '$red700',
        },

        _text: {
          color: '$red900',
        },

        _icon: {
          color: '$red900',
        },

        _spinner: {
          color: '$red900',
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkRed100',
            _icon: {
              color: '$darkRed900',
            },
            _spinner: {
              color: '$darkRed900',
            },
          },

          ':active': {
            backgroundColor: '$darkRed200',

            _icon: {
              color: '$darkRed900',
            },

            _spinner: {
              color: '$darkRed900',
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

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
              backgroundColor: '$darkRed100',
              outlineColor: '$darkRed700',
            },
          },

          _text: {
            color: '$darkRed900',
          },

          _icon: {
            color: '$darkRed900',
          },

          _spinner: {
            color: '$darkRed900',
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'green',
      value: {
        backgroundColor: 'transparent',

        ':hover': {
          backgroundColor: '$green100',

          _icon: {
            color: '$green900',
          },

          _spinner: {
            color: '$green900',
          },
        },

        ':active': {
          backgroundColor: '$green200',

          _icon: {
            color: '$green900',
          },

          _spinner: {
            color: '$green900',
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
            color: '$green300',
          },
        },

        ':focusVisible': {
          backgroundColor: '$green100',
          outlineColor: '$green700',
        },

        _text: {
          color: '$green900',
        },

        _icon: {
          color: '$green900',
        },

        _spinner: {
          color: '$green900',
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkGreen100',

            _icon: {
              color: '$darkGreen900',
            },

            _spinner: {
              color: '$darkGreen900',
            },
          },

          ':active': {
            backgroundColor: '$darkGreen200',
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _text: {
              color: '$darkGreen300',
            },
            _icon: {
              color: '$darkGreen300',
            },
            _spinner: {
              color: '$darkGreen300',
            },

            ':focusVisible': {
              backgroundColor: '$darkGreen100',
              outlineColor: '$darkGreen700',
            },
          },

          _text: {
            color: '$darkGreen900',
          },

          _icon: {
            color: '$darkGreen900',
          },

          _spinner: {
            color: '$darkGreen900',
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'grey',
      value: {
        backgroundColor: 'transparent',

        ':hover': {
          backgroundColor: '$grey100',

          _icon: {
            color: '$grey1000',
          },

          _spinner: {
            color: '$grey1000',
          },
        },

        ':active': {
          backgroundColor: '$grey175',

          _icon: {
            color: '$grey1000',
          },

          _spinner: {
            color: '$grey1000',
          },
        },

        ':disabled': {
          backgroundColor: 'transparent',

          _text: {
            color: '$grey300',
          },
          _icon: {
            color: '$grey300',
          },
          _spinner: {
            color: '$grey300',
          },
        },

        ':focusVisible': {
          backgroundColor: '$grey100',
          outlineColor: '$grey700',
        },

        _text: {
          color: '$grey1000',
        },

        _icon: {
          color: '$grey1000',
        },

        _spinner: {
          color: '$grey1000',
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkGray100',

            _icon: {
              color: '$darkGray1000',
            },

            _spinner: {
              color: '$darkGray1000',
            },
          },

          ':active': {
            backgroundColor: '$darkGray175',

            _icon: {
              color: '$darkGray1000',
            },

            _spinner: {
              color: '$darkGray1000',
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _text: {
              color: '$darkGray300',
            },
            _icon: {
              color: '$darkGray300',
            },
            _spinner: {
              color: '$darkGray300',
            },

            ':focusVisible': {
              backgroundColor: '$darkGray100',
              outlineColor: '$darkGray700',
            },
          },

          _text: {
            color: '$darkGray1000',
          },

          _icon: {
            color: '$darkGray1000',
          },

          _spinner: {
            color: '$darkGray1000',
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'gold',
      value: {
        backgroundColor: 'transparent',

        ':hover': {
          backgroundColor: '$gold100',

          _icon: {
            color: '$gold900',
          },

          _spinner: {
            color: '$gold900',
          },
        },

        ':active': {
          backgroundColor: '$gold200',

          _icon: {
            color: '$gold900',
          },

          _spinner: {
            color: '$gold900',
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
            color: '$gold300',
          },
        },

        ':focusVisible': {
          backgroundColor: '$gold100',
          outlineColor: '$gold700',
        },

        _text: {
          color: '$gold900',
        },

        _icon: {
          color: '$gold900',
        },

        _spinner: {
          color: '$gold900',
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkGold100',

            _icon: {
              color: '$darkGold900',
            },

            _spinner: {
              color: '$darkGold900',
            },
          },

          ':active': {
            backgroundColor: '$darkGold200',

            _icon: {
              color: '$darkGold900',
            },

            _spinner: {
              color: '$darkGold900',
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _text: {
              color: '$darkGold300',
            },
            _icon: {
              color: '$darkGold300',
            },
            _spinner: {
              color: '$darkGold300',
            },

            ':focusVisible': {
              backgroundColor: '$darkGold100',
              outlineColor: '$darkGold700',
            },
          },

          _text: {
            color: '$darkGold900',
          },

          _icon: {
            color: '$darkGold900',
          },

          _spinner: {
            color: '$darkGold900',
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
