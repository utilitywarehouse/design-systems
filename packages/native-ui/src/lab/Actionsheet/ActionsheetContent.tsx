import React from 'react';
import { Dimensions, DimensionValue, SafeAreaView, ViewProps } from 'react-native';
import { GestureDetector, Gesture, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, withTiming, runOnJS } from 'react-native-reanimated';
import ActionsheetDragIndicatorWrapper from './ActionsheetDragIndicatorWrapper';
import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { useActionsheetContext } from './Actionsheet.context';
import ActionsheetDragIndicator from './ActionsheetDragIndicator';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const ActionsheetContentComponent: React.FC<ViewProps> = ({ children, style, ...props }) => {
  const {
    translateY,
    backdropOpacity,
    onClose,
    dragCloseThreshold,
    maxHeight,
    minHeight,
    includeDragIndicator,
    dragOnIndicatorOnly,
    showIndicator,
    contentSafeArea,
  } = useActionsheetContext();
  const { styles } = useStyles(stylesheet);
  const context = useSharedValue<{ y: number }>({ y: 0 });
  const [dragging, setDragging] = React.useState(false);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value.y = translateY.value;
      runOnJS(setDragging)(true);
    })
    .onUpdate(event => {
      translateY.value = context.value.y + event.translationY;
      translateY.value = Math.max(0, translateY.value);

      const opacity = 0.6 * (1 - translateY.value / SCREEN_HEIGHT);
      backdropOpacity.value = opacity;
    })
    .onEnd(() => {
      if (translateY.value > dragCloseThreshold) {
        translateY.value = withTiming(SCREEN_HEIGHT, { duration: 300 }, (isFinished?: boolean) => {
          if (isFinished) {
            runOnJS(onClose)();
            runOnJS(setDragging)(false);
          }
        });
        backdropOpacity.value = withTiming(0, { duration: 300 });
      } else {
        translateY.value = withSpring(0, { damping: 50 });
        backdropOpacity.value = withTiming(0.6, { duration: 300 });
        runOnJS(setDragging)(false);
      }
    });

  const dragIndicator =
    showIndicator && includeDragIndicator ? (
      <ActionsheetDragIndicatorWrapper>
        <ActionsheetDragIndicator dragging={dragging} />
      </ActionsheetDragIndicatorWrapper>
    ) : null;

  const dragOnIndicator =
    dragOnIndicatorOnly && showIndicator ? (
      <GestureDetector gesture={gesture}>{dragIndicator}</GestureDetector>
    ) : (
      dragIndicator
    );

  const content = (
    <>
      {dragOnIndicator}
      {children}
    </>
  );

  const safeAreaContent = contentSafeArea ? (
    <SafeAreaView style={styles.safeAreaView}>{content}</SafeAreaView>
  ) : (
    content
  );

  const animatedView = (
    <Animated.View
      style={[styles.content, styles.extraStyles(maxHeight, minHeight, showIndicator), style]}
      {...props}
    >
      {safeAreaContent}
    </Animated.View>
  );

  const wrappedContent =
    dragOnIndicatorOnly && showIndicator ? (
      animatedView
    ) : (
      <GestureDetector gesture={gesture}>{animatedView}</GestureDetector>
    );

  return wrappedContent;
};

export default gestureHandlerRootHOC(ActionsheetContentComponent);

const stylesheet = createStyleSheet(({ space, colorMode, colors, radii }) => ({
  content: {
    backgroundColor: colorMode === 'light' ? colors.white : colors.grey100,
    borderTopLeftRadius: radii['2xl'],
    borderTopRightRadius: radii['2xl'],
    paddingHorizontal: space['5'],
    paddingBottom: space['5'],
    overflow: 'hidden',
  },
  safeAreaView: { flex: 1 },
  extraStyles: (maxHeight: DimensionValue, minHeight: DimensionValue, showIndicator?: boolean) => ({
    maxHeight,
    minHeight,
    paddingTop: showIndicator ? space['2'] : space['5'],
  }),
}));
