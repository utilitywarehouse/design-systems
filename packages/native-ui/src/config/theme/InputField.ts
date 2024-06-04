import { createStyle } from '@gluestack-style/react';

export const InputField = createStyle({
  flex: 1,
  borderTopLeftRadius: '$2xl',
  borderTopRightRadius: '$2xl',
  borderBottomLeftRadius: '$none',
  borderBottomRightRadius: '$none',
  color: '$textLight900',
  fontSize: '$lg',
  fontFamily: '$body',
  fontWeight: '$normal',

  ':focus': {
    outline: 'none',
  },

  ':focusVisible': {
    outline: 'none',
  },

  props: {
    placeholderTextColor: '$grey600',
  },
  _dark: {
    color: '$textDark50',
    props: {
      placeholderTextColor: '$textDark400',
    },
  },
  _web: {
    cursor: 'text',
    ':disabled': {
      cursor: 'not-allowed',
    },
    ':focusVisible': {
      outline: 'none',
    },
  },
  variants: {},
});
