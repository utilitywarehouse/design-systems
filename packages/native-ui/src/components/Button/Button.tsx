import React, { forwardRef } from 'react';
import type { ButtonProps, ButtonWithStringChildrenProps } from './Button.props';
import ButtonTextComponent from './ButtonText';
import ButtonSpinnerComponent from './ButtonSpinner';
import ButtonIconComponent from './ButtonIcon';
import { createButton } from '@gluestack-ui/button';

import ButtonRoot from './ButtonRoot';
import ButtonGroupRoot from './ButtonGroupRoot';
import { useButtonGroupContext } from './ButtonGroup.context';
import { PressableRef } from '../../types';

const ButtonComponent = createButton({
  Root: ButtonRoot,
  Group: ButtonGroupRoot,
  Icon: ButtonIconComponent,
  Spinner: ButtonSpinnerComponent,
  Text: ButtonTextComponent,
});

export const ButtonText = ButtonComponent.Text;
export const ButtonSpinner = ButtonComponent.Spinner;
export const ButtonIcon = ButtonComponent.Icon;
export const ButtonGroupComponent = ButtonComponent.Group;

ButtonText.displayName = 'ButtonText';
ButtonSpinner.displayName = 'ButtonSpinner';
ButtonIcon.displayName = 'ButtonIcon';

const Button = forwardRef<PressableRef, ButtonProps>(
  ({ children, disabled = false, isDisabled, pressed, text, ...props }, ref) => {
    const { disabled: groupDisabled, loading: groupLoading } = useButtonGroupContext();
    const { loading } = props;
    const isLoading = loading ?? groupLoading;
    const buttonDisabled = isLoading || (disabled ?? groupDisabled ?? isDisabled);
    if (typeof children === 'string' || typeof children === 'number' || !children) {
      const { icon, iconPosition = 'left' } = props as ButtonWithStringChildrenProps;
      return (
        <ButtonComponent
          // @ts-expect-error - ref
          ref={ref}
          {...props}
          isDisabled={buttonDisabled}
          isPressed={pressed}
        >
          {!!icon && !isLoading && iconPosition === 'left' ? <ButtonIcon as={icon} /> : null}
          {isLoading ? <ButtonSpinner /> : null}
          <ButtonText>{children ?? text}</ButtonText>
          {!!icon && !isLoading && iconPosition === 'right' ? <ButtonIcon as={icon} /> : null}
        </ButtonComponent>
      );
    }
    return (
      <ButtonComponent {...props} isDisabled={buttonDisabled}>
        {children}
      </ButtonComponent>
    );
  }
);

Button.displayName = 'Button';

export default Button;
