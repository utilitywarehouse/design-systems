import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stack } from '../Stack';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/RadioInput',
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Workshop: Story = {
  render: args => {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };
    return (
      <Stack spacing={1} bgcolor="white" padding={4} alignItems="flex-start">
        <Radio
          {...args}
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
        />
        <Radio
          {...args}
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
        />
      </Stack>
    );
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: { disabled: false },
};
