import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { Box } from '../Box';
import { RadioGroup } from './RadioGroup';
import { Stack } from '../Stack';
import { Text, TextProps } from '../Text';

const meta: Meta<typeof Radio> = {
  title: 'Web UI / Components / RadioGroup',
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const RadioStory: Story = {
  name: 'Radio',
  render: args => {
    return (
      <Box bgcolor="white" padding={4}>
        <Stack spacing={4}>
          <RadioGroup value="2" label="Unchecked Radio">
            <Radio {...args} />
          </RadioGroup>

          <RadioGroup defaultValue={args.value} label="Checked Radio">
            <Radio {...args} />
          </RadioGroup>
        </Stack>
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

export const WithCustomRadio: Story = {
  name: 'Custom Radio label',
  render: () => {
    const CustomLabel = (props: { children: TextProps['children'] }) => (
      <Text {...props} variant="subtitle" component="span" bold />
    );
    return (
      <Box bgcolor="white" padding={4}>
        <RadioGroup defaultValue="1" label="Radio group label">
          <Radio value="1">
            <CustomLabel>One</CustomLabel>
          </Radio>
          <Radio value="2">
            <CustomLabel>Two</CustomLabel>
          </Radio>
        </RadioGroup>
      </Box>
    );
  },
};
