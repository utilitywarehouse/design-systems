/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import {
  ToggleButtonGroupContext,
  ToggleButtonGroupContextValue,
} from './ToggleButtonGroup.context';
import { ToggleButtonGroupProps } from './ToggleButtonGroup.props';

// Define an interface for button layouts
interface ButtonLayout {
  x: number;
  width: number;
}

export const ToggleButtonGroup = <T extends string | number | boolean>({
  children,
  onChange,
  style,
  value,
  disabled,
  ...props
}: React.PropsWithChildren<ToggleButtonGroupProps<T>>) => {
  const { styles } = useStyles(stylesheet, { disabled });
  const moveAnim = useRef(new Animated.Value(0)).current;
  const widthAnim = useRef(new Animated.Value(0)).current;
  const [buttonLayouts, setButtonLayouts] = useState<Record<string, ButtonLayout>>({});
  const [contextValue, setContextValue] = useState<T>(value);
  // Add a ref to track initial render
  const isInitialRender = useRef(true);

  // Handle button layout measurements
  const handleButtonLayout = (buttonValue: T, event: LayoutChangeEvent) => {
    const { x, width } = event.nativeEvent.layout;

    setButtonLayouts(prev => ({
      ...prev,
      [String(buttonValue)]: { x, width },
    }));
  };

  // Animate the indicator when active button changes, but not on initial render
  useEffect(() => {
    if (contextValue !== undefined && buttonLayouts[String(contextValue)]) {
      const { x, width } = buttonLayouts[String(contextValue)];

      if (isInitialRender.current) {
        // Set position without animation on initial render
        moveAnim.setValue(x);
        widthAnim.setValue(width);
        isInitialRender.current = false;
      } else {
        // Animate on subsequent updates
        Animated.parallel([
          Animated.timing(moveAnim, {
            duration: 150,
            toValue: x,
            useNativeDriver: false,
          }),
          Animated.timing(widthAnim, {
            duration: 150,
            toValue: width,
            useNativeDriver: false,
          }),
        ]).start();
      }
    }
  }, [contextValue, buttonLayouts, moveAnim, widthAnim]);

  const handleChange = useCallback(
    (selected: T) => {
      setContextValue(selected);
      onChange?.(selected);
    },
    [onChange]
  );

  // Update internal state when prop value changes
  useEffect(() => {
    setContextValue(value);
  }, [value]);

  // Create wrapped children with layout handlers
  const wrappedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      const childProps = child.props as {
        value: T;
        onLayout?: (event: LayoutChangeEvent) => void;
      };

      const buttonValue = childProps.value;

      // Fixed type casting
      return React.cloneElement<any>(child, {
        onLayout: (event: LayoutChangeEvent) => {
          handleButtonLayout(buttonValue, event);
          // Call the original onLayout if it exists
          if (childProps.onLayout) {
            childProps.onLayout(event);
          }
        },
      });
    }
    return child;
  });

  // Avoids updating on every render
  const memoizedContextValue: ToggleButtonGroupContextValue<T> = useMemo(
    () => ({
      value: contextValue,
      onChange: handleChange,
      disabled,
    }),
    [contextValue, handleChange, disabled]
  );

  return (
    <ToggleButtonGroupContext.Provider
      value={
        memoizedContextValue as unknown as ToggleButtonGroupContextValue<string | number | boolean>
      }
    >
      <View
        accessible
        accessibilityRole="radiogroup"
        accessibilityValue={{ text: String(contextValue) }}
        style={StyleSheet.flatten([styles.root, style])}
        {...props}
      >
        {contextValue !== undefined && (
          <Animated.View
            style={[
              styles.indicator,
              {
                transform: [{ translateX: moveAnim }],
                width: widthAnim,
              },
            ]}
          />
        )}
        {wrappedChildren}
      </View>
    </ToggleButtonGroupContext.Provider>
  );
};

const stylesheet = createStyleSheet(({ colors, isLight, radii }) => ({
  indicator: {
    backgroundColor: isLight ? colors.cyan400 : colors.cyan700,
    borderRadius: radii.full,
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
    variants: {
      disabled: {
        true: {
          backgroundColor: isLight ? colors.cyan100 : colors.grey175,
        },
      },
    },
  },
  root: {
    backgroundColor: isLight ? colors.grey150 : colors.grey300,
    borderRadius: radii.full,
    flexDirection: 'row',
    position: 'relative',
    overflow: 'hidden',
  },
}));

export default ToggleButtonGroup;
