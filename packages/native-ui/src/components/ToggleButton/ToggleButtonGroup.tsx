/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import {
  ToggleButtonGroupContext,
  ToggleButtonGroupContextValue,
} from './ToggleButtonGroup.context';
import { ToggleButtonGroupProps } from './ToggleButtonGroup.props';
interface ButtonLayout {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const ToggleButtonGroup = <T extends string | number | boolean>({
  children,
  onChange,
  style,
  value,
  disabled,
  size = 'small',
  ...props
}: React.PropsWithChildren<ToggleButtonGroupProps<T>>) => {
  const { styles } = useStyles(stylesheet, { disabled, size });
  const moveAnim = useRef(new Animated.Value(0)).current;
  const widthAnim = useRef(new Animated.Value(0)).current;
  const yAnim = useRef(new Animated.Value(0)).current;
  const heightAnim = useRef(new Animated.Value(0)).current;
  const [buttonLayouts, setButtonLayouts] = useState<Record<string, ButtonLayout>>({});
  const [contextValue, setContextValue] = useState<T>(value);
  const isInitialRender = useRef(true);

  const handleButtonLayout = (buttonValue: T, event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setButtonLayouts(prev => ({
      ...prev,
      [String(buttonValue)]: { x, y, width, height },
    }));
  };

  useEffect(() => {
    if (contextValue !== undefined && buttonLayouts[String(contextValue)]) {
      const { x, y, width, height } = buttonLayouts[String(contextValue)];

      if (isInitialRender.current) {
        moveAnim.setValue(x - (size === 'base' ? 1 : 0));
        widthAnim.setValue(width);
        yAnim.setValue(y - (size === 'base' ? 1 : 0));
        heightAnim.setValue(height);
        isInitialRender.current = false;
      } else {
        Animated.parallel([
          Animated.timing(moveAnim, {
            duration: 150,
            toValue: x - (size === 'base' ? 1 : 0),
            useNativeDriver: false,
          }),
          Animated.timing(widthAnim, {
            duration: 150,
            toValue: width,
            useNativeDriver: false,
          }),
          Animated.timing(yAnim, {
            duration: 150,
            toValue: y - (size === 'base' ? 1 : 0),
            useNativeDriver: false,
          }),
          Animated.timing(heightAnim, {
            duration: 150,
            toValue: height,
            useNativeDriver: false,
          }),
        ]).start();
      }
    }
  }, [contextValue, buttonLayouts, moveAnim, widthAnim, yAnim, heightAnim, size]);

  const handleChange = useCallback(
    (selected: T) => {
      setContextValue(selected);
      onChange?.(selected);
    },
    [onChange]
  );

  useEffect(() => {
    setContextValue(value);
  }, [value]);

  const wrappedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      const childProps = child.props as {
        value: T;
        onLayout?: (event: LayoutChangeEvent) => void;
      };

      const buttonValue = childProps.value;

      return React.cloneElement<any>(child, {
        onLayout: (event: LayoutChangeEvent) => {
          handleButtonLayout(buttonValue, event);
          if (childProps.onLayout) {
            childProps.onLayout(event);
          }
        },
      });
    }
    return child;
  });

  const memoizedContextValue: ToggleButtonGroupContextValue<T> = useMemo(
    () => ({
      value: contextValue,
      onChange: handleChange,
      disabled,
      size,
    }),
    [contextValue, handleChange, disabled, size]
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
                top: yAnim,
                height: heightAnim,
              },
            ]}
          />
        )}
        {wrappedChildren}
      </View>
    </ToggleButtonGroupContext.Provider>
  );
};

const stylesheet = createStyleSheet(({ colors, isLight, radii, space }) => ({
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
          backgroundColor: isLight ? colors.cyan100 : colors.grey150,
        },
      },
    },
  },
  root: {
    borderRadius: radii.full,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    variants: {
      size: {
        small: {
          height: 28,
          backgroundColor: isLight ? colors.grey150 : colors.grey175,
        },
        base: {
          height: 44,
          borderWidth: 1,
          paddingHorizontal: space[1],
          backgroundColor: isLight ? colors.white : colors.grey100,
          borderColor: isLight ? colors.grey100 : colors.grey300,
        },
      },
    },
  },
}));

export default ToggleButtonGroup;
