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
