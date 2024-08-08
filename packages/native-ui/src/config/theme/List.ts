import { createStyle } from '@gluestack-style/react';

export const List = createStyle({
  width: '$full',
  variants: {
    container: {
      full: {},
      card: {
        _listHeading: {
          paddingLeft: 0,
        },
      },
    },
  },
  defaultProps: {
    container: 'full',
  },
});
