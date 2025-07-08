/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentType } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon, IconProps } from '../../Icon';
import { useListItemContext } from './ListItem.context';

const ListItemIcon = ({ children, ...props }: IconProps & { as?: ComponentType }) => {
  const { disabled } = useListItemContext();
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

ListItemIcon.displayName = 'ListItemIcon';

const styles = StyleSheet.create(theme => ({
  icon: {
    color: theme.colors.grey800,
    width: 24,
    height: 24,
    variants: {
      disabled: {
        true: {
          color: theme.colorMode === 'light' ? theme.colors.grey400 : theme.colors.grey500,
        },
      },
    },
  },
}));

export default ListItemIcon;
