import React from 'react';
import { Badge, BadgeText, BadgeIcon } from '@utilitywarehouse/native-ui';
import { AddSmallIcon } from '@utilitywarehouse/react-native-icons';
import { EmulatorRenderer } from '@storybook/native-components';
import { Platform } from 'react-native';

const BadgeBasic = ({ text = 'NEW FEATURE', icon = false, ...props }: any) => {
  return (
    <>
      {Platform.OS === 'web' ? (
        <EmulatorRenderer
          platform="ios"
          deepLinkBaseUrl="native-ui://"
          apiKey="w7k6nlib4xevw7fxrqp6now7iu"
          storyParams={{ component: 'components/Badge' }}
          extraParams={{ text, icon, ...props }}
        />
      ) : (
        <Badge {...props} gap="$1">
          <BadgeText>{text}</BadgeText>
          {icon && <BadgeIcon as={AddSmallIcon} />}
        </Badge>
      )}
    </>
  );
};

BadgeBasic.description =
  'This is a basic Badge component example. The badge component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default BadgeBasic;
