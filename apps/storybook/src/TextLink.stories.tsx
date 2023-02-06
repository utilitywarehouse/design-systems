import * as React from 'react';
import { Story, Meta, ArgTypes } from '@storybook/react';
import { Stack, Typography, TextLink } from '@utilitywarehouse/web-ui';
import type { TypographyProps, TextLinkProps } from '@utilitywarehouse/web-ui';
import BackgroundStack from './BackgroundStack';

const typographyVariants = [
  'displayHeading',
  'h1',
  'h2',
  'h3',
  'h4',
  'subtitle',
  'body',
  'legalNote',
  'caption',
  'inherit',
] as const;

export default {
  title: 'Components/TextLink',
  component: TextLink,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    typographyVariant: {
      control: {
        type: 'radio',
        options: typographyVariants,
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: typographyVariants,
      },
    },
    textTransform: {
      control: {
        type: 'radio',
        options: ['none', 'lowercase', 'uppercase', 'capitalize'] as const,
      },
    },
  },
  args: {
    children: 'text link',
    typographyVariant: 'body',
    variant: 'body',
    textTransform: 'capitalize',
  },
} as Meta;

export const TextLinkStandaloneStory: Story<
  TextLinkProps & { typographyVariant: TypographyProps['variant'] }
> = args => {
  return (
    <BackgroundStack>
      <Stack spacing={2}>
        <TextLink href="#" {...args} />
      </Stack>
    </BackgroundStack>
  );
};

TextLinkStandaloneStory.storyName = 'Standalone';
TextLinkStandaloneStory.argTypes = {
  typographyVariant: { table: { disable: true } },
  sx: { table: { disable: true } },
};

export const TextLinkInlineStory: Story<
  TextLinkProps & { typographyVariant: TypographyProps['variant'] }
> = args => {
  const { typographyVariant, ...rest } = args;
  return (
    <BackgroundStack>
      <Stack spacing={2}>
        <Typography component="span" variant={typographyVariant}>
          This is an inline{' '}
          <TextLink href="#" {...rest}>
            link
          </TextLink>
          .
        </Typography>
      </Stack>
    </BackgroundStack>
  );
};

TextLinkInlineStory.storyName = 'Inline';
TextLinkInlineStory.args = {
  textTransform: 'none',
  variant: undefined,
} as TextLinkProps;
TextLinkInlineStory.argTypes = {
  variant: { table: { disable: true } },
  sx: { table: { disable: true } },
  textTransform: { table: { disable: true } },
} as ArgTypes<TextLinkProps>;
