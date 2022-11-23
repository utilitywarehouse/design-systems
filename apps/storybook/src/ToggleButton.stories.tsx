import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ToggleButtonGroup, ToggleButton } from '../../src';
import { BackgroundStack } from '../utils';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    forwardedRef: { table: { disable: true } },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    disabled: false,
  },
} as Meta;

export const ToggleButtonStory: Story = args => {
  const [option, setOption] = React.useState<string | null>('option-1');

  const handleOption = (event: React.MouseEvent<HTMLElement>, newOption: string | null) => {
    if (newOption !== null) {
      setOption(newOption);
    }
  };

  return (
    <BackgroundStack>
      <ToggleButtonGroup {...args} value={option} onChange={handleOption}>
        <ToggleButton value="option-1">Option 1</ToggleButton>
        <ToggleButton value="option-2">Option 2</ToggleButton>
        <ToggleButton value="option-3">Option 3</ToggleButton>
      </ToggleButtonGroup>
    </BackgroundStack>
  );
};
ToggleButtonStory.storyName = 'Toggle Button';
