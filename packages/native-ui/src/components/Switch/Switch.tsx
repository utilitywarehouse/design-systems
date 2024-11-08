// CustomSwitch.tsx

import React from 'react';
import { StyleSheet, AccessibilityProps, Pressable, PressableProps } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import { CloseSmallIcon, TickSmallIcon } from '@utilitywarehouse/react-native-icons';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Icon } from '../Icon';

interface SwitchProps extends PressableProps, AccessibilityProps {
  value: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  size?: '32' | '24';
}

const CustomSwitch: React.FC<SwitchProps> = ({
  value,
  onValueChange,
  disabled = false,
  size = '32',
  ...accessibilityProps
}) => {
  const SWITCH_WIDTH = size === '32' ? 60 : 44;
  const THUMB_SIZE = size === '32' ? 28 : 20;
  const PADDING = 2;

  const { styles } = useStyles(stylesheet, { size, disabled, value });
  const offset = useSharedValue(value ? SWITCH_WIDTH - THUMB_SIZE - PADDING * 2 : 0);

  const animatedThumbStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: offset.value }],
    }),
    [offset]
  );

  // Icon animations
  const tickScale = useSharedValue(value ? 1 : 0);
  const crossScale = useSharedValue(value ? 0 : 1);

  const animatedTickStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: tickScale.value }],
    }),
    [tickScale]
  );

  const animatedCrossStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: crossScale.value }],
    }),
    [crossScale]
  );

  // Press feedback animation
  const scale = useSharedValue(1);

  const animatedSwitchStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: scale.value }],
    }),
    [scale]
  );

  React.useEffect(() => {
    // Animate the thumb position
    offset.value = withTiming(value ? SWITCH_WIDTH - THUMB_SIZE - PADDING * 2 : 0);

    // Animate the icons
    tickScale.value = withTiming(value ? 1 : 0);
    crossScale.value = withTiming(value ? 0 : 1);
  }, [value]);

  const toggleSwitch = () => {
    if (disabled) return;
    onValueChange?.(!value);
  };

  const onPressIn = () => {
    scale.value = withSpring(0.95);
  };

  const onPressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <Pressable
      onPress={toggleSwitch}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
      accessibilityLabel={accessibilityProps.accessibilityLabel}
      accessibilityHint={accessibilityProps.accessibilityHint}
      {...accessibilityProps}
    >
      <Animated.View
        style={[styles.switch, disabled && styles.disabledSwitch, animatedSwitchStyle]}
      >
        <Animated.View style={[styles.thumb, animatedThumbStyle]}>
          <Animated.View style={[styles.iconWrap, animatedTickStyle]}>
            <Icon as={TickSmallIcon} style={styles.icon} />
          </Animated.View>
          <Animated.View style={[styles.iconWrap, animatedCrossStyle]}>
            <Icon as={CloseSmallIcon} style={styles.icon} />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

const stylesheet = createStyleSheet(({ colors, colorMode }) => ({
  switch: {
    justifyContent: 'center',
    variants: {
      size: {
        '32': {
          width: 60,
          height: 32,
          borderRadius: 16,
          padding: 2,
        },
        '24': {
          width: 44,
          height: 24,
          borderRadius: 12,
          padding: 2,
        },
      },
      value: {
        true: {
          backgroundColor: colors.cyan500,
        },
        false: {
          backgroundColor: colors.grey500,
        },
      },
      disabled: {
        true: {
          backgroundColor: colors.grey200,
        },
      },
    },
  },
  thumb: {
    backgroundColor: colorMode === 'light' ? colors.white : colors.grey100,
    alignItems: 'center',
    justifyContent: 'center',
    variants: {
      size: {
        '32': {
          width: 28,
          height: 28,
          borderRadius: 14,
        },
        '24': {
          width: 20,
          height: 20,
          borderRadius: 10,
        },
      },
    },
  },
  iconWrap: {
    position: 'absolute',
  },
  icon: {
    variants: {
      value: {
        true: {
          color: colors.cyan700,
        },
        false: {
          color: colors.grey700,
        },
      },
      disabled: {
        true: {
          color: colors.grey200,
        },
      },
    },
  },
  disabledSwitch: {
    opacity: 0.5,
  },
}));

export default CustomSwitch;
