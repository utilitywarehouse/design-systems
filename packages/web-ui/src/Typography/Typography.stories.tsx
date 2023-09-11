import type { Meta, StoryObj } from '@storybook/react';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { Background } from '../Background';
import { Flex } from '../Flex';
import { fontWeights } from '../tokens';
import { backgroundColors } from '../types';
import { headingVariantMapping, textVariantMapping } from './LegacyTypography';
import { Typography } from './Typography';

const textVariants = Object.keys(textVariantMapping);
const headingVariants = Object.keys(headingVariantMapping);

const meta: Meta<typeof Typography> = {
  title: 'Web UI / Typography / Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Workshop: Story = {
  argTypes: {
    color: { control: { type: 'text' } },
    fontFamily: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    weight: {
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
    fontFamily: 'secondary',
    weight: 'regular',
    color: colorsCommon.brandPrimaryPurple,
    textTransform: 'capitalize',
  },
};

export const LegacyVariants: Story = {
  name: 'Deprecated Legacy Variants',
  parameters: { layout: 'fullscreen' },
  render: args => (
    <Flex direction="column" gap={0}>
      {backgroundColors.map(bg => (
        <Background
          key={bg}
          backgroundColor={bg as any}
          display="flex"
          justifyContent="center"
          padding={4}
        >
          <Typography {...args} />
        </Background>
      ))}
    </Flex>
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
