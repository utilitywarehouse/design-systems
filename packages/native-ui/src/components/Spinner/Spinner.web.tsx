import React, { useCallback, useEffect } from 'react';
import {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  Easing,
  withSequence,
  withRepeat,
} from 'react-native-reanimated';
import { G } from 'react-native-svg';
import { StyledCircle, StyledSpinner, StyledSvg } from './styled-components';

interface SpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: string;
}

const getWidth = (size: 'xs' | 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'xs':
      return 14;
    case 'sm':
      return 20;
    case 'md':
      return 28;
    case 'lg':
      return 40;
    default:
      return 32;
  }
};

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', color }) => {
  const width = getWidth(size);
  const CIRCUMFERENCE = (width - 4) * Math.PI;
  const R = CIRCUMFERENCE / (2 * Math.PI);
  const STROKE_WIDTH = size === 'xs' ? 1.5 : 2;
  const HALF_CIRCLE = R + STROKE_WIDTH;
  const DIAMETER = 2 * HALF_CIRCLE;

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

  const animatedSvgProps = useAnimatedProps(() => {
    return {
      rotation: rotation.value,
    };
  }, [progress]);

  return (
    <StyledSpinner size={size}>
      <StyledSvg
        width={width}
        height={width}
        viewBox={`0 0 ${DIAMETER} ${DIAMETER}`}
        animatedProps={animatedSvgProps}
      >
        <G origin={`${HALF_CIRCLE}, ${HALF_CIRCLE}`} rotation={-90}>
          <StyledCircle
            fill="transparent"
            stroke={color ? color : 'currentColor'}
            strokeWidth={STROKE_WIDTH}
            cx="50%"
            cy="50%"
            r={R}
            strokeLinecap="round"
            animatedProps={animatedCircleProps}
            strokeDasharray={CIRCUMFERENCE}
          />
        </G>
      </StyledSvg>
    </StyledSpinner>
  );
};

export default Spinner;
