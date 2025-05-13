import React, { ComponentProps, forwardRef } from 'react';
import { Pressable, type PressableProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { CloseSmallIcon } from '@utilitywarehouse/react-native-icons';
import { useAlertContext } from './Alert.context';
import { PressableRef } from '../../types';
import { Icon } from '../Icon';

const AlertCloseButton = forwardRef<PressableRef, PressableProps>(({ children, ...props }, ref) => {
  return (
    <Pressable ref={ref} {...props} style={[styles.container]}>
      {children}
    </Pressable>
  );
});

export const AlertCloseButtonIcon: React.FC<ComponentProps<typeof CloseSmallIcon>> = ({
  ...props
}) => {
  const { colorScheme } = useAlertContext();
  styles.useVariants({ colorScheme });
  return <Icon as={CloseSmallIcon} {...props} style={styles.icon} />;
};

AlertCloseButton.displayName = 'AlertCloseButton';
AlertCloseButtonIcon.displayName = 'AlertCloseButtonIcon';

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
    alignSelf: 'flex-start',
  },
  icon: {
    width: 16,
    height: 16,
    minWidth: 16,
    minHeight: 16,
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

export default AlertCloseButton;
