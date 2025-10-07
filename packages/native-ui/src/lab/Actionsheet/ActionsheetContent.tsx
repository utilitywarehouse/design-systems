import { Dimensions, DimensionValue, SafeAreaView, ViewProps } from 'react-native';
import { Gesture, GestureDetector, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Animated, {
  enableLayoutAnimations,
  runOnJS,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useActionsheetContext } from './Actionsheet.context';
import ActionsheetDragIndicator from './ActionsheetDragIndicator';
import ActionsheetDragIndicatorWrapper from './ActionsheetDragIndicatorWrapper';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

enableLayoutAnimations(true);

const ActionsheetContentComponent = ({ children, style, ...props }: ViewProps) => {
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
      style={[styles.content, styles.extraStyles(minHeight, showIndicator), style as false]}
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

const styles = StyleSheet.create(theme => ({
  content: {
    backgroundColor: theme.colorMode === 'light' ? theme.colors.white : theme.colors.grey100,
    borderTopLeftRadius: theme.borderRadius.xl,
    borderTopRightRadius: theme.borderRadius.xl,
    borderBottomLeftRadius: theme.borderRadius.none,
    borderBottomRightRadius: theme.borderRadius.none,
    paddingHorizontal: theme.space['250'],
    paddingBottom: theme.space['250'],
    overflow: 'hidden',
    alignSelf: 'stretch',
    flexGrow: 0,
    flexShrink: 0,
  },
  safeAreaView: {},
  extraStyles: (minHeight: DimensionValue, showIndicator?: boolean) => {
    const paddingTop = showIndicator ? theme.space['100'] : theme.space['250'];
    return {
      minHeight,
      paddingTop,
      ...(minHeight === undefined && { minHeight: undefined }),
    };
  },
}));
