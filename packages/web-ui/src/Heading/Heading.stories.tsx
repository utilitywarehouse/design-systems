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

const variants = ['displayHeading', 'h1', 'h2', 'h3', 'h4'] as const;

export const KitchenSink: Story = {
  render: () => {
    return (
      <Stack spacing={1}>
        {variants.map(variant => (
          <Heading key={variant} variant={variant}>
            Heading variant: {variant}
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
    variant: {
      options: variants,
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
    variant: 'h2',
    component: 'h2',
    color: undefined,
    textTransform: 'capitalize',
  },
};

export const HeadingVariants: Story = {
  name: 'Variants',
  render: () => {
    return (
      <Stack spacing={1}>
        <Heading variant="displayHeading" noWrap>
          hamburgefons (displayHeading)
        </Heading>
        <Heading variant="h1">hamburgefons (h1)</Heading>
        <Heading variant="h2">hamburgefons (h2)</Heading>
        <Heading variant="h3">hamburgefons (h3)</Heading>
        <Heading variant="h4">hamburgefons (h4)</Heading>
      </Stack>
    );
  },
};
