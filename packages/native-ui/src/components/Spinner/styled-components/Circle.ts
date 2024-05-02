import { styled } from '@gluestack-style/react';
import Animated from 'react-native-reanimated';
import { Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SpinnerCircle = styled(
  AnimatedCircle,
  {},
  { componentName: 'SpinnerCircle', ancestorStyle: ['_circle'] }
);

export default SpinnerCircle;
