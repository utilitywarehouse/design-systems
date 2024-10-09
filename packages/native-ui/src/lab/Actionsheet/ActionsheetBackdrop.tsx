import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { TapGestureHandler, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { useActionsheetContext } from './Actionsheet.context';

const ActionsheetBackdropComponent: React.FC<Omit<ViewProps, 'children'>> = ({
  style,
  ...props
}) => {
  const { styles } = useStyles(stylesheet);
  const {
    onClose,
    closeOnBackdropPress,
    backdropOpacity: animatedOpacity,
  } = useActionsheetContext();

  const animatedStyle = useAnimatedStyle(
    () => ({
      opacity: animatedOpacity.value,
    }),
    [animatedOpacity]
  );

  return (
    <TapGestureHandler onEnded={closeOnBackdropPress ? onClose : undefined}>
      <Animated.View style={[styles.backdrop, animatedStyle, style]} {...props} />
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
