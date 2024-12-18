import React, { ComponentProps, forwardRef, ElementRef } from 'react';
import { Pressable, Text, type PressableProps, type TextProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import AlertText from './AlertText';
import { ChevronRightSmallIcon } from '@utilitywarehouse/react-native-icons';
import { useAlertContext } from './Alert.context';
import { PressableRef } from '../../types';

const AlertLink = forwardRef<PressableRef, PressableProps>(({ children, ...props }, ref) => {
  return (
    <Pressable ref={ref} {...props} style={[styles.container]}>
      {children}
    </Pressable>
  );
});

export const AlertLinkText = forwardRef<ElementRef<typeof Text>, TextProps>(
  ({ children, ...props }, ref) => {
    return (
      <AlertText ref={ref} {...props} semibold>
        {children}
      </AlertText>
    );
  }
);

export const AlertLinkChevron: React.FC<ComponentProps<typeof ChevronRightSmallIcon>> = ({
  ...props
}) => {
  const { colorScheme } = useAlertContext();
  styles.useVariants({ colorScheme });
  return <ChevronRightSmallIcon {...props} style={styles.icon} />;
};

AlertLink.displayName = 'AlertLink';
AlertLinkText.displayName = 'AlertLinkText';
AlertLinkChevron.displayName = 'AlertLinkChevron';

const styles = StyleSheet.create(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.space[1],
  },
  icon: {
    width: 16,
    height: 16,
    alignSelf: 'center',
    variants: {
      colorScheme: {
        cyan: {
          color: theme.colors.cyan700,
        },
        red: {
          color: theme.colors.red700,
        },
        green: {
          color: theme.colors.green700,
        },
        gold: {
          color: theme.colors.gold700,
        },
      },
    },
  },
}));

export default AlertLink;
