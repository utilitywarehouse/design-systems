import React, { ComponentProps, forwardRef } from 'react';
import { Pressable, type PressableProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-native-icons';
import { useAlertContext } from './Alert.context';
import { PressableRef } from '../../types';

const AlertIconButton = forwardRef<PressableRef, PressableProps>(({ children, ...props }, ref) => {
  const { styles } = useStyles(stylesheet);
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
  const { styles } = useStyles(stylesheet, { colorScheme });
  return <ChevronRightMediumIcon {...props} style={styles.icon} />;
};

AlertIconButton.displayName = 'AlertIconButton';
AlertIconButtonChevron.displayName = 'AlertIconButtonChevron';

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

export default AlertIconButton;
