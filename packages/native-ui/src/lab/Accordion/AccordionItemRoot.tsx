import { useMemo } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useAccordionContext } from './Accordion.context';
import AccordionItemContext from './AccordionItem.context';
import { AccordionItemProps } from './AccordionItem.props';

export const AccordionItem = ({
  children,
  style,
  noPadding,
  disabled,
  divider,
  ...props
}: AccordionItemProps) => {
  const { divider: contextDivider } = useAccordionContext();
  const showDivider = divider ?? contextDivider;
  styles.useVariants({ divider: showDivider });
  const context = useMemo(() => ({ noPadding, disabled, divider }), [noPadding, disabled, divider]);
  return (
    <AccordionItemContext.Provider value={context}>
      <View style={[styles.item, style]} {...props}>
        {children}
      </View>
    </AccordionItemContext.Provider>
  );
};

AccordionItem.displayName = 'AccordionItemRoot';

const styles = StyleSheet.create(({ colors, colorMode }) => ({
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
