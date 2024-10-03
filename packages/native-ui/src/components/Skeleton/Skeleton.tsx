/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useMemo } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import type SkeletonProps from './Skeleton.props';
import { type DimensionValue, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import type { ColorValue } from '../../types';
import getStyleValue from '../../utils/getStyleValue';

const AnimatedView = Animated.createAnimatedComponent(View);

const Skeleton: FC<SkeletonProps> = ({ width, height, backgroundColor, style, ...props }) => {
  const opacity = useSharedValue(1);

  const {
    styles,
    theme: { colors, colorMode },
  } = useStyles(stylesheet);
  const backgroundColorValue: ColorValue = useMemo(
    () => getStyleValue(backgroundColor, colors),
    [backgroundColor, colorMode]
  );

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

  return (
    <AnimatedView
      {...props}
      style={[
        styles.skeleton,
        styles.size(width, height, backgroundColorValue),
        style,
        animatedStyle,
      ]}
    />
  );
};

const stylesheet = createStyleSheet(({ colorMode, colors, radii }) => ({
  skeleton: {
    backgroundColor: colorMode === 'light' ? colors.grey75 : colors.grey300,
    borderRadius: radii.sm,
  },
  size: (width?: DimensionValue, height?: DimensionValue, backgroundColor?: ColorValue) => ({
    width,
    height,
    ...(backgroundColor ? { backgroundColor } : {}),
  }),
}));

export default Skeleton;
