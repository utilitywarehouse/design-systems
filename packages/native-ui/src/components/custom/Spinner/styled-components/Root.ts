import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

const StyledSpinner = styled(
  View,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    _svg: {
      props: {
        color: '$purple800',
      },
    },
    _dark: {
      _svg: {
        props: {
          color: '$darkPurple800',
        },
      },
    },
    variants: {
      size: {
        xs: {
          width: 16,
          height: 16,
        },
        sm: {
          width: 24,
          height: 24,
        },
        md: {
          width: 32,
          height: 32,
        },
        lg: {
          width: 48,
          height: 48,
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  { componentName: 'Spinner', ancestorStyle: ['_spinner'], descendantStyle: ['_svg'] }
);

export default StyledSpinner;
