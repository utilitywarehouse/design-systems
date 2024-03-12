import { createStyle } from '@gluestack-style/react';

export const Checkbox = createStyle({
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '$2',

  variants: {},

  defaultProps: {},

  _web: {
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
    },
  },
});
