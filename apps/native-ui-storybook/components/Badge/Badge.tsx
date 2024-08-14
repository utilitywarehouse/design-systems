import React from 'react';
import { Badge, BadgeText, BadgeIcon } from '@utilitywarehouse/native-ui';
import { AddSmallIcon } from '@utilitywarehouse/react-native-icons';
import { StoryFn } from '@storybook/react';

const BadgeBasic: StoryFn<{
  text: string;
  icon: boolean;
  colorScheme: 'cyan' | 'red' | 'green' | 'gold' | 'grey';
  borderless: boolean;
  strong: boolean;
  size: 'large' | 'small';
}> = ({ text = 'NEW FEATURE', icon = false, ...props }) => {
  return (
    <Badge {...props}>
      <BadgeText>{text}</BadgeText>
      {icon && <BadgeIcon as={AddSmallIcon} />}
    </Badge>
  );
};

BadgeBasic.argTypes = {
  colorScheme: {
    control: 'select',
    options: ['cyan', 'red', 'green', 'gold', 'grey'],
  },
  borderless: {
    control: 'boolean',
  },
  strong: {
    control: 'boolean',
  },
  size: {
    control: 'select',
    options: ['large', 'small'],
  },
  text: {
    control: 'text',
  },
};

BadgeBasic.args = {
  text: 'New Feature',
  strong: false,
  borderless: false,
  colorScheme: 'cyan',
  size: 'large',
};

export default BadgeBasic;
