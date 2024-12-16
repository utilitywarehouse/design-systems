import React from 'react';
import { View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const ActionsheetDragIndicatorWrapper: React.FC<ViewProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.wrapper, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create(({ space }) => ({
  wrapper: {
    paddingVertical: space['1'],
    width: space.full,
    alignItems: 'center',
  },
}));

export default ActionsheetDragIndicatorWrapper;
