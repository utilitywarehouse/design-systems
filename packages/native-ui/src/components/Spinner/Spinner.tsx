import React, { useCallback, useEffect } from 'react';
import {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  useAnimatedStyle,
  Easing,
  withSequence,
  withRepeat,
} from 'react-native-reanimated';
import { G } from 'react-native-svg';
import { StyledCircle, StyledSpinner, StyledSvg } from './styled-components';
import type SpinnerProps from './Spinner.props';
import { getStrokeWidth, getWidth } from './Spinner.utils';

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', color }) => {
  const width = getWidth(size);
  const CIRCUMFERENCE = (width - 4) * Math.PI;
  const R = CIRCUMFERENCE / (2 * Math.PI);
  const STROKE_WIDTH = getStrokeWidth(size);
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

  return (
    <StyledSpinner size={size}>
      <StyledSvg
        width={width}
        height={width}
        viewBox={`0 0 ${DIAMETER} ${DIAMETER}`}
        style={animatedSvgStyle}
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
