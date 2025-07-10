import { ViewProps } from 'react-native';
import { Gesture, GestureDetector, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useActionsheetContext } from './Actionsheet.context';

const ActionsheetBackdropComponent = ({ style, ...props }: Omit<ViewProps, 'children'>) => {
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

  const gesture = Gesture.Tap().onEnd(closeOnBackdropPress ? onClose : () => null);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.backdrop, animatedStyle, style as false]} {...props} />
    </GestureDetector>
  );
};

const styles = StyleSheet.create(theme => ({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colorMode === 'light' ? theme.colors.grey1000 : theme.colors.grey25,
  },
}));

export default gestureHandlerRootHOC(ActionsheetBackdropComponent);
