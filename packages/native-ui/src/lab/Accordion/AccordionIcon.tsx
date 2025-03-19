import React, { forwardRef } from 'react';
import { Icon, IconProps } from '../../components/Icon';
import { IconRef } from '../../types';
import { StyleProp, ViewStyle } from 'react-native';
import { useAccordionContext } from './Accordion.context';
import { useAccordionItemContext } from './AccordionItem.context';
import { StyleSheet } from 'react-native-unistyles';

export const AccordionIcon = forwardRef<IconRef, IconProps>(({ as, style, ...props }, ref) => {
  const { disabled: contextDisabled } = useAccordionContext();
  const { disabled } = useAccordionItemContext();
  const disabledValue = disabled ?? contextDisabled;
  styles.useVariants({ disabled: disabledValue });

  return <Icon ref={ref} as={as} style={[styles.icon as StyleProp<ViewStyle>, style]} {...props} />;
});

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
