import type { Meta, StoryObj } from '@storybook/react';
import { colorsCommon } from '@utilitywarehouse/colour-system';
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
    color: colorsCommon.brandPrimaryPurple,
    textTransform: 'capitalize',
    padding: 0,
    margin: 0,
    variant: undefined,
  },
};
