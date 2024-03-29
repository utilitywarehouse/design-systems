import { createStyle } from '@gluestack-style/react';

export const Alert = createStyle({
  alignItems: 'center',
  p: 12,
  flexDirection: 'row',
  borderRadius: 8,
  gap: 8,
  borderWidth: '$1',
  _icon: {
    alignSelf: 'flex-start',
  },
  _chevron: {
    alignSelf: 'center',
  },
  _button: {
    width: 24,
    height: 24,
    minWidth: 24,
    minHeight: 24,
    padding: 0,
    _buttonIcon: {
      width: 24,
      height: 24,
      minWidth: 24,
      minHeight: 24,
    },
  },
  _closeButton: {
    width: 24,
    height: 24,
    minWidth: 24,
    minHeight: 24,
    _closeIcon: {
      width: 16,
      height: 16,
      minWidth: 16,
      minHeight: 16,
    },
  },
  variants: {
    colorScheme: {
      error: {
        bg: '$red50',
        borderColor: '$red500',
        _text: {
          color: '$red900',
        },
        _icon: {
          color: '$red700',
        },
        _chevron: {
          color: '$red700',
        },
        _button: {
          _buttonIcon: {
            color: '$red700',
          },
        },
        _closeButton: {
          _closeIcon: {
            color: '$red700',
          },
        },
        _dark: {
          bg: '$darkRed50',
          borderColor: '$darkRed500',
          _text: {
            color: '$darkRed900',
          },
          _icon: {
            color: '$darkRed700',
          },
          _chevron: {
            color: '$darkRed700',
          },
          _button: {
            _buttonIcon: {
              color: '$darkRed700',
            },
          },
          _closeButton: {
            _closeIcon: {
              color: '$darkRed700',
            },
          },
        },
      },
      info: {
        bg: '$cyan50',
        borderColor: '$cyan500',
        _text: {
          color: '$cyan900',
        },
        _icon: {
          color: '$cyan700',
        },
        _chevron: {
          color: '$cyan700',
        },
        _button: {
          _buttonIcon: {
            color: '$cyan700',
          },
        },
        _closeButton: {
          _closeIcon: {
            color: '$cyan700',
          },
        },
        _dark: {
          bg: '$darkCyan50',
          borderColor: '$darkCyan500',
          _text: {
            color: '$darkCyan900',
          },
          _icon: {
            color: '$darkCyan700',
          },
          _chevron: {
            color: '$darkCyan700',
          },
          _button: {
            _buttonIcon: {
              color: '$darkCyan700',
            },
          },
          _closeButton: {
            _closeIcon: {
              color: '$darkCyan700',
            },
          },
        },
      },
      success: {
        bg: '$green50',
        borderColor: '$green500',
        _text: {
          color: '$green900',
        },
        _icon: {
          color: '$green700',
        },
        _chevron: {
          color: '$green700',
        },
        _button: {
          _buttonIcon: {
            color: '$green700',
          },
        },
        _closeButton: {
          _closeIcon: {
            color: '$green700',
          },
        },
        _dark: {
          bg: '$darkGreen50',
          borderColor: '$darkGreen500',
          _text: {
            color: '$darkGreen900',
          },
          _icon: {
            color: '$darkGreen700',
          },
          _chevron: {
            color: '$darkGreen700',
          },
          _button: {
            _buttonIcon: {
              color: '$darkGreen700',
            },
          },
          _closeButton: {
            _closeIcon: {
              color: '$darkGreen700',
            },
          },
        },
      },
      warning: {
        bg: '$gold50',
        borderColor: '$gold500',
        _text: {
          color: '$gold900',
        },
        _icon: {
          color: '$gold700',
        },
        _chevron: {
          color: '$gold700',
        },
        _button: {
          _buttonIcon: {
            color: '$gold700',
          },
        },
        _closeButton: {
          _closeIcon: {
            color: '$gold700',
          },
        },
        _dark: {
          bg: '$darkGold50',
          borderColor: '$darkGold500',
          _text: {
            color: '$darkGold900',
          },
          _icon: {
            color: '$darkGold700',
          },
          _chevron: {
            color: '$darkGold700',
          },
          _button: {
            _buttonIcon: {
              color: '$darkGold700',
            },
          },
          _closeButton: {
            _closeIcon: {
              color: '$darkGold700',
            },
          },
        },
      },
    },
  },

  defaultProps: {
    colorScheme: 'error',
  },
});
