import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import { GestureDetector, Gesture, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
  SharedValue,
} from 'react-native-reanimated';
import ActionsheetDragIndicatorWrapper from './ActionsheetDragIndicatorWrapper';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const CLOSE_THRESHOLD = 80;

interface ActionsheetContentProps {
  translateY: SharedValue<number>;
  backdropOpacity: SharedValue<number>;
  keyboardHeight: SharedValue<number>;
  onClose: () => void;
  children: React.ReactNode;
}

const ActionsheetContentComponent: React.FC<ActionsheetContentProps> = ({
  translateY,
  backdropOpacity,
  onClose,
  children,
}) => {
  const { styles } = useStyles(stylesheet);
  const context = useSharedValue<{ y: number }>({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value.y = translateY.value;
    })
    .onUpdate(event => {
      translateY.value = context.value.y + event.translationY;
      translateY.value = Math.max(0, translateY.value);

      const opacity = 0.6 * (1 - translateY.value / SCREEN_HEIGHT);
      backdropOpacity.value = opacity;
    })
    .onEnd(() => {
      if (translateY.value > CLOSE_THRESHOLD) {
        translateY.value = withTiming(SCREEN_HEIGHT, { duration: 300 }, (isFinished?: boolean) => {
          if (isFinished) {
            runOnJS(onClose)();
          }
        });
        backdropOpacity.value = withTiming(0, { duration: 300 });
      } else {
        translateY.value = withSpring(0, { damping: 50 });
        backdropOpacity.value = withTiming(0.6, { duration: 300 });
      }
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={styles.content}>
        <ActionsheetDragIndicatorWrapper />
        <SafeAreaView>{children}</SafeAreaView>
      </Animated.View>
    </GestureDetector>
  );
};

export default gestureHandlerRootHOC(ActionsheetContentComponent);

const stylesheet = createStyleSheet(({ space, colorMode, colors, radii }) => ({
  content: {
    backgroundColor: colorMode === 'light' ? colors.white : colors.grey100,
    borderTopLeftRadius: radii['2xl'],
    borderTopRightRadius: radii['2xl'],
    paddingHorizontal: space['5'],
    paddingBottom: space['5'],
    paddingTop: space['2'],
    maxHeight: SCREEN_HEIGHT * 0.8,
    // minHeight: SCREEN_HEIGHT * 0.3,
    overflow: 'hidden',
    ...(colorMode === 'light'
      ? {
          shadowColor: colors.green900,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.2,
          elevation: 10,
        }
      : {}),
  },
}));
