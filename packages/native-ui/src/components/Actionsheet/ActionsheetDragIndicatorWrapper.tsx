// ActionsheetDragIndicatorWrapper.tsx
import React from 'react';
import { View } from 'react-native';
import ActionsheetDragIndicator from './ActionsheetDragIndicator';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

const ActionsheetDragIndicatorWrapper: React.FC = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.wrapper}>
      <ActionsheetDragIndicator />
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 8,
  },
}));

export default ActionsheetDragIndicatorWrapper;
