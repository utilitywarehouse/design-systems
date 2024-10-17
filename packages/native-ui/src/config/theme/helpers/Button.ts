/* eslint-disable   @typescript-eslint/no-unsafe-assignment */
/* eslint-disable   @typescript-eslint/no-unsafe-member-access */
import { colorsDark } from '@utilitywarehouse/colour-system';
import { capitalise } from './captailise';

type Scheme = 'cyan' | 'red' | 'green' | 'grey' | 'gold';

export const invertedOutlineScheme = (scheme: Scheme) => ({
  inverted: true,
  colorScheme: scheme,
  variant: 'outline',
  value: {
    borderColor: `$${scheme}400`,

    _text: {
      color: `$${scheme}100`,
    },

    _icon: {
      color: `$${scheme}100`,
    },

    _spinner: {
      _svg: {
        color: `$${scheme}100`,
      },
    },

    ':active': {
      backgroundColor: `$${scheme}900`,
      borderColor: `$${scheme}${scheme === 'cyan' ? 400 : 500}`,

      _text: {
        color: `$${scheme}100`,
      },

      _icon: {
        color: `$${scheme}100`,
      },

      _spinner: {
        _svg: {
          color: `$${scheme}100`,
        },
      },
    },

    ':disabled': {
      borderColor: `$${scheme}600`,

      _text: {
        color: `$${scheme}600`,
      },
      _icon: {
        color: `$${scheme}600`,
      },
      _spinner: {
        _svg: {
          color: `$${scheme}600`,
        },
      },
    },
  },
});

export const invertedSolidScheme = (scheme: Scheme) => ({
  inverted: true,
  colorScheme: scheme,
  variant: 'solid',
  value: {
    ':disabled': {
      backgroundColor: `$${scheme}300`,
      _text: {
        color: `$${scheme}100`,
      },
      _icon: {
        color: `$${scheme}100`,
      },
      _spinner: {
        _svg: {
          color: `$${scheme}100`,
        },
      },
    },
  },
});

export const invertedGhostScheme = (scheme: Scheme) => ({
  inverted: true,
  colorScheme: scheme,
  variant: 'ghost',
  value: {
    _text: {
      color: `$${scheme}400`,
    },

    _icon: {
      color: `$${scheme}400`,
    },

    _spinner: {
      _svg: {
        color: `$${scheme}400`,
      },
    },

    ':active': {
      backgroundColor: `$grey900`,

      _text: {
        color: `$${scheme}400`,
      },

      _icon: {
        color: `$${scheme}400`,
      },

      _spinner: {
        _svg: {
          color: `$${scheme}400`,
        },
      },
    },

    ':disabled': {
      backgroundColor: 'transparent',

      _text: {
        color: `$${scheme}600`,
      },
      _icon: {
        color: `$${scheme}600`,
      },
      _spinner: {
        _svg: {
          color: `$${scheme}600`,
        },
      },
    },
  },
});

export const colourScheme = (scheme: Scheme) => ({
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
    backgroundColor: `$${scheme}100`,

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
    bg: `$dark${capitalise(scheme)}700`,

    _text: {
      color: `$dark${capitalise(scheme)}50`,
    },

    _icon: {
      color: `$dark${capitalise(scheme)}50`,
    },

    _spinner: {
      _svg: {
        props: {
          color: colorsDark?.[`${scheme}50`],
        },
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
          props: {
            color: colorsDark?.[`${scheme}50`],
          },
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
          props: {
            color: colorsDark.grey400,
          },
        },
      },
    },
  },
});

export const outlineScheme = (scheme: Scheme) => ({
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
      backgroundColor: `$${scheme}${scheme === 'grey' ? 100 : 50}`,
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
          props: {
            color: colorsDark?.[`${scheme}900`],
          },
        },
      },

      ':active': {
        backgroundColor: scheme === 'cyan' ? `$darkCyan75` : `$dark${capitalise(scheme)}50`,
        borderColor: `$dark${capitalise(scheme)}800`,

        _text: {
          color: scheme === 'cyan' ? `$darkCyan1000` : `$dark${capitalise(scheme)}900`,
        },

        _icon: {
          color: scheme === 'cyan' ? `$darkCyan1000` : `$dark${capitalise(scheme)}900`,
        },

        _spinner: {
          _svg: {
            props: {
              color: scheme === 'cyan' ? `$darkCyan1000` : colorsDark?.[`${scheme}900`],
            },
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
            props: {
              color: colorsDark.grey400,
            },
          },
        },
      },
    },
  },
});

export const ghostScheme = (scheme: Scheme) => ({
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
          props: {
            color: colorsDark?.[`${scheme}600`],
          },
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
            props: {
              color: colorsDark?.[`${scheme}600`],
            },
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
            props: {
              color: colorsDark.grey400,
            },
          },
        },
      },
    },
  },
});
