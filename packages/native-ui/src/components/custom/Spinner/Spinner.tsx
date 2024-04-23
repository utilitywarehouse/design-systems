import React, { useEffect } from 'react';
import { styled } from '@gluestack-style/react';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  useAnimatedStyle,
  Easing,
  withSequence,
  withRepeat,
} from 'react-native-reanimated';
import { Svg, G, Circle } from 'react-native-svg';
import { Platform, View } from 'react-native';

interface SpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: string;
}

const StyledSpinner = styled(
  View,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    _svg: {
      props: {
        color: '$purple800',
      },
    },
    _dark: {
      _svg: {
        props: {
          color: '$darkPurple800',
        },
      },
    },
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

    defaultProps: {
      size: 'md',
    },
  },
  { componentName: 'Spinner', ancestorStyle: ['_spinner'], descendantStyle: ['_svg'] }
);

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

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SpinnerCircle = styled(
  AnimatedCircle,
  {},
  { componentName: 'SpinnerCircle', ancestorStyle: ['_circle'] }
);

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
  const STROKE_WIDTH = 2;
  const HALF_CIRCLE = R + STROKE_WIDTH;
  const DIAMETER = 2 * HALF_CIRCLE;

  const progress = useSharedValue(1);
  const rotation = useSharedValue(0);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
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
  };

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

  const animatedSvgProps = useAnimatedProps(() => {
    return {
      rotation: rotation.value,
    };
  }, [progress]);

  return (
    <StyledSpinner size={size}>
      <SpinnerSVG
        width={width}
        height={width}
        viewBox={`0 0 ${DIAMETER} ${DIAMETER}`}
        style={Platform.OS === 'web' ? {} : animatedSvgStyle}
        animatedProps={Platform.OS === 'web' ? animatedSvgProps : {}}
      >
        <G origin={`${HALF_CIRCLE}, ${HALF_CIRCLE}`} rotation={-90}>
          <SpinnerCircle
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
      </SpinnerSVG>
    </StyledSpinner>
  );
};

export default Spinner;
