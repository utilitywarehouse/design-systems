import { createStyle } from '@gluestack-style/react';
import { colourScheme, ghostScheme, invertedOutlineScheme, outlineScheme } from './helpers/Button';

export const IconButton = createStyle({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$full',
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
      'x-small': {
        width: 24,
        height: 24,
        _icon: {
          width: 16,
          height: 16,
        },
      },
      small: {
        width: 32,
        height: 32,
        _icon: {
          width: 24,
          height: 24,
        },
      },
      large: {
        width: 48,
        height: 48,
        _icon: {
          width: 24,
          height: 24,
        },
      },
    },

    inverted: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
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
    invertedOutlineScheme('cyan'),
    invertedOutlineScheme('green'),
    invertedOutlineScheme('red'),
    invertedOutlineScheme('gold'),
    invertedOutlineScheme('grey'),
  ],

  props: {
    size: 'large',
    variant: 'solid',
    colorScheme: 'cyan',
  },
});
