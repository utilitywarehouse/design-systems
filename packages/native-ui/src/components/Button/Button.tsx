import React from 'react';
import { Button as GSButton } from '@gluestack-ui/themed';
import type { ButtonProps, ButtonWithStringChildrenProps } from './Button.props';
import { ButtonText } from './ButtonText';
import { ButtonSpinner } from './ButtonSpinner';
import { ButtonIcon } from './ButtonIcon';

const Button: React.FC<ButtonProps> = ({ children, disabled, isDisabled, ...props }) => {
  if (typeof children === 'string' || typeof children === 'number') {
    const { icon, loading, iconPosition = 'left' } = props as ButtonWithStringChildrenProps;
    return (
      <GSButton {...props} isDisabled={loading || (disabled ?? isDisabled)}>
        {!!icon && !loading && iconPosition === 'left' ? <ButtonIcon as={icon} /> : null}
        {loading ? <ButtonSpinner /> : null}
        <ButtonText>{children}</ButtonText>
        {!!icon && !loading && iconPosition === 'right' ? <ButtonIcon as={icon} /> : null}
      </GSButton>
    );
  }
  return (
    <GSButton {...props} isDisabled={disabled ?? isDisabled}>
      {children}
    </GSButton>
  );
};

export default Button;
