// ActionsheetDragIndicator.tsx
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

const ActionsheetDragIndicator: React.FC = () => <View style={styles.indicator} />;

const styles = StyleSheet.create({
  indicator: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#ccc',
  } as ViewStyle,
});

export default ActionsheetDragIndicator;
