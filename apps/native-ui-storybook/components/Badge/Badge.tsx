import React from 'react';
import { Badge, BadgeText } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';

const BadgeBasic: StoryFn<{
  text: string;
  colorScheme: 'cyan' | 'red' | 'green' | 'gold' | 'grey';
  borderless: boolean;
  strong: boolean;
  size: 'large' | 'small';
}> = ({ text = 'NEW FEATURE', ...props }) => {
  return (
    <Badge {...props}>
      <BadgeText>{text}</BadgeText>
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
