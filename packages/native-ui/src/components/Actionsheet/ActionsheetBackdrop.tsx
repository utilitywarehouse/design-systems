// ActionsheetBackdrop.tsx
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

interface ActionsheetBackdropProps {
  onPress: () => void;
  animatedOpacity: SharedValue<number>;
}

const ActionsheetBackdrop: React.FC<ActionsheetBackdropProps> = ({ onPress, animatedOpacity }) => {
  const animatedStyle = useAnimatedStyle(
    () => ({
      opacity: animatedOpacity.value,
    }),
    [animatedOpacity]
  );

  return (
    <TapGestureHandler onEnded={onPress}>
      <Animated.View style={[styles.backdrop, animatedStyle]} />
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000', // Use solid black; opacity is controlled via animation
  } as ViewStyle,
});

export default ActionsheetBackdrop;
