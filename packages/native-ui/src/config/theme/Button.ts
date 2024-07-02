import { createStyle } from '@gluestack-style/react';
import {
  colourScheme,
  ghostScheme,
  invertedGhostScheme,
  invertedOutlineScheme,
  invertedSolidScheme,
  outlineScheme,
} from './helpers/Button';

export const Button = createStyle({
  borderRadius: '$full',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  _icon: {
    width: 16,
    height: 16,
  },
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
        _text: {
          fontWeight: '$semibold',
        },
      },
    },

    size: {
      small: {
        paddingVertical: '$2',
        paddingHorizontal: '$3',
        minHeight: 32,
      },
      medium: {
        paddingVertical: '$4',
        paddingHorizontal: '$6',
        minHeight: 48,
      },
      large: {
        paddingVertical: '$5',
        paddingHorizontal: '$6',
        minHeight: 56,
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
      size: 'medium',
      value: {
        paddingVertical: '$3',
      },
    },
    {
      variant: 'outline',
      size: 'large',
      value: {
        paddingVertical: '$4',
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
    invertedSolidScheme('cyan'),
    invertedSolidScheme('green'),
    invertedSolidScheme('red'),
    invertedGhostScheme('cyan'),
    invertedGhostScheme('green'),
    invertedGhostScheme('red'),
    invertedGhostScheme('gold'),
    invertedGhostScheme('grey'),
  ],

  props: {
    size: 'medium',
    variant: 'solid',
    colorScheme: 'cyan',
    inverted: false,
  },
});
