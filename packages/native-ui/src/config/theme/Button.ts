import { createStyle } from '@gluestack-style/react';
import { colourScheme, ghostScheme, invertedOutlineScheme, outlineScheme } from './helpers/Button';

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
    invertedOutlineScheme('cyan'),
    invertedOutlineScheme('green'),
    invertedOutlineScheme('red'),
    invertedOutlineScheme('gold'),
    invertedOutlineScheme('grey'),
  ],

  props: {
    size: 'regular',
    variant: 'solid',
    colorScheme: 'cyan',
    inverted: false,
  },
});
