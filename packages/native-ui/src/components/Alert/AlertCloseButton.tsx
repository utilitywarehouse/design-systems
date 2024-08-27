import React, { ComponentProps } from 'react';
import { Pressable, type PressableProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CloseSmallIcon } from '@utilitywarehouse/react-native-icons';
import { useAlertContext } from './Alert.context';

const AlertCloseButton: React.FC<PressableProps> = ({ children, ...props }) => {
  const { styles } = useStyles(stylesheet);
  return (
    <Pressable {...props} style={[styles.container]}>
      {children}
    </Pressable>
  );
};

export const AlertCloseButtonIcon: React.FC<ComponentProps<typeof CloseSmallIcon>> = ({
  ...props
}) => {
  const { colorScheme } = useAlertContext();
  const { styles } = useStyles(stylesheet, { colorScheme });
  return <CloseSmallIcon {...props} style={styles.icon} />;
};

AlertCloseButton.displayName = 'AlertCloseButton';
AlertCloseButtonIcon.displayName = 'AlertCloseButtonIcon';

const stylesheet = createStyleSheet(({ colors }) => ({
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
          color: colors.cyan700,
        },
        red: {
          color: colors.red700,
        },
        green: {
          color: colors.green700,
        },
        gold: {
          color: colors.gold700,
        },
      },
    },
  },
}));

export default AlertCloseButton;
