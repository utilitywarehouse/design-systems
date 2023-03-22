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

const argTypes = {
  direction: {
    options: ['column', 'row'],
    control: { type: 'radio' },
  },
  error: { control: { type: 'boolean' } },
  defaultValue: { control: { type: 'text' } },
  helperText: { control: { type: 'text' } },
  label: { control: { type: 'text' } },
  errorMessage: { control: { type: 'text' } },
  disabled: { control: { type: 'boolean' } },
  isReadOnly: { control: { type: 'boolean' } },
};
const args = {
  defaultValue: '1',
  errorMessage: 'There is an error',
  disabled: false,
  error: false,
  label: 'Label',
  helperText: 'RadioGroup Helper text',
};

export const Workshop: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI---MASTER?node-id=902-9379&t=XTterR22jM1rC0Xr-0',
    },
  },
  render: a => {
    return (
      <Box background="white" padding={4}>
        <RadioGroup {...a}>
          <RadioItem value="1">One</RadioItem>
          <RadioItem value="2">Two</RadioItem>
          <RadioItem value="3">Three</RadioItem>
        </RadioGroup>
      </Box>
    );
  },
  argTypes,
  args,
};

export const WithRadioItemHelperText: Story = {
  name: 'With RadioItem HelperText',
  render: a => {
    return (
      <Box background="white" padding={4}>
        <RadioGroup {...a}>
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
  argTypes,
  args,
};
