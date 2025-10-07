import { View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useAccordionContext } from './Accordion.context';
import { useAccordionItemContext } from './AccordionItem.context';

export const AccordionContent = ({ children, style, ...props }: ViewProps) => {
  const { noPadding: contextMoPadding, contentNoPadding } = useAccordionContext();
  const { noPadding } = useAccordionItemContext();
  const noPaddingValue = noPadding ?? contextMoPadding;
  styles.useVariants({ noPadding: noPaddingValue, contentNoPadding });

  return (
    <View style={[styles.content, style]} {...props}>
      {children}
    </View>
  );
};

AccordionContent.displayName = 'AccordionContent';

const styles = StyleSheet.create(({ space }) => ({
  content: {
    paddingTop: 0,
    paddingHorizontal: space['200'],
    paddingBottom: space['200'],
    variants: {
      noPadding: {
        true: {
          paddingHorizontal: 0,
        },
      },
      contentNoPadding: {
        true: {
          paddingTop: 0,
          paddingHorizontal: 0,
          paddingBottom: 0,
        },
      },
    },
  },
}));

export default AccordionContent;
