import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../Stack';
import { RadioButton } from './RadioButton';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioInput',
  component: RadioButton,
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Workshop: Story = {
  render: () => {
    return (
      <RadioGroup label="Favorite pet" defaultValue="dogs">
        <Stack spacing={2}>
          <RadioButton value="dogs">Dogs</RadioButton>
          <RadioButton value="cats">Cats</RadioButton>
        </Stack>
      </RadioGroup>
    );
  },
  argTypes: {},
  args: {},
};
