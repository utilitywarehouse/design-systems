import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Modal, Dimensions, Keyboard, KeyboardEvent, DimensionValue } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import ActionsheetBackdrop from './ActionsheetBackdrop';
import ActionsheetContent from './ActionsheetContent';
import { useStyles, createStyleSheet } from 'react-native-unistyles';
import type ActionsheetProps from './Actionsheet.props';
import ActionsheetContext from './Actionsheet.context';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Actionsheet: React.FC<ActionsheetProps> = ({
  isOpen,
  onClose,
  onOpen,
  keyboardAvoiding = true,
  closeOnBackdropPress = true,
  dragCloseThreshold = 80,
  dragOnIndicatorOnly = false,
  maxHeight = SCREEN_HEIGHT * 0.8,
  minHeight = 0,
  showBackdrop = true,
  showIndicator = true,
  includeContent = true,
  includeDragIndicator = true,
  contentSafeArea = true,
  children,
}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(isOpen);
  const translateY = useSharedValue<number>(SCREEN_HEIGHT);
  const backdropOpacity = useSharedValue<number>(0);
  const keyboardHeight = useSharedValue<number>(0);
  const dragging = useSharedValue(false);

  const { styles } = useStyles(stylesheet);

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const value = useMemo(
    () => ({
      translateY,
      backdropOpacity,
      keyboardHeight,
      dragging,
      onClose: handleClose,
      isOpen,
      closeOnBackdropPress,
      dragCloseThreshold,
      dragOnIndicatorOnly,
      maxHeight,
      minHeight,
      showBackdrop,
      showIndicator,
      includeContent,
      includeDragIndicator,
      contentSafeArea,
    }),
    [
      translateY,
      backdropOpacity,
      keyboardHeight,
      dragging,
      handleClose,
      isOpen,
      closeOnBackdropPress,
      dragCloseThreshold,
      dragOnIndicatorOnly,
      maxHeight,
      minHeight,
      showBackdrop,
      showIndicator,
      includeContent,
      includeDragIndicator,
      contentSafeArea,
    ]
  );

  useEffect(() => {
    if (!keyboardAvoiding) {
      return;
    }
    const keyboardShow = Keyboard.addListener('keyboardWillShow', (event: KeyboardEvent) => {
      // Animate keyboardHeight.value using withTiming
      keyboardHeight.value = withTiming(event.endCoordinates.height, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
    });

    const keyboardHide = Keyboard.addListener('keyboardWillHide', () => {
      // Animate keyboardHeight.value back to 0 using withTiming
      keyboardHeight.value = withTiming(0, { duration: 200 });
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, [keyboardHeight, keyboardAvoiding]);

  useEffect(() => {
    if (isOpen) {
      // Mount the modal and animate in
      setIsModalVisible(true);

      translateY.value = withTiming(0, { duration: 300 });
      backdropOpacity.value = withTiming(0.6, { duration: 300 });
    } else {
      // Animate out and unmount the modal after animation
      translateY.value = withTiming(SCREEN_HEIGHT, { duration: 300 }, (isFinished?: boolean) => {
        if (isFinished) {
          runOnJS(setIsModalVisible)(false);
        }
      });
      backdropOpacity.value = withTiming(0, { duration: 300 });
    }
  }, [isOpen, translateY, backdropOpacity]);

  useEffect(() => {
    if (isOpen) {
      if (onOpen) {
        onOpen();
      }
    }
  }, [isOpen, onOpen]);

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateY: translateY.value - keyboardHeight.value }],
    }),
    [translateY, keyboardHeight]
  );

  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal transparent visible={isModalVisible} animationType="none">
      <ActionsheetContext.Provider value={value}>
        {showBackdrop ? <ActionsheetBackdrop /> : null}
        <Animated.View
          style={[styles.sheetContainer, animatedStyle, styles.extraStyles(maxHeight)]}
        >
          {includeContent ? <ActionsheetContent>{children}</ActionsheetContent> : children}
        </Animated.View>
      </ActionsheetContext.Provider>
    </Modal>
  );
};

const stylesheet = createStyleSheet(({ radii, colorMode, colors }) => ({
  sheetContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: radii['2xl'],
    borderTopRightRadius: radii['2xl'],
    borderBottomLeftRadius: radii.none,
    borderBottomRightRadius: radii.none,
    backgroundColor: colorMode === 'light' ? colors.white : colors.grey100,
    ...(colorMode === 'light'
      ? {
          shadowColor: colors.grey900,
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
  extraStyles: (maxHeight: DimensionValue) => ({
    maxHeight,
  }),
}));

export default Actionsheet;
