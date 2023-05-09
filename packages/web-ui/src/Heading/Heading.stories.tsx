import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { Heading, HeadingProps, headingVariantMapping } from './Heading';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

const variants = Object.keys(headingVariantMapping);

const meta: Meta<typeof Heading> = {
  title: 'Web UI / Components / Heading',
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const KitchenSink: Story = {
  render: () => {
    return (
      <Stack spacing={4}>
        {variants.map(v => (
          <Heading
            key={v}
            variant={v as HeadingProps['variant']}
            component={headingVariantMapping[v] as React.ElementType<any>}
          >
            Hamburgefons
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
    gutterBottom: false,
    paragraph: false,
    noWrap: false,
  },
};

export const HeadingVariants: Story = {
  name: 'Variants',
  render: () => {
    return (
      <Stack spacing={1}>
        <Heading component="h1" variant="displayHeading">
          displayHeading
        </Heading>
        <Heading component="h1" variant="h1">
          h1
        </Heading>
        <Heading component="h2" variant="h2">
          h2
        </Heading>
        <Heading component="h3" variant="h3">
          h3
        </Heading>
        <Heading component="h4" variant="h4">
          h4
        </Heading>
      </Stack>
    );
  },
};
