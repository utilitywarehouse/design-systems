import { createStyle } from '@gluestack-style/react';

type Scheme = 'cyan' | 'red' | 'green' | 'grey' | 'gold';

const capitalise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const invertedOutlineSchemes = (scheme: Scheme) => ({
  inverted: true,
  colorScheme: scheme,
  variant: 'outline',
  value: {
    _text: {
      color: `$${scheme}50`,
    },

    _icon: {
      color: `$${scheme}50`,
    },

    _spinner: {
      _svg: {
        color: `$${scheme}50`,
      },
    },

    ':active': {
      backgroundColor: `$${scheme}900`,

      _text: {
        color: `$${scheme}50`,
      },

      _icon: {
        color: `$${scheme}50`,
      },

      _spinner: {
        _svg: {
          color: `$${scheme}50`,
        },
      },
    },
  },
});

const colourScheme = (scheme: Scheme) => ({
  backgroundColor: `$${scheme}${scheme === 'cyan' ? 400 : 500}`,
  borderColor: `$${scheme}${scheme === 'cyan' ? 400 : 500}`,

  _text: {
    color: scheme === 'cyan' ? '$cyan1000' : '$white',
  },

  _icon: {
    color: scheme === 'cyan' ? '$cyan1000' : '$white',
  },

  _spinner: {
    _svg: {
      color: scheme === 'cyan' ? '$cyan1000' : '$white',
    },
  },

  ':active': {
    bg: `$${scheme}${scheme === 'cyan' ? 500 : 600}`,

    _text: {
      color: scheme === 'cyan' ? '$cyan1000' : '$white',
    },

    _icon: {
      color: scheme === 'cyan' ? '$cyan1000' : '$white',
    },

    _spinner: {
      _svg: {
        color: scheme === 'cyan' ? '$cyan1000' : '$white',
      },
    },
  },

  ':disabled': {
    backgroundColor: scheme === 'cyan' ? '$cyan100' : `$${scheme}200`,

    _text: {
      color: scheme === 'cyan' ? `$${scheme}300` : '$white',
    },
    _icon: {
      color: scheme === 'cyan' ? `$${scheme}300` : '$white',
    },
    _spinner: {
      _svg: {
        color: scheme === 'cyan' ? `$${scheme}300` : '$white',
      },
    },
  },

  _dark: {
    bg: `$dark${capitalise(scheme)}700`,

    _text: {
      color: `$dark${capitalise(scheme)}50`,
    },

    _icon: {
      color: `$dark${capitalise(scheme)}50`,
    },

    _spinner: {
      _svg: {
        color: `$dark${capitalise(scheme)}50`,
      },
    },

    ':active': {
      bg: `$dark${capitalise(scheme)}800`,
      _text: {
        color: `$dark${capitalise(scheme)}50`,
      },
      _icon: {
        color: `$dark${capitalise(scheme)}50`,
      },
      _spinner: {
        _svg: {
          color: `$dark${capitalise(scheme)}50`,
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
});

const outlineScheme = (scheme: Scheme) => ({
  variant: 'outline',
  colorScheme: scheme,
  value: {
    backgroundColor: 'transparent',
    borderColor: `$${scheme}${scheme === 'cyan' ? 400 : 500}`,

    _text: {
      color: `$${scheme}${scheme === 'cyan' ? 1000 : 900}`,
    },

    _icon: {
      color: `$${scheme}${scheme === 'cyan' ? 1000 : 900}`,
    },

    _spinner: {
      _svg: {
        color: `$${scheme}${scheme === 'cyan' ? 1000 : 900}`,
      },
    },

    ':active': {
      backgroundColor: `$${scheme}${scheme === 'cyan' ? 50 : 100}`,
      borderColor: `$${scheme}${scheme === 'cyan' ? 500 : 600}`,

      _text: {
        color: `$${scheme}${scheme === 'cyan' ? 1000 : 900}`,
      },

      _icon: {
        color: `$${scheme}${scheme === 'cyan' ? 1000 : 900}`,
      },

      _spinner: {
        _svg: {
          color: `$${scheme}${scheme === 'cyan' ? 1000 : 900}`,
        },
      },
    },

    ':disabled': {
      borderColor: `$${scheme}300`,
      backgroundColor: 'transparent',

      _text: {
        color: `$${scheme}300`,
      },
      _icon: {
        color: `$${scheme}300`,
      },
      _spinner: {
        _svg: {
          color: `$${scheme}300`,
        },
      },
    },

    _dark: {
      backgroundColor: 'transparent',
      borderColor: `$dark${capitalise(scheme)}700`,

      _text: {
        color: `$dark${capitalise(scheme)}900`,
      },

      _icon: {
        color: `$dark${capitalise(scheme)}900`,
      },

      _spinner: {
        _svg: {
          color: `$dark${capitalise(scheme)}900`,
        },
      },

      ':active': {
        backgroundColor: scheme === 'cyan' ? `$darkGrey150` : `$dark${capitalise(scheme)}50`,
        borderColor: `$dark${capitalise(scheme)}800`,

        _text: {
          color: `$dark${capitalise(scheme)}900`,
        },

        _icon: {
          color: `$dark${capitalise(scheme)}900`,
        },

        _spinner: {
          _svg: {
            color: `$dark${capitalise(scheme)}900`,
          },
        },
      },

      ':disabled': {
        borderColor: `$darkGrey175`,
        backgroundColor: 'transparent',

        _text: {
          color: `$darkGrey400`,
        },
        _icon: {
          color: `$darkGrey400`,
        },
        _spinner: {
          _svg: {
            color: `$darkGrey400`,
          },
        },
      },
    },
  },
});

const ghostScheme = (scheme: Scheme) => ({
  variant: 'ghost',
  colorScheme: scheme,
  value: {
    backgroundColor: 'transparent',

    _text: {
      color: `$${scheme}${['red', 'cyan'].includes(scheme) ? 600 : 700}`,
    },

    _icon: {
      color: `$${scheme}${['red', 'cyan'].includes(scheme) ? 600 : 700}`,
    },

    _spinner: {
      _svg: {
        color: `$${scheme}${['red', 'cyan'].includes(scheme) ? 600 : 700}`,
      },
    },

    ':active': {
      backgroundColor: `$grey100`,

      _text: {
        color: `$${scheme}${['red', 'cyan'].includes(scheme) ? 600 : 700}`,
      },

      _icon: {
        color: `$${scheme}${['red', 'cyan'].includes(scheme) ? 600 : 700}`,
      },

      _spinner: {
        _svg: {
          color: `$${scheme}${['red', 'cyan'].includes(scheme) ? 600 : 700}`,
        },
      },
    },

    ':disabled': {
      backgroundColor: 'transparent',

      _text: {
        color: `$${scheme}300`,
      },
      _icon: {
        color: `$${scheme}300`,
      },
      _spinner: {
        _svg: {
          color: `$${scheme}300`,
        },
      },
    },

    _dark: {
      backgroundColor: 'transparent',

      _text: {
        color: `$dark${capitalise(scheme)}600`,
      },

      _icon: {
        color: `$dark${capitalise(scheme)}600`,
      },

      _spinner: {
        _svg: {
          color: `$dark${capitalise(scheme)}600`,
        },
      },

      ':active': {
        backgroundColor: `$darkGrey175`,

        _text: {
          color: `$dark${capitalise(scheme)}600`,
        },

        _icon: {
          color: `$dark${capitalise(scheme)}600`,
        },

        _spinner: {
          _svg: {
            color: `$dark${capitalise(scheme)}600`,
          },
        },
      },

      ':disabled': {
        backgroundColor: 'transparent',

        _text: {
          color: `$darkGrey400`,
        },

        _icon: {
          color: `$darkGrey400`,
        },

        _spinner: {
          _svg: {
            color: `$darkGrey400`,
          },
        },
      },
    },
  },
});

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
      cyan: colourScheme('cyan'),
      red: colourScheme('red'),
      green: colourScheme('green'),
      grey: colourScheme('grey'),
      gold: colourScheme('gold'),
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

    inverted: {
      true: {},
      false: {},
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
    outlineScheme('cyan'),
    outlineScheme('red'),
    outlineScheme('green'),
    outlineScheme('grey'),
    outlineScheme('gold'),
    ghostScheme('cyan'),
    ghostScheme('red'),
    ghostScheme('green'),
    ghostScheme('grey'),
    ghostScheme('gold'),
    invertedOutlineSchemes('cyan'),
    invertedOutlineSchemes('green'),
    invertedOutlineSchemes('red'),
    invertedOutlineSchemes('gold'),
    invertedOutlineSchemes('grey'),
  ],

  props: {
    size: 'regular',
    variant: 'solid',
    colorScheme: 'cyan',
    inverted: false,
  },
});
