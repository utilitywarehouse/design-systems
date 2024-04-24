import { styled } from '@gluestack-style/react';
import Animated from 'react-native-reanimated';
import { Svg } from 'react-native-svg';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const SpinnerSVG = styled(
  AnimatedSvg,
  {},
  {
    componentName: 'SpinnerSvg',
    ancestorStyle: ['_svg'],
    descendantStyle: ['_circle'],
  }
);

export default SpinnerSVG;
