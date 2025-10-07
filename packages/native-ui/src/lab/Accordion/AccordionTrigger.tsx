import { Pressable, PressableProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useAccordionContext } from './Accordion.context';
import { useAccordionItemContext } from './AccordionItem.context';

export const AccordionTrigger = ({ children, ...props }: PressableProps) => {
  const { noPadding: contextMoPadding } = useAccordionContext();
  const { noPadding } = useAccordionItemContext();
  const noPaddingValue = noPadding ?? contextMoPadding;
  styles.useVariants({ noPadding: noPaddingValue });

  return (
    <Pressable style={styles.trigger} {...props}>
      {children}
    </Pressable>
  );
};

AccordionTrigger.displayName = 'AccordionTrigger';

const styles = StyleSheet.create(({ space }) => ({
  trigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: space['200'],
    paddingVertical: space['200'],
    gap: space['150'],
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
