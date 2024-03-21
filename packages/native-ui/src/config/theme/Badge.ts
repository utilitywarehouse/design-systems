import { createStyle } from '@gluestack-style/react';

export const Badge = createStyle({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: '$2',
  borderRadius: '$sm',
  paddingVertical: '$1',
  alignSelf: 'flex-start',
  _text: {
    fontSize: '$badge',
    fontWeight: '400',
    lineHeight: 16,
    fontFamily: 'Work Sans',
    props: {
      size: 'badge',
    },
  },
  variants: {
    colorScheme: {
      cyan: {
        bg: '$cyan200',
        _icon: {
          color: '$cyan900',
        },
        _text: {
          color: '$cyan900',
        },
        _dark: {
          bg: '$darkCyan700',
          _text: {
            color: '$darkCyan50',
          },
          _icon: {
            color: '$darkCyan50',
          },
        },
      },
      red: {
        bg: '$red200',
        _icon: {
          color: '$red900',
        },
        _text: {
          color: '$red900',
        },
        _dark: {
          bg: '$darkRed700',
          _text: {
            color: '$darkRed50',
          },
          _icon: {
            color: '$darkRed50',
          },
        },
      },
      green: {
        bg: '$green200',
        _icon: {
          color: '$green900',
        },
        _text: {
          color: '$green900',
        },
        _dark: {
          bg: '$darkGreen700',
          _text: {
            color: '$darkGreen50',
          },
          _icon: {
            color: '$darkGreen50',
          },
        },
      },
      gold: {
        bg: '$gold200',
        _icon: {
          color: '$gold900',
        },
        _text: {
          color: '$gold900',
        },
        _dark: {
          bg: '$darkGold700',
          _text: {
            color: '$darkGold50',
          },
          _icon: {
            color: '$darkGold50',
          },
        },
      },
      grey: {
        bg: '$grey200',
        _icon: {
          color: '$grey900',
        },
        _text: {
          color: '$grey900',
        },
        _dark: {
          bg: '$darkGrey700',
          _text: {
            color: '$darkGrey50',
          },
          _icon: {
            color: '$darkGrey50',
          },
        },
      },
    },

    borderless: {
      false: {},
      true: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    },

    strong: {
      true: {},
      false: {},
    },

    size: {
      large: {
        paddingVertical: '$1',
      },
      small: {
        paddingVertical: '$0.5',
      },
    },
  },

  compoundVariants: [
    {
      colorScheme: 'cyan',
      strong: true,
      value: {
        bg: '$cyan600',
        _icon: {
          color: '$cyan50',
        },
        _text: {
          color: '$cyan50',
        },
        _dark: {
          bg: '$darkCyan700',
          _text: {
            color: '$darkCyan50',
          },
          _icon: {
            color: '$darkCyan50',
          },
        },
      },
    },
    {
      colorScheme: 'green',
      strong: true,
      value: {
        bg: '$green600',
        _icon: {
          color: '$green50',
        },
        _text: {
          color: '$green50',
        },
        _dark: {
          bg: '$darkGreen700',
          _text: {
            color: '$darkGreen50',
          },
          _icon: {
            color: '$darkGreen50',
          },
        },
      },
    },
    {
      colorScheme: 'red',
      strong: true,
      value: {
        bg: '$red600',
        _icon: {
          color: '$red50',
        },
        _text: {
          color: '$red50',
        },
        _dark: {
          bg: '$darkRed700',
          _text: {
            color: '$darkRed50',
          },
          _icon: {
            color: '$darkRed50',
          },
        },
      },
    },
    {
      colorScheme: 'gold',
      strong: true,
      value: {
        bg: '$gold300',
        _icon: {
          color: '$gold900',
        },
        _text: {
          color: '$gold900',
        },
        _dark: {
          bg: '$darkGold700',
          _text: {
            color: '$darkGold50',
          },
          _icon: {
            color: '$darkGold50',
          },
        },
      },
    },
    {
      colorScheme: 'grey',
      strong: true,
      value: {
        bg: '$grey600',
        _icon: {
          color: '$grey50',
        },
        _text: {
          color: '$grey50',
        },
        _dark: {
          bg: '$darkGrey700',
          _text: {
            color: '$darkGrey50',
          },
          _icon: {
            color: '$darkGrey50',
          },
        },
      },
    },
  ],

  ':disabled': {
    opacity: 0.5,
  },

  defaultProps: {
    colorScheme: 'cyan',
    borderless: false,
    strong: false,
    size: 'large',
  },
});
