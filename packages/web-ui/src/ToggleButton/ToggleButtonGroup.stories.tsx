import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ToggleButton from './ToggleButton';
import ToggleButtonGroup from './ToggleButtonGroup';

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'Components/ToggleButtonGroup',
  component: ToggleButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ToggleButtonGroup>;

export const Workshop: Story = {
  parameters: { layout: 'centered' },
  render: args => {
    const [option, setOption] = useState<string | null>('option-1');

    const handleOption = (event: React.MouseEvent<HTMLElement>, newOption: string | null) => {
      if (newOption !== null) {
        setOption(newOption);
      }
    };

    return (
      <ToggleButtonGroup {...args} value={option} onChange={handleOption}>
        <ToggleButton value="option-1">Option 1</ToggleButton>
        <ToggleButton value="option-2">Option 2</ToggleButton>
        <ToggleButton value="option-3">Option 3</ToggleButton>
      </ToggleButtonGroup>
    );
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    disabled: false,
  },
};
