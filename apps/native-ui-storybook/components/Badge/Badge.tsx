import React from 'react';
import { Badge, BadgeText, BadgeIcon } from '@utilitywarehouse/native-ui';
import { AddSmallIcon } from '@utilitywarehouse/react-native-icons';
import { Meta, StoryFn } from '@storybook/react';

const BadgeBasic: StoryFn = ({ text = 'NEW FEATURE', icon = false, ...props }: any) => {
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
} as Meta<typeof Badge>['argTypes'];

BadgeBasic.args = {
  text: 'New Feature',
  strong: false,
  borderless: false,
  colorScheme: 'cyan',
  size: 'large',
} as Meta<typeof Badge>['args'];

export default BadgeBasic;
