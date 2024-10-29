import { createStyle } from '@gluestack-style/react';

export const InputField = createStyle({
  flex: 1,
  borderTopLeftRadius: '$2xl',
  borderTopRightRadius: '$2xl',
  borderBottomLeftRadius: '$none',
  borderBottomRightRadius: '$none',
  color: '$grey1000',
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
    selectionColor: '$cyan500',
    cursorColor: '$cyan500',
  },
  _dark: {
    color: '$darkGrey1000',
    props: {
      placeholderTextColor: '$darkGrey600',
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
