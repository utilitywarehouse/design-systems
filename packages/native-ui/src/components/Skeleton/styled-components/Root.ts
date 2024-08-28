import { styled } from '@gluestack-style/react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

const AnimatedView = Animated.createAnimatedComponent(View);

const Skeleton = styled(
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
