import { createStyle } from '@gluestack-style/react';
import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';

export const Heading = createStyle({
  color: '$grey1000',
  fontWeight: '$bold',
  fontFamily: '$heading',
  marginVertical: 0,
  _dark: {
    color: '$darkGrey1000',
  },
  variants: {
    truncated: {
      true: {
        props: {
          numberOfLines: 1,
          ellipsizeMode: 'tail',
        },
      },
    },
    underline: {
      true: {
        textDecorationLine: 'underline',
      },
    },
    strikeThrough: {
      true: {
        textDecorationLine: 'line-through',
      },
    },
    size: {
      h1: {
        props: { as: H1 },
        fontSize: '$4xl',
        lineHeight: '$3xl',
      },
      h2: {
        props: { as: H2 },
        fontSize: '$3xl',
        lineHeight: '$2xl',
      },
      h3: {
        props: { as: H3 },
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      h4: {
        props: { as: H4 },
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      h5: {
        props: { as: H5 },
        fontSize: '$md',
        lineHeight: '$sm',
      },
      h6: {
        props: { as: H6 },
        fontSize: '$md',
        lineHeight: '$lg',
        fontFamily: '$body',
        fontWeight: '$normal',
      },
    },
  },

  defaultProps: {
    size: 'h4',
  },
});
