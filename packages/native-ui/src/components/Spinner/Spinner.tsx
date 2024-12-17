import React, { forwardRef, useCallback, useEffect } from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  useAnimatedStyle,
  Easing,
  withSequence,
  withRepeat,
} from 'react-native-reanimated';
import { Circle, G, Svg } from 'react-native-svg';
import type SpinnerProps from './Spinner.props';
import { getStrokeWidth, getWidth } from './Spinner.utils';
import { createSpinner } from '@gluestack-ui/spinner';
import { StyleSheet } from 'react-native-unistyles';
import { View } from 'react-native';
import { useTheme } from '../../hooks';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SpinnerRoot: React.FC<SpinnerProps> = forwardRef<View, SpinnerProps>(
  ({ size = 'md', color, ...props }, ref) => {
    const width = getWidth(size);
    const CIRCUMFERENCE = (width - 4) * Math.PI;
    const R = CIRCUMFERENCE / (2 * Math.PI);
    const STROKE_WIDTH = getStrokeWidth(size);
    const HALF_CIRCLE = R + STROKE_WIDTH;
    const DIAMETER = 2 * HALF_CIRCLE;

    const { colors } = useTheme();
    styles.useVariants({
      size,
    });

    const progress = useSharedValue(1);
    const rotation = useSharedValue(0);

    const startAnimation = useCallback(() => {
      progress.value = withRepeat(withTiming(0.6, { duration: 1000 }), -1, true);

      progress.value = withRepeat(
        withSequence(withTiming(0.7, { duration: 800 }), withTiming(0.1, { duration: 2000 })),
        -1,
        true
      );

      rotation.value = withRepeat(
        withTiming(360, { duration: 900, easing: Easing.linear }),
        -1,
        false
      );
    }, [progress, rotation]);

    useEffect(() => {
      startAnimation();
    }, [startAnimation]);

    const animatedCircleProps = useAnimatedProps(() => {
      return {
        strokeDashoffset: CIRCUMFERENCE * (1 - progress.value),
      };
    }, [progress]);

    const animatedSvgStyle = useAnimatedStyle(
      () => ({
        transform: [
          {
            rotate: `${rotation.value}deg`,
          },
        ],
      }),
      [rotation]
    );

    const defaultColor = color || colors.purple800;

    return (
      <View
        ref={ref}
        {...props}
        style={[styles.container, props.style]}
        aria-busy
        aria-live="polite"
        role="status"
      >
        <AnimatedSvg
          width={width}
          height={width}
          viewBox={`0 0 ${DIAMETER} ${DIAMETER}`}
          style={animatedSvgStyle}
          color={defaultColor}
        >
          <G origin={`${HALF_CIRCLE}, ${HALF_CIRCLE}`} rotation={-90}>
            <AnimatedCircle
              fill="transparent"
              stroke="currentColor"
              strokeWidth={STROKE_WIDTH}
              cx="50%"
              cy="50%"
              r={R}
              strokeLinecap="round"
              animatedProps={animatedCircleProps}
              strokeDasharray={CIRCUMFERENCE}
            />
          </G>
        </AnimatedSvg>
      </View>
    );
  }
);

SpinnerRoot.displayName = 'Spinner';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});

const Spinner = createSpinner({ Root: SpinnerRoot });

export default Spinner;
