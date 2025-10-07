import { PropsWithChildren, useMemo } from 'react';
import { Pressable, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ToggleButtonContext } from './ToggleButton.context';
import { ToggleButtonProps } from './ToggleButton.props';
import { useToggleButtonGroupContext } from './ToggleButtonGroup.context';

const ToggleButtonRoot = ({
  children,
  disabled = false,
  value,
  ...props
}: PropsWithChildren<ToggleButtonProps>) => {
  const { size } = useToggleButtonGroupContext();
  styles.useVariants({ size });

  const contextValue = useMemo(() => ({ value, disabled }), [value, disabled]);
  const slopArea = size === 'small' ? 6 : 2;

  return (
    <ToggleButtonContext.Provider value={contextValue}>
      <Pressable
        {...props}
        disabled={disabled}
        hitSlop={{ top: slopArea, bottom: slopArea, left: 0, right: 0 }}
        style={[styles.container, props.style as ViewStyle]}
      >
        {children}
      </Pressable>
    </ToggleButtonContext.Provider>
  );
};

ToggleButtonRoot.displayName = 'ToggleButtonRoot';

const styles = StyleSheet.create(({ borderRadius, space }) => ({
  container: {
    borderRadius: borderRadius.full,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: space['100'],
    paddingHorizontal: space['200'],
    flexGrow: 1,
    backgroundColor: 'transparent',
    zIndex: 1,
    variants: {
      size: {
        small: {
          gap: space['50'],
          height: 28,
        },
        base: {
          gap: space['100'],
          height: 36,
        },
      },
    },
  },
}));

export default ToggleButtonRoot;
