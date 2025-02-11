/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { forwardRef, useMemo } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import type SkeletonProps from './Skeleton.props';
import { AnimatableNumericValue, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import type { ColorValue } from '../../types';
import getStyleValue from '../../utils/getStyleValue';
import { useTheme } from '../../hooks';

const AnimatedView = Animated.createAnimatedComponent(View);

const Skeleton = forwardRef<View, SkeletonProps>(
  ({ width, height, backgroundColor, borderRadius, style, ...props }, ref) => {
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

    return <AnimatedView ref={ref} {...props} style={[styles.skeleton, style, animatedStyle]} />;
  }
);

Skeleton.displayName = 'Skeleton';

const styles = StyleSheet.create(theme => ({
  skeleton: {
    backgroundColor: theme.colorMode === 'light' ? theme.colors.grey75 : theme.colors.grey300,
    borderRadius: theme.radii.sm,
  },
}));

export default Skeleton;
