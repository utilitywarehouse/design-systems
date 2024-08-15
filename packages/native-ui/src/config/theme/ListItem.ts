import { createStyle } from '@gluestack-style/react';

export const ListItem = createStyle({
  padding: '$4',
  flexDirection: 'row',
  gap: '$3',

  _icon: {
    color: '$grey800',
  },

  _supportingText: {
    color: '$grey600',
    props: {
      lineHeight: '$sm',
    },
  },

  _leadingContent: {
    _icon: {
      color: '$grey800',
    },
  },

  _trailingContent: {
    _icon: {
      color: '$grey800',
    },
    _trailingIcon: {
      color: '$grey800',
    },
  },

  ':disabled': {
    _text: {
      color: '$grey400',
    },
    _icon: {
      color: '$grey400',
    },
    _supportingText: {
      color: '$grey400',
    },
    _leadingContent: {
      _icon: {
        color: '$grey400',
      },
    },
    _trailingContent: {
      _icon: {
        color: '$grey400',
      },
      _trailingIcon: {
        color: '$grey400',
      },
    },
  },

  _dark: {
    _icon: {
      color: '$darkGrey800',
    },

    _supportingText: {
      color: '$darkGrey600',
    },

    _leadingContent: {
      _icon: {
        color: '$darkGrey800',
      },
    },

    _trailingContent: {
      _icon: {
        color: '$darkGrey800',
      },
      _trailingIcon: {
        color: '$darkGrey800',
      },
    },

    ':disabled': {
      _text: {
        color: '$darkGrey500',
      },
      _icon: {
        color: '$darkGrey500',
      },
      _supportingText: {
        color: '$darkGrey500',
      },
      _leadingContent: {
        _icon: {
          color: '$darkGrey500',
        },
      },
      _trailingContent: {
        _icon: {
          color: '$darkGrey500',
        },
        _trailingIcon: {
          color: '$darkGrey500',
        },
      },
    },
  },
  variants: {
    divider: {
      true: {
        borderBottomWidth: 1,
        borderBottomColor: '$grey75',

        _dark: {
          borderBottomColor: '$darkGrey200',
        },
      },
      false: {},
    },
    showPressed: {
      true: {
        _trailingContent: {
          _trailingIcon: {
            color: '$cyan600',
          },
        },
        ':active': {
          backgroundColor: '$grey75',
        },
        ':disabled': {
          _trailingContent: {
            _icon: {
              color: '$darkGrey500',
            },
            _trailingIcon: {
              color: '$darkGrey500',
            },
          },
        },
        _dark: {
          _trailingContent: {
            _trailingIcon: {
              color: '$darkCyan700',
            },
          },
          ':active': {
            backgroundColor: '$darkGrey150',
          },
          ':disabled': {
            _trailingContent: {
              _icon: {
                color: '$darkGrey500',
              },
              _trailingIcon: {
                color: '$darkGrey500',
              },
            },
          },
        },
      },
      false: {
        _web: {
          cursor: 'default',
        },
      },
    },
  },
});
