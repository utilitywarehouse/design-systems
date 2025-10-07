/* eslint-disable react-hooks/exhaustive-deps */
import { CloseSmallIcon, TickSmallIcon } from '@utilitywarehouse/react-native-icons';
import React from 'react';
import { Pressable } from 'react-native';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useTheme } from '../../hooks';
import { Icon } from '../Icon';
import SwitchProps from './Switch.props';

const CustomSwitch: React.FC<SwitchProps> = ({
  value = false,
  onValueChange,
  disabled = false,
  size = 'medium',
  ...accessibilityProps
}) => {
  const SWITCH_WIDTH = size === 'medium' ? 60 : 44;
  const THUMB_SIZE = size === 'medium' ? 28 : 20;
  const PADDING = 2;

  const { colors, colorMode } = useTheme();
  styles.useVariants({ size, disabled, value });

  const offset = useSharedValue(value ? SWITCH_WIDTH - THUMB_SIZE - PADDING * 2 : 0);
  const progress = useSharedValue(value ? 1 : 0);

  const animatedThumbStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: offset.value }],
    }),
    [offset]
  );

  const animatedSwitchBackgroundStyle = useAnimatedStyle(() => {
    if (disabled) {
      return { backgroundColor: colorMode === 'light' ? colors.grey300 : colors.grey200 };
    }
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.grey500, colorMode === 'light' ? colors.cyan500 : colors.cyan700]
    );
    return { backgroundColor };
  }, [progress, disabled, colorMode]);

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

    // Animate the background color with ease-in-out easing
    progress.value = withTiming(value ? 1 : 0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
  }, [value, disabled]);

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
      aria-checked={value}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
      accessibilityLabel={accessibilityProps.accessibilityLabel}
      accessibilityHint={accessibilityProps.accessibilityHint}
      {...accessibilityProps}
    >
      <Animated.View style={[styles.switch, animatedSwitchStyle, animatedSwitchBackgroundStyle]}>
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

const styles = StyleSheet.create(theme => ({
  switch: {
    justifyContent: 'center',
    variants: {
      size: {
        medium: {
          width: 60,
          height: 32,
          borderRadius: theme.borderRadius.full,
          padding: theme.space['25'],
        },
        small: {
          width: 44,
          height: 24,
          borderRadius: theme.borderRadius.full,
          padding: theme.space['25'],
        },
      },
      value: {
        true: {
          backgroundColor: theme.isLight ? theme.colors.cyan500 : theme.colors.cyan700,
        },
        false: {
          backgroundColor: theme.colors.grey500,
        },
      },
      disabled: {
        true: {
          backgroundColor: theme.isLight ? theme.colors.grey300 : theme.colors.grey200,
        },
      },
    },
  },
  thumb: {
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    variants: {
      size: {
        medium: {
          width: 28,
          height: 28,
          borderRadius: theme.borderRadius.full,
        },
        small: {
          width: 20,
          height: 20,
          borderRadius: theme.borderRadius.full,
        },
      },
      disabled: {
        true: {
          backgroundColor: theme.isLight ? theme.colors.grey100 : theme.colors.grey400,
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
          color: theme.isLight ? theme.colors.cyan500 : theme.colors.cyan700,
        },
        false: {
          color: theme.isLight ? theme.colors.grey700 : theme.colors.grey400,
        },
      },
      disabled: {
        true: {
          color: theme.isLight ? theme.colors.grey300 : theme.colors.grey200,
        },
      },
    },
  },
}));

export default CustomSwitch;
