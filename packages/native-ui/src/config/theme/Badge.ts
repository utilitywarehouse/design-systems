import { createStyle } from '@gluestack-style/react';

export const Badge = createStyle({
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 4,
  paddingHorizontal: 8,
  paddingVertical: 4,
  alignSelf: 'flex-start',
  _text: {
    fontSize: '$badge',
    fontWeight: '400',
    lineHeight: 16,
    fontFamily: 'WorkSans-Regular',
  },
  variants: {
    action: {
      error: {
        bg: '$backgroundLightError',
        borderColor: '$error300',
        _icon: {
          color: '$error600',
        },
        _text: {
          color: '$error600',
        },
        _dark: {
          bg: '$backgroundDarkError',
          borderColor: '$error700',
          _text: {
            color: '$error400',
          },
          _icon: {
            color: '$error400',
          },
        },
      },
      warning: {
        bg: '$backgroundLightWarning',
        borderColor: '$warning300',
        _icon: {
          color: '$warning600',
        },
        _text: {
          color: '$warning600',
        },
        _dark: {
          bg: '$backgroundDarkWarning',
          borderColor: '$warning700',
          _text: {
            color: '$warning400',
          },
          _icon: {
            color: '$warning400',
          },
        },
      },
      success: {
        bg: '$backgroundLightSuccess',
        borderColor: '$success300',
        _icon: {
          color: '$success600',
        },
        _text: {
          color: '$success600',
        },
        _dark: {
          bg: '$backgroundDarkSuccess',
          borderColor: '$success700',
          _text: {
            color: '$success400',
          },
          _icon: {
            color: '$success400',
          },
        },
      },
      info: {
        bg: '$backgroundLightInfo',
        borderColor: '$info300',
        _icon: {
          color: '$info600',
        },
        _text: {
          color: '$info600',
        },
        _dark: {
          bg: '$backgroundDarkInfo',
          borderColor: '$info700',
          _text: {
            color: '$info400',
          },
          _icon: {
            color: '$info400',
          },
        },
      },
      muted: {
        bg: '$cyan200',
        borderColor: '$cyan900',
        _icon: {
          color: '$cyan900',
        },
        _text: {
          color: '$cyan900',
        },
        _dark: {
          bg: '$darkCyan700',
          borderColor: '$darkCyan50',
          _text: {
            color: '$darkCyan50',
          },
          _icon: {
            color: '$darkCyan50',
          },
        },
      },
    },

    variant: {
      solid: {},
      outline: {
        borderWidth: '$1',
      },
    },

    size: {
      badge: {
        _text: {
          props: {
            size: 'badge',
          },
        },
      },
    },
  },

  ':disabled': {
    opacity: 0.5,
  },
  defaultProps: {
    action: 'info',
    variant: 'solid',
    size: 'badge',
  },
});
