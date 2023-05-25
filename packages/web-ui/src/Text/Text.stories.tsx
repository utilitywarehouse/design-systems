import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { Text } from './Text';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

const meta: Meta<typeof Text> = {
  title: 'Web UI / Components / Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

const sizes = ['lg', 'md', 'sm', 'xs'] as const;

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Stack spacing={1}>
        {sizes.map(size => (
          <Text key={size} size={size}>
            Text size {size}
          </Text>
        ))}
      </Stack>
    );
  },
};

export const Workshop: Story = {
  render: ({ color = 'brandMidnight', ...args }) => {
    return (
      <Text
        // @ts-ignore
        color={Object.keys(colorsCommon).includes(color) ? colorsCommon[color] : colors[color]}
        {...args}
      />
    );
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    component: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: sizes,
      control: {
        type: 'radio',
      },
    },
    color: {
      options: [...Object.keys(colorsCommon), ...Object.keys(colors)],
      control: {
        type: 'select',
      },
    },
    textTransform: {
      options: ['capitalize', 'uppercase', 'lowercase', 'none'],
      control: {
        type: 'radio',
      },
    },
    bold: { control: { type: 'boolean' } },
    align: { control: { type: 'text' } },
    noWrap: { control: { type: 'boolean' } },
  },
  args: {
    children: 'hamburgefons',
    size: 'md',
    component: 'span',
    color: undefined,
    bold: false,
    textTransform: 'capitalize',
  },
};

export const TextSizes: Story = {
  name: 'Sizes',
  render: () => {
    return (
      <Stack spacing={1}>
        <Text size="lg">hamburgefons (lg)</Text>
        <Text size="md">hamburgefons (md)</Text>
        <Text size="sm">hamburgefons (sm)</Text>
        <Text size="xs">hamburgefons (xs)</Text>
      </Stack>
    );
  },
};
