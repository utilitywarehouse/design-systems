import { TextLink, TextLinkProps } from './TextLink';
import type { Meta, StoryObj } from '@storybook/react';
import { Backgrounds } from '../storybook-utils';
import { Text, TextProps } from '../Text';
import { Stack } from '../Stack';
import { Box } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { headingVariantMapping, textVariantMapping } from '../Typography/LegacyTypography';
import { Typography } from '../Typography';
import { ThemeProvider } from '../ThemeProvider';

const meta: Meta<typeof TextLink> = {
  title: 'Web UI / Components / TextLink',
  component: TextLink,
  decorators: [
    Story => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextLink>;

const textVariants = Object.keys(textVariantMapping);
const variants = [...Object.keys(headingVariantMapping), ...textVariants];

export const Workshop: Story = {
  render: args => {
    return (
      <Stack>
        {[colorsCommon.brandWhite, colorsCommon.brandPrimaryPurple, colorsCommon.brandMidnight].map(
          bg => (
            <Box key={bg} background={bg} display="flex" justifyContent="center" padding={4}>
              <TextLink href="#" {...args} />
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
    children: 'Text link',
    variant: 'body',
    href: '#',
  },
};

export const TextLinkVariants: Story = {
  name: 'Variants',
  render: () => {
    return (
      <Stack spacing={1}>
        {variants.map(variant => (
          <TextLink variant={variant as TextLinkProps['variant']}>
            hamburgefons ({variant})
          </TextLink>
        ))}
      </Stack>
    );
  },
};

export const InlineTextLink: Story = {
  name: 'Inline TextLink',
  render: () => {
    return (
      <Stack>
        {[colorsCommon.brandWhite, colorsCommon.brandPrimaryPurple, colorsCommon.brandMidnight].map(
          bg => (
            <Box key={bg} background={bg} display="flex" justifyContent="center" padding={4}>
              <Stack spacing={2}>
                {textVariants.map(v => (
                  <Text component="span" variant={v as TextProps['variant']}>
                    This is a <TextLink href="#">text link</TextLink>, wrapped in a {v} Text
                    component.
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

export const TextLinkColor: Story = {
  name: 'On legacy Background',
  render: () => {
    return (
      <Backgrounds>
        <Stack spacing={4}>
          {textVariants.map(v => (
            <Stack spacing={1}>
              <TextLink href="#" variant={v as TextProps['variant']}>
                {v} text link
              </TextLink>
              <Typography component="span" variant={v as TextProps['variant']}>
                This is a <TextLink href="#">text link</TextLink>, wrapped in a {v} Typography
                component.
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Backgrounds>
    );
  },
};
