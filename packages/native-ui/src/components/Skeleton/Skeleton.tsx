/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useMemo } from 'react';
import { AnimatableNumericValue } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useTheme } from '../../hooks';
import type { ColorValue } from '../../types';
import getStyleValue from '../../utils/getStyleValue';
import type SkeletonProps from './Skeleton.props';

const Skeleton = ({
  width,
  height,
  backgroundColor,
  borderRadius,
  style,
  ...props
}: SkeletonProps) => {
  const opacity = useSharedValue(1);

  const { colors, colorMode, radii } = useTheme();
  const backgroundColorValue: ColorValue = useMemo(
    () => getStyleValue(backgroundColor, colors),
    [backgroundColor, colorMode]
  );

  const borderRadiusValue: AnimatableNumericValue = useMemo(
    () => getStyleValue(borderRadius, radii),
    [borderRadius]
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      width,
      height,
      ...(backgroundColorValue ? { backgroundColor: backgroundColorValue } : {}),
      ...(borderRadiusValue ? { borderRadius: borderRadiusValue } : {}),
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

  return <Animated.View {...props} style={[styles.skeleton, style, animatedStyle]} />;
};

Skeleton.displayName = 'Skeleton';

const styles = StyleSheet.create(theme => ({
  skeleton: {
    backgroundColor: theme.colorMode === 'light' ? theme.colors.grey75 : theme.colors.grey300,
    borderRadius: theme.radii.sm,
  },
}));

export default Skeleton;
