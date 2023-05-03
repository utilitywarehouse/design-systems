import { TextLink } from './TextLink';
import type { Meta, StoryObj } from '@storybook/react';
import { Backgrounds } from '../storybook-utils';
import { Text, TextProps, textVariantMapping } from '../Text';
import { headingVariantMapping } from '../Heading';
import { Stack } from '../Stack';

const meta: Meta<typeof TextLink> = {
  title: 'Web UI / Components / TextLink',
  component: TextLink,
};

export default meta;
type Story = StoryObj<typeof TextLink>;

const textVariants = Object.keys(textVariantMapping);
const variants = [...textVariants, ...Object.keys(headingVariantMapping)];

export const Workshop: Story = {
  render: args => {
    return (
      <Backgrounds>
        <TextLink href="#" {...args} />
      </Backgrounds>
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

export const InlineTextLink: Story = {
  name: 'Inline TextLink',
  render: () => {
    return (
      <Backgrounds>
        <Stack spacing={2}>
          {textVariants.map(v => (
            <Text component="span" variant={v as TextProps['variant']}>
              This is a <TextLink href="#">text link</TextLink>, wrapped in a {v} Text component.
            </Text>
          ))}
        </Stack>
      </Backgrounds>
    );
  },
};
