import * as React from 'react';
import { Link, LinkProps } from './Link';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '../Text';
import { Stack } from '../Stack';
import { Box } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { ThemeProvider } from '../ThemeProvider';

const meta: Meta<typeof Link> = {
  title: 'Web UI / Components / Link',
  component: Link,
  decorators: [
    Story => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Link>;

const textVariants = ['subtitle', 'body', 'legalNote', 'caption'] as const;
const variants = ['displayHeading', 'h1', 'h2', 'h3', 'h4', ...textVariants] as const;

export const Workshop: Story = {
  render: args => {
    return (
      <Stack>
        {[colorsCommon.brandWhite, colorsCommon.brandPrimaryPurple, colorsCommon.brandMidnight].map(
          bg => (
            <Box key={bg} background={bg} display="flex" justifyContent="center" padding={4}>
              <Link href="#" {...args} />
            </Box>
          )
        )}
      </Stack>
    );
  },
  argTypes: {
    children: {
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
    textTransform: {
      options: ['none', 'lowercase', 'uppercase', 'capitalize'] as const,
      control: {
        type: 'radio',
      },
    },
  },
  args: {
    children: 'Link',
    variant: 'body',
    href: '#',
  },
};

export const LinkVariants: Story = {
  name: 'Variants',
  render: () => {
    return (
      <Stack spacing={1}>
        {variants.map(variant => (
          <Link key={variant} variant={variant as LinkProps['variant']}>
            hamburgefons ({variant})
          </Link>
        ))}
      </Stack>
    );
  },
};

export const InlineLink: Story = {
  name: 'Inline Link',
  render: () => {
    return (
      <Stack>
        {[colorsCommon.brandWhite, colorsCommon.brandPrimaryPurple, colorsCommon.brandMidnight].map(
          bg => (
            <Box key={bg} background={bg} display="flex" justifyContent="center" padding={4}>
              <Stack spacing={2}>
                {textVariants.map(v => (
                  <Text key={v} component="span" variant={v as TextProps['variant']}>
                    This is a <Link href="#">link</Link>, wrapped in a {v} Text component.
                  </Text>
                ))}
              </Stack>
            </Box>
          )
        )}
      </Stack>
    );
  },
};
