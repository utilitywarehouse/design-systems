import React from 'react';
import { View, ViewProps } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

const ActionsheetDragIndicatorWrapper: React.FC<ViewProps> = ({ children, style, ...props }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={[styles.wrapper, style]} {...props}>
      {children}
    </View>
  );
};

const stylesheet = createStyleSheet(({ space }) => ({
  wrapper: {
    paddingVertical: space['1'],
    width: space.full,
    alignItems: 'center',
  },
}));

export default ActionsheetDragIndicatorWrapper;
