import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { Heading, HeadingProps, headingVariantMapping } from './Heading';
import { Box } from '../Box';
import { backgroundColors } from '../types';
import { Backgrounds } from '../storybook-utils';

const variants = Object.keys(headingVariantMapping);
const colors = ['primary', 'secondary'] as const;

const meta: Meta<typeof Heading> = {
  title: 'Web UI / Components / Heading',
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const KitchenSink: Story = {
  render: () => {
    return (
      <Backgrounds>
        <Stack spacing={4} direction="row">
          {variants.map(v => (
            <Stack key={v} spacing={2}>
              {colors.map(c => (
                <Heading
                  key={`${v}${c}`}
                  variant={v as HeadingProps['variant']}
                  component={headingVariantMapping[v] as React.ElementType<any>}
                  color={c}
                >
                  Hamburgefons
                </Heading>
              ))}
            </Stack>
          ))}
        </Stack>
      </Backgrounds>
    );
  },
};

export const Workshop: Story = {
  render: args => {
    return (
      <Stack spacing={0}>
        {backgroundColors.map(bg => (
          <Box key={bg} background={bg} display="flex" justifyContent="center" padding={4}>
            <Heading {...args} />
          </Box>
        ))}
      </Stack>
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
      options: colors,
      control: {
        type: 'radio',
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
    color: 'primary',
    textTransform: 'capitalize',
    gutterBottom: false,
    paragraph: false,
    noWrap: false,
  },
};

export const HeadingVariants: Story = {
  name: 'Variants',
  parameters: { layout: 'centered' },
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
