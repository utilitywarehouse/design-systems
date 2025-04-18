/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  interpolateColor,
  Easing,
} from 'react-native-reanimated';
import { CloseSmallIcon, TickSmallIcon } from '@utilitywarehouse/react-native-icons';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
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

  const {
    styles,
    theme: { tokens, colorMode },
  } = useStyles(stylesheet, { size, disabled, value });
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
      return { backgroundColor: tokens.switch.backgroundColorDisabled };
    }
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [tokens.switch.unchecked.backgroundColor, tokens.switch.checked.backgroundColor]
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
      <Animated.View
        style={[
          styles.switch,
          disabled && styles.disabledSwitch,
          animatedSwitchStyle,
          animatedSwitchBackgroundStyle,
        ]}
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

const stylesheet = createStyleSheet(({ tokens }) => ({
  switch: {
    justifyContent: 'center',
    variants: {
      size: {
        medium: {
          width: tokens.switch.medium.width,
          height: tokens.switch.medium.height,
          borderRadius: tokens.switch.borderRadius,
          padding: tokens.switch.padding,
        },
        small: {
          width: tokens.switch.small.width,
          height: tokens.switch.small.height,
          borderRadius: tokens.switch.borderRadius,
          padding: tokens.switch.padding,
        },
      },
      disabled: {
        true: {
          backgroundColor: tokens.switch.backgroundColorDisabled,
        },
      },
    },
  },
  thumb: {
    backgroundColor: tokens.switch.circle.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    variants: {
      size: {
        medium: {
          width: tokens.switch.circle.medium.size,
          height: tokens.switch.circle.medium.size,
          borderRadius: tokens.switch.borderRadius,
        },
        small: {
          width: tokens.switch.circle.small.size,
          height: tokens.switch.circle.small.size,
          borderRadius: tokens.switch.borderRadius,
        },
      },
      disabled: {
        true: {
          backgroundColor: tokens.switch.circle.backgroundColorDisabled,
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
          color: tokens.switch.checked.iconColor,
        },
        false: {
          color: tokens.switch.unchecked.iconColor,
        },
      },
      disabled: {
        true: {
          color: tokens.switch.iconColorDisabled,
        },
      },
    },
  },
  disabledSwitch: {
    opacity: 0.5,
  },
}));

export default CustomSwitch;
