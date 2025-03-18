import React, { FC } from 'react';
import { Pressable } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AccordionTriggerProps } from './types';
import { useAccordion } from './Accordion.context';
import { useAccordionItem } from './AccordionItemRoot';

export const AccordionTrigger: FC<AccordionTriggerProps> = ({ children, ...props }) => {
  const { styles } = useStyles(stylesheet);
  const { toggleItem } = useAccordion();
  const { value, isExpanded } = useAccordionItem();

  const handlePress = () => {
    toggleItem(value);
  };

  return (
    <Pressable style={styles.trigger} onPress={handlePress} {...props}>
      {children({ isExpanded })}
    </Pressable>
  );
};

const stylesheet = createStyleSheet(({ space }) => ({
  trigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: space[3],
    paddingHorizontal: space[4],
    width: '100%',
  },
}));

export default AccordionTrigger;
