import React, { forwardRef, useMemo } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AccordionItemProps } from './AccordionItem.props';
import AccordionItemContext from './AccordionItem.context';
import { useAccordionContext } from './Accordion.context';

export const AccordionItem = forwardRef<View, AccordionItemProps>(
  ({ children, style, noPadding, disabled, divider, ...props }, ref) => {
    const { divider: contextDivider } = useAccordionContext();
    const showDivider = divider ?? contextDivider;
    const { styles } = useStyles(stylesheet, { divider: showDivider });
    const context = useMemo(
      () => ({ noPadding, disabled, divider }),
      [noPadding, disabled, divider]
    );
    return (
      <AccordionItemContext.Provider value={context}>
        <View ref={ref} style={[styles.item, style]} {...props}>
          {children}
        </View>
      </AccordionItemContext.Provider>
    );
  }
);

AccordionItem.displayName = 'AccordionItemRoot';

const stylesheet = createStyleSheet(({ colors, colorMode }) => ({
  item: {
    variants: {
      divider: {
        true: {
          borderBottomWidth: 1,
          borderBottomColor: colorMode === 'light' ? colors.grey100 : colors.grey300,
        },
      },
    },
  },
}));

export default AccordionItem;
