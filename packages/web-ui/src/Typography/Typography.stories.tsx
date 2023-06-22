import type { Meta, StoryObj } from '@storybook/react';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { Backgrounds } from '../storybook-utils';
import { headingVariantMapping, textVariantMapping, Typography } from './Typography';

const textVariants = Object.keys(textVariantMapping);
const headingVariants = Object.keys(headingVariantMapping);

const meta: Meta<typeof Typography> = {
  title: 'Web UI / Components / Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Workshop: Story = {
  argTypes: {
    color: {
      control: {
        type: 'text',
      },
    },
    letterSpacing: {
      control: {
        type: 'text',
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
    component: 'span',
    color: colorsCommon.brandPrimaryPurple,
    textTransform: 'capitalize',
  },
};

export const LegacyVariants: Story = {
  name: 'Deprecated Legacy Variants',
  parameters: { layout: 'fullscreen' },
  render: args => (
    <Backgrounds>
      <Typography {...args} />
    </Backgrounds>
  ),
  argTypes: {
    variant: {
      options: [...headingVariants, ...textVariants],
      control: {
        type: 'radio',
      },
    },
    color: { options: ['primary', 'secondary', 'success', 'error'], control: { type: 'radio' } },
    textTransform: {
      options: ['capitalize', 'uppercase', 'lowercase', 'none'],
      control: {
        type: 'radio',
      },
    },
  },
  args: {
    children: 'hamburgefons',
    component: 'span',
    variant: 'displayHeading',
    color: 'primary',
    textTransform: 'capitalize',
  },
};
