import { Platform, StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon } from '../Icon';
import IconProps from '../Icon/Icon.props';
import { useHelperContext } from './HelperContext';

const HelperIcon = ({ style, ...props }: IconProps) => {
  const { validationStatus, disabled } = useHelperContext();
  styles.useVariants({ validationStatus, disabled });

  return (
    <Icon
      style={
        Platform.OS === 'web'
          ? {
              ...styles.icon,
              ...(style as ViewStyle),
            }
          : [styles.icon as StyleProp<ViewStyle>, style]
      }
      {...props}
    />
  );
};

HelperIcon.displayName = 'HelperIcon';

const styles = StyleSheet.create(({ colors }) => ({
  icon: {
    color: colors.grey800,
    variants: {
      validationStatus: {
        valid: {
          color: colors.green600,
        },
        invalid: {
          color: colors.red600,
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

export default HelperIcon;
