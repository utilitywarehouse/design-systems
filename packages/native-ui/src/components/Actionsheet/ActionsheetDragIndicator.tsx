import React from 'react';
import { View, ViewProps } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

const ActionsheetDragIndicator: React.FC<ViewProps & { dragging?: boolean }> = ({
  dragging,
  style,
  ...props
}) => {
  const { styles } = useStyles(stylesheet);

  return <View style={[styles.indicator, styles.extraStyles(dragging), style]} {...props} />;
};

const stylesheet = createStyleSheet(({ space, colors, radii }) => ({
  indicator: {
    width: space['16'],
    height: space['1'],
    borderRadius: radii.full,
    backgroundColor: colors.grey500,
    marginBottom: space['3'],
  },
  extraStyles: (dragging?: boolean) => ({
    backgroundColor: dragging ? colors.grey400 : colors.grey500,
  }),
}));

export default ActionsheetDragIndicator;
