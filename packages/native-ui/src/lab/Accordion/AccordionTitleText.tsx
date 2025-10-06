import { TextProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from '../../components';
import { useAccordionContext } from './Accordion.context';
import { useAccordionItemContext } from './AccordionItem.context';

export const AccordionTitleText = ({ children, ...props }: TextProps) => {
  const { disabled: contextDisabled } = useAccordionContext();
  const { disabled } = useAccordionItemContext();
  const disabledValue = disabled ?? contextDisabled;
  styles.useVariants({ disabled: disabledValue });

  return (
    <Text style={styles.titleText} {...props}>
      {children}
    </Text>
  );
};

AccordionTitleText.displayName = 'AccordionTitleText';

const styles = StyleSheet.create(({ isLight, colors, fontSize, lineHeight }) => ({
  titleText: {
    fontSize: fontSize['150'],
    lineHeight: lineHeight['500'],
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
