// Actionsheet.tsx
import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, Dimensions, ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import ActionsheetBackdrop from './ActionsheetBackdrop';
import ActionsheetContent from './ActionsheetContent';

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

  useEffect(() => {
    if (visible) {
      // Mount the modal and animate in
      setIsModalVisible(true);
      translateY.value = withTiming(0, { duration: 300 });
      backdropOpacity.value = withTiming(0.6, { duration: 300 }); // Set max opacity to 0.6
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
      transform: [{ translateY: translateY.value }],
    }),
    [translateY]
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
          onClose={handleClose}
        >
          {children}
        </ActionsheetContent>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  } as ViewStyle,
});

export default Actionsheet;
