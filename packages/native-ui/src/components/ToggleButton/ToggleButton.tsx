import { createButton } from '@gluestack-ui/button';
import { ToggleButtonProps } from './ToggleButton.props';
import ToggleButtonGroup from './ToggleButtonGroup';
import { useToggleButtonGroupContext } from './ToggleButtonGroup.context';
import ToggleButtonIconComponent from './ToggleButtonIcon';
import ToggleButtonRoot from './ToggleButtonRoot';
import ToggleButtonTextComponent from './ToggleButtonText';

const ToggleButtonComponent = createButton({
  Root: ToggleButtonRoot,
  Group: ToggleButtonGroup,
  Icon: ToggleButtonIconComponent,
  Spinner: () => null,
  Text: ToggleButtonTextComponent,
});

export const ToggleButton = ({ children, style, value, disabled, ...props }: ToggleButtonProps) => {
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
      {...props}
      onPress={handleOnPress}
      accessibilityState={{ checked: isActive }}
      accessibilityLabel={label}
      disabled={isDisabled}
      style={style}
      value={value}
    >
      {typeof children === 'string' ? <ToggleButtonText>{label}</ToggleButtonText> : children}
    </ToggleButtonComponent>
  );
};

ToggleButton.displayName = 'ToggleButton';

export const ToggleButtonText = ToggleButtonComponent.Text;
export const ToggleButtonIcon = ToggleButtonComponent.Icon;

ToggleButtonText.displayName = 'ToggleButtonText';
ToggleButtonIcon.displayName = 'ToggleButtonIcon';

export default ToggleButton;
