import React from 'react';
import { Badge, BadgeText, BadgeIcon } from '@utilitywarehouse/native-ui';
import { AddSmallIcon } from '@utilitywarehouse/react-native-icons';

const BadgeBasic = ({ text = 'NEW FEATURE', ...props }: any) => {
  return (
    <Badge {...props} gap="$1">
      <BadgeText>{text}</BadgeText>
      <BadgeIcon as={AddSmallIcon} />
    </Badge>
  );
};

BadgeBasic.description =
  'This is a basic Badge component example. The badge component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default BadgeBasic;
