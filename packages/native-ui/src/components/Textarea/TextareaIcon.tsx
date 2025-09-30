/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ComponentType } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon, IconProps } from '../Icon';
import { useTextareaContext } from './Textarea.context';

const TextareaIcon = ({ children, ...props }: IconProps & { as?: ComponentType }) => {
  const { disabled } = useTextareaContext();
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

TextareaIcon.displayName = 'TextareaIcon';

const styles = StyleSheet.create(({ colors }) => ({
  icon: {
    color: colors.grey700,
    width: 24,
    height: 24,
    variants: {
      disabled: {
        true: {
          color: colors.grey400,
        },
      },
    },
  },
}));

export default TextareaIcon;
