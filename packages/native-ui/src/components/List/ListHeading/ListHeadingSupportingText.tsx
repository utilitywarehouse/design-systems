import React, { forwardRef } from 'react';

import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text } from '../../Text';
import TextProps from '../../Text/Text.props';
import { Text as RNText } from 'react-native';

const ListHeadingSupportingText = forwardRef<RNText, TextProps>(({ children, ...props }, ref) => {
  const { styles } = useStyles(stylesheet);
  return (
    <Text ref={ref} {...props} style={[styles.supportingText, props.style]}>
      {children}
    </Text>
  );
});

ListHeadingSupportingText.displayName = 'ListHeadingSupportingText';

const stylesheet = createStyleSheet(({ colors, lineHeights }) => ({
  supportingText: {
    color: colors.grey700,
    lineHeight: lineHeights.sm,
  },
}));

export default ListHeadingSupportingText;
