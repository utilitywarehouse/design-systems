import React from 'react';
import { ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useActionsheetContext } from './Actionsheet.context';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useTheme } from '../../hooks';

const ActionsheetDragIndicator: React.FC<ViewProps> = ({ style, ...props }) => {
  const { colors, space } = useTheme();
  const { showIndicator } = useActionsheetContext();
  const { dragging } = useActionsheetContext();

  const animatedStyle = useAnimatedStyle(
    () => ({
      backgroundColor: dragging.value ? colors.grey400 : colors.grey500,
      marginBottom: showIndicator ? space['3'] : 0,
    }),
    [showIndicator, dragging]
  );

  return <Animated.View style={[styles.indicator, animatedStyle, style]} {...props} />;
};

const styles = StyleSheet.create(({ space, colors, radii }) => ({
  indicator: {
    width: space['16'],
    height: space['1'],
    borderRadius: radii.full,
    backgroundColor: colors.grey500,
  },
}));

export default ActionsheetDragIndicator;
