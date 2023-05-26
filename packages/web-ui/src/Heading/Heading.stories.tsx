import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { Heading } from './Heading';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

const meta: Meta<typeof Heading> = {
  title: 'Web UI / Components / Heading',
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

const sizes = ['xl', 'lg', 'md', 'sm', 'xs'] as const;

export const KitchenSink: Story = {
  render: () => {
    return (
      <Stack spacing={1}>
        {sizes.map(size => (
          <Heading key={size} size={size}>
            Heading size {size}
          </Heading>
        ))}
      </Stack>
    );
  },
};

export const Workshop: Story = {
  render: ({ color = 'brandPrimaryPurple', ...args }) => {
    return (
      <Heading
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
  },
  args: {
    children: 'hamburgefons',
    size: 'md',
    component: 'h2',
    color: undefined,
    textTransform: 'capitalize',
    noWrap: false,
  },
};

export const HeadingSizes: Story = {
  name: 'Sizes',
  render: () => {
    return (
      <Stack spacing={1}>
        <Heading size="xl">hamburgefons (xl)</Heading>
        <Heading size="lg">hamburgefons (lg)</Heading>
        <Heading size="md">hamburgefons (md)</Heading>
        <Heading size="sm">hamburgefons (sm)</Heading>
        <Heading size="xs">hamburgefons (xs)</Heading>
      </Stack>
    );
  },
};
