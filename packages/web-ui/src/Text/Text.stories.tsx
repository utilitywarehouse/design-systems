import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { Text, TextProps, textVariantMapping } from './Text';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

const variants = Object.keys(textVariantMapping);

const meta: Meta<typeof Text> = {
  title: 'Web UI / Components / Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Stack spacing={4}>
        {variants.map(v => (
          <Text key={v} component="span" variant={v as TextProps['variant']}>
            Hamburgefons
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
    variant: 'body',
    component: 'span',
    color: undefined,
    bold: false,
    textTransform: 'capitalize',
    gutterBottom: false,
    paragraph: false,
    noWrap: false,
  },
};

export const TextVariants: Story = {
  name: 'Variants',
  render: () => {
    return (
      <Stack spacing={1}>
        <Text component="span" variant="subtitle">
          subtitle
        </Text>
        <Text component="span" variant="body">
          body
        </Text>
        <Text component="span" variant="legalNote">
          legalNote
        </Text>
        <Text component="span" variant="caption">
          caption
        </Text>
      </Stack>
    );
  },
};
