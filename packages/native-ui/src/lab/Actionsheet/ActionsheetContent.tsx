import React from 'react';
import { Dimensions, DimensionValue, SafeAreaView, ViewProps } from 'react-native';
import { GestureDetector, Gesture, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
  enableLayoutAnimations,
} from 'react-native-reanimated';
import ActionsheetDragIndicatorWrapper from './ActionsheetDragIndicatorWrapper';
import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { useActionsheetContext } from './Actionsheet.context';
import ActionsheetDragIndicator from './ActionsheetDragIndicator';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

enableLayoutAnimations(true);

const ActionsheetContentComponent: React.FC<ViewProps> = ({ children, style, ...props }) => {
  const {
    translateY,
    dragging,
    backdropOpacity,
    onClose,
    dragCloseThreshold,
    minHeight,
    includeDragIndicator,
    dragOnIndicatorOnly,
    showIndicator,
    contentSafeArea,
  } = useActionsheetContext();
  const { styles } = useStyles(stylesheet);
  const context = useSharedValue<{ y: number }>({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value.y = translateY.value;
      dragging.value = true;
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
            dragging.value = false;
          }
        });
        backdropOpacity.value = withTiming(0, { duration: 300 });
      } else {
        translateY.value = withSpring(0, { damping: 50 });
        backdropOpacity.value = withTiming(0.6, { duration: 300 });
        dragging.value = false;
      }
    });

  const dragIndicator =
    showIndicator && includeDragIndicator ? (
      <ActionsheetDragIndicatorWrapper>
        <ActionsheetDragIndicator />
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
      style={[styles.content, styles.extraStyles(minHeight, showIndicator), style]}
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
    borderBottomLeftRadius: radii.none,
    borderBottomRightRadius: radii.none,
    paddingHorizontal: space['5'],
    paddingBottom: space['5'],
    overflow: 'hidden',
    alignSelf: 'stretch',
    flexGrow: 0,
    flexShrink: 0,
  },
  safeAreaView: {},
  extraStyles: (minHeight: DimensionValue, showIndicator?: boolean) => {
    const paddingTop = showIndicator ? space['2'] : space['5'];
    return {
      minHeight,
      paddingTop,
      ...(minHeight === undefined && { minHeight: undefined }),
    };
  },
}));
