import React, { FC } from 'react';
import { Root, Icon } from './styled-components';
import { createButton } from '@gluestack-ui/button';
import { Spinner } from '../Spinner';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AccessibleButton: any = createButton({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  Root,
  Icon,
  Group: () => null,
  Text: () => null,
  Spinner,
});

export interface IconButtonProps extends React.ComponentProps<typeof AccessibleButton> {
  /*
   * The icon to display on the button.
   * @default undefined
   */
  icon: React.ElementType;
  /*
   * If `true`, the button will show a spinner.
   * @default  false
   */
  loading?: boolean;
  /*
   * If `true`, the button will be disabled.
   * @default  false
   */
  disabled?: boolean;
}

const IconButton: FC<IconButtonProps> = ({ loading, icon, disabled, isDisabled, ...props }) => {
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <AccessibleButton {...props} isDisabled={disabled ?? isDisabled}>
      {loading ? (
        <AccessibleButton.Spinner size={getSize(props.size)} color="" />
      ) : (
        <AccessibleButton.Icon as={icon} />
      )}
    </AccessibleButton>
  );
};

export default IconButton;
