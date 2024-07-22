import { createStyle } from '@gluestack-style/react';

export const ListHeading = createStyle({
  gap: '$1',
  paddingHorizontal: '$4',
  paddingTop: '$4',
  paddingBottom: '$3',
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
