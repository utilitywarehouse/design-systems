import React from 'react';
import { StyleSheet } from 'react-native';
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

export default gestureHandlerRootHOC(ActionsheetBackdropComponent);

const stylesheet = createStyleSheet(({ colors, colorMode }) => ({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colorMode === 'light' ? colors.grey1000 : colors.grey25,
  },
}));
