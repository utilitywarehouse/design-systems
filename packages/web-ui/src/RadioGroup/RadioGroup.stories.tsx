import type { Meta, StoryObj } from '@storybook/react';
import { RadioItem } from './RadioItem';
import { RadioGroup } from './RadioGroup';
import { Box } from '../Box';

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
      <Box background="white" padding={12} display="flex" justifyContent="center">
        <RadioGroup label="Label" helperText="RadioGroup helper text" {...args}>
          <RadioItem value="1" helperText="One helper text">
            One
          </RadioItem>
          <RadioItem value="2" helperText="Two helper text">
            Two
          </RadioItem>
          <RadioItem value="3" helperText="Three helper text">
            Three
          </RadioItem>
        </RadioGroup>
      </Box>
    );
  },
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: { type: 'radio' },
    },
    validationState: {
      options: [undefined, 'valid', 'invalid'],
      control: { type: 'radio' },
    },
  },
  args: {
    errorMessage: 'There is an error',
    validationState: undefined,
    //   disabled: false,
  },
};
