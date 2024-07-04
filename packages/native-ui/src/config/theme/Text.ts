import { createStyle } from '@gluestack-style/react';

export const Text = createStyle({
  color: '$grey1000',
  _dark: {
    color: '$darkGrey1000',
  },
  fontWeight: '$normal',
  fontFamily: '$body',
  fontStyle: 'normal',
  letterSpacing: '$md',
  _web: {
    fontFaimly: 'Work Sans !important',
  },
  variants: {
    truncated: {
      true: {
        props: {
          numberOfLines: 1,
          ellipsizeMode: 'tail',
        },
      },
    },
    bold: {
      true: {
        fontWeight: '$bold',
      },
    },
    highlight: {
      true: {
        fontWeight: '$semibold',
      },
    },
    underline: {
      true: {
        textDecorationLine: 'underline',
      },
    },
    strikeThrough: {
      true: {
        textDecorationLine: 'line-through',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    size: {
      xs: {
        fontSize: '$xs',
        lineHeight: '$2xs',
      },

      sm: {
        fontSize: '$sm',
        lineHeight: '$2xs',
      },

      md: {
        fontSize: '$md',
        lineHeight: '$lg',
      },
    },
  },

  defaultProps: {
    size: 'md',
  },
});
