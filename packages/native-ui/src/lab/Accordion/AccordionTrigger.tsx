import React, { forwardRef } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { PressableRef } from '../../types';
import { useAccordionContext } from './Accordion.context';
import { useAccordionItemContext } from './AccordionItem.context';

export const AccordionTrigger = forwardRef<PressableRef, PressableProps>(
  ({ children, ...props }, ref) => {
    const { noPadding: contextMoPadding } = useAccordionContext();
    const { noPadding } = useAccordionItemContext();
    const noPaddingValue = noPadding ?? contextMoPadding;
    const { styles } = useStyles(stylesheet, { noPadding: noPaddingValue });

    return (
      <Pressable ref={ref} style={styles.trigger} {...props}>
        {children}
      </Pressable>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

const stylesheet = createStyleSheet(({ space }) => ({
  trigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: space[4],
    paddingVertical: space[4],
    gap: space[3],
    width: '100%',
    variants: {
      noPadding: {
        true: {
          paddingHorizontal: 0,
        },
      },
    },
  },
}));

export default AccordionTrigger;
