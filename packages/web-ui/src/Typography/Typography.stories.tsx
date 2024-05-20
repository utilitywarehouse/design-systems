import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { ThemeProvider } from '../ThemeProvider';
import { headingVariantMapping, textVariantMapping } from './LegacyTypography';
import { Typography } from './Typography';
import { Backgrounds } from '../storybook-utils';
import { Flex } from '../Flex';

const textVariants = Object.keys(textVariantMapping);
const headingVariants = Object.keys(headingVariantMapping);

const meta: Meta<typeof Typography> = {
  title: 'Web UI / Deprecated / Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Workshop: Story = {
  argTypes: {
    color: { control: { type: 'text' } },
    fontWeight: {
      options: ['regular', 'semibold'],
      control: { type: 'radio' },
    },
    textTransform: {
      options: ['capitalize', 'uppercase', 'lowercase', 'none'],
      control: { type: 'radio' },
    },
    letterSpacing: { control: { type: 'text' } },
    component: { control: { type: 'text' } },
  },
  args: {
    children: 'hamburgefons',
    fontWeight: 'regular',
    color: colorsCommon.brandPrimaryPurple,
    textTransform: 'capitalize',
  },
};

export const KitchenSink: Story = {
  parameters: { layout: 'fullscreen' },
  decorators: [
    Story => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  render: args => (
    <Backgrounds>
      <Flex direction="column">
        {[...headingVariants, ...textVariants].map(variant => (
          <Typography key={variant} {...args} variant={variant} gutterBottom />
        ))}
      </Flex>
    </Backgrounds>
  ),
  argTypes: {
    color: { options: ['primary', 'secondary', 'success', 'error'], control: { type: 'radio' } },
    fontWeight: { options: ['regular', 'semibold'], control: { type: 'radio' } },
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
    color: 'primary',
    textTransform: 'capitalize',
  },
};
