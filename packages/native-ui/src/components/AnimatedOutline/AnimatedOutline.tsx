import React, { PropsWithChildren, useEffect, useState } from 'react';
import { View, ViewProps } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface AnimatedCircleProps {
  visible: boolean;
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ visible }) => {
  const opacity = useSharedValue(0.4);
  const scale = useSharedValue(0.8);

  const { styles } = useStyles(stylesheet);

  useEffect(() => {
    if (visible) {
      opacity.value = withTiming(1, { duration: 300 });
      scale.value = withTiming(1, { duration: 300 });
    } else {
      opacity.value = withTiming(0, { duration: 300 });
      scale.value = withTiming(0.4, { duration: 300 });
    }
  }, [visible, opacity, scale]);

  const animatedStyles = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    }),
    [scale, opacity]
  );

  return <Animated.View style={[styles.circle, animatedStyles]} />;
};

interface Props {
  show: boolean;
}

const AnimatedOutline: React.FC<PropsWithChildren<Props> & ViewProps> = ({
  children,
  style,
  show,
  ...props
}) => {
  const [visible, setVisible] = useState(show);

  const { styles } = useStyles(stylesheet);

  useEffect(() => {
    if (show) {
      setVisible(true);
      return;
    } else {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <View style={[styles.container, style]} {...props}>
      {visible && <AnimatedCircle visible={show} />}
      {children}
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, colorMode }) => ({
  container: {
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    top: -8,
    left: -8,
    width: 40,
    height: 40,
    borderRadius: 20,
    zIndex: -1,
    backgroundColor: colorMode === 'light' ? colors.cyan50 : colors.cyan300,
  },
}));

export default AnimatedOutline;
