import React, { ComponentProps, forwardRef } from 'react';
import { Pressable, type PressableProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-native-icons';
import { useAlertContext } from './Alert.context';
import { PressableRef } from '../../types';
import { Icon } from '../Icon';

const AlertIconButton = forwardRef<PressableRef, PressableProps>(({ children, ...props }, ref) => {
  return (
    <Pressable ref={ref} {...props} style={[styles.container]}>
      {children}
    </Pressable>
  );
});

export const AlertIconButtonChevron: React.FC<ComponentProps<typeof ChevronRightMediumIcon>> = ({
  ...props
}) => {
  const { colorScheme } = useAlertContext();
  styles.useVariants({ colorScheme });
  return <Icon as={ChevronRightMediumIcon} {...props} style={styles.icon} />;
};

AlertIconButton.displayName = 'AlertIconButton';
AlertIconButtonChevron.displayName = 'AlertIconButtonChevron';

const styles = StyleSheet.create(theme => ({
  container: {
    width: 24,
    height: 24,
    minWidth: 24,
    minHeight: 24,
    padding: 0,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    minWidth: 24,
    minHeight: 24,
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

export default AlertIconButton;
