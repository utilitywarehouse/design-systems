import React, { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useAccordionContext } from './Accordion.context';
import { useAccordionItemContext } from './AccordionItem.context';

export const AccordionContent = forwardRef<View, ViewProps>(
  ({ children, style, ...props }, ref) => {
    const { noPadding: contextMoPadding } = useAccordionContext();
    const { noPadding } = useAccordionItemContext();
    const noPaddingValue = noPadding ?? contextMoPadding;
    const { styles } = useStyles(stylesheet, { noPadding: noPaddingValue });

    return (
      <View ref={ref} style={[styles.content, style]} {...props}>
        {children}
      </View>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';

const stylesheet = createStyleSheet(({ space }) => ({
  content: {
    paddingTop: 0,
    paddingHorizontal: space[4],
    paddingBottom: space[4],
    variants: {
      noPadding: {
        true: {
          paddingHorizontal: 0,
        },
      },
    },
  },
}));

export default AccordionContent;
