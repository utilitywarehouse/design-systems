import { createStyle } from '@gluestack-style/react';

export const FormFieldInvalidText = createStyle({
  fontFamily: '$body',
  fontSize: '$md',
  color: '$red500',
  _dark: {
    color: '$darkRed700',
  },
});
