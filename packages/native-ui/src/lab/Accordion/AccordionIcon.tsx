import { Platform, StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon, IconProps } from '../../components/Icon';
import { useAccordionContext } from './Accordion.context';
import { useAccordionItemContext } from './AccordionItem.context';

export const AccordionIcon = ({ as, style, ...props }: IconProps) => {
  const { disabled: contextDisabled } = useAccordionContext();
  const { disabled } = useAccordionItemContext();
  const disabledValue = disabled ?? contextDisabled;
  styles.useVariants({ disabled: disabledValue });

  return (
    <Icon
      as={as}
      style={
        Platform.OS === 'web'
          ? (styles.icon as StyleProp<ViewStyle>)
          : [styles.icon as StyleProp<ViewStyle>, style]
      }
      {...props}
    />
  );
};

AccordionIcon.displayName = 'AccordionIcon';

const styles = StyleSheet.create(({ space, colors, colorMode }) => ({
  iconWrapper: {
    marginLeft: space[2],
  },
  icon: {
    color: colorMode === 'light' ? colors.cyan600 : colors.cyan700,
    variants: {
      disabled: {
        true: {
          color: colorMode === 'light' ? colors.grey400 : colors.grey500,
        },
      },
    },
  },
}));

export default AccordionIcon;
