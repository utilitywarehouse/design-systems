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
        ':active': {
          backgroundColor: '$grey25',
        },
        _trailingContent: {
          _trailingIcon: {
            color: '$cyan600',
          },
        },
        _dark: {
          ':active': {
            backgroundColor: '$darkGrey75',
          },
          _trailingContent: {
            _trailingIcon: {
              color: '$darkCyan700',
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
