import React, { forwardRef } from 'react';
import { TextProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text } from '../../components';
import { useAccordionContext } from './Accordion.context';
import { useAccordionItemContext } from './AccordionItem.context';

export const AccordionTitleText = forwardRef<Text, TextProps>(({ children, ...props }, ref) => {
  const { disabled: contextDisabled } = useAccordionContext();
  const { disabled } = useAccordionItemContext();
  const disabledValue = disabled ?? contextDisabled;
  const { styles } = useStyles(stylesheet, { disabled: disabledValue });

  return (
    <Text
      // @ts-expect-error - ref
      ref={ref}
      style={styles.titleText}
      {...props}
    >
      {children}
    </Text>
  );
});

AccordionTitleText.displayName = 'AccordionTitleText';

const stylesheet = createStyleSheet(({ isLight, colors, fontSizes, lineHeights }) => ({
  titleText: {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    flex: 1,
    variants: {
      disabled: {
        true: {
          color: isLight ? colors.grey400 : colors.grey500,
        },
      },
    },
  },
}));

export default AccordionTitleText;
