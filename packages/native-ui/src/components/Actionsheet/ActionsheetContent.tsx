// ActionsheetContent.tsx
import React from 'react';
import { StyleSheet, Dimensions, ViewStyle } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
  SharedValue,
} from 'react-native-reanimated';
import ActionsheetDragIndicatorWrapper from './ActionsheetDragIndicatorWrapper';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

// Set closing threshold to 120 pixels
const CLOSE_THRESHOLD = 120;

interface ActionsheetContentProps {
  translateY: SharedValue<number>;
  backdropOpacity: SharedValue<number>;
  onClose: () => void;
  children: React.ReactNode;
}

const ActionsheetContent: React.FC<ActionsheetContentProps> = ({
  translateY,
  backdropOpacity,
  onClose,
  children,
}) => {
  const context = useSharedValue<{ y: number }>({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      // Always start from the current translateY value
      context.value.y = translateY.value;
    })
    .onUpdate(event => {
      // Update translateY based on gesture translation
      translateY.value = context.value.y + event.translationY;
      // Prevent dragging the sheet above its initial position
      translateY.value = Math.max(0, translateY.value);

      // Adjust backdrop opacity proportionally (max opacity 0.6)
      const opacity = 0.6 * (1 - translateY.value / SCREEN_HEIGHT);
      backdropOpacity.value = opacity;
    })
    .onEnd(() => {
      if (translateY.value > CLOSE_THRESHOLD) {
        // Animate the sheet out of view
        translateY.value = withTiming(SCREEN_HEIGHT, { duration: 300 }, (isFinished?: boolean) => {
          if (isFinished) {
            runOnJS(onClose)();
          }
        });
        // Fade out the backdrop
        backdropOpacity.value = withTiming(0, { duration: 300 });
      } else {
        // Snap the sheet back to the top
        translateY.value = withSpring(0, { damping: 50 });
        // Restore backdrop opacity to 0.6
        backdropOpacity.value = withTiming(0.6, { duration: 300 });
      }
    });

  return (
    <Animated.View style={styles.content}>
      <GestureDetector gesture={gesture}>
        <ActionsheetDragIndicatorWrapper />
      </GestureDetector>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: SCREEN_HEIGHT * 0.8,
    minHeight: SCREEN_HEIGHT * 0.3, // Set minimum height
    overflow: 'hidden',
  } as ViewStyle,
});

export default ActionsheetContent;
