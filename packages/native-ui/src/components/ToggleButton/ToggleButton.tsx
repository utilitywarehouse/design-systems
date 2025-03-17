import React, { forwardRef, ReactNode } from 'react';
import { PressableRef } from '../../types';
import { useToggleButtonGroupContext } from './ToggleButtonGroup.context';
import { ToggleButtonProps } from './ToggleButton.props';
import ToggleButtonRoot from './ToggleButtonRoot';
import ToggleButtonTextComponent from './ToggleButtonText';
import ToggleButtonIconComponent from './ToggleButtonIcon';
import { createButton } from '@gluestack-ui/button';
import { View } from 'react-native';
import ToggleButtonGroup from './ToggleButtonGroup';

const ToggleButtonComponent = createButton({
  Root: ToggleButtonRoot,
  Group: ToggleButtonGroup,
  Icon: ToggleButtonIconComponent,
  Spinner: View,
  Text: ToggleButtonTextComponent,
});

export const ToggleButton = forwardRef<PressableRef, ToggleButtonProps>(
  ({ children, style, value, disabled, ...props }, ref) => {
    const {
      value: contextValue,
      onChange,
      disabled: contextDisabled,
    } = useToggleButtonGroupContext();

    const isDisabled = disabled || contextDisabled;

    const handleOnPress = () => {
      onChange?.(value);
    };

    const isActive = value === contextValue;

    const label = typeof children === 'string' ? children : '';

    return (
      <ToggleButtonComponent
        // @ts-expect-error - ref
        ref={ref}
        {...props}
        onPress={handleOnPress}
        accessibilityState={{ checked: isActive }}
        accessibilityLabel={label}
        disabled={isDisabled}
        style={style}
        value={value}
      >
        {typeof children === 'string' ? (
          <ToggleButtonText>{label}</ToggleButtonText>
        ) : (
          (children as ReactNode)
        )}
      </ToggleButtonComponent>
    );
  }
);

ToggleButton.displayName = 'ToggleButton';

export const ToggleButtonText = ToggleButtonComponent.Text;
export const ToggleButtonIcon = ToggleButtonComponent.Icon;

ToggleButtonText.displayName = 'ToggleButtonText';
ToggleButtonIcon.displayName = 'ToggleButtonIcon';

export default ToggleButton;
