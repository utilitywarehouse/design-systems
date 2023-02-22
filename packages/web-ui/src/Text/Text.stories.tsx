import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import Text, { TextProps, textVariantMapping } from './Text';
import { Backgrounds } from '../storybook-utils';

const variants = Object.keys(textVariantMapping);
const colors = ['primary', 'success', 'error'] as const;

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Backgrounds>
        <Stack spacing={4} direction="row">
          {variants.map(v => (
            <Stack key={v} spacing={2}>
              {colors.map(c => (
                <Text
                  key={`${v}${c}`}
                  component="span"
                  variant={v as TextProps['variant']}
                  color={c}
                >
                  Hamburgefons
                </Text>
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
      <Backgrounds>
        <Text {...args} />
      </Backgrounds>
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
    variant: 'body',
    component: 'h2',
    color: 'primary',
    bold: false,
    textTransform: 'capitalize',
    gutterBottom: false,
    paragraph: false,
    noWrap: false,
  },
};
