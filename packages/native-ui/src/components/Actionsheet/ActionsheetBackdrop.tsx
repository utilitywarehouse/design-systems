// ActionsheetBackdrop.tsx
import React from 'react';
import { ViewStyle, StyleSheet } from 'react-native';
import { TapGestureHandler, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, SharedValue } from 'react-native-reanimated';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

interface ActionsheetBackdropProps {
  onPress: () => void;
  animatedOpacity: SharedValue<number>;
}

const ActionsheetBackdropComponent: React.FC<ActionsheetBackdropProps> = ({
  onPress,
  animatedOpacity,
}) => {
  const { styles } = useStyles(stylesheet);

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

// Wrap with gestureHandlerRootHOC
export default gestureHandlerRootHOC(ActionsheetBackdropComponent);

const stylesheet = createStyleSheet(() => ({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000', // Use solid black; opacity is controlled via animation
  },
}));
