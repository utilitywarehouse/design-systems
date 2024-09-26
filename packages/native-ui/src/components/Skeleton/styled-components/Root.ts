import { styled } from '@gluestack-style/react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

const AnimatedView = Animated.createAnimatedComponent(View);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Skeleton: any = styled(
  AnimatedView,
  {
    bg: '$grey75',
    borderRadius: '$sm',
    _dark: {
      bg: '$darkGrey300',
    },
  },
  {
    componentName: 'Skeleton',
    ancestorStyle: ['_skeleton'],
    descendantStyle: [],
  }
);

export default Skeleton;
