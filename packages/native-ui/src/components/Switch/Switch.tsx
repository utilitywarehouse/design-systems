/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Pressable, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  interpolateColor,
  Easing,
} from 'react-native-reanimated';
import { CloseSmallIcon, TickSmallIcon } from '@utilitywarehouse/react-native-icons';
import { StyleSheet } from 'react-native-unistyles';
import { Icon } from '../Icon';
import SwitchProps from './Switch.props';
import { useTheme } from '../../hooks';

const AnimatedView = Animated.createAnimatedComponent(View);

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

  const { tokens, colorMode } = useTheme();
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
      <AnimatedView
        style={[
          styles.switch,
          disabled && styles.disabledSwitch,
          animatedSwitchStyle,
          animatedSwitchBackgroundStyle,
        ]}
      >
        <AnimatedView style={[styles.thumb, animatedThumbStyle]}>
          <AnimatedView style={[styles.iconWrap, animatedTickStyle]}>
            <Icon as={TickSmallIcon} style={styles.icon} />
          </AnimatedView>
          <AnimatedView style={[styles.iconWrap, animatedCrossStyle]}>
            <Icon as={CloseSmallIcon} style={styles.icon} />
          </AnimatedView>
        </AnimatedView>
      </AnimatedView>
    </Pressable>
  );
};

const styles = StyleSheet.create(theme => ({
  switch: {
    justifyContent: 'center',
    variants: {
      size: {
        medium: {
          width: theme.tokens.switch.medium.width,
          height: theme.tokens.switch.medium.height,
          borderRadius: theme.tokens.switch.borderRadius,
          padding: theme.tokens.switch.padding,
        },
        small: {
          width: theme.tokens.switch.small.width,
          height: theme.tokens.switch.small.height,
          borderRadius: theme.tokens.switch.borderRadius,
          padding: theme.tokens.switch.padding,
        },
      },
      value: {
        true: {
          backgroundColor: theme.tokens.switch.checked.backgroundColor,
        },
        false: {
          backgroundColor: theme.tokens.switch.unchecked.backgroundColor,
        },
      },
      disabled: {
        true: {
          backgroundColor: theme.tokens.switch.backgroundColorDisabled,
        },
      },
    },
  },
  thumb: {
    backgroundColor: theme.tokens.switch.circle.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    variants: {
      size: {
        medium: {
          width: theme.tokens.switch.circle.medium.size,
          height: theme.tokens.switch.circle.medium.size,
          borderRadius: theme.tokens.switch.borderRadius,
        },
        small: {
          width: theme.tokens.switch.circle.small.size,
          height: theme.tokens.switch.circle.small.size,
          borderRadius: theme.tokens.switch.borderRadius,
        },
      },
      disabled: {
        true: {
          backgroundColor: theme.tokens.switch.circle.backgroundColorDisabled,
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
          color: theme.tokens.switch.checked.iconColor,
        },
        false: {
          color: theme.tokens.switch.unchecked.iconColor,
        },
      },
      disabled: {
        true: {
          color: theme.tokens.switch.iconColorDisabled,
        },
      },
    },
  },
  disabledSwitch: {
    opacity: 0.5,
  },
}));

export default CustomSwitch;
