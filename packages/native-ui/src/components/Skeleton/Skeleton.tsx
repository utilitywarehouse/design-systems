import React, { FC } from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Root } from './styled-components';
import type SkeletonProps from './Skeleton.props';

const Skeleton: FC<SkeletonProps> = ({ width, height, style, ...props }) => {
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, [opacity]);

  React.useEffect(() => {
    opacity.value = withRepeat(
      withTiming(0.5, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, [opacity]);

  return <Root width={width} height={height} {...props} style={[style, animatedStyle]} />;
};

export default Skeleton;
