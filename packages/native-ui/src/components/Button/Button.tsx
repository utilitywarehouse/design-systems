import { createButton } from '@gluestack-ui/button';
import type { ButtonProps, ButtonWithStringChildrenProps } from './Button.props';
import ButtonIconComponent from './ButtonIcon';
import ButtonSpinnerComponent from './ButtonSpinner';
import ButtonTextComponent from './ButtonText';

import { useButtonGroupContext } from './ButtonGroup.context';
import ButtonGroupRoot from './ButtonGroupRoot';
import ButtonRoot from './ButtonRoot';

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

const Button = ({
  children,
  disabled = false,
  isDisabled,
  pressed,
  text,
  ...props
}: ButtonProps) => {
  const { disabled: groupDisabled, loading: groupLoading } = useButtonGroupContext();
  const { loading } = props;
  const isLoading = loading ?? groupLoading;
  const buttonDisabled = isLoading || (disabled ?? groupDisabled ?? isDisabled);
  if (typeof children === 'string' || typeof children === 'number' || !children) {
    const { icon, iconPosition = 'left' } = props as ButtonWithStringChildrenProps;
    return (
      <ButtonComponent {...props} isDisabled={buttonDisabled} isPressed={pressed}>
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
};

Button.displayName = 'Button';

export default Button;
