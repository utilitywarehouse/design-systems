import { createStyle } from '@gluestack-style/react';

export const ListHeading = createStyle({
  gap: '$1',
  _supportingText: {
    color: '$grey700',
    props: {
      lineHeight: '$sm',
    },
  },
  _dark: {
    _supportingText: {
      color: '$darkGrey700',
    },
  },
});
