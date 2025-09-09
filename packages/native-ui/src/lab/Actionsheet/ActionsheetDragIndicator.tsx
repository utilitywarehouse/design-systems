import { ViewProps } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useTheme } from '../../hooks';
import { useActionsheetContext } from './Actionsheet.context';

const ActionsheetDragIndicator = ({ style, ...props }: Omit<ViewProps, 'children'>) => {
  const { colors, space } = useTheme();
  const { showIndicator } = useActionsheetContext();
  const { dragging } = useActionsheetContext();

  const animatedStyle = useAnimatedStyle(
    () => ({
      backgroundColor: dragging.value ? colors?.grey400 : colors?.grey500,
      marginBottom: showIndicator ? space?.['3'] : 0,
    }),
    [showIndicator, dragging, colors?.grey400, colors?.grey500, space?.['3']]
  );

  return <Animated.View style={[styles.indicator, animatedStyle, style as false]} {...props} />;
};

const styles = StyleSheet.create(theme => ({
  indicator: {
    width: theme.space['16'],
    height: theme.space['1'],
    borderRadius: theme.radii.full,
    backgroundColor: theme.colors.grey500,
  },
}));

export default ActionsheetDragIndicator;
