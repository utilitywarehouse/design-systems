import React, { forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Icon, IconProps } from '../../components/Icon';
import { IconRef } from '../../types';
import { Platform, StyleProp, ViewStyle } from 'react-native';
import { useAccordionContext } from './Accordion.context';
import { useAccordionItemContext } from './AccordionItem.context';

export const AccordionIcon = forwardRef<IconRef, IconProps>(({ as, style, ...props }, ref) => {
  const { disabled: contextDisabled } = useAccordionContext();
  const { disabled } = useAccordionItemContext();
  const disabledValue = disabled ?? contextDisabled;
  const { styles } = useStyles(stylesheet, { disabled: disabledValue });

  return (
    <Icon
      ref={ref}
      as={as}
      style={
        Platform.OS === 'web'
          ? ({
              ...styles.icon,
            } as StyleProp<ViewStyle>)
          : [styles.icon as StyleProp<ViewStyle>, style]
      }
      {...props}
    />
  );
});

AccordionIcon.displayName = 'AccordionIcon';

const stylesheet = createStyleSheet(({ space, colors, colorMode }) => ({
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
