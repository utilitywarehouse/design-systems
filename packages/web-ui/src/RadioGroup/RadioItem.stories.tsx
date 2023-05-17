import type { Meta, StoryObj } from '@storybook/react';
import { RadioItem } from './RadioItem';
import { Box } from '../Box';
import { RadioGroup } from './RadioGroup';
import { Stack } from '../Stack';
import { Text, TextProps } from '../Text';

const meta: Meta<typeof RadioItem> = {
  title: 'Web UI / Components / RadioGroup',
  component: RadioItem,
};

export default meta;
type Story = StoryObj<typeof RadioItem>;

export const RadioItemStory: Story = {
  name: 'RadioItem',
  render: args => {
    return (
      <Box bgcolor="white" padding={4}>
        <Stack spacing={4}>
          <RadioGroup value="2" label="Unchecked RadioItem">
            <RadioItem {...args} />
          </RadioGroup>

          <RadioGroup defaultValue={args.value} label="Checked RadioItem">
            <RadioItem {...args} />
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

export const WithCustomRadioItemLabel: Story = {
  name: 'Custom RadioItem label',
  render: () => {
    const CustomLabel = (props: { children: TextProps['children'] }) => (
      <Text {...props} variant="subtitle" component="span" bold />
    );
    return (
      <Box bgcolor="white" padding={4}>
        <RadioGroup defaultValue="1" label="Radio group label">
          <RadioItem value="1">
            <CustomLabel>One</CustomLabel>
          </RadioItem>
          <RadioItem value="2">
            <CustomLabel>Two</CustomLabel>
          </RadioItem>
        </RadioGroup>
      </Box>
    );
  },
};
