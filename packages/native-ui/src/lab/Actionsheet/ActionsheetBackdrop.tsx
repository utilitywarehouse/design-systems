import React from 'react';
import { View, ViewProps } from 'react-native';
import { TapGestureHandler, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useActionsheetContext } from './Actionsheet.context';

const AnimatedView = Animated.createAnimatedComponent(View);

const ActionsheetBackdropComponent: React.FC<Omit<ViewProps, 'children'>> = ({
  style,
  ...props
}) => {
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
      <AnimatedView style={[styles.backdrop, animatedStyle, style as false]} {...props} />
    </TapGestureHandler>
  );
};

export default gestureHandlerRootHOC(ActionsheetBackdropComponent);

const styles = StyleSheet.create(theme => ({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colorMode === 'light' ? theme.colors.grey1000 : theme.colors.grey25,
  },
}));
