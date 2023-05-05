import type { Meta, StoryObj } from '@storybook/react';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { Backgrounds } from '../storybook-utils';
import { headingVariantMapping } from '../Heading';
import { textVariantMapping } from '../Text';
import { Typography } from './Typography';

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
    variant: {
      options: [undefined, ...headingVariants, ...textVariants],
      control: {
        type: 'radio',
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
<<<<<<< HEAD
    color: colorsCommon.brandPrimaryPurple,
    textTransform: 'capitalize',
  },
};

export const LegacyVariants: Story = {
  name: 'Deprecated Legacy Variants',
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
    fontFamily: 'fontFamily.secondary',
    color: colorsCommon.brandPrimaryPurple,
    textTransform: 'capitalize',
  },
};
