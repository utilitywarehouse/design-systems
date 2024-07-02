import { styled } from '@gluestack-style/react';
import Animated from 'react-native-reanimated';
import { Svg } from 'react-native-svg';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const SpinnerSVG = styled(
  AnimatedSvg,
  {
    color: '$purple800',
    _dark: {
      // @ts-expect-error - typescript doesn't know about the _dark property
      color: '$darkPurple800',
    },
  },
  {
    componentName: 'SpinnerSvg',
    ancestorStyle: ['_svg'],
    descendantStyle: ['_circle'],
  }
);

export default SpinnerSVG;
