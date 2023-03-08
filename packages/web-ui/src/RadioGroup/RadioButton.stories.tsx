import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../Stack';
import { RadioButton } from './RadioButton';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Workshop: Story = {
  render: args => {
    return (
      <RadioGroup label="Favorite pet" defaultValue="dogs">
        <Stack spacing={2}>
          <RadioButton {...args} value="dogs">
            Dogs
          </RadioButton>
          <RadioButton {...args} value="cats">
            Cats
          </RadioButton>
        </Stack>
      </RadioGroup>
    );
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    disabled: false,
  },
};
