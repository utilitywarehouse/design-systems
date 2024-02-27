import React from 'react';
import { Alert, AlertIcon, AlertText, VStack, Icon } from '@utilitywarehouse/native-ui';

const AlertBasic = ({ link, dismissable, iconButton, ...props }: any) => {
  const handlePressLink = () => {
    alert('Link Pressed!');
  };

  const handlePressIconButton = () => {
    alert('Icon Button Pressed!');
  };

  const handleClose = () => {
    alert('Alert Dismissed!');
  };
  return (
    <Alert
      onPressLink={!iconButton && link && handlePressLink}
      onPressIconButton={iconButton && handlePressIconButton}
      onClose={dismissable && handleClose}
      {...props}
    />
  );
};

AlertBasic.description =
  'This is a basic Alert component example. Alerts are used to communicate a state that affects a system, feature or page';

export default AlertBasic;

export { Alert, AlertIcon, AlertText, Icon, VStack };
