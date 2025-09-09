/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Platform, StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon } from '../Icon';
import IconProps from '../Icon/Icon.props';
import { useIconButtonContext } from './IconButton.context';

const IconButtonIcon = ({ children, ...props }: IconProps) => {
  const { colorScheme, variant, inverted, disabled, size } = useIconButtonContext();
  styles.useVariants({
    colorScheme,
    variant,
    inverted,
    disabled,
    size,
  });
  return (
    <Icon
      {...props}
      style={
        Platform.OS === 'web'
          ? (styles.icon as StyleProp<ViewStyle>)
          : [styles.icon as StyleProp<ViewStyle>, props.style]
      }
    >
      {children}
    </Icon>
  );
};

IconButtonIcon.displayName = 'IconButtonIcon';

const styles = StyleSheet.create(theme => ({
  icon: {
    variants: {
      colorScheme: {
        cyan: {},
        grey: {},
        red: {},
        green: {},
        gold: {},
      },
      disabled: {
        true: {},
      },
      inverted: {
        true: {},
      },
      active: {
        true: {},
      },
      variant: {
        solid: {},
        outline: {},
        ghost: {},
      },
      size: {
        'x-small': {
          width: 16,
          height: 16,
        },
        small: {
          width: 24,
          height: 24,
        },
        medium: {
          width: 24,
          height: 24,
        },
        large: {
          width: 24,
          height: 24,
        },
      },
    },
    compoundVariants: [
      {
        colorScheme: 'cyan',
        variant: 'solid',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.cyan1000 : theme.colors.cyan50,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'solid',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.cyan100 : theme.colors.cyan400,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'solid',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.cyan300 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'outline',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.cyan1000 : theme.colors.cyan900,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'outline',
        inverted: true,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.cyan100 : theme.colors.cyan900,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'outline',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.cyan600 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'outline',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.cyan300 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'ghost',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.colors.cyan600,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'ghost',
        inverted: true,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.cyan400 : theme.colors.cyan600,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'ghost',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.cyan600 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'ghost',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.cyan300 : theme.colors.grey400,
        },
      },
      // Red
      {
        colorScheme: 'red',
        variant: 'solid',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.white : theme.colors.red50,
        },
      },
      {
        colorScheme: 'red',
        variant: 'solid',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.red100 : theme.colors.red400,
        },
      },
      {
        colorScheme: 'red',
        variant: 'solid',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.red300 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'red',
        variant: 'outline',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.colors.red900,
        },
      },
      {
        colorScheme: 'red',
        variant: 'outline',
        inverted: true,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.red100 : theme.colors.red900,
        },
      },
      {
        colorScheme: 'red',
        variant: 'outline',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.red600 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'red',
        variant: 'outline',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.red300 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'red',
        variant: 'ghost',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.colors.red600,
        },
      },
      {
        colorScheme: 'red',
        variant: 'ghost',
        inverted: true,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.red400 : theme.colors.red600,
        },
      },
      {
        colorScheme: 'red',
        variant: 'ghost',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.red600 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'red',
        variant: 'ghost',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.red300 : theme.colors.grey400,
        },
      },
      // Green
      {
        colorScheme: 'green',
        variant: 'solid',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.white : theme.colors.green50,
        },
      },
      {
        colorScheme: 'green',
        variant: 'solid',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.green100 : theme.colors.green400,
        },
      },
      {
        colorScheme: 'green',
        variant: 'solid',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.green300 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'green',
        variant: 'outline',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.colors.green900,
        },
      },
      {
        colorScheme: 'green',
        variant: 'outline',
        inverted: true,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.green100 : theme.colors.green900,
        },
      },
      {
        colorScheme: 'green',
        variant: 'outline',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.green600 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'green',
        variant: 'outline',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.green300 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'green',
        variant: 'ghost',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.green700 : theme.colors.green600,
        },
      },
      {
        colorScheme: 'green',
        variant: 'ghost',
        inverted: true,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.green400 : theme.colors.green600,
        },
      },
      {
        colorScheme: 'green',
        variant: 'ghost',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.green600 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'green',
        variant: 'ghost',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.green300 : theme.colors.grey400,
        },
      },
      // Gold
      {
        colorScheme: 'gold',
        variant: 'solid',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.white : theme.colors.gold50,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'solid',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.gold100 : theme.colors.gold400,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'solid',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.gold300 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'outline',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.colors.gold900,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'outline',
        inverted: true,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.gold100 : theme.colors.gold900,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'outline',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.gold600 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'outline',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.gold300 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'ghost',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.gold700 : theme.colors.gold600,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'ghost',
        inverted: true,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.gold400 : theme.colors.gold600,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'ghost',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.gold600 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'ghost',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.gold300 : theme.colors.grey400,
        },
      },
      // Grey
      {
        colorScheme: 'grey',
        variant: 'solid',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.white : theme.colors.grey50,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'solid',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.grey100 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'solid',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.grey300 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'outline',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.colors.grey900,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'outline',
        inverted: true,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.grey100 : theme.colors.grey900,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'outline',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.grey600 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'outline',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.grey300 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'ghost',
        inverted: false,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.grey700 : theme.colors.grey600,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'ghost',
        inverted: true,
        disabled: false,
        styles: {
          color: theme.isLight ? theme.colors.grey400 : theme.colors.grey600,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'ghost',
        inverted: true,
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.grey600 : theme.colors.grey400,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'ghost',
        disabled: true,
        styles: {
          color: theme.isLight ? theme.colors.grey300 : theme.colors.grey400,
        },
      },
    ],
  },
}));

export default IconButtonIcon;
