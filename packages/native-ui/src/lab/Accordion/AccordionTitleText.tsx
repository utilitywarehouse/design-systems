import React, { forwardRef } from 'react';
import { TextProps } from 'react-native';
import { Text } from '../../components';
import { useAccordionContext } from './Accordion.context';
import { useAccordionItemContext } from './AccordionItem.context';
import { StyleSheet } from 'react-native-unistyles';

export const AccordionTitleText = forwardRef<Text, TextProps>(({ children, ...props }, ref) => {
  const { disabled: contextDisabled } = useAccordionContext();
  const { disabled } = useAccordionItemContext();
  const disabledValue = disabled ?? contextDisabled;
  styles.useVariants({ disabled: disabledValue });

  return (
    <Text
      // @ts-expect-error - ref
      ref={ref}
      style={styles.titleText}
      {...props}
    >
      {children}
    </Text>
  );
});

AccordionTitleText.displayName = 'AccordionTitleText';

const styles = StyleSheet.create(({ isLight, colors, fontSizes, lineHeights }) => ({
  titleText: {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
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
