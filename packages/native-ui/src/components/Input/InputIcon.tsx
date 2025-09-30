/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ComponentType } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon, IconProps } from '../Icon';
import { useInputContext } from './Input.context';

const InputIcon = ({ children, ...props }: IconProps & { as?: ComponentType }) => {
  const { disabled } = useInputContext();
  styles.useVariants({ disabled });
  return (
    <Icon
      {...props}
      style={
        Platform.OS === 'web'
          ? {
              ...styles.icon,
              ...(props.style as ViewStyle),
            }
          : [styles.icon as StyleProp<ViewStyle>, props.style]
      }
    >
      {children}
    </Icon>
  );
};

InputIcon.displayName = 'InputIcon';

const styles = StyleSheet.create(theme => ({
  icon: {
    color: theme.colors.grey700,
    width: 24,
    height: 24,
    variants: {
      disabled: {
        true: {
          color: theme.colors.grey400,
        },
      },
    },
  },
}));

export default InputIcon;
