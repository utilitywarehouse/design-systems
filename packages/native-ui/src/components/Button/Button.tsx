import React from 'react';
import type { ButtonProps, ButtonWithStringChildrenProps } from './Button.props';
import ButtonTextComponent from './ButtonText';
import ButtonSpinnerComponent from './ButtonSpinner';
import ButtonIconComponent from './ButtonIcon';
import { createButton } from '@gluestack-ui/button';
import { View } from 'react-native';
import ButtonRoot from './ButtonRoot';

const ButtonComponent = createButton({
  Root: ButtonRoot,
  Group: View,
  Icon: ButtonIconComponent,
  Spinner: ButtonSpinnerComponent,
  Text: ButtonTextComponent,
});

export const ButtonText = ButtonComponent.Text;
export const ButtonSpinner = ButtonComponent.Spinner;
export const ButtonIcon = ButtonComponent.Icon;

const Button: React.FC<ButtonProps> = ({ children, disabled, isDisabled, ...props }) => {
  if (typeof children === 'string' || typeof children === 'number') {
    const { icon, loading, iconPosition = 'left' } = props as ButtonWithStringChildrenProps;
    return (
      <ButtonComponent {...props} isDisabled={loading || (disabled ?? isDisabled)}>
        {!!icon && !loading && iconPosition === 'left' ? <ButtonIcon as={icon} /> : null}
        {loading ? <ButtonSpinner /> : null}
        <ButtonText>{children}</ButtonText>
        {!!icon && !loading && iconPosition === 'right' ? <ButtonIcon as={icon} /> : null}
      </ButtonComponent>
    );
  }
  return (
    <ButtonComponent {...props} isDisabled={disabled ?? isDisabled}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
