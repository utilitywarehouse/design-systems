import { type StyleProp, type ViewProps, type ViewStyle, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const ButtonGroupRoot = ({
  children,
  attached = false,
  flexDirection = 'row',
  reversed = false,
  space = 'md',
  ...props
}: ViewProps & {
  flexDirection?: ViewStyle['flexDirection'];
  reversed?: boolean;
  attached?: boolean;
  space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}) => {
  let direction = flexDirection;
  if (reversed) {
    if (flexDirection === 'row') direction = 'row-reverse';
    if (flexDirection === 'column') direction = 'column-reverse';
    if (flexDirection === 'row-reverse') direction = 'row';
    if (flexDirection === 'column-reverse') direction = 'column';
  }
  styles.useVariants({
    attached,
    space,
  });
  return (
    <View
      {...props}
      style={[styles.text, styles.extraStyles(direction) as StyleProp<ViewStyle>, props.style]}
    >
      {children}
    </View>
  );
};

ButtonGroupRoot.displayName = 'ButtonGroupRoot';

const styles = StyleSheet.create(theme => ({
  text: {
    variants: {
      space: {
        xs: {
          gap: theme.space['50'],
        },
        sm: {
          gap: theme.space['100'],
        },
        md: {
          gap: theme.space['150'],
        },
        lg: {
          gap: theme.space['200'],
        },
        xl: {
          gap: theme.space['250'],
        },
        '2xl': {
          gap: theme.space['300'],
        },
        '3xl': {
          gap: theme.space['350'],
        },
        '4xl': {
          gap: theme.space['400'],
        },
      },
      attached: {
        true: {
          gap: 0,
        },
      },
    },
  },
  extraStyles: (flexDirection: ViewStyle['flexDirection']) => ({ flexDirection }),
}));

export default ButtonGroupRoot;
