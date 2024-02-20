import { createStyle } from '@gluestack-style/react';

export const Badge = createStyle({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 8,
  borderRadius: 4,
  paddingVertical: 4,
  alignSelf: 'flex-start',
  _text: {
    fontSize: '$badge',
    fontWeight: '400',
    lineHeight: 16,
    fontFamily: 'WorkSans-Regular',
    props: {
      size: 'badge',
    },
  },
  variants: {
    colourScheme: {
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
          color: '$grey00',
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
        paddingVertical: 4,
      },
      small: {
        paddingVertical: 2,
      },
    },
  },

  compoundVariants: [
    {
      colourScheme: 'cyan',
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
      colourScheme: 'green',
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
      colourScheme: 'red',
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
      colourScheme: 'gold',
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
      colourScheme: 'grey',
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
    colourScheme: 'cyan',
    borderless: false,
    strong: false,
    size: 'large',
  },
});
