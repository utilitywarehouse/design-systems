// ActionsheetDragIndicator.tsx
import React from 'react';
import { View } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

const ActionsheetDragIndicator: React.FC = () => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.indicator} />;
};

const stylesheet = createStyleSheet(() => ({
  indicator: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#ccc',
  },
}));

export default ActionsheetDragIndicator;
