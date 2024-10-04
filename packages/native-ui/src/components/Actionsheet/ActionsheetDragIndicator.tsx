import React from 'react';
import { View } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

const ActionsheetDragIndicator: React.FC = () => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.indicator} />;
};

const stylesheet = createStyleSheet(({ space, colors, radii }) => ({
  indicator: {
    width: space['16'],
    height: space['1'],
    borderRadius: radii.full,
    backgroundColor: colors.grey500,
  },
}));

export default ActionsheetDragIndicator;
