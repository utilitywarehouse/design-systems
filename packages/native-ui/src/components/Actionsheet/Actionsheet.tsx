// Actionsheet.tsx
import React, { useEffect, useState } from 'react';
import { Modal, Dimensions, Keyboard, KeyboardEvent } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  runOnJS,
  SharedValue,
} from 'react-native-reanimated';
import ActionsheetBackdrop from './ActionsheetBackdrop';
import ActionsheetContent from './ActionsheetContent';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface ActionsheetProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Actionsheet: React.FC<ActionsheetProps> = ({ visible, onClose, children }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(visible);
  const translateY = useSharedValue<number>(SCREEN_HEIGHT);
  const backdropOpacity = useSharedValue<number>(0);
  const keyboardHeight = useSharedValue<number>(0);

  const { styles } = useStyles(stylesheet);

  useEffect(() => {
    const keyboardShow = Keyboard.addListener('keyboardWillShow', (event: KeyboardEvent) => {
      keyboardHeight.value = event.endCoordinates.height;
    });

    const keyboardHide = Keyboard.addListener('keyboardWillHide', () => {
      keyboardHeight.value = 0;
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, [keyboardHeight]);

  useEffect(() => {
    if (visible) {
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
  }, [visible, translateY, backdropOpacity]);

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateY: translateY.value - keyboardHeight.value }],
    }),
    [translateY, keyboardHeight]
  );

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal transparent visible={isModalVisible} animationType="none">
      <ActionsheetBackdrop onPress={handleClose} animatedOpacity={backdropOpacity} />
      <Animated.View style={[styles.sheetContainer, animatedStyle]}>
        <ActionsheetContent
          translateY={translateY}
          backdropOpacity={backdropOpacity}
          keyboardHeight={keyboardHeight}
          onClose={handleClose}
        >
          {children}
        </ActionsheetContent>
      </Animated.View>
    </Modal>
  );
};

const stylesheet = createStyleSheet(() => ({
  sheetContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
}));

export default Actionsheet;
