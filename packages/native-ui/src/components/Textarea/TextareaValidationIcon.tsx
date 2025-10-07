/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  TickMediumContainedIcon,
  WarningMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';
import { ComponentType } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon, IconProps } from '../Icon';
import { useTextareaContext } from './Textarea.context';

const TextareaIcon = ({ as, ...props }: IconProps & { as?: ComponentType }) => {
  const { disabled, validationStatus } = useTextareaContext();
  styles.useVariants({ disabled, validationStatus });
  const ValidationIcon =
    validationStatus === 'invalid' ? WarningMediumContainedIcon : TickMediumContainedIcon;
  return (
    <Icon
      {...props}
      as={as ?? ValidationIcon}
      style={
        Platform.OS === 'web'
          ? {
              ...styles.icon,
              ...(props.style as ViewStyle),
            }
          : [styles.icon as StyleProp<ViewStyle>, props.style]
      }
    />
  );
};

TextareaIcon.displayName = 'TextareaIcon';

const styles = StyleSheet.create(({ colors, space, colorMode }) => ({
  icon: {
    color: colors.grey700,
    width: 24,
    height: 24,
    paddingLeft: space['100'],
    variants: {
      validationStatus: {
        invalid: {
          color: colorMode === 'light' ? colors.red500 : colors.red700,
        },
        valid: {
          color: colorMode === 'light' ? colors.green500 : colors.green700,
        },
        initial: {},
      },
      disabled: {
        true: {
          color: colors.grey400,
        },
      },
    },
  },
}));

export default TextareaIcon;
