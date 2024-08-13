import { createStyle } from '@gluestack-style/react';

export const FormControlErrorIcon = createStyle({
  color: '$error700',
  _dark: {
    color: '$error400',
  },
  props: {
    size: 'sm',
  },
});
