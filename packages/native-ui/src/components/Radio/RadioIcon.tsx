/* eslint-disable @typescript-eslint/no-unsafe-assignment  */
import { Platform } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon } from '../Icon';
import IconProps from '../Icon/Icon.props';
import { CircleIcon } from '../Icons';
import { useRadioContext } from './Radio.context';

const RadioIcon = ({ style, ...props }: IconProps) => {
  const { disabled } = useRadioContext();
  styles.useVariants({ disabled });

  return (
    <Icon
      as={CircleIcon}
      {...props}
      style={Platform.OS === 'web' ? styles.container : [styles.container, style]}
    />
  );
};

RadioIcon.displayName = 'RadioIcon';

const styles = StyleSheet.create(theme => ({
  container: {
    width: 14,
    height: 14,
    borderRadius: theme.radii.full,
    color: theme.colorMode === 'dark' ? theme.colors.cyan700 : theme.colors.cyan500,
    variants: {
      disabled: {
        true: {
          color: theme.colorMode === 'dark' ? theme.colors.grey400 : theme.colors.grey400,
        },
      },
    },
  },
}));

export default RadioIcon;
