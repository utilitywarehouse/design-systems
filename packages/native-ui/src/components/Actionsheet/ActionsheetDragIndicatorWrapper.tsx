// ActionsheetDragIndicatorWrapper.tsx
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import ActionsheetDragIndicator from './ActionsheetDragIndicator';

const ActionsheetDragIndicatorWrapper: React.FC = () => (
  <View style={styles.wrapper}>
    <ActionsheetDragIndicator />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 8,
  } as ViewStyle,
});

export default ActionsheetDragIndicatorWrapper;
