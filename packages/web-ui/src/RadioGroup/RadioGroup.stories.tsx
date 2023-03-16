import type { Meta, StoryObj } from '@storybook/react';
import { RadioItem } from './RadioItem';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Workshop: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/HPzggfc5IHQRZp2q2xQMiH/Design-System-%5BPreliminary-Work%5D?node-id=12-659&t=9l2avF7liTN710K2-0',
    },
  },
  render: args => {
    return (
      <RadioGroup label="Favorite pet" defaultValue="dogs" {...args}>
        <RadioItem value="dogs">Dogs</RadioItem>
        <RadioItem value="cats">Cats</RadioItem>
      </RadioGroup>
    );
  },
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: { type: 'radio' },
    },
  },
  // args: {
  //   disabled: false,
  // },
};
