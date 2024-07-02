import React, { FC } from 'react';
import { Root, Icon } from './styled-components';
import { createButton } from '@gluestack-ui/button';
import { Spinner } from '../Spinner';

const AccessbileButton = createButton({
  Root,
  Icon,
  Group: () => null,
  Text: () => null,
  Spinner,
});

interface IconButtonProps extends React.ComponentProps<typeof AccessbileButton> {
  icon: React.ElementType;
  loading?: boolean;
}

const IconButton: FC<IconButtonProps> = ({ loading, icon, ...props }) => {
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
    <AccessbileButton {...props}>
      {loading ? (
        <AccessbileButton.Spinner size={getSize(props.size)} color="" />
      ) : (
        <AccessbileButton.Icon as={icon} />
      )}
    </AccessbileButton>
  );
};

export default IconButton;
