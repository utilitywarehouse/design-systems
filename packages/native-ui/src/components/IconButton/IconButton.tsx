import React, { FC } from 'react';
import { createButton } from '@gluestack-ui/button';
import { IconButtonProps } from './IconButton.props';
import IconButtonRootComponent from './IconButtonRoot';
import IconButtonIconComponent from './IconButtonIcon';
import IconButtonSpinerComponent from './IconButtonSpinner';
import { useButtonGroupContext } from '../Button/ButtonGroup.context';

const IconButtonComponent = createButton({
  Root: IconButtonRootComponent,
  Icon: IconButtonIconComponent,
  Group: () => null,
  Text: () => null,
  Spinner: IconButtonSpinerComponent,
});

const IconButtonSpinner = IconButtonComponent.Spinner;
const IconButtonIcon = IconButtonComponent.Icon;

IconButtonSpinner.displayName = 'IconButtonSpinner';
IconButtonIcon.displayName = 'IconButtonIcon';

const IconButton: FC<IconButtonProps> = ({ icon, disabled, pressed, ...props }) => {
  const { disabled: groupDisabled, loading: groupLoading } = useButtonGroupContext();
  const { loading } = props;
  const isLoading = loading ?? groupLoading;
  const buttonDisabled = isLoading || (disabled ?? groupDisabled);
  const getSize = (size: IconButtonProps['size']) => {
    switch (size) {
      case 'x-small':
        return 'xs';
      case 'small':
        return 'xs';
      default:
        return 'sm';
    }
  };
  return (
    <IconButtonComponent {...props} isDisabled={buttonDisabled} isPressed={pressed}>
      {loading ? (
        <IconButtonSpinner size={getSize(props.size)} color="" />
      ) : (
        <IconButtonIcon as={icon} />
      )}
    </IconButtonComponent>
  );
};

export default IconButton;
