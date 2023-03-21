import type { Meta, StoryObj } from '@storybook/react';
import { RadioItem } from './RadioItem';
import { Box } from '../Box';

const meta: Meta<typeof RadioItem> = {
  title: 'Components/RadioGroup',
  component: RadioItem,
};

export default meta;
type Story = StoryObj<typeof RadioItem>;

export const RadioItemStory: Story = {
  name: 'RadioItem',
  render: args => {
    return (
      <Box background="white" padding={12} display="flex" justifyContent="center">
        <RadioItem {...args} />
      </Box>
    );
  },
  argTypes: {
    value: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    value: '1',
    disabled: false,
    children: 'Label',
    helperText: 'Helper text',
  },
};
