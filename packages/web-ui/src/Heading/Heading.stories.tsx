import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import Heading, { HeadingProps, headingVariantMapping } from './Heading';
import Box from '../Box';
import { backgroundColors } from '../types';

const variants = Object.keys(headingVariantMapping);
const colors = ['primary', 'secondary'] as const;

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const KitchenSink: Story = {
  render: () => {
    return (
      <Stack spacing={0}>
        {backgroundColors.map(bg => (
          <Box key={bg} background={bg} display="flex" justifyContent="center" padding={4}>
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
          </Box>
        ))}
      </Stack>
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
