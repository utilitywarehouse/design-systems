import { createStyle } from '@gluestack-style/react';

export const Radio = createStyle({
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '$2',
  _text: {
    props: {
      size: 'md',
    },
  },
  _icon: {
    props: {
      w: 14,
      h: 14,
    },
  },
  _indicator: {
    h: '$6',
    w: '$6',
  },

  defaultProps: {},
  _web: {
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
    },
  },
});
