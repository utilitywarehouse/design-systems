import React from 'react';
import { View, ViewProps } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { useActionsheetContext } from './Actionsheet.context';

const ActionsheetDragIndicator: React.FC<ViewProps & { dragging?: boolean }> = ({
  dragging,
  style,
  ...props
}) => {
  const { styles } = useStyles(stylesheet);
  const { showIndicator } = useActionsheetContext();

  return (
    <View
      style={[styles.indicator, styles.extraStyles(dragging, showIndicator), style]}
      {...props}
    />
  );
};

const stylesheet = createStyleSheet(({ space, colors, radii }) => ({
  indicator: {
    width: space['16'],
    height: space['1'],
    borderRadius: radii.full,
    backgroundColor: colors.grey500,
  },
  extraStyles: (dragging?: boolean, showIndicator?: boolean) => ({
    backgroundColor: dragging ? colors.grey400 : colors.grey500,
    marginBottom: showIndicator ? space['3'] : 0,
  }),
}));

export default ActionsheetDragIndicator;
